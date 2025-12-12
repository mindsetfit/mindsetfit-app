import { pctChange } from "./report-periods";

export type InsightTone = "good" | "warn" | "bad" | "neutral";

export type ReportInsight = {
  tone: InsightTone;
  title: string;
  detail: string;
};

function isFinitePos(n: number | null) {
  return n !== null && Number.isFinite(n);
}

export function buildInsights(opts: {
  historyKgs: number[];
  last30Avg: number | null;
  prev30Avg: number | null;
  last: number | null;
  best: number | null;
}) {
  const insights: ReportInsight[] = [];
  const { historyKgs, last30Avg, prev30Avg, last, best } = opts;

  // 1) Progressão nas últimas 4 sessões (monótona)
  const last4 = historyKgs.slice(-4);
  if (last4.length >= 4) {
    const up = last4[0] < last4[1] && last4[1] < last4[2] && last4[2] < last4[3];
    const flat = last4.every((v) => Math.abs(v - last4[0]) < 0.0001);
    const down = last4[0] > last4[1] && last4[1] > last4[2] && last4[2] > last4[3];

    if (up) {
      insights.push({
        tone: "good",
        title: "Boa progressão",
        detail: "As últimas 4 execuções subiram em sequência.",
      });
    } else if (flat) {
      insights.push({
        tone: "warn",
        title: "Plateau provável",
        detail: "As últimas 4 execuções ficaram iguais. Pode ajustar progressão ou volume.",
      });
    } else if (down) {
      insights.push({
        tone: "bad",
        title: "Queda recente",
        detail: "As últimas 4 execuções caíram em sequência. Revisar recuperação, dor ou técnica.",
      });
    }
  }

  // 2) Comparação 30d vs 30d anteriores (média)
  const p = pctChange(prev30Avg, last30Avg);
  if (p !== null) {
    if (p >= 3) {
      insights.push({
        tone: "good",
        title: "Evolução no último mês",
        detail: `Média dos últimos 30 dias melhor que os 30 dias anteriores.`,
      });
    } else if (p <= -3) {
      insights.push({
        tone: "bad",
        title: "Regressão no último mês",
        detail: `Média dos últimos 30 dias abaixo dos 30 dias anteriores.`,
      });
    } else {
      insights.push({
        tone: "neutral",
        title: "Estável no último mês",
        detail: `Sem mudança relevante (±3%) na média de carga.`,
      });
    }
  }

  // 3) Meta sugerida (com base no best e last)
  if (isFinitePos(last) && isFinitePos(best)) {
    const gap = (best as number) - (last as number);
    if (gap <= 0) {
      insights.push({
        tone: "good",
        title: "No topo recente",
        detail: "Você está no melhor nível registrado (ou acima).",
      });
    } else if (gap <= 2.5) {
      insights.push({
        tone: "good",
        title: "Meta próxima",
        detail: "Você está a um pequeno passo do melhor registrado.",
      });
    } else {
      insights.push({
        tone: "neutral",
        title: "Meta sugerida",
        detail: "Aproxime-se do melhor registrado com progressão gradual.",
      });
    }
  }

  return insights.slice(0, 3);
}

export function toneClasses(tone: InsightTone) {
  if (tone === "good") return "bg-emerald-900/35 text-emerald-200 border-emerald-900/60";
  if (tone === "warn") return "bg-amber-900/35 text-amber-200 border-amber-900/60";
  if (tone === "bad") return "bg-red-900/35 text-red-200 border-red-900/60";
  return "bg-slate-900/35 text-slate-200 border-slate-800";
}
