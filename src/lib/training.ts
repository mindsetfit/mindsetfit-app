// ============================================
// MINDSETFIT - MOTOR DE TREINOS
// ============================================

import { Exercise, WorkoutPlan, Workout, WorkoutExercise } from './types';

// ============================================
// BANCO DE EXERCÍCIOS
// ============================================

export const EXERCISE_DATABASE: Exercise[] = [
  // PEITO
  { id: 'ex1', name: 'Supino reto com barra', muscleGroup: 'Peito', equipment: 'Barra', difficulty: 'intermediate', description: 'Exercício composto para peitoral', execution: ['Deite no banco', 'Pegada na largura dos ombros', 'Desça controlado', 'Empurre explosivo'], commonMistakes: ['Tirar glúteos do banco', 'Barra muito alta no peito'] },
  { id: 'ex2', name: 'Supino inclinado com halteres', muscleGroup: 'Peito', equipment: 'Halteres', difficulty: 'intermediate', description: 'Foco em peitoral superior', execution: ['Banco a 30-45°', 'Halteres alinhados', 'Desça até alongar', 'Suba contraindo'], commonMistakes: ['Inclina��ão excessiva', 'Movimentos bruscos'] },
  { id: 'ex3', name: 'Crucifixo', muscleGroup: 'Peito', equipment: 'Halteres', difficulty: 'beginner', description: 'Isolamento do peitoral', execution: ['Braços levemente flexionados', 'Abra controlado', 'Feche contraindo'], commonMistakes: ['Flexionar muito os cotovelos', 'Peso excessivo'] },
  { id: 'ex4', name: 'Flexão de braço', muscleGroup: 'Peito', equipment: 'Peso corporal', difficulty: 'beginner', description: 'Exercício funcional', execution: ['Mãos na largura dos ombros', 'Corpo alinhado', 'Desça até 90°', 'Suba explosivo'], commonMistakes: ['Quadril caído', 'Amplitude incompleta'] },
  
  // COSTAS
  { id: 'ex5', name: 'Barra fixa', muscleGroup: 'Costas', equipment: 'Barra fixa', difficulty: 'advanced', description: 'Exercício composto para dorsais', execution: ['Pegada pronada', 'Puxe até o queixo', 'Desça controlado'], commonMistakes: ['Balanço excessivo', 'Não descer completo'] },
  { id: 'ex6', name: 'Remada curvada', muscleGroup: 'Costas', equipment: 'Barra', difficulty: 'intermediate', description: 'Desenvolvimento das costas', execution: ['Tronco a 45°', 'Puxe até o abdômen', 'Cotovelos próximos'], commonMistakes: ['Tronco muito ereto', 'Usar impulso'] },
  { id: 'ex7', name: 'Pulldown', muscleGroup: 'Costas', equipment: 'Máquina', difficulty: 'beginner', description: 'Alternativa à barra fixa', execution: ['Pegada larga', 'Puxe até o peito', 'Controle a subida'], commonMistakes: ['Inclinar muito para trás', 'Usar peso excessivo'] },
  { id: 'ex8', name: 'Remada unilateral', muscleGroup: 'Costas', equipment: 'Halter', difficulty: 'beginner', description: 'Isolamento unilateral', execution: ['Apoie no banco', 'Puxe o halter', 'Cotovelo próximo'], commonMistakes: ['Rotação do tronco', 'Amplitude curta'] },
  
  // OMBROS
  { id: 'ex9', name: 'Desenvolvimento militar', muscleGroup: 'Ombros', equipment: 'Barra', difficulty: 'intermediate', description: 'Exercício composto para ombros', execution: ['Barra na altura do queixo', 'Empurre acima da cabeça', 'Desça controlado'], commonMistakes: ['Arquear as costas', 'Travar os cotovelos'] },
  { id: 'ex10', name: 'Elevação lateral', muscleGroup: 'Ombros', equipment: 'Halteres', difficulty: 'beginner', description: 'Isolamento do deltoide lateral', execution: ['Braços levemente flexionados', 'Eleve até a linha dos ombros', 'Desça controlado'], commonMistakes: ['Elevar muito alto', 'Usar impulso'] },
  { id: 'ex11', name: 'Elevação frontal', muscleGroup: 'Ombros', equipment: 'Halteres', difficulty: 'beginner', description: 'Foco no deltoide anterior', execution: ['Braços estendidos', 'Eleve até a linha dos olhos', 'Alterne os braços'], commonMistakes: ['Balanço do corpo', 'Peso excessivo'] },
  
  // PERNAS
  { id: 'ex12', name: 'Agachamento livre', muscleGroup: 'Quadríceps', equipment: 'Barra', difficulty: 'advanced', description: 'Rei dos exercícios', execution: ['Barra nas costas', 'Desça até paralelo', 'Suba explosivo'], commonMistakes: ['Joelhos para dentro', 'Não descer completo'] },
  { id: 'ex13', name: 'Leg press 45°', muscleGroup: 'Quadríceps', equipment: 'Máquina', difficulty: 'beginner', description: 'Alternativa ao agachamento', execution: ['Pés na largura dos ombros', 'Desça até 90°', 'Empurre com os calcanhares'], commonMistakes: ['Tirar glúteos do banco', 'Travar os joelhos'] },
  { id: 'ex14', name: 'Stiff', muscleGroup: 'Posterior', equipment: 'Barra', difficulty: 'intermediate', description: 'Foco em posterior e glúteos', execution: ['Joelhos levemente flexionados', 'Desça a barra', 'Suba contraindo glúteos'], commonMistakes: ['Flexionar muito os joelhos', 'Arredondar as costas'] },
  { id: 'ex15', name: 'Cadeira extensora', muscleGroup: 'Quadríceps', equipment: 'Máquina', difficulty: 'beginner', description: 'Isolamento do quadríceps', execution: ['Ajuste o banco', 'Estenda as pernas', 'Desça controlado'], commonMistakes: ['Movimento brusco', 'Não estender completo'] },
  { id: 'ex16', name: 'Mesa flexora', muscleGroup: 'Posterior', equipment: 'Máquina', difficulty: 'beginner', description: 'Isolamento do posterior', execution: ['Deite na máquina', 'Flexione as pernas', 'Controle a descida'], commonMistakes: ['Elevar o quadril', 'Amplitude curta'] },
  
  // GLÚTEOS
  { id: 'ex17', name: 'Hip thrust', muscleGroup: 'Glúteos', equipment: 'Barra', difficulty: 'intermediate', description: 'Melhor exercício para glúteos', execution: ['Costas no banco', 'Barra no quadril', 'Empurre até alinhar', 'Contraia no topo'], commonMistakes: ['Hiperextensão lombar', 'Não contrair no topo'] },
  { id: 'ex18', name: 'Agachamento sumô', muscleGroup: 'Glúteos', equipment: 'Halter', difficulty: 'beginner', description: 'Foco em glúteos e interno de coxa', execution: ['Pés afastados', 'Pontas para fora', 'Desça profundo'], commonMistakes: ['Joelhos para dentro', 'Tronco inclinado'] },
  { id: 'ex19', name: 'Elevação pélvica', muscleGroup: 'Glúteos', equipment: 'Peso corporal', difficulty: 'beginner', description: 'Ativação de glúteos', execution: ['Deite de costas', 'Pés no chão', 'Eleve o quadril', 'Contraia no topo'], commonMistakes: ['Usar impulso', 'Não contrair'] },
  
  // BÍCEPS
  { id: 'ex20', name: 'Rosca direta', muscleGroup: 'Bíceps', equipment: 'Barra', difficulty: 'beginner', description: 'Exercício clássico de bíceps', execution: ['Pegada supinada', 'Cotovelos fixos', 'Flexione até o topo'], commonMistakes: ['Balançar o corpo', 'Cotovelos para frente'] },
  { id: 'ex21', name: 'Rosca alternada', muscleGroup: 'Bíceps', equipment: 'Halteres', difficulty: 'beginner', description: 'Trabalho unilateral', execution: ['Alterne os braços', 'Gire o punho', 'Controle a descida'], commonMistakes: ['Usar impulso', 'Não girar o punho'] },
  
  // TRÍCEPS
  { id: 'ex22', name: 'Tríceps testa', muscleGroup: 'Tríceps', equipment: 'Barra', difficulty: 'intermediate', description: 'Isolamento do tríceps', execution: ['Deite no banco', 'Barra acima da testa', 'Flexione apenas cotovelos'], commonMistakes: ['Mover os ombros', 'Abrir os cotovelos'] },
  { id: 'ex23', name: 'Tríceps corda', muscleGroup: 'Tríceps', equipment: 'Cabo', difficulty: 'beginner', description: 'Isolamento com cabo', execution: ['Cotovelos fixos', 'Estenda para baixo', 'Abra a corda no final'], commonMistakes: ['Mover os cotovelos', 'Não estender completo'] },
  
  // ABDÔMEN
  { id: 'ex24', name: 'Abdominal supra', muscleGroup: 'Abdômen', equipment: 'Peso corporal', difficulty: 'beginner', description: 'Reto abdominal superior', execution: ['Deite de costas', 'Mãos na cabeça', 'Suba o tronco'], commonMistakes: ['Puxar o pescoço', 'Usar impulso'] },
  { id: 'ex25', name: 'Prancha', muscleGroup: 'Abdômen', equipment: 'Peso corporal', difficulty: 'beginner', description: 'Isometria do core', execution: ['Apoie antebraços', 'Corpo alinhado', 'Mantenha a posição'], commonMistakes: ['Quadril caído', 'Elevar o quadril'] },
];

