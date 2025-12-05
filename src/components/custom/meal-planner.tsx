'use client';

import { useState } from 'react';
import { Apple, Plus, RefreshCw, ChefHat, ArrowRightLeft, Info, Check } from 'lucide-react';
import { generateNutritionPlan, FOOD_RESTRICTIONS } from '@/lib/nutrition';

export default function MealPlanner() {
  const [targetCalories, setTargetCalories] = useState(2000);
  const [numberOfMeals, setNumberOfMeals] = useState(4);
  const [restrictions, setRestrictions] = useState<string[]>([]);
  const [meals, setMeals] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const plan = generateNutritionPlan(targetCalories, numberOfMeals, restrictions);
      setMeals(plan);
      setIsGenerating(false);
    }, 500);
  };

  const toggleRestriction = (restriction: string) => {
    setRestrictions(prev =>
      prev.includes(restriction)
        ? prev.filter(r => r !== restriction)
        : [...prev, restriction]
    );
  };

  const getRestrictionLabel = (restriction: string): string => {
    const labels: Record<string, string> = {
      'lactose': 'Sem Lactose',
      'gluten': 'Sem Glúten',
      'diabetes': 'Diabético',
      'low-sodium': 'Baixo Sódio',
      'vegetarian': 'Vegetariano',
      'vegan': 'Vegano',
      'egg-allergy': 'Alergia a Ovo',
      'nut-allergy': 'Alergia a Oleaginosas',
      'seafood-allergy': 'Alergia a Frutos do Mar',
      'soy-allergy': 'Alergia a Soja',
      'sugar-free': 'Sem Açúcar',
      'low-carb': 'Low Carb',
      'high-protein': 'High Protein'
    };
    return labels[restriction] || restriction;
  };

  return (
    <div className="space-y-6">
      {/* Configuration */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <ChefHat className="w-6 h-6 text-cyan-400" />
          Cardápio Alimentar Diário
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Calorias Diárias (kcal)
            </label>
            <input
              type="number"
              value={targetCalories}
              onChange={(e) => setTargetCalories(parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              placeholder="Ex: 2000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Número de Refeições por Dia
            </label>
            <input
              type="number"
              min="3"
              max="8"
              value={numberOfMeals}
              onChange={(e) => setNumberOfMeals(parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              placeholder="Ex: 4, 5, 6..."
            />
            <p className="text-xs text-slate-400 mt-1">
              Escolha entre 3 e 8 refeições por dia
            </p>
          </div>
        </div>

        {/* Restrictions */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-300 mb-3">
            Restrições Alimentares
          </label>
          <div className="flex flex-wrap gap-2">
            {FOOD_RESTRICTIONS.map((restriction) => (
              <button
                key={restriction}
                onClick={() => toggleRestriction(restriction)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  restrictions.includes(restriction)
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {restrictions.includes(restriction) && <Check className="w-4 h-4" />}
                {getRestrictionLabel(restriction)}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
          {isGenerating ? 'Gerando Cardápio...' : 'Gerar Cardápio Completo'}
        </button>
      </div>

      {/* Info Box */}
      {meals.length > 0 && (
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-200">
            <p className="font-semibold mb-1">Sobre as Substituições Equivalentes:</p>
            <p>
              Cada alimento possui substituições com <strong>±5% das calorias</strong> e proporções similares de macronutrientes.
              Todas as informações são baseadas na <strong>Tabela TACO</strong> (Tabela Brasileira de Composição de Alimentos).
            </p>
          </div>
        </div>
      )}

      {/* Meals */}
      {meals.length > 0 && (
        <div className="space-y-6">
          {meals.map((meal, mealIndex) => (
            <div key={mealIndex} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              {/* Meal Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                <div>
                  <h4 className="text-2xl font-bold text-white flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-bold">
                      {mealIndex + 1}
                    </span>
                    {meal.name}
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">Horário sugerido: {meal.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-cyan-400">{meal.totalCalories} kcal</p>
                  <div className="flex gap-3 text-sm text-slate-300 mt-1">
                    <span className="bg-green-500/20 px-2 py-1 rounded">P: {meal.totalProtein}g</span>
                    <span className="bg-blue-500/20 px-2 py-1 rounded">C: {meal.totalCarbs}g</span>
                    <span className="bg-yellow-500/20 px-2 py-1 rounded">G: {meal.totalFats}g</span>
                  </div>
                </div>
              </div>

              {/* Foods */}
              <div className="space-y-4">
                {meal.foods.map((food: any, foodIndex: number) => (
                  <div key={foodIndex} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    {/* Food Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <h5 className="font-bold text-white text-lg">{food.name}</h5>
                        <p className="text-xs text-slate-400 mt-1">Categoria: {food.category}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-cyan-400">{food.quantity}g</span>
                      </div>
                    </div>
                    
                    {/* Food Macros */}
                    <div className="flex flex-wrap gap-4 text-sm mb-4 pb-4 border-b border-slate-700/50">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Calorias:</span>
                        <span className="font-bold text-white">{Math.round((food.calories * food.quantity) / 100)} kcal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Proteína:</span>
                        <span className="font-bold text-green-400">{Math.round((food.protein * food.quantity) / 100)}g</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Carboidrato:</span>
                        <span className="font-bold text-blue-400">{Math.round((food.carbs * food.quantity) / 100)}g</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Gordura:</span>
                        <span className="font-bold text-yellow-400">{Math.round((food.fats * food.quantity) / 100)}g</span>
                      </div>
                    </div>
                    
                    {/* Substitutes */}
                    {food.substitutes && food.substitutes.length > 0 && (
                      <details className="group">
                        <summary className="flex items-center gap-2 text-sm text-cyan-400 cursor-pointer hover:text-cyan-300 font-medium">
                          <ArrowRightLeft className="w-4 h-4" />
                          Ver {food.substitutes.length} Substituições Equivalentes (±5% kcal)
                        </summary>
                        <div className="mt-4 space-y-3 pl-6">
                          {food.substitutes.map((sub: any, subIndex: number) => (
                            <div key={subIndex} className="bg-slate-900/50 rounded-lg p-4 border-l-4 border-cyan-500/50">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex-1">
                                  <h6 className="font-bold text-white">
                                    Substituição {subIndex + 1}: {sub.food.name}
                                  </h6>
                                  <p className="text-xs text-slate-400 mt-1">
                                    Variação calórica: {sub.calorieVariation > 0 ? '+' : ''}{sub.calorieVariation.toFixed(2)}% 
                                    • Similaridade de macros: {sub.macroSimilarity}%
                                  </p>
                                </div>
                                <span className="text-lg font-bold text-cyan-400">{sub.equivalentQuantity}g</span>
                              </div>
                              <div className="flex gap-4 text-xs text-slate-400">
                                <span>{Math.round((sub.food.calories * sub.equivalentQuantity) / 100)} kcal</span>
                                <span className="text-green-400">P: {Math.round((sub.food.protein * sub.equivalentQuantity) / 100)}g</span>
                                <span className="text-blue-400">C: {Math.round((sub.food.carbs * sub.equivalentQuantity) / 100)}g</span>
                                <span className="text-yellow-400">G: {Math.round((sub.food.fats * sub.equivalentQuantity) / 100)}g</span>
                              </div>
                              <p className="text-xs text-slate-500 mt-2">
                                Equivalência calórica mantida com proporção similar de macronutrientes (Tabela TACO)
                              </p>
                            </div>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                ))}
              </div>

              {/* Meal Summary */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Total da Refeição:</span>
                  <div className="flex gap-4">
                    <span className="text-white font-bold">{meal.totalCalories} kcal</span>
                    <span className="text-green-400">P: {meal.totalProtein}g</span>
                    <span className="text-blue-400">C: {meal.totalCarbs}g</span>
                    <span className="text-yellow-400">G: {meal.totalFats}g</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2 text-right">
                  Fórmula: kcal ≈ (proteína × 4) + (carboidrato × 4) + (gordura × 9)
                </p>
              </div>
            </div>
          ))}

          {/* Daily Summary */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
            <h4 className="text-xl font-bold text-white mb-4">Resumo Diário Total</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                <p className="text-slate-400 text-sm mb-1">Calorias Totais</p>
                <p className="text-3xl font-bold text-cyan-400">
                  {meals.reduce((sum, meal) => sum + meal.totalCalories, 0)} kcal
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                <p className="text-slate-400 text-sm mb-1">Proteína Total</p>
                <p className="text-3xl font-bold text-green-400">
                  {meals.reduce((sum, meal) => sum + meal.totalProtein, 0)}g
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                <p className="text-slate-400 text-sm mb-1">Carboidrato Total</p>
                <p className="text-3xl font-bold text-blue-400">
                  {meals.reduce((sum, meal) => sum + meal.totalCarbs, 0)}g
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-4 text-center">
                <p className="text-slate-400 text-sm mb-1">Gordura Total</p>
                <p className="text-3xl font-bold text-yellow-400">
                  {meals.reduce((sum, meal) => sum + meal.totalFats, 0)}g
                </p>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-slate-400">
              <p>Cardápio gerado com {numberOfMeals} refeições • Baseado na Tabela TACO</p>
              <p className="text-xs mt-1">Todos os valores nutricionais são por 100g conforme Tabela Brasileira de Composição de Alimentos</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
