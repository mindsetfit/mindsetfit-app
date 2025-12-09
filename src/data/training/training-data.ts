export type Exercise = {
  id: string;
  name: string;
  muscleGroup: string;
  equipment: string;
  type: 'maquina' | 'livre' | 'funcional' | 'cardio' | 'aquecimento' | 'mobilidade' | 'core';
};

export type WorkoutExercise = {
  exerciseId: string;
  series: number;
  reps: string;
  rest: string;
};

export type WorkoutDay = {
  id: string;
  name: string;
  focus: string;
  exercises: WorkoutExercise[];
};

export type TrainingPlan = {
  id: string;
  name: string;
  goal: 'emagrecimento' | 'hipertrofia' | 'performance';
  level: 'iniciante' | 'intermediario' | 'avancado';
  frequencyPerWeek: number;
  days: WorkoutDay[];
};

/**
 * Base de exercícios — aqui podemos ir expandindo depois
 */
export const EXERCISES: Exercise[] = [
  // Peito
  { id: 'supino-reto-barra', name: 'Supino reto com barra', muscleGroup: 'peito', equipment: 'barra + banco', type: 'livre' },
  { id: 'supino-inclinado-halteres', name: 'Supino inclinado com halteres', muscleGroup: 'peito', equipment: 'halteres + banco', type: 'livre' },
  { id: 'voador-maquina', name: 'Voador máquina', muscleGroup: 'peito', equipment: 'máquina voador', type: 'maquina' },

  // Costas
  { id: 'puxada-frente-aberta', name: 'Puxada frente pegada aberta', muscleGroup: 'costas', equipment: 'máquina puxada', type: 'maquina' },
  { id: 'remada-baixa-triangulo', name: 'Remada baixa com triângulo', muscleGroup: 'costas', equipment: 'cabo', type: 'maquina' },
  { id: 'remada-curvada-barra', name: 'Remada curvada com barra', muscleGroup: 'costas', equipment: 'barra', type: 'livre' },

  // Pernas
  { id: 'agachamento-livre', name: 'Agachamento livre', muscleGroup: 'pernas', equipment: 'barra', type: 'livre' },
  { id: 'leg-press-45', name: 'Leg press 45°', muscleGroup: 'pernas', equipment: 'máquina leg press', type: 'maquina' },
  { id: 'cadeira-extensora', name: 'Cadeira extensora', muscleGroup: 'pernas', equipment: 'máquina extensora', type: 'maquina' },
  { id: 'cadeira-flexora', name: 'Cadeira flexora', muscleGroup: 'pernas', equipment: 'máquina flexora', type: 'maquina' },

  // Ombros
  { id: 'desenvolvimento-halteres', name: 'Desenvolvimento com halteres', muscleGroup: 'ombros', equipment: 'halteres', type: 'livre' },
  { id: 'elevacao-lateral-halteres', name: 'Elevação lateral com halteres', muscleGroup: 'ombros', equipment: 'halteres', type: 'livre' },

  // Bíceps / Tríceps
  { id: 'rosca-direta-barra', name: 'Rosca direta com barra', muscleGroup: 'biceps', equipment: 'barra', type: 'livre' },
  { id: 'triceps-polia-alta-corda', name: 'Tríceps polia alta com corda', muscleGroup: 'triceps', equipment: 'cabo + corda', type: 'maquina' },

  // Core
  { id: 'prancha-isometrica', name: 'Prancha isométrica', muscleGroup: 'core', equipment: 'solo', type: 'core' },
  { id: 'abdominal-crunch-maquina', name: 'Abdominal crunch máquina', muscleGroup: 'core', equipment: 'máquina abdominal', type: 'maquina' },

  // Funcional / Aquecimento
  { id: 'kettlebell-swing', name: 'Kettlebell swing', muscleGroup: 'posterior + core', equipment: 'kettlebell', type: 'funcional' },
  { id: 'corda-naval', name: 'Corda naval - ondas', muscleGroup: 'full body', equipment: 'corda naval', type: 'funcional' },
  { id: 'esteira-caminhada', name: 'Caminhada em esteira', muscleGroup: 'cardio', equipment: 'esteira', type: 'cardio' },
  { id: 'bike-ergometrica', name: 'Bike ergométrica', muscleGroup: 'cardio', equipment: 'bike', type: 'cardio' },
];

/**
 * Exemplos de planos de treino — depois expandimos
 */
export const TRAINING_PLANS: TrainingPlan[] = [
  {
    id: 'abc-hipertrofia-intermediario',
    name: 'Treino ABC Hipertrofia',
    goal: 'hipertrofia',
    level: 'intermediario',
    frequencyPerWeek: 3,
    days: [
      {
        id: 'dia-a-peito-triceps',
        name: 'Dia A - Peito + Tríceps',
        focus: 'peito e tríceps',
        exercises: [
          { exerciseId: 'supino-reto-barra', series: 4, reps: '8-10', rest: '60-90s' },
          { exerciseId: 'supino-inclinado-halteres', series: 3, reps: '10-12', rest: '60-90s' },
          { exerciseId: 'voador-maquina', series: 3, reps: '12-15', rest: '60-90s' },
          { exerciseId: 'triceps-polia-alta-corda', series: 3, reps: '10-12', rest: '60s' },
        ],
      },
      {
        id: 'dia-b-costas-biceps',
        name: 'Dia B - Costas + Bíceps',
        focus: 'costas e bíceps',
        exercises: [
          { exerciseId: 'puxada-frente-aberta', series: 4, reps: '8-10', rest: '60-90s' },
          { exerciseId: 'remada-baixa-triangulo', series: 3, reps: '10-12', rest: '60-90s' },
          { exerciseId: 'remada-curvada-barra', series: 3, reps: '8-10', rest: '90s' },
          { exerciseId: 'rosca-direta-barra', series: 3, reps: '10-12', rest: '60s' },
        ],
      },
      {
        id: 'dia-c-pernas-ombros-core',
        name: 'Dia C - Pernas + Ombros + Core',
        focus: 'pernas, ombros e core',
        exercises: [
          { exerciseId: 'agachamento-livre', series: 4, reps: '6-8', rest: '90-120s' },
          { exerciseId: 'leg-press-45', series: 3, reps: '10-12', rest: '90s' },
          { exerciseId: 'cadeira-extensora', series: 3, reps: '12-15', rest: '60-90s' },
          { exerciseId: 'desenvolvimento-halteres', series: 3, reps: '10-12', rest: '60-90s' },
          { exerciseId: 'elevacao-lateral-halteres', series: 3, reps: '12-15', rest: '60s' },
          { exerciseId: 'prancha-isometrica', series: 3, reps: '30-45s', rest: '45-60s' },
        ],
      },
    ],
  },
];
