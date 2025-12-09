import { gymExercises, homeExercises, Exercise } from '@/data/exercises';
import type { TrainingSelection } from '@/components/custom/training-selector';

export type TrainingMode = TrainingSelection['mode'];
export type TrainingLevel = Exclude<TrainingSelection['level'], ''>;

export type WorkoutBlock = {
  label: string;
  duration: string;
  details: string;
};

export type GeneratedWorkout = {
  id: string;
  title: string;
  mode: TrainingMode;
  level: TrainingLevel;
  estimatedTime: number;
  focus: string;
  blocks: WorkoutBlock[];
  notes?: string;
};

/* ---------- Helpers para musculação (academia / casa) ---------- */

type DayPlan = {
  label: string;
  targets: Exercise['target'][];
};

// divisão semanal para garantir TODOS os grupamentos
function getDayPlan(daysPerWeek: number, dayIndex: number): DayPlan {
  const day = Math.max(1, Math.min(daysPerWeek, dayIndex));

  // fullbody em 2x/semana
  if (daysPerWeek === 2) {
    const fullTargets: Exercise['target'][] = [
      'peito',
      'costas',
      'ombros',
      'biceps',
      'triceps',
      'quadriceps',
      'posterior',
      'gluteos',
      'panturrilha',
      'abdomen',
      'lombar',
    ];
    return {
      label: day === 1 ? 'Full body A' : 'Full body B',
      targets: fullTargets,
    };
  }

  // 3x/semana: peito+tríceps / costas+bíceps / pernas+ombros+core
  if (daysPerWeek === 3) {
    if (day === 1) {
      return {
        label: 'Peito + tríceps + ombros',
        targets: ['peito', 'triceps', 'ombros'],
      };
    }
    if (day === 2) {
      return {
        label: 'Costas + bíceps',
        targets: ['costas', 'biceps'],
      };
    }
    return {
      label: 'Pernas + glúteos + core',
      targets: ['quadriceps', 'posterior', 'gluteos', 'panturrilha', 'abdomen', 'lombar'],
    };
  }

  // 4x/semana: superior A / inferior A / superior B / inferior B
  if (daysPerWeek === 4) {
    if (day === 1) {
      return {
        label: 'Superior A (peito, costas, ombros)',
        targets: ['peito', 'costas', 'ombros'],
      };
    }
    if (day === 2) {
      return {
        label: 'Inferior A (quadríceps, posterior, glúteos)',
        targets: ['quadriceps', 'posterior', 'gluteos'],
      };
    }
    if (day === 3) {
      return {
        label: 'Superior B (braços + core)',
        targets: ['biceps', 'triceps', 'abdomen', 'lombar'],
      };
    }
    return {
      label: 'Inferior B (pernas completas)',
      targets: ['quadriceps', 'posterior', 'gluteos', 'panturrilha'],
    };
  }

  // 5x/semana: peito/tríceps, costas/bíceps, pernas, ombros, core
  if (daysPerWeek === 5) {
    switch (day) {
      case 1:
        return {
          label: 'Peito + tríceps',
          targets: ['peito', 'triceps'],
        };
      case 2:
        return {
          label: 'Costas + bíceps',
          targets: ['costas', 'biceps'],
        };
      case 3:
        return {
          label: 'Pernas (quadríceps + posterior + glúteos)',
          targets: ['quadriceps', 'posterior', 'gluteos'],
        };
      case 4:
        return {
          label: 'Ombros + trapézio',
          targets: ['ombros'],
        };
      default:
        return {
          label: 'Core completo (abdômen + lombar + panturrilha)',
          targets: ['abdomen', 'lombar', 'panturrilha'],
        };
    }
  }

  // 6x/semana: divisão bem detalhada
  // 1: peito / 2: costas / 3: pernas / 4: ombros / 5: braços / 6: core
  const mappedDay = Math.min(6, day);
  switch (mappedDay) {
    case 1:
      return {
        label: 'Peito (ênfase técnica e volume)',
        targets: ['peito'],
      };
    case 2:
      return {
        label: 'Costas (dorso completo)',
        targets: ['costas'],
      };
    case 3:
      return {
        label: 'Pernas (quadríceps + posterior + glúteos)',
        targets: ['quadriceps', 'posterior', 'gluteos'],
      };
    case 4:
      return {
        label: 'Ombros (deltoides)',
        targets: ['ombros'],
      };
    case 5:
      return {
        label: 'Braços (bíceps + tríceps)',
        targets: ['biceps', 'triceps'],
      };
    default:
      return {
        label: 'Core e estabilizadores',
        targets: ['abdomen', 'lombar', 'panturrilha'],
      };
  }
}

