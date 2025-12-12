"use client";

import { useEffect, useMemo, useState } from "react";
import TrainingSidebar from "@/components/custom/sidebar";
import fullDB from "@/lib/full-training-database";
import { useTrainingLoad } from "@/hooks/useTrainingLoad";

export default function ModalityPage() {
  const modality = "casa";

  const list = useMemo(
    () => fullDB.filter((ex) => ex.modality === modality),
    [modality]
  );

  const { getLoad, setLoad, suggestProgress } = useTrainingLoad(modality);
  const [loads, setLoads] = useState<Record<string, string>>({});

  useEffect(() => {
    const initial: Record<string, string> = {};
    list.forEach((item) => {
      initial[item.id] = getLoad(item.group || modality, item.id) || "";
    });
    setLoads(initial);
  }, [list]);

  function onChange(item: any, value: string) {
    setLoads((p) => ({ ...p, [item.id]: value }));
    setLoad(item.group || modality, item.id, value);
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
            const val = loads[item.id] || "";
            const kg = Number(val);
            const prog = kg > 0 ? suggestProgress(kg) : null;

            return (
              <div key={item.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <h2 className="text-white font-semibold">{item.name}</h2>
                <p className="text-slate-400 text-sm">{item.group}</p>

                <input
                  type="number"
                  value={val}
                  onChange={(e) => onChange(item, e.target.value)}
                  placeholder="Carga (kg)"
                  className="mt-2 w-full rounded-lg bg-slate-950 border border-slate-800 px-3 py-2 text-white"
                />

                {prog && (
                  <p className="text-xs text-slate-300 mt-1">
                    Progressão sugerida: <strong>{prog.label}</strong> (próx {prog.nextKg}kg)
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
