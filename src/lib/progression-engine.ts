/**
 * Módulo oficial de progressão de cargas do MindsetFit
 * ----------------------------------------------------
 * Este módulo fornece:
 *   - normalizeObjective(objective)
 *   - suggestLoad(previousLoad, objective)
 *
 * É usado no componente session-exercises-section.tsx
 * e pode ser expandido futuramente para progressões
 * por exercício, por período, etc.
 */

export type TrainingObjective = "ganho_massa" | "perda_gordura" | "manutencao";

/**
 * Normaliza o objetivo recebido da periodização para
 * valores consistentes usados no motor de progressão.
 */
export function normalizeObjective(raw: any): TrainingObjective {
  if (!raw) return "manutencao";

  const val = String(raw).toLowerCase();

  if (val.includes("ganho") || val.includes("massa")) return "ganho_massa";
  if (val.includes("perda") || val.includes("gord")) return "perda_gordura";

  return "manutencao";
}

/**
 * Calcula a progressão sugerida automaticamente.
 * 
 * Regras:
 *   - Se não existe carga anterior → retorna null
 *   - Ganho de massa → aumento maior (5–7%)
 *   - Perda de gordura → aumento leve (2–3%)
 *   - Manutenção → aumento moderado (3–4%)
 */
export function suggestLoad(previousLoad: number, objective: TrainingObjective) {
  if (!previousLoad || isNaN(previousLoad) || previousLoad <= 0) {
    return null;
  }

  let pct = 0.04; // padrão manutenção

  if (objective === "ganho_massa") pct = 0.06;
  if (objective === "perda_gordura") pct = 0.025;

  const newLoad = previousLoad * (1 + pct);

  // arredonda para 0.5 kg
  return Math.round(newLoad * 2) / 2;
}
