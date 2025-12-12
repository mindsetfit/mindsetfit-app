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
  label: string;
};

export type LoadHistoryEntry = {
  t: number;
  kg: number;
};

export type LoadStats = {
  lastKg: number | null;
  lastAt: number | null;
  bestKg: number | null;
  bestAt: number | null;
};

export function useTrainingLoad(planId?: string) {
  const baseKey = useMemo(
    () => (planId ? `mf:load:${planId}` : "mf:load"),
    [planId]
  );

  const keyLoad = useCallback(
    (sessionLabel: string, exerciseId: string) =>
      `${baseKey}:${toKey([sessionLabel, exerciseId])}`,
    [baseKey]
  );

  const keyHist = useCallback(
    (sessionLabel: string, exerciseId: string) =>
      `${baseKey}:hist:${toKey([sessionLabel, exerciseId])}`,
    [baseKey]
  );

  // anti-spam: evita registrar histórico em sequência (cooldown)
  const keyCd = useCallback(
    (sessionLabel: string, exerciseId: string) =>
      `${baseKey}:cd:${toKey([sessionLabel, exerciseId])}`,
    [baseKey]
  );

  const getLoad = useCallback(
    (sessionLabel: string, exerciseId: string) => {
      if (typeof window === "undefined") return "";
      return window.localStorage.getItem(keyLoad(sessionLabel, exerciseId)) ?? "";
    },
    [keyLoad]
  );

  const setLoad = useCallback(
    (sessionLabel: string, exerciseId: string, value: string) => {
      if (typeof window === "undefined") return;
      const k = keyLoad(sessionLabel, exerciseId);
      if (!value) {
        window.localStorage.removeItem(k);
        return;
      }
      window.localStorage.setItem(k, value);
    },
    [keyLoad]
  );

  const getHistory = useCallback(
    (sessionLabel: string, exerciseId: string): LoadHistoryEntry[] => {
      if (typeof window === "undefined") return [];
      const raw = window.localStorage.getItem(keyHist(sessionLabel, exerciseId));
      if (!raw) return [];
      try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
          .map((x) => ({
            t: Number(x?.t),
            kg: Number(x?.kg),
          }))
          .filter((x) => Number.isFinite(x.t) && Number.isFinite(x.kg) && x.kg > 0)
          .slice(-200);
      } catch {
        return [];
      }
    },
    [keyHist]
  );

  const setHistory = useCallback(
    (sessionLabel: string, exerciseId: string, entries: LoadHistoryEntry[]) => {
      if (typeof window === "undefined") return;
      window.localStorage.setItem(
        keyHist(sessionLabel, exerciseId),
        JSON.stringify(entries.slice(-200))
      );
    },
    [keyHist]
  );

  const commitLoad = useCallback(
    (sessionLabel: string, exerciseId: string, value: string) => {
      setLoad(sessionLabel, exerciseId, value);

      const kg = Number(String(value).replace(",", "."));
      if (!Number.isFinite(kg) || kg <= 0) return;

      const safe = clampNum(kg, 0, 500);

      // cooldown anti-spam (800ms)
      if (typeof window !== "undefined") {
        const cdKey = keyCd(sessionLabel, exerciseId);
        const lastT = Number(window.localStorage.getItem(cdKey) || "0");
        const now = Date.now();
        if (Number.isFinite(lastT) && now - lastT < 800) return;
        window.localStorage.setItem(cdKey, String(now));
      }

      const hist = getHistory(sessionLabel, exerciseId);
      const last = hist.length ? hist[hist.length - 1] : null;
      const lastKg = last?.kg ?? null;

      // se igual, não registra
      if (lastKg !== null && Math.abs(lastKg - safe) < 0.0001) return;

      const next = [...hist, { t: Date.now(), kg: safe }].slice(-200);
      setHistory(sessionLabel, exerciseId, next);
    },
    [getHistory, keyCd, setHistory, setLoad]
  );

  const getStats = useCallback(
    (sessionLabel: string, exerciseId: string): LoadStats => {
      const hist = getHistory(sessionLabel, exerciseId);
      if (!hist.length) {
        return { lastKg: null, lastAt: null, bestKg: null, bestAt: null };
      }
      const last = hist[hist.length - 1];
      let best = hist[0];
      for (const e of hist) if (e.kg > best.kg) best = e;

      return {
        lastKg: last.kg,
        lastAt: last.t,
        bestKg: best.kg,
        bestAt: best.t,
      };
    },
    [getHistory]
  );

  const suggestProgress = useCallback((kg: number): ProgressSuggestion => {
    const safe = clampNum(kg, 0, 500);

    let delta = 2.5;
    if (safe >= 20 && safe < 60) delta = clampNum(safe * 0.05, 2.5, 5);
    if (safe >= 60) delta = clampNum(safe * 0.025, 2.5, 5);

    const roundedDelta = Math.round(delta / 2.5) * 2.5;
    const nextKg = Math.round((safe + roundedDelta) / 2.5) * 2.5;

    return {
      nextKg,
      deltaKg: roundedDelta,
      label: `+${String(roundedDelta).replace(".0", "")} kg`,
    };
  }, []);

  return { getLoad, setLoad, commitLoad, getHistory, getStats, suggestProgress };
}
