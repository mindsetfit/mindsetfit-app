export type Trend = "up" | "flat" | "down";
export type Status = "good" | "warn" | "bad";

export type HistPoint = { t: number; kg: number };

export type ExerciseInput = {
  id: string;
  name: string;
  modality: string;
  sessionKey: string; // ex: group || modality
  history: HistPoint[];
};

export type ExerciseDecision = {
  id: string;
  name: string;
  modality: string;
  trend: Trend;
  status: Status;
  score: number; // >0 bom, <0 ruim
  reason: string;
  action: string;
  stats: {
    n: number;
    lastKg: number | null;
    bestKg: number | null;
    avgRecent: number | null;
    avgPrev: number | null;
    pctRecentVsPrev: number | null;
    dropFromBestPct: number | null;
    monotonicLast4: "up" | "flat" | "down" | "mixed";
  };
};

export type CoachingDecision = {
  status: Status;
  trend: Trend;
  action: string;
  highlights: Array<Pick<ExerciseDecision, "id" | "name" | "modality" | "reason" | "action" | "score">>;
  alerts: Array<Pick<ExerciseDecision, "id" | "name" | "modality" | "reason" | "action" | "score">>;
  decisions: ExerciseDecision[];
  meta: {
    totalExercises: number;
    withHistory: number;
    alertsCount: number;
    plateauCount: number;
    progressCount: number;
  };
};

function cleanHistory(history: HistPoint[]): HistPoint[] {
  return (history || [])
    .filter((p) => Number.isFinite(p?.t) && Number.isFinite(p?.kg) && p.kg > 0)
    .sort((a, b) => a.t - b.t);
}

function mean(nums: number[]): number | null {
  if (!nums.length) return null;
  const s = nums.reduce((a, b) => a + b, 0);
  return s / nums.length;
}

function max(nums: number[]): number | null {
  if (!nums.length) return null;
  return Math.max(...nums);
}

function pctChange(from: number | null, to: number | null): number | null {
  if (from === null || to === null) return null;
  if (!Number.isFinite(from) || !Number.isFinite(to) || from === 0) return null;
  return ((to - from) / from) * 100;
}

function monotonicLabel(last4: number[]): "up" | "flat" | "down" | "mixed" {
  if (last4.length < 4) return "mixed";
  const eps = 0.0001;
  const a = last4;
  const up = a[0] < a[1] && a[1] < a[2] && a[2] < a[3];
  const down = a[0] > a[1] && a[1] > a[2] && a[2] > a[3];
  const flat = a.every((v) => Math.abs(v - a[0]) < eps);
  if (up) return "up";
  if (down) return "down";
  if (flat) return "flat";
  return "mixed";
}

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

/**
 * Motor premium (sem IA pesada):
 * - usa janelas recentes (4) vs anteriores (4) quando possível
 * - detecta queda/plateau/progresso
 * - gera status global + ações
 *
 * Thresholds (ajustáveis):
 * - delta >= +3% => progresso
 * - delta <= -3% => alerta
 * - |delta| < 3% => estável
 * - queda do best >= 5% => alerta adicional
 */
