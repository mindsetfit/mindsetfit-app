#!/usr/bin/env bash
set -e

echo "===================================================="
echo " INSTALANDO TRAINING ENGINE v3.0 — 280 EXERCÍCIOS 🔥"
echo "===================================================="

TARGET="src/components/custom/training-builder.tsx"
mkdir -p src/components/custom

cat << 'EOT' > "$TARGET"
<ARQUIVO COMPLETO AQUI>
EOT

echo "===================================================="
echo " TRAINING ENGINE v3.0 INSTALADO ✔"
echo " Arquivo sobrescrito: src/components/custom/training-builder.tsx"
echo "===================================================="
