'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NutritionCalculator from '@/components/custom/nutrition-calculator';
import { Button } from '@/components/ui/button';

type Gender = 'male' | 'female';

type UserData = {
  name: string;
  weight: number;
  height: number;
  age: number;
  gender: Gender;
};

export default function MetabolismoPage() {
  const router = useRouter();

  const [userData, setUserData] = useState<UserData>({
    name: 'Usuário',
    weight: 75,
    height: 175,
    age: 30,
    gender: 'male',
  });

  // 🔥 Puxa automaticamente os dados da Avaliação Física
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = localStorage.getItem('avaliacao_fisica');
    if (!stored) return;

    try {
      const avaliacao = JSON.parse(stored);

      setUserData((prev) => ({
        ...prev,
        weight: avaliacao.peso ? Number(avaliacao.peso) : prev.weight,
        height: avaliacao.altura ? Number(avaliacao.altura) : prev.height,
        gender:
          avaliacao.genero === 'feminino'
            ? 'female'
            : avaliacao.genero === 'masculino'
            ? 'male'
            : prev.gender,
      }));
    } catch (err) {
      console.error('Erro ao ler avaliação do localStorage:', err);
    }
  }, []);

  const cardClass =
    'rounded-2xl border border-slate-800 bg-slate-950/80 p-4 md:p-6 space-y-4';

  const helperClass = 'text-[11px] text-slate-500';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-6 md:px-8 md:py-10">
      {/* Header */}
      <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-purple-400">
            Metabolismo
          </p>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold text-white">
            Cálculo Metabólico Completo
          </h1>
          <p className="mt-1 text-slate-400 text-sm md:text-base max-w-2xl">
            A partir da sua avaliação física, calcule TMB, GET, metas e divisões de macros.
          </p>
        </div>

        <div className="flex gap-2 justify-end">
          <Button
            type="button"
            variant="outline"
            className="border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
            onClick={() => router.push('/avaliacao')}
          >
            Voltar para Avaliação
          </Button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <section className={cardClass}>
        <div className="mb-2">
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Dados do paciente
          </p>
          <h2 className="mt-1 text-sm font-semibold text-slate-50">
            Referência para o cálculo metabólico
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="rounded-xl bg-slate-900/70 p-3">
            <p className="text-slate-400">Peso</p>
            <p className="text-slate-50 font-semibold">{userData.weight} kg</p>
          </div>
          <div className="rounded-xl bg-slate-900/70 p-3">
            <p className="text-slate-400">Altura</p>
            <p className="text-slate-50 font-semibold">{userData.height} cm</p>
          </div>
          <div className="rounded-xl bg-slate-900/70 p-3">
            <p className="text-slate-400">Idade</p>
            <p className="text-slate-50 font-semibold">{userData.age} anos</p>
          </div>
          <div className="rounded-xl bg-slate-900/70 p-3">
            <p className="text-slate-400">Gênero</p>
            <p className="text-slate-50 font-semibold">
              {userData.gender === 'male' ? 'Masculino' : 'Feminino'}
            </p>
          </div>
        </div>
      </section>

      {/* Calculadora metabólica */}
      <section className={cardClass}>
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
          Cálculo metabólico
        </p>
        <h2 className="mt-1 text-sm font-semibold text-slate-50">
          TMB, GET, metas e macros
        </h2>
        <p className={helperClass}>
          Escolha a equação desejada e calcule automaticamente seus números.
        </p>

        <div className="mt-4">
          <NutritionCalculator userData={userData} />
        </div>
      </section>

      {/* Botão para Nutrição */}
      <div className="mt-8 flex justify-end">
        <Button
          type="button"
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6"
          onClick={() => router.push('/nutricao')}
        >
          Ir para Nutrição →
        </Button>
      </div>
    </div>
  );
}
