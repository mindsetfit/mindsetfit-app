"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function ProgressCharts({ weekly, monthly }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-2">📆 Evolução Semanal</h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={weekly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="volume" stroke="#4F8EF7" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">📅 Evolução Mensal</h2>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="volume" stroke="#2ECC71" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
