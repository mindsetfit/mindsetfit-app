// src/data/exercises/weekly_plan.ts

export type Exercise = {
  id: string;
  name: string;
  muscleGroup: string;
  equipment?: string;
  sets: number;
  reps: string;
  rest: string;
};

export type WorkoutDay = {
  id: string;
  label: string;
  dayOfWeek: number; // 1 = segunda, 7 = domingo
  focus: string;
  goal: string;
  exercises: Exercise[];
};

export const weeklyWorkouts: WorkoutDay[] = [
  {
    id: "A",
    label: "Treino A — Peito / Tríceps",
    dayOfWeek: 1,
    focus: "Membros superiores",
    goal: "Hipertrofia",
    exercises: [
      {
        id: "supino_reto_barra",
        name: "Supino reto com barra",
        muscleGroup: "Peito",
        equipment: "Barra / Banco",
        sets: 4,
        reps: "8–10",
        rest: "60–90s",
      },
      {
        id: "supino_inclinado_haltere",
        name: "Supino inclinado com halteres",
        muscleGroup: "Peito",
        equipment: "Halteres / Banco",
        sets: 3,
        reps: "10–12",
        rest: "60–90s",
      },
      {
        id: "crucifixo_maquina",
        name: "Crucifixo na máquina",
        muscleGroup: "Peito",
        equipment: "Máquina",
        sets: 3,
        reps: "12–15",
        rest: "45–60s",
      },
      {
        id: "triceps_polia_alta",
        name: "Tríceps na polia alta",
        muscleGroup: "Tríceps",
        equipment: "Cabo",
        sets: 3,
        reps: "10–12",
        rest: "60s",
      },
      {
        id: "mergulho_banco",
        name: "Mergulho entre bancos",
        muscleGroup: "Tríceps",
        equipment: "Banco",
        sets: 3,
        reps: "10–12",
        rest: "60s",
      },
    ],
  },
  {
    id: "B",
    label: "Treino B — Costas / Bíceps",
    dayOfWeek: 3,
    focus: "Membros superiores",
    goal: "Hipertrofia",
    exercises: [
      {
        id: "puxada_frente",
        name: "Puxada frente na barra guiada",
        muscleGroup: "Costas",
        equipment: "Máquina",
        sets: 4,
        reps: "8–10",
        rest: "60–90s",
      },
      {
        id: "remada_curvada",
        name: "Remada curvada com barra",
        muscleGroup: "Costas",
        equipment: "Barra",
        sets: 3,
        reps: "8–10",
        rest: "60–90s",
      },
      {
        id: "remada_baixa",
        name: "Remada baixa na polia",
        muscleGroup: "Costas",
        equipment: "Cabo",
        sets: 3,
        reps: "10–12",
        rest: "60s",
      },
      {
        id: "rosca_direta",
        name: "Rosca direta com barra",
        muscleGroup: "Bíceps",
        equipment: "Barra",
        sets: 3,
        reps: "8–10",
        rest: "60s",
      },
      {
        id: "rosca_alternada",
        name: "Rosca alternada com halteres",
        muscleGroup: "Bíceps",
        equipment: "Halteres",
        sets: 3,
        reps: "10–12",
        rest: "60s",
      },
    ],
  },
  {
    id: "C",
    label: "Treino C — Pernas / Glúteos",
    dayOfWeek: 5,
    focus: "Membros inferiores",
    goal: "Hipertrofia / Força",
    exercises: [
      {
        id: "agachamento_livre",
        name: "Agachamento livre",
        muscleGroup: "Quadríceps / Glúteos",
        equipment: "Barra",
        sets: 4,
        reps: "6–8",
        rest: "90–120s",
      },
      {
        id: "leg_press",
        name: "Leg press 45°",
        muscleGroup: "Quadríceps / Glúteos",
        equipment: "Máquina",
        sets: 3,
        reps: "10–12",
        rest: "60–90s",
      },
      {
        id: "mesa_flexora",
        name: "Mesa flexora",
        muscleGroup: "Posterior de coxa",
        equipment: "Máquina",
        sets: 3,
        reps: "10–12",
        rest: "60–75s",
      },
      {
        id: "cadeira_extensora",
        name: "Cadeira extensora",
        muscleGroup: "Quadríceps",
        equipment: "Máquina",
        sets: 3,
        reps: "12–15",
        rest: "45–60s",
      },
      {
        id: "panturrilha_em_pe",
        name: "Panturrilha em pé",
        muscleGroup: "Panturrilhas",
        equipment: "Máquina",
        sets: 4,
        reps: "12–15",
        rest: "45–60s",
      },
    ],
  },
  {
    id: "D",
    label: "Treino D — Ombros / Core",
    dayOfWeek: 6,
    focus: "Estabilidade / Estética",
    goal: "Hipertrofia + Core",
    exercises: [
      {
        id: "desenvolvimento_halteres",
        name: "Desenvolvimento com halteres",
        muscleGroup: "Ombros",
        equipment: "Halteres",
        sets: 4,
        reps: "8–10",
        rest: "60–90s",
      },
      {
        id: "elevacao_lateral",
        name: "Elevação lateral",
        muscleGroup: "Ombros",
        equipment: "Halteres",
        sets: 3,
        reps: "12–15",
        rest: "45–60s",
      },
      {
        id: "elevacao_frontal",
        name: "Elevação frontal",
        muscleGroup: "Ombros",
        equipment: "Halteres",
        sets: 3,
        reps: "10–12",
        rest: "45–60s",
      },
      {
        id: "prancha_isometrica",
        name: "Prancha isométrica",
        muscleGroup: "Core",
        sets: 3,
        reps: "30–40s",
        rest: "45–60s",
      },
      {
        id: "abdominal_máquina",
        name: "Abdominal na máquina",
        muscleGroup: "Abdômen",
        equipment: "Máquina",
        sets: 3,
        reps: "12–15",
        rest: "45–60s",
      },
    ],
  },
];
