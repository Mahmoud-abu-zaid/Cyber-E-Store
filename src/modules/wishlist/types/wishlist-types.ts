import { Product } from "@/modules/discover-products/Types/products";

export interface WishlistItem {
  id: string;
  product_id: string;
  created_at: string;
  product: Product | null;
}