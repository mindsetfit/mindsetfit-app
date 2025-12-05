'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Activity, Apple, Dumbbell, TrendingUp, Zap, Target, Award, Calendar, LogOut } from 'lucide-react';
import Sidebar from '@/components/custom/sidebar';
import AssessmentForm from '@/components/custom/assessment-form';
import NutritionCalculator from '@/components/custom/nutrition-calculator';
import MealPlanner from '@/components/custom/meal-planner';
import TrainingBuilder from '@/components/custom/training-builder';
import DashboardStats from '@/components/custom/dashboard-stats';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function MindsetFitApp() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [userData, setUserData] = useState({
    name: 'Usuário',
    weight: 75,
    height: 175,
    age: 30,
    gender: 'male' as 'male' | 'female'
  });
  const [usuarioLogado, setUsuarioLogado] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se o usuário está logado
    const usuarioStr = localStorage.getItem('usuarioLogado');
    
    if (!usuarioStr) {
      // Se não estiver logado, redirecionar para login
      router.push('/login');
      return;
    }

    try {
      const usuario = JSON.parse(usuarioStr);
      setUsuarioLogado(usuario);
      
      // Atualizar userData com informações do usuário
      setUserData({
        ...userData,
        name: usuario.nomeCompleto.split(' ')[0] // Primeiro nome
      });
      
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      router.push('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    toast.success('Logout realizado com sucesso!');
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardStats userData={userData} />;
      case 'assessment':
        return <AssessmentForm onSave={(data) => console.log('Assessment saved:', data)} />;
      case 'metabolism':
        return <NutritionCalculator userData={userData} />;
      case 'nutrition':
        return (
          <div className="space-y-8">
            {/* Calculadora Nutricional */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cálculo de Necessidades Calóricas</h2>
              <NutritionCalculator userData={userData} />
            </div>
            
            {/* Divisor */}
            <div className="border-t border-slate-700"></div>
            
            {/* Cardápio Alimentar */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cardápio Alimentar Personalizado</h2>
              <MealPlanner />
            </div>
          </div>
        );
      case 'training':
        return <TrainingBuilder />;
      default:
        return <DashboardStats userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {currentPage === 'dashboard' && 'Dashboard'}
                {currentPage === 'assessment' && 'Avaliação Física'}
                {currentPage === 'metabolism' && 'Cálculo Metabólico'}
                {currentPage === 'nutrition' && 'Nutrição & Dieta'}
                {currentPage === 'training' && 'Treinos'}
              </h1>
              <p className="text-slate-400">
                {currentPage === 'dashboard' && 'Visão geral do seu progresso'}
                {currentPage === 'assessment' && 'Avalie sua composição corporal'}
                {currentPage === 'metabolism' && 'Calcule suas necessidades calóricas'}
                {currentPage === 'nutrition' && 'Planeje sua dieta inteligente com cardápio personalizado'}
                {currentPage === 'training' && 'Monte seu treino personalizado'}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30">
                <span className="text-cyan-400 font-semibold">PRO</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-white font-semibold">{usuarioLogado?.nomeCompleto}</p>
                  <p className="text-slate-400 text-sm">{usuarioLogado?.email}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {usuarioLogado?.nomeCompleto[0]}
                  </span>
                </div>
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

        {/* Page Content */}
        <div className="space-y-6">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
