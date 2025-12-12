/**
 * Compat layer (legado).
 * Mantém compatibilidade com código antigo que ainda importa "@/lib/training-insights"
 * e chama getInsight/getInsights em formatos diferentes.
 *
 * Implementação real: "@/lib/report-insights"
 */
import {
  buildInsights,
  toneClasses,
  type ReportInsight,
  type InsightTone,
} from "./report-insights";

export { toneClasses };
export type { InsightTone, ReportInsight as TrainingInsight };

// --- helpers ---
function asNumArray(x: any): number[] {
  if (Array.isArray(x)) return x.filter((n) => Number.isFinite(n)).map((n) => Number(n));
  return [];
}

/**
 * getInsight/getInsights (compat):
 * - aceita array de kgs: getInsight([80,82,85])
 * - aceita objeto moderno: getInsight({ historyKgs: [...], last30Avg, prev30Avg, last, best })
 * - aceita nada: getInsight()
 */
export function getInsight(arg?: any): ReportInsight[] {
  // formato moderno (obj)
  if (arg && typeof arg === "object" && !Array.isArray(arg)) {
    const historyKgs = asNumArray(arg.historyKgs);
    return buildInsights({
      historyKgs,
      last30Avg: Number.isFinite(arg.last30Avg) ? Number(arg.last30Avg) : null,
      prev30Avg: Number.isFinite(arg.prev30Avg) ? Number(arg.prev30Avg) : null,
      last: Number.isFinite(arg.last) ? Number(arg.last) : null,
      best: Number.isFinite(arg.best) ? Number(arg.best) : null,
    });
  }

  // formato antigo (array)
  const historyKgs = asNumArray(arg);
  return buildInsights({
    historyKgs,
    last30Avg: null,
    prev30Avg: null,
    last: historyKgs.length ? historyKgs[historyKgs.length - 1] : null,
    best: historyKgs.length ? Math.max(...historyKgs) : null,
  });
}

export const getInsights = getInsight;

// aliases extras (caso existam em outros pontos)
export const getTrainingInsight = getInsight;
export const getTrainingInsights = getInsight;
export const buildTrainingInsight = getInsight;
export const buildTrainingInsights = getInsight;

// default
export default getInsight;
