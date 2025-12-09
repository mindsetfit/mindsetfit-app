// =====================================================
// MINDSETFIT — BLOCO 24
// MOTOR DE AQUECIMENTO AUTOMÁTICO POR TREINO
// =====================================================

import { warmupMobility } from "./warmup_mobility";
import { gymExercises } from "./gym";
import { homeExercises } from "./home";
import { elasticExercises } from "./elastic";
import { kettlebellExercises } from "./kettlebell";

// -----------------------------------------------------
// MAPEAMENTO DE GRUPOS MUSCULARES → CHAVES DE MOBILIDADE
// -----------------------------------------------------
export const groupMap: Record<string, keyof typeof warmupMobility> = {
  quadriceps: "quadriceps",
  posterior: "posterior",
  gluteos: "gluteos",
  peito: "peito",
  costas: "costas",
  dorsal: "costas",
  lombar: "abdomen",
  ombros: "ombros",
  biceps: "biceps",
  triceps: "triceps",
  abdomen: "abdomen",
  core: "abdomen",
  panturrilha: "panturrilha",
  panturrilhas: "panturrilha",
};

// -----------------------------------------------------
// FUNÇÃO PARA IDENTIFICAR GRUPO PRINCIPAL DO TREINO
// -----------------------------------------------------
export function identifyMainGroup(exerciseList: string[]): string {
  const allGroups = Object.keys(groupMap);

  for (const group of allGroups) {
    if (exerciseList.some(ex => ex.toLowerCase().includes(group))) {
      return group;
    }
  }

  return "geral"; // fallback
}

// -----------------------------------------------------
// MOTOR PRINCIPAL DO AQUECIMENTO
// -----------------------------------------------------
export function generateWarmupForWorkout(workout: any) {
  // workout.exercises → lista de exercícios do treino do dia
  const exercises = workout?.exercises || [];

  if (!exercises.length) {
    return warmupMobility.geral;
  }

  // 1) Identifica músculo principal do treino
  const mainGroup = identifyMainGroup(exercises);
  const mobilityKey = groupMap[mainGroup] || "geral";

  const selectedMobility = warmupMobility[mobilityKey];

  // -----------------------------------------------------
  // MONTAGEM FINAL DO BLOCO DE AQUECIMENTO
  // -----------------------------------------------------
  return {
    grupoPrincipal: mainGroup,

    aquecimentoGeral: warmupMobility.geral.aquecimento,

    aquecimentoEspecifico: selectedMobility.aquecimento,

    mobilidade: selectedMobility.mobilidade,

    alongamento: selectedMobility.alongamento,
  };
}

// -----------------------------------------------------
// FUNÇÃO COMPLEMENTAR — AQUECIMENTO BASEADO EM MODALIDADE
// -----------------------------------------------------
export function generateWarmupByModality(modality: string) {
  switch (modality) {
    case "spinning":
      return {
        grupoPrincipal: "cardio",
        aquecimentoGeral: [
          "Ciclo leve — 3 min",
          "Aumentar cadência — 1 min",
          "Subida leve — 1 min",
        ],
        aquecimentoEspecifico: ["Tiro leve — 20s", "Pedalada em pé — 20s"],
        mobilidade: ["Mobilidade de quadril — 30s", "Mobilidade lombar — 30s"],
        alongamento: ["Quadríceps — 30s", "Panturrilha — 30s"],
      };

    case "corrida":
      return {
        grupoPrincipal: "cardio",
        aquecimentoGeral: [
          "Caminhada rápida — 2 min",
          "Corrida leve — 2 min",
          "Skipping — 30s",
        ],
        aquecimentoEspecifico: ["Strides progressivos — 3x40m"],
        mobilidade: [
          "Mobilidade de tornozelo — 10 reps",
          "Mobilidade posterior — 10 reps",
        ],
        alongamento: [
          "Posterior — 30s",
          "Quadríceps — 30s",
          "Panturrilha — 30s",
        ],
      };

    case "cross":
      return {
        grupoPrincipal: "fullbody",
        aquecimentoGeral: warmupMobility.geral.aquecimento,
        aquecimentoEspecifico: [
          "Agachamento — 10 reps",
          "Flexão — 10 reps",
          "Deadlift leve — 10 reps",
        ],
        mobilidade: [
          "Mobilidade de ombro — 10 reps",
          "Mobilidade torácica — 10 reps",
        ],
        alongamento: [
          "Peito — 30s",
          "Posterior — 30s",
          "Glúteo — 30s",
        ],
      };

    default:
      return warmupMobility.geral;
  }
}

