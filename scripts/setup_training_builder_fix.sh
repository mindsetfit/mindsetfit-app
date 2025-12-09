#!/usr/bin/env bash
set -e

echo "===================================================="
echo " RECRIANDO TRAINING-BUILDER (CORREÇÃO COMPLETA) 🔧"
echo "===================================================="

TARGET="src/components/custom/training-builder.tsx"

mkdir -p src/components/custom

cat << 'EOT' > $TARGET
"use client";

import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ---------------------------------------------
// Estruturas de dados
// ---------------------------------------------
type Exercise = {
  name: string;
  setsReps: string;
  duration: string;
  group: string;
  note: string;
};

type TrainingPlan = {
  title: string;
  focus: string;
  duration: string;
  exercises: Exercise[];
};

// ---------------------------------------------
// Sugestões reais com variações de exercícios
// ---------------------------------------------
const suggestedPlans: TrainingPlan[] = [
  {
    title: "Treino 1 – Peito (ênfase técnica e volume) • variação 1",
    focus: "Peito (ênfase técnica e volume)",
    duration: "90 min",
    exercises: [
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
      }
    ]
  },

  {
    title: "Treino 1 – Peito (ênfase técnica e volume) • variação 2",
    focus: "Peito (ênfase técnica e volume)",
    duration: "90 min",
    exercises: [
      {
        name: "Supino declinado com barra",
        setsReps: "3–4 séries",
        duration: "50s",
        group: "PEITO",
        note: "Mantenha lombar sustentada."
      },
      {
        name: "Crossover polia alta",
        setsReps: "3–4 séries",
        duration: "45s",
        group: "PEITO",
        note: "Amplitude completa."
      },
      {
        name: "Flexão de braço",
        setsReps: "3 séries",
        duration: "40s",
        group: "PEITO",
        note: "Velocidade constante."
      }
    ]
  },

  {
    title: "Treino 1 – Peito (ênfase técnica e volume) • variação 3",
    focus: "Peito (ênfase técnica e volume)",
    duration: "90 min",
    exercises: [
      {
        name: "Supino inclinado com barra",
        setsReps: "3–4 séries",
        duration: "50s",
        group: "PEITO",
        note: "Foque no meio do peito."
      },
      {
        name: "Peck deck (voador)",
        setsReps: "3–4 séries",
        duration: "45s",
        group: "PEITO",
        note: "Segure 1s no pico."
      },
      {
        name: "Crucifixo reto",
        setsReps: "3–4 séries",
        duration: "45s",
        group: "PEITO",
        note: "Evite hiperextensão."
      }
    ]
  }
];

// ---------------------------------------------
// Builder do treino personalizado
// ---------------------------------------------
export default function TrainingBuilder() {
  const [customPlan, setCustomPlan] = useState<Exercise[]>([]);
  const customSectionRef = useRef<HTMLDivElement | null>(null);
  const [completedSessions, setCompletedSessions] = useState<
    { date: string; effort: string; notes: string; planTitle: string }[]
  >([]);

  // Lista combinada de exercícios disponíveis
  const availableExercises = Array.from(
    new Map(
      suggestedPlans
        .flatMap((p) => p.exercises)
        .map((ex) => [ex.name, ex])
    ).values()
  );

  const addExerciseToCustom = (ex: Exercise) => {
    setCustomPlan((prev) => [...prev, ex]);
  };

  const useSuggestedAsBase = (plan: TrainingPlan) => {
    setCustomPlan(plan.exercises);
    customSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const registerSession = (form: FormData, planTitle: string) => {
    const date = form.get("date")?.toString() || "";
    const effort = form.get("effort")?.toString() || "";
    const notes = form.get("notes")?.toString() || "";

    setCompletedSessions((prev) => [
      ...prev,
      { date, effort, notes, planTitle }
    ]);
  };

  return (
    <div className="space-y-12">

      {/* --------------------------------------------- */}
      {/* Sugestões automáticas */}
      {/* --------------------------------------------- */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Sugestões automáticas de treino</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Selecione um treino base e personalize como quiser.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {suggestedPlans.map((plan, index) => (
            <Card key={index} className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  {plan.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-2">
                {plan.exercises.map((ex, i) => (
                  <div
                    key={i}
                    className="rounded-lg border p-3 bg-background/50"
                  >
                    <p className="font-medium">{ex.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Duração: {ex.duration} • {ex.setsReps}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {ex.group} • {ex.note}
                    </p>
                  </div>
                ))}

                <Button
                  className="w-full mt-4"
                  onClick={() => useSuggestedAsBase(plan)}
                >
                  Usar como referência no treino personalizado
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* --------------------------------------------- */}
      {/* Montar treino personalizado */}
      {/* --------------------------------------------- */}
      <section ref={customSectionRef}>
        <h2 className="text-2xl font-bold mb-2">Montar treino personalizado</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Clique em um exercício para adicioná-lo ao seu treino.
        </p>

        <Card className="border-primary/10 mb-4">
          <CardHeader>
            <CardTitle>Treinos Disponíveis</CardTitle>
          </CardHeader>

          <CardContent className="space-y-2">
            {availableExercises.map((ex, i) => (
              <button
                key={i}
                className="w-full text-left p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition"
                onClick={() => addExerciseToCustom(ex)}
              >
                <p className="font-medium">{ex.name}</p>
                <p className="text-xs text-muted-foreground">
                  {ex.duration} • {ex.setsReps}
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
                Nenhum exercício adicionado ainda.
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

      {/* --------------------------------------------- */}
      {/* Registrar treino realizado */}
      {/* --------------------------------------------- */}
      <section>
        <h2 className="text-2xl font-bold mb-2">Registrar treino realizado</h2>

        {customPlan.length === 0 ? (
          <Card className="border-primary/10 p-6">
            <p className="text-yellow-400 font-medium mb-2">
              ⚠ Nenhum Plano de Treino Ativo
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Crie ou selecione um plano de treino para registrar seu treino.
            </p>

            <Button
              onClick={() =>
                customSectionRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Criar Plano de Treino
            </Button>
          </Card>
        ) : (
          <Card className="border-primary/10 p-6">
            <form
              action={(formData) =>
                registerSession(formData, "Treino Personalizado")
              }
              className="space-y-4"
            >
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

              <Button className="w-full" type="submit">
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
echo " TRAINING-BUILDER RECRIADO COM SUCESSO ✔"
echo " Arquivo atualizado: src/components/custom/training-builder.tsx"
echo "===================================================="
