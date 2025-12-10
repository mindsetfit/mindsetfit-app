import fullDB, { type ExerciseRecord } from '@/lib/full-training-database';
import {
  TRAINING_STRATEGIES,
  type StrategyId,
  type Level,
  type TrainingStrategy,
  type MuscleGroupSlug,
} from './training-strategies';

export type TrainingPlanExercise = ExerciseRecord & {
  technique?: string;
};

export type TrainingPlanDay = {
  id: string;
  label: string;
  groups: string[];
  exercises: TrainingPlanExercise[];
};

export type TrainingPlanMeta = {
  strategyId: StrategyId;
  strategyName: string;
  level: Level;
  daysPerWeek: number;
  weeks: number;
  sessionMinutes: number;
  objective: string;
};

export type TrainingPlan = {
  meta: TrainingPlanMeta;
  days: TrainingPlanDay[];
};

export type GenerateTrainingPlanOptions = {
  strategyId: StrategyId;
  level: Level;
  daysPerWeek: number;
  weeks: number;
  sessionMinutes: number;
  objective?: string;
};

// ----------------------------------------
// Helpers gerais
// ----------------------------------------

function normalize(str: string | undefined | null): string {
  return typeof str === 'string' ? str.toLowerCase() : '';
}

// Séries por nível + semanas
function getSeriesForLevel(
  level: Level,
  weeks: number,
): number | string {
  if (level === 'iniciante') {
    return 3;
  }
  if (level === 'intermediario') {
    // Se ciclo curto: 3 séries. Se mais longo: progressão 3 → 4.
    return weeks <= 4 ? 3 : '3–4 (progressão ao longo das semanas)';
  }
  // Avançado
  return 4;
}

// Técnicas avançadas (nível avançado)
const ADV_TECHNIQUES = [
  'rest-pause',
  'drop-set',
  'back-off set',
  'cluster set',
];

function getAdvancedTechnique(index: number): string {
  return ADV_TECHNIQUES[index % ADV_TECHNIQUES.length];
}

// Nº de exercícios por sessão (aprox) baseado no tempo
function getExerciseCountForSession(minutes: number): number {
  if (minutes <= 30) return 6;
  if (minutes <= 45) return 8;
  return 10;
}

// Embaralhar de forma simples
function shuffle<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Match de grupamento lógico x grupo do exercício
function matchMuscleGroup(ex: ExerciseRecord, group: MuscleGroupSlug): boolean {
  const g = normalize(ex.group);
  switch (group) {
    case 'peito':
      return g.includes('peito');
    case 'costas':
      return g.includes('costas') || g.includes('dorsal');
    case 'ombros':
      return g.includes('ombro') || g.includes('delto');
    case 'biceps':
      return g.includes('bíceps') || g.includes('biceps');
    case 'triceps':
      return g.includes('tríceps') || g.includes('triceps');
    case 'quadriceps':
      return g.includes('quadríceps') || g.includes('quadriceps');
    case 'posterior':
      return g.includes('posterior');
    case 'gluteos':
      return g.includes('glúteos') || g.includes('gluteos');
    case 'panturrilhas':
      return g.includes('panturrilha');
    case 'core':
      return (
        g.includes('core') ||
        g.includes('abdom') ||
        g.includes('abdome') ||
        g.includes('lombar')
      );
    case 'pernas':
      return (
        matchMuscleGroup(ex, 'quadriceps') ||
        matchMuscleGroup(ex, 'posterior') ||
        matchMuscleGroup(ex, 'gluteos') ||
        matchMuscleGroup(ex, 'panturrilhas')
      );
    case 'superiores':
      return (
        matchMuscleGroup(ex, 'peito') ||
        matchMuscleGroup(ex, 'costas') ||
        matchMuscleGroup(ex, 'ombros') ||
        matchMuscleGroup(ex, 'biceps') ||
        matchMuscleGroup(ex, 'triceps') ||
        matchMuscleGroup(ex, 'core')
      );
    case 'inferiores':
      return (
        matchMuscleGroup(ex, 'pernas') ||
        matchMuscleGroup(ex, 'panturrilhas')
      );
    default:
      return false;
  }
}

