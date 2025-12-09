"use client";

export default function RankingTable({ ranking }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">🏆 Ranking Interno</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-2 text-left">Posição</th>
            <th className="px-3 py-2 text-left">Usuário</th>
            <th className="px-3 py-2 text-right">Volume Total</th>
            <th className="px-3 py-2 text-right">Treinos</th>
            <th className="px-3 py-2 text-right">Score</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((user, i) => (
            <tr key={user.userId} className="border-b">
              <td className="px-3 py-2">{i + 1}</td>
              <td className="px-3 py-2">{user.name}</td>
              <td className="px-3 py-2 text-right">{user.totalVolume}</td>
              <td className="px-3 py-2 text-right">{user.sessions}</td>
              <td className="px-3 py-2 text-right font-bold">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
