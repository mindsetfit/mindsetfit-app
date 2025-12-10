import fullDB, { type ExerciseRecord } from "../src/lib/full-training-database.ts";

type ModalityId = ExerciseRecord["modality"];

const MODALITIES: ModalityId[] = [
  "musculacao",
  "casa",
  "corrida",
  "spinning",
  "crossfit",
];

function printTitle(title: string) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================\n");
}

function groupBy<T, K extends string | number>(
  list: T[],
  getKey: (item: T) => K
): Record<K, T[]> {
  const map = {} as Record<K, T[]>;
  for (const item of list) {
    const key = getKey(item);
    if (!map[key]) map[key] = [];
    map[key] = [...map[key], item];
  }
  return map;
}

function main() {
  printTitle("MindsetFit • Verificador Premium do Banco de Exercícios");

  const total = fullDB.length;
  console.log(`👉 Total de exercícios no fullDB: ${total}\n`);

  // 1) Contagem por modalidade
  const byModality = groupBy(fullDB, (ex) => ex.modality);
  console.log("📊 Exercícios por modalidade:\n");
  MODALITIES.forEach((m) => {
    const list = byModality[m] || [];
    console.log(`  • ${m}: ${list.length}`);
  });

  const unknownModalities = Object.keys(byModality).filter(
    (m) => !MODALITIES.includes(m as ModalityId)
  );
  if (unknownModalities.length > 0) {
    console.log("\n⚠ Modalidades desconhecidas encontradas:");
    unknownModalities.forEach((m) => {
      console.log(`  • ${m}: ${(byModality as any)[m]?.length ?? 0} registros`);
    });
  }

  // 2) Detalhe da modalidade CASA (home_premium)
  const casaList = byModality["casa"] || [];
  printTitle("Detalhamento — Modalidade CASA (Home Premium)");

  console.log(`Total de exercícios em CASA: ${casaList.length}\n`);

  const casaByGroup = groupBy(casaList, (ex) => ex.group || "Sem grupo");
  Object.entries(casaByGroup).forEach(([group, list]) => {
    console.log(`  • ${group}: ${list.length} exercícios`);
  });

  // 3) Detalhe CROSSFIT
  const crossList = byModality["crossfit"] || [];
  printTitle("Detalhamento — Modalidade CROSSFIT");

  console.log(`Total de treinos/WODs: ${crossList.length}\n`);

  crossList.slice(0, 10).forEach((w, idx) => {
    console.log(
      `  ${idx + 1}. ${w.name}  | grupo/nível: ${w.group} | séries: ${
        w.series ?? "-"
      } | reps: ${w.reps ?? "-"}`
    );
  });
  if (crossList.length > 10) {
    console.log(`\n  ... + ${crossList.length - 10} WODs adicionais.`);
  }

  // 4) Verificar duplicidade de IDs
  printTitle("Validação — IDs duplicados");

  const idMap: Record<string, ExerciseRecord[]> = {};
  for (const ex of fullDB) {
    if (!ex.id) continue;
    if (!idMap[ex.id]) idMap[ex.id] = [];
    idMap[ex.id].push(ex);
  }
  const duplicated = Object.entries(idMap).filter(
    ([, list]) => list.length > 1
  );

  if (duplicated.length === 0) {
    console.log("✅ Nenhum ID duplicado encontrado.");
  } else {
    console.log("⚠ IDs duplicados encontrados:");
      duplicated.slice(0, 20).forEach(([id, list]) => {
      console.log(`  • ${id} (${list.length} ocorrências)`);
    });
    if (duplicated.length > 20) {
      console.log(`  ... + ${duplicated.length - 20} outros IDs duplicados.`);
    }
  }

  // 5) Registros quebrados (sem nome, grupo ou modality)
  printTitle("Validação — Registros Quebrados");

  const broken = fullDB.filter(
    (ex) => !ex.name || !ex.group || !ex.modality
  );

  if (broken.length === 0) {
    console.log("✅ Nenhum registro quebrado (sem nome, grupo ou modalidade).");
  } else {
    console.log(
      `⚠ Encontrados ${broken.length} registros com problemas.\nExemplos:`
    );
    broken.slice(0, 20).forEach((ex, idx) => {
      console.log(
        `  ${idx + 1}. id=${ex.id} | name=${ex.name} | group=${ex.group} | modality=${ex.modality}`
      );
    });
  }

  console.log("\n✅ Verificação concluída.\n");
}

main();
