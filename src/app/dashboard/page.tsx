'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import Sidebar from '@/components/custom/sidebar';
import DashboardStats from '@/components/custom/dashboard-stats';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

/* Importação das novas seções */
import {
  AssessmentSection,
  MetabolismSection,
  NutritionSection,
  TrainingSection,
  WorkoutLoggerSection,
  ProgressSection,
  ReportsSection,
} from '@/components/custom/dashboard-sections';

export default function DashboardPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [userData, setUserData] = useState({
    name: 'Usuário',
    weight: 75,
    height: 175,
    age: 30,
    gender: 'male' as 'male' | 'female',
  });

  const [usuarioLogado, setUsuarioLogado] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Verificação de login
  useEffect(() => {
    const usuarioStr = localStorage.getItem('usuarioLogado');

    if (!usuarioStr) {
      router.push('/');
      return;
    }

    try {
      const usuario = JSON.parse(usuarioStr);
      setUsuarioLogado(usuario);

      setUserData((prev) => ({
        ...prev,
        name: usuario.nomeCompleto.split(' ')[0],
      }));

      setLoading(false);
    } catch (error) {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    toast.success('Logout realizado com sucesso!');
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  /* Renderização das páginas usando os novos skeletons */
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardStats userData={userData} />;
      case 'assessment':
        return <AssessmentSection />;
      case 'metabolism':
        return <MetabolismSection />;
      case 'nutrition':
        return <NutritionSection />;
      case 'training':
        return <TrainingSection />;
      case 'workout-logger':
        return <WorkoutLoggerSection />;
      case 'progress':
        return <ProgressSection />;
      case 'reports':
        return <ReportsSection />;
      default:
        return <DashboardStats userData={userData} />;
    }
  };

  const pageTitles: Record<string, string> = {
    dashboard: 'Dashboard',
    assessment: 'Avaliação Física',
    metabolism: 'Metabolismo',
    nutrition: 'Nutrição Inteligente',
    training: 'Treinos Personalizados',
    'workout-logger': 'Registro de Treinos',
    progress: 'Progresso',
    reports: 'Relatórios',
  };

  const pageSubtitles: Record<string, string> = {
    dashboard: 'Visão geral do seu progresso',
    assessment: 'Registro completo da composição corporal',
    metabolism: 'Equações, TMB, GET e recomendações',
    nutrition: 'IA inteligente para montar dietas profissionais',
    training: 'Monte treinos completos e periodizados',
    'workout-logger': 'Registre a execução de cada treino',
    progress: 'Acompanhe medidas e evolução do paciente',
    reports: 'Gere relatórios profissionais automaticamente',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="ml-0 md:ml-64 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {pageTitles[currentPage]}
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                {pageSubtitles[currentPage]}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-white font-semibold text-sm md:text-base">
                  {usuarioLogado?.nomeCompleto}
                </p>
                <p className="text-slate-400 text-xs md:text-sm">
                  {usuarioLogado?.email}
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">
                  {usuarioLogado?.nomeCompleto[0]}
                </span>
              </div>

              <Button
                onClick={handleLogout}
                variant="outline"
                size="icon"
                className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Conteúdo da página */}
        <div className="space-y-6">{renderPage()}</div>
      </main>
    </div>
  );
}
