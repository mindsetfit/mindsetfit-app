#!/usr/bin/env bash
set -e

echo "===================================================="
echo " DESATIVANDO BLOCO 'SUGESTÕES AUTOMÁTICAS DE TREINO'"
echo " Arquivo alvo: src/components/custom/training-variations.tsx"
echo "===================================================="

cat << 'EOT' > src/components/custom/training-variations.tsx
"use client";

// Componente desativado.
// Antes: renderizava o bloco "Sugestões automáticas de treino".
// Agora: não renderiza nada, mantendo o restante da página intacto.

export default function TrainingVariations() {
  return null;
}
EOT

echo "===================================================="
echo " TRAINING-VARIATIONS DESATIVADO COM SUCESSO ✔"
echo "===================================================="
