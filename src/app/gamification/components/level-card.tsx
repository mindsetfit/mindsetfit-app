// src/app/gamification/components/level-card.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LevelInfo } from "../levels/levels-service";

type Props = {
  levelInfo: LevelInfo;
};

export function LevelCard({ levelInfo }: Props) {
  return (
    <Card>
      <CardContent className="pt-4 flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">Nível atual</p>
        <p className="text-xl font-bold">
          {levelInfo.current.level} · {levelInfo.current.label}
        </p>

        {levelInfo.next ? (
          <>
            <p className="text-xs text-muted-foreground">
              Próximo nível: {levelInfo.next.level} · {levelInfo.next.label}
            </p>
            <Progress value={levelInfo.progressToNext} />
            <p className="text-[10px] text-muted-foreground">
              Progresso até o próximo nível: {levelInfo.progressToNext}%
            </p>
          </>
        ) : (
          <p className="text-xs text-muted-foreground">
            Você já está no nível máximo configurado.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
