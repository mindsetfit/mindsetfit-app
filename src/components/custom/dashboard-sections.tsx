'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

import Sidebar from '@/components/custom/sidebar';
import DashboardStats from '@/components/custom/dashboard-stats';
import {
  AssessmentSection,
  MetabolismSection,
  NutritionSection,
  TrainingSection,
  WorkoutLoggerSection,
  ProgressSection,
  ReportsSection,
} from '@/components/custom/dashboard-sections';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import type { DailyTarget } from '@/lib/nutritionEngine';

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

  // 🔗 Resultado do metabolismo que será enviado para a Nutrição & IA
  const [metabolismResult, setMetabolismResult] = useState<DailyTarget | null>(
    null
  );

  useEffect(() => {
    // Verificar se o usuário está logado
    const usuarioStr = localStorage.getItem('usuarioLogado');

    if (!usuarioStr) {
      // Se não estiver logado, redirecionar para home
      router.push('/');
      return;
    }

    try {
      const usuario = JSON.parse(usuarioStr);
      setUsuarioLogado(usuario);

      // Atualizar userData com informações do usuário
      setUserData((prev) => ({
        ...prev,
        name: usuario.nomeCompleto.split(' ')[0], // Primeiro nome
      }));

      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    toast.success('Logout realizado com sucesso!');
    router.push('/');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardStats userData={userData} />;

      case 'assessment':
        return <AssessmentSection />;

      case 'metabolism':
        // Envia o resultado do cálculo para o estado local
        return (
          <MetabolismSection
            onResult={(result) => {
              setMetabolismResult(result);
            }}
          />
        );

      case 'nutrition':
        // Recebe os dados já calculados do metabolismo (kcal + macros + nº de refeições)
        return <NutritionSection metabolism={metabolismResult} />;

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="ml-0 md:ml-64 p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                {currentPage === 'dashboard' && 'Dashboard'}
                {currentPage === 'assessment' && 'Avaliação Física'}
                {currentPage === 'metabolism' && 'Cálculo Metabólico'}
                {currentPage === 'nutrition' && 'Nutrição Inteligente com IA'}
                {currentPage === 'training' && 'Treinos Personalizados'}
                {currentPage === 'workout-logger' && 'Registro de Treinos'}
                {currentPage === 'progress' && 'Progresso'}
                {currentPage === 'reports' && 'Relatórios'}
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                {currentPage === 'dashboard' && 'Visão geral do seu progresso'}
                {currentPage === 'assessment' &&
                  'Avalie sua composição corporal'}
                {currentPage === 'metabolism' &&
                  'Calcule suas necessidades calóricas e metas diárias.'}
                {currentPage === 'nutrition' &&
                  'IA inteligente para dieta personalizada, substituições e receitas.'}
                {currentPage === 'training' &&
                  'Sistema completo de treinos com 15+ exercícios por grupo muscular.'}
                {currentPage === 'workout-logger' &&
                  'Registre seus treinos e acompanhe sua evolução.'}
                {currentPage === 'progress' &&
                  'Visualize a evolução de peso, medidas e performance.'}
                {currentPage === 'reports' &&
                  'Gere relatórios profissionais para você ou para o paciente.'}
              </p>
            </div>

            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
              <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                <span className="text-cyan-400 font-semibold text-sm md:text-base">
                  PRO
                </span>
              </div>

              <div className="flex items-center gap-2 md:gap-3 flex-1 md:flex-initial">
                <div className="text-right flex-1 md:flex-initial">
                  <p className="text-white font-semibold text-sm md:text-base truncate">
                    {usuarioLogado?.nomeCompleto}
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm truncate">
                    {usuarioLogado?.email}
                  </p>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-base md:text-lg">
                    {usuarioLogado?.nomeCompleto?.[0]}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleLogout}
                variant="outline"
                size="icon"
                className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white flex-shrink-0"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="space-y-6">{renderPage()}</div>
      </main>
    </div>
  );
}
