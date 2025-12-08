// src/lib/nutritionEngine.ts
// Módulo base da IA Nutrition – ainda sem conexão com UI.
// Futuramente vamos ligar isso às páginas de Metabolismo e Nutrição.

// Tipo de objetivo do paciente
export type GoalType = 'loss' | 'maintenance' | 'gain';

// Perfil básico do paciente
export interface PatientProfile {
  name?: string;
  weightKg: number;
  heightCm?: number;
  age?: number;
  sex?: 'M' | 'F';
  activityLevel?: 'sedentary' | 'light' | 'moderate' | 'high' | 'athlete';
  goal: GoalType;
  restrictions?: {
    lactoseFree?: boolean;
    glutenFree?: boolean;
    sugarFree?: boolean;
    lowSodium?: boolean;
    vegetarian?: boolean;
    vegan?: boolean;
    nutAllergy?: boolean;
  };
}

// Estrutura de macros
export interface MacroBreakdown {
  kcal: number;
  protein: number;
  carbs: number;
  fats: number;
}

// Alimento baseado em 100 g (no futuro vamos plugar a TACO aqui)
export interface Food {
  id: string;
  name: string;
  category: 'carb' | 'protein' | 'fat' | 'mixed';
  kcalPer100g: number;
  proteinPer100g: number;
  carbsPer100g: number;
  fatsPer100g: number;
  tags?: string[]; // ex: ['lactose-free', 'gluten-free']
}

// Item de refeição (alimento + quantidade em gramas)
export interface MealFoodItem {
  food: Food;
  grams: number;
}

// Refeição gerada
export interface Meal {
  id: string;
  label: string;
  order: number;
  items: MealFoodItem[];
  total: MacroBreakdown;
}

// Meta nutricional diária calculada
export interface DailyTarget extends MacroBreakdown {
  mealsPerDay: number;
}

// ------------------------
// BASE DE ALIMENTOS SIMPLES (temporária)
// Depois vamos substituir por TACO completo.
// ------------------------

export const sampleFoodDatabase: Food[] = [
  {
    id: 'frango-grelhado',
    name: 'Frango grelhado',
    category: 'protein',
    kcalPer100g: 165,
    proteinPer100g: 31,
    carbsPer100g: 0,
    fatsPer100g: 3.6,
    tags: ['lactose-free', 'gluten-free'],
  },
  {
    id: 'arroz-branco',
    name: 'Arroz branco cozido',
    category: 'carb',
    kcalPer100g: 128,
    proteinPer100g: 2.5,
    carbsPer100g: 28,
    fatsPer100g: 0.3,
    tags: ['lactose-free', 'gluten-free', 'vegetarian'],
  },
  {
    id: 'batata-doce',
    name: 'Batata doce cozida',
    category: 'carb',
    kcalPer100g: 86,
    proteinPer100g: 1.6,
    carbsPer100g: 20,
    fatsPer100g: 0.1,
    tags: ['lactose-free', 'gluten-free', 'vegetarian'],
  },
  {
    id: 'azeite',
    name: 'Azeite de oliva',
    category: 'fat',
    kcalPer100g: 884,
    proteinPer100g: 0,
    carbsPer100g: 0,
    fatsPer100g: 100,
    tags: ['lactose-free', 'gluten-free', 'vegan'],
  },
  {
    id: 'ovo',
    name: 'Ovo inteiro',
    category: 'mixed',
    kcalPer100g: 143,
    proteinPer100g: 13,
    carbsPer100g: 1.1,
    fatsPer100g: 10,
    tags: ['gluten-free'],
  },
];

// ------------------------
// FUNÇÕES PRINCIPAIS
// ------------------------

