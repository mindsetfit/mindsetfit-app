#!/usr/bin/env bash
set -e

echo "==============================================="
echo " ADICIONANDO LOGOUT AO DASHBOARD 🔐"
echo "==============================================="

FILE="src/app/dashboard/page.tsx"

# 1. Adicionar import do LogoutButton no topo do arquivo, se ainda não existir
if ! grep -q 'LogoutButton' "$FILE"; then
  echo ">> Inserindo import LogoutButton..."
  sed -i '' '1s/^/import LogoutButton from "\/src\/components\/custom\/logout-button";\n/' "$FILE"
else
  echo ">> Import LogoutButton já existe. Pulando..."
fi

# 2. Inserir o bloco HTML antes de </main> apenas se ainda não existir
if ! grep -q 'LogoutButton' "$FILE"; then
  echo ">> Inserindo botão de logout no layout..."
  sed -i '' 's@</main>@  <section className="mt-8 max-w-xs">\n    <LogoutButton />\n  </section>\n</main>@' "$FILE"
else
  echo ">> Botão já encontrado no arquivo. Nada a alterar."
fi

echo "==============================================="
echo " LOGOUT ADICIONADO COM SUCESSO ✔"
echo " Arquivo modificado: src/app/dashboard/page.tsx"
echo "==============================================="
