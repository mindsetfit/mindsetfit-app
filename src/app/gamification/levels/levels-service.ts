// src/app/gamification/levels/levels-service.ts
import { LEVELS, LevelConfig } from "./levels-config";

export type LevelInfo = {
  current: LevelConfig;
  next?: LevelConfig;
  progressToNext: number;
};

export function getLevelInfo(xp: number): LevelInfo {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.minXP) {
      current = lvl;
    }
  }

  const currentIndex = LEVELS.findIndex(
    (l) => l.level === current.level
  );
  const next = LEVELS[currentIndex + 1];

  let progressToNext = 100;
  if (next) {
    const delta = next.minXP - current.minXP;
    const gained = xp - current.minXP;
    progressToNext = Math.max(
      0,
      Math.min(100, Math.round((gained / delta) * 100))
    );
  }

  return {
    current,
    next,
    progressToNext,
  };
}
