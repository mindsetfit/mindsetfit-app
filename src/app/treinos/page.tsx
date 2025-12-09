'use client';

import { useMemo, useState } from 'react';
import TrainingSelector, {
  TrainingSelection,
} from '@/components/custom/training-selector';

import fullDB, {
  ExerciseRecord,
} from '@/lib/full-training-database';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// -----------------------------------------------------------------------------
// Helpers para montar o treino do dia
// -----------------------------------------------------------------------------

type MindsetModality = 'musculacao' | 'casa' | 'corrida' | 'spinning' | 'crossfit';

function mapSelectionToModality(sel: TrainingSelection | null): MindsetModality | null {
  if (!sel) return null;
  switch (sel.mode) {
    case 'academia':
      return 'musculacao';
    case 'casa':
      return 'casa';
    case 'corrida':
      return 'corrida';
    case 'spinning':
      return 'spinning';
    case 'crossfit':
      return 'crossfit';
    default:
      return null;
  }
}

function estimateExerciseCount(time: number | null): number {
  if (!time || time <= 0) return 6;
  if (time <= 30) return 6;
  if (time <= 45) return 8;
  if (time <= 60) return 10;
  return 12;
}

function buildDailyWorkout(
  selection: TrainingSelection,
  allExercises: ExerciseRecord[]
): ExerciseRecord[] {
  const modality = mapSelectionToModality(selection);
  if (!modality) return [];

  const baseList = allExercises.filter((ex) => ex.modality === modality);

  if (baseList.length === 0) return [];

  const target = estimateExerciseCount(selection.time);

  // Para musculação/casa, tentamos variar grupos
  if (modality === 'musculacao' || modality === 'casa') {
    const byGroup = baseList.reduce<Record<string, ExerciseRecord[]>>((acc, ex) => {
      if (!acc[ex.group]) acc[ex.group] = [];
      acc[ex.group].push(ex);
      return acc;
    }, {});

    const groups = Object.keys(byGroup);
    const workout: ExerciseRecord[] = [];

    let idx = 0;
    while (workout.length < target && groups.length > 0) {
      const group = groups[idx % groups.length];
      const list = byGroup[group];
      const candidate = list[Math.floor(Math.random() * list.length)];
      if (!workout.find((w) => w.id === candidate.id)) {
        workout.push(candidate);
      }
      idx++;
      if (idx > 200) break;
    }
    return workout;
  }

  // Para corrida/spinning/crossfit pegamos “treinos completos”
  const unique: ExerciseRecord[] = [];
  for (const ex of baseList) {
    if (!unique.find((u) => u.id === ex.id)) {
      unique.push(ex);
    }
  }

  const dayIndex = selection.dayIndex && selection.dayIndex > 0
    ? selection.dayIndex
    : 1;

  const planIndex = (dayIndex - 1) % unique.length;
  const chosen = unique[planIndex];

  // Tratamos corrida/spinning/crossfit como 1 treino com descrição longa
  return [chosen];
}

// -----------------------------------------------------------------------------
// Componente principal
// -----------------------------------------------------------------------------

