export const costas = [
  // ------------------ PUXADAS ------------------
  {
    id: "puxada_frente_aberta",
    nome: "Puxada na Frente Pegada Aberta",
    grupos: ["Costas", "Dorsal"],
    tipo: "Máquina / Polia",
    execucao: "Puxada Alta",
    thumbnail: "/exercicios/puxada_frente_aberta.jpg",
    tags: ["dorsal", "amplitude"]
  },
  {
    id: "puxada_frente_fecha",
    nome: "Puxada na Frente Pegada Fechada",
    grupos: ["Costas"],
    tipo: "Polia",
    execucao: "Pegada Fechada",
    thumbnail: "/exercicios/puxada_frente_fechada.jpg",
    tags: ["latissimo", "forca"]
  },
  {
    id: "puxada_neutra",
    nome: "Puxada Pegada Neutra",
    grupos: ["Costas"],
    tipo: "Polia",
    execucao: "Neutro",
    thumbnail: "/exercicios/puxada_neutra.jpg",
    tags: ["latissimo", "profundidade"]
  },
  {
    id: "puxada_inversa",
    nome: "Puxada Inversa",
    grupos: ["Costas", "Bíceps"],
    tipo: "Polia",
    execucao: "Supinada",
    thumbnail: "/exercicios/puxada_inversa.jpg",
    tags: ["ênfase_biceps"]
  },
  {
    id: "pulldown_maquina",
    nome: "Pulldown na Máquina",
    grupos: ["Dorsal"],
    tipo: "Máquina",
    execucao: "Frontal",
    thumbnail: "/exercicios/pulldown_maquina.jpg",
    tags: ["guiado", "iniciante"]
  },
  {
    id: "barra_fixa",
    nome: "Barra Fixa",
    grupos: ["Costas", "Bíceps"],
    tipo: "Calistenia",
    execucao: "Suspenso",
    thumbnail: "/exercicios/barra_fixa.jpg",
    tags: ["forca", "avancado"]
  },
  {
    id: "barra_fixa_supinada",
    nome: "Barra Fixa Supinada",
    grupos: ["Costas", "Bíceps"],
    tipo: "Calistenia",
    execucao: "Supinada",
    thumbnail: "/exercicios/barra_fixa_supinada.jpg",
    tags: ["ênfase_biceps"]
  },

  // ------------------ REMADAS ------------------
  {
    id: "remada_curvada_barra",
    nome: "Remada Curvada com Barra",
    grupos: ["Costas", "Trapézio Médio"],
    tipo: "Musculação",
    execucao: "Barra",
    thumbnail: "/exercicios/remada_curvada_barra.jpg",
    tags: ["forca", "classico"]
  },
  {
    id: "remada_curvada_halter",
    nome: "Remada Curvada com Halteres",
    grupos: ["Costas"],
    tipo: "Musculação",
    execucao: "Halteres",
    thumbnail: "/exercicios/remada_curvada_halter.jpg",
    tags: ["amplitude"]
  },
  {
    id: "remada_unilateral_banco",
    nome: "Remada Unilateral no Banco",
    grupos: ["Costas"],
    tipo: "Musculação",
    execucao: "Halter Unilateral",
    thumbnail: "/exercicios/remada_unilateral_banco.jpg",
    tags: ["isolamento", "unilateral"]
  },
  {
    id: "remada_baixa_cabos",
    nome: "Remada Baixa na Polia",
    grupos: ["Costas"],
    tipo: "Polia",
    execucao: "Baixa",
    thumbnail: "/exercicios/remada_baixa.jpg",
    tags: ["tensao_constante"]
  },
  {
    id: "remada_maquina",
    nome: "Remada Máquina",
    grupos: ["Costas"],
    tipo: "Máquina",
    execucao: "Guiado",
    thumbnail: "/exercicios/remada_maquina.jpg",
    tags: ["iniciante"]
  },
  {
    id: "remada_cavalinho",
    nome: "Remada Cavalinho (T-Bar)",
    grupos: ["Costas"],
    tipo: "Musculação",
    execucao: "T-Bar",
    thumbnail: "/exercicios/remada_cavalinho.jpg",
    tags: ["forca", "grossa"]
  },
  {
    id: "remada_banco_inclinado",
    nome: "Remada no Banco Inclinado",
    grupos: ["Costas"],
    tipo: "Musculação",
    execucao: "Halteres no Banco",
    thumbnail: "/exercicios/remada_banco_inclinado.jpg",
    tags: ["sem_roubo", "isolamento"]
  },
  {
    id: "remada_trx",
    nome: "Remada no TRX",
    grupos: ["Costas"],
    tipo: "TRX",
    execucao: "Suspensão",
    thumbnail: "/exercicios/remada_trx.jpg",
    tags: ["core", "intermediario"]
  },

  // ------------------ TRAPÉZIO ------------------
  {
    id: "encolhimento_halter",
    nome: "Encolhimento com Halteres",
    grupos: ["Trapézio Superior"],
    tipo: "Musculação",
    execucao: "Halteres",
    thumbnail: "/exercicios/encolhimento_halter.jpg",
    tags: ["isolamento"]
  },
  {
    id: "encolhimento_barra",
    nome: "Encolhimento com Barra",
    grupos: ["Trapézio Superior"],
    tipo: "Musculação",
    execucao: "Barra",
    thumbnail: "/exercicios/encolhimento_barra.jpg",
    tags: ["forca"]
  },
  {
    id: "remada_alta",
    nome: "Remada Alta",
    grupos: ["Trapézio", "Deltoides"],
    tipo: "Musculação",
    execucao: "Barra ou Halteres",
    thumbnail: "/exercicios/remada_alta.jpg",
    tags: ["ombro", "trap_medio"]
  },

  // ------------------ EXERCÍCIOS AVANÇADOS / FUNCIONAIS ------------------
  {
    id: "levantamento_terra",
    nome: "Levantamento Terra",
    grupos: ["Costas", "Posterior", "Glúteos"],
    tipo: "Musculação",
    execucao: "Barra",
    thumbnail: "/exercicios/levantamento_terra.jpg",
    tags: ["forca_total", "cadeia_posterior"]
  },
  {
    id: "levantamento_terra_rumano",
    nome: "Levantamento Terra Romeno",
    grupos: ["Posterior", "Glúteos", "Lombar"],
    tipo: "Musculação",
    execucao: "Barra ou Halteres",
    thumbnail: "/exercicios/terra_romeno.jpg",
    tags: ["alongamento"]
  },
  {
    id: "pullover_costas",
    nome: "Pullover (ênfase dorsal)",
    grupos: ["Dorsal"],
    tipo: "Musculação",
    execucao: "Halter",
    thumbnail: "/exercicios/pullover_costas.jpg",
    tags: ["amplitude", "isolamento"]
  }
];

