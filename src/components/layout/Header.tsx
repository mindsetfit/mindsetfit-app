'use client';

import { BrainIcon } from './MindsetIcons';
import { useUserContext } from '../../context/UserContext';

export function Header() {
  const { firstName } = useUserContext();

  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-4 py-3 md:px-6 md:py-4 bg-slate-950/80 backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700 shadow-inner">
          <BrainIcon size={16} className="text-cyan-300" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs uppercase tracking-wide text-slate-400">
            Bem-vindo(a)
          </span>
          <div className="flex items-center gap-1.5">
            <BrainIcon size={14} className="text-cyan-300" />
            <span className="text-sm md:text-base font-semibold text-slate-50">
              {firstName}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 transition-colors"
          aria-label="Notificações"
        >
          <span className="absolute -top-0.5 -right-0.5 inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-slate-200"
            aria-hidden="true"
          >
            <path
              d="M12 3a5 5 0 0 0-5 5v2.59l-.7 2.1A1 1 0 0 0 7.26 14h9.48a1 1 0 0 0 .96-1.31l-.7-2.1V8a5 5 0 0 0-5-5Zm0 18a3 3 0 0 0 2.83-2H9.17A3 3 0 0 0 12 21Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
