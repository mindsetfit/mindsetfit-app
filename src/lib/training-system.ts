// Sistema de geração inteligente de treinos

import { Exercise, MuscleGroup, getExercisesByMuscleGroup } from './exercises-database';

export type TrainingModel = 'ABC' | 'ABCD' | 'ABCDE' | 'UPPER_LOWER' | 'FULL_BODY';
export type TrainingDay = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado' | 'domingo';

export interface WorkoutExercise {
  exercise: Exercise;
  sets: number;
  reps: string;
  weight?: number;
  notes?: string;
}

export interface WorkoutDay {
  name: string;
  muscleGroups: MuscleGroup[];
  exercises: WorkoutExercise[];
}

export interface TrainingPlan {
  id: string;
  model: TrainingModel;
  days: WorkoutDay[];
  frequency: number;
  selectedDays: TrainingDay[];
  createdAt: string;
}

export interface WorkoutProgress {
  id: string;
  trainingPlanId: string;
  exerciseId: string;
  date: string;
  sets: {
    setNumber: number;
    weight: number;
    reps: number;
    completed: boolean;
  }[];
}

// Divisões de treino por modelo
const TRAINING_DIVISIONS = {
  ABC: [
    { name: 'Treino A - Peito, Ombro e Tríceps', muscleGroups: ['peito', 'ombro', 'triceps'] as MuscleGroup[] },
    { name: 'Treino B - Costas, Trapézio e Bíceps', muscleGroups: ['costas', 'trapezio', 'biceps'] as MuscleGroup[] },
    { name: 'Treino C - Pernas e Abdômen', muscleGroups: ['quadriceps', 'posterior', 'gluteo', 'panturrilha', 'abdomen'] as MuscleGroup[] }
  ],
  ABCD: [
    { name: 'Treino A - Peito e Tríceps', muscleGroups: ['peito', 'triceps'] as MuscleGroup[] },
    { name: 'Treino B - Costas e Bíceps', muscleGroups: ['costas', 'biceps'] as MuscleGroup[] },
    { name: 'Treino C - Ombro e Trapézio', muscleGroups: ['ombro', 'trapezio'] as MuscleGroup[] },
    { name: 'Treino D - Pernas e Abdômen', muscleGroups: ['quadriceps', 'posterior', 'gluteo', 'panturrilha', 'abdomen'] as MuscleGroup[] }
  ],
  ABCDE: [
    { name: 'Treino A - Peito', muscleGroups: ['peito'] as MuscleGroup[] },
    { name: 'Treino B - Costas', muscleGroups: ['costas', 'trapezio'] as MuscleGroup[] },
    { name: 'Treino C - Ombro', muscleGroups: ['ombro'] as MuscleGroup[] },
    { name: 'Treino D - Pernas', muscleGroups: ['quadriceps', 'posterior', 'gluteo', 'panturrilha'] as MuscleGroup[] },
    { name: 'Treino E - Braços e Abdômen', muscleGroups: ['biceps', 'triceps', 'abdomen'] as MuscleGroup[] }
  ],
  UPPER_LOWER: [
    { name: 'Treino A - Superiores (Push)', muscleGroups: ['peito', 'ombro', 'triceps'] as MuscleGroup[] },
    { name: 'Treino B - Inferiores', muscleGroups: ['quadriceps', 'posterior', 'gluteo', 'panturrilha', 'abdomen'] as MuscleGroup[] },
    { name: 'Treino C - Superiores (Pull)', muscleGroups: ['costas', 'trapezio', 'biceps'] as MuscleGroup[] },
    { name: 'Treino D - Inferiores', muscleGroups: ['quadriceps', 'posterior', 'gluteo', 'panturrilha', 'abdomen'] as MuscleGroup[] }
  ],
  FULL_BODY: [
    { name: 'Treino A - Full Body', muscleGroups: ['peito', 'costas', 'ombro', 'quadriceps', 'posterior', 'biceps', 'triceps', 'abdomen'] as MuscleGroup[] },
    { name: 'Treino B - Full Body', muscleGroups: ['peito', 'costas', 'ombro', 'quadriceps', 'posterior', 'biceps', 'triceps', 'abdomen'] as MuscleGroup[] },
    { name: 'Treino C - Full Body', muscleGroups: ['peito', 'costas', 'ombro', 'quadriceps', 'posterior', 'biceps', 'triceps', 'abdomen'] as MuscleGroup[] }
  ]
};

