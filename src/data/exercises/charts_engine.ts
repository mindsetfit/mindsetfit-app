// =====================================================
// MINDSETFIT — BLOCO 27
// ENGINE DE GRÁFICOS DE EVOLUÇÃO
// =====================================================

import { getExerciseHistory } from "./progression_engine";

// Constrói gráfico de carga ao longo do tempo
export function getWeightTrend(exName: string) {
  const history = getExerciseHistory(exName);
  return history.map((h: any, i: number) => ({
    index: i + 1,
    weight: h.weight,
    date: new Date(h.date).toLocaleDateString(),
  }));
}

// Constrói gráfico de repetições
export function getRepsTrend(exName: string) {
  const history = getExerciseHistory(exName);
  return history.map((h: any, i: number) => ({
    index: i + 1,
    reps: h.reps,
    date: new Date(h.date).toLocaleDateString(),
  }));
}

// Constrói gráfico de volume total
export function getVolumeTrend(exName: string) {
  const history = getExerciseHistory(exName);

  return history.map((h: any, i: number) => ({
    index: i + 1,
    volume: h.weight * h.reps * h.sets,
    date: new Date(h.date).toLocaleDateString(),
  }));
}

