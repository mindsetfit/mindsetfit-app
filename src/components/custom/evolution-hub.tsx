"use client";

import { useMemo } from "react";
import { runCoachingEngine, type ExerciseInput, type HistPoint } from "@/lib/coaching-engine";

type HubItem = {
  id: string;
  name: string;
  modality: string;
  historyKgs: number[]; // esperado: array de cargas em ordem cronológica
};

function toHist(historyKgs: number[]): HistPoint[] {
  const kgs = (historyKgs || []).filter((n) => Number.isFinite(n) && n > 0);
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  // cria timestamps artificiais (1 por dia) mantendo ordem cronológica
  return kgs.map((kg, i) => ({ t: now - (kgs.length - 1 - i) * day, kg }));
}

function statusUI(status: "good" | "warn" | "bad") {
  if (status === "good") return { label: "Progredindo", pill: "bg-emerald-500/15 text-emerald-200 border-emerald-500/30" };
  if (status === "bad") return { label: "Atenção", pill: "bg-rose-500/15 text-rose-200 border-rose-500/30" };
  return { label: "Estável", pill: "bg-amber-500/15 text-amber-200 border-amber-500/30" };
}

function trendUI(trend: "up" | "flat" | "down") {
  if (trend === "up") return { icon: "↑", label: "Em alta" };
  if (trend === "down") return { icon: "↓", label: "Em queda" };
  return { icon: "→", label: "Constante" };
}

export default function EvolutionHub({ items }: { items: HubItem[] }) {
  const engine = useMemo(() => {
    const input: ExerciseInput[] = (items || []).map((it) => ({
      id: it.id,
      name: it.name,
      modality: it.modality,
      sessionKey: it.modality,
      history: toHist(it.historyKgs || []),
    }));
    return runCoachingEngine(input);
  }, [items]);

  const s = statusUI(engine.status);
  const t = trendUI(engine.trend);

  const hasAnyHistory = engine.meta.withHistory > 0;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${s.pill}`}>
            <span className="font-semibold">Status:</span>
            <span>{s.label}</span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1 text-xs text-slate-200">
            <span className="font-semibold">Tendência:</span>
            <span className="text-base leading-none">{t.icon}</span>
            <span>{t.label}</span>
          </div>
        </div>

        <div className="text-xs text-slate-400">
          Exercícios com histórico: <span className="text-slate-200 font-semibold">{engine.meta.withHistory}</span> /{" "}
          <span className="text-slate-200 font-semibold">{engine.meta.totalExercises}</span>
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/30 p-4">
        <div className="text-sm font-semibold text-white">Ação recomendada</div>
        <p className="mt-1 text-sm text-slate-300">{engine.action}</p>

        {!hasAnyHistory && (
          <p className="mt-2 text-xs text-slate-400">
            Dica: registre cargas em alguns exercícios (3+ execuções) para o motor identificar destaques e alertas automaticamente.
          </p>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950/25 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-white">📈 Destaques</div>
            <div className="text-xs text-slate-400">Top 3</div>
          </div>

          {engine.highlights.length === 0 ? (
            <p className="mt-2 text-xs text-slate-400">Sem destaques ainda.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {engine.highlights.map((h) => (
                <li key={h.id} className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-white">{h.name}</div>
                      <div className="text-xs text-slate-400 capitalize">{h.modality}</div>
                    </div>
                    <div className="text-xs text-emerald-200 font-semibold">{Math.round(h.score * 10) / 10}</div>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">{h.reason}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{h.action}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950/25 p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-white">⚠️ Alertas</div>
            <div className="text-xs text-slate-400">Top 3</div>
          </div>

          {engine.alerts.length === 0 ? (
            <p className="mt-2 text-xs text-slate-400">Sem alertas críticos.</p>
          ) : (
            <ul className="mt-2 space-y-2">
              {engine.alerts.map((a) => (
                <li key={a.id} className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-white">{a.name}</div>
                      <div className="text-xs text-slate-400 capitalize">{a.modality}</div>
                    </div>
                    <div className="text-xs text-rose-200 font-semibold">{Math.round(a.score * 10) / 10}</div>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">{a.reason}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{a.action}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
