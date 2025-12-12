"use client";

import LoadSparkline from "@/components/custom/load-sparkline";
export default function EvolutionCard({
  name,
  modality,
  history,
  lastKg,
  bestKg,
}: {
  name: string;
  modality: string;
  history: { t: number; kg: number }[];
  lastKg: number | null;
  bestKg: number | null;
}) {
  const insight = getInsight(history.map((h) => h.kg));

  const href = `/relatorio?modality=${encodeURIComponent(
    modality
  )}&q=${encodeURIComponent(name)}`;

  return (
    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-xs text-slate-400 capitalize">{modality}</p>
        </div>

        {insight && (
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              insight.color === "emerald"
                ? "bg-emerald-900/40 text-emerald-300"
                : insight.color === "amber"
                ? "bg-amber-900/40 text-amber-300"
                : "bg-red-900/40 text-red-300"
            }`}
          >
            {insight.label}
          </span>
        )}
      </div>

      <LoadSparkline points={history} />

      <div className="flex justify-between text-xs text-slate-400">
        <span>Última: <strong className="text-white">{lastKg ?? "—"}kg</strong></span>
        <span>Melhor: <strong className="text-white">{bestKg ?? "—"}kg</strong></span>
      </div>

      <a
        href={href}
        className="block text-center text-xs mt-2 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white"
      >
        Gerar relatório
      </a>
    </div>
  );
}
