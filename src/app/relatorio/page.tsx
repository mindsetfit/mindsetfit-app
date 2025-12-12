import { Suspense } from "react";
import RelatorioClient from "./relatorio-client";

export default function RelatorioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] p-10 text-slate-300">
          Carregando relatório…
        </div>
      }
    >
      <RelatorioClient />
    </Suspense>
  );
}
