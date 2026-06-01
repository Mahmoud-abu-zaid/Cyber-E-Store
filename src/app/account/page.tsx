import type { Metadata } from "next";
import AccountForm from "@/modules/account/components/account-form";

export const metadata: Metadata = {
  title: "My Account ",
  description: "Manage your account, profile, and personal information.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Account() {
  return <AccountForm />;
}
