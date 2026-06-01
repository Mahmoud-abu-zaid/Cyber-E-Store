import type { Metadata } from "next";
import CartPage from "@/modules/cart/components/cart-page";

export const metadata: Metadata = {
  title: "Shopping Cart ",
  description: "View and manage your shopping cart items.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Cart() {
  return <CartPage />
}