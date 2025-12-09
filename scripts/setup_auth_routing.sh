#!/usr/bin/env bash
set -e

echo "====================================="
echo "  AUTH CONDICIONAL - LOGIN/DASHBOARD "
echo "  Criando lógica de redirecionamento "
echo "====================================="

echo ">> Sobrescrevendo src/app/page.tsx com redirecionamento condicional..."

cat << 'EOT' > src/app/page.tsx
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
EOT

echo ">> Sobrescrevendo src/app/login/page.tsx com login que seta cookie..."

cat << 'EOT' > src/app/login/page.tsx
// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Aqui no futuro você pode validar email/senha em uma API real.
    // Por enquanto, simulamos um login simples e criamos um cookie.
    const maxAge = 60 * 60 * 24 * 30; // 30 dias
    document.cookie = \`mindsetfit_auth=true; path=/; max-age=\${maxAge}\`;

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            Login MindsetFit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail</label>
              <Input
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Senha</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>

            <p className="text-[11px] text-muted-foreground text-center mt-2">
              Versão protótipo: autenticação simples baseada em cookie.
              Futuramente, você pode integrar com backend real / Google / etc.
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
EOT

echo ">> Criando middleware.ts para proteger rotas /, /login e /dashboard..."

cat << 'EOT' > middleware.ts
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuth = request.cookies.get("mindsetfit_auth")?.value === "true";
  const { pathname } = request.nextUrl;

  // Se NÃO estiver logado e tentar acessar /dashboard -> manda para /login
  if (!isAuth && pathname.startsWith("/dashboard")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Se estiver logado e tentar ir para /login -> manda para /dashboard
  if (isAuth && pathname === "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Se acessar "/" direto, decide pra onde mandar
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = isAuth ? "/dashboard" : "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/dashboard/:path*"],
};
EOT

echo "====================================="
echo "  AUTH CONDICIONAL CRIADO ✅          "
echo "  Rotas protegidas: /, /login, /dashboard"
echo "====================================="
