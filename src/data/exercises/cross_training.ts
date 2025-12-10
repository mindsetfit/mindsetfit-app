// Base Premium de CrossFit / Cross Training
// Usada pelo full-training-database.ts para popular a modalidade "crossfit"

export type CrossExercise = {
  name: string;
  reps: string;
};

export type CrossWorkout = {
  id: string;
  name: string;
  level: string;        // "Iniciante" | "Intermediário" | "Avançado"
  time?: string;
  intensity?: string;
  rounds?: string;
  reps?: string;
  rest?: string;
  blocks?: string[];
  description?: string;
  exercises?: CrossExercise[];
};

const cross_training: CrossWorkout[] = [
  // ---------------- INICIANTE (10 WODs) ----------------
  {
    id: 'wod-beginner-01',
    name: 'Primeiro Contato',
    level: 'Iniciante',
    time: '12-15 min',
    intensity: 'baixa',
    rounds: 'AMRAP 10 min',
    rest: 'Conforme necessário',
    description: 'WOD de introdução, foco em técnica e controle respiratório.',
    exercises: [
      { name: 'Air Squat', reps: '10' },
      { name: 'Flexão de braço apoiada no joelho', reps: '6' },
      { name: 'Abdominal crunch', reps: '10' },
    ],
  },
  {
    id: 'wod-beginner-02',
    name: 'Base Cardio',
    level: 'Iniciante',
    time: '15 min',
    intensity: 'baixa',
    rounds: 'EMOM 10 min',
    rest: '50s trabalho / 10s pausa',
    exercises: [
      { name: 'Polichinelo', reps: '30s' },
      { name: 'Corrida estacionária leve', reps: '30s' },
    ],
  },
  {
    id: 'wod-beginner-03',
    name: 'Fundamentos Inferiores',
    level: 'Iniciante',
    time: '16-18 min',
    intensity: 'baixa',
    rounds: '4 rounds',
    rest: '1 min entre rounds',
    exercises: [
      { name: 'Agachamento livre', reps: '12' },
      { name: 'Passada alternada', reps: '10/cada perna' },
      { name: 'Prancha frontal', reps: '20s' },
    ],
  },
  {
    id: 'wod-beginner-04',
    name: 'Full Body Leve',
    level: 'Iniciante',
    time: '15-18 min',
    intensity: 'baixa',
    rounds: '3 rounds',
    rest: '1-2 min entre rounds',
    exercises: [
      { name: 'Remada inclinada com mochila', reps: '10' },
      { name: 'Flexão de braço em banco', reps: '8' },
      { name: 'Abdominal bicicleta', reps: '12/cada lado' },
    ],
  },
  {
    id: 'wod-beginner-05',
    name: 'Core em Movimento',
    level: 'Iniciante',
    time: '12-15 min',
    intensity: 'baixa',
    rounds: 'AMRAP 8 min',
    exercises: [
      { name: 'Prancha frontal', reps: '20s' },
      { name: 'Prancha lateral', reps: '15s/cada' },
      { name: 'Elevação de quadril', reps: '12' },
    ],
  },
  {
    id: 'wod-beginner-06',
    name: 'Cardio Técnico',
    level: 'Iniciante',
    time: '15-18 min',
    intensity: 'baixa',
    rounds: '3 rounds',
    rest: '1 min',
    exercises: [
      { name: 'Polichinelo', reps: '30' },
      { name: 'Corrida leve (no lugar)', reps: '40s' },
      { name: 'Agachamento sumô', reps: '12' },
    ],
  },
  {
    id: 'wod-beginner-07',
    name: 'Força Básica',
    level: 'Iniciante',
    time: '16-20 min',
    intensity: 'baixa a moderada',
    rounds: '4 rounds',
    rest: '60-90s',
    exercises: [
      { name: 'Good morning com vassoura', reps: '12' },
      { name: 'Rosca com mochila', reps: '10' },
      { name: 'Tríceps banco', reps: '10' },
    ],
  },
  {
    id: 'wod-beginner-08',
    name: 'Controle de Corpo',
    level: 'Iniciante',
    time: '14-16 min',
    intensity: 'baixa',
    rounds: 'EMOM 12 min',
    exercises: [
      { name: 'Agachamento isométrico na parede', reps: '30s' },
      { name: 'Prancha com apoio de joelhos', reps: '20s' },
    ],
  },
  {
    id: 'wod-beginner-09',
    name: 'Mobilidade Ativa',
    level: 'Iniciante',
    time: '12-15 min',
    intensity: 'baixa',
    rounds: '3 rounds',
    exercises: [
      { name: 'Good morning sem carga', reps: '15' },
      { name: 'Afundo reverso', reps: '10/cada perna' },
      { name: 'Alongamento dinâmico em avanço', reps: '8/cada lado' },
    ],
  },
  {
    id: 'wod-beginner-10',
    name: 'Metcon Leve',
    level: 'Iniciante',
    time: '15-18 min',
    intensity: 'baixa',
    rounds: 'AMRAP 10 min',
    exercises: [
      { name: 'Agachamento livre', reps: '10' },
      { name: 'Flexão em superfície elevada', reps: '6' },
      { name: 'Abdominal crunch', reps: '12' },
    ],
  },

  // -------------- INTERMEDIÁRIO (10 WODs) --------------
  {
    id: 'wod-intermediate-01',
    name: 'Engine Builder',
    level: 'Intermediário',
    time: '18-20 min',
    intensity: 'moderada',
    rounds: 'EMOM 16 min',
    exercises: [
      { name: 'Burpee step-over (sem salto alto)', reps: '6' },
      { name: 'Swing com mochila', reps: '12' },
    ],
  },
  {
    id: 'wod-intermediate-02',
    name: 'Lower Fire',
    level: 'Intermediário',
    time: '20 min',
    intensity: 'moderada',
    rounds: '4 rounds',
    rest: '90s',
    exercises: [
      { name: 'Agachamento com mochila', reps: '15' },
      { name: 'Afundo caminhando', reps: '12/cada perna' },
      { name: 'Elevação de panturrilha em degrau', reps: '20' },
    ],
  },
  {
    id: 'wod-intermediate-03',
    name: 'Push & Pull',
    level: 'Intermediário',
    time: '18-20 min',
    intensity: 'moderada',
    rounds: 'AMRAP 12 min',
    exercises: [
      { name: 'Flexão de braço', reps: '10' },
      { name: 'Remada curvada com mochila', reps: '12' },
      { name: 'Prancha com toques no ombro', reps: '10/cada lado' },
    ],
  },
  {
    id: 'wod-intermediate-04',
    name: 'Metcon 12',
    level: 'Intermediário',
    time: '16-18 min',
    intensity: 'moderada',
    rounds: '3 rounds',
    rest: '1 min',
    exercises: [
      { name: 'Burpee', reps: '8' },
      { name: 'Air squat', reps: '20' },
      { name: 'Abdominal bicicleta', reps: '20' },
    ],
  },
  {
    id: 'wod-intermediate-05',
    name: 'Core + Cardio',
    level: 'Intermediário',
    time: '18-20 min',
    intensity: 'moderada',
    rounds: 'EMOM 14 min',
    exercises: [
      { name: 'Mountain climber', reps: '30s' },
      { name: 'Russian twist com carga', reps: '20' },
    ],
  },
  {
    id: 'wod-intermediate-06',
    name: 'Full Body Power',
    level: 'Intermediário',
    time: '20-22 min',
    intensity: 'moderada a alta',
    rounds: '4 rounds',
    exercises: [
      { name: 'Thruster com mochila', reps: '10' },
      { name: 'Flexão de braço', reps: '10' },
      { name: 'Good morning com carga', reps: '12' },
    ],
  },
  {
    id: 'wod-intermediate-07',
    name: 'Ladder Metcon',
    level: 'Intermediário',
    time: '18-20 min',
    intensity: 'moderada',
    rounds: 'Ladder 2-4-6-8-10',
    exercises: [
      { name: 'Burpee', reps: '2-4-6-8-10' },
      { name: 'Agachamento com salto', reps: '2-4-6-8-10' },
    ],
  },
  {
    id: 'wod-intermediate-08',
    name: 'Grip Destroyer',
    level: 'Intermediário',
    time: '18-20 min',
    intensity: 'moderada',
    rounds: '4 rounds',
    exercises: [
      { name: 'Farmer walk com sacolas', reps: '30-40m' },
      { name: 'Rosca martelo com garrafas', reps: '12' },
      { name: 'Prancha lateral', reps: '30s/cada lado' },
    ],
  },
  {
    id: 'wod-intermediate-09',
    name: 'Posterior & Core',
    level: 'Intermediário',
    time: '18-20 min',
    intensity: 'moderada',
    rounds: '3 rounds',
    exercises: [
      { name: 'Stiff com mochila', reps: '12' },
      { name: 'Elevação de quadril unilateral', reps: '12/cada' },
      { name: 'Hollow hold', reps: '20-30s' },
    ],
  },
  {
    id: 'wod-intermediate-10',
    name: 'Engine 20',
    level: 'Intermediário',
    time: '20 min',
    intensity: 'moderada',
    rounds: 'AMRAP 15 min',
    exercises: [
      { name: 'Polichinelo', reps: '30' },
      { name: 'Passada alternada', reps: '12/cada' },
      { name: 'Flexão de braço', reps: '10' },
    ],
  },

  // ---------------- AVANÇADO (10 WODs) ----------------
  {
    id: 'wod-advanced-01',
    name: 'Classic Chipper',
    level: 'Avançado',
    time: '20-25 min',
    intensity: 'alta',
    rounds: 'For time',
    description: 'WOD em estilo chipper, volume alto com controle técnico.',
    exercises: [
      { name: '50 Air squats', reps: '50' },
      { name: '40 Flexões de braço', reps: '40' },
      { name: '30 Burpees', reps: '30' },
      { name: '20 Abdominais V-up', reps: '20' },
      { name: '10 Burpees com salto alto', reps: '10' },
    ],
  },
  {
    id: 'wod-advanced-02',
    name: 'Leg Destroyer',
    level: 'Avançado',
    time: '18-22 min',
    intensity: 'alta',
    rounds: '5 rounds',
    rest: '90s entre rounds',
    exercises: [
      { name: 'Afundo búlgaro', reps: '12/cada perna' },
      { name: 'Agachamento com salto', reps: '12' },
      { name: 'Cadeira isométrica na parede', reps: '40s' },
    ],
  },
  {
    id: 'wod-advanced-03',
    name: 'EMOM Beast',
    level: 'Avançado',
    time: '20 min',
    intensity: 'alta',
    rounds: 'EMOM 20 min (alternando minutos)',
    exercises: [
      { name: 'Burpee', reps: '10-12' },
      { name: 'Thruster com mochila', reps: '10' },
    ],
  },
  {
    id: 'wod-advanced-04',
    name: 'Core & Engine Hero',
    level: 'Avançado',
    time: '18-22 min',
    intensity: 'alta',
    rounds: '4 rounds',
    exercises: [
      { name: 'Mountain climber rápido', reps: '40s' },
      { name: 'Prancha com toques nos ombros', reps: '20' },
      { name: 'V-ups', reps: '15' },
      { name: 'Corrida estacionária intensa', reps: '40s' },
    ],
  },
  {
    id: 'wod-advanced-05',
    name: 'Posterior Power',
    level: 'Avançado',
    time: '18-20 min',
    intensity: 'alta',
    rounds: '5 rounds',
    exercises: [
      { name: 'Stiff unilateral com carga', reps: '10/cada' },
      { name: 'Hip thrust com isometria', reps: '12 + 10s' },
      { name: 'Good morning com carga', reps: '12' },
    ],
  },
  {
    id: 'wod-advanced-06',
    name: 'Push Master',
    level: 'Avançado',
    time: '18-20 min',
    intensity: 'alta',
    rounds: '4 rounds',
    exercises: [
      { name: 'Flexão explosiva', reps: '10' },
      { name: 'Handstand hold na parede', reps: '30-40s' },
      { name: 'Tríceps banco + isometria', reps: '12 + 10s' },
    ],
  },
  {
    id: 'wod-advanced-07',
    name: 'Sprint Metcon',
    level: 'Avançado',
    time: '14-18 min',
    intensity: 'alta',
    rounds: '8 rounds (Tabata adaptado)',
    exercises: [
      { name: 'Burpee', reps: '20s' },
      { name: 'Agachamento com salto', reps: '20s' },
      { name: 'Descanso', reps: '20s' },
    ],
  },
  {
    id: 'wod-advanced-08',
    name: 'Grip & Core Hell',
    level: 'Avançado',
    time: '18-22 min',
    intensity: 'alta',
    rounds: '4 rounds',
    exercises: [
      { name: 'Farmer walk pesado', reps: '40-50m' },
      { name: 'Rosca 21 com garrafas', reps: '21' },
      { name: 'Hollow hold', reps: '30s' },
    ],
  },
  {
    id: 'wod-advanced-09',
    name: 'Hero Engine 30',
    level: 'Avançado',
    time: '24-30 min',
    intensity: 'alta',
    rounds: 'AMRAP 20 min',
    exercises: [
      { name: 'Burpee', reps: '12' },
      { name: 'Thruster com mochila', reps: '10' },
      { name: 'Passada caminhando', reps: '12/cada' },
      { name: 'Abdominal bicicleta', reps: '20' },
    ],
  },
  {
    id: 'wod-advanced-10',
    name: 'Mindset Beast',
    level: 'Avançado',
    time: '20-25 min',
    intensity: 'alta',
    rounds: 'For time',
    description: 'WOD assinatura MindsetFit para alunos avançados.',
    exercises: [
      { name: '50 Air squats', reps: '50' },
      { name: '40 Mountain climber (cada perna)', reps: '40/cada' },
      { name: '30 Flexões de braço', reps: '30' },
      { name: '20 V-ups', reps: '20' },
      { name: '10 Burpees com salto explosivo', reps: '10' },
    ],
  },
];

export default cross_training;
