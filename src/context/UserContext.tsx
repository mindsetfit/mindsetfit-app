'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';

type UserMode = 'patient' | 'coach';

type UserContextValue = {
  firstName: string;
  mode: UserMode;
  isCoach: boolean;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

/**
 * FUTURO:
 * Integra com login real (API, backend).
 * Hoje: puxa o "usuarioLogado" salvo pelo app, se existir.
 */
export function UserContextProvider({ children }: { children: ReactNode }) {
  const [firstName, setFirstName] = useState<string>('Luiz');
  const [mode] = useState<UserMode>('patient');

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;
      const stored = window.localStorage.getItem('usuarioLogado');
      if (!stored) return;
      const usuario = JSON.parse(stored);
      if (usuario?.nomeCompleto) {
        const parts = String(usuario.nomeCompleto).trim().split(' ');
        if (parts[0]) setFirstName(parts[0]);
      }
    } catch (e) {
      console.error('Erro ao ler usuarioLogado no UserContext:', e);
    }
  }, []);

  const value = useMemo(
    () => ({
      firstName,
      mode,
      isCoach: mode === 'coach',
    }),
    [firstName, mode]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUserContext deve ser usado dentro de UserContextProvider');
  }
  return ctx;
}
