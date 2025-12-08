/*
  IA Nutrition Engine — MindsetFit
  Versão 2.0 — com distribuição real por refeição

  O que este módulo faz:
  - recebe metas diárias (kcal e macros)
  - aplica um perfil de distribuição por refeição (3 a 6 refeições)
  - filtra alimentos por restrições
  - monta refeições com 1 fonte de proteína, 1 de carboidrato e 1 de gordura
  - devolve refeições nomeadas (Café da manhã, Almoço, etc.)
*/

export type Restriction =
  | 'lactose'
  | 'gluten'
  | 'oleaginosa'
  | 'ovo'
  | 'vegetariano'
  | 'vegano'
  | 'diabetes'
  | 'low_sodio'
  | 'sem_acucar';

export interface FoodItem {
  name: string;
  kcal: number;
  protein: number;
  carbs: number;
  fats: number;
  category: string;
  restrictions?: Restriction[];
}

export interface MealSuggestion {
  mealName: string;
  totalKcal: number;
  protein: number;
  carbs: number;
  fats: number;
  items: Array<{ food: string; grams: number }>;
}

export interface IAInput {
  dailyKcal: number;
  protein: number;
  carbs: number;
  fats: number;
  mealsPerDay: number;
  restrictions: Restriction[];
}

interface MealSlot {
  key: string;
  label: string;
  ratio: number; // proporção da meta diária (0–1)
}

// Base TACO simplificada (por 100g)
const foodDatabase: FoodItem[] = [
  {
    name: 'Frango grelhado',
    kcal: 165,
    protein: 31,
    carbs: 0,
    fats: 3,
    category: 'proteina',
  },
  {
    name: 'Arroz branco',
    kcal: 128,
    protein: 2.5,
    carbs: 28,
    fats: 0.3,
    category: 'carboidrato',
  },
  {
    name: 'Batata doce',
    kcal: 86,
    protein: 1.6,
    carbs: 20,
    fats: 0.1,
    category: 'carboidrato',
  },
  {
    name: 'Ovo',
    kcal: 155,
    protein: 13,
    carbs: 1.1,
    fats: 11,
    category: 'proteina',
    restrictions: ['ovo'],
  },
  {
    name: 'Banana',
    kcal: 89,
    protein: 1.1,
    carbs: 23,
    fats: 0.3,
    category: 'fruta',
  },
  {
    name: 'Aveia',
    kcal: 389,
    protein: 17,
    carbs: 66,
    fats: 7,
    category: 'carboidrato',
    restrictions: ['gluten'],
  },
  {
    name: 'Patinho moído',
    kcal: 240,
    protein: 27,
    carbs: 0,
    fats: 14,
    category: 'proteina',
  },
  {
    name: 'Azeite',
    kcal: 884,
    protein: 0,
    carbs: 0,
    fats: 100,
    category: 'gordura',
  },
];

// 🔹 Perfis de distribuição por refeição (3–6 refeições)
function getMealSlots(mealsPerDay: number): MealSlot[] {
  switch (mealsPerDay) {
    case 3:
      return [
        { key: 'breakfast', label: 'Café da manhã', ratio: 0.25 },
        { key: 'lunch', label: 'Almoço', ratio: 0.4 },
        { key: 'dinner', label: 'Jantar', ratio: 0.35 },
      ];
    case 4:
      return [
        { key: 'breakfast', label: 'Café da manhã', ratio: 0.2 },
        { key: 'lunch', label: 'Almoço', ratio: 0.35 },
        { key: 'snack_afternoon', label: 'Lanche da tarde', ratio: 0.15 },
        { key: 'dinner', label: 'Jantar', ratio: 0.3 },
      ];
    case 5:
      return [
        { key: 'breakfast', label: 'Café da manhã', ratio: 0.2 },
        { key: 'snack_morning', label: 'Lanche da manhã', ratio: 0.1 },
        { key: 'lunch', label: 'Almoço', ratio: 0.3 },
        { key: 'snack_afternoon', label: 'Lanche da tarde', ratio: 0.15 },
        { key: 'dinner', label: 'Jantar', ratio: 0.25 },
      ];
    case 6:
    default:
      return [
        { key: 'breakfast', label: 'Café da manhã', ratio: 0.18 },
        { key: 'snack_morning', label: 'Lanche da manhã', ratio: 0.1 },
        { key: 'lunch', label: 'Almoço', ratio: 0.28 },
        { key: 'pre_workout', label: 'Pré-treino', ratio: 0.12 },
        { key: 'post_workout', label: 'Pós-treino', ratio: 0.12 },
        { key: 'dinner', label: 'Jantar', ratio: 0.2 },
      ].slice(0, mealsPerDay); // se alguém mandar >6, corta
  }
}

// 🔹 Filtra alimentos pelas restrições
function filterByRestrictions(
  foods: FoodItem[],
  restrictions: Restriction[]
): FoodItem[] {
  return foods.filter((food) => {
    if (!food.restrictions) return true;
    return !food.restrictions.some((r) => restrictions.includes(r));
  });
}

// 🔹 Gera refeições com base na distribuição por refeição
export function generateMeals(input: IAInput): MealSuggestion[] {
  const allowedFoods = filterByRestrictions(foodDatabase, input.restrictions);
  const slots = getMealSlots(input.mealsPerDay);

  const proteinFood = allowedFoods.find((f) => f.category === 'proteina');
  const carbFood = allowedFoods.find((f) => f.category === 'carboidrato');
  const fatFood = allowedFoods.find((f) => f.category === 'gordura');

  const meals: MealSuggestion[] = [];

  for (const slot of slots) {
    const mealKcal = input.dailyKcal * slot.ratio;
    const mealProtein = input.protein * slot.ratio;
    const mealCarbs = input.carbs * slot.ratio;
    const mealFats = input.fats * slot.ratio;

    const meal: MealSuggestion = {
      mealName: slot.label,
      totalKcal: Math.round(mealKcal),
      protein: Math.round(mealProtein),
      carbs: Math.round(mealCarbs),
      fats: Math.round(mealFats),
      items: [],
    };

    // Cálculo em gramas baseado nos macros da refeição
    if (proteinFood && mealProtein > 0 && proteinFood.protein > 0) {
      const grams = Math.round((mealProtein / proteinFood.protein) * 100);
      meal.items.push({ food: proteinFood.name, grams });
    }

    if (carbFood && mealCarbs > 0 && carbFood.carbs > 0) {
      const grams = Math.round((mealCarbs / carbFood.carbs) * 100);
      meal.items.push({ food: carbFood.name, grams });
    }

    if (fatFood && mealFats > 0 && fatFood.fats > 0) {
      const grams = Math.round((mealFats / fatFood.fats) * 100);
      meal.items.push({ food: fatFood.name, grams });
    }

    meals.push(meal);
  }

  return meals;
}