function pickExercisesByTargets(
  candidates: Exercise[],
  fallback: Exercise[],
  level: TrainingLevel,
  time: number,
): Exercise[] {
  const levelFiltered =
    candidates.filter((ex) => ex.level === level) ||
    candidates;

  const base = levelFiltered.length > 0 ? levelFiltered : candidates;
  const pool = base.length > 0 ? base : fallback;

  const targetCount =
    time <= 25 ? 5 : time <= 40 ? 7 : 9;

  const result: Exercise[] = [];
  for (let i = 0; i < targetCount; i++) {
    const ex = pool[i % pool.length];
    result.push(ex);
  }
  return result;
}

function generateGymOrHomeWeekly(
  selection: TrainingSelection,
  mode: 'academia' | 'casa',
): GeneratedWorkout[] {
  const level = (selection.level || 'iniciante') as TrainingLevel;
  const time = selection.time || 40;
  const daysPerWeek = selection.daysPerWeek || 3;
  const dayIndex = selection.dayIndex || 1;

  const pool = mode === 'academia' ? gymExercises : homeExercises;
  const plan = getDayPlan(daysPerWeek, dayIndex);

  const candidates = pool.filter((ex) => plan.targets.includes(ex.target));

  // 3 variações de treino para o mesmo dia / foco
  const variations: GeneratedWorkout[] = [];

  for (let v = 0; v < 3; v++) {
    const exs = pickExercisesByTargets(candidates, pool, level, time);

    const blocks: WorkoutBlock[] = exs.map((ex, idx) => ({
      label: `${idx + 1}. ${ex.name}`,
      duration: `${Math.round(ex.averageTime / 10) * 10}s · 3–4 séries`,
      details: `${ex.target.toUpperCase()} • ${ex.instructions}`,
    }));

    variations.push({
      id: `${mode}-${level}-${daysPerWeek}d-dia${dayIndex}-var${v + 1}`,
      title: `Treino ${dayIndex} – ${plan.label} (variação ${v + 1})`,
      mode,
      level,
      estimatedTime: time,
      focus: plan.label,
      blocks,
      notes:
        'Ajuste cargas em kg de acordo com seu nível. Priorize técnica, amplitude completa e controle antes de aumentar o peso.',
    });
  }

  return variations;
}

/* ----------------- SPINNING (10 MODELOS) -------------- */

export type WorkoutBlock = {
  label: string;
  duration: string;
  details: string;
};