export function runCoachingEngine(input: ExerciseInput[]): CoachingDecision {
  const decisions: ExerciseDecision[] = [];

  for (const ex of input) {
    const hist = cleanHistory(ex.history);
    const kgs = hist.map((h) => h.kg);

    const n = kgs.length;
    const lastKg = n ? kgs[n - 1] : null;
    const bestKg = max(kgs);

    // janela recente vs anterior (4 e 4)
    const recent = kgs.slice(-4);
    const prev = kgs.slice(-8, -4);

    const avgRecent = mean(recent);
    const avgPrev = mean(prev);

    // se não tiver 8 pontos, usa 3 e 3 quando possível
    const avgRecentAlt = n >= 3 ? mean(kgs.slice(-3)) : null;
    const avgPrevAlt = n >= 6 ? mean(kgs.slice(-6, -3)) : null;

    const pctRecentVsPrev =
      pctChange(avgPrev, avgRecent) ??
      pctChange(avgPrevAlt, avgRecentAlt);

    const mono = monotonicLabel(kgs.slice(-4));

    const dropFromBestPct =
      bestKg !== null && lastKg !== null ? pctChange(bestKg, lastKg) : null; // negativo se last < best

    // Heurísticas
    const hasHistory = n >= 3;

    let status: Status = "warn";
    let trend: Trend = "flat";
    let score = 0;
    let reason = "Histórico insuficiente.";
    let action = "Registre mais execuções para gerar recomendações.";

    if (hasHistory) {
      // base trend pelo pct
      const p = pctRecentVsPrev;

      // flags
      const plateau =
        mono === "flat" ||
        (p !== null && Math.abs(p) < 3);

      const progress =
        mono === "up" ||
        (p !== null && p >= 3);

      const alert =
        mono === "down" ||
        (p !== null && p <= -3) ||
        (dropFromBestPct !== null && dropFromBestPct <= -5); // last está >=5% abaixo do best

      if (progress && !alert) {
        status = "good";
        trend = "up";
        reason =
          mono === "up"
            ? "Progressão consistente nas últimas sessões."
            : "Média recente acima do período anterior.";
        action = "Manter progressão (microcargas) e preservar consistência.";
        score = 2 + clamp((p ?? 0) / 10, 0, 2);
      } else if (alert) {
        status = "bad";
        trend = "down";
        reason =
          mono === "down"
            ? "Queda em sequência nas últimas sessões."
            : "Média recente abaixo do período anterior.";
        if (dropFromBestPct !== null && dropFromBestPct <= -5) {
          reason += " Última carga está bem abaixo do melhor registrado.";
        }
        action = "Revisar recuperação, técnica e volume. Considere deload ou ajuste de progressão.";
        score = -2 + clamp((p ?? -5) / 10, -2, 0);
      } else if (plateau) {
        status = "warn";
        trend = "flat";
        reason = "Sinal de estabilidade/plateau (sem mudança relevante).";
        action = "Ajustar estímulo: microcargas, variação de repetições ou aumento controlado de volume.";
        score = 0.2;
      } else {
        // mixed
        status = "warn";
        trend = p !== null ? (p > 0 ? "up" : p < 0 ? "down" : "flat") : "flat";
        reason = "Variação mista. É preciso mais consistência para concluir tendência.";
        action = "Padronizar execução (técnica/descanso) e acompanhar próximas sessões.";
        score = 0;
      }
    }

    decisions.push({
      id: ex.id,
      name: ex.name,
      modality: ex.modality,
      trend,
      status,
      score,
      reason,
      action,
      stats: {
        n,
        lastKg,
        bestKg,
        avgRecent,
        avgPrev,
        pctRecentVsPrev: pctRecentVsPrev,
        dropFromBestPct,
        monotonicLast4: mono,
      },
    });
  }

  const withHistory = decisions.filter((d) => d.stats.n >= 3);
  const alerts = withHistory.filter((d) => d.status === "bad");
  const progress = withHistory.filter((d) => d.status === "good");
  const plateau = withHistory.filter((d) => d.status === "warn");

  // status global (simples e eficiente)
  const total = withHistory.length;
  const alertRatio = total ? alerts.length / total : 0;

  let globalStatus: Status = "warn";
  if (total === 0) globalStatus = "warn";
  else if (alertRatio >= 0.25) globalStatus = "bad";
  else if (progress.length >= plateau.length && progress.length > 0) globalStatus = "good";
  else globalStatus = "warn";

  // tendência global por média de scores
  const avgScore =
    withHistory.length
      ? withHistory.reduce((a, b) => a + b.score, 0) / withHistory.length
      : 0;

  const globalTrend: Trend = avgScore > 0.5 ? "up" : avgScore < -0.5 ? "down" : "flat";

  const globalAction =
    globalStatus === "good"
      ? "Manter progressão atual e consolidar consistência."
      : globalStatus === "bad"
      ? "Priorizar recuperação e ajustar estímulo nos exercícios em alerta."
      : "Ajustar progressão com microcargas e buscar consistência nas próximas sessões.";

  const topHighlights = [...withHistory]
    .sort((a, b) => b.score - a.score)
    .filter((d) => d.score > 0.5)
    .slice(0, 3)
    .map((d) => ({
      id: d.id,
      name: d.name,
      modality: d.modality,
      reason: d.reason,
      action: d.action,
      score: d.score,
    }));

  const topAlerts = [...withHistory]
    .sort((a, b) => a.score - b.score)
    .filter((d) => d.score < -0.5)
    .slice(0, 3)
    .map((d) => ({
      id: d.id,
      name: d.name,
      modality: d.modality,
      reason: d.reason,
      action: d.action,
      score: d.score,
    }));

  return {
    status: globalStatus,
    trend: globalTrend,
    action: globalAction,
    highlights: topHighlights,
    alerts: topAlerts,
    decisions,
    meta: {
      totalExercises: decisions.length,
      withHistory: withHistory.length,
      alertsCount: alerts.length,
      plateauCount: plateau.length,
      progressCount: progress.length,
    },
  };
}
