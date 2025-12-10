export type HomeExercise = {
  id: string;
  group: string;
  name: string;
  level: 'iniciante' | 'intermediario' | 'avancado';
  series: string;
  reps: string;
  rest: string;
  tempo?: string;
  intensity?: string;
  notes?: string;
};

export const home_premium: HomeExercise[] = [
  // PEITO — 10
  {
    id: 'casa-peito-1',
    group: 'Peito — Casa',
    name: 'Flexão Clássica',
    level: 'iniciante',
    series: '3',
    reps: '10-15',
    rest: '60s',
    tempo: '2-1-2',
    notes: 'Mantenha abdômen firme e ombros estáveis.'
  },
  {
    id: 'casa-peito-2',
    group: 'Peito — Casa',
    name: 'Flexão Abertura Lateral',
    level: 'intermediario',
    series: '3',
    reps: '12',
    rest: '60s',
    tempo: '2-1-2',
    notes: 'Mãos mais afastadas, foco no peitoral maior.'
  },
  {
    id: 'casa-peito-3',
    group: 'Peito — Casa',
    name: 'Flexão Inclinada em Cadeira',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s',
    tempo: '2-1-2',
    notes: 'Use apoio em cadeira/sofá para reduzir carga.'
  },
  {
    id: 'casa-peito-4',
    group: 'Peito — Casa',
    name: 'Flexão Declinada (pés elevados)',
    level: 'intermediario',
    series: '3',
    reps: '10-12',
    rest: '75s',
    tempo: '2-1-2',
    notes: 'Aumenta exigência de ombros e peitoral superior.'
  },
  {
    id: 'casa-peito-5',
    group: 'Peito — Casa',
    name: 'Flexão Diamante',
    level: 'intermediario',
    series: '3',
    reps: '8-12',
    rest: '75s',
    tempo: '2-1-2',
    notes: 'Foco em tríceps e parte interna do peito.'
  },
  {
    id: 'casa-peito-6',
    group: 'Peito — Casa',
    name: 'Flexão com Isometria em Baixo',
    level: 'avancado',
    series: '3',
    reps: '8 + 10s isometria',
    rest: '75s',
    tempo: '3-2-1',
    notes: 'Segure 10s na posição mais baixa da flexão.'
  },
  {
    id: 'casa-peito-7',
    group: 'Peito — Casa',
    name: 'Flexão Explosiva',
    level: 'avancado',
    series: '4',
    reps: '6-8',
    rest: '90s',
    tempo: 'rápido',
    intensity: 'alta',
    notes: 'Mantenha controle, pousando com suavidade.'
  },
  {
    id: 'casa-peito-8',
    group: 'Peito — Casa',
    name: 'Crucifixo no Chão com Garrafas',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s',
    tempo: '3-1-2',
    notes: 'Use garrafas ou halteres leves improvisados.'
  },
  {
    id: 'casa-peito-9',
    group: 'Peito — Casa',
    name: 'Chest Press com Mochila',
    level: 'intermediario',
    series: '3-4',
    reps: '10-12',
    rest: '75s',
    tempo: '2-1-2',
    notes: 'Deite no chão e use mochila com carga.'
  },
  {
    id: 'casa-peito-10',
    group: 'Peito — Casa',
    name: 'Flexão Arqueiro',
    level: 'avancado',
    series: '3',
    reps: '6-8/cada lado',
    rest: '90s',
    tempo: '2-1-2',
    notes: 'Trabalho unilateral, exige controle e estabilidade.'
  },

  // COSTAS — 10
  {
    id: 'casa-costas-1',
    group: 'Costas — Casa',
    name: 'Remada Curvada com Mochila',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s',
    notes: 'Incline o tronco e puxe a mochila em direção ao umbigo.'
  },
  {
    id: 'casa-costas-2',
    group: 'Costas — Casa',
    name: 'Remada Unilateral com Mochila',
    level: 'intermediario',
    series: '3',
    reps: '10-12/cada',
    rest: '60s',
    notes: 'Apoie a mão em um banco/cadeira.'
  },
  {
    id: 'casa-costas-3',
    group: 'Costas — Casa',
    name: 'Superman Estático',
    level: 'iniciante',
    series: '3',
    reps: '20s',
    rest: '45s',
    notes: 'Ative lombar e glúteos, mantendo olhar para baixo.'
  },
  {
    id: 'casa-costas-4',
    group: 'Costas — Casa',
    name: 'Superman Dinâmico',
    level: 'intermediario',
    series: '3',
    reps: '15',
    rest: '60s',
    notes: 'Suba e desça de forma controlada.'
  },
  {
    id: 'casa-costas-5',
    group: 'Costas — Casa',
    name: 'Prancha + Remada Alternada',
    level: 'intermediario',
    series: '3',
    reps: '10/cada braço',
    rest: '75s',
    notes: 'Use garrafas/halteres, controle o quadril.'
  },
  {
    id: 'casa-costas-6',
    group: 'Costas — Casa',
    name: 'Remada com Toalha na Porta',
    level: 'intermediario',
    series: '3',
    reps: '8-10',
    rest: '75s',
    notes: 'Fixe bem a toalha na maçaneta/porta resistente.'
  },
  {
    id: 'casa-costas-7',
    group: 'Costas — Casa',
    name: 'Good Morning com Vassoura',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s',
    notes: 'Incline o tronco mantendo a coluna neutra.'
  },
  {
    id: 'casa-costas-8',
    group: 'Costas — Casa',
    name: 'Extensão Lombar no Chão',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s',
    notes: 'Contraia glúteos junto com lombar.'
  },
  {
    id: 'casa-costas-9',
    group: 'Costas — Casa',
    name: 'Remada Australiana Baixa',
    level: 'avancado',
    series: '3',
    reps: '8-10',
    rest: '90s',
    notes: 'Use mesa resistente ou barra baixa.'
  },
  {
    id: 'casa-costas-10',
    group: 'Costas — Casa',
    name: 'Prancha + Flexão de Quadril',
    level: 'intermediario',
    series: '3',
    reps: '12-15',
    rest: '60s',
    notes: 'Trabalha core e estabilizadores de coluna.'
  },

  // OMBROS — 10
  {
    id: 'casa-ombros-1',
    group: 'Ombros — Casa',
    name: 'Elevação Lateral com Garrafas',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-ombros-2',
    group: 'Ombros — Casa',
    name: 'Desenvolvimento em Pé com Mochila',
    level: 'intermediario',
    series: '3',
    reps: '10-12',
    rest: '75s'
  },
  {
    id: 'casa-ombros-3',
    group: 'Ombros — Casa',
    name: 'Elevação Frontal com Garrafas',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-ombros-4',
    group: 'Ombros — Casa',
    name: 'Crucifixo Inverso Inclinado',
    level: 'intermediario',
    series: '3',
    reps: '12',
    rest: '75s'
  },
  {
    id: 'casa-ombros-5',
    group: 'Ombros — Casa',
    name: 'Handstand Hold na Parede',
    level: 'avancado',
    series: '4',
    reps: '20-30s',
    rest: '90s',
    intensity: 'alta'
  },
  {
    id: 'casa-ombros-6',
    group: 'Ombros — Casa',
    name: 'Pike Push-up',
    level: 'avancado',
    series: '3',
    reps: '6-10',
    rest: '90s'
  },
  {
    id: 'casa-ombros-7',
    group: 'Ombros — Casa',
    name: 'Elevação Lateral Isométrica',
    level: 'intermediario',
    series: '3',
    reps: '20s + 8 repetições',
    rest: '75s'
  },
  {
    id: 'casa-ombros-8',
    group: 'Ombros — Casa',
    name: 'Face Pull com Elástico',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-ombros-9',
    group: 'Ombros — Casa',
    name: 'Desenvolvimento com Vassoura + Mochila',
    level: 'intermediario',
    series: '3',
    reps: '10-12',
    rest: '75s'
  },
  {
    id: 'casa-ombros-10',
    group: 'Ombros — Casa',
    name: 'Farmer Walk com Sacolas',
    level: 'intermediario',
    series: '3',
    reps: '30-40m',
    rest: '60s',
    notes: 'Ótimo para trapézio e pegada.'
  },

  // BÍCEPS — 10
  {
    id: 'casa-biceps-1',
    group: 'Bíceps — Casa',
    name: 'Rosca Direta com Mochila',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-biceps-2',
    group: 'Bíceps — Casa',
    name: 'Rosca Alternada com Garrafas',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-biceps-3',
    group: 'Bíceps — Casa',
    name: 'Rosca Martelo com Garrafas',
    level: 'intermediario',
    series: '3',
    reps: '10-12',
    rest: '60s'
  },
  {
    id: 'casa-biceps-4',
    group: 'Bíceps — Casa',
    name: 'Rosca Concentrada Apoiado na Coxa',
    level: 'intermediario',
    series: '3',
    reps: '10-12',
    rest: '75s'
  },
  {
    id: 'casa-biceps-5',
    group: 'Bíceps — Casa',
    name: 'Rosca 21 com Garrafas',
    level: 'avancado',
    series: '3',
    reps: '21',
    rest: '90s'
  },
  {
    id: 'casa-biceps-6',
    group: 'Bíceps — Casa',
    name: 'Rosca Isométrica na Metade do Movimento',
    level: 'avancado',
    series: '3',
    reps: '15s + 8 repetições',
    rest: '75s'
  },
  {
    id: 'casa-biceps-7',
    group: 'Bíceps — Casa',
    name: 'Rosca com Toalha e Parceiro',
    level: 'intermediario',
    series: '3',
    reps: '10-12',
    rest: '75s'
  },
  {
    id: 'casa-biceps-8',
    group: 'Bíceps — Casa',
    name: 'Chin-up Australiano (barra baixa)',
    level: 'avancado',
    series: '3',
    reps: '8-10',
    rest: '90s'
  },
  {
    id: 'casa-biceps-9',
    group: 'Bíceps — Casa',
    name: 'Rosca Inversa com Mochila',
    level: 'intermediario',
    series: '3',
    reps: '12',
    rest: '75s'
  },
  {
    id: 'casa-biceps-10',
    group: 'Bíceps — Casa',
    name: 'Rosca em Isometria + Parcial',
    level: 'avancado',
    series: '3',
    reps: '20s + 8 repetições',
    rest: '90s'
  },

  // TRÍCEPS — 10
  {
    id: 'casa-triceps-1',
    group: 'Tríceps — Casa',
    name: 'Mergulho entre Cadeiras',
    level: 'intermediario',
    series: '3',
    reps: '10-15',
    rest: '75s'
  },
  {
    id: 'casa-triceps-2',
    group: 'Tríceps — Casa',
    name: 'Tríceps Testa com Garrafas',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-triceps-3',
    group: 'Tríceps — Casa',
    name: 'Coice de Tríceps com Mochila',
    level: 'intermediario',
    series: '3',
    reps: '10-12',
    rest: '60s'
  },
  {
    id: 'casa-triceps-4',
    group: 'Tríceps — Casa',
    name: 'Flexão Fechada (pegada tríceps)',
    level: 'intermediario',
    series: '3',
    reps: '8-12',
    rest: '75s'
  },
  {
    id: 'casa-triceps-5',
    group: 'Tríceps — Casa',
    name: 'Extensão Unilateral Acima da Cabeça',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-triceps-6',
    group: 'Tríceps — Casa',
    name: 'Tríceps Banco + Isometria',
    level: 'avancado',
    series: '3',
    reps: '10 + 10s isometria',
    rest: '90s'
  },
  {
    id: 'casa-triceps-7',
    group: 'Tríceps — Casa',
    name: 'Tríceps Francês com Mochila',
    level: 'intermediario',
    series: '3',
    reps: '10-12',
    rest: '75s'
  },
  {
    id: 'casa-triceps-8',
    group: 'Tríceps — Casa',
    name: 'Flexão Explosiva com Palmas',
    level: 'avancado',
    series: '3',
    reps: '6-8',
    rest: '90s',
    intensity: 'alta'
  },
  {
    id: 'casa-triceps-9',
    group: 'Tríceps — Casa',
    name: 'Extensão de Tríceps com Toalha',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-triceps-10',
    group: 'Tríceps — Casa',
    name: 'Tríceps no Solo (apoiando cotovelo)',
    level: 'iniciante',
    series: '3',
    reps: '12',
    rest: '60s'
  },

  // QUADRÍCEPS — 10
  {
    id: 'casa-quadriceps-1',
    group: 'Quadríceps — Casa',
    name: 'Agachamento Livre',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-quadriceps-2',
    group: 'Quadríceps — Casa',
    name: 'Agachamento Sumô',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-quadriceps-3',
    group: 'Quadríceps — Casa',
    name: 'Agachamento com Mochila',
    level: 'intermediario',
    series: '3',
    reps: '12',
    rest: '75s'
  },
  {
    id: 'casa-quadriceps-4',
    group: 'Quadríceps — Casa',
    name: 'Avanço Alternado',
    level: 'intermediario',
    series: '3',
    reps: '10-12/cada',
    rest: '75s'
  },
  {
    id: 'casa-quadriceps-5',
    group: 'Quadríceps — Casa',
    name: 'Afundo Búlgaro',
    level: 'avancado',
    series: '3',
    reps: '8-10/cada',
    rest: '90s'
  },
  {
    id: 'casa-quadriceps-6',
    group: 'Quadríceps — Casa',
    name: 'Cadeira Chinesa na Parede',
    level: 'intermediario',
    series: '3',
    reps: '30-45s',
    rest: '60s'
  },
  {
    id: 'casa-quadriceps-7',
    group: 'Quadríceps — Casa',
    name: 'Agachamento com Salto',
    level: 'avancado',
    series: '3',
    reps: '10-12',
    rest: '90s',
    intensity: 'alta'
  },
  {
    id: 'casa-quadriceps-8',
    group: 'Quadríceps — Casa',
    name: 'Bom Dia com Mochila',
    level: 'intermediario',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-quadriceps-9',
    group: 'Quadríceps — Casa',
    name: 'Ajoelha-Levanta com Carga',
    level: 'avancado',
    series: '3',
    reps: '10-12',
    rest: '90s'
  },
  {
    id: 'casa-quadriceps-10',
    group: 'Quadríceps — Casa',
    name: 'Agachamento Isométrico no Fundo',
    level: 'intermediario',
    series: '3',
    reps: '20-30s + 6 repetições',
    rest: '75s'
  },

  // POSTERIOR — 10
  {
    id: 'casa-posterior-1',
    group: 'Posterior — Casa',
    name: 'Stiff com Mochila',
    level: 'iniciante',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-posterior-2',
    group: 'Posterior — Casa',
    name: 'Stiff Unilateral',
    level: 'intermediario',
    series: '3',
    reps: '10-12/cada',
    rest: '75s'
  },
  {
    id: 'casa-posterior-3',
    group: 'Posterior — Casa',
    name: 'Elevação de Quadril no Chão',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-posterior-4',
    group: 'Posterior — Casa',
    name: 'Elevação de Quadril Unilateral',
    level: 'intermediario',
    series: '3',
    reps: '12/cada',
    rest: '75s'
  },
  {
    id: 'casa-posterior-5',
    group: 'Posterior — Casa',
    name: 'Nordic Curl Assistido',
    level: 'avancado',
    series: '3',
    reps: '6-8',
    rest: '90s'
  },
  {
    id: 'casa-posterior-6',
    group: 'Posterior — Casa',
    name: 'Flexão de Joelhos com Toalha no Chão',
    level: 'intermediario',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-posterior-7',
    group: 'Posterior — Casa',
    name: 'Boa Manhã Unilateral',
    level: 'intermediario',
    series: '3',
    reps: '10-12/cada',
    rest: '75s'
  },
  {
    id: 'casa-posterior-8',
    group: 'Posterior — Casa',
    name: 'Elevação de Quadril com Pés Elevados',
    level: 'intermediario',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-posterior-9',
    group: 'Posterior — Casa',
    name: 'Hinge com Elástico',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-posterior-10',
    group: 'Posterior — Casa',
    name: 'Elevação de Quadril Isométrica',
    level: 'intermediario',
    series: '3',
    reps: '20-30s',
    rest: '60s'
  },

  // GLÚTEOS — 10
  {
    id: 'casa-gluteos-1',
    group: 'Glúteos — Casa',
    name: 'Glute Bridge',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-gluteos-2',
    group: 'Glúteos — Casa',
    name: 'Hip Thrust em Sofá',
    level: 'intermediario',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-gluteos-3',
    group: 'Glúteos — Casa',
    name: 'Abdução de Quadril em Pé com Elástico',
    level: 'iniciante',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-gluteos-4',
    group: 'Glúteos — Casa',
    name: 'Abdução em Quatro Apoios',
    level: 'intermediario',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-gluteos-5',
    group: 'Glúteos — Casa',
    name: 'Coice de Glúteo',
    level: 'intermediario',
    series: '3',
    reps: '12/cada',
    rest: '60s'
  },
  {
    id: 'casa-gluteos-6',
    group: 'Glúteos — Casa',
    name: 'Elevação de Quadril Unilateral no Sofá',
    level: 'avancado',
    series: '3',
    reps: '10-12/cada',
    rest: '75s'
  },
  {
    id: 'casa-gluteos-7',
    group: 'Glúteos — Casa',
    name: 'Agachamento Sumô com Carga',
    level: 'intermediario',
    series: '3',
    reps: '12',
    rest: '60s'
  },
  {
    id: 'casa-gluteos-8',
    group: 'Glúteos — Casa',
    name: 'Avanço Caminhando',
    level: 'intermediario',
    series: '3',
    reps: '10-12/cada',
    rest: '60s'
  },
  {
    id: 'casa-gluteos-9',
    group: 'Glúteos — Casa',
    name: 'Donkey Kicks com Elástico',
    level: 'intermediario',
    series: '3',
    reps: '15/cada',
    rest: '60s'
  },
  {
    id: 'casa-gluteos-10',
    group: 'Glúteos — Casa',
    name: 'Hip Thrust com Isometria Final',
    level: 'avancado',
    series: '3',
    reps: '10 + 10s isometria',
    rest: '75s'
  },

  // PANTURRILHAS — 10
  {
    id: 'casa-panturrilha-1',
    group: 'Panturrilhas — Casa',
    name: 'Elevação de Panturrilha em Pé',
    level: 'iniciante',
    series: '3',
    reps: '15-20',
    rest: '45-60s'
  },
  {
    id: 'casa-panturrilha-2',
    group: 'Panturrilhas — Casa',
    name: 'Elevação Unilateral em Degrau',
    level: 'intermediario',
    series: '3',
    reps: '12-15/cada',
    rest: '60s'
  },
  {
    id: 'casa-panturrilha-3',
    group: 'Panturrilhas — Casa',
    name: 'Elevação Sentado com Mochila',
    level: 'intermediario',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-panturrilha-4',
    group: 'Panturrilhas — Casa',
    name: 'Isometria na Ponta dos Pés',
    level: 'iniciante',
    series: '3',
    reps: '20-30s',
    rest: '45s'
  },
  {
    id: 'casa-panturrilha-5',
    group: 'Panturrilhas — Casa',
    name: 'Panturrilha com Salto Baixo',
    level: 'avancado',
    series: '3',
    reps: '20',
    rest: '60s',
    intensity: 'alta'
  },
  {
    id: 'casa-panturrilha-6',
    group: 'Panturrilhas — Casa',
    name: 'Panturrilha em Degrau com Isometria',
    level: 'intermediario',
    series: '3',
    reps: '12 + 10s isometria',
    rest: '60s'
  },
  {
    id: 'casa-panturrilha-7',
    group: 'Panturrilhas — Casa',
    name: 'Caminhada na Ponta dos Pés',
    level: 'iniciante',
    series: '3',
    reps: '30-40m',
    rest: '45s'
  },
  {
    id: 'casa-panturrilha-8',
    group: 'Panturrilhas — Casa',
    name: 'Elevação com Joelhos Flexionados',
    level: 'intermediario',
    series: '3',
    reps: '15',
    rest: '60s'
  },
  {
    id: 'casa-panturrilha-9',
    group: 'Panturrilhas — Casa',
    name: 'Panturrilha em Unipé',
    level: 'avancado',
    series: '3',
    reps: '10-12/cada',
    rest: '60s'
  },
  {
    id: 'casa-panturrilha-10',
    group: 'Panturrilhas — Casa',
    name: 'Panturrilha com Salto em Profundidade',
    level: 'avancado',
    series: '3',
    reps: '8-10',
    rest: '90s',
    intensity: 'alta'
  },

  // CORE — 10
  {
    id: 'casa-core-1',
    group: 'Core — Casa',
    name: 'Prancha Frontal',
    level: 'iniciante',
    series: '3',
    reps: '20-30s',
    rest: '45s'
  },
  {
    id: 'casa-core-2',
    group: 'Core — Casa',
    name: 'Prancha Lateral',
    level: 'iniciante',
    series: '3',
    reps: '20-30s/cada lado',
    rest: '45s'
  },
  {
    id: 'casa-core-3',
    group: 'Core — Casa',
    name: 'Dead Bug',
    level: 'iniciante',
    series: '3',
    reps: '10-12',
    rest: '45s'
  },
  {
    id: 'casa-core-4',
    group: 'Core — Casa',
    name: 'Crunch Clássico',
    level: 'iniciante',
    series: '3',
    reps: '15-20',
    rest: '45s'
  },
  {
    id: 'casa-core-5',
    group: 'Core — Casa',
    name: 'Elevação de Pernas no Chão',
    level: 'intermediario',
    series: '3',
    reps: '12-15',
    rest: '60s'
  },
  {
    id: 'casa-core-6',
    group: 'Core — Casa',
    name: 'Bicicleta Abdominal',
    level: 'intermediario',
    series: '3',
    reps: '20-30',
    rest: '60s'
  },
  {
    id: 'casa-core-7',
    group: 'Core — Casa',
    name: 'Russian Twist com Carga',
    level: 'intermediario',
    series: '3',
    reps: '20',
    rest: '60s'
  },
  {
    id: 'casa-core-8',
    group: 'Core — Casa',
    name: 'Hollow Hold',
    level: 'avancado',
    series: '3',
    reps: '20-30s',
    rest: '60s'
  },
  {
    id: 'casa-core-9',
    group: 'Core — Casa',
    name: 'V-ups',
    level: 'avancado',
    series: '3',
    reps: '12-15',
    rest: '75s'
  },
  {
    id: 'casa-core-10',
    group: 'Core — Casa',
    name: 'Prancha com Alcance Alternado',
    level: 'intermediario',
    series: '3',
    reps: '10-12/cada braço',
    rest: '60s'
  }
];