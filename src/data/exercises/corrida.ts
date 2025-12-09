
// =====================================================
// PLANILHAS DE CORRIDA — OBJETIVO, TEMPO, PACE E NÍVEL
// =====================================================

export const corrida_extra = {

  // ===================================================================
  // INICIANTE ABSOLUTO — DO ZERO AO 5K
  // ===================================================================
  iniciante: [
    {
      name: "Iniciante — Semana 1",
      goal: "Adaptar corpo ao impacto",
      structure: [
        "Dia 1 — 1 min corrida / 2 min caminhada x 8",
        "Dia 2 — Caminhada rápida 30 min",
        "Dia 3 — 1 min corrida / 2 min caminhada x 10"
      ]
    },
    {
      name: "Iniciante — Semana 2",
      goal: "Primeiro aumento de estímulo",
      structure: [
        "Dia 1 — 2 min corrida / 2 min caminhada x 6",
        "Dia 2 — Caminhada rápida 35 min",
        "Dia 3 — 2 min corrida / 1 min caminhada x 8"
      ]
    },
    {
      name: "Iniciante — Semana 3",
      goal: "Primeira corrida contínua leve",
      structure: [
        "Dia 1 — 5 min corrida / 2 min caminhada x 3",
        "Dia 2 — Caminhada 40 min",
        "Dia 3 — Corrida contínua 10 min + 5 min caminhada + 10 min corrida"
      ]
    },
    {
      name: "Iniciante — Semana 4",
      goal: "Construção para 5K",
      structure: [
        "Dia 1 — Corrida 12 min / caminhada 2 min / corrida 12 min",
        "Dia 2 — Caminhada rápida 45 min",
        "Dia 3 — Corrida contínua 20 min"
      ]
    },
    {
      name: "Iniciante — Semana 5 (Teste)",
      goal: "Primeira simulação de 5K",
      structure: [
        "Dia 1 — Corrida 25 min",
        "Dia 2 — 30 min caminhada rápida",
        "Dia 3 — Teste: correr o máximo possível (objetivo: 3 a 5 km)"
      ]
    }
  ],

  // ===================================================================
  // INTERMEDIÁRIO — MELHORAR RITMO / 5K / 10K
  // ===================================================================
  intermediario: [

    // ---------------- 5K ----------------
    {
      name: "5K — Ritmo Moderado",
      goal: "Correr 5K com conforto",
      structure: [
        "Dia 1 — 3 km ritmo leve",
        "Dia 2 — Intervalado: 6x 400m forte + 200m leve",
        "Dia 3 — 5 km contínuos"
      ]
    },

    {
      name: "5K — Ritmo Forte",
      goal: "Aumentar velocidade",
      structure: [
        "Dia 1 — 4 km leve",
        "Dia 2 — 8x 1 min forte / 1 min leve",
        "Dia 3 — 5 km ritmo moderado"
      ]
    },

    // ---------------- 10K ----------------
    {
      name: "10K — Base Sólida",
      goal: "Chegar aos 10 km",
      structure: [
        "Dia 1 — 5 km leve",
        "Dia 2 — 10x 1 min forte + 1 min leve",
        "Dia 3 — 7 km contínuos"
      ]
    },

    {
      name: "10K — Performance",
      goal: "Melhorar pace nos 10 km",
      structure: [
        "Dia 1 — 6 km leve",
        "Dia 2 — 4 km moderado + 5 tiros de 200m forte",
        "Dia 3 — 8 km contínuos"
      ]
    }

  ],

  // ===================================================================
  // AVANÇADO — 10K, 15K E MEIA MARATONA (21K)
  // ===================================================================
  avancado: [

    // ---------------- 10K avançado ----------------
    {
      name: "10K — Avançado",
      goal: "Ritmo agressivo",
      structure: [
        "Dia 1 — 6 km moderado",
        "Dia 2 — 12x 400m forte (pace-alvo) / 200m leve",
        "Dia 3 — 10 km ritmo moderado-forte"
      ]
    },

    // ---------------- 15K ----------------
    {
      name: "15K — Construção de resistência",
      goal: "Dominar a distância",
      structure: [
        "Dia 1 — 7 km leve",
        "Dia 2 — Fartlek 40 min (leve > moderado > forte)",
        "Dia 3 — 12 a 15 km contínuos"
      ]
    },

    // ---------------- 21K MEIA MARATONA ----------------
    {
      name: "21K — Base",
      goal: "Completar meia maratona",
      structure: [
        "Dia 1 — 8 km leve",
        "Dia 2 — 6 km moderado",
        "Dia 3 — Longão 14 km"
      ]
    },

    {
      name: "21K — Ritmo",
      goal: "Melhorar pace médio",
      structure: [
        "Dia 1 — 10 km leve",
        "Dia 2 — 6 km moderado + 5 tiros de 400m",
        "Dia 3 — Longão 18 km"
      ]
    },

    {
      name: "21K — Performance",
      goal: "Correr forte por toda a prova",
      structure: [
        "Dia 1 — 10 km moderado",
        "Dia 2 — 10x 800m forte (pace-alvo)",
        "Dia 3 — 20 km contínuos"
      ]
    }

  ],

  // ===================================================================
  // TREINOS BASEADOS EM PACE
  // ===================================================================
  pace: [
    {
      name: "Treino de Pace — 5K",
      structure: [
        "1 km leve",
        "3 km no pace-alvo",
        "1 km leve"
      ]
    },
    {
      name: "Treino de Pace — 10K",
      structure: [
        "2 km leve",
        "6 km pace moderado",
        "2 km leve"
      ]
    },
    {
      name: "Treino de Pace — Intervalado",
      structure: [
        "2 km leve",
        "6x 1 km no pace desejado (com 2 min descanso)",
        "1 km leve"
      ]
    }
  ],

  // ===================================================================
  // TÉCNICA DE CORRIDA / RESPIRAÇÃO / POSTURA
  // ===================================================================
  tecnica: [
    { name: "Skipping Alto", notes: "Melhora coordenação e passada" },
    { name: "Anfersen (calcanhar no glúteo)", notes: "Aprimora ciclo de passada" },
    { name: "Passada Rápida (cadência alta)", notes: "Reduz impacto e aumenta eficiência" },
    { name: "Respiração 3:2", notes: "3 passos inspirando / 2 expirando" },
    { name: "Exercício de Postura — Tronco Leve à Frente", notes: "Melhora economia de movimento" }
  ],

  // ===================================================================
  // RECUPERAÇÃO / MOBILIDADE DO CORREDOR
  // ===================================================================
  recuperacao: [
    "Alongamento de posterior",
    "Mobilidade de tornozelo",
    "Alongamento de panturrilha",
    "Mobilidade de quadril",
    "Respiração diafragmática pós-corrida"
  ]

};

