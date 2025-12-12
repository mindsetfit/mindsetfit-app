"use client";

import { useMemo, useState } from "react";
import TrainingSidebar from "@/components/custom/sidebar";
import fullDB from "@/lib/full-training-database";
import { useTrainingLoad } from "@/hooks/useTrainingLoad";
import EvolutionCard from "@/components/custom/evolution-card";

export default function EvolucaoPage() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const { getHistory, getStats } = useTrainingLoad("evolucao");

  const exercises = useMemo(() => {
    return fullDB.filter((ex) => {
      if (filter !== "all" && ex.modality !== filter) return false;
      if (query && !ex.name.toLowerCase().includes(query.toLowerCase()))
        return false;
      return true;
    });
  }, [filter, query]);

  return (
    <div className="flex">
      <TrainingSidebar />

      <main className="flex-1 p-10 space-y-6">
        <h1 className="text-2xl font-bold text-white">Central de Evolução</h1>

        <div className="flex gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-white px-3 py-2 rounded-lg"
          >
            <option value="all">Todas</option>
            <option value="musculacao">Musculação</option>
            <option value="casa">Casa</option>
            <option value="corrida">Corrida</option>
            <option value="crossfit">Crossfit</option>
            <option value="spinning">Spinning</option>
          </select>

          <input
            placeholder="Buscar exercício..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-800 text-white px-3 py-2 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercises.map((ex) => {
            const session = ex.group || ex.modality;
            const history = getHistory(session, ex.id);
            const stats = getStats(session, ex.id);

            return (
              <EvolutionCard
                key={ex.id}
                name={ex.name}
                modality={ex.modality}
                history={history}
                lastKg={stats.lastKg}
                bestKg={stats.bestKg}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
