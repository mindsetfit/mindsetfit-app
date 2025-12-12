import { Suspense } from "react";
import PeriodizacaoResumo from '@/components/custom/periodizacao-resumo';

export default function Page() {
  return (
  <Suspense fallback={<div className="p-4 text-white/70">Carregando…</div>}>
<main className="w-full max-w-5xl mx-auto px-4 py-6">
      <PeriodizacaoResumo />
    </main>
  </Suspense>
);
}
