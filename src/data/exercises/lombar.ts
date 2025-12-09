export const lombar = [
  // ------------------ EXTENSÃO LOMBAR ------------------
  {
    id: "extensao_lombar_maquina",
    nome: "Extensão Lombar na Máquina",
    grupos: ["Lombar"],
    tipo: "Máquina",
    execucao: "Extensão de Coluna",
    thumbnail: "/exercicios/extensao_lombar_maquina.jpg",
    tags: ["iniciante", "guiado"]
  },
  {
    id: "extensao_lombar_45",
    nome: "Hiperextensão 45°",
    grupos: ["Lombar", "Posterior"],
    tipo: "Banco 45°",
    execucao: "Extensão Lombar",
    thumbnail: "/exercicios/extensao_lombar_45.jpg",
    tags: ["classico", "intermediario"]
  },
  {
    id: "extensao_lombar_horizontal",
    nome: "Hiperextensão Horizontal",
    grupos: ["Lombar", "Glúteos"],
    tipo: "Banco Reto",
    execucao: "Extensão Horizontal",
    thumbnail: "/exercicios/extensao_lombar_horizontal.jpg",
    tags: ["cadeia_posterior"]
  },

  // ------------------ SOLO / FUNCIONAL ------------------
  {
    id: "superman",
    nome: "Superman",
    grupos: ["Lombar", "Core"],
    tipo: "Solo",
    execucao: "Elevação Simultânea",
    thumbnail: "/exercicios/superman.jpg",
    tags: ["iniciante", "ativacao"]
  },
  {
    id: "superman_alternado",
    nome: "Superman Alternado",
    grupos: ["Lombar", "Core"],
    tipo: "Solo",
    execucao: "Alternado",
    thumbnail: "/exercicios/superman_alternado.jpg",
    tags: ["core_profundo"]
  },
  {
    id: "bird_dog_lombar",
    nome: "Bird Dog (ênfase lombar)",
    grupos: ["Lombar", "Core"],
    tipo: "Solo",
    execucao: "Contralateral",
    thumbnail: "/exercicios/bird_dog_lombar.jpg",
    tags: ["estabilidade", "controle"]
  },
  {
    id: "extensao_lombar_solo",
    nome: "Extensão Lombar no Solo",
    grupos: ["Lombar"],
    tipo: "Solo",
    execucao: "Levantamento de Peito",
    thumbnail: "/exercicios/extensao_lombar_solo.jpg",
    tags: ["iniciante"]
  },

  // ------------------ BOLA SUÍÇA ------------------
  {
    id: "extensao_lombar_bola",
    nome: "Extensão Lombar na Bola Suíça",
    grupos: ["Lombar", "Posterior"],
    tipo: "Bola Suíça",
    execucao: "Extensão + Instabilidade",
    thumbnail: "/exercicios/extensao_lombar_bola.jpg",
    tags: ["instabilidade", "core"]
  },
  {
    id: "superman_bola",
    nome: "Superman na Bola Suíça",
    grupos: ["Lombar", "Core"],
    tipo: "Bola Suíça",
    execucao: "Extensão com Apoio",
    thumbnail: "/exercicios/superman_bola.jpg",
    tags: ["desafio", "mobilidade"]
  },

  // ------------------ TRX / SUSPENSÃO ------------------
  {
    id: "extensao_lombar_trx",
    nome: "Extensão Lombar no TRX",
    grupos: ["Lombar", "Core"],
    tipo: "TRX",
    execucao: "Suspenso",
    thumbnail: "/exercicios/extensao_lombar_trx.jpg",
    tags: ["instabilidade", "avancado"]
  },

  // ------------------ VARIAÇÕES AVANÇADAS ------------------
  {
    id: "goodmorning_barra",
    nome: "Good Morning com Barra",
    grupos: ["Lombar", "Posterior"],
    tipo: "Musculação",
    execucao: "Flexão de Quadril",
    thumbnail: "/exercicios/goodmorning_barra.jpg",
    tags: ["avancado", "cadeia_posterior"]
  },
  {
    id: "goodmorning_halter",
    nome: "Good Morning com Halteres",
    grupos: ["Lombar", "Posterior"],
    tipo: "Musculação",
    execucao: "Halteres",
    thumbnail: "/exercicios/goodmorning_halter.jpg",
    tags: ["controle"]
  },
  {
    id: "hiperextensao_unilateral",
    nome: "Hiperextensão Unilateral",
    grupos: ["Lombar", "Glúteos"],
    tipo: "Banco 45°",
    execucao: "Unilateral",
    thumbnail: "/exercicios/hiperextensao_unilateral.jpg",
    tags: ["unilateral", "forca"]
  },
  {
    id: "extensao_lombar_polia",
    nome: "Extensão Lombar na Polia",
    grupos: ["Lombar"],
    tipo: "Polia",
    execucao: "Retroversão + Extensão",
    thumbnail: "/exercicios/extensao_lombar_polia.jpg",
    tags: ["tensao_constante"]
  }
];

// ===============================================
// LOMBAR / PARAVERTEBRAIS / EXTENSÃO DE COLUNA
// ===============================================

export const lombar_extra = [

  // ===== EXTENSÃO DE COLUNA / LOMBAR =====
  { name: "Extensão Lombar no Chão", category: "Lombar", type: "Solo" },
  { name: "Extensão Lombar — Elevação do Tronco", category: "Lombar", type: "Solo" },
  { name: "Extensão Lombar Avançada", category: "Lombar", type: "Avançado" },

  // ===== SUPERMAN =====
  { name: "Superman Tradicional", category: "Lombar / Coluna", type: "Solo" },
  { name: "Superman Alternado (Braço e Perna)", category: "Lombar / Coluna", type: "Solo" },
  { name: "Superman com Pausa Isométrica", category: "Lombar / Coluna", type: "Isométrico" },

  // ===== CORE POSTERIOR / ESTABILIZAÇÃO =====
  { name: "Bird Dog (Elevação Alternada)", category: "Coluna / Core Posterior", type: "Estabilidade" },
  { name: "Bird Dog com Pausa", category: "Coluna / Core Posterior", type: "Isométrico" },

  // ===== REMADAS QUE ATIVAM PARAVERTEBRAIS =====
  { name: "Remada Baixa com Elástico", category: "Lombar / Costas", type: "Elástico" },
  { name: "Remada Curvada com Carga", category: "Lombar / Costas", type: "Carga" },

  // ===== ISOMETRIAS =====
  { name: "Isometria Lombar (Retenção de Tronco)", category: "Lombar", type: "Isométrico" },
  { name: "Isometria de Extensão com Joelhos no Chão", category: "Lombar", type: "Isométrico" },

  // ===== ALONGAMENTO ATIVO / MOBILIDADE =====
  { name: "Mobilidade de Coluna — Gato e Camelo", category: "Mobilidade", type: "Solo" },
  { name: "Alongamento Lombar com Flexão do Tronco", category: "Mobilidade", type: "Solo" },
  { name: "Alongamento em Criança (Child's Pose)", category: "Mobilidade", type: "Solo" },

  // ===== VARIAÇÕES ADICIONAIS =====
  { name: "Extensão Lombar com Halter no Peito", category: "Lombar", type: "Carga" },
  { name: "Bom Dia (Good Morning) com Vassoura", category: "Lombar / Posterior", type: "Improvisado" },
  { name: "Bom Dia com Elástico", category: "Lombar / Posterior", type: "Elástico" },

];

