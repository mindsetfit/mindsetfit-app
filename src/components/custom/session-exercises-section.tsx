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

type AnyPlan = {
  id?: string;
  objective?: string;
  meta?: { objective?: string; strategyId?: string; strategy?: string } | any;
  sessions?: AnySession[];
};

type LoadMap = Record<string, string>;

const STORAGE_KEY_LOADS = "mindsetfit_session_loads_v1";

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

function getDefaultGroupsForSession(index: number, total: number): string[] {
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

  return ["peito", "costas", "pernas", "core"];
}

interface SessionExercisesSectionProps {
  plan: AnyPlan | null;
}

/**
 * Seção premium: treino completo por sessão, com:
 * - exercícios sugeridos por grupamento
 * - séries / reps / descanso por objetivo
 * - campo de carga (kg)
 * - progressão sugerida
 * - modal de execução com vídeo, dicas, erros e variações
 */
export default function SessionExercisesSection({ plan }: SessionExercisesSectionProps) {
  const sessions = (plan?.sessions ?? []) as AnySession[];

  if (!sessions.length) return null;

  const planKey = plan?.id ?? "mindsetfit-plan";

  const [loads, setLoads] = useState<LoadMap>({});
  const [modalExercise, setModalExercise] = useState<any | null>(null);

  const rawObjective = plan?.meta?.objective ?? plan?.objective ?? null;
  const objective = normalizeObjective(rawObjective);

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
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY_LOADS, JSON.stringify(loads));
    } catch {
      /* ignore */
    }
  }, [loads]);

  const allExercisesFlat = muscleGroups.flatMap((g) => g.exercises);

  function getPrescriptionForExercise(exIndex: number) {
    // simples, por objetivo
    if (objective === "ganho_massa") {
      if (exIndex <= 1) return { sets: 4, reps: "6–10", rest: "90–120s" };
      return { sets: 3, reps: "8–12", rest: "60–90s" };
    }

    if (objective === "perda_gordura") {
      if (exIndex <= 1) return { sets: 3, reps: "10–15", rest: "45–60s" };
      return { sets: 2, reps: "15–20", rest: "30–45s" };
    }

    // manutenção
    if (exIndex <= 1) return { sets: 4, reps: "8–10", rest: "60–90s" };
    return { sets: 3, reps: "10–12", rest: "45–60s" };
  }

  return (
    <>
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          Treino completo por sessão
        </h2>
        <p className="text-sm text-muted-foreground">
          Abaixo está a sugestão de treino completo para cada sessão da periodização,
          com séries, repetições, descanso e campo para registrar carga em kg. A progressão
          é sugerida automaticamente com base na carga da sessão anterior.
        </p>

        <div className="space-y-6">
          {sessions.map((session, index) => {
            const explicitGroup = session.focusGroupId
              ? [session.focusGroupId]
              : getDefaultGroupsForSession(index, sessions.length);

            const defaultExercises = getExercisesForGroups(explicitGroup, 6);
            const optionsForSession = getAllExercisesForGroups(explicitGroup);

            const title = session.title || session.label || `Treino ${index + 1}`;
            const focusText =
              session.focusDescription ||
              explicitGroup
                .map((id) => {
                  const g = muscleGroups.find((mg) => mg.id === id);
                  return g?.label ?? id;
                })
                .join(" · ");

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 space-y-4"
              >
                <div>
                  <h3 className="text-base font-semibold text-primary">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Foco principal: {focusText || "Distribuição equilibrada de grupos musculares"}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Objetivo atual:{" "}
                    {objective === "ganho_massa"
                      ? "ganho de massa / hipertrofia"
                      : objective === "perda_gordura"
                      ? "perda de gordura / definição"
                      : "manutenção de composição corporal"}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 md:p-4 space-y-2">
                  <p className="text-xs font-medium text-slate-300 mb-1">
                    Exercícios do dia
                  </p>

                  <ul className="space-y-2">
                    {defaultExercises.map((ex: any, exIndex: number) => {
                      const { sets, reps, rest } = getPrescriptionForExercise(exIndex);

                      const loadKey = `${planKey}-session-${index}-ex-${ex.id}`;
                      const currentLoad = loads[loadKey] ?? "";

                      const handleLoadChange = (value: string) => {
                        setLoads((prev) => ({
                          ...prev,
                          [loadKey]: value,
                        }));
                      };

                      const options = optionsForSession;
                      const selected =
                        options.find((o) => o.id === ex.id) ??
                        allExercisesFlat.find((o) => o.id === ex.id) ??
                        ex;

                      const prev = Number(currentLoad);
                      const suggested = suggestLoad(prev, objective);

                      const videoMeta = (exerciseVideos as any)[selected.id] ?? null;

                      return (
                        <li
                          key={selected.id}
                          className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border border-slate-800 rounded-lg p-3 bg-slate-950/60"
                        >
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-slate-100">
                              {selected.name}
                            </p>
                            <p className="text-[11px] text-slate-400">
                              {sets} séries × {reps} • descanso {rest}
                            </p>

                            {suggested && (
                              <p className="text-[11px] text-green-400">
                                Progressão sugerida: {suggested} kg
                              </p>
                            )}

                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-[11px] text-slate-500">
                                Trocar exercício:
                              </span>
                              <select
                                className="max-w-xs rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-[11px] text-slate-100 outline-none focus:border-primary"
                                defaultValue={selected.id}
                                onChange={(e) => {
                                  const newId = e.target.value;
                                  const found =
                                    options.find((o) => o.id === newId) ||
                                    allExercisesFlat.find((o) => o.id === newId);
                                  if (!found) return;
                                  // apenas troca visual, sem persistir mapa separado por enquanto
                                  ex.id = found.id;
                                  ex.name = found.name;
                                }}
                              >
                                {options.map((opt) => (
                                  <option key={opt.id} value={opt.id}>
                                    {opt.name}
                                  </option>
                                ))}
                              </select>

                              {videoMeta && (
                                <button
                                  type="button"
                                  onClick={() => setModalExercise(selected)}
                                  className="text-[11px] px-2 py-1 rounded-md border border-slate-600 bg-slate-800 text-primary hover:bg-slate-700"
                                >
                                  Ver execução
                                </button>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <label className="text-[11px] text-slate-400">
                              Carga (kg)
                            </label>
                            <input
                              type="number"
                              inputMode="decimal"
                              className="w-20 rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-100 outline-none focus:border-primary"
                              placeholder="0"
                              value={currentLoad}
                              onChange={(e) => handleLoadChange(e.target.value)}
                            />
                          </div>
                        </li>
                      );
                    })}

                    {!defaultExercises.length && (
                      <li className="text-xs text-slate-500">
                        Nenhum exercício sugerido para esta sessão ainda.
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {modalExercise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-[90%] max-w-md rounded-xl border border-slate-700 bg-slate-900 p-5 space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              {modalExercise.name}
            </h3>

            {(() => {
              const meta = (exerciseVideos as any)[modalExercise.id];
              if (!meta) {
                return (
                  <p className="text-xs text-slate-400">
                    Ainda não há vídeo cadastrado para este exercício.
                  </p>
                );
              }

              return (
                <>
                  {meta.video && (
                    <video
                      className="w-full rounded-md border border-slate-700"
                      controls
                    >
                      <source src={meta.video} type="video/mp4" />
                    </video>
                  )}

                  {meta.muscles && (
                    <div>
                      <p className="text-xs text-slate-400">
                        Músculos ativados:
                      </p>
                      <ul className="ml-4 list-disc text-xs text-slate-300">
                        {meta.muscles.map((m: string) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {meta.tips && (
                    <div>
                      <p className="text-xs text-slate-400">
                        Dicas de execução:
                      </p>
                      <ul className="ml-4 list-disc text-xs text-slate-300">
                        {meta.tips.map((t: string) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {meta.mistakes && (
                    <div>
                      <p className="text-xs text-slate-400">Erros comuns:</p>
                      <ul className="ml-4 list-disc text-xs text-slate-300">
                        {meta.mistakes.map((t: string) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {meta.variations && (
                    <div>
                      <p className="text-xs text-slate-400">
                        Variações recomendadas:
                      </p>
                      <ul className="ml-4 list-disc text-xs text-slate-300">
                        {meta.variations.map((t: string) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              );
            })()}

            <button
              type="button"
              onClick={() => setModalExercise(null)}
              className="mt-3 w-full rounded-md bg-primary py-2 text-sm font-semibold text-black"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
