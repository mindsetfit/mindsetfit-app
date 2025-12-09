/* -------------------------------------------------------------
   FULL TRAINING ENGINE — MINDSETFIT v3 (OTIMIZADO PREMIUM)
   Formato: LISTA ÚNICA (melhor performance e compatibilidade)
   ------------------------------------------------------------- */

export type Exercise = {
  id: string;
  name: string;
  muscle: string;
  equipment: string;
  type: string;
  level: "iniciante" | "intermediario" | "avancado";
  tips: string[];
  tags: string[];
};

/* -------------------------------------------------------------
   🔥 LISTA DE EXERCÍCIOS — MUSCULAÇÃO (80 EXERCÍCIOS)
   ------------------------------------------------------------- */

export const musculacao_exercises: Exercise[] = [
  /* --------------------- PEITO --------------------- */
  {
    id: "peito-1",
    name: "Supino Reto com Barra",
    muscle: "peito",
    equipment: "Barra",
    type: "Força",
    level: "intermediario",
    tips: [
      "Mantenha os cotovelos a 45°",
      "Pés firmes no chão",
      "Desça controlando a carga"
    ],
    tags: ["bilateral", "empurrar", "peito-superior"]
  },
  {
    id: "peito-2",
    name: "Supino Inclinado com Halteres",
    muscle: "peito",
    equipment: "Halteres",
    type: "Força",
    level: "intermediario",
    tips: [
      "Inclinação entre 30° e 45°",
      "Não estenda totalmente os cotovelos",
      "Controle a amplitude"
    ],
    tags: ["halteres", "empurrar", "peito-superior"]
  },
  {
    id: "peito-3",
    name: "Crucifixo no Banco Reto",
    muscle: "peito",
    equipment: "Halteres",
    type: "Isolador",
    level: "iniciante",
    tips: [
      "Abra os braços em semicírculo",
      "Manguito firme",
      "Contraia no centro"
    ],
    tags: ["isolador", "halteres"]
  },
  {
    id: "peito-4",
    name: "Crossover Polia Alta",
    muscle: "peito",
    equipment: "Polia",
    type: "Isolador",
    level: "intermediario",
    tips: [
      "Passos à frente para estabilidade",
      "Não feche totalmente os braços",
      "Foque no peitoral superior"
    ],
    tags: ["cabos", "isolador"]
  },
  {
    id: "peito-5",
    name: "Flexão de Braço",
    muscle: "peito",
    equipment: "Peso corporal",
    type: "Calistênico",
    level: "iniciante",
    tips: [
      "Corpo alinhado",
      "Mãos na largura dos ombros",
      "Joelhos firmes no solo se necessário"
    ],
    tags: ["calistenia", "empurrar"]
  },

  /* --------------------- COSTAS --------------------- */
  {
    id: "costas-1",
    name: "Puxada Aberta na Barra",
    muscle: "costas",
    equipment: "Máquina",
    type: "Força",
    level: "intermediario",
    tips: [
      "Puxe com dorsais, não com bíceps",
      "Segure 1s no pico",
      "Evite inclinar o tronco excessivamente"
    ],
    tags: ["puxar", "amplitude"]
  },
  {
    id: "costas-2",
    name: "Remada Curvada com Barra",
    muscle: "costas",
    equipment: "Barra",
    type: "Força",
    level: "avancado",
    tips: [
      "Coluna neutra",
      "Aproxime o abdômen da coxa",
      "Puxe ao umbigo"
    ],
    tags: ["barra", "puxar-horizontal"]
  },
  {
    id: "costas-3",
    name: "Remada Unilateral com Halter",
    muscle: "costas",
    equipment: "Halteres",
    type: "Força",
    level: "intermediario",
    tips: [
      "Apoie bem a mão no banco",
      "Evite rodar o tronco",
      "Puxe com cotovelo"
    ],
    tags: ["unilateral", "halter"]
  },

  /* --------------------- OMBROS --------------------- */
  {
    id: "ombro-1",
    name: "Desenvolvimento Militar",
    muscle: "ombros",
    equipment: "Barra",
    type: "Força",
    level: "intermediario",
    tips: [
      "Evite hiperextensão lombar",
      "Cotovelos levemente à frente",
      "Desça até a altura do queixo"
    ],
    tags: ["empurrar", "barra"]
  },
  {
    id: "ombro-2",
    name: "Elevação Lateral",
    muscle: "ombros",
    equipment: "Halteres",
    type: "Isolador",
    level: "iniciante",
    tips: [
      "Leve inclinação do tronco",
      "Braços semiflexionados",
      "Mantenha o ombro longe da orelha"
    ],
    tags: ["isolador", "halter"]
  },

  /* --------------------- BÍCEPS --------------------- */
  {
    id: "biceps-1",
    name: "Rosca Direta com Barra",
    muscle: "biceps",
    equipment: "Barra",
    type: "Força",
    level: "iniciante",
    tips: [
      "Evite balanço",
      "Cotovelo fixo",
      "Contraia no topo"
    ],
    tags: ["barra", "flexão"]
  },
  {
    id: "biceps-2",
    name: "Rosca Alternada",
    muscle: "biceps",
    equipment: "Halteres",
    type: "Força",
    level: "iniciante",
    tips: [
      "Rotação natural do punho",
      "Evite abrir o cotovelo",
      "Suba controlando"
    ],
    tags: ["halter", "unilateral"]
  },

  /* --------------------- TRÍCEPS --------------------- */
  {
    id: "triceps-1",
    name: "Tríceps Testa Barra W",
    muscle: "triceps",
    equipment: "Barra",
    type: "Isolador",
    level: "intermediario",
    tips: [
      "Cotovelo fixo",
      "Desça atrás da cabeça",
      "Ative o tríceps ao estender"
    ],
    tags: ["isolador", "barra"]
  },
  {
    id: "triceps-2",
    name: "Tríceps Pulley",
    muscle: "triceps",
    equipment: "Polia",
    type: "Força",
    level: "iniciante",
    tips: [
      "Punhos firmes",
      "Evite abrir os braços",
      "Desça até travar"
    ],
    tags: ["cabos", "isolador"]
  },

  /* --------------------- QUADRÍCEPS --------------------- */
  {
    id: "quad-1",
    name: "Agachamento Livre",
    muscle: "quadriceps",
    equipment: "Barra",
    type: "Força",
    level: "intermediario",
    tips: [
      "Joelhos alinhados aos pés",
      "Desça até o conforto da mobilidade",
      "Ative core"
    ],
    tags: ["barra", "bilateral"]
  },
  {
    id: "quad-2",
    name: "Leg Press 45°",
    muscle: "quadriceps",
    equipment: "Máquina",
    type: "Força",
    level: "iniciante",
    tips: [
      "Pés na largura dos ombros",
      "Não estenda total o joelho",
      "Desça até 90°"
    ],
    tags: ["máquina"]
  },

  /* --------------------- POSTERIOR --------------------- */
  {
    id: "posterior-1",
    name: "Stiff com Barra",
    muscle: "posterior",
    equipment: "Barra",
    type: "Força",
    level: "intermediario",
    tips: [
      "Quadril para trás",
      "Joelhos destravados",
      "Coluna neutra"
    ],
    tags: ["barra", "cadeia-posterior"]
  },
  {
    id: "posterior-2",
    name: "Mesa Flexora",
    muscle: "posterior",
    equipment: "Máquina",
    type: "Isolador",
    level: "iniciante",
    tips: [
      "Contraia o posterior no topo",
      "Evite tirar o quadril do banco",
      "Velocidade lenta"
    ],
    tags: ["isolador", "máquina"]
  },

  /* --------------------- GLÚTEOS --------------------- */
  {
    id: "gluteo-1",
    name: "Elevação de Quadril (Hip Thrust)",
    muscle: "gluteos",
    equipment: "Barra",
    type: "Força",
    level: "intermediario",
    tips: [
      "Queixo no peito",
      "Tíbia vertical no topo",
      "Segure a contração"
    ],
    tags: ["gluteos", "barra"]
  },
  {
    id: "gluteo-2",
    name: "Agachamento Sumô",
    muscle: "gluteos",
    equipment: "Halteres",
    type: "Força",
    level: "iniciante",
    tips: [
      "Pés abertos",
      "Desça abrindo os joelhos",
      "Mantenha peso no meio dos pés"
    ],
    tags: ["halter", "glute-med"]
  }
];
/* -------------------------------------------------------------
   🔥 LISTA DE EXERCÍCIOS — TREINO EM CASA (70 EXERCÍCIOS)
   ------------------------------------------------------------- */