// ============================================
// GERADOR DE TREINOS PRONTOS
// ============================================

export function generateWorkoutPlan(
  level: 'beginner' | 'intermediate' | 'advanced',
  goal: 'hypertrophy' | 'strength' | 'weight-loss' | 'glutes',
  type: 'ABC' | 'ABCD' | 'FullBody' | 'UpperLower',
  duration: number
): WorkoutPlan {
  
  const exercises = EXERCISE_DATABASE.filter(ex => ex.difficulty === level || level === 'advanced');
  
  let workouts: Workout[] = [];
  
  if (type === 'ABC') {
    workouts = [
      createWorkout('A', ['Peito', 'Tríceps'], exercises, goal, duration),
      createWorkout('B', ['Costas', 'Bíceps'], exercises, goal, duration),
      createWorkout('C', ['Pernas', 'Ombros'], exercises, goal, duration),
    ];
  } else if (type === 'ABCD') {
    workouts = [
      createWorkout('A', ['Peito', 'Tríceps'], exercises, goal, duration),
      createWorkout('B', ['Costas', 'Bíceps'], exercises, goal, duration),
      createWorkout('C', ['Pernas'], exercises, goal, duration),
      createWorkout('D', ['Ombros', 'Abdômen'], exercises, goal, duration),
    ];
  } else if (type === 'FullBody') {
    workouts = [
      createWorkout('Full Body', ['Peito', 'Costas', 'Pernas'], exercises, goal, duration),
    ];
  } else if (type === 'UpperLower') {
    workouts = [
      createWorkout('Superior', ['Peito', 'Costas', 'Ombros', 'Bíceps', 'Tríceps'], exercises, goal, duration),
      createWorkout('Inferior', ['Quadríceps', 'Posterior', 'Glúteos'], exercises, goal, duration),
    ];
  }
  
  return {
    id: `plan-${Date.now()}`,
    userId: '',
    name: `Treino ${type} - ${goal}`,
    type,
    goal,
    level,
    duration,
    frequency: workouts.length,
    workouts,
    createdAt: new Date().toISOString()
  };
}

