import { createBrowserClient } from "@supabase/ssr";
export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.PUBLIC_URL_PROJECT!,
    process.env.PUBLIC_SUPABASE_ANON_KEY!
  );
}