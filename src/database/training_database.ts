export type TrainingExercise = {
  id: string;
  nome: string;
  duracao: string;
  series: string;
  descanso: string;
  dica: string;
};

export type TrainingCategory = {
  nome: string;
  exercicios: TrainingExercise[];
};

export type TrainingGroup = {
  label: string;
  categorias: TrainingCategory[];
};

export type TrainingDatabase = {
  [key: string]: TrainingGroup;
};

export const trainingDatabase: TrainingDatabase = {
  peito: {
    label: "Peito",
    categorias: [
      // ===================== COMPOSTOS BARRA / HALTERES =====================
      {
        nome: "Compostos com barra e halteres",
        exercicios: [
          {
            id: "peito_supino_reto_barra",
            nome: "Supino reto com barra",
            duracao: "50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Mantenha escápulas firmes no banco e controle total da descida para maximizar a ativação do peitoral.",
          },
          {
            id: "peito_supino_reto_halteres",
            nome: "Supino reto com halteres",
            duracao: "50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Use amplitude completa, unindo levemente os halteres no topo sem perder a estabilidade dos ombros.",
          },
          {
            id: "peito_supino_inclinado_barra",
            nome: "Supino inclinado com barra",
            duracao: "50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Mantenha o peito aberto e o olhar levemente para cima, evitando arqueamento excessivo da lombar.",
          },
          {
            id: "peito_supino_inclinado_halteres",
            nome: "Supino inclinado com halteres",
            duracao: "50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Controle a descida e mantenha o alinhamento dos punhos com o antebraço durante todo o movimento.",
          },
          {
            id: "peito_supino_declinado_barra",
            nome: "Supino declinado com barra",
            duracao: "50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Mantenha os pés bem firmes e foque em empurrar a barra de forma estável, sem perder o controle da trajetória.",
          },
          {
            id: "peito_supino_declinado_halteres",
            nome: "Supino declinado com halteres",
            duracao: "50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Evite descer demais os halteres; busque uma amplitude segura respeitando o conforto dos ombros.",
          },
          {
            id: "peito_supino_pegada_fechada",
            nome: "Supino com pegada fechada",
            duracao: "45–50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Mantenha os cotovelos próximos ao corpo e foque em empurrar com peito e tríceps de forma controlada.",
          },
          {
            id: "peito_paralelas_enfase_peito",
            nome: "Paralelas com ênfase em peito",
            duracao: "40–50s",
            series: "3–4 séries",
            descanso: "60–120s",
            dica: "Incline levemente o tronco à frente e desça de forma controlada para aumentar a ativação do peitoral.",
          },
        ],
      },

      // ========================= MÁQUINAS =========================
      {
        nome: "Máquinas",
        exercicios: [
          {
            id: "peito_supino_maquina_horizontal",
            nome: "Supino máquina horizontal",
            duracao: "45–50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Ajuste o banco para manter as mãos na linha média do peito e empurre sem perder a estabilidade dos ombros.",
          },
          {
            id: "peito_supino_maquina_inclinado",
            nome: "Supino máquina inclinado",
            duracao: "45–50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Foque na região superior do peito, evitando usar o trapézio para compensar.",
          },
          {
            id: "peito_supino_maquina_declinado",
            nome: "Supino máquina declinado",
            duracao: "45–50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Mantenha o quadril bem apoiado no banco e controle o retorno para evitar impacto nas articulações.",
          },
          {
            id: "peito_voador_maquina",
            nome: "Voador máquina (peck deck)",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Ajuste o encosto para manter cotovelos alinhados ao peito e foque em aproximar os braços com controle.",
          },
          {
            id: "peito_crucifixo_maquina",
            nome: "Crucifixo máquina",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Evite estender demais os ombros para trás; mantenha a tensão constante no peitoral.",
          },
          {
            id: "peito_smith_reto",
            nome: "Supino no Smith reto",
            duracao: "45–50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Use o Smith para focar na técnica: trajetória estável e controle total da descida.",
          },
          {
            id: "peito_smith_inclinado",
            nome: "Supino no Smith inclinado",
            duracao: "45–50s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Mantenha os pés firmes no chão e o tronco bem apoiado para evitar compensações.",
          },
        ],
      },

      // ===================== ISOLADORES COM HALTERES =====================
      {
        nome: "Isoladores com halteres",
        exercicios: [
          {
            id: "peito_crucifixo_reto_halteres",
            nome: "Crucifixo reto com halteres",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Desça os halteres em arco suave, sentindo o alongamento do peitoral sem forçar demais os ombros.",
          },
          {
            id: "peito_crucifixo_inclinado_halteres",
            nome: "Crucifixo inclinado com halteres",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Mantenha uma leve flexão dos cotovelos e controle a amplitude para proteger a articulação do ombro.",
          },
          {
            id: "peito_crucifixo_declinado_halteres",
            nome: "Crucifixo declinado com halteres",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Foque em abrir o peito, mantendo o pescoço relaxado e o tronco bem estabilizado.",
          },
          {
            id: "peito_pullover_halter",
            nome: "Pullover com halter",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Mantenha quadril estável e sinta o alongamento do peitoral e serrátil na fase excêntrica.",
          },
          {
            id: "peito_squeeze_press_halteres",
            nome: "Supino squeeze com halteres",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Pressione os halteres um contra o outro durante todo o movimento para aumentar a ativação do peitoral interno.",
          },
        ],
      },

      // ========================= CABOS / CROSSOVER =========================
      {
        nome: "Cabos e crossover",
        exercicios: [
          {
            id: "peito_crossover_alto",
            nome: "Crossover alto",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Traga os cabos de cima para baixo mantendo leve inclinação do tronco à frente e controle no retorno.",
          },
          {
            id: "peito_crossover_medio",
            nome: "Crossover médio",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Mantenha os braços levemente flexionados e foque em unir as mãos na frente do peito.",
          },
          {
            id: "peito_crossover_baixo",
            nome: "Crossover baixo",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Pense em subir o cabo como se estivesse fazendo um abraço de baixo para cima, ativando bem a parte superior do peito.",
          },
          {
            id: "peito_crucifixo_cabo_inclinado",
            nome: "Crucifixo no cabo em banco inclinado",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Use carga moderada para manter o controle e evitar compensações nos ombros.",
          },
          {
            id: "peito_crossover_unilateral",
            nome: "Crossover unilateral",
            duracao: "35–40s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Trabalhe um lado por vez para corrigir assimetrias, mantendo o tronco estável.",
          },
        ],
      },

      // ========================= PESO CORPORAL =========================
      {
        nome: "Peso corporal",
        exercicios: [
          {
            id: "peito_flexao_tradicional",
            nome: "Flexão de braço tradicional",
            duracao: "30–40s",
            series: "3–4 séries",
            descanso: "30–60s",
            dica: "Mantenha o corpo em linha reta, ativando abdômen e glúteos para estabilização.",
          },
          {
            id: "peito_flexao_inclinada",
            nome: "Flexão de braço inclinada",
            duracao: "30–40s",
            series: "3–4 séries",
            descanso: "30–60s",
            dica: "Use apoio elevado para reduzir a carga e foque na qualidade da execução.",
          },
          {
            id: "peito_flexao_declinada",
            nome: "Flexão de braço declinada",
            duracao: "30–40s",
            series: "3–4 séries",
            descanso: "30–60s",
            dica: "Eleve os pés para aumentar a exigência da região superior do peito.",
          },
          {
            id: "peito_flexao_pegada_fechada",
            nome: "Flexão com pegada fechada",
            duracao: "30–40s",
            series: "3–4 séries",
            descanso: "30–60s",
            dica: "Aproxime as mãos para aumentar a participação de peitoral interno e tríceps.",
          },
        ],
      },

      // ====================== VARIAÇÕES AVANÇADAS ======================
      {
        nome: "Variações avançadas",
        exercicios: [
          {
            id: "peito_supino_pausa_peito",
            nome: "Supino reto com pausa no peito",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Faça uma breve pausa com a barra próxima ao peito para melhorar controle e força no início do movimento.",
          },
          {
            id: "peito_supino_isometria_final",
            nome: "Supino reto com isometria no final",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Segure 2–3 segundos na fase final de extensão, mantendo o peito contraído sem travar completamente os cotovelos.",
          },
          {
            id: "peito_supino_pegada_ampla",
            nome: "Supino reto com pegada mais ampla",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Aumente a pegada com cuidado, respeitando a mobilidade do ombro, para maior foco no peitoral.",
          },
          {
            id: "peito_supino_pegada_neutra",
            nome: "Supino com halteres em pegada neutra",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "60–90s",
            dica: "Mantenha os halteres paralelos durante toda a execução, reduzindo estresse no ombro.",
          },
          {
            id: "peito_supino_alternado_halteres",
            nome: "Supino alternado com halteres",
            duracao: "40–45s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Desça um lado por vez, mantendo o outro em isometria no topo para maior controle e estabilidade.",
          },
          {
            id: "peito_flexao_pliometrica",
            nome: "Flexão de braço pliométrica",
            duracao: "20–30s",
            series: "3–5 séries",
            descanso: "60–120s",
            dica: "Use movimentos explosivos com controle, evitando impacto excessivo nas articulações.",
          },
          {
            id: "peito_flexao_pes_elevados",
            nome: "Flexão com pés elevados",
            duracao: "30–40s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Mantenha o tronco firme e evite deixar o quadril cair durante a execução.",
          },
          {
            id: "peito_crossover_unilateral_cabo",
            nome: "Crossover unilateral em pé",
            duracao: "35–40s",
            series: "3–4 séries",
            descanso: "45–75s",
            dica: "Trabalhe um lado por vez para corrigir desequilíbrios, mantendo o tronco estável.",
          },
          {
            id: "peito_isometria_maquina_fechado",
            nome: "Isometria de peito na máquina",
            duracao: "20–30s",
            series: "2–4 séries",
            descanso: "45–75s",
            dica: "Segure a fase final do voador ou supino máquina, mantendo a contração máxima do peitoral.",
          },
          {
            id: "peito_pushup_smith_barra",
            nome: "Flexão de braço na barra do Smith",
            duracao: "30–40s",
            series: "3–4 séries",
            descanso: "30–60s",
            dica: "Ajuste a altura da barra para adaptar a dificuldade ao seu nível atual.",
          },
        ],
      },
    ],
  },
};

