'use client';

import React, { useState, useEffect } from 'react';
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
import {
  generateMeals,
  type Restriction,
  type MealSuggestion,
} from '@/lib/aiNutritionEngine';

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

// 🔹 Metabolismo – agora com callback de resultado
interface MetabolismSectionProps {
  onResult?: (result: DailyTarget) => void;
}

export function MetabolismSection({ onResult }: MetabolismSectionProps) {
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

    if (onResult) {
      onResult(targets);
    }
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

// 🔹 Nutrição & Dieta – IA Nutrition + substituições + receita
interface NutritionSectionProps {
  metabolism?: DailyTarget | null;
}

export function NutritionSection({ metabolism }: NutritionSectionProps) {
  const [dailyKcal, setDailyKcal] = useState(2000);
  const [protein, setProtein] = useState(160);
  const [carbs, setCarbs] = useState(200);
  const [fats, setFats] = useState(60);
  const [mealsPerDay, setMealsPerDay] = useState(4);
  const [restrictions, setRestrictions] = useState<Restriction[]>([]);
  const [generatedMeals, setGeneratedMeals] = useState<MealSuggestion[] | null>(
    null
  );

  // 🔹 Quando vier resultado do Metabolismo, preenche automaticamente
  useEffect(() => {
    if (metabolism) {
      setDailyKcal(metabolism.kcal);
      setProtein(metabolism.protein);
      setCarbs(metabolism.carbs);
      setFats(metabolism.fats);
      setMealsPerDay(metabolism.mealsPerDay);
    }
  }, [metabolism]);

  const toggleRestriction = (r: Restriction) => {
    setRestrictions((prev) =>
      prev.includes(r) ? prev.filter((i) => i !== r) : [...prev, r]
    );
  };

  const handleGenerate = () => {
    const result = generateMeals({
      dailyKcal,
      protein,
      carbs,
      fats,
      mealsPerDay,
      restrictions,
    });
    setGeneratedMeals(result);
  };

  return (
    <BaseSection
      title="Nutrição & Dieta"
      description="Use a IA Nutrition para montar refeições automáticas, já equilibradas em kcal e macros, com substituições e receitas base."
      icon={<Apple className="w-5 h-5 text-cyan-400" />}
    >
      <div className="space-y-6">
        {/* Inputs principais */}
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="text-xs text-slate-400 mb-1 block">
              Kcal diárias
            </label>
            <input
              type="number"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
              value={dailyKcal}
              onChange={(e) => setDailyKcal(Number(e.target.value))}
              min={800}
              max={6000}
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 mb-1 block">
              Proteínas (g)
            </label>
            <input
              type="number"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
              value={protein}
              onChange={(e) => setProtein(Number(e.target.value))}
              min={40}
              max={350}
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 mb-1 block">
              Carboidratos (g)
            </label>
            <input
              type="number"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
              value={carbs}
              onChange={(e) => setCarbs(Number(e.target.value))}
              min={40}
              max={600}
            />
          </div>

          <div>
            <label className="text-xs text-slate-400 mb-1 block">
              Gorduras (g)
            </label>
            <input
              type="number"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
              value={fats}
              onChange={(e) => setFats(Number(e.target.value))}
              min={20}
              max={200}
            />
          </div>
        </div>

        {/* Refeições por dia */}
        <div>
          <label className="text-xs text-slate-400 mb-1 block">
            Refeições por dia
          </label>
          <select
            className="w-full md:w-40 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100"
            value={mealsPerDay}
            onChange={(e) => setMealsPerDay(Number(e.target.value))}
          >
            {[3, 4, 5, 6].map((m) => (
              <option key={m} value={m}>
                {m} refeições
              </option>
            ))}
          </select>
        </div>

        {/* Restrições alimentares */}
        <div className="space-y-2">
          <p className="text-xs text-slate-400">Restrições alimentares</p>
          <div className="flex flex-wrap gap-2">
            {(
              [
                'lactose',
                'gluten',
                'oleaginosa',
                'ovo',
                'vegetariano',
                'vegano',
                'diabetes',
                'low_sodio',
                'sem_acucar',
              ] as Restriction[]
            ).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => toggleRestriction(r)}
                className={`px-3 py-1.5 rounded-full text-xs border transition ${
                  restrictions.includes(r)
                    ? 'bg-cyan-600/80 border-cyan-400 text-white'
                    : 'bg-slate-900 border-slate-700 text-slate-300'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Botão gerar */}
        <button
          type="button"
          onClick={handleGenerate}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
        >
          Gerar dieta com IA
        </button>

        {/* Resultado */}
        {generatedMeals && (
          <div className="space-y-4 mt-4">
            {generatedMeals.map((meal) => (
              <div
                key={meal.mealName}
                className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-100">
                    {meal.mealName}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {meal.totalKcal} kcal • P {meal.protein}g • C {meal.carbs}g
                    • G {meal.fats}g
                  </span>
                </div>

                {/* Alimentos + substituições */}
                <ul className="text-xs text-slate-300 space-y-1">
                  {meal.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="text-cyan-400 font-medium">
                        {item.food}
                      </span>{' '}
                      — {item.grams} g
                      {item.equivalents && item.equivalents.length > 0 && (
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          Substituições equivalentes:{' '}
                          <span className="text-slate-300">
                            {item.equivalents.join(', ')}
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Receita base da refeição */}
                {meal.recipe && (
                  <div className="mt-3 rounded-lg border border-slate-800 bg-slate-900/70 p-3">
                    <p className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">
                      Sugestão de receita
                    </p>
                    <p className="text-sm font-semibold text-slate-100 mb-1">
                      {meal.recipe.title}
                    </p>
                    <p className="text-xs text-slate-400 mb-2">
                      {meal.recipe.description}
                    </p>
                    <p className="text-[11px] text-slate-400 font-semibold mb-1">
                      Ingredientes:
                    </p>
                    <ul className="text-[11px] text-slate-300 list-disc list-inside mb-2 space-y-0.5">
                      {meal.recipe.ingredients.map((ing, idx) => (
                        <li key={idx}>{ing}</li>
                      ))}
                    </ul>
                    <p className="text-[11px] text-slate-400 font-semibold mb-1">
                      Modo de preparo:
                    </p>
                    <ol className="text-[11px] text-slate-300 list-decimal list-inside space-y-0.5">
                      {meal.recipe.method.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </BaseSection>
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
