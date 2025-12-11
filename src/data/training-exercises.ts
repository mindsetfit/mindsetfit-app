export type Exercise = {
  id: string;
  name: string;
  targetReps?: string;
  technique?: string;
  notes?: string;
};

export type MuscleGroup = {
  id: string;
  label: string;
  description?: string;
  exercises: Exercise[];
};

export const muscleGroups: MuscleGroup[] = [
  {
    id: "peito",
    label: "Peito",
    description: "Foco em peitoral maior, porções medial, superior e inferior.",
    exercises: [
      {
        id: "supino_reto",
        name: "Supino reto com barra",
        targetReps: "6–10",
        technique: "Escápulas contraídas, pés firmes no chão, barra na linha do peito."
      },
      {
        id: "supino_reto_halteres",
        name: "Supino reto com halteres",
        targetReps: "8–12",
        technique: "Controle total na descida, punhos alinhados, não bater halteres."
      },
      {
        id: "supino_inclinado_barra",
        name: "Supino inclinado com barra",
        targetReps: "8–12",
        technique: "Banco em 30°, barra buscando parte alta do peitoral."
      },
      {
        id: "supino_inclinado_halteres",
        name: "Supino inclinado com halteres",
        targetReps: "8–12",
        technique: "Trajetória em arco leve, foco em alongar bem o peitoral."
      },
      {
        id: "crucifixo_halteres",
        name: "Crucifixo reto com halteres",
        targetReps: "10–15",
        technique: "Cotovelos semi-flexionados, abrir sem perder tensão, não exagerar na amplitude."
      },
      {
        id: "crucifixo_maquina",
        name: "Peck deck / crucifixo máquina",
        targetReps: "10–15",
        technique: "Ombros estabilizados, foco em contrair o peitoral na fase final."
      },
      {
        id: "paralelas_peito",
        name: "Paralelas para peito",
        targetReps: "8–12",
        technique: "Leve inclinação à frente, cotovelos abrindo moderadamente."
      },
      {
        id: "crossover_cabos",
        name: "Crossover na polia",
        targetReps: "12–15",
        technique: "Trajetória controlada, cruzar as mãos levemente para máxima contração."
      }
    ]
  },
  {
    id: "costas",
    label: "Costas",
    description: "Dorsal, rombóides, trapézio e região média das costas.",
    exercises: [
      {
        id: "puxada_frontal",
        name: "Puxada frontal na barra/polia",
        targetReps: "8–12",
        technique: "Puxar até a linha do peito, sem balançar tronco."
      },
      {
        id: "puxada_suprimada",
        name: "Puxada supinada",
        targetReps: "8–12",
        technique: "Pegada mais fechada, foco em dorsais e bíceps."
      },
      {
        id: "barra_fixa",
        name: "Barra fixa (pegada pronada)",
        targetReps: "6–10",
        technique: "Subir até que o queixo passe a barra, controlar descida."
      },
      {
        id: "remada_curvada_barra",
        name: "Remada curvada com barra",
        targetReps: "8–12",
        technique: "Coluna neutra, barra na linha do umbigo."
      },
      {
        id: "remada_baixa",
        name: "Remada baixa na polia",
        targetReps: "10–12",
        technique: "Não girar tronco, puxar trazendo cotovelos para trás."
      },
      {
        id: "remada_unilateral_halter",
        name: "Remada unilateral com halter",
        targetReps: "10–12",
        technique: "Apoio firme no banco, foco em puxar com o dorso."
      },
      {
        id: "pulldown_corda",
        name: "Pulldown com corda",
        targetReps: "12–15",
        technique: "Extensão controlada, foco em ativar dorsais no final."
      }
    ]
  },
  {
    id: "ombros",
    label: "Ombros",
    description: "Deltoides anterior, medial e posterior.",
    exercises: [
      {
        id: "desenvolvimento_halter",
        name: "Desenvolvimento com halteres",
        targetReps: "8–12",
        technique: "Começar na linha do queixo, subir sem estender totalmente os cotovelos."
      },
      {
        id: "desenvolvimento_maquina",
        name: "Desenvolvimento sentado na máquina",
        targetReps: "8–12",
        technique: "Coluna apoiada, trajetória reta e controlada."
      },
      {
        id: "elevacao_lateral",
        name: "Elevação lateral com halteres",
        targetReps: "12–15",
        technique: "Braços levemente flexionados, subir até linha do ombro."
      },
      {
        id: "elevacao_frontal",
        name: "Elevação frontal com halteres/barra",
        targetReps: "10–15",
        technique: "Não balançar tronco, subir até linha dos ombros."
      },
      {
        id: "crucifixo_inverso_maquina",
        name: "Crucifixo inverso (posterior) na máquina",
        targetReps: "12–15",
        technique: "Foco em deltoide posterior, cotovelos altos."
      },
      {
        id: "remada_alta_barra",
        name: "Remada alta com barra/halter",
        targetReps: "10–12",
        technique: "Puxar na linha do queixo, cotovelos acima das mãos."
      }
    ]
  },
  {
    id: "biceps",
    label: "Bíceps",
    description: "Bíceps braquial e braquiorradial.",
    exercises: [
      {
        id: "rosca_direta_barra",
        name: "Rosca direta com barra",
        targetReps: "8–12",
        technique: "Cotovelos fixos ao lado do corpo, sem usar lombar."
      },
      {
        id: "rosca_haltern",
        name: "Rosca alternada com halteres",
        targetReps: "10–12",
        technique: "Rotação supinando o punho na subida."
      },
      {
        id: "rosca_martelo",
        name: "Rosca martelo",
        targetReps: "10–12",
        technique: "Pegada neutra, foco em braquiorradial."
      },
      {
        id: "rosca_scott",
        name: "Rosca Scott na máquina/banco",
        targetReps: "10–12",
        technique: "Descer até quase estender, subir sem perder tensão."
      },
      {
        id: "rosca_polia",
        name: "Rosca na polia baixa",
        targetReps: "12–15",
        technique: "Tensão contínua, sem descansar embaixo."
      }
    ]
  },
  {
    id: "triceps",
    label: "Tríceps",
    description: "Porções longa, medial e lateral do tríceps.",
    exercises: [
      {
        id: "triceps_polia_barra",
        name: "Tríceps na polia com barra reta",
        targetReps: "10–15",
        technique: "Cotovelos fixos, extensão completa sem avançar ombros."
      },
      {
        id: "triceps_polia_corda",
        name: "Tríceps na polia com corda",
        targetReps: "10–15",
        technique: "Abrir as pontas da corda no final do movimento."
      },
      {
        id: "mergulho_banco",
        name: "Mergulho entre bancos",
        targetReps: "8–12",
        technique: "Quadril próximo ao banco, controlar descida."
      },
      {
        id: "triceps_frances",
        name: "Tríceps francês com halter/barra",
        targetReps: "8–12",
        technique: "Cotovelos apontados para o teto, descer atrás da cabeça."
      },
      {
        id: "triceps_testa",
        name: "Tríceps testa com barra",
        targetReps: "8–12",
        technique: "Barra em direção à testa ou acima, sem abrir demais os cotovelos."
      }
    ]
  },
  {
    id: "pernas",
    label: "Pernas",
    description: "Quadríceps, posteriores e adutores.",
    exercises: [
      {
        id: "agachamento_livre",
        name: "Agachamento livre com barra",
        targetReps: "6–10",
        technique: "Coluna neutra, joelhos alinhados com pés, descer controlando."
      },
      {
        id: "agachamento_smith",
        name: "Agachamento no smith",
        targetReps: "8–12",
        technique: "Pés ajustados conforme foco, descer mantendo controle."
      },
      {
        id: "leg_press",
        name: "Leg press 45°",
        targetReps: "10–15",
        technique: "Não destravar completamente os joelhos, amplitude confortável."
      },
      {
        id: "cadeira_extensora",
        name: "Cadeira extensora",
        targetReps: "12–15",
        technique: "Pausa de 1s no pico de contração."
      },
      {
        id: "mesa_flexora",
        name: "Mesa flexora",
        targetReps: "10–15",
        technique: "Evitar tirar o quadril do banco."
      },
      {
        id: "stiff_barra",
        name: "Stiff com barra/halteres",
        targetReps: "8–12",
        technique: "Leve flexão de joelhos, foco em alongar posteriores."
      },
      {
        id: "afundo_passada",
        name: "Afundo / passada com halteres",
        targetReps: "10–12 (cada perna)",
        technique: "Passada firme, joelho de trás indo em direção ao chão."
      },
      {
        id: "adutora",
        name: "Cadeira adutora",
        targetReps: "12–15",
        technique: "Movimento controlado, sem balanço."
      }
    ]
  },
  {
    id: "gluteos",
    label: "Glúteos",
    description: "Glúteo máximo, médio e mínimo.",
    exercises: [
      {
        id: "hip_thrust_barra",
        name: "Hip thrust com barra",
        targetReps: "8–12",
        technique: "Queixo levemente recolhido, foco em contrair glúteos no topo."
      },
      {
        id: "agachamento_sumô",
        name: "Agachamento sumô",
        targetReps: "8–12",
        technique: "Pés afastados, pontas levemente para fora, descer mantendo joelhos alinhados."
      },
      {
        id: "avanco_esteira",
        name: "Avanço caminhando",
        targetReps: "10–12 (cada perna)",
        technique: "Passadas firmes, tronco levemente inclinado à frente."
      },
      {
        id: "gluteo_maquina",
        name: "Glúteo máquina",
        targetReps: "12–15",
        technique: "Extensão completa do quadril, sem arquear lombar."
      },
      {
        id: "abducao_maquina",
        name: "Abdução de quadril na máquina",
        targetReps: "12–20",
        technique: "Pausar 1s na contração máxima."
      }
    ]
  },
  {
    id: "core",
    label: "Core",
    description: "Abdômen, oblíquos e estabilizadores lombares.",
    exercises: [
      {
        id: "prancha",
        name: "Prancha ventral",
        targetReps: "20–40s",
        technique: "Corpo em linha reta, ativar abdômen e glúteos."
      },
      {
        id: "prancha_lateral",
        name: "Prancha lateral",
        targetReps: "20–40s (cada lado)",
        technique: "Quadril alinhado, não deixar cair."
      },
      {
        id: "crunch",
        name: "Abdominal crunch",
        targetReps: "12–20",
        technique: "Subir tirando escápulas do chão, sem puxar o pescoço."
      },
      {
        id: "elevacao_pernas",
        name: "Elevação de pernas na barra/banco",
        targetReps: "10–15",
        technique: "Evitar balançar, subir controlando."
      },
      {
        id: "abdominal_cabo",
        name: "Abdominal no cabo ajoelhado",
        targetReps: "12–15",
        technique: "Flexionar coluna trazendo peitoral em direção ao quadril."
      },
      {
        id: "woodchopper",
        name: "Rotação de tronco no cabo (woodchopper)",
        targetReps: "10–15 (cada lado)",
        technique: "Rotação controlada, sem girar apenas braços."
      }
    ]
  }
];

export default muscleGroups;
