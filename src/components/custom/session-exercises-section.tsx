"use client";

import { useEffect, useState } from "react";
import { muscleGroups } from "@/data/training-exercises";
import { exerciseVideos } from "@/data/exercise-videos";
import { suggestLoad, normalizeObjective } from "@/lib/progression-engine";

type AnySession = {
  title?: string;
  label?: string;
  focusDescription?: string;
  focusGroupId?: string;
};

type AnyPlanMeta = {
  strategyId?: string;
  strategy?: string;
  level?: string;
  objective?: string;
  daysPerWeek?: number;
  weeks?: number;
  sessionMinutes?: number;
};

type AnyPlan = {
  id?: string;
  meta?: AnyPlanMeta | any;
  objective?: string;
  sessions?: AnySession[];
};

type LoadMap = Record<string, string>;
type SelectionMap = Record<string, string>;

const STORAGE_KEY_LOADS = "mindsetfit_session_loads_v1";
const STORAGE_KEY_SELECTIONS =
  "mindsetfit_session_exercise_selection_v1";

function getExercisesForGroups(groupIds: string[], maxPerGroup = 6) {
  return groupIds.flatMap((id) => {
    const group = muscleGroups.find((g) => g.id === id);
    if (!group) return [];
    return group.exercises.slice(0, maxPerGroup);
  });
}

function getAllExercisesForGroups(groupIds: string[]) {
  return groupIds.flatMap((id) => {
    const group = muscleGroups.find((g) => g.id === id);
    if (!group) return [];
    return group.exercises;
  });
}

function getDefaultGroupsForSession(
  index: number,
  total: number
): string[] {
  // ABC / ABCDE etc — padrão inteligente
  if (total === 3) {
    if (index === 0) return ["peito", "triceps"];
    if (index === 1) return ["costas", "biceps"];
    if (index === 2) return ["pernas", "gluteos", "core"];
  }

  if (total === 4) {
    if (index === 0) return ["peito", "triceps"];
    if (index === 1) return ["costas", "biceps"];
    if (index === 2) return ["pernas", "gluteos"];
    if (index === 3) return ["ombros", "core"];
  }

  if (total >= 5) {
    if (index === 0) return ["peito", "triceps"];
    if (index === 1) return ["costas", "biceps"];
    if (index === 2) return ["pernas", "gluteos"];
    if (index === 3) return ["ombros", "core"];
    if (index === 4) return ["core"];
  }

  // fallback genérico
  return ["peito", "costas", "pernas", "core"];
}

interface SessionExercisesSectionProps {
  plan: AnyPlan | null;
}

/**
 * Seção premium: treino completo por sessão, com:
 * - exercícios sugeridos por grupamento
 * - substituições inteligentes por slot
 * - séries / reps / descanso adaptados ao objetivo
 * - campo de carga (kg) com progressão sugerida
 * - modal de execução (vídeo, dicas, variações)
 */
