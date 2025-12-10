"use client";

import TrainingSidebar from "@/components/custom/sidebar";
import fullDB from "@/lib/full-training-database";

export default function ModalityPage() {
  const modality = "musculacao"; // <<< TROCAR AQUI EM CADA ARQUIVO

  const list = fullDB.filter((ex) => ex.modality === modality);

  return (
    <div className="flex">
      
      <TrainingSidebar />

      <main className="flex-1 p-10 space-y-6">

        <h1 className="text-2xl font-bold text-white capitalize">
          {modality} — {list.length} exercícios
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:bg-slate-800/60 transition"
            >
              <h2 className="text-white font-semibold">{item.name}</h2>
              <p className="text-slate-400 text-sm">{item.group}</p>

              {item.series && (
                <p className="text-slate-300 text-xs mt-2">
                  <strong>Séries:</strong> {item.series}
                </p>
              )}

              {item.reps && (
                <p className="text-slate-300 text-xs">
                  <strong>Reps:</strong> {item.reps}
                </p>
              )}

              {item.notes && (
                <p className="text-slate-400 text-xs mt-2">{item.notes}</p>
              )}
            </div>
          ))}
        </div>

      </main>

    </div>
  );
}
