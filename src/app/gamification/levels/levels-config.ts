// src/app/gamification/levels/levels-config.ts
export type LevelConfig = {
  level: number;
  minXP: number;
  label: string;
};

export const LEVELS: LevelConfig[] = [
  { level: 1, minXP: 0, label: "Iniciante" },
  { level: 2, minXP: 500, label: "Em Progresso" },
  { level: 3, minXP: 1500, label: "Disciplinado" },
  { level: 4, minXP: 2500, label: "Avançado" },
  { level: 5, minXP: 3500, label: "Alta Performance" },
];
