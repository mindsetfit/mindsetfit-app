// src/app/gamification/badges/badges-config.ts
export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  minXP?: number;
  minConsistency?: number;
  minWeeklySessions?: number;
};

export const BADGES: Badge[] = [
  {
    id: "first-training",
    name: "Primeiro Treino",
    description: "Completou o primeiro treino registrado no app.",
    icon: "🏋️",
  },
  {
    id: "consistency-7",
    name: "Consistência 7 Dias",
    description: "Manteve treinos consistentes por 7 dias seguidos.",
    icon: "📅",
    minConsistency: 70,
  },
  {
    id: "xp-3000",
    name: "XP 3000+",
    description: "Alcançou mais de 3000 pontos de XP.",
    icon: "🔥",
    minXP: 3000,
  },
  {
    id: "weekly-5",
    name: "Semana Insana",
    description: "Fez 5 ou mais treinos em uma semana.",
    icon: "⚡",
    minWeeklySessions: 5,
  },
];