// =============================================================
//  GRUPO: COSTAS — 40 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.costas = {
  label: "Costas",
  categorias: [
    // ====================== COMPOSTOS ======================
    {
      nome: "Compostos",
      exercicios: [
        {
          id: "costas_barra_fixa_aberta",
          nome: "Barra fixa pegada aberta",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Mantenha escápulas baixas e retraídas para ativar melhor o dorsal.",
        },
        {
          id: "costas_barra_fixa_fechada",
          nome: "Barra fixa pegada fechada",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Traga o peito em direção à barra com controle, evitando balançar o corpo.",
        },
        {
          id: "costas_remada_curvada_barra",
          nome: "Remada curvada com barra",
          duracao: "45–50s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Mantenha a lombar neutra e puxe trazendo os cotovelos para trás.",
        },
        {
          id: "costas_remada_unilateral_halter",
          nome: "Remada unilateral com halter",
          duracao: "45–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Evite girar o tronco; mantenha o foco na contração do dorsal.",
        },
        {
          id: "costas_terra_convencional",
          nome: "Levantamento terra convencional",
          duracao: "40–45s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Mantenha a barra próxima ao corpo, quadris firmes e lombar neutra.",
        },
        {
          id: "costas_terra_romeno",
          nome: "Levantamento terra romeno",
          duracao: "40–45s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Desça controlando, mantendo leve flexão dos joelhos e foco no alongamento dos posteriores e costas.",
        },
        {
          id: "costas_pull_over_barra",
          nome: "Pullover com barra",
          duracao: "40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Evite dobrar demais os cotovelos; sinta o alongamento do dorsal na descida.",
        },
      ],
    },

    // ====================== MÁQUINAS ======================
    {
      nome: "Máquinas",
      exercicios: [
        {
          id: "costas_puxada_frente_aberta",
          nome: "Puxada na frente pegada aberta",
          duracao: "45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Puxe trazendo o peito levemente para cima, evitando elevar os ombros.",
        },
        {
          id: "costas_puxada_frente_fechada",
          nome: "Puxada na frente pegada fechada",
          duracao: "45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha o tronco estável e foque em puxar com o dorsal e não com o bíceps.",
        },
        {
          id: "costas_remada_baixa_cabo",
          nome: "Remada baixa no cabo",
          duracao: "45–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Traga a barra ao abdômen mantendo escápulas retraídas e coluna neutra.",
        },
        {
          id: "costas_remada_sentado_maquina",
          nome: "Remada sentada na máquina",
          duracao: "45–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Evite balançar o tronco; mantenha o controle durante toda a tração.",
        },
        {
          id: "costas_maquina_serrote",
          nome: "Máquina serrote",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Puxe trazendo o cotovelo para trás, sem girar o tronco.",
        },
        {
          id: "costas_puxada_articulada",
          nome: "Puxada articulada",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Use amplitude total mantendo ombros longe das orelhas.",
        },
      ],
    },

    // ====================== ISOLADORES ======================
    {
      nome: "Isoladores",
      exercicios: [
        {
          id: "costas_pullover_maquina",
          nome: "Pullover na máquina",
          duracao: "40–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha tronco estável e foco no alongamento do dorsal.",
        },
        {
          id: "costas_puxada_unilateral",
          nome: "Puxada unilateral no cabo",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Puxe com controle evitando rodar o tronco.",
        },
        {
          id: "costas_serrote_cabo",
          nome: "Remada serrote no cabo",
          duracao: "40–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Trabalhe amplitude total sem perder a posição da lombar.",
        },
      ],
    },

    // ====================== CABOS ======================
    {
      nome: "Cabos",
      exercicios: [
        {
          id: "costas_puxada_reta_cabo",
          nome: "Puxada reta no cabo",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha braços quase estendidos e foque na depressão escapular.",
        },
        {
          id: "costas_puxada_alta_unilateral",
          nome: "Puxada alta unilateral",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Excelente para foco no dorsal inferior e correção de assimetrias.",
        },
        {
          id: "costas_facepull",
          nome: "Face pull",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Puxe trazendo as mãos na altura do rosto, ativando trapézio médio e parte posterior dos ombros.",
        },
      ],
    },

    // ====================== VARIAÇÕES AVANÇADAS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "costas_remada_cavalinho",
          nome: "Remada cavalinho (T-bar)",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Use pegada firme e controle a fase excêntrica para mais ativação.",
        },
        {
          id: "costas_remada_invertida",
          nome: "Remada invertida",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha o corpo alinhado e puxe trazendo o peito em direção à barra.",
        },
        {
          id: "costas_barra_fixa_isometria",
          nome: "Barra fixa com isometria",
          duracao: "20–30s",
          series: "2–4 séries",
          descanso: "60–90s",
          dica: "Segure o topo da barra mantendo o dorsal contraído.",
        },
        {
          id: "costas_deadstop_row",
          nome: "Remada Dead-Stop",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Apoie a barra no chão entre repetições para manter explosão e técnica.",
        },
        {
          id: "costas_puxada_supinada",
          nome: "Puxada supinada",
          duracao: "40–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha cotovelos próximos ao tronco e evite arqueamento da lombar.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: OMBROS — 40 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.ombros = {
  label: "Ombros",
  categorias: [
    // ====================== DELTOIDE ANTERIOR ======================
    {
      nome: "Deltoide anterior",
      exercicios: [
        {
          id: "ombros_desenvolvimento_barra_frente",
          nome: "Desenvolvimento com barra à frente",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Mantenha o core firme e a barra alinhada ao centro do corpo para estabilizar o movimento.",
        },
        {
          id: "ombros_desenvolvimento_halteres",
          nome: "Desenvolvimento com halteres",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Evite arquear excessivamente a lombar; mantenha as escápulas encaixadas.",
        },
        {
          id: "ombros_desenvolvimento_maquina",
          nome: "Desenvolvimento na máquina",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Ajuste o assento para que as mãos fiquem na altura do queixo no início do movimento.",
        },
        {
          id: "ombros_elevacao_frontal_halteres",
          nome: "Elevação frontal com halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Eleve os halteres até a altura dos ombros mantendo o tronco estável.",
        },
        {
          id: "ombros_elevacao_frontal_barra",
          nome: "Elevação frontal com barra",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Use pegada na largura dos ombros e evite impulso com quadril.",
        },
        {
          id: "ombros_elevacao_frontal_corda",
          nome: "Elevação frontal no cabo com corda",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Traga a corda para cima separando as mãos no final para maior ativação.",
        },
      ],
    },

    // ====================== DELTOIDE LATERAL ======================
    {
      nome: "Deltoide lateral",
      exercicios: [
        {
          id: "ombros_elevacao_lateral_halteres",
          nome: "Elevação lateral com halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Levante os braços até a linha dos ombros mantendo leve inclinação do tronco.",
        },
        {
          id: "ombros_elevacao_lateral_cabo",
          nome: "Elevação lateral no cabo",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Use o cabo por trás do corpo para maximizar amplitude e tensão contínua.",
        },
        {
          id: "ombros_elevacao_lateral_maquina",
          nome: "Elevação lateral na máquina",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Ajuste o apoio para manter o braço alinhado ao centro da articulação do ombro.",
        },
        {
          id: "ombros_elevacao_lateral_parcial",
          nome: "Elevação lateral parcial (lad raise)",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Movimento em amplitude curta para fadigar fibras laterais sem perder técnica.",
        },
        {
          id: "ombros_arnold_press",
          nome: "Arnold press",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Gire os halteres durante a subida mantendo cotovelos estáveis para ativação completa.",
        },
        {
          id: "ombros_press_neutro",
          nome: "Press militar com halteres pegada neutra",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Pegada neutra reduz estresse no ombro, excelente para progressões seguras.",
        },
      ],
    },

    // ====================== DELTOIDE POSTERIOR ======================
    {
      nome: "Deltoide posterior",
      exercicios: [
        {
          id: "ombros_crucifixo_inverso_halteres",
          nome: "Crucifixo inverso com halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Incline o tronco e abra os braços mantendo cotovelos levemente flexionados.",
        },
        {
          id: "ombros_crucifixo_inverso_maquina",
          nome: "Crucifixo inverso na máquina",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha a escápula estável e evite elevar o trapézio durante a execução.",
        },
        {
          id: "ombros_facepull_corda",
          nome: "Facepull com corda",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Puxe trazendo as mãos na altura do rosto, abrindo os cotovelos para ativar deltoide posterior.",
        },
        {
          id: "ombros_remada_alta_barra",
          nome: "Remada alta com barra",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha cotovelos acima da linha das mãos para focar no deltoide lateral e posterior.",
        },
        {
          id: "ombros_remada_alta_corda",
          nome: "Remada alta no cabo com corda",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "A variação com corda permite maior amplitude e reduz estresse nos ombros.",
        },
        {
          id: "ombros_reverse_fly_cabo",
          nome: "Crucifixo inverso no cabo",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Cruze os cabos para aumentar o alongamento inicial do movimento.",
        },
      ],
    },

    // ====================== MÁQUINAS ======================
    {
      nome: "Máquinas",
      exercicios: [
        {
          id: "ombros_desenvolvimento_maquina_sentado",
          nome: "Desenvolvimento na máquina sentado",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Neutralize a lombar mantendo o tronco firme contra o encosto.",
        },
        {
          id: "ombros_maquina_deltoide_posterior",
          nome: "Máquina deltoide posterior",
          duracao: "40–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Ajuste o apoio para manter os cotovelos alinhados ao ombro.",
        },
        {
          id: "ombros_maquina_lateral",
          nome: "Máquina deltoide lateral",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Evite impulso; controle a subida mantendo o abdômen firme.",
        },
        {
          id: "ombros_press_maquina_unilateral",
          nome: "Desenvolvimento máquina unilateral",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Excelente para corrigir assimetrias mantendo foco total em cada lado.",
        },
      ],
    },

    // ====================== CABOS ======================
    {
      nome: "Cabos",
      exercicios: [
        {
          id: "ombros_elevacao_lateral_unilateral_cabo",
          nome: "Elevação lateral unilateral no cabo",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Deixe o cabo por trás do corpo para ativar fibras laterais com mais eficiência.",
        },
        {
          id: "ombros_elevacao_frontal_cabo_reto",
          nome: "Elevação frontal no cabo (pegada reta)",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha postura estável e eleve até a linha dos ombros.",
        },
        {
          id: "ombros_crucifixo_inverso_cabo_alto",
          nome: "Crucifixo inverso no cabo alto",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Foque em abrir os braços para ativar o deltoide posterior sem acionar o trapézio.",
        },
      ],
    },

    // ====================== VARIAÇÕES AVANÇADAS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "ombros_desenvolvimento_press_em_pe",
          nome: "Press militar em pé",
          duracao: "35–40s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Mantenha pés firmes e core ativo para estabilizar a coluna.",
        },
        {
          id: "ombros_lateral_raise_isometria",
          nome: "Elevação lateral com isometria",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Segure brevemente no topo para aumentar a ativação do ombro lateral.",
        },
        {
          id: "ombros_press_unilateral",
          nome: "Press unilateral com halter",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Trabalhe cada lado separadamente mantendo o tronco alinhado.",
        },
        {
          id: "ombros_upright_row_unilateral",
          nome: "Remada alta unilateral",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Concentre-se na subida lateral, sem elevar demais os ombros.",
        },
        {
          id: "ombros_y_raise",
          nome: "Elevação em Y",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Excelente para fortalecimento do manguito rotador e estabilização.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: BÍCEPS — 25 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.biceps = {
  label: "Bíceps",
  categorias: [
    // ====================== BÁSICOS ======================
    {
      nome: "Básicos",
      exercicios: [
        {
          id: "biceps_rosso_halteres",
          nome: "Rosca direta com halteres",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha os cotovelos próximos ao corpo e evite balanço excessivo.",
        },
        {
          id: "biceps_rossa_direta_barra",
          nome: "Rosca direta com barra",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Use pegada na largura dos ombros e controle a descida para ativação máxima.",
        },
        {
          id: "biceps_rossa_direta_barra_w",
          nome: "Rosca direta com barra W",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "A barra W reduz tensão no punho, facilitando o movimento.",
        },
      ],
    },

    // ====================== HALTERES ======================
    {
      nome: "Halteres",
      exercicios: [
        {
          id: "biceps_rossa_alternada",
          nome: "Rosca alternada",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Gire o punho durante a subida para máxima ativação do bíceps.",
        },
        {
          id: "biceps_rossa_martelo",
          nome: "Rosca martelo",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "A pegada neutra ativa também braquial e antebraço.",
        },
        {
          id: "biceps_rossa_inclinada",
          nome: "Rosca inclinada",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha os ombros para trás para favorecer a amplitude do movimento.",
        },
        {
          id: "biceps_rossa_concentrada",
          nome: "Rosca concentrada",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Controle a execução para ativar o bíceps na região do pico.",
        },
        {
          id: "biceps_drag_curl",
          nome: "Rosca drag curl",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Puxe a barra em direção ao tronco para isolar o bíceps sem usar ombros.",
        },
      ],
    },

    // ====================== BARRA ======================
    {
      nome: "Barra",
      exercicios: [
        {
          id: "biceps_rossa_scott_barra",
          nome: "Rosca Scott com barra",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Evite estender completamente os cotovelos para proteger a articulação.",
        },
        {
          id: "biceps_rossa_scott_w",
          nome: "Rosca Scott com barra W",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Pegada W reduz estresse no punho e facilita controle.",
        },
        {
          id: "biceps_rossa_reversa",
          nome: "Rosca reversa",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Ativa braquiorradial e antebraço; mantenha punho firme.",
        },
        {
          id: "biceps_rossa_pronada",
          nome: "Rosca pronada com barra",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Movimento mais desafiador; comece com carga leve.",
        },
      ],
    },

    // ====================== CABOS ======================
    {
      nome: "Cabos",
      exercicios: [
        {
          id: "biceps_rossa_cabo_alta",
          nome: "Rosca no cabo polia alta",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha o tronco estável e concentre-se na fase excêntrica.",
        },
        {
          id: "biceps_rossa_cabo_baixa",
          nome: "Rosca no cabo polia baixa",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Permite tensão contínua durante todo o movimento.",
        },
        {
          id: "biceps_rossa_corda",
          nome: "Rosca com corda",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Separe as mãos no final para ativar o bíceps interno.",
        },
        {
          id: "biceps_crossover_baixo",
          nome: "Rosca cross baixo",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Trabalha a porção alongada do bíceps.",
        },
      ],
    },

    // ====================== MÁQUINAS ======================
    {
      nome: "Máquinas",
      exercicios: [
        {
          id: "biceps_maquina_bilateral",
          nome: "Rosca máquina bilateral",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Controle a descida e mantenha a coluna apoiada no encosto.",
        },
        {
          id: "biceps_maquina_unilateral",
          nome: "Rosca máquina unilateral",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Excelente para corrigir assimetrias de força.",
        },
      ],
    },

    // ====================== AVANÇADOS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "biceps_21s",
          nome: "Rosca 21",
          duracao: "30–40s",
          series: "3 séries",
          descanso: "60–90s",
          dica: "7 reps inferiores + 7 reps superiores + 7 reps completas.",
        },
        {
          id: "biceps_rest_pause",
          nome: "Rosca rest-pause",
          duracao: "20–30s",
          series: "3 séries",
          descanso: "60–120s",
          dica: "Faça mini pausas de 5–10 segundos mantendo técnica impecável.",
        },
        {
          id: "biceps_isometria_topo",
          nome: "Rosca com isometria no topo",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Segure a contração máxima por 1–2s no topo.",
        },
        {
          id: "biceps_negative_focus",
          nome: "Rosca com foco excêntrico",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Desça em 3–4 segundos para alto estímulo muscular.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: TRÍCEPS — 25 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.triceps = {
  label: "Tríceps",
  categorias: [
    // ====================== BÁSICOS ======================
    {
      nome: "Extensões básicas",
      exercicios: [
        {
          id: "triceps_puxada_corda",
          nome: "Tríceps corda (polia alta)",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Separe as mãos no final para maior contração da cabeça lateral.",
        },
        {
          id: "triceps_barra_reta",
          nome: "Tríceps barra reta",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha os cotovelos fixos e evite abrir demais os braços.",
        },
        {
          id: "triceps_barra_w",
          nome: "Tríceps barra W",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "A pegada W reduz tensão nos punhos e facilita o movimento.",
        },
      ],
    },

    // ====================== HALTERES ======================
    {
      nome: "Halteres",
      exercicios: [
        {
          id: "triceps_frances_halter",
          nome: "Tríceps francês com halter",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Desça o halter atrás da cabeça mantendo os cotovelos estáveis.",
        },
        {
          id: "triceps_frances_duplo",
          nome: "Tríceps francês com dois halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Permite maior equilíbrio e distribuição do peso.",
        },
        {
          id: "triceps_kickback",
          nome: "Tríceps kickback",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha o braço paralelo ao tronco e estenda totalmente o cotovelo.",
        },
        {
          id: "triceps_kickback_unilateral",
          nome: "Kickback unilateral",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Foque na contração final mantendo o tronco firme.",
        },
      ],
    },

    // ====================== CABEÇA LONGA ======================
    {
      nome: "Cabeça longa",
      exercicios: [
        {
          id: "triceps_testa_barra_reta",
          nome: "Tríceps testa (barra reta)",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha os cotovelos alinhados e desça a barra em direção à testa com controle.",
        },
        {
          id: "triceps_testa_barra_w",
          nome: "Tríceps testa com barra W",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "A barra W reduz estresse nos punhos e facilita amplitude.",
        },
        {
          id: "triceps_testa_halteres",
          nome: "Tríceps testa com halteres",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Excelente para quem tem assimetrias; movimento mais natural.",
        },
        {
          id: "triceps_testa_cabo",
          nome: "Tríceps testa no cabo",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Use carga moderada para manter controle da extensão.",
        },
      ],
    },

    // ====================== CABOS ======================
    {
      nome: "Cabos",
      exercicios: [
        {
          id: "triceps_puxada_invertida",
          nome: "Tríceps puxada inversa",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "A pegada supinada ativa a cabeça medial do tríceps.",
        },
        {
          id: "triceps_puxada_unilateral",
          nome: "Tríceps unilateral no cabo",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha o ombro estável e faça o movimento com controle.",
        },
        {
          id: "triceps_coice_cabo",
          nome: "Tríceps coice no cabo",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Ótimo para foco no pico; mantenha cotovelo fixo no alto.",
        },
        {
          id: "triceps_sobre_cabeca_corda",
          nome: "Tríceps corda acima da cabeça",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Eleve os braços acima da cabeça para maior alongamento da cabeça longa.",
        },
      ],
    },

    // ====================== MÁQUINAS ======================
    {
      nome: "Máquinas",
      exercicios: [
        {
          id: "triceps_suino_maquina",
          nome: "Tríceps máquina (extensão)",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha a lombar apoiada e estenda os cotovelos sem impulsos.",
        },
        {
          id: "triceps_paralelas_fechadas",
          nome: "Paralelas fechadas (tríceps)",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–120s",
          dica: "Corpo mais vertical para ativar tríceps; evite inclinar demais.",
        },
      ],
    },

    // ====================== VARIAÇÕES AVANÇADAS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "triceps_rest_pause",
          nome: "Tríceps rest-pause",
          duracao: "20–30s",
          series: "3 séries",
          descanso: "60–120s",
          dica: "Use pausas curtas mantendo a técnica estável.",
        },
        {
          id: "triceps_forca_excêntrica",
          nome: "Tríceps com foco excêntrico",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Desça em 3–4 segundos para estímulo máximo.",
        },
        {
          id: "triceps_isometria",
          nome: "Isometria de tríceps",
          duracao: "20–30s",
          series: "2–3 séries",
          descanso: "45–75s",
          dica: "Segure a extensão final mantendo antebraços paralelos ao chão.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: QUADRÍCEPS — 50 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.quadriceps = {
  label: "Quadríceps",
  categorias: [
    // ====================== COMPOSTOS ======================
    {
      nome: "Compostos",
      exercicios: [
        {
          id: "quad_agachamento_livre",
          nome: "Agachamento livre",
          duracao: "40–50s",
          series: "3–5 séries",
          descanso: "90–120s",
          dica: "Mantenha o tronco firme e a barra apoiada com segurança; desça até o limite confortável.",
        },
        {
          id: "quad_frontal_barra",
          nome: "Agachamento frontal",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Corpo mais vertical aumenta a ativação de quadríceps.",
        },
        {
          id: "quad_bulgaro",
          nome: "Agachamento búlgaro",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha o joelho alinhado ao pé; inclinação leve para frente aumenta o estímulo.",
        },
        {
          id: "quad_avanco_barra",
          nome: "Avanço com barra",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Passada longa ativa mais posterior, passada curta ativa mais quadríceps.",
        },
        {
          id: "quad_passada_livre",
          nome: "Passada andando",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha o tronco estável e passos firmes.",
        },
      ],
    },

    // ====================== AGACHAMENTOS ======================
    {
      nome: "Agachamentos",
      exercicios: [
        {
          id: "quad_agachamento_smith",
          nome: "Agachamento no Smith",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Posicione os pés à frente para maior foco no quadríceps.",
        },
        {
          id: "quad_agachamento_barra_alta",
          nome: "Agachamento barra alta",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "90–110s",
          dica: "Mantém o tronco mais vertical e aumenta o estímulo anterior.",
        },
        {
          id: "quad_box_squat",
          nome: "Box squat",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Toque o banco levemente sem relaxar o core.",
        },
        {
          id: "quad_sissy_squat",
          nome: "Sissy squat",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Excelente para isolar quadríceps; vá devagar na descida.",
        },
        {
          id: "quad_agachamento_sumô",
          nome: "Agachamento sumô",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Pés mais afastados; ativa adutores e quadríceps.",
        },
      ],
    },

    // ====================== MÁQUINAS ======================
    {
      nome: "Máquinas",
      exercicios: [
        {
          id: "quad_cadeira_extensora",
          nome: "Cadeira extensora",
          duracao: "35–45s",
          series: "3–5 séries",
          descanso: "60–90s",
          dica: "Mantenha isometria no topo por 1 segundo para maior ativação.",
        },
        {
          id: "quad_leg_press_45",
          nome: "Leg press 45°",
          duracao: "40–50s",
          series: "3–5 séries",
          descanso: "90–120s",
          dica: "Pés mais baixos ativam mais quadríceps.",
        },
        {
          id: "quad_leg_press_horizontal",
          nome: "Leg press horizontal",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Mantenha lombar apoiada e amplitude controlada.",
        },
        {
          id: "quad_hack_machine",
          nome: "Hack machine",
          duracao: "40–50s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Desça até 90° mantendo joelhos alinhados aos pés.",
        },
        {
          id: "quad_hack_reverso",
          nome: "Hack reverso",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Variação excelente para tensão constante.",
        },
        {
          id: "quad_extensora_unilateral",
          nome: "Extensora unilateral",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Melhora assimetrias e o controle neuromuscular.",
        },
        {
          id: "quad_extensora_drop_set",
          nome: "Extensora (drop-set)",
          duracao: "25–35s",
          series: "3 séries",
          descanso: "60–90s",
          dica: "Reduza a carga após a falha mantendo amplitude.",
        },
        {
          id: "quad_leg_press_unilateral",
          nome: "Leg press unilateral",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Corrige assimetrias e melhora estabilidade.",
        },
        {
          id: "quad_stepup_maquina",
          nome: "Step-up máquina",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Empurre o peso com a perna trabalhada sem usar impulso.",
        },
      ],
    },

    // ====================== BARRA / HALTERES ======================
    {
      nome: "Barra e Halteres",
      exercicios: [
        {
          id: "quad_front_squat_halteres",
          nome: "Front squat com halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Postura vertical, mantendo o core firme.",
        },
        {
          id: "quad_stepup_halter",
          nome: "Step-up com halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Evite impulso; suba com controle total.",
        },
        {
          id: "quad_avanco_halter",
          nome: "Avanço com halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha passadas consistentes e tronco firme.",
        },
        {
          id: "quad_split_squat",
          nome: "Split squat",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Amplitude total e joelho alinhado ao pé.",
        },
        {
          id: "quad_pistola",
          nome: "Agachamento pistola",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Exige mobilidade e controle; excelente unilateral.",
        },
        {
          id: "quad_box_lunge",
          nome: "Lunge no box",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Maior alongamento = maior ativação.",
        },
        {
          id: "quad_step_down",
          nome: "Step-down controlado",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Foque na descida lenta e controlada.",
        },
      ],
    },

    // ====================== AVANÇADOS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "quad_sissy_squat_maquina",
          nome: "Sissy squat máquina",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Isola quadríceps intensamente; execute com técnica.",
        },
        {
          id: "quad_wall_sit",
          nome: "Wall sit (isometria)",
          duracao: "20–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha 90° nos joelhos e lombar apoiada.",
        },
        {
          id: "quad_pausa_no_fundo",
          nome: "Agachamento com pausa no fundo",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Pausa de 1–2s aumenta estímulo mecânico.",
        },
        {
          id: "quad_excêntrico_lento",
          nome: "Agachamento excêntrico lento",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Desça em 4–5s para máxima tensão.",
        },
        {
          id: "quad_cluster_sets",
          nome: "Cluster sets",
          duracao: "20–30s",
          series: "3 séries",
          descanso: "90–120s",
          dica: "Mini-pausas mantêm alta performance e segurança.",
        },
        {
          id: "quad_maquina_glute_drive_quads",
          nome: "Glute drive quadríceps focus",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Ajuste pés baixos para foco no quadríceps.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: POSTERIOR — 40 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.posterior = {
  label: "Posterior de coxa",
  categorias: [
    // ====================== LEVANTAMENTOS ======================
    {
      nome: "Levantamentos",
      exercicios: [
        {
          id: "post_stiff_barra",
          nome: "Stiff com barra",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Mantenha a lombar neutra e foque em empurrar o quadril para trás.",
        },
        {
          id: "post_stiff_halter",
          nome: "Stiff com halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Halteres permitem movimento mais natural e simétrico.",
        },
        {
          id: "post_terra_romeno",
          nome: "Terra romeno",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Desça até sentir alongamento máximo mantendo controle total.",
        },
        {
          id: "post_terra_sumô",
          nome: "Levantamento terra sumô",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Pegada interna com pés abertos ativa adutores e posteriores.",
        },
        {
          id: "post_rack_pull",
          nome: "Rack pull",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Excelente para foco em posteriores e lombar sem excesso de amplitude.",
        },
      ],
    },

    // ====================== FLEXORAS ======================
    {
      nome: "Flexoras",
      exercicios: [
        {
          id: "post_flexora_deitado",
          nome: "Flexora deitado",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Evite tirar o quadril do banco para não perder tensão.",
        },
        {
          id: "post_flexora_sentado",
          nome: "Flexora sentado",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Varie a inclinação do assento para ajustar o estímulo.",
        },
        {
          id: "post_flexora_unilateral",
          nome: "Flexora unilateral",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Corrige assimetrias e melhora controle neuromuscular.",
        },
        {
          id: "post_flexora_45",
          nome: "Flexora 45°",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Controle na descida aumenta estímulo nas fibras longas.",
        },
        {
          id: "post_flexora_bilateral",
          nome: "Flexora bilateral",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Excelente para isolar posteriores sem sobrecarregar lombar.",
        },
      ],
    },

    // ====================== HALTERES / BARRA ======================
    {
      nome: "Barra e Halteres",
      exercicios: [
        {
          id: "post_bgoodmorning_barra",
          nome: "Good morning com barra",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Desça levando o quadril para trás e mantendo as costas neutras.",
        },
        {
          id: "post_bgoodmorning_halter",
          nome: "Good morning com halter",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Variação mais segura para iniciantes.",
        },
        {
          id: "post_hip_extension_banco",
          nome: "Hip extension no banco",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Ative o core para evitar perda de postura.",
        },
        {
          id: "post_reverse_lunge",
          nome: "Avanço reverso",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Passo para trás reduz carga no quadríceps e aumenta o foco em posteriores.",
        },
        {
          id: "post_step_back",
          nome: "Step-back com halteres",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha o tronco ligeiramente inclinado.",
        },
        {
          id: "post_romeno_unilateral",
          nome: "RDL unilateral",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Excelente para estabilidade e trabalho unilateral profundo.",
        },
      ],
    },

    // ====================== GHD / NORDIC ======================
    {
      nome: "GHD / Nordic / Avançados",
      exercicios: [
        {
          id: "post_ghd_raise",
          nome: "GHD raise",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Fortalece a cadeia posterior completa; execute com controle.",
        },
        {
          id: "post_ghd_hip_extension",
          nome: "GHD hip extension",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Excelente para glúteo e lombar.",
        },
        {
          id: "post_nordic_curl",
          nome: "Nordic curl",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "75–120s",
          dica: "Um dos exercícios mais eficientes para posteriores; execução difícil.",
        },
        {
          id: "post_slider_leg_curl",
          nome: "Leg curl com slider",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Movimento excêntrico muito eficiente para força.",
        },
        {
          id: "post_stability_ball_curl",
          nome: "Leg curl na bola suíça",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Excelente para iniciantes com foco em estabilidade.",
        },
      ],
    },

    // ====================== CABOS ======================
    {
      nome: "Cabos",
      exercicios: [
        {
          id: "post_leg_curl_cabo",
          nome: "Leg curl no cabo",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Ajuste a altura do tornozelo para melhor amplitude.",
        },
        {
          id: "post_kickback_posterior",
          nome: "Kickback posterior (ênfase posterior)",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Foque em manter o joelho estável.",
        },
        {
          id: "post_pullback_unilateral",
          nome: "Pullback unilateral",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Trabalha estabilização + posterior.",
        },
      ],
    },

    // ====================== VARIAÇÕES AVANÇADAS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "post_cluster_sets",
          nome: "Cluster sets posterior",
          duracao: "20–30s",
          series: "3 séries",
          descanso: "90–120s",
          dica: "Pausa curta mantém alta intensidade e técnica.",
        },
        {
          id: "post_excêntrico_longo",
          nome: "Excêntrico longo posterior",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Desça em 4–5s para tensionar profundamente as fibras.",
        },
        {
          id: "post_pausa_fundo_stiff",
          nome: "Pausa no fundo do stiff",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Mantém tensão máxima na parte mais difícil.",
        },
        {
          id: "post_glute_ham_negative",
          nome: "Nordic curl negativo",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "90–120s",
          dica: "Controle na descida é o segredo da progressão.",
        },
        {
          id: "post_isometria_romeno",
          nome: "Isometria no romeno",
          duracao: "20–30s",
          series: "2–3 séries",
          descanso: "75–90s",
          dica: "Segure 1–2s no ponto de maior alongamento.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: GLÚTEOS — 30 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.gluteos = {
  label: "Glúteos",
  categorias: [
    // ====================== HIP THRUST ======================
    {
      nome: "Hip Thrust",
      exercicios: [
        {
          id: "gluteo_hip_thrust_barra",
          nome: "Hip thrust com barra",
          duracao: "35–45s",
          series: "3–5 séries",
          descanso: "90–120s",
          dica: "Mantenha queixo para baixo e finalize contraindo forte no topo.",
        },
        {
          id: "gluteo_hip_thrust_unilateral",
          nome: "Hip thrust unilateral",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Perfeito para corrigir assimetrias e intensificar o estímulo.",
        },
        {
          id: "gluteo_hip_thrust_smith",
          nome: "Hip thrust no Smith",
          duracao: "35–45s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Smith estabiliza e ajuda a focar 100% no glúteo.",
        },
      ],
    },

    // ====================== GLUTE BRIDGE ======================
    {
      nome: "Glute Bridge",
      exercicios: [
        {
          id: "gluteo_bridge_barra",
          nome: "Glute bridge com barra",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Mantenha a lombar neutra e contraia glúteos no topo.",
        },
        {
          id: "gluteo_bridge_halter",
          nome: "Glute bridge com halter",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Ótimo para iniciantes ou treinos mais leves.",
        },
        {
          id: "gluteo_bridge_unilateral",
          nome: "Glute bridge unilateral",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Simetria e ativação profunda.",
        },
        {
          id: "gluteo_bridge_isometrico",
          nome: "Glute bridge isométrico",
          duracao: "20–30s",
          series: "2–3 séries",
          descanso: "45–75s",
          dica: "Segure forte no topo sem perder alinhamento.",
        },
      ],
    },

    // ====================== ABDUÇÃO ======================
    {
      nome: "Abdução",
      exercicios: [
        {
          id: "gluteo_abducao_maquina",
          nome: "Abdução na máquina",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Inclinar o tronco levemente aumenta o estímulo no glúteo médio.",
        },
        {
          id: "gluteo_abducao_cabo",
          nome: "Abdução no cabo",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha o pé neutro para ativação ideal.",
        },
        {
          id: "gluteo_abducao_elastico",
          nome: "Abdução com elástico",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Excelente para ativação antes de movimentos compostos.",
        },
        {
          id: "gluteo_abducao_4apoios",
          nome: "Abdução em 4 apoios",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha quadril alinhado e evite girar o tronco.",
        },
      ],
    },

    // ====================== AVANÇOS / PASSADAS ======================
    {
      nome: "Avanços e Passadas",
      exercicios: [
        {
          id: "gluteo_passada_reversa",
          nome: "Passada reversa",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Passo para trás ativa mais glúteo e posterior.",
        },
        {
          id: "gluteo_lunge_lateral",
          nome: "Lunge lateral",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Movimento lateral ativa fortemente glúteo médio.",
        },
        {
          id: "gluteo_curtsy_lunge",
          nome: "Curtsy lunge",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Excelente para glúteo médio e estabilidade.",
        },
        {
          id: "gluteo_passada_com_salto",
          nome: "Passada com salto",
          duracao: "20–30s",
          series: "3 séries",
          descanso: "75–120s",
          dica: "Versão explosiva para potência e condicionamento.",
        },
      ],
    },

    // ====================== MÁQUINAS ======================
    {
      nome: "Máquinas",
      exercicios: [
        {
          id: "gluteo_maquina_coice",
          nome: "Máquina coice",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Use amplitude total sem arquear a lombar.",
        },
        {
          id: "gluteo_maquina_glute_focus",
          nome: "Máquina glúteo isolado",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Controle a volta e esprema o glúteo no final.",
        },
        {
          id: "gluteo_abducao_maquina_inclinada",
          nome: "Abdução máquina inclinada",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Inclinar o tronco para frente aumenta o estímulo no glúteo.",
        },
      ],
    },

    // ====================== CABOS ======================
    {
      nome: "Cabos",
      exercicios: [
        {
          id: "gluteo_kickback_cabo",
          nome: "Kickback no cabo",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha o tronco firme e chute para trás com controle.",
        },
        {
          id: "gluteo_puxada_externa",
          nome: "Puxada externa para glúteo médio",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Movimento pequeno e controlado para foco no glúteo médio.",
        },
        {
          id: "gluteo_cabo_glute_bridge",
          nome: "Glute bridge no cabo",
          duracao: "30–40s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Excelente para tensão contínua durante toda a amplitude.",
        },
      ],
    },

    // ====================== VARIAÇÕES AVANÇADAS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "gluteo_hip_thrust_pausa",
          nome: "Hip thrust com pausa no topo",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Segure 1–2s no topo para ativação máxima.",
        },
        {
          id: "gluteo_abducao_90",
          nome: "Abdução com 90° de flexão",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Isola glúteo médio de forma intensa.",
        },
        {
          id: "gluteo_pulse_hipthrust",
          nome: "Hip thrust pulses",
          duracao: "20–30s",
          series: "3 séries",
          descanso: "45–75s",
          dica: "Curtas repetições no topo para queima total.",
        },
        {
          id: "gluteo_isometria_hipthrust",
          nome: "Isometria no hip thrust",
          duracao: "20–30s",
          series: "2–3 séries",
          descanso: "45–75s",
          dica: "Segure firme mantendo quadril alinhado.",
        },
        {
          id: "gluteo_elastico_walk",
          nome: "Lateral band walk",
          duracao: "20–30s",
          series: "3 séries",
          descanso: "45–75s",
          dica: "Use elástico curto acima dos joelhos para maior ativação.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: PANTURRILHAS — 15 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.panturrilhas = {
  label: "Panturrilhas",
  categorias: [
    // ====================== EM PÉ ======================
    {
      nome: "Em pé",
      exercicios: [
        {
          id: "pant_empe_maquina",
          nome: "Elevação de panturrilha em pé (máquina)",
          duracao: "25–35s",
          series: "3–5 séries",
          descanso: "45–75s",
          dica: "Desça completamente até o alongamento total e suba contraindo forte.",
        },
        {
          id: "pant_empe_halter",
          nome: "Elevação de panturrilha em pé com halteres",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Use plataforma para aumentar amplitude.",
        },
        {
          id: "pant_empe_barra",
          nome: "Elevação de panturrilha com barra",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha o core estável para evitar desequilíbrio.",
        },
      ],
    },

    // ====================== SENTADO ======================
    {
      nome: "Sentado",
      exercicios: [
        {
          id: "pant_sentado_maquina",
          nome: "Panturrilha sentado (máquina)",
          duracao: "25–35s",
          series: "3–5 séries",
          descanso: "45–75s",
          dica: "Foca no sóleo; excelente para volume.",
        },
        {
          id: "pant_sentado_halter",
          nome: "Panturrilha sentado com peso sobre joelhos",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Use apoio acolchoado para conforto.",
        },
        {
          id: "pant_sentado_unilateral",
          nome: "Panturrilha sentado unilateral",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Ajuda na correção de assimetrias.",
        },
      ],
    },

    // ====================== MÁQUINAS ======================
    {
      nome: "Máquinas",
      exercicios: [
        {
          id: "pant_legpress",
          nome: "Panturrilha no leg press",
          duracao: "25–35s",
          series: "3–5 séries",
          descanso: "45–75s",
          dica: "Evite estender demais os joelhos; foco no movimento do tornozelo.",
        },
        {
          id: "pant_smith",
          nome: "Panturrilha no Smith",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Use plataforma para maior amplitude.",
        },
        {
          id: "pant_maquina_donkey",
          nome: "Panturrilha Donkey (máquina)",
          duracao: "25–35s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Excelente alongamento e contração.",
        },
      ],
    },

    // ====================== UNILATERAL ======================
    {
      nome: "Unilaterais",
      exercicios: [
        {
          id: "pant_unilateral_empe",
          nome: "Panturrilha unilateral em pé",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha o quadril alinhado e concentre o movimento.",
        },
        {
          id: "pant_unilateral_legpress",
          nome: "Panturrilha unilateral no leg press",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Excelente amplitude e isolamento.",
        },
      ],
    },

    // ====================== AVANÇADOS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "pant_isometria_topo",
          nome: "Elevação com isometria no topo",
          duracao: "20–30s",
          series: "2–3 séries",
          descanso: "45–75s",
          dica: "Segure forte no pico da contração por 1–2s.",
        },
        {
          id: "pant_excêntrico_longo",
          nome: "Elevação com excêntrico lento",
          duracao: "20–30s",
          series: "3 séries",
          descanso: "45–75s",
          dica: "Desça em 3–4 segundos para estímulo máximo.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: CORE — 20 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.core = {
  label: "Core / Abdômen",
  categorias: [
    // ====================== RETO ABDOMINAL ======================
    {
      nome: "Reto abdominal",
      exercicios: [
        {
          id: "core_crunch",
          nome: "Crunch abdominal",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Eleve o tronco mantendo queixo longe do peito e contraia o abdômen no topo.",
        },
        {
          id: "core_crunch_maquina",
          nome: "Abdominal máquina",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Mantenha a lombar apoiada e controle a volta para tensão contínua.",
        },
        {
          id: "core_leg_raise",
          nome: "Elevação de pernas",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Evite arquear a lombar; estabilize o core antes de levantar as pernas.",
        },
        {
          id: "core_infra_solo",
          nome: "Abdominal infra no solo",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Use movimento curto e controlado com foco no infra.",
        },
      ],
    },

    // ====================== OBLÍQUOS ======================
    {
      nome: "Oblíquos",
      exercicios: [
        {
          id: "core_obliquo_lateral",
          nome: "Flexão lateral",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Desça lateralmente mantendo quadril estável.",
        },
        {
          id: "core_russian_twist",
          nome: "Russian twist",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Gire com controle e mantenha o tronco firme.",
        },
        {
          id: "core_bicicleta",
          nome: "Abdominal bicicleta",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Traga o cotovelo em direção ao joelho ativando oblíquos.",
        },
      ],
    },

    // ====================== TRANSVERSO / CORE PROFUNDO ======================
    {
      nome: "Transverso (Core profundo)",
      exercicios: [
        {
          id: "core_prancha",
          nome: "Prancha",
          duracao: "20–40s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Mantenha o corpo alinhado, contraia abdômen e glúteos.",
        },
        {
          id: "core_prancha_lateral",
          nome: "Prancha lateral",
          duracao: "20–40s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Empurre o quadril para cima e mantenha alinhamento de ombro.",
        },
        {
          id: "core_dead_bug",
          nome: "Dead bug",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Coordenar respiração e movimento é essencial.",
        },
        {
          id: "core_bird_dog",
          nome: "Bird dog",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Trabalha estabilidade e coordenação motora.",
        },
      ],
    },

    // ====================== ESTABILIZAÇÃO ======================
    {
      nome: "Estabilização",
      exercicios: [
        {
          id: "core_prancha_estendida",
          nome: "Prancha estendida",
          duracao: "20–40s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Quanto mais distante as mãos ficam, mais difícil fica a estabilização.",
        },
        {
          id: "core_plank_reach",
          nome: "Plank reach",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Evite balançar o quadril enquanto alcança à frente.",
        },
        {
          id: "core_prancha_com_alternancia",
          nome: "Prancha com alternância de pernas",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Excelente para estabilização do quadril.",
        },
      ],
    },

    // ====================== CABOS ======================
    {
      nome: "Cabos",
      exercicios: [
        {
          id: "core_cable_crunch",
          nome: "Cable crunch (abdominal no cabo)",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Flexione a coluna, não o quadril; máxima ativação no abdômen.",
        },
        {
          id: "core_cable_twist",
          nome: "Torção no cabo",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Rotação controlada ativando oblíquos e transverso.",
        },
      ],
    },

    // ====================== MÁQUINAS / PESO ======================
    {
      nome: "Máquinas",
      exercicios: [
        {
          id: "core_abdominal_banco_declinado",
          nome: "Abdominal no banco declinado",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "30–60s",
          dica: "Controle a descida para evitar impulso.",
        },
        {
          id: "core_abdominal_mortal",
          nome: "Abdominal mortal (peso adicional)",
          duracao: "15–25s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Movimento avançado; comece leve.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: LOMBAR — 10 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.lombar = {
  label: "Lombar",
  categorias: [
    // ====================== EXTENSÕES ======================
    {
      nome: "Extensões lombares",
      exercicios: [
        {
          id: "lombar_extensao_banco",
          nome: "Extensão lombar no banco romano",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Mantenha o movimento curto e controlado, evitando hiperextensão exagerada.",
        },
        {
          id: "lombar_extensao_45",
          nome: "Extensão lombar 45°",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Ative glúteos e posteriores antes de subir.",
        },
        {
          id: "lombar_extensao_peso",
          nome: "Extensão lombar com peso",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Use carga leve; técnica é prioridade absoluta.",
        },
      ],
    },

    // ====================== GOOD MORNING ======================
    {
      nome: "Good Morning",
      exercicios: [
        {
          id: "lombar_goodmorning_barra",
          nome: "Good morning com barra",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Mantenha a coluna neutra e empurre o quadril para trás.",
        },
        {
          id: "lombar_goodmorning_halter",
          nome: "Good morning com halter",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Ótimo para iniciantes; amplitude mais controlada.",
        },
      ],
    },

    // ====================== GHD / HIP EXTENSION ======================
    {
      nome: "GHD e hip extension",
      exercicios: [
        {
          id: "lombar_ghd_extension",
          nome: "GHD extension",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "75–90s",
          dica: "Excelente para cadeia posterior; suba com controle.",
        },
        {
          id: "lombar_hip_extension",
          nome: "Hip extension",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "60–90s",
          dica: "Mantenha quadril encaixado e evite balanço.",
        },
      ],
    },

    // ====================== ISOMETRIAS ======================
    {
      nome: "Isometrias",
      exercicios: [
        {
          id: "lombar_superman",
          nome: "Superman",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Eleve braços e pernas mantendo a lombar ativa sem desconforto.",
        },
        {
          id: "lombar_prancha_extensora",
          nome: "Prancha extensora",
          duracao: "20–40s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Foque em manter coluna neutra e contração dos eretores da espinha.",
        },
      ],
    },

    // ====================== AVANÇADOS ======================
    {
      nome: "Avançados",
      exercicios: [
        {
          id: "lombar_bird_dog_avancado",
          nome: "Bird dog avançado (com extensão maior)",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Potencializa coordenação e estabilidade lombar.",
        },
      ],
    },
  ],
};

// =============================================================
//  GRUPO: ANTEBRAÇO — 10 exercícios (TRAINING ENGINE v3.0)
// =============================================================
trainingDatabase.antebraco = {
  label: "Antebraço",
  categorias: [
    // ====================== FLEXORES ======================
    {
      nome: "Flexores",
      exercicios: [
        {
          id: "ante_flexao_punho_barra",
          nome: "Flexão de punho com barra",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Apoie os antebraços e mova apenas os punhos para isolar os flexores.",
        },
        {
          id: "ante_flexao_punho_halter",
          nome: "Flexão de punho com halter",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Use amplitude total mantendo o movimento suave.",
        },
      ],
    },

    // ====================== EXTENSORES ======================
    {
      nome: "Extensores",
      exercicios: [
        {
          id: "ante_extensao_punho_barra",
          nome: "Extensão de punho com barra",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Evite mover o antebraço; apenas os punhos devem trabalhar.",
        },
        {
          id: "ante_extensao_punho_halter",
          nome: "Extensão de punho com halter",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Controle bem a descida para máximo estímulo.",
        },
      ],
    },

    // ====================== PEGADA ======================
    {
      nome: "Pegada / Grip",
      exercicios: [
        {
          id: "ante_farmer_walk",
          nome: "Farmer walk",
          duracao: "20–40s",
          series: "3–5 séries",
          descanso: "60–90s",
          dica: "Mantenha postura alta e core firme enquanto segura a carga.",
        },
        {
          id: "ante_dead_hang",
          nome: "Dead hang (pendurado na barra)",
          duracao: "20–40s",
          series: "2–4 séries",
          descanso: "60–90s",
          dica: "Excelente para força de pegada e resistência.",
        },
      ],
    },

    // ====================== ROTACIONAIS ======================
    {
      nome: "Rotacionais",
      exercicios: [
        {
          id: "ante_pronacao",
          nome: "Pronação com halter",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Gire o punho controlando totalmente a rotação.",
        },
        {
          id: "ante_supinacao",
          nome: "Supinação com halter",
          duracao: "20–30s",
          series: "3–4 séries",
          descanso: "45–75s",
          dica: "Movimento lento e preciso para ativação profunda do antebraço.",
        },
      ],
    },

    // ====================== AVANÇADOS ======================
    {
      nome: "Variações avançadas",
      exercicios: [
        {
          id: "ante_toalha_pullup_grip",
          nome: "Pegada com toalha na barra (grip training)",
          duracao: "15–25s",
          series: "2–3 séries",
          descanso: "75–120s",
          dica: "Um dos estímulos mais intensos para força de pegada.",
        }
      ],
    },
  ],
};
