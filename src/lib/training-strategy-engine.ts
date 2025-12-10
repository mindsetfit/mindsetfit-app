import fullDB, {
  type ExerciseRecord,
} from '@/lib/full-training-database';

export type ExperienceLevel = 'iniciante' | 'intermediario' | 'avancado';

export type StrategyId =
  | 'fullbody'
  | 'ab'
  | 'abc'
  | 'abcd'
  | 'abcde'
  | 'abcdef'
  | 'upper_lower'
  | 'hiit8';

export type TrainingTechnique =
  | 'rest_pause'
  | 'back_off'
  | 'drop_set'
  | 'myo_reps'
  | 'cluster';

export type TrainingDayExercise = {
  exercise: ExerciseRecord;
  targetSeries: number;
  targetReps?: string;
  restSeconds?: number;
  technique?: TrainingTechnique;
};

export type TrainingDay = {
  id: string;
  label: string;
  groups: string[];
  exercises: TrainingDayExercise[];
};

export type TrainingPlanMeta = {
  strategyId: StrategyId;
  strategyName: string;
  level: ExperienceLevel;
  daysPerWeek: number;
  weeks: 4 | 6 | 8 | 12;
  sessionMinutes: number;
  objective: string;
};

export type TrainingPlan = {
  meta: TrainingPlanMeta;
  days: TrainingDay[];
};

export type GeneratePlanOptions = {
  strategyId: StrategyId;
  level: ExperienceLevel;
  daysPerWeek: number;
  sessionMinutes: number;
  objective?: string;
  /** Para intermediário: se a evolução está positiva, sobe para 4 séries */
  progressionPositive?: boolean;
};

// ----------------------------------------------------
// CONFIGURAÇÃO DAS ESTRATÉGIAS
// ----------------------------------------------------

type StrategyConfig = {
  name: string;
  defaultWeeks: 4 | 6 | 8 | 12;
  /**
   * Template de grupamentos por dia.
   * Cada sub-array é um "dia" com os grupos-alvo.
   * Os nomes precisam bater com ExerciseRecord.group.
   */
  baseDays: string[][];
  isHiit?: boolean;
};

export const TRAINING_STRATEGIES: { id: StrategyId; name: string; description: string }[] = [
  {
    id: 'fullbody',
    name: 'Fullbody 3x',
    description: 'Corpo todo em 3 sessões na semana. Ótimo para iniciantes e rotina corrida.',
  },
  {
    id: 'ab',
    name: 'AB Clássico',
    description: 'Alterna superiores e inferiores. Base sólida para força e estética.',
  },
  {
    id: 'abc',
    name: 'ABC — Peito/Costas, Pernas, Ombros/Braços',
    description: 'Divisão muito usada em estética e hipertrofia geral.',
  },
  {
    id: 'abcd',
    name: 'ABCD — Peito/Tríceps, Costas/Bíceps, Pernas, Ombros/Core',
    description: 'Divisão com foco em volume semanal maior.',
  },
  {
    id: 'abcde',
    name: 'ABCDE — Divisão avançada',
    description: 'Cinco dias de treino, alta densidade, controle fino de fadiga.',
  },
  {
    id: 'abcdef',
    name: 'ABCDEF — Atletas / Alto volume',
    description: 'Seis sessões por semana, uso intenso de técnicas avançadas.',
  },
  {
    id: 'upper_lower',
    name: 'Upper / Lower',
    description: 'Alterna membros superiores e inferiores. Excelente para força.',
  },
  {
    id: 'hiit8',
    name: 'HIIT Strength 8',
    description: 'Combina musculação com blocos HIIT (corrida, spinning, WODs).',
  },
];

