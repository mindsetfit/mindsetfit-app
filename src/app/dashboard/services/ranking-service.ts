// src/app/dashboard/services/ranking-service.ts
export type RankingUser = {
  id: string;
  name: string;
  level: number;
  xp: number;
  consistencyPercent: number;
};

export function getRanking(): RankingUser[] {
  const users: RankingUser[] = [
    { id: "1", name: "Você", level: 5, xp: 3450, consistencyPercent: 78 },
    { id: "2", name: "Paciente 01", level: 4, xp: 2900, consistencyPercent: 72 },
    { id: "3", name: "Paciente 02", level: 3, xp: 2100, consistencyPercent: 65 },
    { id: "4", name: "Paciente 03", level: 3, xp: 1950, consistencyPercent: 60 },
  ];

  return users.sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level;
    if (b.xp !== a.xp) return b.xp - a.xp;
    return b.consistencyPercent - a.consistencyPercent;
  });
}
