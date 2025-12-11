
"use client";

type Props = {
  plan: any;
};

/**
 * Bloco simples de HIIT apenas para exibição.
 * Futuramente podemos substituir por lógica real de HIIT adaptado ao objetivo.
 */
export default function HiitSessionBlock({ plan }: Props) {
  if (!plan) return null;

  return (
    <section className="border border-slate-800 rounded-xl bg-slate-900/60 p-4 mt-6">
      <h3 className="text-lg font-semibold text-slate-100 mb-2">
        Sessão HIIT sugerida
      </h3>

      <p className="text-sm text-slate-300">
        • Duração: 10–15 minutos <br/>
        • Intensidade: Alta (perceba a respiração acelerada) <br/>
        • Tipo sugerido: Sprint na esteira, bike ergométrica ou air bike <br/>
        • Protocolo base: 30s forte / 30s leve × 10 rounds
      </p>

      <p className="text-xs text-slate-500 mt-3">
        Este bloco pode ser ajustado automaticamente futuramente conforme objetivo e nível.
      </p>
    </section>
  );
}
