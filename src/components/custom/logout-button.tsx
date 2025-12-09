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
