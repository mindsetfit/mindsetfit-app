// src/app/dashboard/components/stats-grid.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProgressSummary } from "../services/progress-service";

export default function StatsGrid() {
  const progress = getProgressSummary();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Volume total de treino (30 dias)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{progress.totalVolume} kg</p>
          <p className="text-xs text-muted-foreground mt-1">
            Soma de todas as cargas registradas
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Treinos concluídos (30 dias)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{progress.totalSessions}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Inclui musculação, cardio e funcional
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Melhor semana recente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {progress.bestWeekSessions} treinos
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Pico de consistência recente
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
