import type { Metadata } from "next";
import RegisterForm from "@/modules/auth/register/components/register-form";

export const metadata: Metadata = {
  title: "Create Account ",
  description: "Create a new Cyber E-Store account to start shopping.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Register() {
  return <RegisterForm />
}
