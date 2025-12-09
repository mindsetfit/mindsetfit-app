// src/app/dashboard/utils/calcXP.ts
export function calculateXPFromTraining(
  sessions: number,
  volume: number,
  consistencyPercent: number
): number {
  const baseXP = sessions * 50;
  const volumeXP = Math.floor(volume / 1000) * 10;
  const consistencyXP = Math.floor(consistencyPercent) * 2;

  return baseXP + volumeXP + consistencyXP;
}
