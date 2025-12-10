"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TRAINING_STRATEGIES } from "@/lib/training-strategies";

const LEVELS = [
  { id: "iniciante", label: "Iniciante" },
  { id: "intermediario", label: "Intermediário" },
  { id: "avancado", label: "Avançado" },
] as const;

const OBJECTIVES = [
  { id: "emagrecimento", label: "Emagrecimento / Definição" },
  { id: "manutencao", label: "Manutenção" },
  { id: "ganho_massa", label: "Ganho de massa" },
] as const;

export default function PeriodizacaoForm() {
  const router = useRouter();

  const [strategyId, setStrategyId] = useState(
    TRAINING_STRATEGIES?.[0]?.id ?? "fullbody"
  );
  const [level, setLevel] = useState<string>("iniciante");
  const [objective, setObjective] = useState<string>("manutencao");
  const [daysPerWeek, setDaysPerWeek] = useState<number>(4);
  const [weeks, setWeeks] = useState<number>(8);
  const [sessionMinutes, setSessionMinutes] = useState<number>(60);
  const [includeHiit, setIncludeHiit] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const search = new URLSearchParams({
      strategyId,
      level,
      objective,
      daysPerWeek: String(daysPerWeek),
      weeks: String(weeks),
      sessionMinutes: String(sessionMinutes),
      includeHiit: includeHiit ? "1" : "0",
    });

    router.push(`/periodizacao/resumo?${search.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl"
    >
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">
          Periodização Inteligente
        </h1>
        <p className="text-sm text-slate-300">
          Monte uma estratégia de treino completa baseada na sua rotina, nível
          e objetivo (emagrecimento, manutenção ou ganho de massa).
        </p>
      </div>

      {/* Estratégia */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Estratégia de treino
        </label>
        <select
          value={strategyId}
          onChange={(e) => setStrategyId(e.target.value)}
          className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          {TRAINING_STRATEGIES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
        <p className="text-xs text-slate-400">
          Inclui opções como full body, ABC, ABCDE, upper/lower e HIITs.
        </p>
      </div>

      {/* Nível */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Nível de treino
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {LEVELS.map((lvl) => (
            <button
              key={lvl.id}
              type="button"
              onClick={() => setLevel(lvl.id)}
              className={`px-3 py-2 rounded-xl text-sm border transition ${
                level === lvl.id
                  ? "bg-cyan-500 text-slate-900 border-cyan-400"
                  : "bg-slate-900/60 text-slate-200 border-slate-700 hover:border-cyan-400/60"
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          • Iniciante: base de 3 séries por exercício • Intermediário: 3–4
          séries conforme evolução • Avançado: 4 séries + técnicas avançadas
          pontuais.
        </p>
      </div>

      {/* Objetivo */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-200">
          Objetivo principal
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {OBJECTIVES.map((obj) => (
            <button
              key={obj.id}
              type="button"
              onClick={() => setObjective(obj.id)}
              className={`px-3 py-2 rounded-xl text-sm border transition ${
                objective === obj.id
                  ? "bg-emerald-500 text-slate-900 border-emerald-400"
                  : "bg-slate-900/60 text-slate-200 border-slate-700 hover:border-emerald-400/60"
              }`}
            >
              {obj.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dias / semanas / duração */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-200">
            Dias por semana
          </label>
          <input
            type="number"
            min={2}
            max={6}
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(Number(e.target.value) || 2)}
            className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <p className="text-xs text-slate-400">
            Entre 2 e 6 dias/sem, mantendo equilíbrio de grupamentos.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-200">
            Duração do ciclo (semanas)
          </label>
          <input
            type="number"
            min={4}
            max={12}
            value={weeks}
            onChange={(e) => setWeeks(Number(e.target.value) || 4)}
            className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <p className="text-xs text-slate-400">
            Ciclos típicos de 4, 6, 8 ou 12 semanas.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-200">
            Tempo médio por sessão (min)
          </label>
          <input
            type="number"
            min={30}
            max={90}
            step={5}
            value={sessionMinutes}
            onChange={(e) => setSessionMinutes(Number(e.target.value) || 60)}
            className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <p className="text-xs text-slate-400">
            Usado para calibrar o número de exercícios por treino.
          </p>
        </div>
      </div>

      {/* HIIT */}
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={() => setIncludeHiit((v) => !v)}
          className={`mt-1 w-10 h-6 rounded-full flex items-center px-1 transition ${
            includeHiit ? "bg-cyan-500" : "bg-slate-700"
          }`}
        >
          <span
            className={`w-4 h-4 rounded-full bg-white shadow transform transition ${
              includeHiit ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </button>
        <div>
          <p className="text-sm text-slate-200 font-medium">
            Incluir sessões de HIIT (opção 8)
          </p>
          <p className="text-xs text-slate-400">
            HIITs podem ser adicionados de forma inteligente em dias específicos
            para acelerar resultados sem comprometer a recuperação.
          </p>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-2xl shadow-lg shadow-cyan-500/25 transition"
        >
          Gerar Periodização Inteligente
        </button>
      </div>
    </form>
  );
}
