"use client";

import Link from "next/link";
import { Dumbbell, Home, Bike, Footprints, Flame } from "lucide-react";

export default function TrainingSidebar() {
  return (
    <aside className="w-64 bg-slate-900/80 border-r border-slate-800 p-6 space-y-6">

      <h2 className="text-xl font-semibold text-white tracking-tight">
        Treinos MindsetFit
      </h2>

      <nav className="space-y-3">

        <Link
          href="/treinos/musculacao"
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
        >
          <Dumbbell className="w-5 h-5 text-cyan-400" /> Musculação
        </Link>

        <Link
          href="/treinos/casa"
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
        >
          <Home className="w-5 h-5 text-purple-400" /> Casa / Funcional
        </Link>

        <Link
          href="/treinos/corrida"
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
        >
          <Footprints className="w-5 h-5 text-green-400" /> Corrida
        </Link>

        <Link
          href="/treinos/spinning"
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
        >
          <Bike className="w-5 h-5 text-yellow-400" /> Spinning
        </Link>

        <Link
          href="/treinos/crossfit"
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 hover:text-white transition"
        >
          <Flame className="w-5 h-5 text-red-400" /> CrossFit
        </Link>

      </nav>
    </aside>
  );
}
