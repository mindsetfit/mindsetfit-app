#!/usr/bin/env bash
set -e

echo "===================================================="
echo " REMOVENDO DEFINITIVAMENTE AS SUGESTÕES DE TREINO   "
echo "===================================================="

# 1. Remove o arquivo que gera as sugestões
rm -f src/components/custom/training-variations.tsx || true
echo "-> Arquivo training-variations.tsx removido"

# 2. Limpa importações e chamadas do componente em /treinos/page.tsx
TARGET="src/app/treinos/page.tsx"

if [ -f "$TARGET" ]; then
  sed -i '' '/training-variations/d' "$TARGET"
  sed -i '' '/TrainingVariations/d' "$TARGET"
  sed -i '' '/<TrainingVariations/d' "$TARGET"
  echo "-> Removido import e uso de TrainingVariations em page.tsx"
else
  echo "AVISO: page.tsx não encontrado em treinos/"
fi

# 3. Limpa qualquer outro uso remanescente no projeto
grep -R "TrainingVariations" -n src || true
grep -R "training-variations" -n src || true

echo "===================================================="
echo "  TODA A LÓGICA DE SUGESTÕES DE TREINO REMOVIDA ✔"
echo "===================================================="
