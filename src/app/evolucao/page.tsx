export default function EvolucaoPage() {
  return (
    <main className="min-h-screen p-4 md:p-6 text-white">
      <header className="space-y-2 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Evolução</h1>
        <p className="text-sm md:text-base text-gray-400">
          Aqui você acompanha sua evolução ao longo do processo:
          peso, percentual de gordura, medidas e performance nos treinos.
        </p>
      </header>

      <section className="space-y-4">
        <div className="border border-gray-800 rounded-2xl bg-black/30 p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-2">Resumo da Evolução</h2>
          <p className="text-sm text-gray-300">
            Em breve: gráficos de peso, percentual de gordura, RCQ,
            volume de treino e ranking interno gamificado do MindsetFit.
          </p>
        </div>

        <div className="border border-gray-800 rounded-2xl bg-black/20 p-4 md:p-6">
          <h3 className="text-base font-semibold mb-2">Próximos recursos</h3>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            <li>Evolução semanal, mensal e total.</li>
            <li>Gráfico de peso x percentual de gordura.</li>
            <li>Histórico de treinos e cargas.</li>
            <li>Ranking interno com pontos, níveis e badges.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
