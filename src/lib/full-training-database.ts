// FULL TRAINING DATABASE — Versão Premium MindsetFit
// Integra musculação, casa (home premium), corrida, spinning e crossfit
// em um único banco, usado pelo Training Builder Elite.

export type ModalityId = 'musculacao' | 'casa' | 'corrida' | 'spinning' | 'crossfit';

export type ExerciseRecord = {
  id: string;
  name: string;
  modality: ModalityId;
  group: string;
  subgroup?: string;
  level?: 'iniciante' | 'intermediario' | 'avancado';
  series?: number | string;
  reps?: string;
  rest?: string;
  tempo?: string;
  intensity?: string;
  notes?: string;
};

// ----------------------------------------------------
// IMPORTS DAS BASES
// ----------------------------------------------------

// Musculação (academia) por grupamento
import * as peitoData from '@/data/exercises/peito';
import * as costasData from '@/data/exercises/costas';
import * as ombrosData from '@/data/exercises/ombros';
import * as bicepsData from '@/data/exercises/biceps';
import * as tricepsData from '@/data/exercises/triceps';
import * as quadricepsData from '@/data/exercises/quadriceps';
import * as posteriorData from '@/data/exercises/posterior';
import * as gluteosData from '@/data/exercises/gluteos';
import * as panturrilhaData from '@/data/exercises/panturrilha';
import * as antebracoData from '@/data/exercises/antebraco';

// Casa — base premium
import { home_premium, type HomeExercise } from '@/data/exercises/home_premium';

// Corrida / Spinning / Cross Training
import * as corridaData from '@/data/exercises/corrida';
import * as spinningData from '@/data/exercises/spinning';
import * as crossData from '@/data/exercises/cross_training';

// ----------------------------------------------------
// HELPERS GENÉRICOS
// ----------------------------------------------------

function extractFirstArray(mod: any): any[] {
  if (!mod || typeof mod !== 'object') return [];
  if (Array.isArray(mod.default)) return mod.default;

  const keys = Object.keys(mod);
  for (const k of keys) {
    const value = (mod as any)[k];
    if (Array.isArray(value)) return value;
  }
  return [];
}

