// FULL TRAINING DATABASE — Versão Premium MindsetFit
// Organiza todos os exercícios em 5 modalidades:
// musculação, casa, corrida, spinning e crossfit.

export type ModalityId =
  | "musculacao"
  | "casa"
  | "corrida"
  | "spinning"
  | "crossfit";

export type ExerciseRecord = {
  id: string;
  name: string;
  modality: ModalityId;
  group: string;
  subgroup?: string;
  level?: "iniciante" | "intermediario" | "avancado";
  series?: number | string;
  reps?: string;
  rest?: string;
  tempo?: string;
  intensity?: string;
  notes?: string;
};

// ----------------------------------------------------
// IMPORTAÇÕES OFICIAIS DA ESTRUTURA DO APP
// ----------------------------------------------------

// Musculação (bases originais)
import * as peitoData from "@/data/exercises/peito";
import * as costasData from "@/data/exercises/costas";
import * as ombrosData from "@/data/exercises/ombros";
import * as bicepsData from "@/data/exercises/biceps";
import * as tricepsData from "@/data/exercises/triceps";
import * as quadricepsData from "@/data/exercises/quadriceps";
import * as posteriorData from "@/data/exercises/posterior";
import * as gluteosData from "@/data/exercises/gluteos";
import * as panturrilhaData from "@/data/exercises/panturrilha";
import * as antebracoData from "@/data/exercises/antebraco";

// Aeróbicos / ciclismo / cross-training
import * as corridaData from "@/data/exercises/corrida";
import * as spinningData from "@/data/exercises/spinning";
import * as crossData from "@/data/exercises/cross_training";

// NOVA BASE PREMIUM — Exercícios "Em Casa"
import homePremium from "@/data/exercises/home_premium";

// ----------------------------------------------------
// HELPERS INTERNOS
// ----------------------------------------------------

function extractFirstArray(mod: any): any[] {
  if (!mod || typeof mod !== "object") return [];
  if (Array.isArray(mod.default)) return mod.default;

  for (const key of Object.keys(mod)) {
    const val = mod[key];
    if (Array.isArray(val)) return val;
  }
  return [];
}

function normalize(str: any): string {
  return typeof str === "string" ? str.toLowerCase() : "";
}

function buildExercise(
  base: any,
  params: {
    id: string;
    group: string;
    modality: ModalityId;
  }
): ExerciseRecord {
  const tips =
    Array.isArray(base?.tips) && base.tips.length > 0
      ? base.tips.join(" • ")
      : undefined;

  return {
    id: params.id,
    name: base?.name || base?.title || "Exercício",
    modality: params.modality,
    group: params.group,
    subgroup: base?.category,
    level: base?.level,
    series:
      base?.series ??
      base?.sets ??
      (typeof base?.seriesReps !== "undefined" ? String(base.seriesReps) : undefined),
    reps:
      base?.reps ??
      base?.repetitions ??
      base?.repsRange ??
      (typeof base?.seriesReps !== "undefined" ? String(base.seriesReps) : undefined),
    rest: base?.rest || base?.restTime || base?.interval || base?.intervalo,
    tempo: base?.tempo || base?.time,
    intensity: base?.intensity,
    notes:
      base?.description ||
      base?.execucao ||
      base?.howTo ||
      tips,
  };
}

// ----------------------------------------------------
// ARRAYS FINAIS
// ----------------------------------------------------

const musculacao: ExerciseRecord[] = [];
const casa: ExerciseRecord[] = [];
let corrida: ExerciseRecord[] = [];
let spinning: ExerciseRecord[] = [];
let crossfit: ExerciseRecord[] = [];

// ----------------------------------------------------
// 1) MUSCULAÇÃO + AUTO-SEPARAÇÃO DE EXERCÍCIOS "EM CASA"
// ----------------------------------------------------

function processBodyPartModule(mod: any, groupLabel: string) {
  const raw = extractFirstArray(mod);
  raw.forEach((ex: any, index: number) => {
    const isHome =
      normalize(ex?.type).includes("casa") ||
      normalize(ex?.type).includes("home");

    const target = isHome ? casa : musculacao;

    target.push(
      buildExercise(ex, {
        id: `${isHome ? "casa" : "musculacao"}-${groupLabel}-${index}`,
        group: groupLabel,
        modality: isHome ? "casa" : "musculacao",
      })
    );
  });
}

