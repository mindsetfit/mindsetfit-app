// src/app/gamification/components/badge-card.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeStatus } from "../badges/badges-service";

type Props = {
  badge: BadgeStatus;
};

export function BadgeCard({ badge }: Props) {
  const opacity = badge.earned ? "opacity-100" : "opacity-40";

  return (
    <Card className={`flex flex-col ${opacity}`}>
      <CardContent className="flex flex-col gap-2 pt-4">
        <div className="text-2xl">{badge.icon}</div>
        <div>
          <p className="text-sm font-semibold">{badge.name}</p>
          <p className="text-xs text-muted-foreground">
            {badge.description}
          </p>
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">
          Status: {badge.earned ? "Conquistado" : "Ainda não conquistado"}
        </p>
      </CardContent>
    </Card>
  );
}