// Seleciona exercícios de musculação para um dia
function pickMusculationExercisesForDay(
  groups: MuscleGroupSlug[],
  level: Level,
  weeks: number,
  sessionMinutes: number,
): TrainingPlanExercise[] {
  const musculacao = fullDB.filter((ex) => ex.modality === 'musculacao');

  const candidates = musculacao.filter((ex) =>
    groups.some((g) => matchMuscleGroup(ex, g)),
  );

  const count = getExerciseCountForSession(sessionMinutes);
  const picked = shuffle(candidates).slice(0, count);

  const seriesForLevel = getSeriesForLevel(level, weeks);

  return picked.map((ex, index) => {
    const base: TrainingPlanExercise = { ...ex };

    base.series = seriesForLevel;
    if (level === 'avancado') {
      const tech = getAdvancedTechnique(index);
      base.technique = tech;
      base.notes = base.notes
        ? `${base.notes} • Técnica sugerida: ${tech}`
        : `Técnica sugerida: ${tech}`;
    }

    return base;
  });
}

// Seleciona exercícios HIIT (corrida / spinning / crossfit / casa intensa)
function pickHiitExercisesForDay(
  level: Level,
  weeks: number,
  sessionMinutes: number,
): TrainingPlanExercise[] {
  const hiitBase = fullDB.filter((ex) =>
    ['corrida', 'spinning', 'crossfit'].includes(ex.modality),
  );

  // Podemos incluir alguns exercícios de casa com intensidade alta
  const casaIntensa = fullDB.filter(
    (ex) => ex.modality === 'casa' && normalize(ex.intensity).includes('alta'),
  );

  const pool = [...hiitBase, ...casaIntensa];

  const count = getExerciseCountForSession(sessionMinutes);
  const picked = shuffle(pool).slice(0, count);

  const seriesForLevel = getSeriesForLevel(level, weeks);

  return picked.map((ex, index) => {
    const base: TrainingPlanExercise = { ...ex };

    base.series = seriesForLevel;

    if (level === 'avancado') {
      const tech = getAdvancedTechnique(index);
      base.technique = tech;
      base.notes = base.notes
        ? `${base.notes} • Técnica sugerida: ${tech}`
        : `Técnica sugerida: ${tech}`;
    }

    return base;
  });
}

// ----------------------------------------
// Função principal — gera plano completo
// ----------------------------------------

export function generateTrainingPlan(
  options: GenerateTrainingPlanOptions,
): TrainingPlan {
  const {
    strategyId,
    level,
    daysPerWeek,
    weeks,
    sessionMinutes,
    objective,
  } = options;

  const strategy: TrainingStrategy | undefined = TRAINING_STRATEGIES.find(
    (s) => s.id === strategyId,
  );

  if (!strategy) {
    throw new Error(`Estratégia de treino não encontrada: ${strategyId}`);
  }

  const finalDays = Math.min(
    Math.max(daysPerWeek, strategy.minDays),
    strategy.maxDays,
  );

  const days: TrainingPlanDay[] = [];

  for (let i = 0; i < finalDays; i++) {
    const splitIndex = i % strategy.split.length;
    const groupsForDay = strategy.split[splitIndex];

    const isHiit = strategyId === 'hiit';

    const labelBase =
      strategyId === 'hiit'
        ? `HIIT Dia ${i + 1}`
        : `Treino ${i + 1}`;

    const exercises = isHiit
      ? pickHiitExercisesForDay(level, weeks, sessionMinutes)
      : pickMusculationExercisesForDay(
          groupsForDay,
          level,
          weeks,
          sessionMinutes,
        );

    days.push({
      id: `${strategyId}-day-${i + 1}`,
      label: labelBase,
      groups: groupsForDay,
      exercises,
    });
  }

  const meta: TrainingPlanMeta = {
    strategyId,
    strategyName: strategy.name,
    level,
    daysPerWeek: finalDays,
    weeks,
    sessionMinutes,
    // Texto atualizado: manutenção / emagrecimento-definição / ganho de massa
    objective:
      objective ??
      'manutenção / emagrecimento-definição / ganho de massa',
  };

  return {
    meta,
    days,
  };
}