function createWorkout(
  day: string,
  muscleGroups: string[],
  exercises: Exercise[],
  goal: string,
  duration: number
): Workout {
  
  const selectedExercises: WorkoutExercise[] = [];
  
  muscleGroups.forEach(group => {
    const groupExercises = exercises.filter(ex => ex.muscleGroup === group);
    const count = duration <= 30 ? 2 : duration <= 45 ? 3 : 4;
    
    for (let i = 0; i < Math.min(count, groupExercises.length); i++) {
      const exercise = groupExercises[i];
      selectedExercises.push({
        exerciseId: exercise.id,
        exercise,
        sets: goal === 'strength' ? 5 : goal === 'hypertrophy' ? 4 : 3,
        reps: goal === 'strength' ? '4-6' : goal === 'hypertrophy' ? '8-12' : '12-15',
        rest: goal === 'strength' ? 180 : goal === 'hypertrophy' ? 90 : 60,
        logs: []
      });
    }
  });
  
  return {
    id: `workout-${Date.now()}-${day}`,
    day,
    name: `Treino ${day}`,
    focus: muscleGroups,
    exercises: selectedExercises,
    duration,
    notes: `Foco em ${muscleGroups.join(', ')}`
  };
}

// ============================================
// TREINO ESPECÍFICO PARA GLÚTEOS
// ============================================