const spinningTemplates: Omit<GeneratedWorkout, 'mode' | 'level' | 'estimatedTime'>[] = [
  {
    id: 'spin-base-resistencia',
    title: 'Base de resistência contínua',
    focus: 'Resistência aeróbia',
    blocks: [
      { label: 'Aquecimento', duration: '5 min', details: 'Pedalada leve, cadência alta, baixa carga.' },
      { label: 'Bloco principal', duration: '15–30 min', details: 'Ritmo constante em Z2–Z3, respiração controlada.' },
      { label: 'Cooldown', duration: '5 min', details: 'Reduza carga e cadência, alongue ao final.' },
    ],
  },
  {
    id: 'spin-sprints',
    title: 'Sprints em terreno plano',
    focus: 'Velocidade e explosão',
    blocks: [
      { label: 'Aquecimento', duration: '5–8 min', details: 'Ritmo leve, preparando articulações.' },
      { label: 'Sprints', duration: '10–20 min', details: '20s forte / 40s leve × 8–12 séries.' },
      { label: 'Cooldown', duration: '5 min', details: 'Ritmo bem leve, foco em respiração.' },
    ],
  },
  {
    id: 'spin-subidas',
    title: 'Subidas progressivas',
    focus: 'Força de perna',
    blocks: [
      { label: 'Aquecimento', duration: '5 min', details: 'Cadência confortável, carga baixa.' },
      { label: 'Subidas', duration: '15–25 min', details: 'Aumente carga a cada 3–4 min, cadência média.' },
      { label: 'Cooldown', duration: '5 min', details: 'Diminua carga gradualmente.' },
    ],
  },
  {
    id: 'spin-hiit',
    title: 'HIIT moderado',
    focus: 'Melhora de VO2 e condicionamento',
    blocks: [
      { label: 'Aquecimento', duration: '8 min', details: 'Progrida de leve para moderado.' },
      { label: 'HIIT', duration: '12–20 min', details: '1 min forte / 1 min leve em Z3–Z4.' },
      { label: 'Cooldown', duration: '5–7 min', details: 'Traga FC de volta gradualmente.' },
    ],
  },
  {
    id: 'spin-intervalado',
    title: 'Intervalado suave',
    focus: 'Transição iniciante → intermediário',
    blocks: [
      { label: 'Aquecimento', duration: '5–7 min', details: 'Ritmo confortável.' },
      { label: 'Blocos moderados', duration: '15–20 min', details: '3 min moderado / 2 min leve.' },
      { label: 'Cooldown', duration: '5 min', details: 'Tempo para normalizar respiração.' },
    ],
  },
  {
    id: 'spin-cadencia-alta',
    title: 'Cadência alta controlada',
    focus: 'Coordenação e economia de movimento',
    blocks: [
      { label: 'Aquececimento', duration: '5 min', details: 'Cadência moderada, carga baixa.' },
      { label: 'Bloco principal', duration: '15–25 min', details: 'Cadência alta, carga leve a moderada.' },
      { label: 'Cooldown', duration: '5 min', details: 'Alongamento fora da bike.' },
    ],
  },
  {
    id: 'spin-subidas-e-sprints',
    title: 'Subidas + Sprints',
    focus: 'Mistura de força e velocidade',
    blocks: [
      { label: 'Aquecimento', duration: '8 min', details: 'Progrida de leve a moderado.' },
      { label: 'Subidas', duration: '10–15 min', details: 'Simule morros curtos com carga alta.' },
      { label: 'Sprints finais', duration: '5–10 min', details: 'Sprints de 15–20s com boa recuperação.' },
    ],
  },
  {
    id: 'spin-endurance-longo',
    title: 'Endurance contínuo',
    focus: 'Capacidade aeróbia avançada',
    blocks: [
      { label: 'Aquececimento', duration: '10 min', details: 'Ritmo leve a moderado.' },
      { label: 'Endurance', duration: '25–40 min', details: 'Z2 / Z3 constante, foco em técnica.' },
      { label: 'Cooldown', duration: '5–10 min', details: 'Recuperação ativa.' },
    ],
  },
  {
    id: 'spin-tecnico',
    title: 'Técnica e controle',
    focus: 'Eficiência de pedalada',
    blocks: [
      { label: 'Aquececimento', duration: '8 min', details: 'Cadência confortável.' },
      { label: 'Técnica', duration: '15–20 min', details: 'Foque em puxar + empurrar, tronco estável.' },
      { label: 'Cooldown', duration: '5 min', details: 'Solte as pernas e alongue.' },
    ],
  },
  {
    id: 'spin-misto',
    title: 'Misto geral (força + cardio)',
    focus: 'Condicionamento completo',
    blocks: [
      { label: 'Aquececimento', duration: '8 min', details: 'Progrida até moderado.' },
      { label: 'Blocos mistos', duration: '20–30 min', details: 'Intercale 4 min subida / 2 min plano.' },
      { label: 'Cooldown', duration: '5–7 min', details: 'Volte ao leve gradualmente.' },
    ],
  },
];

function generateSpinning(selection: TrainingSelection): GeneratedWorkout[] {
  const level = (selection.level || 'iniciante') as TrainingLevel;
  const time = selection.time || 40;

  return spinningTemplates.slice(0, 3).map((tpl, idx) => ({
    ...tpl,
    mode: 'spinning' as const,
    level,
    estimatedTime: time,
    id: `${tpl.id}-${level}-${idx}`,
    notes:
      level === 'iniciante'
        ? 'Mantenha esforço em algo entre 5–7/10, evitando entrar em exaustão.'
        : 'Use percepção de esforço entre 7–9/10 nos blocos intensos.',
  }));
}

/* ----------------- CORRIDA (PERIODIZAÇÃO SIMPLES) -------------- */

