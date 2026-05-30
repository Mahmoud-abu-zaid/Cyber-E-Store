import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;

      const { data } = await supabase
        .from("user_profiles")
        .select("avatar_url,first_name,last_name,address, phone_number")
        .eq("id", user.id)
        .maybeSingle();

      return data;
    },
  });
}