#!/usr/bin/env bash
set -e

echo "========================================"
echo "  MindsetFit — Sync com GitHub (main)   "
echo "========================================"

# Mensagem de commit (primeiro argumento) ou padrão
MSG="${1:-chore: sync MindsetFit app}"

echo ""
echo ">> Status atual do repositório:"
git status

echo ""
echo ">> Adicionando arquivos alterados..."
git add .

echo ""
echo ">> Criando commit (se houver mudanças)..."
if git commit -m "$MSG"; then
  echo "✔ Commit criado: $MSG"
else
  echo "⚠ Nenhuma mudança para commitar (repositório já limpo)."
fi

echo ""
echo ">> Atualizando a partir do GitHub (git pull --rebase origin main)..."
git pull --rebase origin main

echo ""
echo ">> Enviando alterações para o GitHub (git push origin main)..."
git push origin main

echo ""
echo "✅ Sync concluído com sucesso!"
