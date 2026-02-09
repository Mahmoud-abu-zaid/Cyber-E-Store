import LoginForm from "@/modules/auth/login/components/login-form";

export const dynamic = "force-dynamic";

// This page is explicitly set to dynamic rendering using `export const dynamic = "force-dynamic"`
// Reason: This page relies on Server Actions (signup/login) and runtime data from Supabase.
// If Next.js tries to prerender it as static during build, it will fail in production
// (e.g., POST requests return 500, Server Components render errors occur on Vercel).
// By forcing dynamic, we ensure that:
// 1. Server Actions execute at runtime on the server.
// 2. Supabase authentication works correctly with cookies and session data.
// 3. Production behavior matches local development behavior.

export default function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
