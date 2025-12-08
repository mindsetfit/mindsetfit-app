/* 
  IA Nutrition Engine — Base profissional
  Versão 1.0 — MindsetFit
  Este módulo gera refeições inteligentes com base em:
  - Metas de kcal e macros diárias
  - Distribuição por refeições
  - Restrições alimentares
  - Equivalências TACO
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

// Base TACO simplificada
const foodDatabase: FoodItem[] = [
  { name: 'Frango grelhado', kcal: 165, protein: 31, carbs: 0, fats: 3, category: 'proteina' },
  { name: 'Arroz branco', kcal: 128, protein: 2.5, carbs: 28, fats: 0.3, category: 'carboidrato' },
  { name: 'Batata doce', kcal: 86, protein: 1.6, carbs: 20, fats: 0.1, category: 'carboidrato' },
  { name: 'Ovo', kcal: 155, protein: 13, carbs: 1.1, fats: 11, category: 'proteina', restrictions: ['ovo'] },
  { name: 'Banana', kcal: 89, protein: 1.1, carbs: 23, fats: 0.3, category: 'fruta' },
  { name: 'Aveia', kcal: 389, protein: 17, carbs: 66, fats: 7, category: 'carboidrato', restrictions: ['gluten'] },
  { name: 'Patinho moído', kcal: 240, protein: 27, carbs: 0, fats: 14, category: 'proteina' },
  { name: 'Azeite', kcal: 884, protein: 0, carbs: 0, fats: 100, category: 'gordura' }
];

// Filtra alimentos pelas restrições
function filterByRestrictions(
  foods: FoodItem[],
  restrictions: Restriction[]
): FoodItem[] {
  return foods.filter((food) => {
    if (!food.restrictions) return true;
    return !food.restrictions.some((r) => restrictions.includes(r));
  });
}

// Calcula por refeição
function distributeMacros(
  dailyKcal: number,
  protein: number,
  carbs: number,
  fats: number,
  mealsPerDay: number
) {
  return {
    kcalPerMeal: dailyKcal / mealsPerDay,
    proteinPerMeal: protein / mealsPerDay,
    carbsPerMeal: carbs / mealsPerDay,
    fatsPerMeal: fats / mealsPerDay,
  };
}

export function generateMeals(input: IAInput): MealSuggestion[] {
  const allowedFoods = filterByRestrictions(foodDatabase, input.restrictions);
  const macros = distributeMacros(
    input.dailyKcal,
    input.protein,
    input.carbs,
    input.fats,
    input.mealsPerDay
  );

  const meals: MealSuggestion[] = [];

  for (let i = 0; i < input.mealsPerDay; i++) {
    const meal: MealSuggestion = {
      mealName: `Refeição ${i + 1}`,
      totalKcal: Math.round(macros.kcalPerMeal),
      protein: Math.round(macros.proteinPerMeal),
      carbs: Math.round(macros.carbsPerMeal),
      fats: Math.round(macros.fatsPerMeal),
      items: [],
    };

    // Seleção simples inicial — versão 1.0
    const proteinFood = allowedFoods.find((f) => f.category === 'proteina');
    const carbFood = allowedFoods.find((f) => f.category === 'carboidrato');
    const fatFood = allowedFoods.find((f) => f.category === 'gordura');

    if (proteinFood) {
      const grams = Math.round((macros.proteinPerMeal / proteinFood.protein) * 100);
      meal.items.push({ food: proteinFood.name, grams });
    }

    if (carbFood) {
      const grams = Math.round((macros.carbsPerMeal / carbFood.carbs) * 100);
      meal.items.push({ food: carbFood.name, grams });
    }

    if (fatFood) {
      const grams = Math.round((macros.fatsPerMeal / fatFood.fats) * 100);
      meal.items.push({ food: fatFood.name, grams });
    }

    meals.push(meal);
  }

  return meals;
}
