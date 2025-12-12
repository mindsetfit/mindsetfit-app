/**
 * Compat layer (legado) — NÃO usar para novas features.
 * Mantém compatibilidade com componentes antigos que ainda importam "@/lib/training-insights".
 * Implementação real está em "@/lib/report-insights".
 */
import {
  buildInsights,
  toneClasses,
  type ReportInsight,
  type InsightTone,
} from "./report-insights";

export { toneClasses };
export type { InsightTone, ReportInsight as TrainingInsight };

// ✅ nomes esperados pelo código antigo
export const getInsight = buildInsights;
export const getInsights = buildInsights;

// ✅ aliases extras (caso existam em outros pontos)
export const getTrainingInsight = buildInsights;
export const getTrainingInsights = buildInsights;
export const buildTrainingInsight = buildInsights;
export const buildTrainingInsights = buildInsights;

// default
export default buildInsights;
