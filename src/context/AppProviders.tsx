'use client';

import { ReactNode } from 'react';
import { AppContextProvider } from './AppContext';
import { UserContextProvider } from './UserContext';
import { CoachContextProvider } from './CoachContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AppContextProvider>
      <UserContextProvider>
        <CoachContextProvider>{children}</CoachContextProvider>
      </UserContextProvider>
    </AppContextProvider>
  );
}
