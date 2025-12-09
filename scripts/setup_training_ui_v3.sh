#!/usr/bin/env bash
set -e

echo "=============================================="
echo "  MindsetFit – TRAINING UI v3.0 (premium)     "
echo "=============================================="

TARGET="src/components/custom/training-builder.tsx"

mkdir -p src/components/custom

cat << 'EOT' > "$TARGET"
"use client";

import React, { useMemo, useState } from "react";
import {
  trainingDatabase,
  TrainingExercise,
} from "@/database/training_database";

type MuscleKey = keyof typeof trainingDatabase;

type ExerciseWithCategory = {
  categoria: string;
  exercise: TrainingExercise;
};

const TrainingBuilder: React.FC = () => {
  const muscleKeys = Object.keys(trainingDatabase) as MuscleKey[];

  const [selectedMuscle, setSelectedMuscle] = useState<MuscleKey>(
    (muscleKeys[0] as MuscleKey) || "peito"
  );
  const [selectedCategory, setSelectedCategory] = useState<string | "todas">(
    "todas"
  );
  const [selectedExercises, setSelectedExercises] = useState<TrainingExercise[]>(
    []
  );

  const currentGroup = trainingDatabase[selectedMuscle];

  const categories = useMemo(
    () => currentGroup?.categorias ?? [],
    [currentGroup]
  );

  const exercisesWithCategory: ExerciseWithCategory[] = useMemo(() => {
    if (!currentGroup) return [];
    return currentGroup.categorias.flatMap((cat) =>
      cat.exercicios.map((exercise) => ({
        categoria: cat.nome,
        exercise,
      }))
    );
  }, [currentGroup]);

  const filteredExercises: ExerciseWithCategory[] = useMemo(() => {
    if (selectedCategory === "todas") return exercisesWithCategory;
    return exercisesWithCategory.filter(
      (item) => item.categoria === selectedCategory
    );
  }, [exercisesWithCategory, selectedCategory]);

  const isSelected = (exercise: TrainingExercise) =>
    selectedExercises.some((e) => e.id === exercise.id);

  const toggleExercise = (exercise: TrainingExercise) => {
    setSelectedExercises((prev) =>
      prev.some((e) => e.id === exercise.id)
        ? prev.filter((e) => e.id !== exercise.id)
        : [...prev, exercise]
    );
  };

  return (
    <div className="w-full space-y-6">
      {/* Título principal */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          Montagem do Treino • MindsetFit Engine v3.0
        </h2>
        <p className="text-sm text-muted-foreground">
          Selecione o grupamento muscular, filtre por mini-categorias e monte o
          seu treino de forma individualizada, com foco em técnica, variedade e
          performance.
        </p>
      </div>

      {/* Seleção de Grupamento Muscular */}
      <section className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          Grupamento muscular
        </h3>
        <div className="flex flex-wrap gap-2">
          {muscleKeys.map((key) => {
            const isActive = key === selectedMuscle;
            const label = trainingDatabase[key].label;
            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setSelectedMuscle(key);
                  setSelectedCategory("todas");
                  setSelectedExercises([]);
                }}
                className={`px-3 py-1.5 rounded-full border text-xs md:text-sm transition ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-foreground border-border hover:bg-muted"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Mini-categorias */}
      {currentGroup && (
        <section className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            Mini-categorias de {currentGroup.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory("todas")}
              className={`px-3 py-1.5 rounded-full border text-xs md:text-sm transition ${
                selectedCategory === "todas"
                  ? "bg-secondary text-secondary-foreground border-secondary shadow-sm"
                  : "bg-background text-foreground border-border hover:bg-muted"
              }`}
            >
              Todas
            </button>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.nome;
              return (
                <button
                  key={cat.nome}
                  type="button"
                  onClick={() => setSelectedCategory(cat.nome)}
                  className={`px-3 py-1.5 rounded-full border text-xs md:text-sm transition ${
                    isActive
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-sm"
                      : "bg-background text-foreground border-border hover:bg-muted"
                  }`}
                >
                  {cat.nome}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground">
            Toque nas mini-categorias para filtrar os exercícios de{" "}
            {currentGroup.label.toLowerCase()} por foco específico (compostos,
            máquinas, isoladores, variações avançadas, etc.).
          </p>
        </section>
      )}

      {/* Lista de exercícios (filtro em formato de lista limpa, mobile-first) */}
      <section className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          Exercícios disponíveis
        </h3>

        {filteredExercises.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Nenhum exercício encontrado para este filtro. Ajuste o grupamento ou
            a mini-categoria.
          </p>
        ) : (
          <div className="space-y-2">
            {filteredExercises.map(({ categoria, exercise }) => {
              const active = isSelected(exercise);
              return (
                <button
                  key={exercise.id}
                  type="button"
                  onClick={() => toggleExercise(exercise)}
                  className={`w-full text-left rounded-2xl border px-3 py-2.5 md:px-4 md:py-3 transition ${
                    active
                      ? "bg-primary/5 border-primary/60 shadow-sm"
                      : "bg-background border-border hover:bg-muted/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold leading-tight">
                        {exercise.nome}
                      </p>
                      <p className="text-[11px] md:text-xs text-muted-foreground">
                        {categoria}
                      </p>
                    </div>
                    {active && (
                      <span className="text-[11px] md:text-xs font-medium px-2 py-1 rounded-full bg-primary text-primary-foreground">
                        No meu treino
                      </span>
                    )}
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[11px] md:text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full bg-muted">
                      ⏱ {exercise.duracao}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-muted">
                      📊 {exercise.series}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-muted">
                      🧘 Descanso: {exercise.descanso}
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] md:text-xs italic text-muted-foreground">
                    Dica técnica: {exercise.dica}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Resumo do Treino do Usuário */}
      <section className="space-y-2 border-t pt-4 mt-4">
        <h3 className="text-sm font-medium text-muted-foreground">
          Meu treino do dia ({selectedExercises.length} exercício
          {selectedExercises.length === 1 ? "" : "s"})
        </h3>

        {selectedExercises.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            Toque nos exercícios acima para adicionar ao seu treino. Você pode
            montar combinações específicas por grupamento, nível e objetivo.
          </p>
        ) : (
          <div className="space-y-1.5">
            {selectedExercises.map((exercise) => (
              <div
                key={exercise.id}
                className="flex items-start justify-between gap-2 rounded-xl bg-muted px-3 py-2"
              >
                <div>
                  <p className="text-xs md:text-sm font-medium">
                    {exercise.nome}
                  </p>
                  <p className="text-[11px] md:text-xs text-muted-foreground">
                    {exercise.series} • {exercise.duracao} • Descanso:{" "}
                    {exercise.descanso}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleExercise(exercise)}
                  className="text-[11px] md:text-xs text-muted-foreground hover:text-destructive"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}

        <p className="text-[11px] md:text-xs text-muted-foreground">
          Em breve, esta seleção poderá ser integrada com PDF, IA de treino e
          histórico de evolução dentro do MindsetFit.
        </p>
      </section>
    </div>
  );
};

export default TrainingBuilder;
EOT

echo "Arquivo atualizado: $TARGET"
echo "Training UI v3.0 aplicada com sucesso."
