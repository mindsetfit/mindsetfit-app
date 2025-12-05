'use client';

import { useState } from 'react';
import { Activity, Zap, TrendingUp, Target } from 'lucide-react';
import { calculateMetabolism, adjustCalories } from '@/lib/calculations';
import { ACTIVITY_LEVELS } from '@/lib/types';

interface NutritionCalculatorProps {
  userData: {
    weight: number;
    height: number;
    age: number;
    gender: 'male' | 'female';
  };
}

export default function NutritionCalculator({ userData }: NutritionCalculatorProps) {
  const [activityLevel, setActivityLevel] = useState<keyof typeof ACTIVITY_LEVELS>('moderate');
  const [goal, setGoal] = useState<'deficit' | 'maintenance' | 'surplus'>('maintenance');
  const [results, setResults] = useState<any>(null);

  const handleCalculate = () => {
    const assessment = {
      ...userData,
      id: '1',
      userId: '1',
      date: new Date().toISOString(),
      method: 'imc' as const
    };

    const metabolism = calculateMetabolism(assessment, activityLevel);
    const targetCalories = adjustCalories(metabolism.tdee, goal, 'moderate');

    setResults({
      ...metabolism,
      targetCalories,
      goal
    });
  };

  return (
    <div className="space-y-6">
      {/* Activity Level */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6 text-cyan-400" />
          Nível de Atividade
        </h3>
        
        <div className="space-y-3">
          {Object.entries(ACTIVITY_LEVELS).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActivityLevel(key as keyof typeof ACTIVITY_LEVELS)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                activityLevel === key
                  ? 'border-cyan-500 bg-cyan-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white">{value.description}</h4>
                  <p className="text-sm text-slate-400">Multiplicador: {value.multiplier}x</p>
                </div>
                {activityLevel === key && (
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Goal Selection */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-cyan-400" />
          Objetivo
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setGoal('deficit')}
            className={`p-6 rounded-xl border-2 transition-all ${
              goal === 'deficit'
                ? 'border-red-500 bg-red-500/10'
                : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            <TrendingUp className="w-8 h-8 text-red-400 mb-2" />
            <h4 className="font-bold text-white mb-1">Déficit</h4>
            <p className="text-sm text-slate-400">Perder peso</p>
          </button>
          
          <button
            onClick={() => setGoal('maintenance')}
            className={`p-6 rounded-xl border-2 transition-all ${
              goal === 'maintenance'
                ? 'border-cyan-500 bg-cyan-500/10'
                : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            <Activity className="w-8 h-8 text-cyan-400 mb-2" />
            <h4 className="font-bold text-white mb-1">Manutenção</h4>
            <p className="text-sm text-slate-400">Manter peso</p>
          </button>
          
          <button
            onClick={() => setGoal('surplus')}
            className={`p-6 rounded-xl border-2 transition-all ${
              goal === 'surplus'
                ? 'border-green-500 bg-green-500/10'
                : 'border-slate-700 hover:border-slate-600'
            }`}
          >
            <Zap className="w-8 h-8 text-green-400 mb-2" />
            <h4 className="font-bold text-white mb-1">Superávit</h4>
            <p className="text-sm text-slate-400">Ganhar massa</p>
          </button>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30"
      >
        Calcular Necessidades Calóricas
      </button>

      {/* Results */}
      {results && (
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white mb-6">Seus Resultados</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-900/50 rounded-xl p-4">
              <p className="text-slate-400 text-sm mb-1">TMB (Basal)</p>
              <p className="text-3xl font-bold text-white">{results.bmr}</p>
              <p className="text-cyan-400 text-sm">kcal/dia</p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-4">
              <p className="text-slate-400 text-sm mb-1">TDEE (Total)</p>
              <p className="text-3xl font-bold text-white">{results.tdee}</p>
              <p className="text-cyan-400 text-sm">kcal/dia</p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-4">
              <p className="text-slate-400 text-sm mb-1">Meta Calórica</p>
              <p className="text-3xl font-bold text-white">{results.targetCalories}</p>
              <p className="text-cyan-400 text-sm">kcal/dia</p>
            </div>
            
            <div className="bg-slate-900/50 rounded-xl p-4">
              <p className="text-slate-400 text-sm mb-1">Equação</p>
              <p className="text-2xl font-bold text-white capitalize">{results.equation}</p>
              <p className="text-cyan-400 text-sm">Recomendada</p>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-4">Distribuição de Macronutrientes</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-medium">Proteínas</span>
                  <span className="text-cyan-400 font-bold">{results.protein}g</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600" style={{ width: '30%' }}></div>
                </div>
                <p className="text-sm text-slate-400 mt-1">{results.proteinPerKg}g/kg</p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-medium">Carboidratos</span>
                  <span className="text-cyan-400 font-bold">{results.carbs}g</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{ width: '40%' }}></div>
                </div>
                <p className="text-sm text-slate-400 mt-1">{results.carbsPerKg}g/kg</p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-medium">Gorduras</span>
                  <span className="text-cyan-400 font-bold">{results.fats}g</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600" style={{ width: '30%' }}></div>
                </div>
                <p className="text-sm text-slate-400 mt-1">{results.fatsPerKg}g/kg</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