function normalize(str: any): string {
  return typeof str === 'string' ? str.toLowerCase() : '';
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
      ? base.tips.join(' • ')
      : undefined;

  return {
    id: params.id,
    name: base?.name || base?.title || 'Exercício',
    modality: params.modality,
    group: params.group,
    subgroup: base?.category,
    level: base?.level,
    series:
      base?.series ??
      base?.sets ??
      (typeof base?.seriesReps !== 'undefined'
        ? String(base.seriesReps)
        : undefined),
    reps:
      base?.reps ??
      base?.repetitions ??
      base?.repsRange ??
      (typeof base?.seriesReps !== 'undefined'
        ? String(base.seriesReps)
        : undefined),
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

// Converte um exercício da base home_premium para ExerciseRecord
function mapHomeToRecord(ex: HomeExercise): ExerciseRecord {
  return {
    id: ex.id,
    name: ex.name,
    modality: 'casa',
    group: ex.group,
    level: ex.level,
    series: ex.series,
    reps: ex.reps,
    rest: ex.rest,
    tempo: ex.tempo,
    intensity: ex.intensity,
    notes: ex.notes,
  };
}

// ----------------------------------------------------
// 1) MUSCULAÇÃO (APENAS ACADEMIA)
// ----------------------------------------------------

const musculacao: ExerciseRecord[] = [];
const casa: ExerciseRecord[] = [];
let corrida: ExerciseRecord[] = [];
let spinning: ExerciseRecord[] = [];
let crossfit: ExerciseRecord[] = [];

type GymModule = typeof peitoData;

function processGymModule(mod: GymModule, groupLabel: string, slug: string) {
  const rawList = extractFirstArray(mod);
  rawList.forEach((ex: any, index: number) => {
    musculacao.push(
      buildExercise(ex, {
        id: `musculacao-${slug}-${index}`,
        group: groupLabel,
        modality: 'musculacao',
      })
    );
  });
}

processGymModule(peitoData, 'Peito', 'peito');
processGymModule(costasData, 'Costas', 'costas');
processGymModule(ombrosData, 'Ombros', 'ombros');
processGymModule(bicepsData, 'Bíceps', 'biceps');
processGymModule(tricepsData, 'Tríceps', 'triceps');
processGymModule(quadricepsData, 'Quadríceps', 'quadriceps');
processGymModule(posteriorData, 'Posterior de coxa', 'posterior');
processGymModule(gluteosData, 'Glúteos', 'gluteos');
processGymModule(panturrilhaData, 'Panturrilhas', 'panturrilha');
processGymModule(antebracoData, 'Antebraço', 'antebraco');

// ----------------------------------------------------
// 2) CASA — HOME PREMIUM
// ----------------------------------------------------

casa.push(...home_premium.map(mapHomeToRecord));

// ----------------------------------------------------
// 3) CORRIDA — corrida_extra
// ----------------------------------------------------

const corridaExtra = (corridaData as any).corrida_extra;

if (corridaExtra && typeof corridaExtra === 'object') {
  const levelKeys = Object.keys(corridaExtra);
  levelKeys.forEach((levelKey) => {
    const plans = corridaExtra[levelKey];
    if (!Array.isArray(plans)) return;

    plans.forEach((plan: any, index: number) => {
      const daysText =
        Array.isArray(plan?.days) && plan.days.length > 0
          ? plan.days.join(' • ')
          : undefined;

      corrida.push({
        id: `corrida-${levelKey}-${index}`,
        name:
          plan?.name ||
          plan?.goal ||
          `Planilha de corrida ${levelKey} #${index + 1}`,
        modality: 'corrida',
        group: 'Planilhas de corrida',
        level:
          levelKey === 'iniciante'
            ? 'iniciante'
            : levelKey === 'intermediario'
            ? 'intermediario'
            : levelKey === 'avancado'
            ? 'avancado'
            : undefined,
        series: plan?.sessions,
        reps: undefined,
        rest: undefined,
        tempo: plan?.time,
        intensity: plan?.intensity,
        notes: daysText || plan?.description,
      });
    });
  });
}

// ----------------------------------------------------
// 4) SPINNING — spinning_extra
// ----------------------------------------------------

const spinningExtra = (spinningData as any).spinning_extra;

if (spinningExtra && typeof spinningExtra === 'object') {
  const levelKeys = Object.keys(spinningExtra);
  levelKeys.forEach((levelKey) => {
    const workouts = spinningExtra[levelKey];
    if (!Array.isArray(workouts)) return;

    workouts.forEach((w: any, index: number) => {
      const blocksText =
        Array.isArray(w?.blocks) && w.blocks.length > 0
          ? w.blocks.join(' • ')
          : undefined;

      spinning.push({
        id: `spinning-${levelKey}-${index}`,
        name: w?.name || `Spinning ${levelKey} #${index + 1}`,
        modality: 'spinning',
        group: 'Spinning / Bike indoor',
        level:
          levelKey === 'iniciante'
            ? 'iniciante'
            : levelKey === 'intermediario'
            ? 'intermediario'
            : levelKey === 'avancado'
            ? 'avancado'
            : undefined,
        series: undefined,
        reps: undefined,
        rest: w?.rest || w?.interval,
        tempo: w?.time,
        intensity: w?.intensity,
        notes: blocksText || w?.description,
      });
    });
  });
}

// ----------------------------------------------------
// 5) CROSSFIT — cross_training
// ----------------------------------------------------

const crossSource = extractFirstArray(crossData);

if (Array.isArray(crossSource) && crossSource.length > 0) {
  crossfit = crossSource.map((w: any, index: number): ExerciseRecord => {
    const blocksText =
      Array.isArray(w?.blocks) && w.blocks.length > 0
        ? w.blocks.join(' • ')
        : undefined;

    let notes = blocksText || w?.description;

    if (Array.isArray(w?.exercises) && w.exercises.length > 0) {
      const exLine = w.exercises
        .map((e: any) =>
          [e?.reps, e?.name].filter(Boolean).join('x ')
        )
        .join(' • ');
      notes = notes ? `${notes} • ${exLine}` : exLine;
    }

    const levelText = normalize(w?.level || w?.group || '');

    return {
      id: `crossfit-${index}`,
      name: w?.name || w?.title || `WOD ${index + 1}`,
      modality: 'crossfit',
      group: w?.group || w?.level || 'Cross Training / CrossFit',
      level: levelText.includes('iniciante')
        ? 'iniciante'
        : levelText.includes('intermedi')
        ? 'intermediario'
        : levelText.includes('avanc')
        ? 'avancado'
        : undefined,
      series: w?.rounds,
      reps: w?.reps,
      rest: w?.rest,
      tempo: w?.time,
      intensity: w?.intensity,
      notes,
    };
  });
}

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
  (ex) => ex.name && ex.group && ex.modality
);

export default fullDB;
