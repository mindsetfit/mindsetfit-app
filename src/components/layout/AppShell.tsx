'use client';

import { ReactNode } from 'react';
import { useAppContext } from '../../context/AppContext';
import { MindsetSidebar } from '../sidebar/MindsetSidebar';
import { Header } from './Header';

export function AppShell({ children }: { children: ReactNode }) {
  const { toggleSidebar } = useAppContext();

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-50">
      <MindsetSidebar />

      <div className="flex flex-1 flex-col md:ml-0">
        <div className="sticky top-0 z-20 md:pl-0 bg-slate-950/80 backdrop-blur">
          {/* Barra superior mobile para abrir menu */}
          <div className="flex items-center md:hidden border-b border-slate-800 px-3 py-2">
            <button
              type="button"
              aria-label="Abrir menu"
              className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 transition-colors"
              onClick={toggleSidebar}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-slate-200"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16v2H4V7Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              MindsetFit
            </span>
          </div>

          <Header />
        </div>

        <main className="flex-1 px-3 pb-6 pt-4 md:px-6 md:pb-8">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
