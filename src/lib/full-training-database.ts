// FULL TRAINING DATABASE — versão robusta e defensiva

export type ExerciseRecord = {
  id: string;
  group: string;
  name: string;
  series?: string | number;
  reps?: string;
  rest?: string;
  description?: string;
  modality: 'musculacao' | 'casa' | 'corrida' | 'spinning' | 'crossfit';
};

// ----------------------------------------
// Imports brutos dos módulos de exercícios
// ----------------------------------------

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

import * as homeData from '@/data/exercises/home_training';
import * as spinningData from '@/data/exercises/spinning';
import * as corridaData from '@/data/exercises/corrida';
import * as crossData from '@/data/exercises/cross_training';

// ----------------------------------------
// Helpers genéricos
// ----------------------------------------

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

function mapBodypart(
  rawList: any[],
  group: string,
  modality: ExerciseRecord['modality']
): ExerciseRecord[] {
  if (!Array.isArray(rawList)) return [];
  return rawList.map((ex: any, index: number) => ({
    id: `${modality}-${group}-${index}`,
    group,
    name: ex?.name || ex?.title || `${group} exercício ${index + 1}`,
    series:
      ex?.series ||
      ex?.sets ||
      (typeof ex?.seriesReps !== 'undefined' ? String(ex.seriesReps) : undefined),
    reps:
      ex?.reps ||
      ex?.repetitions ||
      ex?.repsRange ||
      (typeof ex?.seriesReps !== 'undefined' ? String(ex.seriesReps) : undefined),
    rest: ex?.rest || ex?.restTime || ex?.interval || ex?.intervalo,
    description:
      ex?.description ||
      ex?.execucao ||
      (Array.isArray(ex?.tips) ? ex.tips.join(' • ') : undefined),
    modality,
  }));
}

// ----------------------------------------
// 1) Musculação
// ----------------------------------------

const musculacao: ExerciseRecord[] = [
  ...mapBodypart(extractFirstArray(peitoData), 'Peito', 'musculacao'),
  ...mapBodypart(extractFirstArray(costasData), 'Costas', 'musculacao'),
  ...mapBodypart(extractFirstArray(ombrosData), 'Ombros', 'musculacao'),
  ...mapBodypart(extractFirstArray(bicepsData), 'Bíceps', 'musculacao'),
  ...mapBodypart(extractFirstArray(tricepsData), 'Tríceps', 'musculacao'),
  ...mapBodypart(extractFirstArray(quadricepsData), 'Quadríceps', 'musculacao'),
  ...mapBodypart(extractFirstArray(posteriorData), 'Posterior de coxa', 'musculacao'),
  ...mapBodypart(extractFirstArray(gluteosData), 'Glúteos', 'musculacao'),
  ...mapBodypart(extractFirstArray(panturrilhaData), 'Panturrilhas', 'musculacao'),
  ...mapBodypart(extractFirstArray(antebracoData), 'Antebraço', 'musculacao'),
];

// ----------------------------------------
// 2) Casa (Home Training)
// ----------------------------------------

const homeArray = extractFirstArray(homeData);

const casa: ExerciseRecord[] = Array.isArray(homeArray)
  ? homeArray.map((ex: any, index: number) => ({
      id: `casa-${index}`,
      group: ex?.group || ex?.category || 'Corpo inteiro',
      name: ex?.name || ex?.title || `Exercício em casa ${index + 1}`,
      series:
        ex?.series ||
        ex?.sets ||
        (typeof ex?.seriesReps !== 'undefined' ? String(ex.seriesReps) : undefined),
      reps:
        ex?.reps ||
        ex?.repetitions ||
        ex?.repsRange ||
        (typeof ex?.seriesReps !== 'undefined' ? String(ex.seriesReps) : undefined),
      rest: ex?.rest || ex?.restTime || ex?.interval || ex?.intervalo,
      description:
        ex?.description ||
        ex?.execucao ||
        (Array.isArray(ex?.tips) ? ex.tips.join(' • ') : undefined),
      modality: 'casa',
    }))
  : [];

// ----------------------------------------
// 3) Spinning
// ----------------------------------------

let spinning: ExerciseRecord[] = [];

const spinningExtra = (spinningData as any).spinning_extra;
if (spinningExtra && typeof spinningExtra === 'object') {
  const levelKeys = Object.keys(spinningExtra);
  for (const level of levelKeys) {
    const list = spinningExtra[level];
    if (!Array.isArray(list)) continue;
    list.forEach((w: any, index: number) => {
      spinning.push({
        id: `spinning-${level}-${index}`,
        group: 'Spinning / Bike indoor',
        name: w?.name || w?.title || `Spinning ${level} #${index + 1}`,
        series: undefined,
        reps: undefined,
        rest: w?.rest || w?.interval || undefined,
        description:
          (Array.isArray(w?.blocks) && w.blocks.join(' • ')) ||
          w?.description ||
          w?.estrutura ||
          '',
        modality: 'spinning',
      });
    });
  }
} else {
  spinning = [];
}

// ----------------------------------------
// 4) Corrida
// ----------------------------------------

let corrida: ExerciseRecord[] = [];

const corridaExtra = (corridaData as any).corrida_extra;
if (corridaExtra && typeof corridaExtra === 'object') {
  const levelKeys = Object.keys(corridaExtra);
  for (const level of levelKeys) {
    const plans = corridaExtra[level];
    if (!Array.isArray(plans)) continue;
    plans.forEach((plan: any, index: number) => {
      corrida.push({
        id: `corrida-${level}-${index}`,
        group: 'Corrida',
        name:
          plan?.name ||
          plan?.goal ||
          `Planilha de corrida ${level} #${index + 1}`,
        series: plan?.sessions ? String(plan.sessions) : undefined,
        reps: undefined,
        rest: undefined,
        description:
          (Array.isArray(plan?.days) && plan.days.join(' • ')) ||
          plan?.description ||
          '',
        modality: 'corrida',
      });
    });
  }
} else {
  corrida = [];
}

// ----------------------------------------
// 5) Cross Training / Crossfit
// ----------------------------------------

let crossfit: ExerciseRecord[] = [];

const crossSource = extractFirstArray(crossData);
if (Array.isArray(crossSource)) {
  crossfit = crossSource.map((w: any, index: number) => ({
    id: `crossfit-${index}`,
    group: w?.level || 'Cross Training / Crossfit',
    name: w?.name || w?.title || `WOD ${index + 1}`,
    series: w?.rounds ? String(w.rounds) : undefined,
    reps: w?.reps || undefined,
    rest: w?.rest || undefined,
    description:
      (Array.isArray(w?.blocks) && w.blocks.join(' • ')) ||
      (Array.isArray(w?.exercises) &&
        w.exercises
          .map((e: any) =>
            [e?.reps, e?.name].filter(Boolean).join('x ')
          )
          .join(' • ')) ||
      w?.description ||
      '',
    modality: 'crossfit',
  }));
} else {
  crossfit = [];
}

// ----------------------------------------
// Unificação final
// ----------------------------------------

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
