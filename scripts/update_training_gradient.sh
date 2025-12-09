#!/usr/bin/env bash
set -e

FILE="src/components/custom/training-builder.tsx"

if [ ! -f "$FILE" ]; then
  echo "Arquivo não encontrado: $FILE"
  exit 1
fi

echo "Aplicando gradiente premium MindsetFit Elite nos botões de grupamento muscular..."

# Substitui o bloco de classes do botão ativo e inativo
# sem alterar o resto do componente
sed -i '' 's/bg-primary text-primary-foreground border-primary shadow-sm/bg-gradient-to-br from-\[#0A3D62\] via-\[#1B9CFC\] to-\[#6A00FF\] text-white border-\[#A45CFF\] shadow-\[#1B9CFC\]\/40 shadow-md/g' "$FILE"

sed -i '' 's/bg-background text-foreground border-border hover:bg-muted/bg-\[#0B0B0D\] text-\[#A45CFF\] border-\[#1B9CFC44\] hover:bg-\[#1B9CFC22\]/g' "$FILE"

echo "Gradiente aplicado com sucesso!"
