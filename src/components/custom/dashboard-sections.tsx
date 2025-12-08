'use client';

import React from 'react';
import {
  Activity,
  Apple,
  Dumbbell,
  FileText,
  TrendingUp,
  ClipboardList,
  User,
} from 'lucide-react';

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
            Esta seção ainda está em construção. Em breve você poderá configurar{' '}
            {title.toLowerCase()} aqui.
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

// 🔹 Metabolismo
export function MetabolismSection() {
  return (
    <BaseSection
      title="Metabolismo"
      description="Defina TMB, GET, equações e recomendações de acordo com o objetivo e nível de atividade."
      icon={<Activity className="w-5 h-5 text-cyan-400" />}
    />
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
