"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import TrainingSidebar from "@/components/custom/sidebar";
import fullDB from "@/lib/full-training-database";
import { useTrainingLoad } from "@/hooks/useTrainingLoad";

function pct(a: number, b: number) {
  if (!a || !b) return "—";
  return (((b - a) / a) * 100).toFixed(1) + "%";
}

export default function RelatorioClient() {
  const params = useSearchParams();
  const modality = params.get("modality");
  const query = params.get("q")?.toLowerCase();

  const { getStats, getHistory } = useTrainingLoad("relatorio");

  const data = useMemo(() => {
    return fullDB
      .filter((ex) => {
        if (modality && ex.modality !== modality) return false;
        if (query && !ex.name.toLowerCase().includes(query)) return false;
        return true;
      })
      .map((ex) => {
        const session = ex.group || ex.modality;
        const stats = getStats(session, ex.id);
        const hist = getHistory(session, ex.id);
        const first = hist[0]?.kg ?? null;
        return {
          ...ex,
          ...stats,
          evolucao: first && stats.bestKg ? pct(first, stats.bestKg) : "—",
        };
      });
  }, [getStats, getHistory, modality, query]);

  return (
    <div className="flex">
      <TrainingSidebar />
      <main className="flex-1 p-10 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Relatório de Evolução</h1>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm"
          >
            Imprimir / Salvar PDF
          </button>
        </div>

        <p className="text-slate-400 text-sm">
          {modality && <>Modalidade: <strong>{modality}</strong> · </>}
          {query && <>Filtro: <strong>{query}</strong></>}
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-800">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-2 text-left">Exercício</th>
                <th>Modalidade</th>
                <th>Última</th>
                <th>Melhor</th>
                <th>Evolução</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ex) => (
                <tr key={ex.id} className="border-t border-slate-800">
                  <td className="p-2 text-white">{ex.name}</td>
                  <td className="text-slate-400 capitalize">{ex.modality}</td>
                  <td>{ex.lastKg ? `${ex.lastKg}kg` : "—"}</td>
                  <td>{ex.bestKg ? `${ex.bestKg}kg` : "—"}</td>
                  <td>{ex.evolucao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
