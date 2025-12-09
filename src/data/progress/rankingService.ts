export interface UserRankingEntry {
  userId: string;
  name: string;
  totalVolume: number;
  sessions: number;
  score: number;
}

export const RankingService = {
  computeRanking(users: UserRankingEntry[]): UserRankingEntry[] {
    return users
      .map(u => ({
        ...u,
        score: Math.round(u.totalVolume * 0.7 + u.sessions * 0.3)
      }))
      .sort((a, b) => b.score - a.score);
  }
};
