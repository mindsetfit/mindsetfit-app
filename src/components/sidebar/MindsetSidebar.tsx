'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AssessmentIcon,
  BrainIcon,
  DashboardIcon,
  NutritionIcon,
  ProgressIcon,
  ProfileIcon,
  SettingsIcon,
  TrainingIcon,
} from '../layout/MindsetIcons';
import { useAppContext } from '../../context/AppContext';
import { useUserContext } from '../../context/UserContext';

type NavItem = {
  label: string;
  href: string;
  icon: JSX.Element;
};

const mainNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: <DashboardIcon className="text-cyan-300" /> },
  { label: 'Avaliação Física', href: '/avaliacao', icon: <AssessmentIcon className="text-emerald-300" /> },
  { label: 'Nutrição', href: '/nutricao', icon: <NutritionIcon className="text-amber-300" /> },
  { label: 'Treinos', href: '/treinos', icon: <TrainingIcon className="text-pink-300" /> },
  { label: 'Progresso', href: '/progresso', icon: <ProgressIcon className="text-violet-300" /> },
];

const bottomNav: NavItem[] = [
  { label: 'Perfil', href: '/perfil', icon: <ProfileIcon className="text-slate-200" /> },
  { label: 'Configurações', href: '/configuracoes', icon: <SettingsIcon className="text-slate-300" /> },
];

export function MindsetSidebar() {
  const pathname = usePathname();
  const { isSidebarOpen, closeSidebar } = useAppContext();
  const { isCoach } = useUserContext();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity md:hidden ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.9)] transition-transform md:static md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo topo */}
          <div className="flex items-center gap-2 px-4 py-4 border-b border-slate-800">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_20px_rgba(56,189,248,0.7)]">
              <BrainIcon size={16} className="text-slate-950" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                MindsetFit
              </span>
              <span className="text-xs text-slate-500">
                Nutrição • Treino • IA
              </span>
            </div>
          </div>

          {/* Navegação principal */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
            <div className="space-y-1">
              <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Principal
              </p>
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeSidebar}
                  className={`group flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-slate-900/80 text-slate-50 border border-slate-700 shadow-[0_0_20px_rgba(8,47,73,0.9)]'
                      : 'text-slate-400 hover:text-slate-50 hover:bg-slate-900/60'
                  }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/70">
                    {item.icon}
                  </span>
                  <span className="truncate">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Área do coach futura */}
            {isCoach && (
              <div className="space-y-1">
                <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Coach (PRO)
                </p>
                <Link
                  href="/coach"
                  onClick={closeSidebar}
                  className={`group flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium transition-colors ${
                    isActive('/coach')
                      ? 'bg-slate-900/80 text-slate-50 border border-slate-700 shadow-[0_0_20px_rgba(8,47,73,0.9)]'
                      : 'text-slate-400 hover:text-slate-50 hover:bg-slate-900/60'
                  }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/70">
                    <BrainIcon className="text-cyan-300" />
                  </span>
                  <span className="truncate">Painel do Coach</span>
                </Link>
              </div>
            )}
          </nav>

          {/* Navegação inferior */}
          <div className="border-t border-slate-800 px-3 py-3 space-y-1">
            {bottomNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className={`group flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-slate-900/80 text-slate-50 border border-slate-700'
                    : 'text-slate-400 hover:text-slate-50 hover:bg-slate-900/60'
                }`}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900/70">
                  {item.icon}
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
