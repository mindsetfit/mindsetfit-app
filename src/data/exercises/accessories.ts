// =====================================================
// ACESSÓRIOS DE TREINO — PREMIUM MINDSETFIT
// Kettlebell • TRX • Corda Naval • Medicine Ball • Bandas
// =====================================================

export const accessoryExercises = {

  // =====================================================
  // KETTLEBELL — 20 EXERCÍCIOS COMPLETOS
  // =====================================================
  kettlebell: [
    "Kettlebell Swing",
    "Kettlebell Clean",
    "Kettlebell Snatch",
    "Kettlebell Goblet Squat",
    "Kettlebell Front Squat",
    "Kettlebell Deadlift",
    "Kettlebell Sumo Deadlift",
    "Kettlebell Overhead Press",
    "Kettlebell Push Press",
    "Kettlebell Thruster",
    "Kettlebell Farmer Walk",
    "Kettlebell Rack Walk",
    "Kettlebell Turkish Get Up",
    "Kettlebell High Pull",
    "Kettlebell Windmill",
    "Kettlebell Renegade Row",
    "Kettlebell Lunge",
    "Kettlebell Reverse Lunge",
    "Kettlebell Swing Unilateral",
    "Kettlebell Snatch Alternado"
  ],

  // =====================================================
  // CORDA NAVAL — 10 EXERCÍCIOS
  // =====================================================
  cordaNaval: [
    "Ondas Alternadas",
    "Ondas Duplas",
    "Ondas Circulares",
    "Slams Verticais",
    "Slams Laterais",
    "Ondas em Agachamento",
    "Ondas com Avanço",
    "Movimento de Serrote",
    "Golpes Explosivos",
    "Corda Naval com Burpee"
  ],

  // =====================================================
  // MEDICINE BALL — 15 EXERCÍCIOS
  // =====================================================
  medicineBall: [
    "Wall Ball",
    "Chest Pass",
    "Rotational Slam",
    "Overhead Slam",
    "Side Toss",
    "Russian Twist com Ball",
    "Squat com Medicine Ball",
    "Lunge + Rotation",
    "Sit-up com Ball",
    "Burpee Ball Slam",
    "Clean com Ball",
    "Throw Against Wall",
    "V-Up com Ball",
    "Ball Slam Unilateral",
    "Ball Carry"
  ],

  // =====================================================
  // TRX / SUSPENSÃO — 15 EXERCÍCIOS
  // =====================================================
  trx: [
    "TRX Row",
    "TRX Low Row",
    "TRX Chest Press",
    "TRX Fly",
    "TRX Y-Raise",
    "TRX High Row",
    "TRX Face Pull",
    "TRX Biceps Curl",
    "TRX Triceps Extension",
    "TRX Pike",
    "TRX Mountain Climber",
    "TRX Squat",
    "TRX Lunge",
    "TRX Hamstring Curl",
    "TRX Plank"
  ],

  // =====================================================
  // POWERBANDS (Elásticos de Puxada) — 15 EXERCÍCIOS
  // =====================================================
  powerBands: [
    "Band Deadlift",
    "Band Squat",
    "Band Chest Press",
    "Band Row",
    "Band Overhead Press",
    "Band Face Pull",
    "Band Pull Apart",
    "Band Curl",
    "Band Triceps Pressdown",
    "Band Kickback",
    "Band Lateral Walk",
    "Band Glute Bridge",
    "Band Good Morning",
    "Band Hip Thrust",
    "Band Pallof Press"
  ],

  // =====================================================
  // MINI BANDS — 10 EXERCÍCIOS
  // =====================================================
  miniBands: [
    "Abdução Lateral Mini Band",
    "Glute Bridge Mini Band",
    "Kickback Mini Band",
    "Squat Mini Band",
    "Lateral Walk Mini Band",
    "Monster Walk Mini Band",
    "Clamshell Mini Band",
    "Fire Hydrant Mini Band",
    "Posterior Mini Band Curl",
    "Lateral Raise Mini Band"
  ],

  // =====================================================
  // STEP / PLATAFORMA — 10 EXERCÍCIOS
  // =====================================================
  step: [
    "Step-up Alternado",
    "Step Jump",
    "Lateral Step-up",
    "Decline Push-up no Step",
    "Box Jump",
    "Bulgarian Split Squat no Step",
    "Calf Raise no Step",
    "Agachamento no Step",
    "Burpee Step-over",
    "Mountain Climber no Step"
  ],

  // =====================================================
  // ANILHAS / PLACAS — 10 EXERCÍCIOS
  // =====================================================
  plate: [
    "Plate Front Raise",
    "Plate Lateral Raise",
    "Plate Press",
    "Plate Squat",
    "Plate Lunge",
    "Plate Russian Twist",
    "Plate Deadlift",
    "Plate Halo",
    "Plate Floor Press",
    "Plate Pullover"
  ],
};


// =====================================================
// TREINOS COMPLETOS — ACESSÓRIOS POR NÍVEL
// =====================================================

export const accessoryWorkouts = {

  // -------------------------
  // INICIANTE
  // -------------------------
  iniciante: [
    {
      name: "Acessórios Iniciante — Full Body",
      structure: [
        "3 Rounds:",
        "12 Kettlebell Deadlift",
        "10 TRX Row",
        "12 Step-up",
        "15 Medicine Ball Chest Pass"
      ]
    },
    {
      name: "Iniciante — Condicionamento com Acessórios",
      structure: [
        "3 Rounds:",
        "20s Corda Naval Ondas",
        "12 Kettlebell Goblet Squat",
        "10 TRX Chest Press"
      ]
    }
  ],

  // -------------------------
  // INTERMEDIÁRIO
  // -------------------------
  intermediario: [
    {
      name: "Intermediário — Força + Resistência",
      structure: [
        "4 Rounds:",
        "15 Kettlebell Swing",
        "12 TRX Row",
        "10 Overhead Slam",
        "12 Band Squat"
      ]
    },
    {
      name: "Intermediário — Funcional Acessórios",
      structure: [
        "4 Rounds:",
        "15 Medicine Ball Side Toss",
        "12 Kettlebell Thruster",
        "20s Corda Naval Slams"
      ]
    }
  ],

  // -------------------------
  // AVANÇADO
  // -------------------------
  avancado: [
    {
      name: "Avançado — HIIT Acessórios",
      structure: [
        "5 Rounds:",
        "20 Kettlebell Swing Pesado",
        "15 TRX Pike",
        "10 Ball Slams Explosivos",
        "30s Corda Naval Ondas Duplas"
      ]
    },
    {
      name: "Avançado — Power & Strength",
      structure: [
        "5 Rounds:",
        "15 Kettlebell Snatch",
        "12 TRX Fly",
        "15 Rotational Slam",
        "15 PowerBand Good Morning"
      ]
    }
  ]
};

