'use client';

import { Activity, Apple, Dumbbell, TrendingUp, Zap, Target, Award, Calendar } from 'lucide-react';

interface DashboardStatsProps {
  userData: {
    name: string;
    weight: number;
    height: number;
    age: number;
    gender: 'male' | 'female';
  };
}

export default function DashboardStats({ userData }: DashboardStatsProps) {
  const stats = [
    {
      label: 'Peso Atual',
      value: `${userData.weight} kg`,
      icon: Activity,
      color: 'from-cyan-500 to-blue-600',
      change: '-2.5 kg',
      changeType: 'positive'
    },
    {
      label: 'IMC',
      value: '24.5',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      change: 'Normal',
      changeType: 'neutral'
    },
    {
      label: 'Calorias Diárias',
      value: '2,200',
      icon: Apple,
      color: 'from-orange-500 to-red-600',
      change: '+150 kcal',
      changeType: 'neutral'
    },
    {
      label: 'Treinos/Semana',
      value: '4x',
      icon: Dumbbell,
      color: 'from-purple-500 to-pink-600',
      change: '+1 treino',
      changeType: 'positive'
    }
  ];

  const recentActivity = [
    { date: 'Hoje', activity: 'Treino A - Peito e Tríceps', duration: '45 min', icon: Dumbbell },
    { date: 'Ontem', activity: 'Avaliação Física Completa', duration: '30 min', icon: Activity },
    { date: '2 dias atrás', activity: 'Plano Nutricional Atualizado', duration: '15 min', icon: Apple },
    { date: '3 dias atrás', activity: 'Treino B - Costas e Bíceps', duration: '50 min', icon: Dumbbell },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Bem-vindo de volta, {userData.name}! 👋
            </h2>
            <p className="text-slate-300 text-lg">
              Continue seu progresso rumo aos seus objetivos
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-400' :
                  stat.changeType === 'negative' ? 'text-red-400' :
                  'text-slate-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Progress Chart Placeholder */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-400" />
            Progresso de Peso
          </h3>
          <select className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm">
            <option>Últimos 7 dias</option>
            <option>Últimos 30 dias</option>
            <option>Últimos 90 dias</option>
          </select>
        </div>
        
        <div className="h-64 flex items-center justify-center bg-slate-800/30 rounded-xl border border-slate-700">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">Gráfico de progresso será exibido aqui</p>
            <p className="text-slate-500 text-sm mt-2">Adicione mais avaliações para ver sua evolução</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-cyan-400" />
          Atividades Recentes
        </h3>
        
        <div className="space-y-4">
          {recentActivity.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">{item.activity}</h4>
                  <p className="text-sm text-slate-400">{item.date} • {item.duration}</p>
                </div>
                <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm text-white transition-colors">
                  Ver detalhes
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-500/50 transition-all text-left group">
          <Activity className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="text-lg font-bold text-white mb-2">Nova Avaliação</h4>
          <p className="text-slate-400 text-sm">Registre suas medidas e acompanhe sua evolução</p>
        </button>
        
        <button className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30 hover:border-green-500/50 transition-all text-left group">
          <Apple className="w-10 h-10 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="text-lg font-bold text-white mb-2">Planejar Dieta</h4>
          <p className="text-slate-400 text-sm">Crie um plano alimentar personalizado</p>
        </button>
        
        <button className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-all text-left group">
          <Dumbbell className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="text-lg font-bold text-white mb-2">Novo Treino</h4>
          <p className="text-slate-400 text-sm">Monte seu treino personalizado agora</p>
        </button>
      </div>
    </div>
  );
}