export default function TreinosPage() {
  const [selection, setSelection] = useState<TrainingSelection | null>(null);
  const [dailyWorkout, setDailyWorkout] = useState<ExerciseRecord[]>([]);

  const musculacaoList = useMemo(
    () => fullDB.filter((ex) => ex.modality === 'musculacao'),
    []
  );
  const casaList = useMemo(
    () => fullDB.filter((ex) => ex.modality === 'casa'),
    []
  );
  const corridaList = useMemo(
    () => fullDB.filter((ex) => ex.modality === 'corrida'),
    []
  );
  const spinningList = useMemo(
    () => fullDB.filter((ex) => ex.modality === 'spinning'),
    []
  );
  const crossfitList = useMemo(
    () => fullDB.filter((ex) => ex.modality === 'crossfit'),
    []
  );

  const handleConfigConfirm = (sel: TrainingSelection) => {
    setSelection(sel);
    const workout = buildDailyWorkout(sel, fullDB);
    setDailyWorkout(workout);
    console.log('[MindsetFit] Configuração de treino:', sel);
    console.log('[MindsetFit] Treino do dia gerado:', workout);
  };

  const renderExerciseCard = (ex: ExerciseRecord) => (
    <Card
      key={ex.id}
      className="bg-slate-950/60 border-slate-800 hover:border-cyan-500/40 transition-colors"
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">
          {ex.name}
        </CardTitle>
        <p className="text-[11px] text-slate-400">
          {ex.group}
        </p>
      </CardHeader>
      <CardContent className="space-y-1 text-xs text-slate-200">
        {typeof ex.series !== 'undefined' && (
          <p>
            <span className="text-slate-400">Séries:</span>{' '}
            <span className="font-medium">{ex.series}</span>
          </p>
        )}
        {ex.reps && (
          <p>
            <span className="text-slate-400">Repetições:</span>{' '}
            <span className="font-medium">{ex.reps}</span>
          </p>
        )}
        {ex.rest && (
          <p>
            <span className="text-slate-400">Descanso:</span>{' '}
            <span className="font-medium">{ex.rest}</span>
          </p>
        )}
        {ex.description && (
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            {ex.description}
          </p>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-6 md:px-8 md:py-10 space-y-8">
      {/* HEADER */}
      <header className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.18em] text-pink-400">
          Treinos & Performance
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Treinos personalizados e inteligentes
        </h1>
        <p className="text-slate-400 max-w-2xl text-sm md:text-base">
          Defina modalidade, tempo disponível, nível e quantos dias você treina na
          semana. O MindsetFit distribui grupamentos, monta o treino do dia
          automaticamente e ainda oferece uma biblioteca completa por modalidade.
        </p>
      </header>

      {/* BLOCO 1 — CONFIGURAÇÃO DO TREINO DA SEMANA */}
      <section>
        <TrainingSelector onConfirm={handleConfigConfirm} />
      </section>

      {/* BLOCO 2 — MEU TREINO DO DIA */}
      <section className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-white">
          Meu treino de hoje
        </h2>
        <p className="text-xs text-slate-400 max-w-2xl">
          Aqui aparece o treino gerado a partir da sua configuração acima: modalidade,
          tempo, nível e posição na semana (Treino 1, 2, 3...).
        </p>

        <Card className="bg-slate-900/60 border-slate-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-base md:text-lg text-white">
              {selection
                ? (() => {
                    const mod = mapSelectionToModality(selection);
                    const labelMap: Record<MindsetModality, string> = {
                      musculacao: 'Musculação',
                      casa: 'Treino em Casa',
                      corrida: 'Corrida',
                      spinning: 'Spinning / Bike',
                      crossfit: 'Cross Training / Crossfit',
                    };
                    return `Treino do dia • ${
                      mod ? labelMap[mod] : 'Selecione uma modalidade'
                    }`;
                  })()
                : 'Treino do dia • Configure seu treino acima'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {dailyWorkout.length === 0 ? (
              <p className="text-sm text-slate-400">
                Assim que você configurar o treino da semana e escolher o treino de
                hoje, o app monta automaticamente a lista de exercícios aqui.
              </p>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {dailyWorkout.map(renderExerciseCard)}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* BLOCO 3 — BIBLIOTECA COMPLETA POR MODALIDADE */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-white">
            Biblioteca de Treinos • MindsetFit Premium
          </h2>
          <p className="text-xs text-slate-400 max-w-2xl">
            Explore todos os exercícios e treinos cadastrados no seu banco premium,
            separados por modalidade. Use como referência para montar, ajustar ou
            evoluir seus treinos ao longo das semanas.
          </p>
        </div>

        <Card className="bg-slate-900/60 border-slate-800">
          <CardContent className="pt-6">
            <Tabs defaultValue="musculacao" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-slate-800/50">
                <TabsTrigger value="musculacao">Musculação</TabsTrigger>
                <TabsTrigger value="casa">Casa</TabsTrigger>
                <TabsTrigger value="corrida">Corrida</TabsTrigger>
                <TabsTrigger value="spinning">Spinning</TabsTrigger>
                <TabsTrigger value="crossfit">Crossfit</TabsTrigger>
              </TabsList>

              {/* Musculação */}
              <TabsContent value="musculacao" className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-100">
                  Musculação — todos os grupamentos
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {musculacaoList.map(renderExerciseCard)}
                </div>
              </TabsContent>

              {/* Casa */}
              <TabsContent value="casa" className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-100">
                  Treino em Casa — exercícios funcionais e com pouca carga
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {casaList.map(renderExerciseCard)}
                </div>
              </TabsContent>

              {/* Corrida */}
              <TabsContent value="corrida" className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-100">
                  Corrida — planilhas e treinos estruturados
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {corridaList.map(renderExerciseCard)}
                </div>
              </TabsContent>

              {/* Spinning */}
              <TabsContent value="spinning" className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-100">
                  Spinning / Bike Indoor — treinos por nível
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {spinningList.map(renderExerciseCard)}
                </div>
              </TabsContent>

              {/* Crossfit */}
              <TabsContent value="crossfit" className="mt-6 space-y-4">
                <h3 className="text-sm font-semibold text-slate-100">
                  Cross Training / Crossfit — WODs completos
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {crossfitList.map(renderExerciseCard)}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
