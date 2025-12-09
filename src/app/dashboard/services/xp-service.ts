// src/app/dashboard/services/xp-service.ts
export type XPStats = {
  xp: number;
  level: number;
  nextLevelXP: number;
  progressToNextLevel: number;
};

const LEVEL_STEP = 1000;

export function getXPStats(): XPStats {
  // Futuro: puxar de banco / API / treinos reais
  const xp = 3450;
  const level = Math.floor(xp / LEVEL_STEP);
  const nextLevelXP = (level + 1) * LEVEL_STEP;
  const progressToNextLevel = (xp / nextLevelXP) * 100;

  return {
    xp,
    level,
    nextLevelXP,
    progressToNextLevel,
  };
}