// ==========================
// COSTAS / DORSAL / LOMBAR — NOVAS INCLUSÕES
// ==========================

export const costas_extra = [

  // ===== BARRA HORIZONTAL =====
  { name: "Barra Horizontal", category: "Costas", type: "Em casa" },

  // ===== PUXADAS / PULLDOWN =====
  { name: "Pulldown – Elástico", category: "Dorsal", type: "Elástico" },
  { name: "Pulldown – Faixa Elástica", category: "Dorsal", type: "Faixa Elástica" },

  // ===== REMADAS EM PÉ (ELÁSTICO / FAIXA) =====
  { name: "Remada Aberta em Pé – Elástico", category: "Costas", type: "Elástico" },
  { name: "Remada Aberta em Pé – Faixa Elástica", category: "Costas", type: "Faixa Elástica" },

  // ===== REMADAS SENTADO (ELÁSTICO / FAIXA) =====
  { name: "Remada Aberta Sentado – Elástico", category: "Costas", type: "Elástico" },
  { name: "Remada Aberta Sentado – Faixa Elástica", category: "Costas", type: "Faixa Elástica" },

  // ===== REMADA CURVADA =====
  { name: "Remada Curvada em Pé – Elástico", category: "Costas", type: "Elástico" },
  { name: "Remada Curvada em Pé – Faixa Elástica", category: "Costas", type: "Faixa Elástica" },

  // ===== REMADA FECHADA (PÉ / SENTADO) =====
  { name: "Remada Fechada em Pé – Elástico", category: "Costas", type: "Elástico" },
  { name: "Remada Fechada Sentado – Elástico", category: "Costas", type: "Elástico" },
  { name: "Remada Fechada Sentado – Faixa Elástica", category: "Costas", type: "Faixa Elástica" },

  // ===== REMADA UNILATERAL =====
  { name: "Remada Fechada Unilateral", category: "Costas", type: "Em casa" },

  // ===== EXERCÍCIOS DE DORSAL / COSTAS COM CADEIRA =====
  { name: "Dorsal com Cadeiras", category: "Costas / Dorsal", type: "Em casa" },

  // ===== LOMBAR / PARAVERTEBRAIS =====
  // Seus prints incluem stiff unilateral (já listado no posterior), mas presente aqui como sinergista
  { name: "Extensão Lombar no Chão", category: "Lombar", type: "Em casa" },

  // ===== CORE QUE ENVOLVE COSTAS =====
  { name: "Prancha + Remada", category: "Costas / Core", type: "Em casa" },

  // ===== MOVIMENTOS DE ESTABILIZAÇÃO / POSTURA =====
  { name: "Pancha + Flexão de Quadril", category: "Core / Estabilização", type: "Em casa" },

];

