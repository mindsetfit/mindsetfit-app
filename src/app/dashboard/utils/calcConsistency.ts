// src/app/dashboard/utils/calcConsistency.ts
export function calculateConsistency(
  daysTrained: number,
  daysPlanned: number
): number {
  if (daysPlanned === 0) return 0;
  return Math.round((daysTrained / daysPlanned) * 100);
}
