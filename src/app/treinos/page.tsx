'use client';

import { useState } from 'react';
import TrainingSelector, { TrainingSelection } from '@/components/custom/training-selector';
import TrainingBuilder from '@/components/custom/training-builder';
import WorkoutLogger from '@/components/custom/workout-logger';

export default function TreinosPage() {
  const [selection, setSelection] = useState<TrainingSelection | null>(null);

  const cardClass =
    'rounded-2xl border border-slate-800 bg-slate-950/80 p-4 md:p-6 space-y-4';

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

      {!selection && (
        <TrainingSelector
          onConfirm={(s) => {
            console.log('Seleção confirmada:', s);
            setSelection(s);
          }}
        />
      )}

      {selection && (
        <>

          <section className={cardClass}>
            <h2 className="text-xl font-bold text-white">Montar treino personalizado</h2>
            <p className="text-slate-400 text-sm mb-2">
              Use as sugestões acima como base ou monte do zero o seu treino,
              escolhendo exercícios, séries, repetições e intervalos.
            </p>
            <TrainingBuilder />
          </section>

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
