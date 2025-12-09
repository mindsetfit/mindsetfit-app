// FULL TRAINING DATABASE — versão corrigida (sem Core / Abdômen quebrado)

import * as peitoData from '@/data/exercises/peito';
import * as costasData from '@/data/exercises/costas';
import * as ombrosData from '@/data/exercises/ombros';
import * as bicepsData from '@/data/exercises/biceps';
import * as tricepsData from '@/data/exercises/triceps';
import * as quadricepsData from '@/data/exercises/quadriceps';
import * as posteriorData from '@/data/exercises/posterior';
import * as gluteosData from '@/data/exercises/gluteos';
// ❌ REMOVIDO: coreData (arquivo não existe)
import * as panturrilhaData from '@/data/exercises/panturrilha';
import * as antebracoData from '@/data/exercises/antebraco';

import home_training from '@/data/exercises/home_training';
import corrida_extra from '@/data/exercises/corrida';
import spinning_extra from '@/data/exercises/spinning';
import cross_training from '@/data/exercises/cross_training';

export type ExerciseRecord = {
  id: string;
  group: string;
  name: string;
  series?: number;
  reps?: string;
  rest?: string;
  description?: string;
  modality: 'musculacao' | 'casa' | 'corrida' | 'spinning' | 'crossfit';
};

// ----------------------------------------
// Funções auxiliares
// ----------------------------------------

function extractArray(mod: any): any[] {
  const key = Object.keys(mod)[0];
  return mod[key] || [];
}

function mapBodypart(arr: any[], label: string, modality: ExerciseRecord['modality']): ExerciseRecord[] {
  return arr.map((item, index) => ({
    id: `${modality}-${label}-${index}`,
    group: label,
    name: item.name || '',
    reps: item.reps || item.repeticoes || undefined,
    series: item.series || item.series || undefined,
    rest: item.descanso || undefined,
    description: item.description || item.execucao || undefined,
    modality,
  }));
}

// ----------------------------------------
// GRUPOS DE MUSCULAÇÃO COMPLETOS
// ----------------------------------------

const musculacao = [
  ...mapBodypart(extractArray(peitoData), 'Peito', 'musculacao'),
  ...mapBodypart(extractArray(costasData), 'Costas', 'musculacao'),
  ...mapBodypart(extractArray(ombrosData), 'Ombros', 'musculacao'),
  ...mapBodypart(extractArray(bicepsData), 'Bíceps', 'musculacao'),
  ...mapBodypart(extractArray(tricepsData), 'Tríceps', 'musculacao'),
  ...mapBodypart(extractArray(quadricepsData), 'Quadríceps', 'musculacao'),
  ...mapBodypart(extractArray(posteriorData), 'Posterior', 'musculacao'),
  ...mapBodypart(extractArray(gluteosData), 'Glúteos', 'musculacao'),
  ...mapBodypart(extractArray(panturrilhaData), 'Panturrilha', 'musculacao'),
  ...mapBodypart(extractArray(antebracoData), 'Antebraço', 'musculacao'),
  // ❌ REMOVIDO CORE, porque o arquivo não existe
];

// ----------------------------------------
// CASA (home training)
// ----------------------------------------

const casa = home_training?.exercicios?.map((ex: any, i: number) => ({
  id: `casa-${i}`,
  group: ex.group || 'Treino em Casa',
  name: ex.name || '',
  reps: ex.reps || ex.repeticoes || undefined,
  series: ex.series || undefined,
  rest: ex.descanso || undefined,
  description: ex.description || ex.execucao || undefined,
  modality: 'casa',
})) || [];

// ----------------------------------------
// CORRIDA
// ----------------------------------------

const corrida = corrida_extra?.planilhas?.flatMap((plan: any, i: number) =>
  plan.treinos.map((t: any, idx: number) => ({
    id: `corrida-${i}-${idx}`,
    group: plan.level || 'Corrida',
    name: t.name || '',
    reps: undefined,
    series: undefined,
    rest: undefined,
    description: t.description || '',
    modality: 'corrida',
  }))
) || [];

// ----------------------------------------
// SPINNING
// ----------------------------------------

const spinning = spinning_extra?.iniciante
  .map((t: any, i: number) => ({
    id: `spin-inic-${i}`,
    group: 'Spinning',
    name: t.name,
    description: t.execucao || '',
    reps: undefined,
    series: undefined,
    rest: undefined,
    modality: 'spinning',
  }))
  .concat(
    spinning_extra?.intermediario?.map((t: any, i: number) => ({
      id: `spin-int-${i}`,
      group: 'Spinning',
      name: t.name,
      description: t.execucao || '',
      modality: 'spinning',
    })) || [],
    spinning_extra?.avancado?.map((t: any, i: number) => ({
      id: `spin-adv-${i}`,
      group: 'Spinning',
      name: t.name,
      description: t.execucao || '',
      modality: 'spinning',
    })) || []
  );

// ----------------------------------------
// CROSSFIT
// ----------------------------------------

const crossfit = cross_training?.wods?.map((w: any, i: number) => ({
  id: `crossfit-${i}`,
  group: w.level || 'CrossFit',
  name: w.name,
  description: w.description || '',
  reps: undefined,
  series: undefined,
  rest: undefined,
  modality: 'crossfit',
})) || [];

// ----------------------------------------
// UNIFICAÇÃO COMPLETA
// ----------------------------------------

const fullDB: ExerciseRecord[] = [
  ...musculacao,
  ...casa,
  ...corrida,
  ...spinning,
  ...crossfit,
];

// Segurança: remove registros inválidos
const sanitized = fullDB.filter((ex) => ex.name && ex.group);

export default sanitized;
