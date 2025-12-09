// ==========================================================
// MINDSETFIT — BLOCO 26
// MOTOR DE PROGRESSÃO, CARGA, REPETIÇÕES E EVOLUÇÃO
// ==========================================================

// Interface de histórico
export interface ExerciseLog {
  date: string;
  weight: number;
  reps: number;
  sets: number;
}

// Salva histórico no localStorage
export function saveExerciseLog(exName: string, log: ExerciseLog) {
  const key = `mindsetfit_exercise_${exName}`;
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  existing.push(log);
  localStorage.setItem(key, JSON.stringify(existing));
}

// Obtém histórico completo
export function getExerciseHistory(exName: string): ExerciseLog[] {
  const key = `mindsetfit_exercise_${exName}`;
  return JSON.parse(localStorage.getItem(key) || "[]");
}

// Cálculo de progressão automática
export function suggestProgression(exName: string) {
  const history = getExerciseHistory(exName);

  if (history.length < 2) {
    return {
      message: "🔥 Complete ao menos 2 treinos para sugerir evolução.",
      suggestion: null
    };
  }

  const last = history[history.length - 1];
  const prev = history[history.length - 2];

  // Regra simples: se repetições chegaram no limite, aumenta carga
  if (last.reps >= prev.reps && last.weight === prev.weight) {
    return {
      message: "✔ Evolução recomendada: aumentar 2 a 5 kg",
      suggestion: {
        nextWeight: last.weight + 2,
        reps: last.reps
      }
    };
  }

  // Regra: se peso aumentou mas reps caíram muito
  if (last.weight > prev.weight && last.reps < prev.reps - 2) {
    return {
      message: "⚠ Estabilizar carga antes de progredir novamente.",
      suggestion: {
        nextWeight: last.weight,
        reps: last.reps + 1
      }
    };
  }

  return {
    message: "🔥 Continue assim! Mantendo progressão constante!",
    suggestion: {
      nextWeight: last.weight,
      reps: last.reps + 1
    }
  };
}

