"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();
    if (error) return;

    router.replace("/auth/login"); 
    toast.success("Logged out successfully 👋")
  };

  return handleLogout;
}
