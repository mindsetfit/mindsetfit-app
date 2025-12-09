import LogoutButton from "/src/components/custom/logout-button";
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
