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
