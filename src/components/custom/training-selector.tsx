'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export type TrainingSelection = {
  mode: 'academia' | 'casa' | 'spinning' | 'corrida' | 'crossfit' | '';
  time: number | null;
  level: 'iniciante' | 'intermediario' | 'avancado' | '';
  daysPerWeek: number | null;
  dayIndex: number | null; // qual treino é hoje (1,2,3...)
};

export default function TrainingSelector({
  onConfirm,
}: {
  onConfirm: (selection: TrainingSelection) => void;
}) {
  const [selection, setSelection] = useState<TrainingSelection>({
    mode: '',
    time: null,
    level: '',
    daysPerWeek: null,
    dayIndex: null,
  });

  const cardClass =
    'rounded-2xl border border-slate-800 bg-slate-950/80 p-4 md:p-6 space-y-4';

  const labelClass = 'text-xs font-medium text-slate-300';
  const inputClass =
    'w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50';

  const canProceed =
    selection.mode !== '' &&
    selection.time &&
    selection.time > 0 &&
    selection.level !== '' &&
    selection.daysPerWeek &&
    selection.daysPerWeek > 0 &&
    selection.dayIndex &&
    selection.dayIndex > 0;

  const daysOptions = [2, 3, 4, 5, 6];

  const treinoDoDiaOptions =
    selection.daysPerWeek && selection.daysPerWeek > 0
      ? Array.from({ length: selection.daysPerWeek }, (_, i) => i + 1)
      : [];

  return (
    <section className={cardClass}>
      <h2 className="text-xl font-bold text-white">Configuração do treino da semana</h2>
      <p className="text-slate-400 text-sm">
        Primeiro, vamos entender como será sua rotina: onde você vai treinar, quanto tempo
        tem por sessão, qual seu nível e quantos dias pretende treinar na semana. Assim o app
        distribui todos os grupamentos musculares ao longo da semana.
      </p>

      {/* Modalidade */}
      <div>
        <label className={labelClass}>Onde você vai treinar hoje?</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2">
          {['academia', 'casa', 'spinning', 'corrida', 'crossfit'].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSelection({ ...selection, mode: option as any })}
              className={`rounded-xl px-3 py-2 text-sm capitalize ${
                selection.mode === option
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'bg-slate-900/60 text-slate-300 border border-slate-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Tempo */}
      <div>
        <label className={labelClass}>Tempo disponível hoje (minutos)</label>
        <input
          type="number"
          className={inputClass}
          placeholder="Ex: 40"
          value={selection.time ?? ''}
          onChange={(e) =>
            setSelection({
              ...selection,
              time: parseInt(e.target.value) || null,
            })
          }
        />
      </div>

      {/* Nível */}
      <div>
        <label className={labelClass}>Nível atual</label>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {['iniciante', 'intermediario', 'avancado'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setSelection({ ...selection, level: level as any })}
              className={`rounded-xl px-3 py-2 text-sm capitalize ${
                selection.level === level
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'bg-slate-900/60 text-slate-300 border border-slate-700'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Dias na semana */}
      <div>
        <label className={labelClass}>Quantos dias você pretende treinar na semana?</label>
        <div className="grid grid-cols-5 gap-2 mt-2">
          {daysOptions.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() =>
                setSelection({
                  ...selection,
                  daysPerWeek: d,
                  dayIndex:
                    selection.dayIndex && selection.dayIndex <= d
                      ? selection.dayIndex
                      : 1,
                })
              }
              className={`rounded-xl px-3 py-2 text-sm ${
                selection.daysPerWeek === d
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'bg-slate-900/60 text-slate-300 border border-slate-700'
              }`}
            >
              {d}x/sem
            </button>
          ))}
        </div>
        <p className="text-[11px] text-slate-500 mt-1">
          O app vai distribuir os grupamentos ao longo desses dias.
        </p>
      </div>

      {/* Treino do dia */}
      {treinoDoDiaOptions.length > 0 && (
        <div>
          <label className={labelClass}>Qual treino é o de hoje?</label>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
            {treinoDoDiaOptions.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() =>
                  setSelection({
                    ...selection,
                    dayIndex: d,
                  })
                }
                className={`rounded-xl px-3 py-2 text-sm ${
                  selection.dayIndex === d
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'bg-slate-900/60 text-slate-300 border border-slate-700'
                }`}
              >
                Treino {d}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            Exemplo: se você treina 4x/sem, o app monta Treino 1, 2, 3 e 4 com
            divisões diferentes (superior, inferior, etc.).
          </p>
        </div>
      )}

      {/* Botão */}
      <div className="flex justify-end pt-4">
        <Button
          disabled={!canProceed}
          onClick={() => onConfirm(selection)}
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6"
        >
          Gerar treino do dia
        </Button>
      </div>
    </section>
  );
}
