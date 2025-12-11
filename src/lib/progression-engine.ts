// === Motor de progressão automática ===
export type TrainingObjective = "ganho_massa" | "perda_gordura" | "manutencao";

export function normalizeObjective(obj: any): TrainingObjective {
  if (!obj) return "manutencao";
  if (obj === "ganho_massa") return "ganho_massa";
  if (obj === "perda_gordura") return "perda_gordura";
  return "manutencao";
}

/**
 * Regras:
 * - Se não existe carga anterior → retorna null
 * - Ganho de massa: +5 a 7%
 * - Perda de gordura: +2 a 3%
 * - Manutenção: +3 a 4%
 */
export function suggestLoad(previousLoad: number, objective: TrainingObjective) {
  if (!previousLoad || isNaN(previousLoad) || previousLoad <= 0) return null;

  let pct = 0.035; // padrão manutenção

  if (objective === "ganho_massa") pct = 0.06;
  if (objective === "perda_gordura") pct = 0.025;

  const newLoad = previousLoad * (1 + pct);

  return Math.round(newLoad * 2) / 2; // arredonda 0.5 kg
}