export const home_exercises: Exercise[] = [
  /* --------------------- PEITO --------------------- */
  {
    id: "casa-peito-1",
    name: "Flexão Tradicional",
    muscle: "peito",
    equipment: "Corpo livre",
    type: "Calistênico",
    level: "iniciante",
    tips: [
      "Mantenha o abdômen firme",
      "Desça até 90° de cotovelo",
      "Evite deixar o quadril cair"
    ],
    tags: ["empurrar", "calistenia"]
  },
  {
    id: "casa-peito-2",
    name: "Flexão Abertinha",
    muscle: "peito",
    equipment: "Corpo livre",
    type: "Calistênico",
    level: "intermediario",
    tips: [
      "Mãos mais afastadas que os ombros",
      "Controle total no movimento",
      "Contraia o peitoral superior"
    ],
    tags: ["empurrar", "peito-lateral"]
  },
  {
    id: "casa-peito-3",
    name: "Flexão Decline (Pés elevados)",
    muscle: "peito",
    equipment: "Banco ou cadeira",
    type: "Calistênico",
    level: "intermediario",
    tips: [
      "Foca mais no superior do peito",
      "Cuidado para não travar o pescoço",
      "Desça lento"
    ],
    tags: ["empurrar", "peito-superior"]
  },

  /* --------------------- COSTAS --------------------- */
  {
    id: "casa-costas-1",
    name: "Remada com Toalha na Porta",
    muscle: "costas",
    equipment: "Toalha / Porta",
    type: "Isometria + Tração",
    level: "intermediario",
    tips: [
      "Teste a segurança da porta",
      "Puxe com dorsais",
      "Mantenha o tronco reto"
    ],
    tags: ["puxar", "caseiro"]
  },
  {
    id: "casa-costas-2",
    name: "Superman",
    muscle: "costas",
    equipment: "Solo",
    type: "Isolador",
    level: "iniciante",
    tips: [
      "Levante peito e pernas simultaneamente",
      "Evite forçar o pescoço",
      "Segure por 2 segundos"
    ],
    tags: ["lombar", "core"]
  },
  {
    id: "casa-costas-3",
    name: "Prancha + Remada Alternada",
    muscle: "costas",
    equipment: "Corpo livre ou halter improvisado",
    type: "Estabilidade",
    level: "intermediario",
    tips: [
      "Evite balançar o quadril",
      "Apoie bem as mãos",
      "Controle total na remada"
    ],
    tags: ["core", "costas-superior"]
  },

  /* --------------------- OMBROS --------------------- */
  {
    id: "casa-ombro-1",
    name: "Elevação Lateral com Mochila",
    muscle: "ombros",
    equipment: "Mochila com peso",
    type: "Isolador",
    level: "iniciante",
    tips: [
      "Mantenha cotovelos levemente flexionados",
      "Não passe da linha dos ombros",
      "Suba devagar"
    ],
    tags: ["improvisado", "lateral"]
  },
  {
    id: "casa-ombro-2",
    name: "Desenvolvimento com Mochila",
    muscle: "ombros",
    equipment: "Mochila com peso",
    type: "Força",
    level: "intermediario",
    tips: [
      "Evite hiperextensão lombar",
      "Empurre acima da linha da cabeça",
      "Controle a descida"
    ],
    tags: ["ombros", "press"]
  },
  {
    id: "casa-ombro-3",
    name: "Elevação Frontal Alternada",
    muscle: "ombros",
    equipment: "Cargas improvisadas",
    type: "Isolador",
    level: "iniciante",
    tips: [
      "Leve inclinação do tronco",
      "Suba até a linha do ombro",
      "Evite balanço"
    ],
    tags: ["isolador", "anterior"]
  },

  /* --------------------- BÍCEPS --------------------- */
  {
    id: "casa-biceps-1",
    name: "Rosca com Mochila",
    muscle: "biceps",
    equipment: "Mochila",
    type: "Força",
    level: "iniciante",
    tips: [
      "Cotovelo fixo",
      "Evite girar o tronco",
      "Faça amplitude completa"
    ],
    tags: ["bilateral", "caseiro"]
  },
  {
    id: "casa-biceps-2",
    name: "Rosca Concentrada Improvisada",
    muscle: "biceps",
    equipment: "Carga improvisada",
    type: "Isolador",
    level: "intermediario",
    tips: [
      "Apoie o cotovelo na coxa",
      "Suba contraindo forte",
      "Desça lentamente"
    ],
    tags: ["isolador", "unilateral"]
  },

  /* --------------------- TRÍCEPS --------------------- */
  {
    id: "casa-triceps-1",
    name: "Mergulho entre Cadeiras",
    muscle: "triceps",
    equipment: "Cadeiras",
    type: "Força",
    level: "intermediario",
    tips: [
      "Evite descer muito fundo",
      "Cotovelo alinhado",
      "Pés no chão para facilitar"
    ],
    tags: ["empurrar", "caseiro"]
  },
  {
    id: "casa-triceps-2",
    name: "Tríceps Testa com Garrafa de Água",
    muscle: "triceps",
    equipment: "Garrafa / Halter improvisado",
    type: "Isolador",
    level: "iniciante",
    tips: [
      "Cotovelo fixo",
      "Eleve controlando",
      "Cabeça neutra"
    ],
    tags: ["isolador", "unilateral"]
  },

  /* --------------------- QUADRÍCEPS --------------------- */
  {
    id: "casa-quad-1",
    name: "Agachamento Livre",
    muscle: "quadriceps",
    equipment: "Corpo livre",
    type: "Força",
    level: "iniciante",
    tips: [
      "Joelhos alinhados aos pés",
      "Desça até 90°",
      "Ative glúteos no topo"
    ],
    tags: ["bilateral", "calistenia"]
  },
  {
    id: "casa-quad-2",
    name: "Avanço Alternado",
    muscle: "quadriceps",
    equipment: "Corpo livre",
    type: "Força",
    level: "intermediario",
    tips: [
      "Passo grande, perna de trás desce",
      "Coluna neutra",
      "Força no calcanhar"
    ],
    tags: ["unilateral", "lunge"]
  },
  {
    id: "casa-quad-3",
    name: "Cadeira Isométrica na Parede",
    muscle: "quadriceps",
    equipment: "Parede",
    type: "Isometria",
    level: "iniciante",
    tips: [
      "Ângulo de 90°",
      "Mantenha tronco ereto",
      "Respiração constante"
    ],
    tags: ["isometria", "resistência"]
  },

  /* --------------------- POSTERIOR --------------------- */
  {
    id: "casa-posterior-1",
    name: "Bom Dia com Cabo de Vassoura",
    muscle: "posterior",
    equipment: "Vassoura",
    type: "Força",
    level: "iniciante",
    tips: [
      "Quadril vai para trás",
      "Flexão mínima de joelho",
      "Espinha neutra"
    ],
    tags: ["cadeia-posterior", "caseiro"]
  },
  {
    id: "casa-posterior-2",
    name: "Elevação de Quadril",
    muscle: "posterior",
    equipment: "Solo",
    type: "Força",
    level: "iniciante",
    tips: [
      "Aperte glúteos no topo",
      "Pés na largura do quadril",
      "Suba até formar uma linha reta"
    ],
    tags: ["gluteos", "posterior"]
  },

  /* --------------------- GLÚTEOS --------------------- */
  {
    id: "casa-gluteo-1",
    name: "Glúteo 4 Apoios",
    muscle: "gluteos",
    equipment: "Solo",
    type: "Isolador",
    level: "iniciante",
    tips: [
      "Evite girar o quadril",
      "Suba devagar",
      "Mantenha core ativo"
    ],
    tags: ["quadril", "posterior"]
  },
  {
    id: "casa-gluteo-2",
    name: "Ponte de Glúteo Unilateral",
    muscle: "gluteos",
    equipment: "Solo",
    type: "Força",
    level: "intermediario",
    tips: [
      "Segure o pico por 1 segundo",
      "Pé alinhado ao joelho",
      "Evite subir demais a lombar"
    ],
    tags: ["unilateral", "gluteo-medio"]
  },

  /* --------------------- CORE --------------------- */
  {
    id: "casa-core-1",
    name: "Prancha",
    muscle: "core",
    equipment: "Solo",
    type: "Isometria",
    level: "iniciante",
    tips: [
      "Mantenha quadril na linha dos ombros",
      "Evite descer a lombar",
      "Respire"
    ],
    tags: ["isometria", "core"]
  },
  {
    id: "casa-core-2",
    name: "Abdominal Remador",
    muscle: "core",
    equipment: "Solo",
    type: "Calistênico",
    level: "intermediario",
    tips: [
      "Suba com controle",
      "Evite puxar o pescoço",
      "Contraia o abdômen"
    ],
    tags: ["flexão", "core"]
  }
];
/* -------------------------------------------------------------
   🚴 LISTA DE TREINOS — SPINNING (30 TREINOS)
   ------------------------------------------------------------- */

