#!/usr/bin/env bash
set -e

echo "===================================================="
echo "  AJUSTANDO MÓDULO DE TREINOS — FILTROS POR GRUPO  "
echo "===================================================="

TARGET="src/components/custom/training-builder.tsx"
mkdir -p src/components/custom

cat << 'EOT' > "$TARGET"
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Exercise = {
  name: string;
  duration: string;
  setsReps: string;
  rest: string;
  groupLabel: string;
  note: string;
};

type ExerciseCategory = {
  label: string;
  exercises: Exercise[];
};

type MuscleGroupKey =
  | "peito"
  | "costas"
  | "ombros"
  | "biceps"
  | "triceps"
  | "quadriceps"
  | "posterior"
  | "gluteos"
  | "panturrilhas"
  | "core"
  | "antebraco"
  | "lombar";

const EXERCISES_BY_GROUP: Record<
  MuscleGroupKey,
  { label: string; categories: ExerciseCategory[] }
> = {
  peito: {
    label: "Peito",
    categories: [
      {
        label: "Compostos",
        exercises: [
          {
            name: "Supino reto com barra",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Peito",
            note: "Retraia as escápulas e mantenha punhos alinhados.",
          },
          {
            name: "Supino inclinado com barra ou halteres",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Peito",
            note: "Controle a descida e evite arqueamento excessivo.",
          },
          {
            name: "Supino declinado",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Peito",
            note: "Mantenha a lombar estável e barra próxima ao peito.",
          },
        ],
      },
      {
        label: "Máquinas",
        exercises: [
          {
            name: "Supino máquina",
            duration: "45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Peito",
            note: "Ajuste o banco para alinhar cotovelos ao peitoral.",
          },
          {
            name: "Voador máquina (peck deck)",
            duration: "45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Peito",
            note: "Concentre-se na contração do peitoral, não dos braços.",
          },
        ],
      },
      {
        label: "Isoladores",
        exercises: [
          {
            name: "Crucifixo inclinado com halteres",
            duration: "45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Peito",
            note: "Evite estender demais os ombros; movimento amplo e controlado.",
          },
          {
            name: "Crossover no cabo",
            duration: "45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Peito",
            note: "Finalize com pico de contração trazendo as mãos à frente do peito.",
          },
          {
            name: "Flexão de braço",
            duration: "40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Peito",
            note: "Mantenha tronco alinhado e abdômen firme.",
          },
        ],
      },
    ],
  },

  costas: {
    label: "Costas",
    categories: [
      {
        label: "Compostos",
        exercises: [
          {
            name: "Barra fixa",
            duration: "40–50s",
            setsReps: "3–4 séries",
            rest: "60–120s",
            groupLabel: "Costas",
            note: "Evite balançar o corpo; puxe com as costas, não com os braços.",
          },
          {
            name: "Remada curvada",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Costas",
            note: "Coluna neutra e cotovelos próximos ao tronco.",
          },
          {
            name: "Levantamento terra",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "90–120s",
            groupLabel: "Costas",
            note: "Mantenha lombar neutra e barra próxima ao corpo.",
          },
        ],
      },
      {
        label: "Máquinas e puxadas",
        exercises: [
          {
            name: "Puxada alta aberta",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Costas",
            note: "Evite elevar demais os ombros; foque no dorso.",
          },
          {
            name: "Remada baixa",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Costas",
            note: "Pense em trazer os cotovelos para trás, não as mãos.",
          },
          {
            name: "Remada unilateral com halter",
            duration: "45–50s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Costas",
            note: "Controle a rotação do tronco e mantenha apoio firme.",
          },
        ],
      },
      {
        label: "Isoladores",
        exercises: [
          {
            name: "Pullover com halter ou cabo",
            duration: "40–45s",
            setsReps: "3 séries",
            rest: "45–75s",
            groupLabel: "Costas",
            note: "Sinta o alongamento do dorso, evitando flexionar cotovelos demais.",
          },
        ],
      },
    ],
  },

  ombros: {
    label: "Ombros",
    categories: [
      {
        label: "Presses (compostos)",
        exercises: [
          {
            name: "Desenvolvimento com halteres",
            duration: "45–50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Ombros",
            note: "Evite hiperextender a lombar; mantenha core firme.",
          },
          {
            name: "Desenvolvimento militar barra",
            duration: "45–50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Ombros",
            note: "Comece com pegada ligeiramente mais aberta que os ombros.",
          },
        ],
      },
      {
        label: "Laterais",
        exercises: [
          {
            name: "Elevação lateral com halteres",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Ombros",
            note: "Braços semiflexionados e subida controlada até a linha dos ombros.",
          },
          {
            name: "Elevação frontal",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Ombros",
            note: "Evite usar impulso do tronco; mantenha ritmo constante.",
          },
        ],
      },
      {
        label: "Posterior / correção",
        exercises: [
          {
            name: "Crucifixo inverso",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Ombros",
            note: "Pense em abrir os cotovelos, não em balançar os braços.",
          },
          {
            name: "Face pull",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Ombros",
            note: "Puxe em direção à testa, mantendo cotovelos altos.",
          },
        ],
      },
    ],
  },

  biceps: {
    label: "Bíceps",
    categories: [
      {
        label: "Básicos",
        exercises: [
          {
            name: "Rosca direta barra W",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Bíceps",
            note: "Evite balanço do tronco; apenas antebraços se movem.",
          },
          {
            name: "Rosca alternada com halteres",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Bíceps",
            note: "Gire o punho para cima ao final do movimento.",
          },
        ],
      },
      {
        label: "Máquinas",
        exercises: [
          {
            name: "Rosca scott",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Bíceps",
            note: "Não trave totalmente o cotovelo na extensão.",
          },
        ],
      },
      {
        label: "Isoladores",
        exercises: [
          {
            name: "Rosca martelo",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Bíceps",
            note: "Mantenha punhos neutros, focando em antebraço e braquial.",
          },
          {
            name: "Rosca concentrada",
            duration: "35–40s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Bíceps",
            note: "Subida controlada e contração máxima no topo.",
          },
        ],
      },
    ],
  },

  triceps: {
    label: "Tríceps",
    categories: [
      {
        label: "Básicos",
        exercises: [
          {
            name: "Tríceps testa com barra",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Tríceps",
            note: "Cotovelos apontados para o teto, sem abrir demais.",
          },
        ],
      },
      {
        label: "Máquinas / cabo",
        exercises: [
          {
            name: "Tríceps pulley barra reta",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Tríceps",
            note: "Mantenha cotovelos fixos ao lado do corpo.",
          },
          {
            name: "Tríceps corda no pulley",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Tríceps",
            note: "Abra levemente a corda ao final para maior contração.",
          },
        ],
      },
      {
        label: "Isoladores",
        exercises: [
          {
            name: "Coice com halter",
            duration: "35–40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Tríceps",
            note: "Mantenha tronco estável e extensão completa do cotovelo.",
          },
        ],
      },
    ],
  },

  quadriceps: {
    label: "Quadríceps",
    categories: [
      {
        label: "Compostos",
        exercises: [
          {
            name: "Agachamento livre",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–120s",
            groupLabel: "Quadríceps",
            note: "Pise firme, joelhos alinhados e coluna neutra.",
          },
          {
            name: "Agachamento frontal",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–120s",
            groupLabel: "Quadríceps",
            note: "Mantenha o tronco mais ereto e abdômen firme.",
          },
        ],
      },
      {
        label: "Máquinas",
        exercises: [
          {
            name: "Leg press 45°",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Quadríceps",
            note: "Evite descer além do ponto em que perde a postura.",
          },
          {
            name: "Cadeira extensora",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Quadríceps",
            note: "Subida explosiva, descida controlada.",
          },
        ],
      },
      {
        label: "Acessórios",
        exercises: [
          {
            name: "Passada / avanço",
            duration: "45–50s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Quadríceps",
            note: "Mantenha joelho alinhado ao meio do pé.",
          },
        ],
      },
    ],
  },

  posterior: {
    label: "Posterior de coxa",
    categories: [
      {
        label: "Compostos",
        exercises: [
          {
            name: "Stiff com barra",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Posterior",
            note: "Desça até sentir alongamento sem perder a lombar neutra.",
          },
          {
            name: "Levantamento terra romeno",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Posterior",
            note: "Barra próxima ao corpo e quadril recuado.",
          },
        ],
      },
      {
        label: "Máquinas",
        exercises: [
          {
            name: "Mesa flexora",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Posterior",
            note: "Segure a contração final por 1–2 segundos.",
          },
          {
            name: "Flexora em pé",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Posterior",
            note: "Evite chutar; suba suave e desça controlando.",
          },
        ],
      },
    ],
  },

  gluteos: {
    label: "Glúteos",
    categories: [
      {
        label: "Compostos",
        exercises: [
          {
            name: "Agachamento sumô",
            duration: "50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Glúteos",
            note: "Pés afastados, pontas para fora e quadril projetado para trás.",
          },
        ],
      },
      {
        label: "Máquinas",
        exercises: [
          {
            name: "Glúteo máquina",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Glúteos",
            note: "Empurre com o calcanhar, não com a lombar.",
          },
        ],
      },
      {
        label: "Isoladores",
        exercises: [
          {
            name: "Elevação pélvica (hip thrust)",
            duration: "45–50s",
            setsReps: "3–4 séries",
            rest: "60–90s",
            groupLabel: "Glúteos",
            note: "Pausa no pico da contração e queixo próximo ao peito.",
          },
          {
            name: "Glúteo 4 apoios",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Glúteos",
            note: "Mantenha quadril alinhado e movimento controlado.",
          },
        ],
      },
    ],
  },

  panturrilhas: {
    label: "Panturrilhas",
    categories: [
      {
        label: "Em pé",
        exercises: [
          {
            name: "Panturrilha em pé",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Panturrilhas",
            note: "Suba na ponta dos pés e desça até sentir alongamento.",
          },
        ],
      },
      {
        label: "Sentado / máquinas",
        exercises: [
          {
            name: "Panturrilha sentada",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Panturrilhas",
            note: "Foque em movimentos de subida e descida completos.",
          },
          {
            name: "Panturrilha no leg press",
            duration: "40–45s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Panturrilhas",
            note: "Empurre apenas com o tornozelo, sem flexionar joelhos.",
          },
        ],
      },
    ],
  },

  core: {
    label: "Core / Abdômen",
    categories: [
      {
        label: "Abdominais superiores",
        exercises: [
          {
            name: "Crunch abdominal",
            duration: "30–40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Core",
            note: "Suba pensando em aproximar costelas do quadril.",
          },
          {
            name: "Abdominal solo",
            duration: "30–40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Core",
            note: "Evite puxar o pescoço com as mãos.",
          },
        ],
      },
      {
        label: "Inferiores",
        exercises: [
          {
            name: "Elevação de pernas",
            duration: "30–40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Core",
            note: "Não deixe a lombar desgrudar completamente do banco.",
          },
          {
            name: "Abdominal infra no banco",
            duration: "30–40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Core",
            note: "Suba controlando, sem balançar as pernas.",
          },
        ],
      },
      {
        label: "Estabilização",
        exercises: [
          {
            name: "Prancha isométrica",
            duration: "30–45s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Core",
            note: "Mantenha lombar neutra e abdômen firme.",
          },
          {
            name: "Prancha lateral",
            duration: "30–40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Core",
            note: "Corpo em linha reta, sem deixar o quadril cair.",
          },
        ],
      },
    ],
  },

  antebraco: {
    label: "Antebraço",
    categories: [
      {
        label: "Flexores / extensores",
        exercises: [
          {
            name: "Rosca punho",
            duration: "30–40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Antebraço",
            note: "Movimento curto, foque apenas no punho.",
          },
          {
            name: "Extensão de punho",
            duration: "30–40s",
            setsReps: "3–4 séries",
            rest: "30–60s",
            groupLabel: "Antebraço",
            note: "Use carga moderada para evitar sobrecarga articular.",
          },
        ],
      },
    ],
  },

  lombar: {
    label: "Lombar / Mobilidade",
    categories: [
      {
        label: "Fortalecimento",
        exercises: [
          {
            name: "Extensão lombar",
            duration: "30–40s",
            setsReps: "3–4 séries",
            rest: "45–75s",
            groupLabel: "Lombar",
            note: "Suba até alinhar o tronco ao quadril, sem hiperextender.",
          },
        ],
      },
      {
        label: "Mobilidade e alongamento",
        exercises: [
          {
            name: "Mobilidade de quadril",
            duration: "30–40s",
            setsReps: "2–3 séries",
            rest: "30–60s",
            groupLabel: "Lombar",
            note: "Movimentos suaves, sem dor; foque na amplitude.",
          },
          {
            name: "Alongamento de isquiotibiais",
            duration: "30–40s",
            setsReps: "2–3 séries",
            rest: "30–60s",
            groupLabel: "Lombar",
            note: "Mantenha a postura neutra enquanto alonga.",
          },
        ],
      },
    ],
  },
};

