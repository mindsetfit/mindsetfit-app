// src/app/gamification/components/badge-section.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getXPStats } from "@/app/dashboard/services/xp-service";
import { getProgressSummary } from "@/app/dashboard/services/progress-service";
import { getUserBadges } from "../badges/badges-service";
import { BadgeCard } from "./badge-card";

export function BadgeSection() {
  const xp = getXPStats();
  const progress = getProgressSummary();
  const badges = getUserBadges({
    xp: xp.xp,
    consistencyPercent: progress.consistencyPercent,
    weeklySessions: progress.weeklySessions,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Badges de conquista
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {badges.map((b) => (
            <BadgeCard key={b.id} badge={b} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
