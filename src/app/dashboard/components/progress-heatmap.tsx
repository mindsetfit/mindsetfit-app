// src/app/dashboard/components/progress-heatmap.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getHeatmapData } from "../services/graphs-service";

export default function ProgressHeatmap() {
  const data = getHeatmapData();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Mapa de calor de treinos (últimos 30 dias)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 text-[10px]">
          {data.map((day) => (
            <div
              key={day.date}
              className={`aspect-square rounded-sm flex items-center justify-center ${
                day.intensity === 0
                  ? "bg-muted text-muted-foreground"
                  : day.intensity === 1
                  ? "bg-emerald-900/60 text-emerald-100"
                  : day.intensity === 2
                  ? "bg-emerald-700/70 text-emerald-50"
                  : "bg-emerald-500 text-emerald-50"
              }`}
              title={`${day.label} - intensidade ${day.intensity}`}
            >
              {day.short}
            </div>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground mt-2">
          Cada quadrado representa um dia; quanto mais forte a cor, maior a
          intensidade do treino.
        </p>
      </CardContent>
    </Card>
  );
}