// Número de exercícios por grupo muscular baseado no modelo
const EXERCISES_PER_MUSCLE_GROUP = {
  ABC: { main: 4, secondary: 3 },
  ABCD: { main: 4, secondary: 3 },
  ABCDE: { main: 5, secondary: 4 },
  UPPER_LOWER: { main: 3, secondary: 2 },
  FULL_BODY: { main: 2, secondary: 1 }
};

// Função para gerar treino inteligente
export function generateTrainingPlan(
  model: TrainingModel,
  frequency: number,
  selectedDays: TrainingDay[],
  userLevel: 'iniciante' | 'intermediario' | 'avancado' = 'intermediario'
): TrainingPlan {
  const divisions = TRAINING_DIVISIONS[model];
  const exercisesConfig = EXERCISES_PER_MUSCLE_GROUP[model];
  
  const workoutDays: WorkoutDay[] = divisions.map(division => {
    const exercises: WorkoutExercise[] = [];
    
    division.muscleGroups.forEach((muscleGroup, index) => {
      const isMainMuscle = index < 2; // Primeiros 2 grupos são principais
      const numExercises = isMainMuscle ? exercisesConfig.main : exercisesConfig.secondary;
      
      const availableExercises = getExercisesByMuscleGroup(muscleGroup)
        .filter(ex => {
          // Filtrar por nível do usuário
          if (userLevel === 'iniciante') return ex.difficulty !== 'avancado';
          if (userLevel === 'avancado') return true;
          return ex.difficulty !== 'iniciante';
        });
      
      // Selecionar exercícios variados (diferentes equipamentos)
      const selectedExercises = selectVariedExercises(availableExercises, numExercises);
      
      selectedExercises.forEach(exercise => {
        exercises.push({
          exercise,
          sets: exercise.sets,
          reps: exercise.reps,
          weight: 0,
          notes: ''
        });
      });
    });
    
    return {
      name: division.name,
      muscleGroups: division.muscleGroups,
      exercises
    };
  });
  
  return {
    id: Date.now().toString(),
    model,
    days: workoutDays,
    frequency,
    selectedDays,
    createdAt: new Date().toISOString()
  };
}

// Função para selecionar exercícios variados
function selectVariedExercises(exercises: Exercise[], count: number): Exercise[] {
  if (exercises.length <= count) return exercises;
  
  const selected: Exercise[] = [];
  const usedEquipments = new Set<string>();
  
  // Priorizar variedade de equipamentos
  const shuffled = [...exercises].sort(() => Math.random() - 0.5);
  
  for (const exercise of shuffled) {
    if (selected.length >= count) break;
    
    // Tentar pegar exercícios com equipamentos diferentes
    if (!usedEquipments.has(exercise.equipment) || selected.length >= count - 2) {
      selected.push(exercise);
      usedEquipments.add(exercise.equipment);
    }
  }
  
  // Completar se necessário
  while (selected.length < count && shuffled.length > selected.length) {
    const remaining = shuffled.filter(ex => !selected.includes(ex));
    if (remaining.length > 0) {
      selected.push(remaining[0]);
    } else {
      break;
    }
  }
  
  return selected;
}