export const spinning_workouts: GeneratedWorkout[] = [
  /* ---------------------- INICIANTE ---------------------- */
  {
    id: "spin-init-1",
    name: "Spinning 1 — Adaptação ao Ritmo",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 25,
    blocks: [
      { label: "Aquecimento", duration: "5 min", details: "Cadência leve, resistência mínima." },
      { label: "Ritmo Leve", duration: "10 min", details: "Pedale entre 70–80 RPM." },
      { label: "Resfriamento", duration: "5 min", details: "Reduza a cadência progressivamente." }
    ]
  },
  {
    id: "spin-init-2",
    name: "Spinning 2 — Ritmo Constante",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "5 min", details: "Cadência leve." },
      { label: "Constante", duration: "15 min", details: "80 RPM com resistência baixa." },
      { label: "Resfriamento", duration: "3 min", details: "Cadência livre." }
    ]
  },
  {
    id: "spin-init-3",
    name: "Spinning 3 — Subidas Suaves",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Subidas Leves", duration: "3 x 4 min", details: "80 RPM + aumento leve de carga." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },
  {
    id: "spin-init-4",
    name: "Spinning 4 — Cadência Controlada",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 26,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Cadência", duration: "14 min", details: "Ritmo 70–85 RPM variando a cada 2 min." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },
  {
    id: "spin-init-5",
    name: "Spinning 5 — Sprint Leve",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 25,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Bloco", duration: "10 min", details: "10 sprints de 15s com 45s leves." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },
  {
    id: "spin-init-6",
    name: "Spinning 6 — Resistência Baixa",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Endurance Leve", duration: "18 min", details: "70–80 RPM com carga baixa." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },
  {
    id: "spin-init-7",
    name: "Spinning 7 — Progressão",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Progressão", duration: "3 x 5 min", details: "Cada bloco aumenta 10% da cadência." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },
  {
    id: "spin-init-8",
    name: "Spinning 8 — Mistura de Cadências",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Cadências", duration: "16 min", details: "70–75–80–85 RPM (4 min cada)." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },
  {
    id: "spin-init-9",
    name: "Spinning 9 — Subidas Suaves",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 29,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Subidas", duration: "18 min", details: "Pequena carga, ritmo constante." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "spin-init-10",
    name: "Spinning 10 — Endurance Inicial",
    level: "iniciante",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Endurance", duration: "20 min", details: "Pedale em 75–80 RPM." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  /* ---------------------- INTERMEDIÁRIO ---------------------- */
  {
    id: "spin-inter-1",
    name: "Spinning Intermediário 1 — Força de Escalada",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Escalada", duration: "20 min", details: "Aumentos contínuos de carga." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "spin-inter-2",
    name: "Spinning Intermediário 2 — Sprints Controlados",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Sprints", duration: "10 x 20s", details: "Intervalos de 40s moderados." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },
  {
    id: "spin-inter-3",
    name: "Spinning Intermediário 3 — Ondulações",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Ondulações", duration: "18 min", details: "Alternância 60–80–100 RPM." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },
  {
    id: "spin-inter-4",
    name: "Spinning Intermediário 4 — Resistência Forte",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Força", duration: "20 min", details: "Cargas moderadas e cadência controlada." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "spin-inter-5",
    name: "Spinning Intermediário 5 — Intervalos de Força",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Intervalos", duration: "20 min", details: "2 min forte / 2 min leve (5x)." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "spin-inter-6",
    name: "Spinning Intermediário 6 — Cadência Alta",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Cadência Alta", duration: "12 min", details: "90–110 RPM controlando impacto." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },
  {
    id: "spin-inter-7",
    name: "Spinning Intermediário 7 — Mixed Terrain",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 34,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Misto", duration: "22 min", details: "Sprints + Subidas + Cadências variadas." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "spin-inter-8",
    name: "Spinning Intermediário 8 — Pirâmide",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Pirâmide", duration: "20 min", details: "60–80–100–80–60 RPM." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },
  {
    id: "spin-inter-9",
    name: "Spinning Intermediário 9 — Sprint Mountain",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Montanha com Sprints", duration: "18 min", details: "Carga crescente + sprints curtos." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "spin-inter-10",
    name: "Spinning Intermediário 10 — Endurance Forte",
    level: "intermediario",
    mode: "spinning",
    estimatedTime: 36,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Endurance Forte", duration: "24 min", details: "75–85 RPM com carga moderada." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },

  /* ---------------------- AVANÇADO ---------------------- */
  {
    id: "spin-adv-1",
    name: "Spinning Avançado 1 — Montanha Pesada",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 38,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Montanha Pesada", duration: "25 min", details: "Aumentos agressivos de carga." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },
  {
    id: "spin-adv-2",
    name: "Spinning Avançado 2 — Sprint Power",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Power Sprints", duration: "12 x 20s", details: "Explosão total, 40s leves." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "spin-adv-3",
    name: "Spinning Avançado 3 — HIIT Extremo",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "HIIT", duration: "20 min", details: "30s forte / 30s leve." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "spin-adv-4",
    name: "Spinning Avançado 4 — Força Bruta",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 34,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Força Máxima", duration: "22 min", details: "Cargas altas + cadência baixa." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "spin-adv-5",
    name: "Spinning Avançado 5 — Cadência Insana",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Alta Cadência", duration: "16 min", details: "100–120 RPM." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "spin-adv-6",
    name: "Spinning Avançado 6 — Mistura Avançada",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 38,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Misto Avançado", duration: "26 min", details: "Subidas + sprints + cadência." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "spin-adv-7",
    name: "Spinning Avançado 7 — Pico Cardíaco",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Picos", duration: "20 min", details: "2 min base / 1 min explosão (6x)." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },
  {
    id: "spin-adv-8",
    name: "Spinning Avançado 8 — Intervalos Pesados",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Intervalos Pesados", duration: "20 min", details: "Carga alta com cadência média." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "spin-adv-9",
    name: "Spinning Avançado 9 — Competição",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 36,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Corrida Competitiva", duration: "24 min", details: "Ritmo forte contínuo." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "spin-adv-10",
    name: "Spinning Avançado 10 — Elite Performance",
    level: "avancado",
    mode: "spinning",
    estimatedTime: 40,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Elite", duration: "30 min", details: "Mistura completa de estímulos, alta carga." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  }
];
/* -------------------------------------------------------------
   🏃 LISTA DE TREINOS — CORRIDA (30 TREINOS)
   ------------------------------------------------------------- */

export const corrida_workouts: GeneratedWorkout[] = [
  /* ---------------------- INICIANTE ---------------------- */

  {
    id: "run-init-1",
    name: "Corrida 1 — Caminha/Corre Leve",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 25,
    blocks: [
      { label: "Aquecimento", duration: "5 min", details: "Caminhada leve + mobilidade de quadril." },
      { label: "Principal", duration: "12 min", details: "1 min corrida leve / 2 min caminhada × 4." },
      { label: "Técnica", duration: "3 min", details: "Skippings leves + respiração nasal." },
      { label: "Resfriamento", duration: "5 min", details: "Caminhada livre." }
    ]
  },

  {
    id: "run-init-2",
    name: "Corrida 2 — Adaptação ao Ritmo",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Principal", duration: "18 min", details: "2 min corrida / 1 min caminhada × 6." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  {
    id: "run-init-3",
    name: "Corrida 3 — Primeira Corrida Contínua",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 25,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Principal", duration: "10 min", details: "Corrida leve contínua." },
      { label: "Técnica", duration: "3 min", details: "Postura: tronco alto, passada curta." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  {
    id: "run-init-4",
    name: "Corrida 4 — Ritmo Confortável",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Principal", duration: "20 min", details: "Corrida leve constante, pace confortável." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  {
    id: "run-init-5",
    name: "Corrida 5 — Intermitente Leve",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 26,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Principal", duration: "15 min", details: "1 min leve / 1 min ritmo × 7." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },

  {
    id: "run-init-6",
    name: "Corrida 6 — Ritmo Progressivo Leve",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Principal", duration: "18 min", details: "Progrida a cada 6 min (leve → moderado)." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  {
    id: "run-init-7",
    name: "Corrida 7 — Base Cardio",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Principal", duration: "20 min", details: "Corrida leve contínua (Z2)." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },

  {
    id: "run-init-8",
    name: "Corrida 8 — Subidas Leves",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Principal", duration: "4 × 2 min subida leve, 3 min plano." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },

  {
    id: "run-init-9",
    name: "Corrida 9 — Intervalado Simples",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 24,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "Principal", duration: "12 min", details: "30s ritmo / 1 min leve × 8." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  {
    id: "run-init-10",
    name: "Corrida 10 — Primeira Corrida de 20 min",
    level: "iniciante",
    mode: "corrida",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Corrida Contínua", duration: "20 min", details: "Pace confortável." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  /* ---------------------- INTERMEDIÁRIO ---------------------- */

  {
    id: "run-inter-1",
    name: "Corrida Intermediária 1 — Tempo Run Leve",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Tempo Run", duration: "20 min", details: "Pace moderado (Z3)." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },

  {
    id: "run-inter-2",
    name: "Corrida Intermediária 2 — Intervalado Médio",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Principal", duration: "18 min", details: "1 min forte / 1 min leve × 9." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },

  {
    id: "run-inter-3",
    name: "Corrida Intermediária 3 — Subidas Moderadas",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 34,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Subidas", duration: "20 min", details: "2 min subida / 3 min plano × 4." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  {
    id: "run-inter-4",
    name: "Corrida Intermediária 4 — Fartlek Leve",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Fartlek", duration: "18 min", details: "Ritmo variado livre." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },

  {
    id: "run-inter-5",
    name: "Corrida Intermediária 5 — Tempo Progressivo",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 33,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Progressivo", duration: "20 min", details: "Comece leve, termine forte." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },

  {
    id: "run-inter-6",
    name: "Corrida Intermediária 6 — Intervalos 400m",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Principal", duration: "6 × 400m", details: "Pace moderado/forte." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },

  {
    id: "run-inter-7",
    name: "Corrida Intermediária 7 — Endurance Moderado",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 38,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Endurance", duration: "24 min", details: "Ritmo confortável (Z2/Z3)." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },

  {
    id: "run-inter-8",
    name: "Corrida Intermediária 8 — Pace Controlado",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "7 min" },
      { label: "Principal", duration: "20 min", details: "Mantenha pace constante." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  {
    id: "run-inter-9",
    name: "Corrida Intermediária 9 — Subidas Pesadas",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 36,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Subidas", duration: "22 min", details: "3 min subida / 3 min plano × 3." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },

  {
    id: "run-inter-10",
    name: "Corrida Intermediária 10 — 5–7km Fácil",
    level: "intermediario",
    mode: "corrida",
    estimatedTime: 40,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Corrida", duration: "28 min", details: "Ritmo fácil, foco na técnica." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },

  /* ---------------------- AVANÇADO ---------------------- */

  {
    id: "run-adv-1",
    name: "Corrida Avançada 1 — Tempo Forte",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 40,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Tempo Run Forte", duration: "24 min", details: "Pace forte (Z4)." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  {
    id: "run-adv-2",
    name: "Corrida Avançada 2 — Intervalos 800m",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 42,
    blocks: [
      { label: "Aquecimento", duration: "10 min" },
      { label: "Principal", duration: "5 × 800m", details: "Pace forte com descanso de 2 min." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  {
    id: "run-adv-3",
    name: "Corrida Avançada 3 — Subida Intensa",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 40,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Subidas", duration: "6 × 3 min", details: "Subida forte + 2 min plano." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  {
    id: "run-adv-4",
    name: "Corrida Avançada 4 — Fartlek Forte",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 38,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Fartlek", duration: "22 min", details: "Ritmos fortes alternados." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  {
    id: "run-adv-5",
    name: "Corrida Avançada 5 — Longão Curto (7–10km)",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 55,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Longão", duration: "40 min", details: "Z2/Z3, foco na economia de corrida." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },

  {
    id: "run-adv-6",
    name: "Corrida Avançada 6 — Pace Competitivo",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 42,
    blocks: [
      { label: "Aquecimento", duration: "10 min" },
      { label: "Competitivo", duration: "26 min", details: "Pace de prova 5K." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },

  {
    id: "run-adv-7",
    name: "Corrida Avançada 7 — HIIT Avançado",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 36,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "HIIT", duration: "20 min", details: "30s sprint / 30s trote." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  {
    id: "run-adv-8",
    name: "Corrida Avançada 8 — Variedade de Terreno",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 45,
    blocks: [
      { label: "Aquecimento", duration: "10 min" },
      { label: "Misto", duration: "30 min", details: "Plano + subida + intervalos." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },

  {
    id: "run-adv-9",
    name: "Corrida Avançada 9 — Sustentação Forte",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 42,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "Sustentação", duration: "26 min", details: "Ritmo próximo ao limiar." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  {
    id: "run-adv-10",
    name: "Corrida Avançada 10 — Protocolo de Prova",
    level: "avancado",
    mode: "corrida",
    estimatedTime: 50,
    blocks: [
      { label: "Aquecimento", duration: "10 min" },
      { label: "Prova Simulada", duration: "35 min", details: "Ritmo competitivo contínuo." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  }
];
/* -------------------------------------------------------------
   🏠 LISTA DE TREINOS — HOME TRAINING (50 TREINOS)
   ------------------------------------------------------------- */

export const home_training_workouts: GeneratedWorkout[] = [

/* --------------------------- INICIANTE (15) --------------------------- */

{
  id: "home-init-1",
  name: "Iniciante 1 — Corpo Todo Leve",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 25,
  blocks: [
    { label: "Aquecimento", duration: "4 min", details: "Marcha no lugar + mobilidade geral." },
    { label: "Força", duration: "12 min", details: "3× (agachamento 12 / flexão parede 10 / remada toalha 12)." },
    { label: "Core", duration: "4 min", details: "Prancha 20s / Descanso 20s × 3." },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

{
  id: "home-init-2",
  name: "Iniciante 2 — Pernas e Glúteos",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 28,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Força", duration: "15 min", details: "3× (agachamento 15 / avanço alternado 10 / ponte 15)." },
    { label: "Resfriamento", duration: "8 min" }
  ]
},

{
  id: "home-init-3",
  name: "Iniciante 3 — Braços e Ombros",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 22,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "Força", duration: "10 min", details: "3× (flexão joelhos 8 / tríceps cadeira 10 / elevação lateral 12)." },
    { label: "Core", duration: "4 min", details: "Abdominal crunch 15 / descanso 20s × 3." },
    { label: "Resfriamento", duration: "4 min" }
  ]
},

{
  id: "home-init-4",
  name: "Iniciante 4 — Posterior e Glúteo",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 26,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "Força", duration: "14 min", details: "3× (stiff 15 / elevação quadril 15 / coice 12)." },
    { label: "Resfriamento", duration: "8 min" }
  ]
},

{
  id: "home-init-5",
  name: "Iniciante 5 — Cardio Leve",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 20,
  blocks: [
    { label: "Aquecimento", duration: "3 min" },
    { label: "Cardio", duration: "12 min", details: "30s polichinelo baixo impacto / 30s descanso × 12." },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

{
  id: "home-init-6",
  name: "Iniciante 6 — Core Básico",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 22,
  blocks: [
    { label: "Aquecimento", duration: "3 min" },
    { label: "Core", duration: "12 min", details: "Circuito 3× (prancha 20s / prancha lateral 15s / abdominal 15)." },
    { label: "Resfriamento", duration: "7 min" }
  ]
},

{
  id: "home-init-7",
  name: "Iniciante 7 — Mobilidade + Força Leve",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 24,
  blocks: [
    { label: "Mobilidade", duration: "6 min" },
    { label: "Força", duration: "10 min", details: "3× (agachamento 10 / remada toalha 10)." },
    { label: "Resfriamento", duration: "8 min" }
  ]
},

{
  id: "home-init-8",
  name: "Iniciante 8 — Circuito Completo",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 26,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Circuito", duration: "15 min", details: "4× (agachamento 10 / flexão parede 10 / prancha 20s)." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-init-9",
  name: "Iniciante 9 — Glúteo e Abdômen",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 24,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "Força", duration: "12 min", details: "3× (elevação quadril 15 / abdução solo 12)." },
    { label: "Core", duration: "4 min" },
    { label: "Resfriamento", duration: "4 min" }
  ]
},

{
  id: "home-init-10",
  name: "Iniciante 10 — Resistência Leve",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 28,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Circuito", duration: "18 min", details: "30s ON / 30s OFF × 18." },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

{
  id: "home-init-11",
  name: "Iniciante 11 — Posterior Simples",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 22,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "Força", duration: "12 min", details: "3× (stiff 12 / ponte unilateral 10)." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-init-12",
  name: "Iniciante 12 — Strength Leve",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 25,
  blocks: [
    { label: "Aquecimento", duration: "3 min" },
    { label: "Força", duration: "15 min", details: "3× (agachamento 15 / desenvolvimento 12 / tríceps cadeira 12)." },
    { label: "Resfriamento", duration: "7 min" }
  ]
},

{
  id: "home-init-13",
  name: "Iniciante 13 — Glúteo Avançado Leve",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 26,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "Força", duration: "16 min", details: "3× (elevação quadril 20 / coice 15 / abdução 15)." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-init-14",
  name: "Iniciante 14 — Cardio + Core",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 22,
  blocks: [
    { label: "Cardio", duration: "10 min", details: "Marcha + polichinelo baixo impacto." },
    { label: "Core", duration: "8 min", details: "Prancha 20s / abdominal 15 / perna alternada 12." },
    { label: "Resfriamento", duration: "4 min" }
  ]
},

{
  id: "home-init-15",
  name: "Iniciante 15 — Total Body Easy",
  level: "iniciante",
  mode: "casa",
  estimatedTime: 25,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Força", duration: "15 min", details: "Agachamento 12 / flexão joelhos 10 / remada toalha 12 × 3." },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

/* ---------------------- INTERMEDIÁRIO (15) ---------------------- */

{
  id: "home-inter-1",
  name: "Intermediário 1 — Corpo Todo",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 30,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Força", duration: "18 min", details: "4× (agachamento 15 / flexão 12 / remada unilateral 15)." },
    { label: "Resfriamento", duration: "7 min" }
  ]
},

{
  id: "home-inter-2",
  name: "Intermediário 2 — Brutal Glutes",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 32,
  blocks: [
    { label: "Aquecimento", duration: "6 min" },
    { label: "Força", duration: "20 min", details: "4× (hip thrust 20 / abdução 20 / avanço 12)." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-inter-3",
  name: "Intermediário 3 — Braços Fortes",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 25,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Força", duration: "15 min", details: "3× (flexão 12 / tríceps cadeira 15 / elevação lateral 12)." },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

{
  id: "home-inter-4",
  name: "Intermediário 4 — Posterior Completo",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 28,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Força", duration: "18 min", details: "4× (stiff 15 / ponte unilateral 12 / glúteo 4 apoios 15)." },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

{
  id: "home-inter-5",
  name: "Intermediário 5 — Full Body HIT",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 28,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Metabólico", duration: "15 min", details: "30s ON / 15s OFF × 20." },
    { label: "Resfriamento", duration: "8 min" }
  ]
},

{
  id: "home-inter-6",
  name: "Intermediário 6 — Força + Core",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 30,
  blocks: [
    { label: "Força", duration: "15 min", details: "4× (agachamento 15 / flexão 12)." },
    { label: "Core", duration: "10 min", details: "Prancha 30s / abdominal 20 × 3." },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

{
  id: "home-inter-7",
  name: "Intermediário 7 — Core Avançado",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 26,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "Core", duration: "16 min", details: "4× circuito (prancha 30s / hollow hold 15s / bicicleta 20)." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-inter-8",
  name: "Intermediário 8 — Cardio Forte",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 30,
  blocks: [
    { label: "Cardio", duration: "20 min", details: "40s ON / 20s OFF × 20." },
    { label: "Resfriamento", duration: "10 min" }
  ]
},

{
  id: "home-inter-9",
  name: "Intermediário 9 — Glúteo 3D",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 32,
  blocks: [
    { label: "Aquecimento", duration: "6 min" },
    { label: "Força", duration: "20 min", details: "hip thrust 20 / coice 15 / abdução 20 × 4." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-inter-10",
  name: "Intermediário 10 — Superior Intenso",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 28,
  blocks: [
    { label: "Força", duration: "18 min", details: "3× (flexão 15 / tríceps cadeira 18 / remada unilateral 15)." },
    { label: "Core", duration: "5 min" },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

{
  id: "home-inter-11",
  name: "Intermediário 11 — Lower Body Power",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 32,
  blocks: [
    { label: "Força", duration: "20 min", details: "4× (agachamento 20 / avanço 15 / stiff 15)." },
    { label: "Core", duration: "6 min" }
  ]
},

{
  id: "home-inter-12",
  name: "Intermediário 12 — Condicionamento",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 27,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "Metabólico", duration: "15 min", details: "20s ON / 20s OFF × 20." },
    { label: "Resfriamento", duration: "8 min" }
  ]
},

{
  id: "home-inter-13",
  name: "Intermediário 13 — Full Body Pump",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 30,
  blocks: [
    { label: "Aquecimento", duration: "5 min" },
    { label: "Força", duration: "18 min", details: "3× (agachamento 20 / flexão 12 / remada 15)." },
    { label: "Resfriamento", duration: "7 min" }
  ]
},

{
  id: "home-inter-14",
  name: "Intermediário 14 — Core & Glúteo",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 28,
  blocks: [
    { label: "Core", duration: "12 min" },
    { label: "Glúteo", duration: "12 min" },
    { label: "Resfriamento", duration: "4 min" }
  ]
},

{
  id: "home-inter-15",
  name: "Intermediário 15 — Total Body Performance",
  level: "intermediario",
  mode: "casa",
  estimatedTime: 32,
  blocks: [
    { label: "Aquecimento", duration: "6 min" },
    { label: "Força", duration: "20 min" },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

/* --------------------------- AVANÇADO (15) --------------------------- */

{
  id: "home-adv-1",
  name: "Avançado 1 — HIIT Insano",
  level: "avancado",
  mode: "casa",
  estimatedTime: 30,
  blocks: [
    { label: "Aquecimento", duration: "6 min" },
    { label: "HIIT", duration: "20 min", details: "20s sprint / 10s descanso × 30." },
    { label: "Resfriamento", duration: "4 min" }
  ]
},

{
  id: "home-adv-2",
  name: "Avançado 2 — Força Total",
  level: "avancado",
  mode: "casa",
  estimatedTime: 35,
  blocks: [
    { label: "Força", duration: "25 min", details: "4× (agachamento 20 / flexão 20 / remada 20)." },
    { label: "Resfriamento", duration: "10 min" }
  ]
},

{
  id: "home-adv-3",
  name: "Avançado 3 — Glúteo Massivo",
  level: "avancado",
  mode: "casa",
  estimatedTime: 36,
  blocks: [
    { label: "Aquecimento", duration: "6 min" },
    { label: "Glúteo", duration: "24 min", details: "hip thrust 25 / coice 20 / abdução 25 × 4." }
  ]
},

{
  id: "home-adv-4",
  name: "Avançado 4 — Cardio Pesado",
  level: "avancado",
  mode: "casa",
  estimatedTime: 34,
  blocks: [
    { label: "Aquecimento", duration: "6 min" },
    { label: "Metabólico", duration: "20 min", details: "40s ON / 20s OFF × 20." },
    { label: "Resfriamento", duration: "8 min" }
  ]
},

{
  id: "home-adv-5",
  name: "Avançado 5 — Core de Atleta",
  level: "avancado",
  mode: "casa",
  estimatedTime: 30,
  blocks: [
    { label: "Core", duration: "20 min", details: "4× circuito avançado (prancha 45s / hollow hold 25s / canivete 15)." },
    { label: "Resfriamento", duration: "10 min" }
  ]
},

{
  id: "home-adv-6",
  name: "Avançado 6 — Full Body Extremo",
  level: "avancado",
  mode: "casa",
  estimatedTime: 36,
  blocks: [
    { label: "Força", duration: "24 min", details: "4× (agachamento 20 / burpee 15 / flexão 20 / remada 20)." },
    { label: "Resfriamento", duration: "12 min" }
  ]
},

{
  id: "home-adv-7",
  name: "Avançado 7 — Superior Explosivo",
  level: "avancado",
  mode: "casa",
  estimatedTime: 30,
  blocks: [
    { label: "Força", duration: "20 min", details: "flexão 20 / tríceps cadeira 20 / remada 20 × 4." },
    { label: "Resfriamento", duration: "10 min" }
  ]
},

{
  id: "home-adv-8",
  name: "Avançado 8 — Pernas Poderosas",
  level: "avancado",
  mode: "casa",
  estimatedTime: 35,
  blocks: [
    { label: "Força", duration: "23 min", details: "4× (agachamento 25 / avanço 20 / stiff 20)." },
    { label: "Resfriamento", duration: "12 min" }
  ]
},

{
  id: "home-adv-9",
  name: "Avançado 9 — Endurance Indoor",
  level: "avancado",
  mode: "casa",
  estimatedTime: 40,
  blocks: [
    { label: "Aquecimento", duration: "8 min" },
    { label: "Endurance", duration: "26 min", details: "circuito sem descanso prolongado." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-adv-10",
  name: "Avançado 10 — HIIT Elite",
  level: "avancado",
  mode: "casa",
  estimatedTime: 32,
  blocks: [
    { label: "HIIT", duration: "22 min", details: "30s ON / 15s OFF × 30." },
    { label: "Resfriamento", duration: "10 min" }
  ]
},

{
  id: "home-adv-11",
  name: "Avançado 11 — Blaster Glúteo",
  level: "avancado",
  mode: "casa",
  estimatedTime: 34,
  blocks: [
    { label: "Glúteo", duration: "24 min" }
  ]
},

{
  id: "home-adv-12",
  name: "Avançado 12 — Cardio + Core Elite",
  level: "avancado",
  mode: "casa",
  estimatedTime: 38,
  blocks: [
    { label: "Cardio", duration: "18 min" },
    { label: "Core", duration: "14 min" }
  ]
},

{
  id: "home-adv-13",
  name: "Avançado 13 — Total Body Destroyer",
  level: "avancado",
  mode: "casa",
  estimatedTime: 40,
  blocks: [
    { label: "Força", duration: "25 min" },
    { label: "HIIT", duration: "10 min" },
    { label: "Resfriamento", duration: "5 min" }
  ]
},

{
  id: "home-adv-14",
  name: "Avançado 14 — Potência Glúteo",
  level: "avancado",
  mode: "casa",
  estimatedTime: 33,
  blocks: [
    { label: "Glúteo", duration: "23 min" },
    { label: "Core", duration: "6 min" }
  ]
},

{
  id: "home-adv-15",
  name: "Avançado 15 — Elite Performance",
  level: "avancado",
  mode: "casa",
  estimatedTime: 42,
  blocks: [
    { label: "Força", duration: "24 min" },
    { label: "Cardio", duration: "12 min" },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

/* --------------------------- HIIT / MULTINÍVEL (5) --------------------------- */

{
  id: "home-hiit-1",
  name: "HIIT 1 — 20 ON / 20 OFF",
  level: "all",
  mode: "casa",
  estimatedTime: 22,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "HIIT", duration: "14 min", details: "20 ON / 20 OFF × 21." },
    { label: "Resfriamento", duration: "4 min" }
  ]
},

{
  id: "home-hiit-2",
  name: "HIIT 2 — Tabata",
  level: "all",
  mode: "casa",
  estimatedTime: 18,
  blocks: [
    { label: "Aquecimento", duration: "4 min" },
    { label: "Tabata", duration: "8 min", details: "20s ON / 10s OFF × 16." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-hiit-3",
  name: "HIIT 3 — Corpo Todo",
  level: "all",
  mode: "casa",
  estimatedTime: 25,
  blocks: [
    { label: "Força + Cardio", duration: "15 min", details: "Agachamento / flexão / burpee / prancha." },
    { label: "Resfriamento", duration: "10 min" }
  ]
},

{
  id: "home-hiit-4",
  name: "HIIT 4 — Explosão",
  level: "all",
  mode: "casa",
  estimatedTime: 20,
  blocks: [
    { label: "HIIT", duration: "14 min", details: "salto, corrida parada, burpee, prancha." },
    { label: "Resfriamento", duration: "6 min" }
  ]
},

{
  id: "home-hiit-5",
  name: "HIIT 5 — Cardio Rápido",
  level: "all",
  mode: "casa",
  estimatedTime: 18,
  blocks: [
    { label: "Cardio", duration: "10 min" },
    { label: "Core", duration: "6 min" },
    { label: "Resfriamento", duration: "2 min" }
  ]
}

];
/* -------------------------------------------------------------
   🧨 LISTA DE TREINOS — CROSS TRAINING / CROSSFIT (30 TREINOS)
   ------------------------------------------------------------- */

export const cross_training_workouts: GeneratedWorkout[] = [
  /* ---------------------- INICIANTE ---------------------- */
  {
    id: "cross-init-1",
    name: "Cross Iniciante 1 — Corpo Todo Básico",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 25,
    blocks: [
      { label: "Aquecimento", duration: "5 min", details: "Polichinelo leve, mobilidade de ombros e quadril." },
      { label: "Força Técnica", duration: "10 min", details: "3× (agachamento 10 / flexão joelhos 8 / remada com elástico 10)." },
      { label: "Metabólico Leve", duration: "5 min", details: "3 rondas — 20s polichinelo / 40s descanso." },
      { label: "Resfriamento", duration: "5 min" }
    ]
  },
  {
    id: "cross-init-2",
    name: "Cross Iniciante 2 — WOD Simplificado",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 22,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "WOD (10 min AMRAP)", duration: "10 min", details: "5 agachamentos / 5 flexões na parede / 10 polichinelos." },
      { label: "Core", duration: "4 min", details: "Abdominal crunch 15 / prancha 20s × 2." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },
  {
    id: "cross-init-3",
    name: "Cross Iniciante 3 — Técnica + Cardio",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 24,
    blocks: [
      { label: "Técnica", duration: "8 min", details: "Agachamento, flexão joelhos e remada com foco em postura." },
      { label: "Cardio Leve", duration: "10 min", details: "30s corrida no lugar / 30s caminhada no lugar." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-init-4",
    name: "Cross Iniciante 4 — EMOM Básico",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 20,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "EMOM 10’", duration: "10 min", details: "Minuto ímpar: 8 agachamentos • Minuto par: 6 flexões joelhos." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-init-5",
    name: "Cross Iniciante 5 — WOD Mobilidade",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 25,
    blocks: [
      { label: "Mobilidade", duration: "8 min", details: "Círculos de ombro, gato-vaca, alongamento de posterior." },
      { label: "WOD 3 Rounds", duration: "10 min", details: "10 agachamentos / 10 abdominais / 20 passos marcha rápida." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "cross-init-6",
    name: "Cross Iniciante 6 — Força de Base",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 26,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Força", duration: "15 min", details: "3× (agachamento 12 / flexão joelhos 10 / remada 12)." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-init-7",
    name: "Cross Iniciante 7 — Cardio & Core",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 24,
    blocks: [
      { label: "Cardio Leve", duration: "10 min", details: "1 min corrida no lugar / 1 min caminhada." },
      { label: "Core", duration: "8 min", details: "3× (abdominal 15 / prancha 20s)." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-init-8",
    name: "Cross Iniciante 8 — AMRAP Leve",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 22,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "AMRAP 12’", duration: "12 min", details: "5 flexões parede / 8 agachamentos / 10 polichinelos." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-init-9",
    name: "Cross Iniciante 9 — Introdução ao Burpee",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 23,
    blocks: [
      { label: "Técnica Burpee", duration: "6 min", details: "Versão quebrada: agachar, apoiar mãos, recuar pés, voltar." },
      { label: "Metabólico", duration: "10 min", details: "6 burpees simples / 10 agachamentos por minuto × 5." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "cross-init-10",
    name: "Cross Iniciante 10 — Corpo Todo Controle",
    level: "iniciante",
    mode: "crossfit",
    estimatedTime: 25,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Circuito", duration: "12 min", details: "3× (agachamento 10 / flexão joelhos 8 / prancha 20s / remada 10)." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  /* ---------------------- INTERMEDIÁRIO ---------------------- */
  {
    id: "cross-inter-1",
    name: "Cross Intermediário 1 — EMOM Força",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "EMOM 16’", duration: "16 min", details: "Min ímpar: 10 agachamentos • Min par: 8 flexões completas." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-inter-2",
    name: "Cross Intermediário 2 — WOD 15’ AMRAP",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 27,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "AMRAP 15’", duration: "15 min", details: "8 flexões / 10 agachamentos / 12 abdominais." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "cross-inter-3",
    name: "Cross Intermediário 3 — Força Inferior",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Força Pernas", duration: "18 min", details: "4× (agachamento 15 / avanço 12 / salto no lugar 10)." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-inter-4",
    name: "Cross Intermediário 4 — Força Superior",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Força Superiores", duration: "16 min", details: "4× (flexão 12 / tríceps banco 12 / remada 15)." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "cross-inter-5",
    name: "Cross Intermediário 5 — WOD Metabólico",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 26,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "Metcon 12’", duration: "12 min", details: "20 polichinelos / 10 burpees leves / 10 abdominais." },
      { label: "Resfriamento", duration: "9 min" }
    ]
  },
  {
    id: "cross-inter-6",
    name: "Cross Intermediário 6 — E2MOM",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 24,
    blocks: [
      { label: "Aquecimento", duration: "4 min" },
      { label: "E2MOM 14’", duration: "14 min", details: "A cada 2 min: 12 agachamentos / 10 flexões / 8 abdominais." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-inter-7",
    name: "Cross Intermediário 7 — Força + Core",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Força", duration: "16 min", details: "3× (agachamento 15 / flexão 12 / remada 15)." },
      { label: "Core", duration: "6 min", details: "Prancha 30s / hollow 20s × 3." },
      { label: "Resfriamento", duration: "2 min" }
    ]
  },
  {
    id: "cross-inter-8",
    name: "Cross Intermediário 8 — WOD 21-15-9",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 24,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "WOD", duration: "12 min", details: "21-15-9 de: agachamento / flexão / abdominais." },
      { label: "Resfriamento", duration: "7 min" }
    ]
  },
  {
    id: "cross-inter-9",
    name: "Cross Intermediário 9 — Cardio Forte",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 28,
    blocks: [
      { label: "Cardio HIIT", duration: "18 min", details: "30s corrida forte / 30s corrida leve × 18." },
      { label: "Resfriamento", duration: "10 min" }
    ]
  },
  {
    id: "cross-inter-10",
    name: "Cross Intermediário 10 — Corpo Todo Performance",
    level: "intermediario",
    mode: "crossfit",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "WOD 18’", duration: "18 min", details: "8 flexões / 12 agachamentos / 10 burpees / 12 abdominais." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },

  /* ---------------------- AVANÇADO ---------------------- */
  {
    id: "cross-adv-1",
    name: "Cross Avançado 1 — Fran Adaptado",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 26,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "WOD Fran Adaptado", duration: "12 min", details: "21-15-9 de: flexão / agachamento com salto." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },
  {
    id: "cross-adv-2",
    name: "Cross Avançado 2 — EMOM Pesado",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 30,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "EMOM 18’", duration: "18 min", details: "Min ímpar: 15 agachamentos • Min par: 12 burpees." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-adv-3",
    name: "Cross Avançado 3 — Força Brutal",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Força", duration: "20 min", details: "4× (agachamento 20 / flexão 20 / remada 20)." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-adv-4",
    name: "Cross Avançado 4 — WOD 20’ AMRAP",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 34,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "AMRAP 20’", duration: "20 min", details: "10 burpees / 15 agachamentos / 20 abdominais." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  },
  {
    id: "cross-adv-5",
    name: "Cross Avançado 5 — Metcon Insano",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 30,
    blocks: [
      { label: "Metcon 18’", duration: "18 min", details: "30s burpee / 30s corrida no lugar × 18." },
      { label: "Resfriamento", duration: "12 min" }
    ]
  },
  {
    id: "cross-adv-6",
    name: "Cross Avançado 6 — Força + Core Elite",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 34,
    blocks: [
      { label: "Força", duration: "20 min", details: "4× (flexão 20 / agachamento 20 / remada 20)." },
      { label: "Core", duration: "10 min", details: "Prancha 40s / hollow 25s / canivete 15." },
      { label: "Resfriamento", duration: "4 min" }
    ]
  },
  {
    id: "cross-adv-7",
    name: "Cross Avançado 7 — WOD For Time",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 28,
    blocks: [
      { label: "Aquecimento", duration: "5 min" },
      { label: "For Time", duration: "15–18 min", details: "50 agachamentos / 40 flexões / 30 burpees / 20 abdominais." },
      { label: "Resfriamento", duration: "5–7 min" }
    ]
  },
  {
    id: "cross-adv-8",
    name: "Cross Avançado 8 — Cardio Brutal",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 32,
    blocks: [
      { label: "Aquecimento", duration: "6 min" },
      { label: "Metabólico", duration: "20 min", details: "40s corrida intensa / 20s burpee × 20." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-adv-9",
    name: "Cross Avançado 9 — Hero Adaptado",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 38,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "WOD Hero", duration: "24 min", details: "AMRAP: 10 burpees / 15 flexões / 20 agachamentos / 25 abdominais." },
      { label: "Resfriamento", duration: "6 min" }
    ]
  },
  {
    id: "cross-adv-10",
    name: "Cross Avançado 10 — Elite Performance",
    level: "avancado",
    mode: "crossfit",
    estimatedTime: 40,
    blocks: [
      { label: "Aquecimento", duration: "8 min" },
      { label: "WOD 24’", duration: "24 min", details: "Ciclo completo com alta intensidade (burpee, salto, corrida parada, flexão)." },
      { label: "Resfriamento", duration: "8 min" }
    ]
  }
];
