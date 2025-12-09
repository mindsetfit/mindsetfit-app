'use client';

import { useState } from 'react';
import { 
  Activity, 
  Apple, 
  Dumbbell, 
  FileText, 
  Home, 
  Moon, 
  Settings, 
  TrendingUp, 
  User, 
  Droplet, 
  Clipboard 
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 🔥 MENU INTEGRADO AO FLUXO COMPLETO (somente adições, nada removido)
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'assessment', label: 'Avaliação Física', icon: User },
    { id: 'metabolism', label: 'Metabolismo', icon: Activity },
    { id: 'nutrition', label: 'Nutrição & Dieta', icon: Apple },
    { id: 'training', label: 'Treinos', icon: Dumbbell },
    { id: 'workout-logger', label: 'Registro de Treinos', icon: Clipboard },
    { id: 'hydration', label: 'Hidratação', icon: Droplet },   // 🔥 ADICIONADO
    { id: 'sleep', label: 'Sono', icon: Moon },                 // 🔥 ADICIONADO
    { id: 'progress', label: 'Progresso', icon: TrendingUp },
    { id: 'reports', label: 'Relatórios', icon: FileText },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-900 to-slate-950 border-r border-slate-800 transition-all duration-300 z-50 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MindsetFit
              </h1>
              <p className="text-xs text-slate-400">IA Nutrition & Training</p>
            </div>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-8rem)]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-cyan-400' : ''}`} />
              {!isCollapsed && (
                <span className="font-medium text-left">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
      >
        <Settings className="w-4 h-4" />
      </button>
    </aside>
  );
}
