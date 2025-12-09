#!/usr/bin/env bash
set -e

echo "====================================="
echo "  BLOCO 29 - DASHBOARD + GAMIFICAÇÃO "
echo "  Limpando e recriando estrutura...  "
echo "====================================="

# Remove tudo de dashboard e gamification
echo ">> Removendo src/app/dashboard e src/app/gamification..."
rm -rf src/app/dashboard src/app/gamification

# Recria pastas base
echo ">> Recriando pastas..."
mkdir -p src/app/dashboard/components
mkdir -p src/app/dashboard/services
mkdir -p src/app/dashboard/utils
mkdir -p src/app/gamification/badges
mkdir -p src/app/gamification/levels
mkdir -p src/app/gamification/components

echo ">> Criando arquivos do dashboard..."

cat << 'EOT' > src/app/dashboard/page.tsx
// src/app/dashboard/page.tsx
import React from "react";
import OverviewCards from "./components/overview-cards";
import StatsGrid from "./components/stats-grid";
import ProgressHeatmap from "./components/progress-heatmap";
import RankingTable from "./components/ranking-table";
import { BadgeSection } from "../gamification/components/badge-section";
import { LevelSection } from "../gamification/components/level-section";

export default function DashboardPage() {
  return (
    <main className="flex flex-col gap-6 p-4 md:p-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Dashboard de Performance
        </h1>
        <p className="text-sm text-muted-foreground">
          Visão geral da sua evolução em treinos, consistência e gamificação
          (badges, níveis e ranking interno).
        </p>
      </header>

      <section className="grid gap-4">
        <OverviewCards />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <StatsGrid />
        </div>
        <div className="md:col-span-1">
          <ProgressHeatmap />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <BadgeSection />
        <LevelSection />
      </section>

      <section className="mt-4">
        <RankingTable />
      </section>
    </main>
  );
}
EOT

cat << 'EOT' > src/app/dashboard/components/overview-cards.tsx
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
EOT

cat << 'EOT' > src/app/dashboard/components/stats-grid.tsx
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
EOT

cat << 'EOT' > src/app/dashboard/components/progress-heatmap.tsx
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
EOT

cat << 'EOT' > src/app/dashboard/components/ranking-table.tsx
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
EOT

echo ">> Criando serviços e utils do dashboard..."

cat << 'EOT' > src/app/dashboard/services/xp-service.ts
// src/app/dashboard/services/xp-service.ts
export type XPStats = {
  xp: number;
  level: number;
  nextLevelXP: number;
  progressToNextLevel: number;
};

const LEVEL_STEP = 1000;

export function getXPStats(): XPStats {
  // Futuro: puxar de banco / API / treinos reais
  const xp = 3450;
  const level = Math.floor(xp / LEVEL_STEP);
  const nextLevelXP = (level + 1) * LEVEL_STEP;
  const progressToNextLevel = (xp / nextLevelXP) * 100;

  return {
    xp,
    level,
    nextLevelXP,
    progressToNextLevel,
  };
}
EOT

cat << 'EOT' > src/app/dashboard/services/progress-service.ts
// src/app/dashboard/services/progress-service.ts
export type ProgressSummary = {
  weeklySessions: number;
  weeklyGoal: number;
  totalSessions: number;
  totalVolume: number;
  bestWeekSessions: number;
  consistencyPercent: number;
};

export function getProgressSummary(): ProgressSummary {
  // Futuro: calcular com base nos treinos dos blocos 27 e 28
  return {
    weeklySessions: 4,
    weeklyGoal: 5,
    totalSessions: 16,
    totalVolume: 43250,
    bestWeekSessions: 6,
    consistencyPercent: 78,
  };
}
EOT

cat << 'EOT' > src/app/dashboard/services/graphs-service.ts
// src/app/dashboard/services/graphs-service.ts
export type HeatmapDay = {
  date: string;
  label: string;
  short: string;
  intensity: 0 | 1 | 2 | 3;
};

export function getHeatmapData(): HeatmapDay[] {
  const today = new Date();
  const days: HeatmapDay[] = [];

  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);

    const label = d.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    });

    const short = d
      .toLocaleDateString("pt-BR", { weekday: "short" })
      .charAt(0)
      .toUpperCase();

    const hash = (d.getDate() + d.getMonth() * 13) % 4;
    const intensity = hash as 0 | 1 | 2 | 3;

    days.push({
      date: d.toISOString().split("T")[0],
      label,
      short,
      intensity,
    });
  }

  return days;
}
EOT

cat << 'EOT' > src/app/dashboard/services/ranking-service.ts
// src/app/dashboard/services/ranking-service.ts
export type RankingUser = {
  id: string;
  name: string;
  level: number;
  xp: number;
  consistencyPercent: number;
};

export function getRanking(): RankingUser[] {
  const users: RankingUser[] = [
    { id: "1", name: "Você", level: 5, xp: 3450, consistencyPercent: 78 },
    { id: "2", name: "Paciente 01", level: 4, xp: 2900, consistencyPercent: 72 },
    { id: "3", name: "Paciente 02", level: 3, xp: 2100, consistencyPercent: 65 },
    { id: "4", name: "Paciente 03", level: 3, xp: 1950, consistencyPercent: 60 },
  ];

  return users.sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level;
    if (b.xp !== a.xp) return b.xp - a.xp;
    return b.consistencyPercent - a.consistencyPercent;
  });
}
EOT

