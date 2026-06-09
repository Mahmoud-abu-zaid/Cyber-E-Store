"use client";

import Loading from "@/app/loading";
import { createClient } from "@/lib/supabase/client";
import { createContext, useContext, useEffect, useState } from "react";

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
    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(!!data.session?.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session?.user);
    });

    setTimeout(() => setLoading(false), 1000);

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <Loading isLoading={loading} />;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);