const STRATEGY_CONFIG: Record<StrategyId, StrategyConfig> = {
  fullbody: {
    name: 'Fullbody 3x',
    defaultWeeks: 4,
    baseDays: [
      ['Peito', 'Costas', 'Quadríceps', 'Glúteos'],
      ['Ombros', 'Bíceps', 'Tríceps', 'Panturrilhas'],
      ['Peito', 'Costas', 'Posterior de coxa', 'Core — Casa'],
    ],
  },
  ab: {
    name: 'AB Clássico',
    defaultWeeks: 6,
    baseDays: [
      ['Peito', 'Costas', 'Ombros', 'Bíceps', 'Tríceps'],
      ['Quadríceps', 'Posterior de coxa', 'Glúteos', 'Panturrilhas', 'Core — Casa'],
    ],
  },
  abc: {
    name: 'ABC',
    defaultWeeks: 8,
    baseDays: [
      ['Peito', 'Costas', 'Core — Casa'],
      ['Quadríceps', 'Posterior de coxa', 'Glúteos'],
      ['Ombros', 'Bíceps', 'Tríceps', 'Panturrilhas'],
    ],
  },
  abcd: {
    name: 'ABCD',
    defaultWeeks: 8,
    baseDays: [
      ['Peito', 'Tríceps'],
      ['Costas', 'Bíceps'],
      ['Quadríceps', 'Posterior de coxa'],
      ['Ombros', 'Glúteos', 'Panturrilhas', 'Core — Casa'],
    ],
  },
  abcde: {
    name: 'ABCDE',
    defaultWeeks: 12,
    baseDays: [
      ['Peito'],
      ['Costas'],
      ['Quadríceps', 'Panturrilhas'],
      ['Posterior de coxa', 'Glúteos'],
      ['Ombros', 'Bíceps', 'Tríceps', 'Core — Casa'],
    ],
  },
  abcdef: {
    name: 'ABCDEF',
    defaultWeeks: 12,
    baseDays: [
      ['Peito', 'Tríceps'],
      ['Costas', 'Bíceps'],
      ['Quadríceps'],
      ['Posterior de coxa'],
      ['Ombros', 'Core — Casa'],
      ['Glúteos', 'Panturrilhas'],
    ],
  },
  upper_lower: {
    name: 'Upper / Lower',
    defaultWeeks: 8,
    baseDays: [
      ['Peito', 'Costas', 'Ombros', 'Bíceps', 'Tríceps'],
      ['Quadríceps', 'Posterior de coxa', 'Glúteos', 'Panturrilhas', 'Core — Casa'],
    ],
  },
  hiit8: {
    name: 'HIIT Strength 8',
    defaultWeeks: 8,
    baseDays: [
      ['Peito', 'Costas', 'HIIT'],
      ['Quadríceps', 'Glúteos', 'HIIT'],
      ['Ombros', 'Bíceps', 'Tríceps', 'HIIT'],
      ['Posterior de coxa', 'Panturrilhas', 'Core — Casa', 'HIIT'],
    ],
    isHiit: true,
  },
};

// ----------------------------------------------------
// HELPERS
// ----------------------------------------------------

function clampDays(baseDays: string[][], desiredDays: number): string[][] {
  if (desiredDays <= baseDays.length) {
    return baseDays.slice(0, desiredDays);
  }
  const result: string[][] = [];
  let i = 0;
  while (result.length < desiredDays) {
    result.push(baseDays[i % baseDays.length]);
    i += 1;
  }
  return result;
}

function getWeeksForStrategy(
  strategyId: StrategyId,
  level: ExperienceLevel
): 4 | 6 | 8 | 12 {
  const cfg = STRATEGY_CONFIG[strategyId];
  if (strategyId === 'fullbody' && level === 'iniciante') return 4;
  if (strategyId === 'hiit8') return 8;
  return cfg.defaultWeeks;
}

function getExercisesPerSession(sessionMinutes: number): number {
  if (sessionMinutes <= 35) return 4;
  if (sessionMinutes <= 50) return 6;
  if (sessionMinutes <= 65) return 8;
  return 10;
}

function isLowerBodyGroup(group: string): boolean {
  const g = group.toLowerCase();
  return (
    g.includes('quadríceps') ||
    g.includes('quadriceps') ||
    g.includes('posterior') ||
    g.includes('glúteos') ||
    g.includes('gluteos') ||
    g.includes('panturr')
  );
}

function getRestSecondsForGroup(group: string): number {
  // Superiores: 60–90s, Inferiores: 90–180s
  if (isLowerBodyGroup(group)) {
    return 120; // média entre 90–180
  }
  return 75; // média entre 60–90
}

