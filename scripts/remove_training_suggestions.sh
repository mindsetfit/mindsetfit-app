#!/usr/bin/env bash
set -e

echo "===================================================="
echo " REMOVENDO SEÇÃO 'SUGESTÕES AUTOMÁTICAS DE TREINO' "
echo " E RECRIANDO TRAINING-BUILDER SEM ESSA PARTE       "
echo "===================================================="

TARGET="src/components/custom/training-builder.tsx"
mkdir -p src/components/custom

cat << 'EOT' > $TARGET
"use client";

import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Exercise = {
  name: string;
  setsReps: string;
  duration: string;
  group: string;
  note: string;
};

type CompletedSession = {
  date: string;
  effort: string;
  notes: string;
  planTitle: string;
};

// Lista fixa de exercícios disponíveis (pode ser ajustada depois)
const availableExercises: Exercise[] = [
  {
    name: "Supino reto com barra",
    setsReps: "3–4 séries",
    duration: "50s",
    group: "PEITO",
    note: "Mantenha escápulas retraídas."
  },
  {
    name: "Supino inclinado com halteres",
    setsReps: "3–4 séries",
    duration: "50s",
    group: "PEITO",
    note: "Controle total na descida."
  },
  {
    name: "Crucifixo inclinado",
    setsReps: "3–4 séries",
    duration: "45s",
    group: "PEITO",
    note: "Evite estender demais o ombro."
  },
  {
    name: "Tríceps testa com barra",
    setsReps: "3–4 séries",
    duration: "45s",
    group: "TRÍCEPS",
    note: "Cotovelo estável, sem abrir demais."
  },
  {
    name: "Tríceps pulley",
    setsReps: "3–4 séries",
    duration: "45s",
    group: "TRÍCEPS",
    note: "Controle na volta, nada de soltar peso."
  }
];

export default function TrainingBuilder() {
  const [customPlan, setCustomPlan] = useState<Exercise[]>([]);
  const [completedSessions, setCompletedSessions] = useState<CompletedSession[]>([]);
  const customSectionRef = useRef<HTMLDivElement | null>(null);

  const addExerciseToCustom = (ex: Exercise) => {
    setCustomPlan((prev) => [...prev, ex]);
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const date = form.get("date")?.toString() || "";
    const effort = form.get("effort")?.toString() || "";
    const notes = form.get("notes")?.toString() || "";

    const newSession: CompletedSession = {
      date,
      effort,
      notes,
      planTitle: "Treino Personalizado"
    };

    setCompletedSessions((prev) => [...prev, newSession]);
    e.currentTarget.reset();
  };

  return (
    <div className="space-y-12">
      {/* Montar treino personalizado */}
      <section ref={customSectionRef}>
        <h2 className="text-2xl font-bold mb-2">Montar treino personalizado</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Use os exercícios abaixo para montar o seu treino, escolhendo
          combinações conforme seu objetivo.
        </p>

        <Card className="border-primary/10 mb-4">
          <CardHeader>
            <CardTitle>Treinos Disponíveis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {availableExercises.map((ex, i) => (
              <button
                key={i}
                type="button"
                className="w-full text-left p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition"
                onClick={() => addExerciseToCustom(ex)}
              >
                <p className="font-medium">{ex.name}</p>
                <p className="text-xs text-muted-foreground">
                  {ex.duration} • {ex.setsReps}
                </p>
                <p className="text-xs text-muted-foreground">
                  {ex.group} • {ex.note}
                </p>
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="border-primary/10">
          <CardHeader>
            <CardTitle>Seu Treino Personalizado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {customPlan.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Nenhum exercício adicionado ainda. Clique em um exercício da
                lista acima para montar o seu treino.
              </p>
            ) : (
              customPlan.map((ex, i) => (
                <div key={i} className="rounded-lg border p-3 bg-background/50">
                  <p className="font-medium">{ex.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {ex.duration} • {ex.setsReps}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {ex.group} • {ex.note}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </section>

      {/* Registrar treino realizado */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Registrar treino realizado</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Após o treino, registre data, percepção de esforço e observações.
          Isso ajuda a acompanhar sua evolução semana a semana.
        </p>

        {customPlan.length === 0 ? (
          <Card className="border-primary/10 p-6">
            <p className="text-yellow-400 font-medium mb-2">
              ⚠ Nenhum Plano de Treino Ativo
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Você precisa criar um plano de treino primeiro para registrar seus exercícios.
            </p>
            <Button
              type="button"
              onClick={() =>
                customSectionRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Criar Plano de Treino
            </Button>
          </Card>
        ) : (
          <Card className="border-primary/10 p-6">
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium">Data</label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full rounded bg-background/50 p-2 border mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Esforço</label>
                <select
                  name="effort"
                  required
                  className="w-full rounded bg-background/50 p-2 border mt-1"
                >
                  <option value="leve">Leve</option>
                  <option value="moderado">Moderado</option>
                  <option value="pesado">Pesado</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Observações</label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full rounded bg-background/50 p-2 border mt-1"
                />
              </div>

              <Button type="submit" className="w-full">
                Registrar treino
              </Button>
            </form>
          </Card>
        )}

        {completedSessions.length > 0 && (
          <div className="mt-4 text-sm text-muted-foreground">
            <p className="font-medium mb-1">Últimos registros:</p>
            {completedSessions.slice(-3).map((s, i) => (
              <p key={i}>
                • {s.date} — {s.planTitle} ({s.effort})
              </p>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
EOT

echo "===================================================="
echo " TRAINING-BUILDER ATUALIZADO (SEM SUGESTÕES AUTO.) ✔"
echo " Arquivo: src/components/custom/training-builder.tsx"
echo "===================================================="
