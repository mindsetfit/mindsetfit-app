export type HistPoint = { t: number; kg: number };

export type PeriodStats = {
  n: number;
  avg: number | null;
  best: number | null;
  first: number | null;
  last: number | null;
};

function avg(nums: number[]) {
  if (!nums.length) return null;
  const s = nums.reduce((a, b) => a + b, 0);
  return s / nums.length;
}

function best(nums: number[]) {
  if (!nums.length) return null;
  return Math.max(...nums);
}

export function computePeriodStats(points: HistPoint[]): PeriodStats {
  const cleaned = (points || [])
    .filter((p) => Number.isFinite(p?.t) && Number.isFinite(p?.kg) && p.kg > 0)
    .sort((a, b) => a.t - b.t);

  const kgs = cleaned.map((p) => p.kg);

  return {
    n: cleaned.length,
    avg: avg(kgs),
    best: best(kgs),
    first: cleaned.length ? cleaned[0].kg : null,
    last: cleaned.length ? cleaned[cleaned.length - 1].kg : null,
  };
}

export function split30d(points: HistPoint[], nowTs = Date.now()) {
  const ms30 = 30 * 24 * 60 * 60 * 1000;
  const aStart = nowTs - ms30;       // últimos 30d
  const bStart = nowTs - 2 * ms30;   // 30d anteriores

  const cleaned = (points || [])
    .filter((p) => Number.isFinite(p?.t) && Number.isFinite(p?.kg) && p.kg > 0)
    .sort((x, y) => x.t - y.t);

  const last30 = cleaned.filter((p) => p.t >= aStart && p.t <= nowTs);
  const prev30 = cleaned.filter((p) => p.t >= bStart && p.t < aStart);

  return { last30, prev30 };
}

export function pctChange(from: number | null, to: number | null) {
  if (from === null || to === null) return null;
  if (from === 0) return null;
  return ((to - from) / from) * 100;
}

export function fmtPct(p: number | null) {
  if (p === null || !Number.isFinite(p)) return "—";
  const sign = p > 0 ? "+" : "";
  return `${sign}${p.toFixed(1)}%`;
}

export function fmtKg(n: number | null) {
  if (n === null || !Number.isFinite(n)) return "—";
  const s = String(n);
  return s.endsWith(".0") ? s.slice(0, -2) : s;
}
