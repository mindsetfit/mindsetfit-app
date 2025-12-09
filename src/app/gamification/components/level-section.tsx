// src/app/gamification/components/level-section.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getXPStats } from "@/app/dashboard/services/xp-service";
import { getLevelInfo } from "../levels/levels-service";
import { LevelCard } from "./level-card";

export function LevelSection() {
  const xp = getXPStats();
  const levelInfo = getLevelInfo(xp.xp);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Sistema de níveis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LevelCard levelInfo={levelInfo} />
      </CardContent>
    </Card>
  );
}
