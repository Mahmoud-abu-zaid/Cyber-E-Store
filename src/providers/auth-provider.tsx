"use client";

import { createClient } from "@/lib/supabase/client";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "@/app/loading";

type AuthContextType = {
  isLoggedIn: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minDelay = 1000;
    const startTime = Date.now();

    supabase.auth.getUser().then(({ data }) => {
      setLoggedIn(!!data.user);

      const elapsed = Date.now() - startTime;
      const remaining = minDelay - elapsed;

      if (remaining > 0) {
        setTimeout(() => setLoading(false), remaining);
      } else {
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <Loading isLoading={loading} />;
  }

  return <AuthContext.Provider value={{ isLoggedIn }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
