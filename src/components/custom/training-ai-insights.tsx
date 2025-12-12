"use client";

import React, { useEffect, useMemo, useState, useCallback } from "react";

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

  const [reportText, setReportText] = useState<string>("");

  const buildReport = useCallback(() => {
    const lines: string[] = [];
    const now = new Date();
    const date = now.toLocaleDateString("pt-BR");

    lines.push("🏋️ MindsetFit — Relatório do Treino");
    lines.push(`📅 ${date}`);
    lines.push("");
    lines.push(`✅ Preenchimento: ${totals.pct}% (${totals.filled}/${totals.total})`);

    if (totals.top?.length) {
      lines.push("");
      lines.push("🔥 Top cargas:");
      totals.top.forEach((r: any, i: number) => {
        lines.push(`${i + 1}. ${r.name} — ${r.load} kg (${r.sessionLabel})`);
      });
    }

    const pendentes = flat.filter((r: any) => !r.load || r.load <= 0).slice(0, 10);
    if (pendentes.length) {
      lines.push("");
      lines.push("📝 Pendências (sem carga):");
      pendentes.forEach((r: any, i: number) => {
        lines.push(`${i + 1}. ${r.name} (${r.sessionLabel})`);
      });
      if (flat.filter((r: any) => !r.load || r.load <= 0).length > 10) {
        lines.push("... (mais itens no app)");
      }
    }

    if (totals.suggestions?.length) {
      lines.push("");
      lines.push("📈 Próximas progressões sugeridas:");
      totals.suggestions.slice(0, 8).forEach((r: any, i: number) => {
        lines.push(`${i + 1}. ${r.name} — ${r.next} (${r.sessionLabel})`);
      });
    }

    lines.push("");
    lines.push("🔁 Diretriz: manter execução perfeita e progredir gradualmente.");
    return lines.join("\n");
  }, [totals, flat]);

  const onGenerateReport = () => {
    setReportText(buildReport());
  };

  const onCopyReport = async () => {
    if (!reportText) return;
    try {
      await navigator.clipboard.writeText(reportText);
      alert("Relatório copiado ✅");
    } catch {
      // fallback simples
      const ta = document.createElement("textarea");
      ta.value = reportText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Relatório copiado ✅");
    }
  };


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
      {/* ===== Relatório IA (copiar/WhatsApp) ===== */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm font-semibold text-white">Relatório IA</div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onGenerateReport}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10"
            >
              Gerar relatório
            </button>
            <button
              type="button"
              onClick={onCopyReport}
              disabled={!reportText}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 disabled:opacity-40"
            >
              Copiar
            </button>
          </div>
        </div>

        {reportText ? (
          <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-white/80">
            {reportText}
          </pre>
        ) : (
          <div className="mt-2 text-xs text-white/60">
            Gere um resumo pronto para enviar no WhatsApp/Instagram.
          </div>
        )}
      </div>

  );
}