cat << 'EOT' > src/app/dashboard/utils/calcXP.ts
// src/app/dashboard/utils/calcXP.ts
export function calculateXPFromTraining(
  sessions: number,
  volume: number,
  consistencyPercent: number
): number {
  const baseXP = sessions * 50;
  const volumeXP = Math.floor(volume / 1000) * 10;
  const consistencyXP = Math.floor(consistencyPercent) * 2;

  return baseXP + volumeXP + consistencyXP;
}
EOT

cat << 'EOT' > src/app/dashboard/utils/calcConsistency.ts
// src/app/dashboard/utils/calcConsistency.ts
export function calculateConsistency(
  daysTrained: number,
  daysPlanned: number
): number {
  if (daysPlanned === 0) return 0;
  return Math.round((daysTrained / daysPlanned) * 100);
}
EOT

echo ">> Criando configuração de badges e níveis..."

cat << 'EOT' > src/app/gamification/badges/badges-config.ts
// src/app/gamification/badges/badges-config.ts
export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  minXP?: number;
  minConsistency?: number;
  minWeeklySessions?: number;
};

export const BADGES: Badge[] = [
  {
    id: "first-training",
    name: "Primeiro Treino",
    description: "Completou o primeiro treino registrado no app.",
    icon: "🏋️",
  },
  {
    id: "consistency-7",
    name: "Consistência 7 Dias",
    description: "Manteve treinos consistentes por 7 dias seguidos.",
    icon: "📅",
    minConsistency: 70,
  },
  {
    id: "xp-3000",
    name: "XP 3000+",
    description: "Alcançou mais de 3000 pontos de XP.",
    icon: "🔥",
    minXP: 3000,
  },
  {
    id: "weekly-5",
    name: "Semana Insana",
    description: "Fez 5 ou mais treinos em uma semana.",
    icon: "⚡",
    minWeeklySessions: 5,
  },
];
EOT

cat << 'EOT' > src/app/gamification/badges/badges-service.ts
// src/app/gamification/badges/badges-service.ts
import { BADGES, Badge } from "./badges-config";

export type BadgeStatus = Badge & { earned: boolean };

export function getUserBadges(params: {
  xp: number;
  consistencyPercent: number;
  weeklySessions: number;
}): BadgeStatus[] {
  const { xp, consistencyPercent, weeklySessions } = params;

  return BADGES.map((badge) => {
    const meetsXP =
      badge.minXP !== undefined ? xp >= badge.minXP : true;
    const meetsConsistency =
      badge.minConsistency !== undefined
        ? consistencyPercent >= badge.minConsistency
        : true;
    const meetsWeekly =
      badge.minWeeklySessions !== undefined
        ? weeklySessions >= badge.minWeeklySessions
        : true;

    return {
      ...badge,
      earned: meetsXP && meetsConsistency && meetsWeekly,
    };
  });
}
EOT

cat << 'EOT' > src/app/gamification/levels/levels-config.ts
// src/app/gamification/levels/levels-config.ts
export type LevelConfig = {
  level: number;
  minXP: number;
  label: string;
};

export const LEVELS: LevelConfig[] = [
  { level: 1, minXP: 0, label: "Iniciante" },
  { level: 2, minXP: 500, label: "Em Progresso" },
  { level: 3, minXP: 1500, label: "Disciplinado" },
  { level: 4, minXP: 2500, label: "Avançado" },
  { level: 5, minXP: 3500, label: "Alta Performance" },
];
EOT

cat << 'EOT' > src/app/gamification/levels/levels-service.ts
// src/app/gamification/levels/levels-service.ts
import { LEVELS, LevelConfig } from "./levels-config";

export type LevelInfo = {
  current: LevelConfig;
  next?: LevelConfig;
  progressToNext: number;
};

export function getLevelInfo(xp: number): LevelInfo {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.minXP) {
      current = lvl;
    }
  }

  const currentIndex = LEVELS.findIndex(
    (l) => l.level === current.level
  );
  const next = LEVELS[currentIndex + 1];

  let progressToNext = 100;
  if (next) {
    const delta = next.minXP - current.minXP;
    const gained = xp - current.minXP;
    progressToNext = Math.max(
      0,
      Math.min(100, Math.round((gained / delta) * 100))
    );
  }

  return {
    current,
    next,
    progressToNext,
  };
}
EOT

echo ">> Criando componentes de gamificação..."

cat << 'EOT' > src/app/gamification/components/badge-card.tsx
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
EOT

cat << 'EOT' > src/app/gamification/components/level-card.tsx
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
EOT

cat << 'EOT' > src/app/gamification/components/badge-section.tsx
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
EOT

cat << 'EOT' > src/app/gamification/components/level-section.tsx
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
EOT

echo "====================================="
echo "  BLOCO 29 CRIADO COM SUCESSO ✅      "
echo "  Arquivos em: src/app/dashboard     "
echo "             e src/app/gamification  "
echo "====================================="
