'use client';

import { useState } from 'react';
import {
  Activity,
  Apple,
  Dumbbell,
  FileText,
  Home,
  Settings,
  TrendingUp,
  User,
  Clipboard,
  X
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  /** controla abertura no mobile (overlay) */
  isMobileOpen: boolean;
  onToggleMobile: () => void;
}

export default function Sidebar({
  currentPage,
  onPageChange,
  isMobileOpen,
  onToggleMobile,
}: SidebarProps) {
  // colapso só para DESKTOP
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'assessment', label: 'Avaliação Física', icon: User },
    { id: 'metabolism', label: 'Metabolismo', icon: Activity },
    { id: 'nutrition', label: 'Nutrição & Dieta', icon: Apple },
    { id: 'training', label: 'Treinos', icon: Dumbbell },
    { id: 'workout-logger', label: 'Registro de Treinos', icon: Clipboard },
    { id: 'progress', label: 'Progresso', icon: TrendingUp },
    { id: 'reports', label: 'Relatórios', icon: FileText },
  ];

  return (
    <>
      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen
          bg-gradient-to-b from-slate-900 to-slate-950
          border-r border-slate-800
          transition-transform duration-300 ease-in-out
          w-64
          ${isCollapsed ? 'md:w-20' : 'md:w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Logo / título */}
        <div className="h-16 flex items-center justify-center border-b border-slate-800 relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  MindsetFit
                </h1>
                <p className="text-xs text-slate-400">
                  IA Nutrition &amp; Training
                </p>
              </div>
            )}
          </div>

          {/* Botão fechar – só mobile */}
          <button
            type="button"
            onClick={onToggleMobile}
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 md:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Itens do menu */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-8rem)]">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  // se estiver no mobile com overlay aberto, fecha após clicar
                  if (isMobileOpen) {
                    onToggleMobile();
                  }
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-200
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }
                `}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 ${
                    isActive ? 'text-cyan-400' : ''
                  }`}
                />
                {!isCollapsed && (
                  <span className="font-medium text-left">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Toggle colapso – APENAS desktop */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 items-center justify-center text-slate-400 hover:text-white transition-colors"
          type="button"
        >
          <Settings className="w-4 h-4" />
        </button>
      </aside>
    </>
  );
}
