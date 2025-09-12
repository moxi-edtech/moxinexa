import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Browser client → para uso em componentes client-side
export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};

// Server client → para uso em server components (App Router)
export const createServerClientWithCookies = () => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies }
  );
};
