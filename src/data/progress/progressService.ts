import { WorkoutLog } from "../types/workout";

export interface WeeklyProgress {
  week: string;
  volume: number;
  sessions: number;
}

export interface MonthlyProgress {
  month: string;
  volume: number;
  sessions: number;
}

export interface TotalProgress {
  totalVolume: number;
  totalSessions: number;
  uniqueExercises: number;
}

export const ProgressService = {
  computeWeekly(logs: WorkoutLog[]): WeeklyProgress[] {
    const grouped: Record<string, WeeklyProgress> = {};

    logs.forEach(log => {
      const week = `${log.year}-W${log.week}`;

      if (!grouped[week]) {
        grouped[week] = { week, volume: 0, sessions: 0 };
      }

      grouped[week].volume += log.volume;
      grouped[week].sessions += 1;
    });

    return Object.values(grouped);
  },

  computeMonthly(logs: WorkoutLog[]): MonthlyProgress[] {
    const grouped: Record<string, MonthlyProgress> = {};

    logs.forEach(log => {
      const month = `${log.year}-${String(log.month).padStart(2,"0")}`;

      if (!grouped[month]) {
        grouped[month] = { month, volume: 0, sessions: 0 };
      }

      grouped[month].volume += log.volume;
      grouped[month].sessions += 1;
    });

    return Object.values(grouped);
  },

  computeTotal(logs: WorkoutLog[]): TotalProgress {
    return {
      totalVolume: logs.reduce((acc, l) => acc + l.volume, 0),
      totalSessions: logs.length,
      uniqueExercises: new Set(logs.map(l => l.exerciseId)).size
    };
  }
};