// Treinos especializados por grupo muscular (5 variações cada)
export const SPECIALIZED_WORKOUTS = {
  peito: [
    {
      name: 'Peito - Força e Massa',
      focus: 'Hipertrofia com foco em compostos',
      exercises: ['peito-1', 'peito-2', 'peito-3', 'peito-7', 'peito-4']
    },
    {
      name: 'Peito - Definição',
      focus: 'Alto volume com isolamento',
      exercises: ['peito-4', 'peito-7', 'peito-9', 'peito-15', 'peito-5']
    },
    {
      name: 'Peito - Explosão',
      focus: 'Força explosiva e potência',
      exercises: ['peito-1', 'peito-6', 'peito-10', 'peito-16', 'peito-18']
    },
    {
      name: 'Peito - Sem Equipamento',
      focus: 'Treino em casa',
      exercises: ['peito-5', 'peito-6', 'peito-12', 'peito-16', 'peito-10']
    },
    {
      name: 'Peito - Completo',
      focus: 'Trabalho de todas as porções',
      exercises: ['peito-1', 'peito-2', 'peito-3', 'peito-4', 'peito-7', 'peito-13']
    }
  ],
  costas: [
    {
      name: 'Costas - Largura',
      focus: 'Desenvolvimento de dorsais',
      exercises: ['costas-1', 'costas-4', 'costas-7', 'costas-9', 'costas-16']
    },
    {
      name: 'Costas - Espessura',
      focus: 'Densidade e massa',
      exercises: ['costas-2', 'costas-3', 'costas-13', 'costas-11', 'costas-8']
    },
    {
      name: 'Costas - Força Total',
      focus: 'Força e potência',
      exercises: ['costas-5', 'costas-2', 'costas-11', 'costas-13', 'costas-14']
    },
    {
      name: 'Costas - Postura',
      focus: 'Correção postural',
      exercises: ['costas-12', 'costas-6', 'costas-14', 'costas-17', 'costas-18']
    },
    {
      name: 'Costas - Completo',
      focus: 'Trabalho completo',
      exercises: ['costas-1', 'costas-2', 'costas-4', 'costas-8', 'costas-12', 'costas-14']
    }
  ],
  ombro: [
    {
      name: 'Ombro - Massa',
      focus: 'Hipertrofia geral',
      exercises: ['ombro-1', 'ombro-2', 'ombro-3', 'ombro-7', 'ombro-8']
    },
    {
      name: 'Ombro - Definição',
      focus: 'Separação e detalhes',
      exercises: ['ombro-3', 'ombro-6', 'ombro-8', 'ombro-10', 'ombro-14']
    },
    {
      name: 'Ombro - Força',
      focus: 'Desenvolvimento de força',
      exercises: ['ombro-1', 'ombro-12', 'ombro-5', 'ombro-7', 'ombro-4']
    },
    {
      name: 'Ombro - Saúde',
      focus: 'Prevenção de lesões',
      exercises: ['ombro-10', 'ombro-15', 'ombro-17', 'ombro-8', 'ombro-14']
    },
    {
      name: 'Ombro - Completo',
      focus: 'Todas as cabeças',
      exercises: ['ombro-1', 'ombro-3', 'ombro-4', 'ombro-8', 'ombro-10', 'ombro-5']
    }
  ],
  biceps: [
    {
      name: 'Bíceps - Massa',
      focus: 'Volume e hipertrofia',
      exercises: ['biceps-1', 'biceps-2', 'biceps-4', 'biceps-9', 'biceps-15']
    },
    {
      name: 'Bíceps - Pico',
      focus: 'Altura do bíceps',
      exercises: ['biceps-5', 'biceps-9', 'biceps-16', 'biceps-14', 'biceps-2']
    },
    {
      name: 'Bíceps - Força',
      focus: 'Força máxima',
      exercises: ['biceps-1', 'biceps-4', 'biceps-15', 'biceps-8', 'biceps-13']
    },
    {
      name: 'Bíceps - Completo',
      focus: 'Todas as cabeças',
      exercises: ['biceps-1', 'biceps-3', 'biceps-9', 'biceps-12', 'biceps-7', 'biceps-5']
    },
    {
      name: 'Bíceps - Intenso',
      focus: 'Técnicas avançadas',
      exercises: ['biceps-6', 'biceps-13', 'biceps-10', 'biceps-16', 'biceps-12']
    }
  ],
  triceps: [
    {
      name: 'Tríceps - Massa',
      focus: 'Volume e tamanho',
      exercises: ['triceps-1', 'triceps-6', 'triceps-4', 'triceps-2', 'triceps-3']
    },
    {
      name: 'Tríceps - Definição',
      focus: 'Separação e detalhes',
      exercises: ['triceps-3', 'triceps-7', 'triceps-5', 'triceps-12', 'triceps-16']
    },
    {
      name: 'Tríceps - Força',
      focus: 'Força máxima',
      exercises: ['triceps-6', 'triceps-4', 'triceps-15', 'triceps-1', 'triceps-13']
    },
    {
      name: 'Tríceps - Completo',
      focus: 'Todas as cabeças',
      exercises: ['triceps-1', 'triceps-2', 'triceps-3', 'triceps-7', 'triceps-10', 'triceps-5']
    },
    {
      name: 'Tríceps - Casa',
      focus: 'Sem equipamento',
      exercises: ['triceps-4', 'triceps-9', 'triceps-14', 'triceps-11', 'triceps-5']
    }
  ],
  trapezio: [
    {
      name: 'Trapézio - Massa',
      focus: 'Volume e espessura',
      exercises: ['trapezio-1', 'trapezio-2', 'trapezio-5', 'trapezio-9', 'trapezio-4']
    },
    {
      name: 'Trapézio - Postura',
      focus: 'Correção postural',
      exercises: ['trapezio-6', 'trapezio-8', 'trapezio-11', 'trapezio-3', 'trapezio-13']
    },
    {
      name: 'Trapézio - Força',
      focus: 'Força funcional',
      exercises: ['trapezio-9', 'trapezio-4', 'trapezio-15', 'trapezio-1', 'trapezio-14']
    },
    {
      name: 'Trapézio - Completo',
      focus: 'Superior, médio e inferior',
      exercises: ['trapezio-1', 'trapezio-6', 'trapezio-8', 'trapezio-11', 'trapezio-4']
    },
    {
      name: 'Trapézio - Isolamento',
      focus: 'Trabalho específico',
      exercises: ['trapezio-2', 'trapezio-7', 'trapezio-12', 'trapezio-10', 'trapezio-13']
    }
  ],
  quadriceps: [
    {
      name: 'Quadríceps - Massa',
      focus: 'Hipertrofia máxima',
      exercises: ['quadriceps-1', 'quadriceps-2', 'quadriceps-3', 'quadriceps-7', 'quadriceps-4']
    },
    {
      name: 'Quadríceps - Definição',
      focus: 'Separação muscular',
      exercises: ['quadriceps-4', 'quadriceps-5', 'quadriceps-6', 'quadriceps-11', 'quadriceps-8']
    },
    {
      name: 'Quadríceps - Força',
      focus: 'Força máxima',
      exercises: ['quadriceps-1', 'quadriceps-2', 'quadriceps-3', 'quadriceps-15', 'quadriceps-7']
    },
    {
      name: 'Quadríceps - Funcional',
      focus: 'Movimentos funcionais',
      exercises: ['quadriceps-5', 'quadriceps-6', 'quadriceps-11', 'quadriceps-14', 'quadriceps-17']
    },
    {
      name: 'Quadríceps - Completo',
      focus: 'Trabalho completo',
      exercises: ['quadriceps-1', 'quadriceps-3', 'quadriceps-4', 'quadriceps-5', 'quadriceps-8', 'quadriceps-16']
    }
  ],
  posterior: [
    {
      name: 'Posterior - Massa',
      focus: 'Volume e tamanho',
      exercises: ['posterior-1', 'posterior-3', 'posterior-2', 'posterior-7', 'posterior-11']
    },
    {
      name: 'Posterior - Força',
      focus: 'Força excêntrica',
      exercises: ['posterior-4', 'posterior-3', 'posterior-11', 'posterior-1', 'posterior-7']
    },
    {
      name: 'Posterior - Isolamento',
      focus: 'Trabalho específico',
      exercises: ['posterior-2', 'posterior-6', 'posterior-10', 'posterior-14', 'posterior-12']
    },
    {
      name: 'Posterior - Funcional',
      focus: 'Movimentos funcionais',
      exercises: ['posterior-3', 'posterior-9', 'posterior-15', 'posterior-8', 'posterior-5']
    },
    {
      name: 'Posterior - Completo',
      focus: 'Trabalho completo',
      exercises: ['posterior-1', 'posterior-2', 'posterior-3', 'posterior-4', 'posterior-8', 'posterior-15']
    }
  ],
  gluteo: [
    {
      name: 'Glúteos - Massa',
      focus: 'Volume máximo',
      exercises: ['gluteo-1', 'gluteo-4', 'gluteo-2', 'gluteo-6', 'gluteo-9']
    },
    {
      name: 'Glúteos - Definição',
      focus: 'Separação e forma',
      exercises: ['gluteo-5', 'gluteo-8', 'gluteo-11', 'gluteo-14', 'gluteo-16']
    },
    {
      name: 'Glúteos - Força',
      focus: 'Força e potência',
      exercises: ['gluteo-1', 'gluteo-9', 'gluteo-2', 'gluteo-7', 'gluteo-15']
    },
    {
      name: 'Glúteos - Ativação',
      focus: 'Conexão mente-músculo',
      exercises: ['gluteo-11', 'gluteo-14', 'gluteo-16', 'gluteo-10', 'gluteo-5']
    },
    {
      name: 'Glúteos - Completo',
      focus: 'Máximo, médio e mínimo',
      exercises: ['gluteo-1', 'gluteo-4', 'gluteo-5', 'gluteo-8', 'gluteo-11', 'gluteo-13']
    }
  ],
  panturrilha: [
    {
      name: 'Panturrilha - Massa',
      focus: 'Volume e tamanho',
      exercises: ['panturrilha-1', 'panturrilha-3', 'panturrilha-6', 'panturrilha-11', 'panturrilha-2']
    },
    {
      name: 'Panturrilha - Definição',
      focus: 'Separação muscular',
      exercises: ['panturrilha-5', 'panturrilha-7', 'panturrilha-9', 'panturrilha-12', 'panturrilha-14']
    },
    {
      name: 'Panturrilha - Força',
      focus: 'Força máxima',
      exercises: ['panturrilha-1', 'panturrilha-3', 'panturrilha-6', 'panturrilha-11', 'panturrilha-15']
    },
    {
      name: 'Panturrilha - Completo',
      focus: 'Gastrocnêmio e sóleo',
      exercises: ['panturrilha-1', 'panturrilha-2', 'panturrilha-4', 'panturrilha-7', 'panturrilha-12']
    },
    {
      name: 'Panturrilha - Casa',
      focus: 'Sem equipamento',
      exercises: ['panturrilha-4', 'panturrilha-5', 'panturrilha-10', 'panturrilha-14', 'panturrilha-15']
    }
  ],
  abdomen: [
    {
      name: 'Abdômen - Definição',
      focus: 'Six pack visível',
      exercises: ['abdomen-1', 'abdomen-3', 'abdomen-4', 'abdomen-8', 'abdomen-13']
    },
    {
      name: 'Abdômen - Core',
      focus: 'Estabilização',
      exercises: ['abdomen-2', 'abdomen-5', 'abdomen-9', 'abdomen-11', 'abdomen-14']
    },
    {
      name: 'Abdômen - Oblíquos',
      focus: 'Laterais e rotação',
      exercises: ['abdomen-4', 'abdomen-5', 'abdomen-7', 'abdomen-15', 'abdomen-17']
    },
    {
      name: 'Abdômen - Avançado',
      focus: 'Técnicas intensas',
      exercises: ['abdomen-8', 'abdomen-14', 'abdomen-15', 'abdomen-6', 'abdomen-13']
    },
    {
      name: 'Abdômen - Completo',
      focus: 'Trabalho total',
      exercises: ['abdomen-1', 'abdomen-2', 'abdomen-3', 'abdomen-4', 'abdomen-7', 'abdomen-13']
    }
  ]
};

