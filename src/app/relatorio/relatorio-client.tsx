"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import TrainingSidebar from "@/components/custom/sidebar";
import fullDB from "@/lib/full-training-database";
import { useTrainingLoad } from "@/hooks/useTrainingLoad";
import {
  split30d,
  computePeriodStats,
  pctChange,
  fmtPct,
  fmtKg,
} from "@/lib/report-periods";
import { buildInsights, toneClasses } from "@/lib/report-insights";

function safeLower(s: string | null) {
  return (s || "").toLowerCase();
}

export default function RelatorioClient() {
  const params = useSearchParams();
  const modality = params.get("modality");
  const query = safeLower(params.get("q"));

  const { getStats, getHistory } = useTrainingLoad("relatorio");

  const rows = useMemo(() => {
    const filtered = fullDB.filter((ex) => {
      if (modality && ex.modality !== modality) return false;
      if (query && !ex.name.toLowerCase().includes(query)) return false;
      return true;
    });

    return filtered.map((ex) => {
      const session = ex.group || ex.modality;
      const stats = getStats(session, ex.id);
      const hist = getHistory(session, ex.id); // [{t,kg}]
      const kgs = hist.map((h) => h.kg);

      const { last30, prev30 } = split30d(hist);
      const s30 = computePeriodStats(last30);
      const p30 = computePeriodStats(prev30);

      const deltaAvg = fmtPct(pctChange(p30.avg, s30.avg));
      const deltaBest = fmtPct(pctChange(p30.best, s30.best));

      const insights = buildInsights({
        historyKgs: kgs,
        last30Avg: s30.avg,
        prev30Avg: p30.avg,
        last: stats.lastKg,
        best: stats.bestKg,
      });

      return {
        id: ex.id,
        name: ex.name,
        modality: ex.modality,
        lastKg: stats.lastKg,
        bestKg: stats.bestKg,
        avg30: s30.avg,
        avgPrev30: p30.avg,
        deltaAvg,
        deltaBest,
        insights,
        nTotal: hist.length,
        n30: s30.n,
      };
    });
  }, [getHistory, getStats, modality, query]);

  const summary = useMemo(() => {
    const total = rows.length;
    const withHistory = rows.filter((r) => r.nTotal > 0).length;
    const avg30All = rows
      .map((r) => r.avg30)
      .filter((x): x is number => x !== null && Number.isFinite(x));
    const avg30 = avg30All.length
      ? avg30All.reduce((a, b) => a + b, 0) / avg30All.length
      : null;

    return { total, withHistory, avg30 };
  }, [rows]);

  const title = modality ? `Relatório — ${modality}` : "Relatório de Evolução";

  return (
    <div className="flex">
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          table { page-break-inside: auto; }
          tr { page-break-inside: avoid; page-break-after: auto; }
        }
      `}</style>

      <div className="no-print">
        <TrainingSidebar />
      </div>

      <main className="flex-1 p-10 space-y-6">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <p className="text-slate-400 text-sm">
              {modality ? (
                <>
                  Modalidade: <strong className="text-slate-200">{modality}</strong>
                </>
              ) : (
                <>Todas as modalidades</>
              )}
              {query ? (
                <>
                  {" "}
                  · Filtro: <strong className="text-slate-200">{query}</strong>
                </>
              ) : null}
            </p>
          </div>

          <div className="no-print flex gap-2">
            <a
              href="/evolucao"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm"
            >
              Voltar à Evolução
            </a>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm"
            >
              Imprimir / Salvar PDF
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="text-slate-400">
              Exercícios no relatório:{" "}
              <span className="text-white font-semibold">{summary.total}</span>
            </div>
            <div className="text-slate-400">
              Com histórico:{" "}
              <span className="text-white font-semibold">{summary.withHistory}</span>
            </div>
            <div className="text-slate-400">
              Média (30d):{" "}
              <span className="text-white font-semibold">
                {fmtKg(summary.avg30)}kg
              </span>
            </div>
          </div>
          <p className="mt-2 text-[12px] text-slate-500">
            Comparação premium: <span className="text-slate-300">últimos 30 dias</span> vs{" "}
            <span className="text-slate-300">30 dias anteriores</span> (média e melhor).
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-slate-300">
              <tr>
                <th className="p-3 text-left">Exercício</th>
                <th className="p-3 text-left">Modalidade</th>
                <th className="p-3 text-left">Última</th>
                <th className="p-3 text-left">Melhor</th>
                <th className="p-3 text-left">Δ Média (30d)</th>
                <th className="p-3 text-left">Δ Melhor (30d)</th>
                <th className="p-3 text-left">Insights</th>
              </tr>
            </thead>

            <tbody className="bg-slate-950/20">
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-slate-800 align-top">
                  <td className="p-3 text-white">
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-[11px] text-slate-500">
                      Histórico: {r.nTotal} · Últimos 30d: {r.n30}
                    </div>
                  </td>

                  <td className="p-3 text-slate-400 capitalize">{r.modality}</td>

                  <td className="p-3 text-slate-200">{r.lastKg ? `${fmtKg(r.lastKg)}kg` : "—"}</td>

                  <td className="p-3 text-slate-200">{r.bestKg ? `${fmtKg(r.bestKg)}kg` : "—"}</td>

                  <td className="p-3 text-slate-200">{r.deltaAvg}</td>

                  <td className="p-3 text-slate-200">{r.deltaBest}</td>

                  <td className="p-3">
                    <div className="flex flex-col gap-2">
                      {r.insights.length ? (
                        r.insights.map((i, idx) => (
                          <div
                            key={`${r.id}-ins-${idx}`}
                            className={`text-[11px] border rounded-lg px-2 py-2 ${toneClasses(i.tone)}`}
                          >
                            <div className="font-semibold">{i.title}</div>
                            <div className="opacity-90">{i.detail}</div>
                          </div>
                        ))
                      ) : (
                        <div className="text-[11px] text-slate-500">
                          Sem insight suficiente (precisa de mais histórico).
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {!rows.length ? (
                <tr>
                  <td colSpan={7} className="p-6 text-slate-400">
                    Nenhum exercício encontrado para esse filtro.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="text-[11px] text-slate-500">
          MindsetFit — Relatório gerado localmente (com base no histórico salvo no dispositivo).
        </div>
      </main>
    </div>
  );
}
