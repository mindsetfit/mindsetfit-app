'use client';

import { useState } from 'react';
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

  // Dados provisórios do usuário (podem ser conectados com a Avaliação Física depois)
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
            Metabolismo & Equações
          </p>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold text-white">
            Cálculo Metabólico Completo
          </h1>
          <p className="mt-1 text-slate-400 text-sm md:text-base max-w-2xl">
            Aqui você calcula Taxa Metabólica Basal (TMB), Gasto Energético Total (GET),
            define metas de calorias e distribui macros de forma profissional
            para emagrecimento, manutenção ou ganho de massa.
          </p>
        </div>

        <div className="flex gap-2 justify-end">
          <Button
            type="button"
            variant="outline"
            className="border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
            onClick={() => router.push('/avaliacao')}
          >
            ← Voltar para Avaliação
          </Button>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Coluna esquerda: resumo + cálculo metabólico */}
        <div className="space-y-4 lg:col-span-2">
          {/* Resumo do paciente / base para equações */}
          <section className={cardClass}>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Resumo do paciente
                </p>
                <h2 className="mt-1 text-sm font-semibold text-slate-50">
                  Dados de referência para as equações
                </h2>
                <p className={helperClass}>
                  Esses dados serão usados nas equações metabólicas. Em breve,
                  podem ser puxados automaticamente da Avaliação Física.
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

          {/* Bloco das equações metabólicas */}
          <section className={cardClass}>
            <div className="mb-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Equações metabólicas
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-50">
                TMB, GET, metas e divisão de macronutrientes
              </h2>
              <p className={helperClass}>
                Utilize as equações disponíveis para estimar com precisão a
                Taxa Metabólica Basal (TMB), o Gasto Energético Total (GET) e
                a meta calórica ideal para o objetivo do paciente.
              </p>
            </div>

            <div className="mt-4">
              <NutritionCalculator userData={userData} />
            </div>
          </section>
        </div>

        {/* Coluna direita: orientações sobre escolha da equação */}
        <div className="space-y-4 lg:col-span-1">
          <section className={cardClass}>
            <div className="mb-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Orientação profissional
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-50">
                Qual equação usar para cada caso?
              </h2>
              <p className={helperClass}>
                Essas diretrizes ajudam o paciente (ou profissional) a escolher
                a equação mais adequada de acordo com o perfil e rotina.
              </p>
            </div>

            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li>
                • <span className="font-semibold">Mifflin-St Jeor:</span> ótima
                para a maioria dos adultos, especialmente em contexto de
                emagrecimento e manutenção.
              </li>
              <li>
                • <span className="font-semibold">Harris-Benedict (revisada):</span>{' '}
                pode ser usada em indivíduos com rotina mais ativa ou quando se
                deseja uma estimativa ligeiramente mais alta de gasto.
              </li>
              <li>
                • <span className="font-semibold">Cunningham:</span> indicada
                para quem já tem boa massa magra, atletas e praticantes de
                musculação com foco em performance.
              </li>
              <li>
                • <span className="font-semibold">FAO/WHO/ONU:</span> útil em
                contextos clínicos e de saúde pública, podendo complementar
                outras estimativas.
              </li>
            </ul>

            <p className="mt-3 text-[11px] text-slate-500">
              A escolha final sempre deve considerar histórico, rotina de
              treinos, composição corporal e objetivo principal (emagrecer,
              manter ou ganhar massa).
            </p>
          </section>

          {/* Bloco de próxima etapa */}
          <section className={cardClass}>
            <h2 className="text-sm font-semibold text-slate-50 mb-1">
              Próxima etapa: Nutrição & Dieta
            </h2>
            <p className={helperClass}>
              Após definir o gasto energético e a meta de calorias, siga para a
              página de Nutrição para montar o plano alimentar em detalhes.
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <Button
                type="button"
                onClick={() => router.push('/nutricao')}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold"
              >
                Ir para Nutrição →
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
                onClick={() => router.push('/dashboard')}
              >
                Voltar para o Dashboard
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