function getTargetSeries(
  level: ExperienceLevel,
  progressionPositive: boolean | undefined
): number {
  if (level === 'iniciante') return 3;
  if (level === 'intermediario') {
    return progressionPositive ? 4 : 3;
  }
  // avançado
  return 4;
}

function getAdvancedTechnique(
  level: ExperienceLevel,
  group: string,
  indexInGroup: number
): TrainingTechnique | undefined {
  if (level !== 'avancado') return undefined;

  const isMainLift = !group.toLowerCase().includes('bíceps') &&
    !group.toLowerCase().includes('biceps') &&
    !group.toLowerCase().includes('tríceps') &&
    !group.toLowerCase().includes('triceps');

  // Técnicas com melhor evidência prática para hipertrofia/força:
  // rest-pause, myo-reps, back-off, cluster e drop-set pontual.
  if (isMainLift) {
    const mod = indexInGroup % 3;
    if (mod === 0) return 'rest_pause';
    if (mod === 1) return 'back_off';
    return 'cluster';
  }

  const mod = indexInGroup % 2;
  if (mod === 0) return 'myo_reps';
  return 'drop_set';
}

// ----------------------------------------------------
// CORE ENGINE
// ----------------------------------------------------

export function generateTrainingPlan(options: GeneratePlanOptions): TrainingPlan {
  const { strategyId, level, daysPerWeek, sessionMinutes, objective } = options;

  const cfg = STRATEGY_CONFIG[strategyId];
  const strategyName = cfg.name;
  const weeks = getWeeksForStrategy(strategyId, level);
  const daysTemplate = clampDays(cfg.baseDays, daysPerWeek);

  const musculacaoDB = fullDB.filter((ex) => ex.modality === 'musculacao');
  const hiitDB = fullDB.filter(
    (ex) =>
      ex.modality === 'corrida' ||
      ex.modality === 'spinning' ||
      ex.modality === 'crossfit'
  );

  const exercisesPerSession = getExercisesPerSession(sessionMinutes);
  const finalDays: TrainingDay[] = [];

  daysTemplate.forEach((groups, dayIndex) => {
    const dayId = `day-${dayIndex + 1}`;
    const dayLabel = `Dia ${String.fromCharCode(65 + dayIndex)}`; // A, B, C...

    const exercisesForDay: TrainingDayExercise[] = [];

    const baseSource = cfg.isHiit ? musculacaoDB : musculacaoDB;
    const perGroupTarget = Math.max(
      1,
      Math.floor(exercisesPerSession / Math.max(groups.length, 1))
    );

    groups.forEach((groupName) => {
      const isHiitGroup = cfg.isHiit && groupName === 'HIIT';

      if (isHiitGroup) {
        const hiitExercises = hiitDB.slice(0, 2);
        hiitExercises.forEach((ex, idx) => {
          exercisesForDay.push({
            exercise: ex,
            targetSeries: level === 'iniciante' ? 3 : 4,
            targetReps: ex.reps ?? 'Intervalos',
            restSeconds: 45,
            technique: level === 'avancado' ? 'myo_reps' : undefined,
          });
        });
        return;
      }

      const groupList = baseSource.filter((ex) => ex.group === groupName);
      if (groupList.length === 0) {
        return;
      }

      const restSeconds = getRestSecondsForGroup(groupName);
      const targetSeries = getTargetSeries(level, options.progressionPositive);

      for (let i = 0; i < perGroupTarget && i < groupList.length; i += 1) {
        const baseExercise = groupList[i];
        exercisesForDay.push({
          exercise: baseExercise,
          targetSeries,
          targetReps: baseExercise.reps,
          restSeconds,
          technique: getAdvancedTechnique(level, groupName, i),
        });
      }
    });

    finalDays.push({
      id: dayId,
      label: dayLabel,
      groups,
      exercises: exercisesForDay,
    });
  });

  const meta: TrainingPlanMeta = {
    strategyId,
    strategyName,
    level,
    daysPerWeek,
    weeks,
    sessionMinutes,
    objective: objective ?? 'Recomposição corporal / hipertrofia',
  };

  return {
    meta,
    days: finalDays,
  };
}
