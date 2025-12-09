#!/usr/bin/env bash
set -e

echo "====================================="
echo "  CRIANDO BOTÃO DE LOGOUT 🔐"
echo "====================================="

mkdir -p src/components/custom

cat << 'EOT' > src/components/custom/logout-button.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    // Limpa o cookie do login
    document.cookie =
      "mindsetfit_auth=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Redireciona para o login
    router.push("/login");
  }

  return (
    <Button
      variant="destructive"
      className="w-full mt-4"
      onClick={handleLogout}
    >
      Sair da conta
    </Button>
  );
}
EOT

echo "====================================="
echo "  BOTÃO DE LOGOUT CRIADO COM SUCESSO ✔"
echo "  Arquivo: src/components/custom/logout-button.tsx"
echo "====================================="