export default function TrainingBuilder() {
  const [selectedGroup, setSelectedGroup] =
    useState<MuscleGroupKey>("peito");
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>(
    []
  );

  const groupKeys = Object.keys(
    EXERCISES_BY_GROUP
  ) as MuscleGroupKey[];

  const handleToggleExercise = (exercise: Exercise) => {
    setSelectedExercises((prev) => {
      const exists = prev.some(
        (e) =>
          e.name === exercise.name &&
          e.groupLabel === exercise.groupLabel
      );
      if (exists) {
        return prev.filter(
          (e) =>
            !(
              e.name === exercise.name &&
              e.groupLabel === exercise.groupLabel
            )
        );
      }
      return [...prev, exercise];
    });
  };

  const currentGroup = EXERCISES_BY_GROUP[selectedGroup];

  return (
    <div className="space-y-10 pb-10">
      {/* CABEÇALHO */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Montar treino personalizado</h2>
        <p className="text-sm text-muted-foreground">
          Escolha um grupamento muscular e use os filtros abaixo para
          selecionar os exercícios, séries, repetições e intervalos de
          descanso.
        </p>
        <p className="text-xs text-muted-foreground">
          Descanso recomendado entre as séries:{" "}
          <span className="font-medium">6 a 120 segundos</span>, de acordo
          com a intensidade e o seu nível atual.
        </p>
      </section>

      {/* ABAS DE GRUPAMENTOS MUSCULARES */}
      <section className="space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-1">
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

        {/* FILTROS DE EXERCÍCIOS (FORMATO PÍLULA) */}
        <div className="space-y-6">
          {currentGroup.categories.map((category, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-sm font-medium">{category.label}</h3>
              <div className="w-full h-px bg-white/10" />

              <div className="flex flex-wrap gap-2">
                {category.exercises.map((exercise, i) => {
                  const isSelected = selectedExercises.some(
                    (e) =>
                      e.name === exercise.name &&
                      e.groupLabel === exercise.groupLabel
                  );
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleToggleExercise(exercise)}
                      className={`rounded-full border px-3 py-2 text-left text-xs transition whitespace-normal ${
                        isSelected
                          ? "border-primary bg-primary/20"
                          : "border-white/10 bg-background/40 hover:bg-background/70"
                      }`}
                    >
                      <span className="block font-medium text-[12px]">
                        {exercise.name}
                      </span>
                      <span className="block text-[11px] text-muted-foreground">
                        {exercise.duration} • {exercise.setsReps} • Descanso{" "}
                        {exercise.rest}
                      </span>
                      <span className="block text-[11px] text-muted-foreground italic">
                        Dica: {exercise.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESUMO DO TREINO SELECIONADO */}
      <section>
        <Card className="border-primary/10 bg-background/40">
          <CardHeader>
            <CardTitle className="text-lg">
              Exercícios selecionados para o treino
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {selectedExercises.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Nenhum exercício selecionado ainda. Use os filtros acima
                para montar o seu treino personalizado.
              </p>
            ) : (
              selectedExercises.map((exercise, index) => (
                <div
                  key={`${exercise.name}-${index}`}
                  className="text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0"
                >
                  <p className="font-medium">
                    {exercise.groupLabel} — {exercise.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {exercise.duration} • {exercise.setsReps} • Descanso{" "}
                    {exercise.rest}
                  </p>
                  <p className="text-xs text-muted-foreground italic">
                    Dica: {exercise.note}
                  </p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
EOT

echo "===================================================="
echo " TREINO PERSONALIZADO POR FILTROS ATUALIZADO ✔"
echo " Arquivo ajustado: src/components/custom/training-builder.tsx"
echo "===================================================="
