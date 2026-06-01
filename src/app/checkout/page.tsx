import type { Metadata } from "next";
import CheckoutPage from "@/modules/checkout/components/checkout-page";

export const metadata: Metadata = {
  title: "Checkout ",
  description: "Complete your purchase securely.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Checkout() {
  return <CheckoutPage />
}