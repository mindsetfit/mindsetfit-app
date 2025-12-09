"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function EvolutionChart({ data, dataKey, label }: any) {
  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 mt-4">
      <h3 className="text-lg font-bold text-blue-300 mb-2">{label}</h3>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />
          <XAxis dataKey="index" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              background: "#0f172a",
              borderColor: "#334155",
              color: "#e2e8f0"
            }}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#38bdf8"
            strokeWidth={3}
            dot={{ fill: "#38bdf8" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

