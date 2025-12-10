"use client";

import TrainingSidebar from "@/components/custom/sidebar";
import fullDB from "@/lib/full-training-database";

export default function ModalityPage() {
  const modality = "spinning";
  const title = "Spinning / Bike Indoor";

  const list = fullDB.filter((ex) => ex.modality === modality);

  return (
    <div className="flex">
      <TrainingSidebar />

      <main className="flex-1 p-10 space-y-6">
        <h1 className="text-2xl font-bold text-white">
          {title} — {list.length} treinos
        </h1>

        {list.length === 0 && (
          <p className="text-slate-400 text-sm">
            Nenhum treino de spinning encontrado.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:bg-slate-800/60 transition"
            >
              <h2 className="text-white font-semibold">{item.name}</h2>
              <p className="text-slate-400 text-xs mb-1">
                {item.group}
                {item.level && ` • nível: ${item.level}`}
              </p>

              {item.tempo && (
                <p className="text-slate-300 text-xs">
                  <strong>Duração:</strong> {item.tempo}
                </p>
              )}

              {item.rest && (
                <p className="text-slate-300 text-xs">
                  <strong>Intervalos / Descanso:</strong> {item.rest}
                </p>
              )}

              {item.intensity && (
                <p className="text-slate-300 text-xs">
                  <strong>Intensidade:</strong> {item.intensity}
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
