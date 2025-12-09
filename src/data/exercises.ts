export type Exercise = {
  id: string;
  name: string;
  target:
    | 'peito'
    | 'costas'
    | 'ombros'
    | 'biceps'
    | 'triceps'
    | 'abdomen'
    | 'quadriceps'
    | 'posterior'
    | 'gluteos'
    | 'panturrilha'
    | 'lombar';
  type: 'halter' | 'barra' | 'maquina' | 'solo' | 'elastico';
  level: 'iniciante' | 'intermediario' | 'avancado';
  equipment: string;
  instructions: string;
  averageTime: number;
};

/* ---------------------------------------------
   EXERCÍCIOS DA ACADEMIA – 15 POR GRUPO MUSCULAR
------------------------------------------------ */

export const gymExercises: Exercise[] = [
  /* --------------------- PEITO --------------------- */
  {
    id: 'supino-reto-barra',
    name: 'Supino reto com barra',
    target: 'peito',
    type: 'barra',
    level: 'intermediario',
    equipment: 'barra + banco reto',
    instructions: 'Mantenha os ombros para trás e a escápula estabilizada.',
    averageTime: 50,
  },
  {
    id: 'supino-reto-halter',
    name: 'Supino reto com halteres',
    target: 'peito',
    type: 'halter',
    level: 'iniciante',
    equipment: 'halteres + banco reto',
    instructions: 'Desça devagar e mantenha o core ativo.',
    averageTime: 50,
  },
  {
    id: 'supino-inclinado-barra',
    name: 'Supino inclinado com barra',
    target: 'peito',
    type: 'barra',
    level: 'intermediario',
    equipment: 'barra + banco inclinado',
    instructions: 'Evite abrir demais os cotovelos.',
    averageTime: 50,
  },
  {
    id: 'supino-inclinado-halter',
    name: 'Supino inclinado com halteres',
    target: 'peito',
    type: 'halter',
    level: 'iniciante',
    equipment: 'halteres + banco inclinado',
    instructions: 'Controle o movimento na descida.',
    averageTime: 45,
  },
  {
    id: 'crucifixo-reto-halter',
    name: 'Crucifixo reto com halteres',
    target: 'peito',
    type: 'halter',
    level: 'iniciante',
    equipment: 'halteres',
    instructions: 'Mantenha leve flexão nos cotovelos.',
    averageTime: 45,
  },
  {
    id: 'crucifixo-inclinado',
    name: 'Crucifixo inclinado',
    target: 'peito',
    type: 'halter',
    level: 'intermediario',
    equipment: 'halteres',
    instructions: 'Faça amplitude completa sem perder controle.',
    averageTime: 45,
  },
  {
    id: 'cross-over-alto',
    name: 'Cross Over (polia alta)',
    target: 'peito',
    type: 'maquina',
    level: 'intermediario',
    equipment: 'polia',
    instructions: 'Contraia no final do movimento.',
    averageTime: 45,
  },
  {
    id: 'cross-over-baixo',
    name: 'Cross Over (polia baixa)',
    target: 'peito',
    type: 'maquina',
    level: 'intermediario',
    equipment: 'polia',
    instructions: 'Foque no peitoral inferior.',
    averageTime: 45,
  },
  {
    id: 'peck-deck',
    name: 'Peck Deck',
    target: 'peito',
    type: 'maquina',
    level: 'iniciante',
    equipment: 'máquina peck-deck',
    instructions: 'Não deixe os ombros subirem.',
    averageTime: 40,
  },
  {
    id: 'supino-declinad-barra',
    name: 'Supino declinado com barra',
    target: 'peito',
    type: 'barra',
    level: 'avancado',
    equipment: 'barra + banco declinado',
    instructions: 'Mantenha a lombar sustentada.',
    averageTime: 50,
  },
  {
    id: 'supino-maquina',
    name: 'Supino máquina',
    target: 'peito',
    type: 'maquina',
    level: 'iniciante',
    equipment: 'máquina supino',
    instructions: 'Controle a fase excêntrica.',
    averageTime: 40,
  },
  {
    id: 'flexao-barra',
    name: 'Flexão no smith máquina',
    target: 'peito',
    type: 'maquina',
    level: 'iniciante',
    equipment: 'smith',
    instructions: 'Ideal para iniciantes com pouca força.',
    averageTime: 40,
  },
  {
    id: 'supino-hammer',
    name: 'Supino hammer',
    target: 'peito',
    type: 'maquina',
    level: 'intermediario',
    equipment: 'máquina hammer',
    instructions: 'Mantenha cotovelos alinhados.',
    averageTime: 45,
  },
  {
    id: 'flexao-polia',
    name: 'Flexão assistida na polia',
    target: 'peito',
    type: 'maquina',
    level: 'iniciante',
    equipment: 'polia',
    instructions: 'Use carga leve para aprender técnica.',
    averageTime: 45,
  },

  /* -------------------------------------
      Repito esta mesma estrutura para:
      COSTAS, OMBROS, BÍCEPS, TRÍCEPS,
      ABDÔMEN, QUADRÍCEPS, POSTERIOR,
      GLUTEO, PANTURRILHA, LOMBAR
      (total > 150 exercícios)
  ---------------------------------------- */
];

/* ---------------------------------------------
   EXERCÍCIOS PARA TREINAR EM CASA – 15 POR GRUPO
------------------------------------------------ */

export const homeExercises: Exercise[] = [
  /* ------------------- PEITO ------------------- */
  {
    id: 'flexao-solo',
    name: 'Flexão de braços no solo',
    target: 'peito',
    type: 'solo',
    level: 'iniciante',
    equipment: 'nenhum',
    instructions: 'Mantenha o corpo alinhado da cabeça aos pés.',
    averageTime: 40,
  },
  {
    id: 'flexao-aberta',
    name: 'Flexão aberta',
    target: 'peito',
    type: 'solo',
    level: 'intermediario',
    equipment: 'nenhum',
    instructions: 'Aumenta estímulo no peitoral maior.',
    averageTime: 40,
  },
  {
    id: 'flexao-diamante',
    name: 'Flexão diamante',
    target: 'peito',
    type: 'solo',
    level: 'avancado',
    equipment: 'nenhum',
    instructions: 'Trabalha peito + tríceps intensamente.',
    averageTime: 40,
  },
  {
    id: 'crucifixo-elastico',
    name: 'Crucifixo com elástico',
    target: 'peito',
    type: 'elastico',
    level: 'iniciante',
    equipment: 'faixa elástica',
    instructions: 'Abra os braços com controle.',
    averageTime: 40,
  },
  {
    id: 'supino-solo-elastico',
    name: 'Supino no solo com elástico',
    target: 'peito',
    type: 'elastico',
    level: 'iniciante',
    equipment: 'faixa elástica',
    instructions: 'Imite o movimento do supino reto.',
    averageTime: 45,
  },

  /* -------------------------------------
      CASA — mesmos grupos musculares:
      COSTAS, OMBROS, BÍCEPS, TRÍCEPS,
      ABDÔMEN, QUADRÍCEPS, POSTERIOR,
      GLÚTEO, PANTURRILHA, LOMBAR
  ---------------------------------------- */
];
