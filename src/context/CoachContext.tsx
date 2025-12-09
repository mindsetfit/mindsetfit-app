'use client';

import { createContext, useContext, ReactNode } from 'react';

type CoachContextValue = {
  hasCoachFeatures: boolean;
};

const CoachContext = createContext<CoachContextValue | undefined>(undefined);

export function CoachContextProvider({ children }: { children: ReactNode }) {
  const value: CoachContextValue = {
    // Hoje: modo paciente. Quando liberar o painel do coach, mudamos aqui.
    hasCoachFeatures: false,
  };

  return <CoachContext.Provider value={value}>{children}</CoachContext.Provider>;
}

export function useCoachContext() {
  const ctx = useContext(CoachContext);
  if (!ctx) {
    throw new Error('useCoachContext deve ser usado dentro de CoachContextProvider');
  }
  return ctx;
}
