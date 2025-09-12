import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(req: NextRequest) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Se não estiver logado → manda pro /login
  if (!user) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const role = (user.app_metadata as any)?.role;

  // Rotas protegidas por role
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (role !== "admin" && role !== "super_admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/aluno")) {
    if (role !== "aluno") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/professor")) {
    if (role !== "professor") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/secretaria")) {
    if (role !== "secretaria" && role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/financeiro")) {
    if (role !== "financeiro" && role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// Define onde o middleware roda
export const config = {
  matcher: [
    "/admin/:path*",
    "/aluno/:path*",
    "/professor/:path*",
    "/secretaria/:path*",
    "/financeiro/:path*",
  ],
};
