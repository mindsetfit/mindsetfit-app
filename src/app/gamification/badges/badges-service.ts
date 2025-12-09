// src/app/gamification/badges/badges-service.ts
import { BADGES, Badge } from "./badges-config";

export type BadgeStatus = Badge & { earned: boolean };

export function getUserBadges(params: {
  xp: number;
  consistencyPercent: number;
  weeklySessions: number;
}): BadgeStatus[] {
  const { xp, consistencyPercent, weeklySessions } = params;

  return BADGES.map((badge) => {
    const meetsXP =
      badge.minXP !== undefined ? xp >= badge.minXP : true;
    const meetsConsistency =
      badge.minConsistency !== undefined
        ? consistencyPercent >= badge.minConsistency
        : true;
    const meetsWeekly =
      badge.minWeeklySessions !== undefined
        ? weeklySessions >= badge.minWeeklySessions
        : true;

    return {
      ...badge,
      earned: meetsXP && meetsConsistency && meetsWeekly,
    };
  });
}
