"use client";

import * as React from "react";
import { exerciseVideos } from "@/data/exercise-videos";

type SessionRow = {
  id: string;
  exerciseId: string;
  sets: string;
  reps: string;
  rest: string;
  loadKg: string; // string para input controlado
};

export type TrainingSession = {
  id: string;
  title: string;
  rows: SessionRow[];
};

type Props = {
  sessions: TrainingSession[];
  onChange: (sessions: TrainingSession[]) => void;

  // lista de exercícios disponíveis (para o select)
  // exemplo: [{ id: "supino_reto_barra", name: "Supino reto com barra" }]
  exerciseOptions: { id: string; name: string }[];

  // opcional: texto/label
  className?: string;
};

function computeProgression(loadKg: string) {
  const n = Number(String(loadKg).replace(",", "."));
  if (!Number.isFinite(n) || n <= 0) return null;

  // progressão simples e segura (sem inventar treino):
  // - iniciantes: +1kg
  // - intermediário: +2kg
  // - avançado: +2.5kg
  // Como não temos o nível do usuário aqui, mostramos sugestão neutra.
  const next = n + (n < 30 ? 1 : n < 80 ? 2 : 2.5);
  const nextStr = String(next).replace(".", ",");
  return `Sugestão: próxima sessão ${nextStr} kg (se completou todas as reps com boa técnica)`;
}

export default function TrainingLogTable({
  sessions,
  onChange,
  exerciseOptions,
  className,
}: Props) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  function updateRow(sessionId: string, rowId: string, patch: Partial<SessionRow>) {
    const next = sessions.map((s) => {
      if (s.id !== sessionId) return s;
      return {
        ...s,
        rows: s.rows.map((r) => (r.id === rowId ? { ...r, ...patch } : r)),
      };
    });
    onChange(next);
  }

  const openMeta = openId ? exerciseVideos[openId] : undefined;

  return (
    <div className={className}>
      {sessions.map((session) => (
        <div
          key={session.id}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="text-base font-semibold text-white/90">{session.title}</div>
          </div>

          <div className="w-full overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-white/80">Exercício</th>
                  <th className="px-3 py-2 text-left font-semibold text-white/80">Séries</th>
                  <th className="px-3 py-2 text-left font-semibold text-white/80">Reps</th>
                  <th className="px-3 py-2 text-left font-semibold text-white/80">Descanso</th>
                  <th className="px-3 py-2 text-left font-semibold text-white/80">Carga (kg)</th>
                  <th className="px-3 py-2 text-left font-semibold text-white/80">Progressão</th>
                  <th className="px-3 py-2 text-left font-semibold text-white/80">Execução</th>
                </tr>
              </thead>

              <tbody>
                {session.rows.map((row) => {
                  const prog = computeProgression(row.loadKg);
                  const hasMeta = Boolean(exerciseVideos[row.exerciseId]);

                  return (
                    <tr key={row.id} className="border-t border-white/10">
                      <td className="px-3 py-2">
                        <select
                          className="w-full rounded-lg bg-black/30 border border-white/10 px-2 py-2 text-white/90 outline-none focus:border-white/30"
                          value={row.exerciseId}
                          onChange={(e) => updateRow(session.id, row.id, { exerciseId: e.target.value })}
                        >
                          {exerciseOptions.map((op) => (
                            <option key={op.id} value={op.id} className="bg-[#0B1220]">
                              {op.name}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="px-3 py-2">
                        <input
                          className="w-24 rounded-lg bg-black/30 border border-white/10 px-2 py-2 text-white/90 outline-none focus:border-white/30"
                          value={row.sets}
                          onChange={(e) => updateRow(session.id, row.id, { sets: e.target.value })}
                          placeholder="ex: 4"
                        />
                      </td>

                      <td className="px-3 py-2">
                        <input
                          className="w-28 rounded-lg bg-black/30 border border-white/10 px-2 py-2 text-white/90 outline-none focus:border-white/30"
                          value={row.reps}
                          onChange={(e) => updateRow(session.id, row.id, { reps: e.target.value })}
                          placeholder="ex: 8-10"
                        />
                      </td>

                      <td className="px-3 py-2">
                        <input
                          className="w-32 rounded-lg bg-black/30 border border-white/10 px-2 py-2 text-white/90 outline-none focus:border-white/30"
                          value={row.rest}
                          onChange={(e) => updateRow(session.id, row.id, { rest: e.target.value })}
                          placeholder="ex: 90s"
                        />
                      </td>

                      <td className="px-3 py-2">
                        <input
                          className="w-28 rounded-lg bg-black/30 border border-white/10 px-2 py-2 text-white/90 outline-none focus:border-white/30"
                          value={row.loadKg}
                          onChange={(e) => updateRow(session.id, row.id, { loadKg: e.target.value })}
                          placeholder="ex: 60"
                          inputMode="decimal"
                        />
                      </td>

                      <td className="px-3 py-2">
                        {prog ? (
                          <div className="text-white/80">{prog}</div>
                        ) : (
                          <div className="text-white/40">Digite uma carga</div>
                        )}
                      </td>

                      <td className="px-3 py-2">
                        <button
                          type="button"
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-white/5"
                          onClick={() => setOpenId(row.exerciseId)}
                          disabled={!hasMeta}
                          title={hasMeta ? "Ver execução" : "Sem dados de execução para este exercício"}
                        >
                          Ver execução
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Modal simples (sem depender de libs extras) */}
          {openId && (
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
              <div
                className="absolute inset-0 bg-black/70"
                onClick={() => setOpenId(null)}
              />
              <div className="relative z-10 w-full sm:w-[720px] rounded-t-2xl sm:rounded-2xl border border-white/10 bg-[#0B1220] p-5 shadow-xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {openMeta?.name ?? "Execução do exercício"}
                    </div>
                    <div className="text-xs text-white/50 mt-1">
                      Dicas premium — foque em técnica e controle.
                    </div>
                  </div>

                  <button
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/90 hover:bg-white/10"
                    onClick={() => setOpenId(null)}
                  >
                    Fechar
                  </button>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-sm font-semibold text-white/85 mb-2">Músculos</div>
                    <ul className="text-sm text-white/70 list-disc pl-5">
                      {(openMeta?.muscles ?? []).map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-sm font-semibold text-white/85 mb-2">Dicas</div>
                    <ul className="text-sm text-white/70 list-disc pl-5">
                      {(openMeta?.tips ?? []).map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-sm font-semibold text-white/85 mb-2">Erros comuns</div>
                    <ul className="text-sm text-white/70 list-disc pl-5">
                      {(openMeta?.mistakes ?? []).map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-sm font-semibold text-white/85 mb-2">Variações</div>
                    <ul className="text-sm text-white/70 list-disc pl-5">
                      {(openMeta?.variations ?? []).map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {!openMeta && (
                  <div className="mt-4 text-sm text-white/60">
                    Não encontramos metadados desse exercício em <code className="text-white/80">exercise-videos.ts</code>.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
