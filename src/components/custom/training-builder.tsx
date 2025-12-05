'use client';

import { useState } from 'react';
import { Dumbbell, Plus, Play, TrendingUp } from 'lucide-react';
import { generateWorkoutPlan, generateGluteWorkout, EXERCISE_DATABASE } from '@/lib/training';

export default function TrainingBuilder() {
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [goal, setGoal] = useState<'hypertrophy' | 'strength' | 'weight-loss' | 'glutes'>('hypertrophy');
  const [type, setType] = useState<'ABC' | 'ABCD' | 'FullBody' | 'UpperLower'>('ABC');
  const [duration, setDuration] = useState(45);
  const [workoutPlan, setWorkoutPlan] = useState<any>(null);

  const handleGenerate = () => {
    if (goal === 'glutes') {
      const plan = generateGluteWorkout(level);
      setWorkoutPlan(plan);
    } else {
      const plan = generateWorkoutPlan(level, goal, type, duration);
      setWorkoutPlan(plan);
    }
  };

  return (
    <div className="space-y-6">
      {/* Configuration */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-cyan-400" />
          Configurar Treino
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Level */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">Nível</label>
            <div className="space-y-2">
              {(['beginner', 'intermediate', 'advanced'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                    level === l
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <span className="text-white font-medium capitalize">{l}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">Objetivo</label>
            <div className="space-y-2">
              {(['hypertrophy', 'strength', 'weight-loss', 'glutes'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGoal(g)}
                  className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                    goal === g
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <span className="text-white font-medium capitalize">
                    {g === 'hypertrophy' ? 'Hipertrofia' :
                     g === 'strength' ? 'Força' :
                     g === 'weight-loss' ? 'Emagrecimento' : 'Foco Glúteos'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Type */}
          {goal !== 'glutes' && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Divisão</label>
              <div className="space-y-2">
                {(['ABC', 'ABCD', 'FullBody', 'UpperLower'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                      type === t
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <span className="text-white font-medium">{t}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Duração (minutos)
            </label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="mt-6 w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5" />
          Gerar Treino Personalizado
        </button>
      </div>

      {/* Workout Plan */}
      {workoutPlan && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">{workoutPlan.name}</h3>
            <div className="flex gap-4 text-sm text-slate-400">
              <span>Frequência: {workoutPlan.frequency}x/semana</span>
              <span>Duração: {workoutPlan.duration} min</span>
              <span className="capitalize">Nível: {workoutPlan.level}</span>
            </div>
          </div>

          {workoutPlan.workouts.map((workout: any, index: number) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white">{workout.name}</h4>
                  <p className="text-slate-400 text-sm">Foco: {workout.focus.join(', ')}</p>
                </div>
                <div className="px-4 py-2 bg-cyan-500/20 rounded-lg">
                  <span className="text-cyan-400 font-bold">{workout.exercises.length} exercícios</span>
                </div>
              </div>

              <div className="space-y-4">
                {workout.exercises.map((ex: any, exIndex: number) => (
                  <div key={exIndex} className="bg-slate-800/50 rounded-xl p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h5 className="font-bold text-white text-lg mb-1">{ex.exercise.name}</h5>
                        <p className="text-sm text-slate-400 mb-2">{ex.exercise.description}</p>
                        <div className="flex gap-4 text-sm">
                          <span className="text-cyan-400 font-medium">{ex.sets} séries</span>
                          <span className="text-cyan-400 font-medium">{ex.reps} reps</span>
                          <span className="text-cyan-400 font-medium">{ex.rest}s descanso</span>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-slate-700 rounded-lg">
                        <span className="text-xs text-slate-300">{ex.exercise.muscleGroup}</span>
                      </div>
                    </div>

                    <details className="mt-3">
                      <summary className="text-sm text-cyan-400 cursor-pointer hover:text-cyan-300">
                        Ver execução e dicas
                      </summary>
                      <div className="mt-3 space-y-2">
                        <div>
                          <p className="text-sm font-medium text-white mb-1">Execução:</p>
                          <ul className="text-sm text-slate-400 space-y-1 pl-4">
                            {ex.exercise.execution.map((step: string, i: number) => (
                              <li key={i} className="list-disc">{step}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white mb-1">Erros comuns:</p>
                          <ul className="text-sm text-red-400 space-y-1 pl-4">
                            {ex.exercise.commonMistakes.map((mistake: string, i: number) => (
                              <li key={i} className="list-disc">{mistake}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
