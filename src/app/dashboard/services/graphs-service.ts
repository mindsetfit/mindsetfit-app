// src/app/dashboard/services/graphs-service.ts
export type HeatmapDay = {
  date: string;
  label: string;
  short: string;
  intensity: 0 | 1 | 2 | 3;
};

export function getHeatmapData(): HeatmapDay[] {
  const today = new Date();
  const days: HeatmapDay[] = [];

  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);

    const label = d.toLocaleDateString("pt-BR", {
      weekday: "short",
      day: "2-digit",
      month: "2-digit",
    });

    const short = d
      .toLocaleDateString("pt-BR", { weekday: "short" })
      .charAt(0)
      .toUpperCase();

    const hash = (d.getDate() + d.getMonth() * 13) % 4;
    const intensity = hash as 0 | 1 | 2 | 3;

    days.push({
      date: d.toISOString().split("T")[0],
      label,
      short,
      intensity,
    });
  }

  return days;
}
