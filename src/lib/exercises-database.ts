// Banco de dados completo de exercícios - 15+ por grupamento muscular

export type Equipment = 'barra' | 'halteres' | 'elastico' | 'maquina' | 'peso-corporal' | 'cabo';
export type MuscleGroup = 'peito' | 'costas' | 'ombro' | 'biceps' | 'triceps' | 'trapezio' | 
  'quadriceps' | 'posterior' | 'gluteo' | 'panturrilha' | 'abdomen';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: MuscleGroup;
  equipment: Equipment;
  difficulty: 'iniciante' | 'intermediario' | 'avancado';
  instructions: string[];
  tips: string[];
  sets: number;
  reps: string;
}

export const EXERCISES_DATABASE: Exercise[] = [
  // ============= PEITO (18 exercícios) =============
  {
    id: 'peito-1',
    name: 'Supino Reto com Barra',
    muscleGroup: 'peito',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Deite no banco reto com os pés firmes no chão',
      'Pegue a barra com pegada um pouco mais larga que os ombros',
      'Desça a barra controladamente até o meio do peito',
      'Empurre explosivamente de volta à posição inicial'
    ],
    tips: ['Mantenha os ombros retraídos', 'Não tire o quadril do banco', 'Controle a descida'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'peito-2',
    name: 'Supino Inclinado com Halteres',
    muscleGroup: 'peito',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Ajuste o banco em 30-45 graus de inclinação',
      'Segure os halteres com pegada neutra',
      'Desça controladamente até sentir alongamento no peito',
      'Empurre os halteres de volta, contraindo o peito superior'
    ],
    tips: ['Foco no peito superior', 'Não tranque os cotovelos', 'Mantenha controle total'],
    sets: 4,
    reps: '10-15'
  },
  {
    id: 'peito-3',
    name: 'Supino Declinado com Barra',
    muscleGroup: 'peito',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Posicione-se no banco declinado (15-30 graus)',
      'Prenda os pés firmemente',
      'Desça a barra até a parte inferior do peito',
      'Empurre explosivamente mantendo controle'
    ],
    tips: ['Trabalha peito inferior', 'Cuidado com a cabeça', 'Use pegada segura'],
    sets: 3,
    reps: '8-12'
  },
  {
    id: 'peito-4',
    name: 'Crucifixo com Halteres',
    muscleGroup: 'peito',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Deite no banco reto segurando halteres acima do peito',
      'Abra os braços em arco, mantendo leve flexão nos cotovelos',
      'Desça até sentir alongamento no peito',
      'Retorne contraindo o peito, como se estivesse abraçando'
    ],
    tips: ['Movimento de abraço', 'Não desça demais', 'Controle o peso'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'peito-5',
    name: 'Flexão de Braço Tradicional',
    muscleGroup: 'peito',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Posição de prancha com mãos na largura dos ombros',
      'Desça o corpo mantendo-o reto',
      'Peito quase toca o chão',
      'Empurre de volta à posição inicial'
    ],
    tips: ['Core contraído', 'Corpo reto', 'Cotovelos a 45 graus'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'peito-6',
    name: 'Flexão Declinada (Pés Elevados)',
    muscleGroup: 'peito',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Coloque os pés em superfície elevada',
      'Mãos no chão na largura dos ombros',
      'Desça controladamente',
      'Empurre explosivamente'
    ],
    tips: ['Trabalha peito superior', 'Mais difícil que flexão normal', 'Mantenha forma'],
    sets: 3,
    reps: '10-15'
  },
  {
    id: 'peito-7',
    name: 'Crossover no Cabo',
    muscleGroup: 'peito',
    equipment: 'cabo',
    difficulty: 'intermediario',
    instructions: [
      'Fique entre as polias altas',
      'Pegue as alças e dê um passo à frente',
      'Traga as mãos em arco até se encontrarem na frente',
      'Retorne controladamente'
    ],
    tips: ['Tensão constante', 'Contraia no final', 'Não use impulso'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'peito-8',
    name: 'Supino com Halteres Pegada Neutra',
    muscleGroup: 'peito',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Deite no banco com halteres em pegada neutra (palmas se olhando)',
      'Desça os halteres aos lados do peito',
      'Empurre de volta mantendo pegada neutra',
      'Contraia o peito no topo'
    ],
    tips: ['Menos stress nos ombros', 'Ótimo para variação', 'Controle total'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'peito-9',
    name: 'Peck Deck (Voador)',
    muscleGroup: 'peito',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Ajuste o banco para cotovelos na altura dos ombros',
      'Coloque os antebraços nas almofadas',
      'Traga as almofadas juntas contraindo o peito',
      'Retorne controladamente'
    ],
    tips: ['Isolamento perfeito', 'Contraia no final', 'Movimento controlado'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'peito-10',
    name: 'Flexão com Elástico',
    muscleGroup: 'peito',
    equipment: 'elastico',
    difficulty: 'intermediario',
    instructions: [
      'Passe o elástico pelas costas',
      'Segure as pontas e faça posição de flexão',
      'Desça contra a resistência do elástico',
      'Empurre explosivamente'
    ],
    tips: ['Resistência progressiva', 'Ótimo para casa', 'Varie a tensão'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'peito-11',
    name: 'Supino Guilhotina',
    muscleGroup: 'peito',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Similar ao supino reto, mas desça a barra até o pescoço',
      'Use peso mais leve que o supino normal',
      'Cotovelos bem abertos',
      'Movimento controlado e seguro'
    ],
    tips: ['Máximo alongamento', 'Use peso moderado', 'Tenha um parceiro'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'peito-12',
    name: 'Flexão Diamante',
    muscleGroup: 'peito',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Posição de flexão com mãos juntas formando diamante',
      'Polegares e indicadores se tocam',
      'Desça mantendo cotovelos próximos ao corpo',
      'Empurre de volta'
    ],
    tips: ['Trabalha peito interno e tríceps', 'Movimento desafiador', 'Core ativo'],
    sets: 3,
    reps: '10-15'
  },
  {
    id: 'peito-13',
    name: 'Pullover com Haltere',
    muscleGroup: 'peito',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Deite perpendicular no banco (só ombros apoiados)',
      'Segure um haltere com ambas as mãos acima do peito',
      'Desça o haltere em arco atrás da cabeça',
      'Puxe de volta contraindo peito e dorsais'
    ],
    tips: ['Expande caixa torácica', 'Trabalha peito e costas', 'Respiração profunda'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'peito-14',
    name: 'Supino Fechado com Barra',
    muscleGroup: 'peito',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Pegada mais estreita que os ombros',
      'Desça a barra até o peito inferior',
      'Cotovelos próximos ao corpo',
      'Empurre explosivamente'
    ],
    tips: ['Trabalha peito interno e tríceps', 'Menos peso que supino normal', 'Controle'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'peito-15',
    name: 'Crossover Baixo (Peito Superior)',
    muscleGroup: 'peito',
    equipment: 'cabo',
    difficulty: 'intermediario',
    instructions: [
      'Polias na posição baixa',
      'Traga as alças de baixo para cima em arco',
      'Mãos se encontram na altura do peito superior',
      'Contraia fortemente no topo'
    ],
    tips: ['Foco no peito superior', 'Movimento ascendente', 'Tensão constante'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'peito-16',
    name: 'Flexão Arqueira',
    muscleGroup: 'peito',
    equipment: 'peso-corporal',
    difficulty: 'avancado',
    instructions: [
      'Posição de flexão com braços bem abertos',
      'Desça inclinando para um lado',
      'Um braço faz a força, outro estendido',
      'Alterne os lados'
    ],
    tips: ['Unilateral', 'Muito desafiador', 'Progressão para flexão de um braço'],
    sets: 3,
    reps: '6-10 cada lado'
  },
  {
    id: 'peito-17',
    name: 'Press com Elástico',
    muscleGroup: 'peito',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Prenda o elástico atrás de você',
      'Segure as pontas e empurre para frente',
      'Braços na altura do peito',
      'Retorne controladamente'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Varie o ângulo'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'peito-18',
    name: 'Mergulho no Banco (Dips)',
    muscleGroup: 'peito',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Use barras paralelas ou banco',
      'Incline o corpo para frente',
      'Desça até cotovelos a 90 graus',
      'Empurre de volta'
    ],
    tips: ['Inclinação trabalha mais peito', 'Vertical trabalha mais tríceps', 'Progressivo'],
    sets: 3,
    reps: '10-15'
  },

  // ============= COSTAS (18 exercícios) =============
  {
    id: 'costas-1',
    name: 'Barra Fixa Pegada Pronada',
    muscleGroup: 'costas',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Pegue a barra com palmas para frente, largura dos ombros',
      'Puxe o corpo até o queixo passar a barra',
      'Desça controladamente até extensão completa',
      'Mantenha core ativo'
    ],
    tips: ['Rei dos exercícios de costas', 'Escápulas retraídas', 'Sem balanço'],
    sets: 4,
    reps: '6-12'
  },
  {
    id: 'costas-2',
    name: 'Remada Curvada com Barra',
    muscleGroup: 'costas',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Incline o tronco a 45 graus',
      'Pegue a barra com pegada pronada',
      'Puxe a barra até a parte inferior do peito',
      'Contraia as escápulas no topo'
    ],
    tips: ['Costas retas', 'Puxe com cotovelos', 'Não use impulso'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'costas-3',
    name: 'Remada com Halteres Unilateral',
    muscleGroup: 'costas',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Apoie um joelho e mão no banco',
      'Segure o haltere com a outra mão',
      'Puxe o haltere até a lateral do tronco',
      'Contraia a escápula no topo'
    ],
    tips: ['Isolamento perfeito', 'Amplitude completa', 'Controle total'],
    sets: 4,
    reps: '10-15 cada lado'
  },
  {
    id: 'costas-4',
    name: 'Pulldown na Polia',
    muscleGroup: 'costas',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Sente na máquina e segure a barra larga',
      'Puxe a barra até a parte superior do peito',
      'Incline levemente para trás',
      'Retorne controladamente'
    ],
    tips: ['Alternativa à barra fixa', 'Controle o peso', 'Escápulas ativas'],
    sets: 4,
    reps: '10-15'
  },
  {
    id: 'costas-5',
    name: 'Levantamento Terra',
    muscleGroup: 'costas',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Barra no chão, pés na largura dos quadris',
      'Pegue a barra com pegada mista ou pronada',
      'Levante mantendo costas retas e peito para cima',
      'Estenda quadris e joelhos simultaneamente'
    ],
    tips: ['Exercício completo', 'Técnica é crucial', 'Core muito ativo'],
    sets: 4,
    reps: '5-8'
  },
  {
    id: 'costas-6',
    name: 'Remada Cavalinho',
    muscleGroup: 'costas',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Apoie o peito na almofada',
      'Pegue as alças',
      'Puxe até as escápulas se tocarem',
      'Retorne controladamente'
    ],
    tips: ['Isolamento total', 'Sem compensação lombar', 'Foco nas costas'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'costas-7',
    name: 'Pullover na Polia',
    muscleGroup: 'costas',
    equipment: 'cabo',
    difficulty: 'intermediario',
    instructions: [
      'Fique de frente para a polia alta',
      'Segure a barra reta com braços estendidos',
      'Puxe em arco até as coxas',
      'Retorne controladamente'
    ],
    tips: ['Trabalha dorsais', 'Braços quase retos', 'Movimento em arco'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'costas-8',
    name: 'Remada Baixa no Cabo',
    muscleGroup: 'costas',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Sente na máquina de remada',
      'Pegue a alça em V',
      'Puxe até o abdômen',
      'Contraia as escápulas'
    ],
    tips: ['Costas eretas', 'Não use impulso', 'Amplitude completa'],
    sets: 4,
    reps: '10-15'
  },
  {
    id: 'costas-9',
    name: 'Barra Fixa Pegada Supinada',
    muscleGroup: 'costas',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Pegada com palmas para você',
      'Puxe até o peito tocar a barra',
      'Desça controladamente',
      'Foco em contrair as costas'
    ],
    tips: ['Trabalha mais bíceps também', 'Amplitude maior', 'Controle'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'costas-10',
    name: 'Remada com Elástico',
    muscleGroup: 'costas',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Prenda o elástico na frente',
      'Puxe até os cotovelos passarem o tronco',
      'Contraia as escápulas',
      'Retorne controladamente'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Varie o ângulo'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'costas-11',
    name: 'Remada Pendlay',
    muscleGroup: 'costas',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Barra no chão entre cada repetição',
      'Tronco paralelo ao chão',
      'Puxe explosivamente até o peito',
      'Retorne a barra ao chão'
    ],
    tips: ['Explosivo', 'Técnica avançada', 'Força e potência'],
    sets: 4,
    reps: '6-8'
  },
  {
    id: 'costas-12',
    name: 'Face Pull',
    muscleGroup: 'costas',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia na altura do rosto',
      'Pegue a corda com pegada neutra',
      'Puxe até as mãos ao lado das orelhas',
      'Cotovelos altos'
    ],
    tips: ['Ombros e trapézio médio', 'Postura', 'Rotação externa'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'costas-13',
    name: 'Remada T-Bar',
    muscleGroup: 'costas',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Posicione-se sobre a barra T',
      'Pegue a alça em V',
      'Puxe até o peito',
      'Contraia as escápulas'
    ],
    tips: ['Espessura das costas', 'Posição estável', 'Peso controlado'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'costas-14',
    name: 'Hiperextensão Lombar',
    muscleGroup: 'costas',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Posicione-se na máquina de hiperextensão',
      'Desça controladamente',
      'Suba até a linha reta',
      'Não hiperextenda'
    ],
    tips: ['Lombar e glúteos', 'Movimento controlado', 'Progressão com peso'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'costas-15',
    name: 'Remada Meadows',
    muscleGroup: 'costas',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Barra presa em um canto',
      'Fique perpendicular à barra',
      'Puxe com uma mão até o quadril',
      'Rotação do tronco'
    ],
    tips: ['Unilateral', 'Grande amplitude', 'Força e massa'],
    sets: 3,
    reps: '10-12 cada lado'
  },
  {
    id: 'costas-16',
    name: 'Pulldown Pegada Neutra',
    muscleGroup: 'costas',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Use alça em V ou paralela',
      'Puxe até o peito',
      'Cotovelos próximos ao corpo',
      'Contraia as costas'
    ],
    tips: ['Menos stress nos ombros', 'Ótima variação', 'Amplitude completa'],
    sets: 4,
    reps: '10-15'
  },
  {
    id: 'costas-17',
    name: 'Remada Alta com Barra',
    muscleGroup: 'costas',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Pegue a barra com pegada fechada',
      'Puxe até o queixo',
      'Cotovelos altos',
      'Desça controladamente'
    ],
    tips: ['Trapézio e deltoides', 'Cuidado com os ombros', 'Peso moderado'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'costas-18',
    name: 'Superman',
    muscleGroup: 'costas',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Deite de bruços no chão',
      'Estenda braços e pernas',
      'Levante simultaneamente',
      'Segure por 2 segundos'
    ],
    tips: ['Lombar e eretores', 'Sem equipamento', 'Controle'],
    sets: 3,
    reps: '15-20'
  },

  // ============= OMBROS (17 exercícios) =============
  {
    id: 'ombro-1',
    name: 'Desenvolvimento com Barra',
    muscleGroup: 'ombro',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Barra na altura dos ombros',
      'Empurre acima da cabeça',
      'Extensão completa',
      'Desça controladamente'
    ],
    tips: ['Exercício base', 'Core ativo', 'Não arquear as costas'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'ombro-2',
    name: 'Desenvolvimento com Halteres',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Halteres na altura dos ombros',
      'Empurre simultaneamente acima da cabeça',
      'Halteres se aproximam no topo',
      'Desça controladamente'
    ],
    tips: ['Maior amplitude', 'Trabalho unilateral', 'Estabilização'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'ombro-3',
    name: 'Elevação Lateral com Halteres',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Halteres ao lado do corpo',
      'Eleve lateralmente até a altura dos ombros',
      'Cotovelos levemente flexionados',
      'Desça controladamente'
    ],
    tips: ['Deltoide lateral', 'Não use impulso', 'Controle o peso'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'ombro-4',
    name: 'Elevação Frontal com Barra',
    muscleGroup: 'ombro',
    equipment: 'barra',
    difficulty: 'iniciante',
    instructions: [
      'Barra na frente das coxas',
      'Eleve até a altura dos ombros',
      'Braços quase retos',
      'Desça controladamente'
    ],
    tips: ['Deltoide anterior', 'Não balançar', 'Peso moderado'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'ombro-5',
    name: 'Desenvolvimento Arnold',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Halteres na frente dos ombros, palmas para você',
      'Empurre girando as palmas para frente',
      'Extensão completa',
      'Retorne girando de volta'
    ],
    tips: ['Trabalha todas as cabeças', 'Movimento completo', 'Criado por Arnold'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'ombro-6',
    name: 'Elevação Lateral no Cabo',
    muscleGroup: 'ombro',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia baixa ao lado',
      'Puxe lateralmente até a altura do ombro',
      'Tensão constante',
      'Retorne controladamente'
    ],
    tips: ['Tensão contínua', 'Isolamento perfeito', 'Unilateral'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'ombro-7',
    name: 'Remada Alta com Halteres',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Halteres na frente das coxas',
      'Puxe até a altura do queixo',
      'Cotovelos altos',
      'Desça controladamente'
    ],
    tips: ['Deltoides e trapézio', 'Cuidado com os ombros', 'Amplitude controlada'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'ombro-8',
    name: 'Crucifixo Inverso com Halteres',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Incline o tronco a 90 graus',
      'Halteres pendurados',
      'Abra os braços lateralmente',
      'Contraia as escápulas'
    ],
    tips: ['Deltoide posterior', 'Postura', 'Não usar impulso'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'ombro-9',
    name: 'Desenvolvimento com Elástico',
    muscleGroup: 'ombro',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Pise no elástico',
      'Segure as pontas na altura dos ombros',
      'Empurre acima da cabeça',
      'Retorne controladamente'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Varie a resistência'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'ombro-10',
    name: 'Face Pull com Corda',
    muscleGroup: 'ombro',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia na altura do rosto',
      'Puxe a corda até as orelhas',
      'Cotovelos altos',
      'Rotação externa'
    ],
    tips: ['Deltoide posterior', 'Saúde dos ombros', 'Postura'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'ombro-11',
    name: 'Elevação Frontal Alternada',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Halteres ao lado do corpo',
      'Eleve um braço de cada vez',
      'Até a altura dos ombros',
      'Alterne os lados'
    ],
    tips: ['Controle maior', 'Foco unilateral', 'Sem balanço'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'ombro-12',
    name: 'Desenvolvimento Militar Sentado',
    muscleGroup: 'ombro',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Sente com costas apoiadas',
      'Barra na altura dos ombros',
      'Empurre acima da cabeça',
      'Desça até o queixo'
    ],
    tips: ['Mais isolamento', 'Menos compensação lombar', 'Força pura'],
    sets: 4,
    reps: '8-10'
  },
  {
    id: 'ombro-13',
    name: 'Elevação Lateral Inclinada',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Segure em algo e incline o corpo',
      'Haltere no braço livre',
      'Eleve lateralmente',
      'Foco no deltoide lateral'
    ],
    tips: ['Isolamento extremo', 'Amplitude maior', 'Unilateral'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'ombro-14',
    name: 'Crucifixo Inverso na Polia',
    muscleGroup: 'ombro',
    equipment: 'cabo',
    difficulty: 'intermediario',
    instructions: [
      'Polias cruzadas na altura dos ombros',
      'Puxe em arco para trás',
      'Contraia deltoide posterior',
      'Retorne controladamente'
    ],
    tips: ['Tensão constante', 'Deltoide posterior', 'Postura'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'ombro-15',
    name: 'Elevação em W',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'avancado',
    instructions: [
      'Halteres ao lado do corpo',
      'Eleve formando um W com os braços',
      'Cotovelos flexionados',
      'Rotação externa'
    ],
    tips: ['Trabalho completo', 'Saúde dos ombros', 'Técnica avançada'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'ombro-16',
    name: 'Desenvolvimento Unilateral com Haltere',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Um haltere de cada vez',
      'Empurre acima da cabeça',
      'Estabilize o core',
      'Alterne os lados'
    ],
    tips: ['Trabalho unilateral', 'Estabilização', 'Corrige assimetrias'],
    sets: 3,
    reps: '10-12 cada lado'
  },
  {
    id: 'ombro-17',
    name: 'Elevação Y com Halteres',
    muscleGroup: 'ombro',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Incline o tronco',
      'Eleve os halteres formando um Y',
      'Polegares para cima',
      'Contraia as escápulas'
    ],
    tips: ['Deltoide posterior e trapézio', 'Postura', 'Peso leve'],
    sets: 3,
    reps: '15-20'
  },

  // ============= BÍCEPS (16 exercícios) =============
  {
    id: 'biceps-1',
    name: 'Rosca Direta com Barra',
    muscleGroup: 'biceps',
    equipment: 'barra',
    difficulty: 'iniciante',
    instructions: [
      'Barra na frente das coxas',
      'Flexione os cotovelos levando a barra ao peito',
      'Cotovelos fixos',
      'Desça controladamente'
    ],
    tips: ['Exercício base', 'Não balançar', 'Controle total'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'biceps-2',
    name: 'Rosca Alternada com Halteres',
    muscleGroup: 'biceps',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Halteres ao lado do corpo',
      'Flexione um braço de cada vez',
      'Gire a palma para cima durante o movimento',
      'Alterne os lados'
    ],
    tips: ['Supinação completa', 'Controle', 'Foco unilateral'],
    sets: 4,
    reps: '10-12 cada lado'
  },
  {
    id: 'biceps-3',
    name: 'Rosca Martelo',
    muscleGroup: 'biceps',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Halteres ao lado com pegada neutra',
      'Flexione mantendo palmas se olhando',
      'Cotovelos fixos',
      'Desça controladamente'
    ],
    tips: ['Trabalha braquial', 'Antebraços', 'Pegada neutra'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'biceps-4',
    name: 'Rosca Scott com Barra',
    muscleGroup: 'biceps',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Apoie os braços no banco Scott',
      'Flexione a barra até o topo',
      'Desça até quase extensão completa',
      'Sem balanço'
    ],
    tips: ['Isolamento perfeito', 'Não estenda completamente', 'Controle'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'biceps-5',
    name: 'Rosca Concentrada',
    muscleGroup: 'biceps',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Sente com cotovelo apoiado na coxa',
      'Flexione o haltere até o ombro',
      'Contraia fortemente no topo',
      'Desça controladamente'
    ],
    tips: ['Isolamento máximo', 'Conexão mente-músculo', 'Unilateral'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'biceps-6',
    name: 'Rosca 21',
    muscleGroup: 'biceps',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      '7 reps da base até meio caminho',
      '7 reps do meio até o topo',
      '7 reps completas',
      'Sem descanso entre as fases'
    ],
    tips: ['Técnica intensa', 'Queimação garantida', 'Peso moderado'],
    sets: 3,
    reps: '21 (7+7+7)'
  },
  {
    id: 'biceps-7',
    name: 'Rosca Inversa com Barra',
    muscleGroup: 'biceps',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Pegada pronada (palmas para baixo)',
      'Flexione a barra até o peito',
      'Cotovelos fixos',
      'Desça controladamente'
    ],
    tips: ['Trabalha braquiorradial', 'Antebraços', 'Peso mais leve'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'biceps-8',
    name: 'Rosca no Cabo',
    muscleGroup: 'biceps',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia baixa com barra reta',
      'Flexione até o peito',
      'Tensão constante',
      'Retorne controladamente'
    ],
    tips: ['Tensão contínua', 'Ótima variação', 'Controle'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'biceps-9',
    name: 'Rosca Inclinada com Halteres',
    muscleGroup: 'biceps',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Banco inclinado a 45 graus',
      'Braços pendurados',
      'Flexione simultaneamente',
      'Máximo alongamento'
    ],
    tips: ['Alongamento extremo', 'Cabeça longa do bíceps', 'Amplitude completa'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'biceps-10',
    name: 'Rosca Spider',
    muscleGroup: 'biceps',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Deite de bruços no banco inclinado',
      'Braços pendurados',
      'Flexione a barra',
      'Isolamento total'
    ],
    tips: ['Sem compensação', 'Isolamento perfeito', 'Controle'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'biceps-11',
    name: 'Rosca com Elástico',
    muscleGroup: 'biceps',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Pise no elástico',
      'Segure as pontas',
      'Flexione até o peito',
      'Retorne controladamente'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Varie a resistência'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'biceps-12',
    name: 'Rosca Zottman',
    muscleGroup: 'biceps',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Suba com pegada supinada',
      'No topo, gire para pegada pronada',
      'Desça com pegada pronada',
      'Gire de volta na base'
    ],
    tips: ['Trabalha bíceps e antebraços', 'Movimento completo', 'Técnica avançada'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'biceps-13',
    name: 'Rosca Drag Curl',
    muscleGroup: 'biceps',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Arraste a barra pelo corpo',
      'Cotovelos vão para trás',
      'Barra sobe rente ao corpo',
      'Foco na cabeça longa'
    ],
    tips: ['Técnica única', 'Cabeça longa do bíceps', 'Peso moderado'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'biceps-14',
    name: 'Rosca no Cabo Unilateral',
    muscleGroup: 'biceps',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia baixa',
      'Flexione um braço de cada vez',
      'Tensão constante',
      'Alterne os lados'
    ],
    tips: ['Unilateral', 'Tensão contínua', 'Corrige assimetrias'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'biceps-15',
    name: 'Rosca com Barra W',
    muscleGroup: 'biceps',
    equipment: 'barra',
    difficulty: 'iniciante',
    instructions: [
      'Pegue a barra W nas curvas',
      'Flexione até o peito',
      'Cotovelos fixos',
      'Desça controladamente'
    ],
    tips: ['Menos stress nos punhos', 'Ótima variação', 'Confortável'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'biceps-16',
    name: 'Rosca Cruzada no Cabo',
    muscleGroup: 'biceps',
    equipment: 'cabo',
    difficulty: 'intermediario',
    instructions: [
      'Polias altas dos lados',
      'Flexione cruzando para o centro',
      'Pose de bíceps duplo',
      'Contraia fortemente'
    ],
    tips: ['Pico do bíceps', 'Estético', 'Tensão constante'],
    sets: 3,
    reps: '12-15'
  },

  // ============= TRÍCEPS (16 exercícios) =============
  {
    id: 'triceps-1',
    name: 'Tríceps Testa com Barra',
    muscleGroup: 'triceps',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Deite no banco com barra acima da cabeça',
      'Flexione apenas os cotovelos',
      'Desça até próximo da testa',
      'Estenda de volta'
    ],
    tips: ['Exercício base', 'Cotovelos fixos', 'Controle total'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'triceps-2',
    name: 'Tríceps Francês com Haltere',
    muscleGroup: 'triceps',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Segure um haltere com ambas as mãos acima da cabeça',
      'Desça atrás da cabeça',
      'Cotovelos apontando para cima',
      'Estenda completamente'
    ],
    tips: ['Alongamento máximo', 'Cabeça longa', 'Controle'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'triceps-3',
    name: 'Tríceps Pulley',
    muscleGroup: 'triceps',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia alta com barra reta',
      'Cotovelos fixos ao lado do corpo',
      'Empurre para baixo até extensão completa',
      'Retorne controladamente'
    ],
    tips: ['Isolamento perfeito', 'Tensão constante', 'Contraia no final'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'triceps-4',
    name: 'Mergulho em Paralelas',
    muscleGroup: 'triceps',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Corpo vertical nas barras paralelas',
      'Desça flexionando os cotovelos',
      'Até 90 graus',
      'Empurre de volta'
    ],
    tips: ['Vertical trabalha mais tríceps', 'Progressivo', 'Pode adicionar peso'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'triceps-5',
    name: 'Tríceps Coice com Haltere',
    muscleGroup: 'triceps',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Incline o tronco',
      'Cotovelo fixo ao lado do corpo',
      'Estenda o braço para trás',
      'Contraia no topo'
    ],
    tips: ['Isolamento', 'Unilateral', 'Controle'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'triceps-6',
    name: 'Supino Fechado',
    muscleGroup: 'triceps',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Pegada mais estreita que os ombros',
      'Desça até o peito',
      'Cotovelos próximos ao corpo',
      'Empurre explosivamente'
    ],
    tips: ['Composto', 'Força e massa', 'Trabalha peito também'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'triceps-7',
    name: 'Tríceps Corda',
    muscleGroup: 'triceps',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia alta com corda',
      'Empurre para baixo abrindo a corda',
      'Rotação externa no final',
      'Contraia fortemente'
    ],
    tips: ['Cabeça lateral', 'Abertura no final', 'Tensão constante'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'triceps-8',
    name: 'Tríceps Testa com Halteres',
    muscleGroup: 'triceps',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Deite com halteres acima da cabeça',
      'Desça em direção às têmporas',
      'Cotovelos fixos',
      'Estenda de volta'
    ],
    tips: ['Movimento natural', 'Unilateral', 'Amplitude completa'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'triceps-9',
    name: 'Tríceps Banco',
    muscleGroup: 'triceps',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Mãos no banco atrás de você',
      'Pés no chão ou elevados',
      'Desça flexionando os cotovelos',
      'Empurre de volta'
    ],
    tips: ['Sem equipamento', 'Progressivo', 'Pode adicionar peso'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'triceps-10',
    name: 'Tríceps Overhead no Cabo',
    muscleGroup: 'triceps',
    equipment: 'cabo',
    difficulty: 'intermediario',
    instructions: [
      'Polia baixa atrás de você',
      'Corda acima da cabeça',
      'Estenda para frente e para cima',
      'Cabeça longa do tríceps'
    ],
    tips: ['Alongamento máximo', 'Cabeça longa', 'Tensão constante'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'triceps-11',
    name: 'Tríceps com Elástico',
    muscleGroup: 'triceps',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Prenda o elástico alto',
      'Empurre para baixo',
      'Cotovelos fixos',
      'Extensão completa'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Varie o ângulo'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'triceps-12',
    name: 'Tríceps Unilateral no Cabo',
    muscleGroup: 'triceps',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia alta',
      'Empurre com um braço de cada vez',
      'Cotovelo fixo',
      'Alterne os lados'
    ],
    tips: ['Unilateral', 'Corrige assimetrias', 'Foco'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'triceps-13',
    name: 'Tríceps Testa Declinado',
    muscleGroup: 'triceps',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Banco declinado',
      'Barra acima da cabeça',
      'Desça até a testa',
      'Estenda completamente'
    ],
    tips: ['Variação avançada', 'Maior tensão', 'Controle'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'triceps-14',
    name: 'Flexão Diamante',
    muscleGroup: 'triceps',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Mãos juntas formando diamante',
      'Desça mantendo cotovelos próximos',
      'Peito quase toca as mãos',
      'Empurre de volta'
    ],
    tips: ['Sem equipamento', 'Muito efetivo', 'Progressivo'],
    sets: 3,
    reps: '10-15'
  },
  {
    id: 'triceps-15',
    name: 'Tríceps JM Press',
    muscleGroup: 'triceps',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Híbrido entre supino fechado e tríceps testa',
      'Desça a barra até o pescoço/queixo',
      'Cotovelos a 45 graus',
      'Empurre de volta'
    ],
    tips: ['Técnica avançada', 'Força e massa', 'Aprenda a forma'],
    sets: 3,
    reps: '8-10'
  },
  {
    id: 'triceps-16',
    name: 'Tríceps Invertido no Cabo',
    muscleGroup: 'triceps',
    equipment: 'cabo',
    difficulty: 'intermediario',
    instructions: [
      'Polia baixa de costas',
      'Pegada invertida (palmas para cima)',
      'Empurre para baixo',
      'Cabeça medial'
    ],
    tips: ['Variação única', 'Cabeça medial', 'Tensão diferente'],
    sets: 3,
    reps: '12-15'
  },

  // ============= TRAPÉZIO (15 exercícios) =============
  {
    id: 'trapezio-1',
    name: 'Encolhimento com Barra',
    muscleGroup: 'trapezio',
    equipment: 'barra',
    difficulty: 'iniciante',
    instructions: [
      'Barra na frente das coxas',
      'Eleve os ombros em direção às orelhas',
      'Segure no topo por 1 segundo',
      'Desça controladamente'
    ],
    tips: ['Exercício base', 'Não girar os ombros', 'Controle o peso'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'trapezio-2',
    name: 'Encolhimento com Halteres',
    muscleGroup: 'trapezio',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Halteres ao lado do corpo',
      'Eleve os ombros',
      'Contraia no topo',
      'Desça lentamente'
    ],
    tips: ['Amplitude natural', 'Pegada neutra', 'Controle'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'trapezio-3',
    name: 'Encolhimento Atrás',
    muscleGroup: 'trapezio',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Barra atrás das costas',
      'Eleve os ombros',
      'Contraia fortemente',
      'Desça controladamente'
    ],
    tips: ['Trabalha trapézio médio', 'Postura', 'Peso moderado'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'trapezio-4',
    name: 'Farmer Walk',
    muscleGroup: 'trapezio',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Segure halteres pesados',
      'Caminhe mantendo postura ereta',
      'Ombros para trás',
      'Passos controlados'
    ],
    tips: ['Funcional', 'Pegada e trapézio', 'Core ativo'],
    sets: 4,
    reps: '30-60 segundos'
  },
  {
    id: 'trapezio-5',
    name: 'Remada Alta com Barra',
    muscleGroup: 'trapezio',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Pegada fechada',
      'Puxe até o queixo',
      'Cotovelos altos',
      'Desça controladamente'
    ],
    tips: ['Trapézio e deltoides', 'Cuidado com os ombros', 'Peso moderado'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'trapezio-6',
    name: 'Face Pull',
    muscleGroup: 'trapezio',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia na altura do rosto',
      'Puxe até as orelhas',
      'Cotovelos altos',
      'Contraia trapézio médio'
    ],
    tips: ['Saúde dos ombros', 'Postura', 'Trapézio médio'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'trapezio-7',
    name: 'Encolhimento no Cabo',
    muscleGroup: 'trapezio',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia baixa com barra',
      'Eleve os ombros',
      'Tensão constante',
      'Contraia no topo'
    ],
    tips: ['Tensão contínua', 'Ótima variação', 'Controle'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'trapezio-8',
    name: 'Encolhimento Inclinado',
    muscleGroup: 'trapezio',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Incline o tronco a 45 graus',
      'Halteres pendurados',
      'Eleve os ombros para trás',
      'Contraia as escápulas'
    ],
    tips: ['Trapézio médio e inferior', 'Postura', 'Peso moderado'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'trapezio-9',
    name: 'Levantamento Terra',
    muscleGroup: 'trapezio',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Barra no chão',
      'Levante mantendo costas retas',
      'Trapézio trabalha isometricamente',
      'Controle total'
    ],
    tips: ['Exercício completo', 'Trapézio isométrico', 'Técnica crucial'],
    sets: 4,
    reps: '5-8'
  },
  {
    id: 'trapezio-10',
    name: 'Encolhimento com Elástico',
    muscleGroup: 'trapezio',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Pise no elástico',
      'Segure as pontas',
      'Eleve os ombros',
      'Contraia no topo'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Varie a resistência'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'trapezio-11',
    name: 'Y Raise',
    muscleGroup: 'trapezio',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Incline o tronco',
      'Eleve os halteres formando Y',
      'Polegares para cima',
      'Contraia trapézio inferior'
    ],
    tips: ['Trapézio inferior', 'Postura', 'Peso leve'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'trapezio-12',
    name: 'Encolhimento Unilateral',
    muscleGroup: 'trapezio',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Um haltere de cada vez',
      'Eleve o ombro',
      'Contraia fortemente',
      'Alterne os lados'
    ],
    tips: ['Unilateral', 'Corrige assimetrias', 'Foco'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'trapezio-13',
    name: 'Remada Alta com Halteres',
    muscleGroup: 'trapezio',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Halteres na frente',
      'Puxe até o queixo',
      'Cotovelos altos',
      'Desça controladamente'
    ],
    tips: ['Movimento natural', 'Trapézio e deltoides', 'Controle'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'trapezio-14',
    name: 'Encolhimento na Smith',
    muscleGroup: 'trapezio',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Barra na Smith na frente',
      'Eleve os ombros',
      'Movimento vertical',
      'Contraia no topo'
    ],
    tips: ['Estabilidade', 'Foco no trapézio', 'Seguro'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'trapezio-15',
    name: 'Overhead Carry',
    muscleGroup: 'trapezio',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Halteres acima da cabeça',
      'Caminhe mantendo braços estendidos',
      'Core ativo',
      'Postura ereta'
    ],
    tips: ['Funcional', 'Estabilização', 'Trapézio e ombros'],
    sets: 3,
    reps: '30-60 segundos'
  },

  // ============= QUADRÍCEPS (17 exercícios) =============
  {
    id: 'quadriceps-1',
    name: 'Agachamento Livre com Barra',
    muscleGroup: 'quadriceps',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Barra nas costas (trapézio)',
      'Desça até coxas paralelas ao chão',
      'Joelhos alinhados com os pés',
      'Empurre pelos calcanhares'
    ],
    tips: ['Rei dos exercícios', 'Core ativo', 'Técnica é crucial'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'quadriceps-2',
    name: 'Agachamento Frontal',
    muscleGroup: 'quadriceps',
    equipment: 'barra',
    difficulty: 'avancado',
    instructions: [
      'Barra na frente dos ombros',
      'Cotovelos altos',
      'Desça mantendo tronco ereto',
      'Mais ênfase no quadríceps'
    ],
    tips: ['Quadríceps intenso', 'Postura ereta', 'Mobilidade'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'quadriceps-3',
    name: 'Leg Press 45°',
    muscleGroup: 'quadriceps',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Pés na plataforma na largura dos ombros',
      'Desça até 90 graus',
      'Empurre pela plataforma',
      'Não trave os joelhos'
    ],
    tips: ['Seguro', 'Peso alto', 'Amplitude controlada'],
    sets: 4,
    reps: '10-15'
  },
  {
    id: 'quadriceps-4',
    name: 'Cadeira Extensora',
    muscleGroup: 'quadriceps',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Sente na máquina',
      'Estenda as pernas completamente',
      'Contraia no topo',
      'Desça controladamente'
    ],
    tips: ['Isolamento perfeito', 'Contraia fortemente', 'Controle'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'quadriceps-5',
    name: 'Afundo com Halteres',
    muscleGroup: 'quadriceps',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Halteres ao lado do corpo',
      'Dê um passo à frente',
      'Desça até joelho traseiro quase tocar o chão',
      'Empurre de volta'
    ],
    tips: ['Unilateral', 'Equilíbrio', 'Glúteos também'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'quadriceps-6',
    name: 'Agachamento Búlgaro',
    muscleGroup: 'quadriceps',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Pé traseiro elevado em banco',
      'Desça com a perna da frente',
      'Joelho não passa dos dedos',
      'Empurre de volta'
    ],
    tips: ['Unilateral intenso', 'Equilíbrio', 'Amplitude grande'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'quadriceps-7',
    name: 'Hack Squat',
    muscleGroup: 'quadriceps',
    equipment: 'maquina',
    difficulty: 'intermediario',
    instructions: [
      'Costas na almofada',
      'Pés na plataforma',
      'Desça controladamente',
      'Empurre pela plataforma'
    ],
    tips: ['Quadríceps intenso', 'Seguro', 'Amplitude completa'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'quadriceps-8',
    name: 'Agachamento Sumô',
    muscleGroup: 'quadriceps',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Pés bem afastados, pontas para fora',
      'Haltere entre as pernas',
      'Desça mantendo tronco ereto',
      'Empurre de volta'
    ],
    tips: ['Trabalha adutores também', 'Postura ereta', 'Amplitude'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'quadriceps-9',
    name: 'Sissy Squat',
    muscleGroup: 'quadriceps',
    equipment: 'peso-corporal',
    difficulty: 'avancado',
    instructions: [
      'Segure em algo para equilíbrio',
      'Incline o corpo para trás',
      'Desça flexionando os joelhos',
      'Quadríceps trabalha intensamente'
    ],
    tips: ['Isolamento extremo', 'Avançado', 'Cuidado com os joelhos'],
    sets: 3,
    reps: '10-15'
  },
  {
    id: 'quadriceps-10',
    name: 'Agachamento com Elástico',
    muscleGroup: 'quadriceps',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Pise no elástico',
      'Segure as pontas nos ombros',
      'Agache normalmente',
      'Empurre de volta'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Varie a resistência'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'quadriceps-11',
    name: 'Step Up com Halteres',
    muscleGroup: 'quadriceps',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Halteres ao lado',
      'Suba em banco ou caixa',
      'Empurre pela perna de cima',
      'Desça controladamente'
    ],
    tips: ['Unilateral', 'Funcional', 'Glúteos também'],
    sets: 3,
    reps: '12-15 cada perna'
  },
  {
    id: 'quadriceps-12',
    name: 'Agachamento Goblet',
    muscleGroup: 'quadriceps',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Segure um haltere no peito',
      'Agache mantendo tronco ereto',
      'Cotovelos entre os joelhos',
      'Empurre de volta'
    ],
    tips: ['Ótimo para aprender', 'Postura natural', 'Mobilidade'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'quadriceps-13',
    name: 'Leg Press Unilateral',
    muscleGroup: 'quadriceps',
    equipment: 'maquina',
    difficulty: 'intermediario',
    instructions: [
      'Uma perna de cada vez',
      'Desça controladamente',
      'Empurre pela plataforma',
      'Alterne as pernas'
    ],
    tips: ['Unilateral', 'Corrige assimetrias', 'Foco'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'quadriceps-14',
    name: 'Afundo Reverso',
    muscleGroup: 'quadriceps',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Dê um passo para trás',
      'Desça até joelho quase tocar',
      'Empurre de volta',
      'Alterne as pernas'
    ],
    tips: ['Menos stress no joelho', 'Glúteos também', 'Equilíbrio'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'quadriceps-15',
    name: 'Agachamento na Smith',
    muscleGroup: 'quadriceps',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Barra na Smith nas costas',
      'Pés levemente à frente',
      'Desça controladamente',
      'Empurre de volta'
    ],
    tips: ['Estabilidade', 'Seguro', 'Foco no quadríceps'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'quadriceps-16',
    name: 'Wall Sit',
    muscleGroup: 'quadriceps',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Costas na parede',
      'Desça até coxas paralelas',
      'Segure a posição',
      'Isométrico'
    ],
    tips: ['Resistência', 'Sem equipamento', 'Progressivo'],
    sets: 3,
    reps: '30-60 segundos'
  },
  {
    id: 'quadriceps-17',
    name: 'Pistol Squat',
    muscleGroup: 'quadriceps',
    equipment: 'peso-corporal',
    difficulty: 'avancado',
    instructions: [
      'Agachamento em uma perna',
      'Outra perna estendida à frente',
      'Desça controladamente',
      'Empurre de volta'
    ],
    tips: ['Muito avançado', 'Equilíbrio', 'Força unilateral'],
    sets: 3,
    reps: '5-8 cada perna'
  },

  // ============= POSTERIOR DE COXA (15 exercícios) =============
  {
    id: 'posterior-1',
    name: 'Stiff com Barra',
    muscleGroup: 'posterior',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Barra na frente das coxas',
      'Desça inclinando o tronco',
      'Pernas quase retas',
      'Sinta alongamento nos posteriores'
    ],
    tips: ['Exercício base', 'Costas retas', 'Alongamento controlado'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'posterior-2',
    name: 'Mesa Flexora',
    muscleGroup: 'posterior',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Deite de bruços na máquina',
      'Flexione as pernas trazendo calcanhares aos glúteos',
      'Contraia no topo',
      'Desça controladamente'
    ],
    tips: ['Isolamento perfeito', 'Contraia fortemente', 'Controle'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'posterior-3',
    name: 'Levantamento Terra Romeno',
    muscleGroup: 'posterior',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Barra na frente',
      'Desça mantendo barra próxima às pernas',
      'Joelhos levemente flexionados',
      'Suba contraindo glúteos e posteriores'
    ],
    tips: ['Posterior e glúteos', 'Técnica importante', 'Amplitude controlada'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'posterior-4',
    name: 'Nordic Curl',
    muscleGroup: 'posterior',
    equipment: 'peso-corporal',
    difficulty: 'avancado',
    instructions: [
      'Joelhos no chão, pés presos',
      'Desça o corpo para frente controladamente',
      'Posteriores trabalham excentricamente',
      'Use as mãos para ajudar a subir'
    ],
    tips: ['Muito intenso', 'Excêntrico', 'Progressão gradual'],
    sets: 3,
    reps: '5-8'
  },
  {
    id: 'posterior-5',
    name: 'Stiff com Halteres',
    muscleGroup: 'posterior',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Halteres ao lado do corpo',
      'Desça inclinando o tronco',
      'Halteres descem pelas pernas',
      'Suba contraindo posteriores'
    ],
    tips: ['Movimento natural', 'Amplitude completa', 'Controle'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'posterior-6',
    name: 'Mesa Flexora em Pé',
    muscleGroup: 'posterior',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Fique em pé na máquina',
      'Flexione uma perna de cada vez',
      'Contraia no topo',
      'Desça controladamente'
    ],
    tips: ['Unilateral', 'Isolamento', 'Foco'],
    sets: 3,
    reps: '12-15 cada perna'
  },
  {
    id: 'posterior-7',
    name: 'Good Morning',
    muscleGroup: 'posterior',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Barra nas costas',
      'Incline o tronco para frente',
      'Joelhos levemente flexionados',
      'Suba contraindo posteriores e lombar'
    ],
    tips: ['Posterior e lombar', 'Técnica importante', 'Peso moderado'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'posterior-8',
    name: 'Ponte de Glúteos',
    muscleGroup: 'posterior',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Deite de costas, joelhos flexionados',
      'Eleve o quadril',
      'Contraia glúteos e posteriores',
      'Desça controladamente'
    ],
    tips: ['Glúteos e posteriores', 'Sem equipamento', 'Progressivo'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'posterior-9',
    name: 'Stiff Unilateral',
    muscleGroup: 'posterior',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Um haltere em uma mão',
      'Incline sobre uma perna',
      'Outra perna estende para trás',
      'Equilíbrio e posterior'
    ],
    tips: ['Unilateral', 'Equilíbrio', 'Glúteos também'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'posterior-10',
    name: 'Flexora com Elástico',
    muscleGroup: 'posterior',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Prenda o elástico baixo',
      'Prenda no tornozelo',
      'Flexione a perna',
      'Contraia o posterior'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Unilateral'],
    sets: 3,
    reps: '15-20 cada perna'
  },
  {
    id: 'posterior-11',
    name: 'Levantamento Terra Sumô',
    muscleGroup: 'posterior',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Pés bem afastados',
      'Pegada entre as pernas',
      'Levante mantendo costas retas',
      'Posteriores e adutores'
    ],
    tips: ['Variação do terra', 'Adutores também', 'Técnica'],
    sets: 4,
    reps: '8-10'
  },
  {
    id: 'posterior-12',
    name: 'Ponte Unilateral',
    muscleGroup: 'posterior',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Uma perna estendida',
      'Eleve o quadril com a outra',
      'Contraia fortemente',
      'Alterne as pernas'
    ],
    tips: ['Unilateral', 'Intenso', 'Equilíbrio'],
    sets: 3,
    reps: '12-15 cada perna'
  },
  {
    id: 'posterior-13',
    name: 'Stiff na Smith',
    muscleGroup: 'posterior',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Barra na Smith',
      'Desça inclinando o tronco',
      'Movimento guiado',
      'Suba contraindo posteriores'
    ],
    tips: ['Estabilidade', 'Seguro', 'Foco no posterior'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'posterior-14',
    name: 'Slide Leg Curl',
    muscleGroup: 'posterior',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Deite com calcanhares em superfície deslizante',
      'Eleve o quadril',
      'Puxe os calcanhares em direção aos glúteos',
      'Estenda de volta'
    ],
    tips: ['Sem equipamento', 'Intenso', 'Controle'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'posterior-15',
    name: 'Kettlebell Swing',
    muscleGroup: 'posterior',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Kettlebell ou haltere entre as pernas',
      'Balanço explosivo até a altura dos ombros',
      'Quadril faz o movimento',
      'Posteriores e glúteos'
    ],
    tips: ['Explosivo', 'Funcional', 'Cardio também'],
    sets: 4,
    reps: '15-20'
  },

  // ============= GLÚTEOS (16 exercícios) =============
  {
    id: 'gluteo-1',
    name: 'Hip Thrust com Barra',
    muscleGroup: 'gluteo',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Costas apoiadas em banco',
      'Barra sobre o quadril',
      'Eleve o quadril até extensão completa',
      'Contraia glúteos no topo'
    ],
    tips: ['Melhor exercício para glúteos', 'Contraia fortemente', 'Amplitude completa'],
    sets: 4,
    reps: '10-12'
  },
  {
    id: 'gluteo-2',
    name: 'Agachamento Sumô',
    muscleGroup: 'gluteo',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Pés bem afastados',
      'Haltere entre as pernas',
      'Desça profundamente',
      'Empurre pelos glúteos'
    ],
    tips: ['Glúteos e adutores', 'Profundidade', 'Postura ereta'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'gluteo-3',
    name: 'Afundo Reverso',
    muscleGroup: 'gluteo',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Passo para trás',
      'Desça profundamente',
      'Empurre pela perna da frente',
      'Glúteos trabalham intensamente'
    ],
    tips: ['Unilateral', 'Glúteos e posteriores', 'Equilíbrio'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'gluteo-4',
    name: 'Ponte de Glúteos com Barra',
    muscleGroup: 'gluteo',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Deite com barra sobre o quadril',
      'Eleve o quadril',
      'Contraia glúteos no topo',
      'Desça controladamente'
    ],
    tips: ['Isolamento', 'Contraia fortemente', 'Progressivo'],
    sets: 4,
    reps: '12-15'
  },
  {
    id: 'gluteo-5',
    name: 'Coice no Cabo',
    muscleGroup: 'gluteo',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia baixa presa no tornozelo',
      'Chute para trás',
      'Contraia o glúteo',
      'Retorne controladamente'
    ],
    tips: ['Isolamento perfeito', 'Unilateral', 'Tensão constante'],
    sets: 3,
    reps: '15-20 cada perna'
  },
  {
    id: 'gluteo-6',
    name: 'Agachamento Búlgaro',
    muscleGroup: 'gluteo',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Pé traseiro elevado',
      'Desça profundamente',
      'Empurre pela perna da frente',
      'Glúteos trabalham muito'
    ],
    tips: ['Unilateral intenso', 'Profundidade', 'Equilíbrio'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'gluteo-7',
    name: 'Step Up Alto',
    muscleGroup: 'gluteo',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Caixa ou banco alto',
      'Suba empurrando pelo glúteo',
      'Extensão completa do quadril',
      'Desça controladamente'
    ],
    tips: ['Funcional', 'Glúteos e quadríceps', 'Altura aumenta dificuldade'],
    sets: 3,
    reps: '12-15 cada perna'
  },
  {
    id: 'gluteo-8',
    name: 'Abdução no Cabo',
    muscleGroup: 'gluteo',
    equipment: 'cabo',
    difficulty: 'iniciante',
    instructions: [
      'Polia baixa no tornozelo',
      'Abra a perna lateralmente',
      'Contraia glúteo médio',
      'Retorne controladamente'
    ],
    tips: ['Glúteo médio', 'Estabilização', 'Unilateral'],
    sets: 3,
    reps: '15-20 cada perna'
  },
  {
    id: 'gluteo-9',
    name: 'Levantamento Terra Romeno',
    muscleGroup: 'gluteo',
    equipment: 'barra',
    difficulty: 'intermediario',
    instructions: [
      'Barra próxima às pernas',
      'Desça inclinando o quadril',
      'Suba contraindo glúteos',
      'Extensão completa do quadril'
    ],
    tips: ['Glúteos e posteriores', 'Técnica', 'Contraia no topo'],
    sets: 4,
    reps: '8-12'
  },
  {
    id: 'gluteo-10',
    name: 'Ponte Unilateral',
    muscleGroup: 'gluteo',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Uma perna estendida',
      'Eleve o quadril',
      'Contraia glúteo fortemente',
      'Alterne as pernas'
    ],
    tips: ['Unilateral', 'Intenso', 'Sem equipamento'],
    sets: 3,
    reps: '12-15 cada perna'
  },
  {
    id: 'gluteo-11',
    name: 'Coice Caneleira',
    muscleGroup: 'gluteo',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Quatro apoios',
      'Chute uma perna para trás e para cima',
      'Contraia o glúteo',
      'Alterne as pernas'
    ],
    tips: ['Isolamento', 'Sem equipamento', 'Contraia fortemente'],
    sets: 3,
    reps: '15-20 cada perna'
  },
  {
    id: 'gluteo-12',
    name: 'Hip Thrust Unilateral',
    muscleGroup: 'gluteo',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Uma perna de cada vez',
      'Eleve o quadril',
      'Contraia glúteo fortemente',
      'Alterne as pernas'
    ],
    tips: ['Unilateral', 'Intenso', 'Equilíbrio'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'gluteo-13',
    name: 'Abdução na Máquina',
    muscleGroup: 'gluteo',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Sente na máquina',
      'Abra as pernas contra a resistência',
      'Contraia glúteo médio',
      'Retorne controladamente'
    ],
    tips: ['Glúteo médio', 'Isolamento', 'Controle'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'gluteo-14',
    name: 'Frog Pump',
    muscleGroup: 'gluteo',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Deite com solas dos pés juntas',
      'Joelhos abertos',
      'Eleve o quadril',
      'Contraia glúteos'
    ],
    tips: ['Isolamento', 'Sem equipamento', 'Queimação'],
    sets: 3,
    reps: '20-25'
  },
  {
    id: 'gluteo-15',
    name: 'Stiff Unilateral',
    muscleGroup: 'gluteo',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Uma perna no chão',
      'Outra estende para trás',
      'Incline o tronco',
      'Glúteo e posterior'
    ],
    tips: ['Unilateral', 'Equilíbrio', 'Alongamento'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'gluteo-16',
    name: 'Clamshell',
    muscleGroup: 'gluteo',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Deite de lado com elástico nos joelhos',
      'Abra o joelho de cima',
      'Contraia glúteo médio',
      'Retorne controladamente'
    ],
    tips: ['Glúteo médio', 'Ativação', 'Reabilitação'],
    sets: 3,
    reps: '20-25 cada lado'
  },

  // ============= PANTURRILHA (15 exercícios) =============
  {
    id: 'panturrilha-1',
    name: 'Panturrilha em Pé na Máquina',
    muscleGroup: 'panturrilha',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Ombros sob as almofadas',
      'Pontas dos pés na plataforma',
      'Eleve os calcanhares ao máximo',
      'Desça alongando completamente'
    ],
    tips: ['Amplitude completa', 'Contraia no topo', 'Controle'],
    sets: 4,
    reps: '15-20'
  },
  {
    id: 'panturrilha-2',
    name: 'Panturrilha Sentado na Máquina',
    muscleGroup: 'panturrilha',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Sente com joelhos sob a almofada',
      'Pontas dos pés na plataforma',
      'Eleve os calcanhares',
      'Trabalha o sóleo'
    ],
    tips: ['Sóleo (joelho flexionado)', 'Amplitude completa', 'Controle'],
    sets: 4,
    reps: '15-20'
  },
  {
    id: 'panturrilha-3',
    name: 'Panturrilha no Leg Press',
    muscleGroup: 'panturrilha',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Pontas dos pés na plataforma',
      'Empurre com as panturrilhas',
      'Amplitude completa',
      'Contraia no topo'
    ],
    tips: ['Peso alto', 'Amplitude', 'Controle'],
    sets: 4,
    reps: '15-20'
  },
  {
    id: 'panturrilha-4',
    name: 'Panturrilha em Pé com Halteres',
    muscleGroup: 'panturrilha',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Halteres ao lado do corpo',
      'Fique na ponta dos pés',
      'Eleve ao máximo',
      'Desça alongando'
    ],
    tips: ['Simples e efetivo', 'Amplitude', 'Equilíbrio'],
    sets: 4,
    reps: '15-20'
  },
  {
    id: 'panturrilha-5',
    name: 'Panturrilha Unilateral',
    muscleGroup: 'panturrilha',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Uma perna de cada vez',
      'Segure em algo para equilíbrio',
      'Eleve o calcanhar ao máximo',
      'Alterne as pernas'
    ],
    tips: ['Unilateral', 'Intenso', 'Corrige assimetrias'],
    sets: 3,
    reps: '15-20 cada perna'
  },
  {
    id: 'panturrilha-6',
    name: 'Panturrilha no Smith',
    muscleGroup: 'panturrilha',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Barra na Smith nos ombros',
      'Pontas dos pés em step',
      'Eleve os calcanhares',
      'Desça alongando'
    ],
    tips: ['Estabilidade', 'Peso alto', 'Amplitude'],
    sets: 4,
    reps: '15-20'
  },
  {
    id: 'panturrilha-7',
    name: 'Panturrilha Sentado com Haltere',
    muscleGroup: 'panturrilha',
    equipment: 'halteres',
    difficulty: 'iniciante',
    instructions: [
      'Sente com haltere sobre os joelhos',
      'Pontas dos pés em step',
      'Eleve os calcanhares',
      'Trabalha o sóleo'
    ],
    tips: ['Sóleo', 'Sem máquina', 'Amplitude'],
    sets: 4,
    reps: '15-20'
  },
  {
    id: 'panturrilha-8',
    name: 'Panturrilha Donkey',
    muscleGroup: 'panturrilha',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Incline o tronco apoiado',
      'Parceiro senta nas suas costas',
      'Eleve os calcanhares',
      'Alongamento extremo'
    ],
    tips: ['Alongamento máximo', 'Clássico', 'Intenso'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'panturrilha-9',
    name: 'Panturrilha com Elástico',
    muscleGroup: 'panturrilha',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Elástico sob a ponta do pé',
      'Segure as pontas',
      'Empurre contra a resistência',
      'Amplitude completa'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Varie o ângulo'],
    sets: 3,
    reps: '20-25'
  },
  {
    id: 'panturrilha-10',
    name: 'Panturrilha Jump',
    muscleGroup: 'panturrilha',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Saltos usando apenas as panturrilhas',
      'Joelhos quase retos',
      'Explosivo',
      'Aterrissagem controlada'
    ],
    tips: ['Explosivo', 'Pliométrico', 'Cardio também'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'panturrilha-11',
    name: 'Panturrilha no Hack',
    muscleGroup: 'panturrilha',
    equipment: 'maquina',
    difficulty: 'iniciante',
    instructions: [
      'Posicione-se no Hack Squat',
      'Pontas dos pés na plataforma',
      'Empurre com as panturrilhas',
      'Amplitude completa'
    ],
    tips: ['Variação', 'Peso alto', 'Amplitude'],
    sets: 4,
    reps: '15-20'
  },
  {
    id: 'panturrilha-12',
    name: 'Panturrilha Tibial Anterior',
    muscleGroup: 'panturrilha',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Calcanhares no chão',
      'Eleve as pontas dos pés',
      'Trabalha a canela',
      'Prevenção de lesões'
    ],
    tips: ['Tibial anterior', 'Equilíbrio muscular', 'Prevenção'],
    sets: 3,
    reps: '20-25'
  },
  {
    id: 'panturrilha-13',
    name: 'Panturrilha Farmer Walk',
    muscleGroup: 'panturrilha',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Halteres pesados',
      'Caminhe na ponta dos pés',
      'Mantém elevação',
      'Funcional'
    ],
    tips: ['Funcional', 'Resistência', 'Pegada também'],
    sets: 3,
    reps: '30-60 segundos'
  },
  {
    id: 'panturrilha-14',
    name: 'Panturrilha na Escada',
    muscleGroup: 'panturrilha',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Ponta do pé no degrau',
      'Calcanhar no ar',
      'Eleve ao máximo',
      'Desça alongando'
    ],
    tips: ['Sem equipamento', 'Amplitude máxima', 'Simples'],
    sets: 4,
    reps: '20-25'
  },
  {
    id: 'panturrilha-15',
    name: 'Panturrilha Isométrico',
    muscleGroup: 'panturrilha',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Eleve os calcanhares ao máximo',
      'Segure a posição',
      'Contraia fortemente',
      'Isométrico'
    ],
    tips: ['Resistência', 'Sem movimento', 'Queimação'],
    sets: 3,
    reps: '30-60 segundos'
  },

  // ============= ABDÔMEN (18 exercícios) =============
  {
    id: 'abdomen-1',
    name: 'Abdominal Crunch',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Deite com joelhos flexionados',
      'Mãos atrás da cabeça',
      'Eleve o tronco contraindo o abdômen',
      'Desça controladamente'
    ],
    tips: ['Exercício base', 'Não puxe o pescoço', 'Contraia o abdômen'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'abdomen-2',
    name: 'Prancha Frontal',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Apoie antebraços e pontas dos pés',
      'Corpo reto',
      'Core contraído',
      'Segure a posição'
    ],
    tips: ['Isométrico', 'Core completo', 'Não deixe quadril cair'],
    sets: 3,
    reps: '30-60 segundos'
  },
  {
    id: 'abdomen-3',
    name: 'Elevação de Pernas',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Deite com pernas estendidas',
      'Eleve as pernas até 90 graus',
      'Desça controladamente',
      'Não toque o chão'
    ],
    tips: ['Abdômen inferior', 'Controle', 'Lombar no chão'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'abdomen-4',
    name: 'Bicicleta',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Deite com mãos atrás da cabeça',
      'Cotovelo toca joelho oposto',
      'Alterne os lados',
      'Movimento de pedalar'
    ],
    tips: ['Oblíquos', 'Dinâmico', 'Controle'],
    sets: 3,
    reps: '20-30'
  },
  {
    id: 'abdomen-5',
    name: 'Prancha Lateral',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Apoie um antebraço e lateral do pé',
      'Corpo reto',
      'Quadril elevado',
      'Segure a posição'
    ],
    tips: ['Oblíquos', 'Estabilização', 'Alterne os lados'],
    sets: 3,
    reps: '30-45 segundos cada lado'
  },
  {
    id: 'abdomen-6',
    name: 'Mountain Climbers',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Posição de prancha',
      'Traga joelhos alternadamente ao peito',
      'Movimento rápido',
      'Core ativo'
    ],
    tips: ['Dinâmico', 'Cardio também', 'Core estável'],
    sets: 3,
    reps: '30-60 segundos'
  },
  {
    id: 'abdomen-7',
    name: 'Russian Twist',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Sente com pés elevados',
      'Tronco inclinado',
      'Gire o tronco alternadamente',
      'Pode segurar peso'
    ],
    tips: ['Oblíquos', 'Rotação', 'Controle'],
    sets: 3,
    reps: '20-30'
  },
  {
    id: 'abdomen-8',
    name: 'Abdominal Canivete',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'avancado',
    instructions: [
      'Deite completamente estendido',
      'Eleve tronco e pernas simultaneamente',
      'Toque as pontas dos pés',
      'Desça controladamente'
    ],
    tips: ['Abdômen completo', 'Avançado', 'Controle'],
    sets: 3,
    reps: '10-15'
  },
  {
    id: 'abdomen-9',
    name: 'Prancha com Elevação de Perna',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Posição de prancha',
      'Eleve uma perna de cada vez',
      'Mantenha quadril estável',
      'Alterne as pernas'
    ],
    tips: ['Core e glúteos', 'Estabilização', 'Controle'],
    sets: 3,
    reps: '10-12 cada perna'
  },
  {
    id: 'abdomen-10',
    name: 'Abdominal com Peso',
    muscleGroup: 'abdomen',
    equipment: 'halteres',
    difficulty: 'intermediario',
    instructions: [
      'Deite segurando peso no peito',
      'Faça crunch com peso',
      'Resistência adicional',
      'Controle'
    ],
    tips: ['Progressão', 'Mais resistência', 'Controle'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'abdomen-11',
    name: 'Dead Bug',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'iniciante',
    instructions: [
      'Deite com braços e pernas no ar',
      'Estenda braço e perna opostos',
      'Alterne os lados',
      'Lombar no chão'
    ],
    tips: ['Core estabilização', 'Coordenação', 'Controle'],
    sets: 3,
    reps: '12-15 cada lado'
  },
  {
    id: 'abdomen-12',
    name: 'Abdominal Declinado',
    muscleGroup: 'abdomen',
    equipment: 'maquina',
    difficulty: 'intermediario',
    instructions: [
      'Banco declinado',
      'Prenda os pés',
      'Suba contraindo o abdômen',
      'Desça controladamente'
    ],
    tips: ['Mais resistência', 'Amplitude', 'Controle'],
    sets: 3,
    reps: '12-15'
  },
  {
    id: 'abdomen-13',
    name: 'Abdominal na Polia',
    muscleGroup: 'abdomen',
    equipment: 'cabo',
    difficulty: 'intermediario',
    instructions: [
      'Ajoelhe de frente para a polia',
      'Segure a corda',
      'Flexione o tronco para baixo',
      'Contraia o abdômen'
    ],
    tips: ['Tensão constante', 'Resistência ajustável', 'Controle'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'abdomen-14',
    name: 'Hollow Hold',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'avancado',
    instructions: [
      'Deite com braços e pernas estendidos',
      'Eleve tudo do chão',
      'Corpo em forma de banana',
      'Segure a posição'
    ],
    tips: ['Isométrico avançado', 'Core completo', 'Muito intenso'],
    sets: 3,
    reps: '20-30 segundos'
  },
  {
    id: 'abdomen-15',
    name: 'Windshield Wipers',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'avancado',
    instructions: [
      'Pendure na barra',
      'Pernas estendidas a 90 graus',
      'Gire as pernas lado a lado',
      'Controle total'
    ],
    tips: ['Oblíquos avançado', 'Força de pegada', 'Controle'],
    sets: 3,
    reps: '8-12'
  },
  {
    id: 'abdomen-16',
    name: 'Abdominal Remador',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Sente com pernas estendidas',
      'Traga joelhos ao peito',
      'Simultaneamente incline o tronco',
      'Movimento de remar'
    ],
    tips: ['Dinâmico', 'Abdômen completo', 'Controle'],
    sets: 3,
    reps: '15-20'
  },
  {
    id: 'abdomen-17',
    name: 'Prancha Commando',
    muscleGroup: 'abdomen',
    equipment: 'peso-corporal',
    difficulty: 'intermediario',
    instructions: [
      'Alterne entre prancha em antebraços e mãos',
      'Um braço de cada vez',
      'Core estável',
      'Movimento controlado'
    ],
    tips: ['Dinâmico', 'Core e ombros', 'Controle'],
    sets: 3,
    reps: '10-12'
  },
  {
    id: 'abdomen-18',
    name: 'Abdominal com Elástico',
    muscleGroup: 'abdomen',
    equipment: 'elastico',
    difficulty: 'iniciante',
    instructions: [
      'Prenda o elástico alto',
      'Ajoelhe e puxe para baixo',
      'Flexione o tronco',
      'Contraia o abdômen'
    ],
    tips: ['Ótimo para casa', 'Tensão progressiva', 'Controle'],
    sets: 3,
    reps: '15-20'
  }
];

// Função para buscar exercícios por grupo muscular
export function getExercisesByMuscleGroup(muscleGroup: MuscleGroup): Exercise[] {
  return EXERCISES_DATABASE.filter(ex => ex.muscleGroup === muscleGroup);
}

// Função para buscar exercícios por equipamento
export function getExercisesByEquipment(equipment: Equipment): Exercise[] {
  return EXERCISES_DATABASE.filter(ex => ex.equipment === equipment);
}

// Função para buscar exercício por ID
export function getExerciseById(id: string): Exercise | undefined {
  return EXERCISES_DATABASE.find(ex => ex.id === id);
}

// Função para buscar exercícios por dificuldade
export function getExercisesByDifficulty(difficulty: 'iniciante' | 'intermediario' | 'avancado'): Exercise[] {
  return EXERCISES_DATABASE.filter(ex => ex.difficulty === difficulty);
}