export function generateGluteWorkout(level: 'beginner' | 'intermediate' | 'advanced'): WorkoutPlan {
  const gluteExercises = EXERCISE_DATABASE.filter(ex => 
    ex.muscleGroup === 'Glúteos' || ex.muscleGroup === 'Posterior'
  );
  
  const workouts: Workout[] = [
    {
      id: 'glute-a',
      day: 'A',
      name: 'Glúteos - Força',
      focus: ['Glúteos', 'Posterior'],
      exercises: [
        { exerciseId: 'ex17', exercise: EXERCISE_DATABASE.find(e => e.id === 'ex17')!, sets: 4, reps: '8-10', rest: 120, logs: [] },
        { exerciseId: 'ex12', exercise: EXERCISE_DATABASE.find(e => e.id === 'ex12')!, sets: 4, reps: '8-10', rest: 120, logs: [] },
        { exerciseId: 'ex14', exercise: EXERCISE_DATABASE.find(e => e.id === 'ex14')!, sets: 3, reps: '10-12', rest: 90, logs: [] },
        { exerciseId: 'ex18', exercise: EXERCISE_DATABASE.find(e => e.id === 'ex18')!, sets: 3, reps: '12-15', rest: 60, logs: [] },
      ],
      duration: 45
    },
    {
      id: 'glute-b',
      day: 'B',
      name: 'Glúteos - Volume',
      focus: ['Glúteos'],
      exercises: [
        { exerciseId: 'ex19', exercise: EXERCISE_DATABASE.find(e => e.id === 'ex19')!, sets: 4, reps: '15-20', rest: 45, logs: [] },
        { exerciseId: 'ex18', exercise: EXERCISE_DATABASE.find(e => e.id === 'ex18')!, sets: 4, reps: '12-15', rest: 60, logs: [] },
        { exerciseId: 'ex17', exercise: EXERCISE_DATABASE.find(e => e.id === 'ex17')!, sets: 3, reps: '12-15', rest: 90, logs: [] },
        { exerciseId: 'ex16', exercise: EXERCISE_DATABASE.find(e => e.id === 'ex16')!, sets: 3, reps: '15-20', rest: 60, logs: [] },
      ],
      duration: 40
    }
  ];
  
  return {
    id: `glute-plan-${Date.now()}`,
    userId: '',
    name: 'Treino Foco Glúteos',
    type: 'Custom',
    goal: 'glutes',
    level,
    duration: 45,
    frequency: 2,
    workouts,
    createdAt: new Date().toISOString()
  };
}
