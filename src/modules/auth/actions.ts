"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LoginFormTypes } from "./types/form-types";

export async function signup(data: { email: string; password: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function login(data: LoginFormTypes) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email: data.email, password: data.password });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
