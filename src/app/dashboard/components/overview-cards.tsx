// src/app/dashboard/components/overview-cards.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getXPStats } from "../services/xp-service";
import { getProgressSummary } from "../services/progress-service";

export default function OverviewCards() {
  const xp = getXPStats();
  const progress = getProgressSummary();

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Nível atual</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{xp.level}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {xp.xp} XP total
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Treinos na semana
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{progress.weeklySessions}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Meta: {progress.weeklyGoal} sessões
          </p>
          <Progress
            value={Math.min(
              (progress.weeklySessions / progress.weeklyGoal) * 100,
              100
            )}
            className="mt-2"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Consistência (últimos 30 dias)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            {progress.consistencyPercent}%
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Dias treinados versus dias planejados
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Próximo nível
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">
            {xp.nextLevelXP - xp.xp} XP para o nível {xp.level + 1}
          </p>
          <Progress value={xp.progressToNextLevel} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-1">
            Progresso: {xp.progressToNextLevel.toFixed(0)}%
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