processBodyPartModule(peitoData, "Peito");
processBodyPartModule(costasData, "Costas");
processBodyPartModule(ombrosData, "Ombros");
processBodyPartModule(bicepsData, "Bíceps");
processBodyPartModule(tricepsData, "Tríceps");
processBodyPartModule(quadricepsData, "Quadríceps");
processBodyPartModule(posteriorData, "Posterior de coxa");
processBodyPartModule(gluteosData, "Glúteos");
processBodyPartModule(panturrilhaData, "Panturrilhas");
processBodyPartModule(antebracoData, "Antebraço");

// ----------------------------------------------------
// 2) CASA — BASE PREMIUM (100+ exercícios exclusivos)
// ----------------------------------------------------

if (Array.isArray(homePremium) && homePremium.length > 0) {
  homePremium.forEach((ex: any, index: number) => {
    casa.push(
      buildExercise(ex, {
        id: `casa-premium-${index}`,
        group: ex.group || "Treino em casa",
        modality: "casa",
      })
    );
  });
}

// ----------------------------------------------------
// 3) CORRIDA — planilhas completas
// ----------------------------------------------------

const corridaExtra = (corridaData as any).corrida_extra;

if (corridaExtra) {
  Object.keys(corridaExtra).forEach((level) => {
    corridaExtra[level].forEach((plan: any, index: number) => {
      corrida.push({
        id: `corrida-${level}-${index}`,
        name: plan?.name || plan?.goal || `Planilha ${level} #${index + 1}`,
        modality: "corrida",
        group: "Planilha de corrida",
        level:
          level === "iniciante"
            ? "iniciante"
            : level === "intermediario"
            ? "intermediario"
            : "avancado",
        series: plan?.sessions,
        tempo: plan?.time,
        intensity: plan?.intensity,
        notes:
          Array.isArray(plan.days) && plan.days.length > 0
            ? plan.days.join(" • ")
            : plan?.description,
      });
    });
  });
}

// ----------------------------------------------------
// 4) SPINNING — treinos completos
// ----------------------------------------------------

const spinningExtra = (spinningData as any).spinning_extra;

if (spinningExtra) {
  Object.keys(spinningExtra).forEach((level) => {
    spinningExtra[level].forEach((w: any, index: number) => {
      spinning.push({
        id: `spinning-${level}-${index}`,
        name: w?.name || `Spinning ${level} #${index + 1}`,
        modality: "spinning",
        group: "Spinning / Bike Indoor",
        level:
          level === "iniciante"
            ? "iniciante"
            : level === "intermediario"
            ? "intermediario"
            : "avancado",
        tempo: w?.time,
        intensity: w?.intensity,
        notes:
          Array.isArray(w?.blocks) && w.blocks.length > 0
            ? w.blocks.join(" • ")
            : w?.description,
      });
    });
  });
}

// ----------------------------------------------------
// 5) CROSSFIT — WODs premium (30 modelos)
// ----------------------------------------------------

const crossRaw = extractFirstArray(crossData);

crossfit =
  crossRaw?.map((w: any, index: number) => {
    const blocks =
      Array.isArray(w?.blocks) && w.blocks.length > 0
        ? w.blocks.join(" • ")
        : undefined;

    let notes = blocks || w?.description;

    if (Array.isArray(w?.exercises)) {
      const line = w.exercises
        .map((e: any) => `${e?.reps}x ${e?.name}`)
        .join(" • ");
      notes = notes ? `${notes} • ${line}` : line;
    }

    return {
      id: `crossfit-${index}`,
      name: w?.name || w?.title || `WOD ${index + 1}`,
      modality: "crossfit",
      group: w?.level || "Cross Training",
      level:
        normalize(w?.level).includes("iniciante")
          ? "iniciante"
          : normalize(w?.level).includes("intermedi")
          ? "intermediario"
          : normalize(w?.level).includes("avanc")
          ? "avancado"
          : undefined,
      series: w?.rounds,
      reps: w?.reps,
      rest: w?.rest,
      tempo: w?.time,
      intensity: w?.intensity,
      notes,
    };
  }) || [];

// ----------------------------------------------------
// 6) UNIFICAÇÃO FINAL
// ----------------------------------------------------

const fullDBInternal: ExerciseRecord[] = [
  ...musculacao,
  ...casa,
  ...corrida,
  ...spinning,
  ...crossfit,
];

const fullDB = fullDBInternal.filter(
  (ex) => !!ex.name && !!ex.group && !!ex.modality
);

export default fullDB;