function generateCorrida(selection: TrainingSelection): GeneratedWorkout[] {
  const level = (selection.level || 'iniciante') as TrainingLevel;
  const time = selection.time || 40;

  const baseFocus =
    level === 'iniciante'
      ? 'base aeróbia e técnica'
      : level === 'intermediario'
      ? 'ritmo contínuo e intervalos moderados'
      : 'ritmo específico de prova e intervalos fortes';

  const workouts: GeneratedWorkout[] = [
    {
      id: `corrida-base-${level}`,
      title: 'Rodagem leve + técnica',
      mode: 'corrida',
      level,
      estimatedTime: time,
      focus: baseFocus,
      blocks: [
        {
          label: 'Aquecimento',
          duration: '10 min',
          details:
            'Caminhada rápida ou trote leve, seguido de mobilidade de quadril, joelhos e tornozelos.',
        },
        {
          label: 'Rodagem',
          duration: `${time - 15} min`,
          details:
            'Corrida leve em ritmo que permita conversar. Foque na postura, passada leve e respiração nasal/buconasal.',
        },
        {
          label: 'Cooldown',
          duration: '5 min',
          details:
            'Caminhada leve + alongamentos de panturrilha, posterior de coxa e quadríceps.',
        },
      ],
      notes:
        'Ideal para construção de base. Se sentir falta de ar, reduza o ritmo até conseguir falar pequenas frases.',
    },
    {
      id: `corrida-intervalos-${level}`,
      title: 'Intervalados controlados',
      mode: 'corrida',
      level,
      estimatedTime: time,
      focus: 'melhora de ritmo e capacidade cardiorrespiratória',
      blocks: [
        {
          label: 'Aquecimento',
          duration: '10 min',
          details: 'Trote leve + 3 acelerações de 20s com recuperação completa.',
        },
        {
          label: 'Bloco principal',
          duration: `${time - 15} min`,
          details:
            'Alternar 2 min em ritmo moderado/rápido e 2 min leve. Use percepção de esforço: 7–8/10 nos trechos fortes.',
        },
        {
          label: 'Cooldown',
          duration: '5 min',
          details:
            'Caminhe até normalizar respiração. Hidrate-se bem após o treino.',
        },
      ],
      notes:
        'Não force máximo absoluto. Mantenha técnica: tronco levemente inclinado à frente, pisada suave, braços relaxados.',
    },
    {
      id: `corrida-prova-${level}`,
      title: 'Simulação de prova curta',
      mode: 'corrida',
      level,
      estimatedTime: time,
      focus: 'ritmo alvo e controle de pace',
      blocks: [
        {
          label: 'Aquecimento',
          duration: '10 min',
          details:
            'Trote leve + educativos (skipping, calcanhar no glúteo, passadas coordenadas).',
        },
        {
          label: 'Ritmo alvo',
          duration: `${time - 15} min`,
          details:
            'Corra o mais próximo possível do pace que deseja em prova, sem chegar à exaustão. Busque constância.',
        },
        {
          label: 'Cooldown',
          duration: '5 min',
          details:
            'Reduza gradualmente a velocidade até caminhar. Trabalhe respiração profunda diafragmática.',
        },
      ],
      notes:
        'Respeite seu nível. Iniciantes podem reduzir tempo de ritmo forte e aumentar intervalo de corrida leve.',
    },
  ];

  return workouts;
}

/* ----------------- CROSSFIT (10 WODs) -------------- */

