'use client';

import { useState } from 'react';
import TrainingSelector, { TrainingSelection } from '@/components/custom/training-selector';
import TrainingBuilder from '@/components/custom/training-builder';
import WorkoutLogger from '@/components/custom/workout-logger';
import * as trainingGen from '@/utils/training-generator';

type GeneratedWorkout = any; // depois refinamos com o tipo real

function resolveGenerateFn(): ((s: TrainingSelection) => any) | null {
  const candidates = [
    (trainingGen as any).generateTrainingPlan,
    (trainingGen as any).generatePlan,
    (trainingGen as any).default,
  ];

  for (const fn of candidates) {
    if (typeof fn === 'function') {
      return fn as (s: TrainingSelection) => any;
    }
  }

  console.error(
    '[MindsetFit Treinos] Nenhuma função válida encontrada em utils/training-generator.ts. Módulo recebido:',
    trainingGen
  );
  return null;
}

export default function TreinosPage() {
  const [selection, setSelection] = useState<TrainingSelection | null>(null);
  const [generatedWorkouts, setGeneratedWorkouts] = useState<GeneratedWorkout[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const cardClass =
    'rounded-2xl border border-slate-800 bg-slate-950/80 p-4 md:p-6 space-y-4';

  const modeLabels: Record<TrainingSelection['mode'] | '', string> = {
    academia: 'Musculação (Academia)',
    casa: 'Treino em Casa',
    spinning: 'Spinning / Bike Indoor',
    corrida: 'Corrida',
    crossfit: 'Cross Training / Crossfit',
    '': 'Treino',
  };

  const currentModeLabel =
    selection && selection.mode ? modeLabels[selection.mode] : 'Treino';

  const handleGenerate = (s: TrainingSelection) => {
    setSelection(s);

    try {
      const fn = resolveGenerateFn();
      if (!fn) {
        setGeneratedWorkouts([]);
        return;
      }

      const plan = fn(s);

      if (Array.isArray(plan)) {
        // caso a função já devolva um array de treinos
        setGeneratedWorkouts(plan);
        setHighlightIndex(0);
      } else if (plan && Array.isArray((plan as any).days)) {
        // caso devolva algo como { days: [...] }
        setGeneratedWorkouts((plan as any).days);
        setHighlightIndex(0);
      } else {
        console.warn(
          '[MindsetFit Treinos] Plano de treino retornado em formato inesperado:',
          plan
        );
        setGeneratedWorkouts([]);
      }
    } catch (error) {
      console.error('[MindsetFit Treinos] Erro ao gerar plano automático de treino:', error);
      setGeneratedWorkouts([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-6 md:px-8 md:py-10 space-y-8">
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-pink-400">
          Treinos & Performance
        </p>
        <h1 className="mt-1 text-2xl md:text-3xl font-bold text-white">
          Treinos personalizados e inteligentes
        </h1>
        <p className="text-slate-400 max-w-2xl mt-1">
          Defina modalidade, tempo disponível, nível e quantos dias você treina na
          semana. O app distribui todos os grupamentos musculares ao longo da semana,
          gera sugestões automáticas de treino para o dia e permite montar e registrar
          tudo de forma detalhada.
        </p>
      </div>

      {/* Passo 1: Seletor de modalidade / nível / dias */}
      {!selection && (
        <TrainingSelector
          onConfirm={(s) => {
            console.log('[MindsetFit Treinos] Seleção confirmada:', s);
            handleGenerate(s);
          }}
        />
      )}

      {/* Quando a seleção estiver feita, mostra os treinos Elite + builder + logger */}
      {selection && (
        <>
          {/* Sugestões automáticas por modalidade (Elite) */}
          <section className={cardClass}>
            <h2 className="text-xl font-bold text-white">
              Sugestões automáticas para {currentModeLabel}
            </h2>
            <p className="text-slate-400 text-sm mb-4">
              Abaixo estão treinos completos gerados pela engine MindsetFit para a
              modalidade escolhida ({currentModeLabel}). Eles já vêm com blocos,
              tempo estimado e foco específico (adaptação, resistência, força,
              performance, etc.).
            </p>

            {generatedWorkouts.length === 0 ? (
              <p className="text-sm text-slate-500">
                Clique em &quot;Gerar treino do dia&quot; para ver as sugestões
                automáticas desta modalidade.
              </p>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {generatedWorkouts.map((workout: any, index: number) => (
                    <div
                      key={workout.id ?? index}
                      onClick={() => setHighlightIndex(index)}
                      className={`rounded-xl border p-4 cursor-pointer transition-all ${
                        index === highlightIndex
                          ? 'border-cyan-500 bg-slate-900/80 shadow-lg shadow-cyan-500/20'
                          : 'border-slate-800 bg-slate-950/60 hover:border-cyan-400 hover:bg-slate-900/80'
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-2 mb-2">
                        <h3 className="text-sm font-semibold text-slate-50">
                          {workout.name ?? 'Treino sugerido'}
                        </h3>
                        {workout.estimatedTime && (
                          <span className="text-xs text-cyan-400">
                            {workout.estimatedTime}
                          </span>
                        )}
                      </div>

                      {workout.goal && (
                        <p className="text-xs text-slate-400 mb-2">
                          {workout.goal}
                        </p>
                      )}

                      {Array.isArray(workout.blocks) &&
                        workout.blocks.length > 0 && (
                          <ul className="space-y-1 text-[11px] text-slate-400">
                            {workout.blocks
                              .slice(0, 3)
                              .map((block: any, i: number) => (
                                <li key={i}>
                                  <span className="font-semibold text-slate-300">
                                    {block.label ??
                                      block.name ??
                                      `Bloco ${i + 1}`}
                                    :
                                  </span>{' '}
                                  {block.description ??
                                    block.details ??
                                    block.duration ??
                                    ''}
                                </li>
                              ))}
                          </ul>
                        )}
                    </div>
                  ))}
                </div>

                {generatedWorkouts[highlightIndex] && (
                  <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">
                      Detalhes do treino em destaque
                    </p>
                    <h3 className="text-sm font-semibold text-slate-50 mb-1">
                      {generatedWorkouts[highlightIndex].name ??
                        'Treino selecionado'}
                    </h3>
                    {generatedWorkouts[highlightIndex].instructions && (
                      <p className="text-xs text-slate-400 mb-2">
                        {generatedWorkouts[highlightIndex].instructions}
                      </p>
                    )}
                  </div>
                )}
              </>
            )}
          </section>

          {/* Montagem manual do treino (Musculação / Casa) */}
          <section className={cardClass}>
            <h2 className="text-xl font-bold text-white">Montar treino personalizado</h2>
            <p className="text-slate-400 text-sm mb-2">
              Use as sugestões acima como base ou monte do zero o seu treino,
              escolhendo exercícios, séries, repetições e intervalos. Ideal para
              musculação (academia) e treinos completos em casa.
            </p>
            <TrainingBuilder />
          </section>

          {/* Registro do treino realizado */}
          <section className={cardClass}>
            <h2 className="text-xl font-bold text-white">Registrar treino realizado</h2>
            <p className="text-slate-400 text-sm mb-2">
              Após o treino, registre cargas (kg), repetições, percepção de
              esforço e observações. Isso ajuda a acompanhar sua evolução
              semana a semana.
            </p>
            <WorkoutLogger />
          </section>
        </>
      )}
    </div>
  );
}
