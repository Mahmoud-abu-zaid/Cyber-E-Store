import { Product } from "@/modules/discover-products/Types/products";

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product: Product | null;
}

export interface CartStore {
  items: CartItem[];
  loading: boolean;
  fetchCart: () => Promise<void>;
  addToCart: (productId: string) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
}