const crossfitTemplates: Omit<GeneratedWorkout, 'mode' | 'level' | 'estimatedTime'>[] = [
  {
    id: 'wod-basico-fullbody',
    title: 'Full body básico',
    focus: 'Corpo todo, iniciante',
    blocks: [
      { label: 'Aquecimento', duration: '8 min', details: 'Mobilidade geral + polichinelos leves.' },
      { label: 'WOD', duration: '15–20 min', details: 'AMRAP de agachamento, flexão inclinada e remada com elástico.' },
      { label: 'Cooldown', duration: '5 min', details: 'Alongamentos dinâmicos e respiração guiada.' },
    ],
  },
  {
    id: 'wod-forca-pernas',
    title: 'Força de pernas',
    focus: 'Quadríceps, posterior e glúteos',
    blocks: [
      { label: 'Aquecimento', duration: '10 min', details: 'Mobilidade de quadril e tornozelos.' },
      { label: 'Bloco técnico', duration: '10–15 min', details: 'Agachamento com carga moderada, foco em técnica.' },
      { label: 'WOD', duration: '10–15 min', details: 'EMOM com agachamentos, avanços e saltos controlados.' },
    ],
  },
  {
    id: 'wod-cardio-hiit',
    title: 'Cardio HIIT',
    focus: 'Condicionamento cardio-respiratório',
    blocks: [
      { label: 'Aquecimento', duration: '8 min', details: 'Corrida estacionária + mobilidade de ombros.' },
      { label: 'WOD', duration: '12–18 min', details: 'Rondas de burpees, mountain climbers e polichinelos.' },
      { label: 'Cooldown', duration: '5–8 min', details: 'Respiração profunda + alongamentos leves.' },
    ],
  },
  {
    id: 'wod-core',
    title: 'Core e estabilidade',
    focus: 'Lombar e abdômen',
    blocks: [
      { label: 'Aquecimento', duration: '8 min', details: 'Prancha leve, bird-dog, mobilidade de quadril.' },
      { label: 'WOD', duration: '12–20 min', details: 'Circuito de pranchas, hollow hold e elevação de pernas.' },
      { label: 'Cooldown', duration: '5 min', details: 'Alongamento de flexores de quadril e lombar.' },
    ],
  },
  {
    id: 'wod-upper',
    title: 'Upper body',
    focus: 'Peito, costas e braços',
    blocks: [
      { label: 'Aquececimento', duration: '8 min', details: 'Rotação de ombros, banda elástica, flexões leves.' },
      { label: 'WOD', duration: '15–20 min', details: 'Flexões, remada invertida e dips em banco.' },
      { label: 'Cooldown', duration: '5 min', details: 'Alongamentos para peitoral e dorsais.' },
    ],
  },
  {
    id: 'wod-full-intenso',
    title: 'Full body intenso',
    focus: 'Alto gasto calórico',
    blocks: [
      { label: 'Aquececimento', duration: '10 min', details: 'Mobilidade + movimentos com peso corporal.' },
      { label: 'WOD', duration: '15–25 min', details: 'AMRAP com agachamentos, burpees, remada e prancha.' },
      { label: 'Cooldown', duration: '5–10 min', details: 'Respiração + alongamento global.' },
    ],
  },
  {
    id: 'wod-emom-basico',
    title: 'EMOM básico',
    focus: 'Ritmo e consistência',
    blocks: [
      { label: 'Aquececimento', duration: '8 min', details: 'Sequência leve de air squats e flexões.' },
      { label: 'WOD', duration: '12–20 min', details: 'EMOM com 3 exercícios simples, reps fixas por minuto.' },
      { label: 'Cooldown', duration: '5 min', details: 'Liberação miofascial leve (se possível).' },
    ],
  },
  {
    id: 'wod-tabata',
    title: 'Tabata intenso',
    focus: 'Alta intensidade em pouco tempo',
    blocks: [
      { label: 'Aquececimento', duration: '8 min', details: 'Polichinelos + mobilidade.' },
      { label: 'WOD', duration: '8–16 min', details: 'Blocos de 20s ON / 10s OFF com 2–4 exercícios.' },
      { label: 'Cooldown', duration: '5–8 min', details: 'Caminhada leve e alongamento.' },
    ],
  },
  {
    id: 'wod-tecnico',
    title: 'Técnica e controle',
    focus: 'Aprendizado de movimento',
    blocks: [
      { label: 'Aquececimento', duration: '8–10 min', details: 'Mobilidade articular completa.' },
      { label: 'Bloco técnico', duration: '15–20 min', details: 'Prática leve de agachamento, hinge, empurrar e puxar.' },
      { label: 'Cooldown', duration: '5 min', details: 'Alongamentos ativos.' },
    ],
  },
  {
    id: 'wod-mobilidade',
    title: 'Mobilidade e condicionamento leve',
    focus: 'Saúde articular e leve cardio',
    blocks: [
      { label: 'Aquececimento', duration: '5 min', details: 'Movimentos articulares amplos.' },
      { label: 'WOD', duration: '15–25 min', details: 'Sequência fluida com agachamentos, passadas, pranchas e alongamentos dinâmicos.' },
      { label: 'Cooldown', duration: '5–10 min', details: 'Respiração e alongamento relaxante.' },
    ],
  },
];

function generateCrossfit(selection: TrainingSelection): GeneratedWorkout[] {
  const level = (selection.level || 'iniciante') as TrainingLevel;
  const time = selection.time || 30;

  return crossfitTemplates.slice(0, 3).map((tpl, idx) => ({
    ...tpl,
    mode: 'crossfit' as const,
    level,
    estimatedTime: time,
    id: `${tpl.id}-${level}-${idx}`,
    notes:
      'Adapte repetições e carga conforme seu nível. Mantenha técnica sempre acima da velocidade.',
  }));
}

/* ----------------- DISPATCH PRINCIPAL -------------- */

export function generateWorkouts(selection: TrainingSelection): GeneratedWorkout[] {
  if (!selection.mode) return [];

  switch (selection.mode) {
    case 'academia':
      return generateGymOrHomeWeekly(selection, 'academia');
    case 'casa':
      return generateGymOrHomeWeekly(selection, 'casa');
    case 'spinning':
      return generateSpinning(selection);
    case 'corrida':
      return generateCorrida(selection);
    case 'crossfit':
      return generateCrossfit(selection);
    default:
      return [];
  }
}
