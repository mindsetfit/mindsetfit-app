#!/usr/bin/env bash
set -e

FILE="src/components/custom/training-builder.tsx"

if [ ! -f "$FILE" ]; then
  echo "Arquivo não encontrado: $FILE"
  exit 1
fi

echo ">> Ajustando cores de texto dos botões (neon azul / azul marinho)..."

# 1) Botões inativos: texto roxo -> azul neon (#1B9CFC)
sed -i '' 's/text-\[#A45CFF\]/text-\[#1B9CFC\]/g' "$FILE"

# 2) Botões ativos (gradiente): texto branco -> azul marinho dark (#050814)
#    Isso só troca onde tem o combo com a borda roxa premium
sed -i '' 's/text-white border-\[#A45CFF\] shadow-md/text-\[#050814\] border-\[#A45CFF\] shadow-md/g' "$FILE"

echo ">> Cores atualizadas com sucesso!"
