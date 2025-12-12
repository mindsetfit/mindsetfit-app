import { fmtKg } from "./report-periods";

export type ExecStatus = "good" | "warn" | "bad";

export type ExecSummary = {
  status: ExecStatus;
  statusLabel: string;
  avgPct: string;
  bestKg: string;
  action: string;
};

export function buildExecutiveSummary(opts: {
  avgPctNum: number | null;   // variação média (%)
  bestKg: number | null;      // melhor carga
  hasDrop: boolean;           // queda recente
  hasPlateau: boolean;        // plateau detectado
}) : ExecSummary {
  const { avgPctNum, bestKg, hasDrop, hasPlateau } = opts;

  if (hasDrop) {
    return {
      status: "bad",
      statusLabel: "Queda de performance",
      avgPct: avgPctNum !== null ? `${avgPctNum.toFixed(1)}%` : "—",
      bestKg: fmtKg(bestKg),
      action: "Revisar descanso, volume ou técnica antes de progredir.",
    };
  }

  if (hasPlateau) {
    return {
      status: "warn",
      statusLabel: "Plateau detectado",
      avgPct: avgPctNum !== null ? `${avgPctNum.toFixed(1)}%` : "—",
      bestKg: fmtKg(bestKg),
      action: "Ajustar progressão (microcargas) ou variar estímulo.",
    };
  }

  return {
    status: "good",
    statusLabel: "Progredindo bem",
    avgPct: avgPctNum !== null ? `${avgPctNum.toFixed(1)}%` : "—",
    bestKg: fmtKg(bestKg),
    action: "Manter progressão atual e monitorar consistência.",
  };
}

export function statusClasses(s: ExecStatus) {
  if (s === "good") return "bg-emerald-900/30 border-emerald-800 text-emerald-200";
  if (s === "warn") return "bg-amber-900/30 border-amber-800 text-amber-200";
  return "bg-red-900/30 border-red-800 text-red-200";
}
