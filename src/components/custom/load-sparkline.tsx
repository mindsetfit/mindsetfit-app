"use client";

import * as React from "react";

export type SparkPoint = { t: number; kg: number };

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

export default function LoadSparkline({
  points,
  height = 54,
  maxPoints = 24,
}: {
  points: SparkPoint[];
  height?: number;
  maxPoints?: number;
}) {
  const data = React.useMemo(() => {
    const cleaned = (points || [])
      .filter((p) => Number.isFinite(p?.t) && Number.isFinite(p?.kg) && p.kg > 0)
      .sort((a, b) => a.t - b.t)
      .slice(-maxPoints);
    return cleaned;
  }, [points, maxPoints]);

  if (data.length < 2) return null;

  const w = 260;
  const h = height;
  const pad = 8;

  const ys = data.map((p) => p.kg);
  let minY = Math.min(...ys);
  let maxY = Math.max(...ys);

  if (minY === maxY) {
    minY = minY - 1;
    maxY = maxY + 1;
  }

  const span = maxY - minY;
  const yPad = span * 0.12;
  minY -= yPad;
  maxY += yPad;

  const xStep = (w - pad * 2) / (data.length - 1);

  const toX = (i: number) => pad + i * xStep;
  const toY = (kg: number) => {
    const t = (kg - minY) / (maxY - minY);
    const y = (h - pad) - t * (h - pad * 2);
    return clamp(y, pad, h - pad);
  };

  const d = data
    .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(i).toFixed(2)} ${toY(p.kg).toFixed(2)}`)
    .join(" ");

  const last = data[data.length - 1];
  const lastX = toX(data.length - 1);
  const lastY = toY(last.kg);

  return (
    <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950/30 p-3">
      <div className="flex items-center justify-between">
        <div className="text-[11px] text-slate-400">Evolução (últimos {data.length})</div>
        <div className="text-[11px] text-slate-400">
          Último: <span className="text-white font-semibold">{String(last.kg).replace(".0", "")}kg</span>
        </div>
      </div>

      <div className="mt-2">
        <svg width="100%" viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Gráfico de evolução">
          <path d={d} fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-200" />
          <circle cx={lastX} cy={lastY} r="3.5" className="fill-white" />
          <circle cx={lastX} cy={lastY} r="7" className="fill-white/10" />
        </svg>
      </div>

      <div className="mt-2 text-[11px] text-slate-500">
        Dica: para registrar um ponto, preencha a carga e <span className="text-slate-300">saia do campo</span>.
      </div>
    </div>
  );
}
