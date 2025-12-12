"use client";

import React, { useEffect, useMemo, useState } from "react";

const KEY = "mindsetfit:sessions:v1";

type AnySession = any;

function safeParse(raw: string | null) {
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function toNumber(v: any): number | null {
  if (v === null || v === undefined) return null;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function suggestNext(load: number | null) {
  if (!load || load <= 0) return "";
  if (load < 10) return `→ próxima: ${(load + 1).toFixed(0)} kg`;
  if (load < 30) return `→ próxima: ${(load + 2.5).toFixed(1).replace(".0","")} kg`;
  return `→ próxima: ${(load + 5).toFixed(0)} kg`;
}

export default function TrainingAIInsights() {
  const [sessions, setSessions] = useState<AnySession[]>([]);

  useEffect(() => {
    const saved = safeParse(typeof window !== "undefined" ? localStorage.getItem(KEY) : null);
    if (Array.isArray(saved)) setSessions(saved);
  }, []);

  const flat = useMemo(() => {
    const rows: { sessionLabel: string; id: string; name: string; load: number | null }[] = [];

    for (const s of sessions || []) {
      const sessionLabel = s?.label ?? s?.name ?? "Sessão";
      const exs = s?.exercises ?? s?.items ?? s?.rows ?? [];
      if (!Array.isArray(exs)) continue;

      for (const ex of exs) {
        const id = ex?.id ?? ex?.exerciseId ?? ex?.key ?? ex?.name ?? "ex";
        const name = ex?.name ?? ex?.title ?? ex?.label ?? "Exercício";
        const load =
          toNumber(ex?.loadKg) ??
          toNumber(ex?.load) ??
          toNumber(ex?.carga) ??
          toNumber(ex?.weight) ??
          null;

        rows.push({ sessionLabel, id: String(id), name: String(name), load });
      }
    }

    return rows;
  }, [sessions]);

  const totals = useMemo(() => {
    const total = flat.length;
    const filled = flat.filter(r => (r.load ?? 0) > 0).length;
    const pct = total ? Math.round((filled / total) * 100) : 0;

    const top = [...flat]
      .filter(r => (r.load ?? 0) > 0)
      .sort((a,b) => (b.load ?? 0) - (a.load ?? 0))
      .slice(0, 5);

    const suggestions = flat
      .filter(r => (r.load ?? 0) > 0)
      .slice(0, 12)
      .map(r => ({
        ...r,
        next: suggestNext(r.load),
      }));

    return { total, filled, pct, top, suggestions };
  }, [flat]);

  if (!sessions?.length) return null;

  const warnLow = totals.total > 0 && totals.pct < 50;

  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-base font-semibold text-white">MindsetFit IA — Insights do Treino</div>
          <div className="text-xs text-white/70">
            Leitura automática do histórico salvo neste dispositivo
          </div>
        </div>
        <div className="text-xs text-white/80">
          Preenchimento: <span className="font-semibold text-white">{totals.pct}%</span>
        </div>
      </div>

      {warnLow && (
        <div className="mt-3 rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-100">
          ⚠️ Muitas cargas ainda estão vazias. Preencha para a IA sugerir progressão mais precisa.
        </div>
      )}

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="text-xs text-white/60">Exercícios no histórico</div>
          <div className="text-lg font-semibold text-white">{totals.total}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="text-xs text-white/60">Cargas preenchidas</div>
          <div className="text-lg font-semibold text-white">{totals.filled}</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-black/20 p-3">
          <div className="text-xs text-white/60">Próximo foco</div>
          <div className="text-sm font-medium text-white">
            {warnLow ? "Completar cargas" : "Progressão gradual"}
          </div>
        </div>
      </div>

      {!!totals.top.length && (
        <div className="mt-4">
          <div className="text-sm font-semibold text-white">Top cargas (desta base salva)</div>
          <div className="mt-2 space-y-2">
            {totals.top.map((r, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                <div className="min-w-0">
                  <div className="truncate text-sm text-white">{r.name}</div>
                  <div className="text-xs text-white/60">{r.sessionLabel}</div>
                </div>
                <div className="text-sm font-semibold text-white">{r.load} kg</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!!totals.suggestions.length && (
        <div className="mt-4">
          <div className="text-sm font-semibold text-white">Sugestões automáticas de progressão</div>
          <div className="mt-2 space-y-2">
            {totals.suggestions.map((r, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                <div className="min-w-0">
                  <div className="truncate text-sm text-white">{r.name}</div>
                  <div className="text-xs text-white/60">{r.sessionLabel}</div>
                </div>
                <div className="text-xs text-white/80">{r.next}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
