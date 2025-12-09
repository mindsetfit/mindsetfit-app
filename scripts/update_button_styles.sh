#!/usr/bin/env bash
set -e

FILE="src/components/custom/training-builder.tsx"

if [ ! -f "$FILE" ]; then
  echo "Arquivo não encontrado: $FILE"
  exit 1
fi

echo ">> Aplicando ajustes premium nos botões do Training Builder..."

# BOTÃO ATIVO — mantém texto branco + adiciona font-semibold
sed -i '' 's/text-white border-\[#A45CFF\] shadow-md/text-white font-semibold border-\[#A45CFF\] shadow-md/g' "$FILE"

# Mini categoria selecionada (segundo padrão)
sed -i '' 's/text-white border-\[#A45CFF\] shadow-md/text-white font-semibold border-\[#A45CFF\] shadow-md/g' "$FILE"

# BOTÃO INATIVO — texto roxo > azul neon (#1B9CFC) + font-semibold
sed -i '' 's/text-\[#A45CFF\]/text-\[#1B9CFC\] font-semibold/g' "$FILE"

echo ">> Ajustes completos! Reiniciando servidor..."
