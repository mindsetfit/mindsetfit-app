'use client';

export default function PeriodizacaoResumo() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Resumo da Periodização
        </h2>
        <p className="text-sm text-slate-400">
          Aqui ficará o resumo completo: semanas, divisão, dias e exercícios.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
        <p className="text-xs text-slate-500">
          Estrutura inicial criada. Em breve carregará os dados reais.
        </p>
      </div>
    </div>
  );
}
