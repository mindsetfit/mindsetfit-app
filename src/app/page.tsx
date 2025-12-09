'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, TrendingUp, Apple, Brain } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário já está logado
    const usuarioStr = localStorage.getItem('usuarioLogado');
    
    if (usuarioStr) {
      // Se estiver logado, redirecionar para dashboard
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Dumbbell className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            MindsetFit
          </h1>
          <p className="text-xl text-slate-400 mb-8">
            Seu Personal Trainer Digital com IA
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                <Dumbbell className="w-6 h-6 text-cyan-400" />
              </div>
              <CardTitle className="text-white">Treinos Personalizados</CardTitle>
              <CardDescription className="text-slate-400">
                15+ exercícios por grupo muscular com instruções detalhadas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-600/20 flex items-center justify-center mb-4">
                <Apple className="w-6 h-6 text-emerald-400" />
              </div>
              <CardTitle className="text-white">Nutrição Inteligente</CardTitle>
              <CardDescription className="text-slate-400">
                IA personalizada para dieta e receitas completas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <CardTitle className="text-white">Acompanhamento</CardTitle>
              <CardDescription className="text-slate-400">
                Relatórios de evolução a cada 4 semanas
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-orange-400" />
              </div>
              <CardTitle className="text-white">Sistema Inteligente</CardTitle>
              <CardDescription className="text-slate-400">
                Algoritmos avançados para resultados máximos
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => router.push('/cadastro')}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg px-8 py-6"
          >
            Começar Agora
          </Button>
          <Button
            onClick={() => router.push('/login')}
            size="lg"
            variant="outline"
            className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold text-lg px-8 py-6"
          >
            Já tenho conta
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>© 2024 MindsetFit. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}
