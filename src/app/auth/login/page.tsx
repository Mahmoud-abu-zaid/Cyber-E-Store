import type { Metadata } from "next";
import LoginForm from "@/modules/auth/login/components/login-form";

export const metadata: Metadata = {
  title: "Login ",
  description: "Sign in to your Cyber E-Store account to access your orders, wishlist, and more.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Login() {
  return <LoginForm />
}
