'use client';

import { useMemo, useState } from 'react';
import { Dumbbell, Home, Bike, Activity, Flame, ChevronRight } from 'lucide-react';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import fullTrainingDatabase from '@/lib/full-training-database';

type ModalityId = 'musculacao' | 'casa' | 'corrida' | 'spinning' | 'crossfit';

type ExerciseRecord = {
  id: string;
  name: string;
  modality: ModalityId;
  group: string;
  subgroup?: string;
  level?: 'iniciante' | 'intermediario' | 'avancado';
  series?: number;
  reps?: string;
  rest?: string;
  tempo?: string;
  intensity?: string;
  notes?: string;
};

const modalities: {
  id: ModalityId;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: 'musculacao',
    label: 'Musculação',
    description: 'Treinos completos por grupamento muscular, com foco em performance e estética.',
    icon: Dumbbell,
  },
  {
    id: 'casa',
    label: 'Casa / Funcional',
    description: 'Treinos sem equipamento ou com cargas leves, perfeitos para casa ou viagens.',
    icon: Home,
  },
  {
    id: 'corrida',
    label: 'Corrida',
    description: 'Planilhas de corrida, intervalados, ritmados e treinos para provas.',
    icon: Activity,
  },
  {
    id: 'spinning',
    label: 'Spinning',
    description: 'Sessões completas em bike indoor, com cadência, subidas e HIIT.',
    icon: Bike,
  },
  {
    id: 'crossfit',
    label: 'CrossFit',
    description: 'WODs completos, combinando força, condicionamento e alta intensidade.',
    icon: Flame,
  },
];

export default function TreinosPage() {
  const [currentModality, setCurrentModality] = useState<ModalityId>('musculacao');

  const db = (fullTrainingDatabase as ExerciseRecord[]) ?? [];

  const groupedByModality = useMemo(() => {
    const map: Record<
      ModalityId,
      Record<string, ExerciseRecord[]>
    > = {
      musculacao: {},
      casa: {},
      corrida: {},
      spinning: {},
      crossfit: {},
    };

    for (const raw of db) {
      const ex = raw as ExerciseRecord;

      const modality: ModalityId =
        ex.modality && ['musculacao', 'casa', 'corrida', 'spinning', 'crossfit'].includes(ex.modality)
          ? ex.modality
          : 'musculacao';

      const group = ex.group || 'Geral';

      if (!map[modality][group]) {
        map[modality][group] = [];
      }
      map[modality][group].push(ex);
    }

    return map;
  }, [db]);

  const currentGroups = groupedByModality[currentModality] || {};
  const totalExercises =
    Object.values(currentGroups).reduce((acc, arr) => acc + arr.length, 0) || 0;

  const currentModalityMeta = modalities.find((m) => m.id === currentModality)!;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-6 md:px-8 md:py-10 space-y-8">
      {/* HEADER PRINCIPAL */}
      <header className="space-y-4">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-400">
            Treinos & Performance
          </p>
          <h1 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Treinos
            </span>
          </h1>
          <p className="mt-2 text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Escolha a modalidade, visualize os treinos completos por grupamento muscular
            e siga as orientações de séries, repetições, descanso e intensidade.
          </p>
        </div>

        {/* LISTA DE MODALIDADES — IGUAL AO PRINT */}
        <section className="max-w-2xl mx-auto space-y-3">
          {modalities.map((mod) => {
            const Icon = mod.icon;
            const isActive = currentModality === mod.id;

            return (
              <button
                key={mod.id}
                type="button"
                onClick={() => {
                  setCurrentModality(mod.id);
                  // rolagem suave até a área dos treinos
                  const target = document.getElementById('modality-detail');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`w-full flex items-center justify-between rounded-2xl px-5 py-4 md:px-6 md:py-5 transition-all border
                  ${
                    isActive
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-[0_0_40px_rgba(34,211,238,0.30)]'
                      : 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border
                      ${
                        isActive
                          ? 'border-cyan-400/70 bg-cyan-500/10'
                          : 'border-slate-700 bg-slate-900'
                      }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isActive ? 'text-cyan-400' : 'text-slate-200'
                      }`}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-lg md:text-xl font-semibold text-slate-50">
                      {mod.label}
                    </span>
                    <span className="text-xs md:text-sm text-slate-400 text-left">
                      {mod.description}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  className={`h-5 w-5 ${
                    isActive ? 'text-cyan-400' : 'text-slate-500'
                  }`}
                />
              </button>
            );
          })}
        </section>
      </header>

      {/* ÁREA DE DETALHES DA MODALIDADE SELECIONADA */}
      <main
        id="modality-detail"
        className="max-w-6xl mx-auto space-y-6 border-t border-slate-800 pt-6"
      >
        {/* CABEÇALHO DA MODALIDADE ATUAL */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-400">
              Modalidade selecionada
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-50">
              {currentModalityMeta.label}
            </h2>
            <p className="text-xs md:text-sm text-slate-400 max-w-xl">
              {currentModalityMeta.description}
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700 px-4 py-3 text-right">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Grupamentos
              </p>
              <p className="text-lg font-semibold text-slate-50">
                {Object.keys(currentGroups).length || 0}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-700 px-4 py-3 text-right">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Exercícios
              </p>
              <p className="text-lg font-semibold text-cyan-400">
                {totalExercises}
              </p>
            </div>
          </div>
        </div>

        {/* LISTA DE GRUPAMENTOS + EXERCÍCIOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {Object.entries(currentGroups).map(([groupName, exercises]) => (
            <Card
              key={groupName}
              className="bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg text-slate-50 flex items-center justify-between">
                  <span>{groupName}</span>
                  <span className="text-xs font-normal text-slate-400">
                    {exercises.length} exercício
                    {exercises.length === 1 ? '' : 's'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {exercises.map((ex) => {
                  const detailParts: string[] = [];

                  if (ex.series) detailParts.push(`${ex.series} séries`);
                  if (ex.reps) detailParts.push(`${ex.reps} repetições`);
                  if (ex.tempo) detailParts.push(`Tempo: ${ex.tempo}`);
                  if (ex.intensity) detailParts.push(`Intensidade: ${ex.intensity}`);
                  if (ex.rest) detailParts.push(`Descanso: ${ex.rest}`);

                  const detailLine =
                    detailParts.length > 0 ? detailParts.join(' • ') : null;

                  return (
                    <div
                      key={ex.id}
                      className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-sm"
                    >
                      <p className="font-medium text-slate-50">{ex.name}</p>
                      {detailLine && (
                        <p className="text-[11px] text-slate-400 mt-1">
                          {detailLine}
                        </p>
                      )}
                      {ex.notes && (
                        <p className="text-[11px] text-slate-500 mt-1">
                          {ex.notes}
                        </p>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          ))}

          {Object.keys(currentGroups).length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-10 text-center">
              <p className="text-sm text-slate-400">
                Ainda não há exercícios cadastrados para essa modalidade.
              </p>
              <Button
                className="mt-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                type="button"
                onClick={() => setCurrentModality('musculacao')}
              >
                Voltar para Musculação
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
