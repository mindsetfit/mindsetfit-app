// src/app/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const cookieStore = cookies();
  const isAuth = cookieStore.get("mindsetfit_auth")?.value === "true";

  // Se estiver autenticado, manda direto para o dashboard
  // Se não, manda para a tela de login
  redirect(isAuth ? "/dashboard" : "/login");
}
