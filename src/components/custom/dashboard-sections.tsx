'use client';

import React, { useState } from 'react';
import {
  Activity,
  Apple,
  Dumbbell,
  FileText,
  TrendingUp,
  ClipboardList,
  User,
} from 'lucide-react';
import {
  calculateDailyTargets,
  type PatientProfile,
  type DailyTarget,
} from '@/lib/nutritionEngine';

interface SectionProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function BaseSection({ title, description, icon, children }: SectionProps) {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <header className="mb-6 flex items-center gap-3">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
            {icon}
          </div>
        )}
        <div>
          <h2 className="text-xl font-semibold text-slate-100">{title}</h2>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
      </header>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        {children ?? (
          <p className="text-sm text-slate-400">
            Esta seção ainda está em construção. Em breve você poderá
            configurar {title.toLowerCase()} aqui.
          </p>
        )}
      </div>
    </section>
  );
}

// 🔹 Avaliação Física
export function AssessmentSection() {
  return (
    <BaseSection
      title="Avaliação Física"
      description="Registre dados de composição corporal, dobras, circunferências e histórico do paciente."
      icon={<User className="w-5 h-5 text-cyan-400" />}
    />
  );
}

// 🔹 Metabolismo – agora com cálculo real
export function MetabolismSection() {
  const [profile, setProfile] = useState<PatientProfile>({
    weightKg: 75,
    heightCm: 175,
    age: 30,
    sex: 'M',
    activityLevel: 'moderate',
    goal: 'maintenance',
  });

  const [result, setResult] = useState<DailyTarget | null>(null);

  const handleChange =
    (field: keyof PatientProfile) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.value;
      setProfile((prev) => ({
        ...prev,
        [field]:
          field === 'weightKg' || field === 'heightCm' || field === 'age'
            ? Number(value)
            : (value as any),
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targets = calculateDailyTargets(profile);
    setResult(targets);
  };

  return (
    <BaseSection
      title="Metabolismo"
      description="Calcule TMB aproximada, gasto diário e metas de macros a partir do perfil do paciente."
      icon={<Activity className="w-5 h-5 text-cyan-400" />}
    >
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 md:grid-cols-[2fr,3fr]"
      >
        {/* Formulário */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Peso (kg)
              </label>
              <input
                type="number"
                value={profile.weightKg}
                onChange={handleChange('weightKg')}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                min={30}
                max={250}
                step={0.1}
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Altura (cm)
              </label>
              <input
                type="number"
                value={profile.heightCm ?? ''}
                onChange={handleChange('heightCm')}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                min={130}
                max={220}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Idade</label>
              <input
                type="number"
                value={profile.age ?? ''}
                onChange={handleChange('age')}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
                min={12}
                max={90}
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Sexo biológico
              </label>
              <select
                value={profile.sex ?? 'M'}
                onChange={handleChange('sex')}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
              >
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Nível de atividade
            </label>
            <select
              value={profile.activityLevel ?? 'moderate'}
              onChange={handleChange('activityLevel')}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
            >
              <option value="sedentary">Sedentário</option>
              <option value="light">Leve (1–2x/sem)</option>
              <option value="moderate">Moderado (3–5x/sem)</option>
              <option value="high">Alto (6–7x/sem)</option>
              <option value="athlete">Atleta</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">
              Objetivo
            </label>
            <select
              value={profile.goal}
              onChange={handleChange('goal')}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
            >
              <option value="loss">Emagrecimento</option>
              <option value="maintenance">Manutenção</option>
              <option value="gain">Ganho de massa</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
          >
            Calcular Metabolismo
          </button>
        </div>

        {/* Resultado */}
        <div className="space-y-4">
          {result ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-400 mb-1">
                    Gasto diário estimado
                  </p>
                  <p className="text-2xl font-semibold text-cyan-400">
                    {result.kcal} kcal
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Inclui TMB + fator de atividade + ajuste de objetivo.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-400 mb-1">
                    Refeições por dia (padrão)
                  </p>
                  <p className="text-2xl font-semibold text-slate-100">
                    {result.mealsPerDay}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Esse valor pode ser ajustado na montagem da dieta.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-xs text-slate-400 mb-3">
                  Distribuição diária de macronutrientes
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Proteínas</p>
                    <p className="text-lg font-semibold text-emerald-400">
                      {result.protein} g
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Carboidratos</p>
                    <p className="text-lg font-semibold text-sky-400">
                      {result.carbs} g
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-1">Gorduras</p>
                    <p className="text-lg font-semibold text-amber-400">
                      {result.fats} g
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full rounded-xl border border-dashed border-slate-700 bg-slate-900/40 p-4 flex items-center justify-center">
              <p className="text-sm text-slate-500 text-center">
                Preencha os dados ao lado e clique em{' '}
                <span className="text-cyan-400 font-semibold">
                  &quot;Calcular Metabolismo&quot;
                </span>{' '}
                para ver o gasto diário estimado e a sugestão de macros.
              </p>
            </div>
          )}
        </div>
      </form>
    </BaseSection>
  );
}

// 🔹 Nutrição & Dieta
export function NutritionSection() {
  return (
    <BaseSection
      title="Nutrição & Dieta"
      description="Configure metas de macros, refeições do dia e use a IA Nutrition para montar os planos."
      icon={<Apple className="w-5 h-5 text-cyan-400" />}
    />
  );
}

// 🔹 Treinos
export function TrainingSection() {
  return (
    <BaseSection
      title="Treinos"
      description="Organize treinos por grupamento, volume, intensidade e período."
      icon={<Dumbbell className="w-5 h-5 text-cyan-400" />}
    />
  );
}

// 🔹 Registro de Treinos
export function WorkoutLoggerSection() {
  return (
    <BaseSection
      title="Registro de Treinos"
      description="Área para registrar execuções, cargas, percepções de esforço e histórico de sessões."
      icon={<ClipboardList className="w-5 h-5 text-cyan-400" />}
    />
  );
}

// 🔹 Progresso
export function ProgressSection() {
  return (
    <BaseSection
      title="Progresso"
      description="Visualize evolução de peso, medidas, composição corporal e performance."
      icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
    />
  );
}

// 🔹 Relatórios
export function ReportsSection() {
  return (
    <BaseSection
      title="Relatórios"
      description="Gere relatórios e resumos em formato visual e pronto para compartilhamento com o paciente."
      icon={<FileText className="w-5 h-5 text-sky-400" />}
    />
  );
}