// Cálculo de metas diárias básicas (kcal + macros) – versão simples.
// Futuramente vamos plugar equações mais avançadas aqui.
export function calculateDailyTargets(profile: PatientProfile): DailyTarget {
  // Exemplo simples de TMB aproximada (Mifflin-St Jeor simplificada)
  const weight = profile.weightKg;
  const height = profile.heightCm ?? 170;
  const age = profile.age ?? 30;
  const sexFactor = profile.sex === 'F' ? -161 : 5;

  let tmb = 10 * weight + 6.25 * height - 5 * age + sexFactor;

  // Fator de atividade
  const activityFactorMap: Record<NonNullable<PatientProfile['activityLevel']>, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    high: 1.725,
    athlete: 1.9,
  };

  const activityFactor =
    profile.activityLevel ? activityFactorMap[profile.activityLevel] : 1.375;

  let kcal = tmb * activityFactor;

  // Ajuste por objetivo
  if (profile.goal === 'loss') {
    kcal -= 400;
  } else if (profile.goal === 'gain') {
    kcal += 300;
  }

  // Distribuição de macros padrão (pode ser refinada depois)
  const proteinPerKg =
    profile.goal === 'gain' ? 2.2 : profile.goal === 'loss' ? 2.0 : 1.8;
  const protein = proteinPerKg * weight;

  const fats = (0.25 * kcal) / 9;
  const carbs = (kcal - (protein * 4 + fats * 9)) / 4;

  // Número padrão de refeições
  const mealsPerDay = 4;

  return {
    kcal: Math.round(kcal),
    protein: Math.round(protein),
    carbs: Math.round(carbs),
    fats: Math.round(fats),
    mealsPerDay,
  };
}

// Gera um plano simples de refeições dividindo as metas diárias
// em X refeições, usando a base de alimentos de exemplo.
export function generateSimpleMealPlan(
  profile: PatientProfile,
  foods: Food[] = sampleFoodDatabase
): Meal[] {
  const targets = calculateDailyTargets(profile);

  const kcalPerMeal = targets.kcal / targets.mealsPerDay;

  // Por enquanto vamos criar uma refeição padrão repetida.
  const meals: Meal[] = [];

  for (let i = 0; i < targets.mealsPerDay; i++) {
    const rice = foods.find((f) => f.id === 'arroz-branco')!;
    const chicken = foods.find((f) => f.id === 'frango-grelhado')!;
    const fat = foods.find((f) => f.id === 'azeite')!;

    // Regra bem simples só pra termos base:
    const riceGrams = 100;
    const chickenGrams = 120;
    const fatGrams = 5;

    const totalKcal =
      (rice.kcalPer100g * riceGrams) / 100 +
      (chicken.kcalPer100g * chickenGrams) / 100 +
      (fat.kcalPer100g * fatGrams) / 100;

    const totalProtein =
      (rice.proteinPer100g * riceGrams) / 100 +
      (chicken.proteinPer100g * chickenGrams) / 100 +
      (fat.proteinPer100g * fatGrams) / 100;

    const totalCarbs =
      (rice.carbsPer100g * riceGrams) / 100 +
      (chicken.carbsPer100g * chickenGrams) / 100 +
      (fat.carbsPer100g * fatGrams) / 100;

    const totalFats =
      (rice.fatsPer100g * riceGrams) / 100 +
      (chicken.fatsPer100g * chickenGrams) / 100 +
      (fat.fatsPer100g * fatGrams) / 100;

    meals.push({
      id: `meal-${i + 1}`,
      label: `Refeição ${i + 1}`,
      order: i + 1,
      items: [
        { food: rice, grams: riceGrams },
        { food: chicken, grams: chickenGrams },
        { food: fat, grams: fatGrams },
      ],
      total: {
        kcal: Math.round(totalKcal),
        protein: Math.round(totalProtein),
        carbs: Math.round(totalCarbs),
        fats: Math.round(totalFats),
      },
    });
  }

  return meals;
}

// Sugestões simples de substituições equivalentes por categoria.
// No futuro vamos expandir isso usando a TACO e equivalência precisa de kcal.
export function suggestEquivalentFoods(foodId: string, foods: Food[] = sampleFoodDatabase): Food[] {
  const current = foods.find((f) => f.id === foodId);
  if (!current) return [];

  return foods.filter(
    (f) =>
      f.id !== current.id &&
      f.category === current.category
  );
}
