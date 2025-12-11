"use client";

import { useEffect, useMemo, useState } from "react";

type TrainingLogTableProps = {
  planId: string;
  dayId: string;
  dayLabel: string;
  exercises: {
    id: string;
    name: string;
    group?: string;
    series?: number | string;
    reps?: string | number | null;
  }[];
};

type ExerciseLog = {
  exerciseId: string;
  load: string;      // carga em kg
  repsDone: string;  // repetições realizadas (por série ou média)
  rpe: string;       // percepção de esforço
  notes: string;     // observações do aluno
};

type ExerciseLogMap = Record<string, ExerciseLog>;

function buildStorageKey(planId: string, dayId: string) {
  return `mindsetfit_training_log_${planId}_${dayId}`;
}

export default function TrainingLogTable({
  planId,
  dayId,
  dayLabel,
  exercises,
}: TrainingLogTableProps) {
  const storageKey = useMemo(() => buildStorageKey(planId, dayId), [planId, dayId]);

  const [logs, setLogs] = useState<ExerciseLogMap>({});
  const [savedAt, setSavedAt] = useState<string | null>(null);

  // Carrega do localStorage na primeira renderização
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        setLogs(parsed);
      }
    } catch (err) {
      console.error("Erro ao carregar logs de treino:", err);
    }
  }, [storageKey]);

  // Handler para atualizar um campo de um exercício
  const updateLogField = (exerciseId: string, field: keyof ExerciseLog, value: string) => {
    setLogs((prev) => {
      const current: ExerciseLog =
        prev[exerciseId] ?? {
          exerciseId,
          load: "",
          repsDone: "",
          rpe: "",
          notes: "",
        };

      return {
        ...prev,
        [exerciseId]: {
          ...current,
          [field]: value,
        },
      };
    });
  };

  const handleSave = () => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(logs));
      const now = new Date();
      const label = now.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setSavedAt(label);
    } catch (err) {
      console.error("Erro ao salvar logs de treino:", err);
    }
  };

  if (!exercises || exercises.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 border border-slate-800 rounded-xl bg-slate-900/80 p-4 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">
            Registro de cargas — {dayLabel}
          </h3>
          <p className="text-[11px] text-slate-400">
            Preencha a carga (kg), repetições realizadas e RPE (esforço percebido) para cada exercício.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="px-3 py-1.5 rounded-lg bg-cyan-500 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition"
        >
          Salvar registros do dia
        </button>
      </div>

      {savedAt && (
        <p className="text-[11px] text-emerald-400">
          Registros salvos localmente em: {savedAt}
        </p>
      )}

      <div className="overflow-x-auto rounded-lg border border-slate-800/80">
        <table className="min-w-full text-xs">
          <thead className="bg-slate-900/90">
            <tr className="border-b border-slate-800">
              <th className="py-2 px-3 text-left text-slate-300 font-medium">
                Exercício
              </th>
              <th className="py-2 px-3 text-left text-slate-300 font-medium">
                Grupo
              </th>
              <th className="py-2 px-3 text-left text-slate-300 font-medium">
                Séries (alvo)
              </th>
              <th className="py-2 px-3 text-left text-slate-300 font-medium">
                Reps (alvo)
              </th>
              <th className="py-2 px-3 text-left text-slate-300 font-medium">
                Carga (kg)
              </th>
              <th className="py-2 px-3 text-left text-slate-300 font-medium">
                Reps feitas
              </th>
              <th className="py-2 px-3 text-left text-slate-300 font-medium">
                RPE
              </th>
              <th className="py-2 px-3 text-left text-slate-300 font-medium">
                Observações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 bg-slate-950/60">
            {exercises.map((ex) => {
              const log = logs[ex.id] ?? {
                exerciseId: ex.id,
                load: "",
                repsDone: "",
                rpe: "",
                notes: "",
              };

              return (
                <tr key={ex.id}>
                  <td className="py-2 px-3 text-slate-100">{ex.name}</td>
                  <td className="py-2 px-3 text-slate-300">
                    {ex.group ?? "-"}
                  </td>
                  <td className="py-2 px-3 text-slate-300">
                    {ex.series ?? "-"}
                  </td>
                  <td className="py-2 px-3 text-slate-300">
                    {ex.reps ?? "-"}
                  </td>
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      inputMode="decimal"
                      className="w-20 rounded-md bg-slate-900 border border-slate-700 px-2 py-1 text-[11px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      value={log.load}
                      onChange={(e) =>
                        updateLogField(ex.id, "load", e.target.value)
                      }
                      placeholder="kg"
                    />
                  </td>
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      inputMode="numeric"
                      className="w-16 rounded-md bg-slate-900 border border-slate-700 px-2 py-1 text-[11px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      value={log.repsDone}
                      onChange={(e) =>
                        updateLogField(ex.id, "repsDone", e.target.value)
                      }
                      placeholder="reps"
                    />
                  </td>
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      inputMode="decimal"
                      className="w-12 rounded-md bg-slate-900 border border-slate-700 px-2 py-1 text-[11px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      value={log.rpe}
                      onChange={(e) =>
                        updateLogField(ex.id, "rpe", e.target.value)
                      }
                      placeholder="0–10"
                    />
                  </td>
                  <td className="py-2 px-3">
                    <input
                      type="text"
                      className="w-40 md:w-56 rounded-md bg-slate-900 border border-slate-700 px-2 py-1 text-[11px] text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      value={log.notes}
                      onChange={(e) =>
                        updateLogField(ex.id, "notes", e.target.value)
                      }
                      placeholder="Notas rápidas (dor, facilidade, etc.)"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
