"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { generateTrainingPlan } from "@/lib/generate-training-plan";
import TrainingLogTable from "@/components/custom/training-log-table";
import SessionExercisesSection from "@/components/custom/session-exercises-section";

function buildPlanId(meta: any): string {
  const strategy = meta?.strategyId ?? "custom";
  const level = meta?.level ?? "na";
  const days = meta?.daysPerWeek ?? "x";
  const weeks = meta?.weeks ?? "1";
  return `plan-${strategy}-${level}-${days}x${weeks}`;
}

function flattenDayExercises(day: any) {
  const groups = Array.isArray(day?.groups) ? day.groups : [];
  const rows: {
    id: string;
    name: string;
    group?: string;
    series?: number | string;
    reps?: string | number | null;
  }[] = [];

  groups.forEach((g: any) => {
    const exs = Array.isArray(g?.exercises) ? g.exercises : [];
    exs.forEach((ex: any, idx: number) => {
      rows.push({
        id:
          ex.id ??
          `${day.id ?? "day"}-${g.group ?? "grupo"}-${idx}`,
        name: ex.name ?? "Exercício",
        group: g.group,
        series: ex.targetSeries ?? ex.series,
        reps: ex.targetReps ?? ex.reps,
      });
    });
  });

  return rows;
}



export default function PeriodizacaoResumo() {
  const searchParams = useSearchParams();

  const raw = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  const plan: any = useMemo(() => {
    try {
      return generateTrainingPlan(raw);
    } catch (e) {
      console.error("Erro ao gerar plano:", e);
      return null;
    }
  }, [raw]);

  if (!plan) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="max-w-md text-center space-y-3">
          <h1 className="text-xl font-semibold">
            Não foi possível carregar a periodização
          </h1>
          <p className="text-sm text-slate-400">
            Volte para a etapa de preenchimento, revise os dados e tente
            novamente.
          </p>
        </div>
      </div>
    );
  }

  const meta = plan.meta ?? {};
  const days: any[] = Array.isArray(plan.days) ? plan.days : [];
  const planId = buildPlanId(meta);

  const [openDayId, setOpenDayId] = useState<string | null>(
    days[0]?.id ?? null
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            Periodização Inteligente — Resumo do Plano
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl">
            Abaixo está a visão geral da sua estratégia de treino, com divisão
            de dias, foco por sessão e distribuição dos grupamentos musculares.
            Logo em seguida, você consegue registrar carga, repetições e RPE
            por exercício, permitindo acompanhar a evolução de forma precisa.
          </p>
        </header>

        {/* Bloco de metas principais */}
        <section className="border border-slate-800 rounded-xl bg-slate-900/60 p-4 md:p-5">
          <h2 className="text-lg font-semibold text-white mb-3">
            Estrutura Geral do Ciclo
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div>
              <p className="text-xs text-slate-400">Estratégia</p>
              <p className="font-medium text-slate-100">
                {meta.strategyName ?? "Personalizada"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Nível</p>
              <p className="font-medium text-slate-100 capitalize">
                {meta.level ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Dias/semana</p>
              <p className="font-medium text-slate-100">
                {meta.daysPerWeek ?? "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Duração do ciclo</p>
              <p className="font-medium text-slate-100">
                {meta.weeks
                  ? `${meta.weeks} semanas`
                  : "4–12 semanas (ajustável)"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400">
                Tempo médio por sessão
              </p>
              <p className="font-medium text-slate-100">
                {meta.sessionMinutes
                  ? `${meta.sessionMinutes} min`
                  : "45–75 min"}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-slate-400">Objetivo principal</p>
              <p className="font-medium text-slate-100">
                {meta.objective ??
                  "Manutenção, ganho de massa ou emagrecimento/definição (conforme seleção na etapa anterior)."}
              </p>
            </div>
          </div>
        </section>

        {/* Dias de treino */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Divisão de dias e foco por sessão
          </h2>

          <div className="space-y-4">
            {days.map((day: any, index: number) => {
              const groups = Array.isArray(day?.groups) ? day.groups : [];
              const dayLabel = day.label ?? `Dia ${index + 1}`;
              const exercisesForLog = flattenDayExercises(day);
              const isOpen = openDayId === day.id;

              return (
                <div
                  key={day.id ?? `day-${index}`}
                  className="border border-slate-800 rounded-xl bg-slate-900/60 p-4 md:p-5 space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-cyan-300">
                        {dayLabel}
                      </p>
                      <p className="text-xs text-slate-400">
                        Foco principal:{" "}
                        <span className="text-slate-200">
                          {day.mainFocus ??
                            "Distribuição equilibrada de grupos musculares"}
                        </span>
                      </p>
                      {day.secondaryFocus && (
                        <p className="text-xs text-slate-400">
                          Foco secundário:{" "}
                          <span className="text-slate-200">
                            {day.secondaryFocus}
                          </span>
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenDayId(isOpen ? null : day.id ?? null)
                      }
                      className="px-3 py-1.5 rounded-lg border border-cyan-500/60 text-xs font-semibold text-cyan-100 hover:bg-cyan-500/10 transition"
                    >
                      {isOpen
                        ? "Ocultar registro de cargas"
                        : "Registrar cargas do dia"}
                    </button>
                  </div>

                  {/* Lista resumida de grupos e exercícios */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {groups.map((g: any, gi: number) => (
                      <div
                        key={g.group ?? `group-${gi}`}
                        className="border border-slate-800/70 rounded-lg bg-slate-900/70 p-3 space-y-2"
                      >
                        <p className="font-semibold text-slate-100">
                          {g.group ?? "Grupo muscular"}
                        </p>
                        <ul className="space-y-1 list-disc list-inside text-slate-300">
                          {Array.isArray(g.exercises) &&
                            g.exercises.map((ex: any, ei: number) => (
                              <li key={ex.id ?? `ex-${ei}`}>
                                <span className="text-slate-100">
                                  {ex.name ?? "Exercício"}
                                </span>{" "}
                                <span className="text-slate-400">
                                  {ex.series ?? ex.targetSeries
                                    ? `• ${ex.series ?? ex.targetSeries} séries`
                                    : ""}
                                  {ex.reps ?? ex.targetReps
                                    ? ` • ${ex.reps ?? ex.targetReps} reps`
                                    : ""}
                                  {ex.technique
                                    ? ` • técnica: ${ex.technique}`
                                    : ""}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Registro de cargas / RPE / notas para o dia */}
                  {isOpen && exercisesForLog.length > 0 && (
                    <TrainingLogTable
                      planId={planId}
                      dayId={day.id ?? `day-${index}`}
                      dayLabel={dayLabel}
                      exercises={exercisesForLog}
                    />
                  )}
                </div>

              );
            })}
          </div>
        </section>
        {/* Sessões sugeridas automaticamente */}
        <SessionExercisesSection plan={plan} />



        {/* Observação final */}
        <section className="border border-slate-800 rounded-xl bg-slate-900/60 p-4">
          <p className="text-xs text-slate-400">
            Os registros de carga, repetições e RPE ficam salvos localmente
            neste dispositivo por enquanto. Nas próximas etapas, podemos
            evoluir para um banco de dados online, integrando com relatórios,
            gráficos de progressão e histórico completo de treinos.
          </p>
        </section>
      </main>
    </div>
  );
}
