"use client";

import { useCallback, useMemo } from "react";

function clampNum(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function toKey(parts: (string | number | undefined | null)[]) {
  return parts.filter(Boolean).join("|");
}

export type ProgressSuggestion = {
  nextKg: number;
  deltaKg: number;
  label: string; // ex: "+2.5 kg"
};

export function useTrainingLoad(planId?: string) {
  const baseKey = useMemo(() => (planId ? `mf:load:${planId}` : "mf:load"), [planId]);

  const getLoad = useCallback(
    (sessionLabel: string, exerciseId: string) => {
      if (typeof window === "undefined") return "";
      const k = `${baseKey}:${toKey([sessionLabel, exerciseId])}`;
      const v = window.localStorage.getItem(k);
      return v ?? "";
    },
    [baseKey]
  );

  const setLoad = useCallback(
    (sessionLabel: string, exerciseId: string, value: string) => {
      if (typeof window === "undefined") return;
      const k = `${baseKey}:${toKey([sessionLabel, exerciseId])}`;
      if (!value) {
        window.localStorage.removeItem(k);
        return;
      }
      window.localStorage.setItem(k, value);
    },
    [baseKey]
  );

  const suggestProgress = useCallback((kg: number): ProgressSuggestion => {
    // regra simples e segura:
    // - até 20kg: +2.5kg
    // - 20–60kg: +5% (min 2.5, max 5)
    // - acima 60kg: +2.5% (min 2.5, max 5)
    const safe = clampNum(kg, 0, 500);
    let delta = 2.5;

    if (safe >= 20 && safe < 60) delta = clampNum(safe * 0.05, 2.5, 5);
    if (safe >= 60) delta = clampNum(safe * 0.025, 2.5, 5);

    // arredonda para 2.5
    const roundedDelta = Math.round(delta / 2.5) * 2.5;
    const nextKg = Math.round((safe + roundedDelta) / 2.5) * 2.5;

    return {
      nextKg,
      deltaKg: roundedDelta,
      label: `+${roundedDelta.toFixed(1).replace(".0", "")} kg`,
    };
  }, []);

  return { getLoad, setLoad, suggestProgress };
}
