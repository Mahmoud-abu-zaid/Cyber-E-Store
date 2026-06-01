import type { Metadata } from "next";
import WishlistPage from "@/modules/wishlist/components/wishlist-page";

export const metadata: Metadata = {
  title: "My Wishlist ",
  description: "View and manage your saved products.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Wishlist() {
  return <WishlistPage />
}