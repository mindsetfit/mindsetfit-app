import ProgressCharts from "@/src/components/custom/ProgressCharts";
import RankingTable from "@/src/components/custom/RankingTable";
import { ProgressService } from "@/src/data/progress/progressService";
import { RankingService } from "@/src/data/progress/rankingService";

export default function EvolucaoPage() {
  const fakeLogs = []; // 🔥 depois vamos integrar ao banco real
  const fakeUsers = []; // 🔥 integração futura

  const weekly = ProgressService.computeWeekly(fakeLogs);
  const monthly = ProgressService.computeMonthly(fakeLogs);
  const ranking = RankingService.computeRanking(fakeUsers);

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold">📊 Evolução do Usuário</h1>

      <ProgressCharts weekly={weekly} monthly={monthly} />
      <RankingTable ranking={ranking} />
    </div>
  );
}
