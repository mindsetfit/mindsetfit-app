#!/usr/bin/env bash
set -e

echo "===================================================="
echo "  CONFIGURANDO TREINOS POR GRUPAMENTOS MUSCULARES  "
echo "===================================================="

TARGET="src/components/custom/training-builder.tsx"
mkdir -p src/components/custom

cat << 'EOT' > "$TARGET"
"use client";

import { useState, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Exercise = {
  name: string;
  duration: string;
  setsReps: string;
  group: string;
  note: string;
};

type CompletedSession = {
  date: string | null;
  effort: string | null;
  notes: string | null;
  planTitle: string;
};

/*  
   BIBLIOTECA DE GRUPAMENTOS MUSCULARES  
   (podemos expandir depois com todos os exercícios do app)
*/
const EXERCISES_BY_GROUP: Record<
  string,
  { label: string; exercises: Exercise[] }
> = {
  peito: {
    label: "Peito",
    exercises: [
      {
        name: "Supino reto com barra",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "PEITO",
        note: "Mantenha escápulas retraídas.",
      },
      {
        name: "Supino inclinado com halteres",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "PEITO",
        note: "Controle total na descida.",
      },
      {
        name: "Crucifixo inclinado",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "PEITO",
        note: "Evite estender demais o ombro.",
      },
    ],
  },

  triceps: {
    label: "Tríceps",
    exercises: [
      {
        name: "Tríceps testa com barra",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "TRÍCEPS",
        note: "Cotovelo estável, sem abrir demais.",
      },
      {
        name: "Tríceps pulley",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "TRÍCEPS",
        note: "Controle na volta, nada de soltar peso.",
      },
    ],
  },

  costas: {
    label: "Costas",
    exercises: [
      {
        name: "Puxada alta aberta",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "COSTAS",
        note: "Não deixe o ombro avançar demais.",
      },
      {
        name: "Remada baixa",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "COSTAS",
        note: "Contração máxima na puxada.",
      },
    ],
  },

  ombros: {
    label: "Ombros",
    exercises: [
      {
        name: "Desenvolvimento com halteres",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "OMBROS",
        note: "Evite hiperextensão lombar.",
      },
      {
        name: "Elevação lateral",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "OMBROS",
        note: "Braços semiflexionados.",
      },
    ],
  },

  biceps: {
    label: "Bíceps",
    exercises: [
      {
        name: "Rosca direta barra W",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "BÍCEPS",
        note: "Evite balanço do tronco.",
      },
      {
        name: "Rosca alternada",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "BÍCEPS",
        note: "Rotação suave no movimento.",
      },
    ],
  },

  pernas: {
    label: "Pernas",
    exercises: [
      {
        name: "Agachamento livre",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "PERNAS",
        note: "Mantenha postura neutra.",
      },
      {
        name: "Leg press 45°",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "PERNAS",
        note: "Amplitude confortável e segura.",
      },
    ],
  },

  posterior: {
    label: "Posterior",
    exercises: [
      {
        name: "Stiff com barra",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "POSTERIOR",
        note: "Evite arredondar a lombar.",
      },
      {
        name: "Mesa flexora",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "POSTERIOR",
        note: "Segure a contração final.",
      },
    ],
  },

  gluteos: {
    label: "Glúteos",
    exercises: [
      {
        name: "Elevação pélvica",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "GLÚTEOS",
        note: "Pausar no pico da contração.",
      },
      {
        name: "Agachamento sumô",
        duration: "50s",
        setsReps: "3–4 séries",
        group: "GLÚTEOS",
        note: "Pés abertos e ponta voltada para fora.",
      },
    ],
  },

  core: {
    label: "Core",
    exercises: [
      {
        name: "Prancha isométrica",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "CORE",
        note: "Lombar neutra e abdômen firme.",
      },
      {
        name: "Abdominal infra",
        duration: "45s",
        setsReps: "3–4 séries",
        group: "CORE",
        note: "Evite puxar o pescoço.",
      },
    ],
  },
};

export default function TrainingBuilder() {
  const [selectedGroup, setSelectedGroup] =
    useState<keyof typeof EXERCISES_BY_GROUP>("peito");
  const [customPlan, setCustomPlan] = useState<Exercise[]>([]);
  const [completedSessions, setCompletedSessions] = useState<
    CompletedSession[]
  >([]);
  const customSectionRef = useRef<HTMLDivElement | null>(null);

  const groupKeys = Object.keys(
    EXERCISES_BY_GROUP
  ) as (keyof typeof EXERCISES_BY_GROUP)[];
  const selectedGroupData = EXERCISES_BY_GROUP[selectedGroup];

  const addExercise = (ex: Exercise) =>
    setCustomPlan((prev) => [...prev, ex]);

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const newSession: CompletedSession = {
      date: data.get("date"),
      effort: data.get("effort"),
      notes: data.get("notes"),
      planTitle: "Treino Personalizado",
    };

    setCompletedSessions((prev) => [...prev, newSession]);
    e.currentTarget.reset();
  };

  return (
    <div className="space-y-12">
      {/* MONTAR TREINO PERSONALIZADO */}
      <section ref={customSectionRef}>
        <h2 className="text-2xl font-bold mb-2">
          Montar treino personalizado
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Escolha um grupamento muscular e selecione os exercícios para montar
          o seu treino.
        </p>

        {/* ABAS DE GRUPAMENTOS */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
          {groupKeys.map((key) => (
            <Button
              key={key}
              variant={selectedGroup === key ? "default" : "secondary"}
              onClick={() => setSelectedGroup(key)}
              className="whitespace-nowrap"
            >
              {EXERCISES_BY_GROUP[key].label}
            </Button>
          ))}
        </div>

        {/* EXERCÍCIOS DO GRUPO SELECIONADO */}
        <Card className="border-primary/10 mb-4">
          <CardHeader>
            <CardTitle>
              Exercícios de {selectedGroupData.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {selectedGroupData.exercises.map((ex, i) => (
              <button
                key={i}
                type="button"
                onClick={() => addExercise(ex)}
                className="w-full text-left p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition"
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

        {/* LISTA DO TREINO PERSONALIZADO */}
        <Card className="border-primary/10">
          <CardHeader>
            <CardTitle>Seu Treino Personalizado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {customPlan.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Nenhum exercício adicionado ainda. Clique em um exercício
                acima para montar o seu treino.
              </p>
            ) : (
              customPlan.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-lg border p-3 bg-background/50"
                >
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

      {/* REGISTRAR TREINO REALIZADO */}
      <section>
        <h2 className="text-2xl font-bold mb-2">
          Registrar treino realizado
        </h2>

        {customPlan.length === 0 ? (
          <Card className="border-primary/10 p-6">
            <p className="text-yellow-400 font-medium mb-2">
              ⚠ Nenhum plano de treino ativo
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Monte um treino personalizado para registrar suas sessões.
            </p>
            <Button
              type="button"
              onClick={() =>
                customSectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Criar plano de treino
            </Button>
          </Card>
        ) : (
          <Card className="border-primary/10 p-6">
            <form className="space-y-4" onSubmit={handleRegisterSubmit}>
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
                  <option value="alto">Alto</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Observações
                </label>
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
echo " TREINO POR GRUPAMENTOS CRIADO COM SUCESSO ✔"
echo " Arquivo atualizado: src/components/custom/training-builder.tsx"
echo "===================================================="