// Função para salvar progresso do treino
export function saveWorkoutProgress(progress: WorkoutProgress): void {
  const saved = JSON.parse(localStorage.getItem('workoutProgress') || '[]');
  saved.push(progress);
  localStorage.setItem('workoutProgress', JSON.stringify(saved));
}

// Função para buscar progresso
export function getWorkoutProgress(trainingPlanId: string): WorkoutProgress[] {
  const saved = JSON.parse(localStorage.getItem('workoutProgress') || '[]');
  return saved.filter((p: WorkoutProgress) => p.trainingPlanId === trainingPlanId);
}

// Função para gerar relatório de 4 semanas
export function generateProgressReport(trainingPlanId: string): any {
  const progress = getWorkoutProgress(trainingPlanId);
  
  // Agrupar por exercício
  const byExercise: { [key: string]: WorkoutProgress[] } = {};
  progress.forEach(p => {
    if (!byExercise[p.exerciseId]) {
      byExercise[p.exerciseId] = [];
    }
    byExercise[p.exerciseId].push(p);
  });
  
  // Calcular evolução
  const report: any = {
    totalWorkouts: progress.length,
    exercisesProgress: {}
  };
  
  Object.keys(byExercise).forEach(exerciseId => {
    const exerciseProgress = byExercise[exerciseId].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    
    if (exerciseProgress.length >= 2) {
      const first = exerciseProgress[0];
      const last = exerciseProgress[exerciseProgress.length - 1];
      
      const firstAvgWeight = first.sets.reduce((sum, s) => sum + s.weight, 0) / first.sets.length;
      const lastAvgWeight = last.sets.reduce((sum, s) => sum + s.weight, 0) / last.sets.length;
      
      const improvement = ((lastAvgWeight - firstAvgWeight) / firstAvgWeight) * 100;
      
      report.exercisesProgress[exerciseId] = {
        initialWeight: firstAvgWeight,
        currentWeight: lastAvgWeight,
        improvement: improvement.toFixed(1) + '%',
        totalSessions: exerciseProgress.length
      };
    }
  });
  
  return report;
}