export default function SessionExercisesSection({
  plan,
}: SessionExercisesSectionProps) {
  const sessions = (plan?.sessions ?? []) as AnySession[];
  if (!sessions.length) return null;

  const planKey = plan?.id ?? "mindsetfit-plan";

  const [loads, setLoads] = useState<LoadMap>({});
  const [selections, setSelections] = useState<SelectionMap>({});
  const [modalExerciseId, setModalExerciseId] = useState<string | null>(
    null
  );

  const rawObjective =
    (plan?.meta as AnyPlanMeta | undefined)?.objective ??
    plan?.objective ??
    null;
  const objective = normalizeObjective(rawObjective);

  // ------- Persistência das cargas -------
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY_LOADS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          setLoads(parsed as LoadMap);
        }
      }
    } catch {
      // ignora
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY_LOADS,
        JSON.stringify(loads)
      );
    } catch {
      // ignora
    }
  }, [loads]);

  // ------- Persistência das seleções -------
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY_SELECTIONS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          setSelections(parsed as SelectionMap);
        }
      }
    } catch {
      // ignora
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        STORAGE_KEY_SELECTIONS,
        JSON.stringify(selections)
      );
    } catch {
      // ignora
    }
  }, [selections]);

  const allExercisesFlat = muscleGroups.flatMap((g) => g.exercises);

  function getPrescriptionForExercise(rowIndex: number) {
    // ajusta volume conforme objetivo
    if (objective === "ganho_massa") {
      if (rowIndex <= 1) return { sets: 4, reps: "6–10", rest: "90–120s" };
      return { sets: 3, reps: "8–12", rest: "60–90s" };
    }

    if (objective === "perda_gordura") {
      if (rowIndex <= 1) return { sets: 3, reps: "10–15", rest: "45–60s" };
      return { sets: 2, reps: "15–20", rest: "30–45s" };
    }

    // manutenção
    if (rowIndex <= 1) return { sets: 4, reps: "8–10", rest: "60–90s" };
    return { sets: 3, reps: "10–12", rest: "45–60s" };
  }

  function handleChangeSelection(
    key: string,
    value: string
  ) {
    setSelections((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleChangeLoad(key: string, value: string) {
    setLoads((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function openExecutionModal(exerciseId?: string) {
    if (!exerciseId) {
      setModalExerciseId(null);
      return;
    }
    if (!exerciseVideos[exerciseId]) {
      setModalExerciseId(null);
      return;
    }
    setModalExerciseId(exerciseId);
  }

  const modalExercise =
    modalExerciseId != null
      ? (exerciseVideos as any)[modalExerciseId]
      : null;

  return (
    <>
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Treino completo por sessão
        </h2>
        <p className="text-sm text-muted-foreground">
          Abaixo está a sugestão de treino completo para cada sessão
          da periodização, com séries, repetições, descanso, campo
          para registrar carga (kg) e progressão sugerida com base
          na carga anterior.
        </p>

        <div className="space-y-6">
          {sessions.map((session, sessionIndex) => {
            const explicitGroup = session.focusGroupId
              ? [session.focusGroupId]
              : getDefaultGroupsForSession(
                  sessionIndex,
                  sessions.length
                );

            const defaultExercises = getExercisesForGroups(
              explicitGroup,
              6
            );
            const optionsForSession = getAllExercisesForGroups(
              explicitGroup
            );

            const sessionLabel =
              session.title ||
              session.label ||
              `Treino ${sessionIndex + 1}`;

            const groupLabels = explicitGroup
              .map((id) => {
                const g = muscleGroups.find((mg) => mg.id === id);
                return g?.name ?? id;
              })
              .join(" • ");

            return (
              <div
                key={sessionIndex}
                className="border border-slate-800 rounded-xl bg-slate-900/60 p-4 md:p-5 space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-slate-50">
                      {sessionLabel}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400">
                      Foco principal:{" "}
                      {session.focusDescription ??
                        "Distribuição equilibrada de grupos musculares"}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Grupos trabalhados: {groupLabels}
                    </p>
                  </div>
                </div>

                {/* Tabela de exercícios da sessão */}
                <div className="overflow-x-auto rounded-lg border border-slate-800/70 bg-slate-900/60">
                  <table className="w-full text-xs md:text-sm">
                    <thead className="bg-slate-900/80">
                      <tr className="text-slate-300">
                        <th className="px-3 py-2 text-left">
                          Exercício
                        </th>
                        <th className="px-3 py-2 text-center">
                          Séries
                        </th>
                        <th className="px-3 py-2 text-center">
                          Reps
                        </th>
                        <th className="px-3 py-2 text-center">
                          Descanso
                        </th>
                        <th className="px-3 py-2 text-center">
                          Carga (kg)
                        </th>
                        <th className="px-3 py-2 text-center">
                          Progressão
                        </th>
                        <th className="px-3 py-2 text-center">
                          Execução
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {defaultExercises.map((baseExercise, rowIdx) => {
                        const slotKey = `${planKey}:${sessionIndex}:${rowIdx}`;
                        const selectedId =
                          selections[slotKey] ?? baseExercise.id;

                        const exercise =
                          allExercisesFlat.find(
                            (ex) => ex.id === selectedId
                          ) ?? baseExercise;

                        const loadKey = `${planKey}:${sessionIndex}:${
                          selectedId ?? `slot-${rowIdx}`
                        }`;
                        const currentLoad = loads[loadKey] ?? "";

                        const prescription =
                          getPrescriptionForExercise(rowIdx);

                        const suggested =
                          currentLoad && !isNaN(Number(currentLoad))
                            ? suggestLoad(
                                Number(currentLoad),
                                objective
                              )
                            : null;

                        const videoInfo: any =
                          selectedId &&
                          (exerciseVideos as any)[selectedId];

                        return (
                          <tr
                            key={slotKey}
                            className="border-t border-slate-800/60"
                          >
                            {/* Exercício + seleção */}
                            <td className="px-3 py-2 align-top">
                              <div className="flex flex-col gap-1">
                                <select
                                  className="w-full rounded-md bg-slate-950/70 border border-slate-800 px-2 py-1 text-xs md:text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-primary/60"
                                  value={selectedId}
                                  onChange={(e) =>
                                    handleChangeSelection(
                                      slotKey,
                                      e.target.value
                                    )
                                  }
                                >
                                  {optionsForSession.map((opt) => (
                                    <option
                                      key={opt.id}
                                      value={opt.id}
                                    >
                                      {opt.name}
                                    </option>
                                  ))}
                                </select>
                                <span className="text-[10px] text-slate-500">
                                  Grupo:{" "}
                                  {exercise.groupName ??
                                    exercise.group ??
                                    "Geral"}
                                </span>
                              </div>
                            </td>

                            {/* Séries */}
                            <td className="px-3 py-2 text-center align-middle text-slate-100">
                              {prescription.sets}
                            </td>

                            {/* Reps */}
                            <td className="px-3 py-2 text-center align-middle text-slate-100">
                              {prescription.reps}
                            </td>

                            {/* Descanso */}
                            <td className="px-3 py-2 text-center align-middle text-slate-100">
                              {prescription.rest}
                            </td>

                            {/* Carga (kg) */}
                            <td className="px-3 py-2 text-center align-middle">
                              <input
                                type="number"
                                inputMode="decimal"
                                min={0}
                                step="0.5"
                                className="w-full max-w-[90px] rounded-md bg-slate-950/70 border border-slate-800 px-2 py-1 text-xs md:text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-primary/60"
                                value={currentLoad}
                                onChange={(e) =>
                                  handleChangeLoad(
                                    loadKey,
                                    e.target.value
                                  )
                                }
                                placeholder="kg"
                              />
                            </td>

                            {/* Progressão sugerida */}
                            <td className="px-3 py-2 align-middle text-center">
                              {suggested ? (
                                <span className="block text-[11px] text-green-400">
                                  + sugerido: {suggested} kg
                                </span>
                              ) : (
                                <span className="block text-[11px] text-slate-500">
                                  Informe a carga atual
                                </span>
                              )}
                            </td>

                            {/* Execução */}
                            <td className="px-3 py-2 text-center align-middle">
                              {videoInfo ? (
                                <button
                                  type="button"
                                  onClick={() =>
                                    openExecutionModal(selectedId)
                                  }
                                  className="inline-flex items-center justify-center rounded-md border border-primary/70 px-2 py-1 text-[11px] md:text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
                                >
                                  Ver execução
                                </button>
                              ) : (
                                <span className="block text-[11px] text-slate-500">
                                  Sem vídeo cadastrado
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal de execução do exercício */}
      {modalExercise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-lg rounded-2xl bg-slate-950 border border-slate-800 p-4 md:p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {modalExercise.name}
                </h3>
                {modalExercise.muscles && (
                  <p className="text-xs text-slate-400 mt-1">
                    Grupos: {modalExercise.muscles.join(" • ")}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setModalExerciseId(null)}
                className="text-xs text-slate-400 hover:text-slate-100"
              >
                Fechar
              </button>
            </div>

            {modalExercise.video && (
              <div className="aspect-video w-full rounded-xl bg-black/40 overflow-hidden">
                {/* Aqui futuramente pode entrar um player de vídeo real */}
              </div>
            )}

            {modalExercise.tips && (
              <div>
                <h4 className="text-xs font-semibold text-slate-200">
                  Dicas técnicas
                </h4>
                <ul className="mt-1 list-disc pl-4 text-[11px] text-slate-300 space-y-1">
                  {modalExercise.tips.map((tip: string, i: number) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {modalExercise.mistakes && (
              <div>
                <h4 className="text-xs font-semibold text-slate-200">
                  Erros comuns
                </h4>
                <ul className="mt-1 list-disc pl-4 text-[11px] text-slate-300 space-y-1">
                  {modalExercise.mistakes.map(
                    (m: string, i: number) => (
                      <li key={i}>{m}</li>
                    )
                  )}
                </ul>
              </div>
            )}

            {modalExercise.variations && (
              <div>
                <h4 className="text-xs font-semibold text-slate-200">
                  Variações sugeridas
                </h4>
                <ul className="mt-1 list-disc pl-4 text-[11px] text-slate-300 space-y-1">
                  {modalExercise.variations.map(
                    (v: string, i: number) => (
                      <li key={i}>{v}</li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
