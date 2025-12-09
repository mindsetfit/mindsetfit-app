// src/app/dashboard/services/progress-service.ts
export type ProgressSummary = {
  weeklySessions: number;
  weeklyGoal: number;
  totalSessions: number;
  totalVolume: number;
  bestWeekSessions: number;
  consistencyPercent: number;
};

export function getProgressSummary(): ProgressSummary {
  // Futuro: calcular com base nos treinos dos blocos 27 e 28
  return {
    weeklySessions: 4,
    weeklyGoal: 5,
    totalSessions: 16,
    totalVolume: 43250,
    bestWeekSessions: 6,
    consistencyPercent: 78,
  };
}
