"use client";

import { useEffect, useMemo, useState } from "react";
import TrainingSidebar from "@/components/custom/sidebar";
import fullDB from "@/lib/full-training-database";
import { useTrainingLoad, LoadHistoryEntry } from "@/hooks/useTrainingLoad";

function fmtKg(n: number) {
  return String(n).replace(".0", "");
}

function fmtDate(t: number) {
  try {
    return new Date(t).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
  } catch {
    return "";
  }
}

export default function ModalityPage() {
  const modality = "corrida";

  const list = useMemo(
    () => fullDB.filter((ex) => ex.modality === modality),
    [modality]
  );

  const { getLoad, setLoad, commitLoad, getHistory, getStats, suggestProgress } =
    useTrainingLoad(modality);

  const [loads, setLoads] = useState<Record<string, string>>({});
  const [hist, setHist] = useState<Record<string, LoadHistoryEntry[]>>({});

  useEffect(() => {
    const initialLoads: Record<string, string> = {};
    const initialHist: Record<string, LoadHistoryEntry[]> = {};

    for (const item of list) {
      const sessionLabel = item.group || modality;
      initialLoads[item.id] = getLoad(sessionLabel, item.id) || "";
      initialHist[item.id] = getHistory(sessionLabel, item.id) || [];
    }

    setLoads(initialLoads);
    setHist(initialHist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  function onChangeLoad(item: any, value: string) {
    const sessionLabel = item.group || modality;
    setLoads((prev) => ({ ...prev, [item.id]: value }));
    setLoad(sessionLabel, item.id, value);
  }

  function onCommit(item: any) {
    const sessionLabel = item.group || modality;
    const value = loads[item.id] ?? "";
    commitLoad(sessionLabel, item.id, value);
    setHist((prev) => ({ ...prev, [item.id]: getHistory(sessionLabel, item.id) }));
  }

  return (
    <div className="flex">
      <TrainingSidebar />
      <main className="flex-1 p-10 space-y-6">
        <h1 className="text-2xl font-bold text-white capitalize">
          {modality} — {list.length} exercícios
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((item) => {
            const val = loads[item.id] ?? "";
            const kg = Number(String(val).replace(",", "."));
            const hasKg = Number.isFinite(kg) && kg > 0;
            const prog = hasKg ? suggestProgress(kg) : null;

            const sessionLabel = item.group || modality;
            const stats = getStats(sessionLabel, item.id);
            const last5 = (hist[item.id] ?? []).slice(-5).reverse();

            return (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:bg-slate-800/60 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-white font-semibold">{item.name}</h2>
                    <p className="text-slate-400 text-sm">{item.group}</p>
                  </div>

                  <div className="min-w-[140px]">
                    <label className="block text-[11px] text-slate-400 mb-1">
                      Carga (kg)
                    </label>
                    <input
                      inputMode="decimal"
                      type="number"
                      step="0.5"
                      min="0"
                      value={val}
                      onChange={(e) => onChangeLoad(item, e.target.value)}
                      onBlur={() => onCommit(item)}
                      placeholder="ex: 20"
                      className="w-full rounded-lg bg-slate-950/60 border border-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-slate-600"
                    />

                    {prog && (
                      <div className="mt-2 text-[11px] text-slate-300">
                        <span className="text-slate-400">Progressão:</span>{" "}
                        <span className="text-white font-semibold">{prog.label}</span>{" "}
                        <span className="text-slate-400">
                          (próx.: {fmtKg(prog.nextKg)}kg)
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-3 rounded-lg border border-slate-800 bg-slate-950/30 p-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <div className="text-slate-400">
                      Última:{" "}
                      <span className="text-white font-semibold">
                        {stats.lastKg ? `${fmtKg(stats.lastKg)}kg` : "—"}
                      </span>{" "}
                      {stats.lastAt ? (
                        <span className="text-slate-500">({fmtDate(stats.lastAt)})</span>
                      ) : null}
                    </div>

                    <div className="text-slate-400">
                      Melhor:{" "}
                      <span className="text-white font-semibold">
                        {stats.bestKg ? `${fmtKg(stats.bestKg)}kg` : "—"}
                      </span>{" "}
                      {stats.bestAt ? (
                        <span className="text-slate-500">({fmtDate(stats.bestAt)})</span>
                      ) : null}
                    </div>
                  </div>

                  {last5.length > 0 ? (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {last5.map((e, idx) => (
                        <span
                          key={`${e.t}-${idx}`}
                          className="text-[11px] text-slate-300 border border-slate-800 rounded-full px-2 py-1 bg-slate-900/40"
                          title={new Date(e.t).toLocaleString("pt-BR")}
                        >
                          {fmtKg(e.kg)}kg <span className="text-slate-500">• {fmtDate(e.t)}</span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-2 text-[11px] text-slate-500">
                      Sem histórico ainda — preencha uma carga e saia do campo.
                    </div>
                  )}
                </div>

                {item.notes && (
                  <p className="text-slate-400 text-xs mt-3">{item.notes}</p>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
