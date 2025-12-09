// src/app/dashboard/components/ranking-table.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRanking } from "../services/ranking-service";

export default function RankingTable() {
  const ranking = getRanking();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Ranking interno (evolução e consistência)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground border-b">
                <th className="text-left py-2">Pos</th>
                <th className="text-left py-2">Usuário</th>
                <th className="text-right py-2">Nível</th>
                <th className="text-right py-2">XP</th>
                <th className="text-right py-2">Consistência</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((u, index) => (
                <tr key={u.id} className="border-b last:border-0">
                  <td className="py-2 text-xs">{index + 1}º</td>
                  <td className="py-2 font-medium">{u.name}</td>
                  <td className="py-2 text-right">{u.level}</td>
                  <td className="py-2 text-right">{u.xp}</td>
                  <td className="py-2 text-right">
                    {u.consistencyPercent}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-muted-foreground mt-2">
          Ranking baseado em XP, nível e consistência dos treinos registrados.
        </p>
      </CardContent>
    </Card>
  );
}
