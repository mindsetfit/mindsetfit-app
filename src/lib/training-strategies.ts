// Estratégias de treino MindsetFit — usadas na Periodização Inteligente

export type Level = 'iniciante' | 'intermediario' | 'avancado';

export type StrategyId =
  | 'fullbody'
  | 'abc'
  | 'abcd'
  | 'abcde'
  | 'upper-lower'
  | 'sup-inf'
  | 'push-pull-legs'
  | 'hiit';

export type MuscleGroupSlug =
  | 'peito'
  | 'costas'
  | 'ombros'
  | 'biceps'
  | 'triceps'
  | 'quadriceps'
  | 'posterior'
  | 'gluteos'
  | 'panturrilhas'
  | 'core'
  | 'pernas'
  | 'superiores'
  | 'inferiores';

export interface TrainingStrategy {
  id: StrategyId;
  name: string;
  description: string;
  minDays: number;
  maxDays: number;
  defaultWeeks: number;
  recommendedFor: Level[];
  /**
   * split = array de dias.
   * Cada dia é uma lista de "slugs" de grupamentos musculares
   * (ex: ['peito', 'triceps']).
   */
  split: MuscleGroupSlug[][];
}

export const TRAINING_STRATEGIES: TrainingStrategy[] = [
  {
    id: 'fullbody',
    name: 'Fullbody 3x',
    description:
      'Corpo inteiro em cada sessão, ótimo para iniciantes e rotina corrida.',
    minDays: 2,
    maxDays: 3,
    defaultWeeks: 4,
    recommendedFor: ['iniciante', 'intermediario'],
    split: [
      ['peito', 'costas', 'ombros', 'quadriceps', 'posterior', 'gluteos', 'core'],
    ],
  },
  {
    id: 'abc',
    name: 'ABC Clássico',
    description: 'Divisão tradicional em peito/costas/pernas + braços e ombros.',
    minDays: 3,
    maxDays: 5,
    defaultWeeks: 8,
    recommendedFor: ['iniciante', 'intermediario', 'avancado'],
    split: [
      ['peito', 'triceps'],
      ['costas', 'biceps'],
      ['pernas', 'ombros', 'core'],
    ],
  },
  {
    id: 'abcd',
    name: 'ABCD Foco em Detalhes',
    description: 'Divide superiores e inferiores com mais volume por sessão.',
    minDays: 4,
    maxDays: 5,
    defaultWeeks: 8,
    recommendedFor: ['intermediario', 'avancado'],
    split: [
      ['peito', 'costas'],
      ['pernas'],
      ['ombros', 'biceps', 'triceps'],
      ['pernas', 'core'],
    ],
  },
  {
    id: 'abcde',
    name: 'ABCDE Avançado',
    description: 'Alto volume por grupamento, ideal para ganho de massa.',
    minDays: 5,
    maxDays: 6,
    defaultWeeks: 12,
    recommendedFor: ['avancado'],
    split: [
      ['peito'],
      ['costas'],
      ['pernas'],
      ['ombros'],
      ['biceps', 'triceps', 'core'],
    ],
  },
  {
    id: 'upper-lower',
    name: 'Upper / Lower',
    description: 'Treinos alternando superiores e inferiores.',
    minDays: 3,
    maxDays: 4,
    defaultWeeks: 8,
    recommendedFor: ['intermediario', 'avancado'],
    split: [
      ['superiores'],
      ['inferiores'],
    ],
  },
  {
    id: 'sup-inf',
    name: 'Superiores / Inferiores Detalhado',
    description:
      'Versão com ênfase em detalhes de superiores e inferiores separadamente.',
    minDays: 4,
    maxDays: 5,
    defaultWeeks: 8,
    recommendedFor: ['intermediario', 'avancado'],
    split: [
      ['superiores'],
      ['inferiores'],
      ['superiores'],
      ['inferiores'],
    ],
  },
  {
    id: 'push-pull-legs',
    name: 'Push / Pull / Legs',
    description:
      'Divisão empurra / puxa / pernas, excelente para ganho de massa estruturado.',
    minDays: 3,
    maxDays: 6,
    defaultWeeks: 8,
    recommendedFor: ['intermediario', 'avancado'],
    split: [
      ['peito', 'ombros', 'triceps'], // Push
      ['costas', 'biceps'], // Pull
      ['pernas', 'core'], // Legs
    ],
  },
  {
    id: 'hiit',
    name: 'HIIT / Metabólicos (Estratégia 8)',
    description:
      'Sessões focadas em condicionamento, emagrecimento e melhora de VO2, usando corrida, bike, WODs leves e funcionais.',
    minDays: 2,
    maxDays: 4,
    defaultWeeks: 4,
    recommendedFor: ['iniciante', 'intermediario', 'avancado'],
    split: [
      ['pernas', 'core'],
      ['superiores', 'core'],
    ],
  },
];

export function getStrategyById(id: StrategyId): TrainingStrategy | undefined {
  return TRAINING_STRATEGIES.find((s) => s.id === id);
}
