'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NutritionCalculator from '@/components/custom/nutrition-calculator';
import NutritionAI from '@/components/custom/nutrition-ai';
import { Button } from '@/components/ui/button';

type Gender = 'male' | 'female';

type UserData = {
  name: string;
  weight: number;
  height: number;
  age: number;
  gender: Gender;
};

export default function NutricaoPage() {
  const router = useRouter();

  // Dados provisórios do usuário (depois podemos ligar com a avaliação física / contexto)
  const [userData] = useState<UserData>({
    name: 'Usuário',
    weight: 75,
    height: 175,
    age: 30,
    gender: 'male',
  });

  const cardClass =
    'rounded-2xl border border-slate-800 bg-slate-950/80 p-4 md:p-6 space-y-4';

  const helperClass = 'text-[11px] text-slate-500';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-6 md:px-8 md:py-10">
      {/* Header da página */}
      <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-400">
            Nutrição & Metabolismo
          </p>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold text-white">
            Metabolismo & IA Nutri
          </h1>
          <p className="mt-1 text-slate-400 text-sm md:text-base max-w-2xl">
            Aqui você calcula suas necessidades calóricas, define metas e usa a
            IA Nutri para montar refeições inteligentes com os alimentos que tem
            disponível.
          </p>
        </div>

        <div className="flex gap-2 justify-end">
          <Button
            type="button"
            variant="outline"
            className="border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
            onClick={() => router.push('/dashboard')}
          >
            Voltar para o Dashboard
          </Button>
        </div>
      </header>

      {/* Cards principais */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Coluna esquerda: resumo + cálculo metabólico */}
        <div className="space-y-4 lg:col-span-2">
          {/* Resumo do paciente / metas */}
          <section className={cardClass}>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Resumo do paciente
                </p>
                <h2 className="mt-1 text-sm font-semibold text-slate-50">
                  Base para o cálculo metabólico
                </h2>
                <p className={helperClass}>
                  Esses dados serão usados como referência enquanto não
                  conectarmos diretamente com a avaliação física.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <div className="rounded-xl bg-slate-900/80 px-3 py-2">
                  <p className="text-slate-400">Peso</p>
                  <p className="text-slate-50 font-semibold">
                    {userData.weight} kg
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/80 px-3 py-2">
                  <p className="text-slate-400">Altura</p>
                  <p className="text-slate-50 font-semibold">
                    {userData.height} cm
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/80 px-3 py-2">
                  <p className="text-slate-400">Idade</p>
                  <p className="text-slate-50 font-semibold">
                    {userData.age} anos
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/80 px-3 py-2">
                  <p className="text-slate-400">Gênero</p>
                  <p className="text-slate-50 font-semibold">
                    {userData.gender === 'male' ? 'Masculino' : 'Feminino'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cálculo metabólico completo */}
          <section className={cardClass}>
            <div className="mb-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Cálculo metabólico
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-50">
                TMB, GET, metas e divisões de macros
              </h2>
              <p className={helperClass}>
                Use as equações disponíveis para estimar suas necessidades
                energéticas e definir a meta ideal para emagrecimento,
                manutenção ou ganho de massa.
              </p>
            </div>

            <div className="mt-4">
              <NutritionCalculator userData={userData} />
            </div>
          </section>
        </div>

        {/* Coluna direita: IA Nutri */}
        <div className="space-y-4 lg:col-span-1">
          <section className={cardClass}>
            <div className="mb-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                IA Nutri
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-50">
                Montagem inteligente de refeições
              </h2>
              <p className={helperClass}>
                Conte para a IA quais alimentos você tem disponível ou qual
                refeição deseja montar. Ela vai sugerir combinações alinhadas à
                sua meta de calorias e macros.
              </p>
            </div>

            <div className="mt-4">
              <NutritionAI />
            </div>
          </section>
        </div>
      </div>

      {/* Ações finais / próxima etapa */}
      <div className="mt-8 flex justify-end">
        <Button
          type="button"
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6"
          onClick={() => router.push('/treinos')}
        >
          Ir para Treinos →
        </Button>
      </div>
    </div>
  );
}
