'use client';

import { Button } from '@/components/ui/button';

export default function PeriodizacaoForm() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Periodização Inteligente • MindsetFit
        </h2>
        <p className="text-sm text-slate-400">
          Aqui será o formulário premium para escolher estratégia, objetivo,
          dias por semana, nível e tempo de treino.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
        <p className="text-xs text-slate-500">
          Estrutura criada com sucesso. Os próximos passos vão ativar a lógica real.
        </p>

        <div className="mt-4 flex justify-end">
          <Button
            type="button"
            className="h-8 px-4 text-[11px] bg-cyan-500 hover:bg-cyan-400 text-slate-950"
          >
            Em breve: configurar periodização
          </Button>
        </div>
      </div>
    </div>
  );
}
