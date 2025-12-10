"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { TRAINING_STRATEGIES } from "@/lib/training-strategies";
import { generateTrainingPlan } from "@/lib/generate-training-plan";

function formatObjective(obj?: string | null): string {
  if (obj === "emagrecimento") return "Emagrecimento / Definição";
  if (obj === "manutencao") return "Manutenção";
  if (obj === "ganho_massa") return "Ganho de massa";
  return "Manutenção / ganho de massa";
}

function describeSeriesRule(level?: string | null): string {
  if (level === "iniciante") {
    return "Base de 3 séries por exercício, foco em técnica, controle e consistência. Sem uso de técnicas avançadas.";
  }
  if (level === "intermediario") {
    return "Base de 3 séries por exercício, com possibilidade de progressão para 4 séries em semanas de boa resposta (volume progressivo controlado).";
  }
  if (level === "avancado") {
    return "Base de 4 séries por exercício, com inserção pontual de técnicas avançadas (rest-pause, drop-set, back-off set) em 1–2 exercícios por grupamento nas semanas-chave.";
  }
  return "Volume padrão ajustado conforme resposta do aluno ao longo das semanas.";
}

function advancedTechniquesDescription(level?: string | null): string {
  if (level !== "avancado") {
    return "Técnicas avançadas não são prioridade nesse nível; foco principal é consolidar técnica e progressão de carga segura.";
  }
  return "Serão utilizadas técnicas como: rest-pause, drop-set e back-off set em exercícios estratégicos (geralmente multiarticulares), em semanas específicas do ciclo, para potencializar ganho de massa sem exagerar na fadiga.";
}

export default function PeriodizacaoResumo() {
  const searchParams = useSearchParams();

  const strategyId = searchParams.get("strategyId") ?? "fullbody";
  const level = searchParams.get("level") ?? "iniciante";
  const objective = searchParams.get("objective") ?? "manutencao";
  const daysPerWeek = Number(searchParams.get("daysPerWeek") ?? "4");
  const weeks = Number(searchParams.get("weeks") ?? "8");
  const sessionMinutes = Number(searchParams.get("sessionMinutes") ?? "60");
  const includeHiit = searchParams.get("includeHiit") === "1";

  const strategy = TRAINING_STRATEGIES.find((s) => s.id === strategyId);

  const plan = useMemo(
    () =>
      generateTrainingPlan({
        strategyId,
        level,
        daysPerWeek,
        weeks,
        sessionMinutes,
        objective,
        includeHiit,
      }),
    [strategyId, level, daysPerWeek, weeks, sessionMinutes, objective, includeHiit]
  );

  const objectiveLabel = formatObjective(objective);
  const seriesRule = describeSeriesRule(level);
  const advTech = advancedTechniquesDescription(level);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-white">
          Resumo da Periodização Inteligente
        </h1>
        <p className="text-sm text-slate-300">
          Abaixo você encontra a estratégia completa de treino gerada a partir
          dos dados informados: nível, objetivo, frequência semanal, duração do
          ciclo e preferência por HIIT.
        </p>
      </header>

      {/* Bloco meta principal */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-3">
          <h2 className="text-lg font-semibold text-white">
            Estratégia & Estrutura
          </h2>
          <div className="space-y-1 text-sm text-slate-200">
            <p>
              <strong>Estratégia:</strong>{" "}
              {strategy?.name ?? "Estratégia personalizada"}{" "}
            </p>
            <p>
              <strong>Nível:</strong>{" "}
              {level === "iniciante"
                ? "Iniciante"
                : level === "intermediario"
                ? "Intermediário"
                : level === "avancado"
                ? "Avançado"
                : "Indefinido"}
            </p>
            <p>
              <strong>Objetivo principal:</strong> {objectiveLabel}
            </p>
            <p>
              <strong>Frequência semanal:</strong> {daysPerWeek}x / semana
            </p>
            <p>
              <strong>Duração do ciclo:</strong> {weeks} semanas
            </p>
            <p>
              <strong>Tempo médio por sessão:</strong> {sessionMinutes} min
            </p>
            <p>
              <strong>HIITs incluídos:</strong>{" "}
              {includeHiit ? "Sim, inseridos de forma estratégica" : "Não"}
            </p>
          </div>
        </div>

        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-3">
          <h2 className="text-lg font-semibold text-white">
            Séries por nível
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">{seriesRule}</p>
          <hr className="border-slate-700" />
          <h3 className="text-sm font-semibold text-slate-200">
            Técnicas avançadas
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">{advTech}</p>
        </div>
      </section>

      {/* Bloco visão geral dos dias */}
      <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-white">
            Visão geral dos dias de treino
          </h2>
          <p className="text-xs text-slate-400">
            Cada dia abaixo representa um “treino do ciclo”, cobrindo todos os
            grupamentos musculares ao longo da semana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {plan.days.map((day) => (
            <div
              key={day.id}
              className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2"
            >
              <p className="text-sm font-semibold text-cyan-300">
                {day.label}
              </p>
              <p className="text-xs text-slate-300">
                <strong>Grupamentos foco:</strong>{" "}
                {Array.isArray(day.groups)
                  ? day.groups.join(" • ")
                  : String(day.groups)}
              </p>
              <p className="text-xs text-slate-300">
                <strong>Nº de exercícios:</strong>{" "}
                {Array.isArray(day.exercises)
                  ? day.exercises.length
                  : 0}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bloco nota final */}
      <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
        <p className="text-xs text-slate-300 leading-relaxed">
          Esta periodização foi construída para garantir que, ao final do ciclo
          de {weeks} semanas, todos os grupamentos musculares tenham sido
          treinados de forma equilibrada, respeitando seu nível atual e seu
          objetivo (emagrecimento/definição, manutenção ou ganho de massa). Em
          breve, essa estrutura será integrada com o módulo de registro de carga
          e séries por exercício, permitindo acompanhar a evolução de forma
          precisa.
        </p>
      </section>
    </div>
  );
}
