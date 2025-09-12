"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";

export default function RedirectPage() {
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const checkRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const role = (user.app_metadata as any)?.role;

      switch (role) {
        case "super_admin":
        case "admin":
          router.push("/admin");
          break;
        case "professor":
          router.push("/professor");
          break;
        case "aluno":
          router.push("/aluno");
          break;
        case "secretaria":
          router.push("/secretaria");
          break;
        case "financeiro":
          router.push("/financeiro");
          break;
        default:
          router.push("/");
      }
    };

    checkRole();
  }, [supabase, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <p className="text-gray-700">🔄 Redirecionando...</p>
    </div>
  );
}
