import axios from "axios";
import { toast } from "sonner";
import { CartItem } from "../types/cart-types";
import { createClient } from "@/lib/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const supabase = createClient();

// FETCH

async function fetchCart() {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return [];

  const { data: cartItems } = await supabase
    .from("cart_items")
    .select("*")
    .eq("user_id", user.id);

  if (!cartItems) return [];

  const merged = await Promise.all(
    cartItems.map(async (item) => {
      try {
        const { data: product } = await axios.get(
          `https://dummyjson.com/products/${item.product_id}`
        );
        return { ...item, product };
      } catch {
        return { ...item, product: null };
      }
    })
  );

  return merged.filter((item) => item.product !== null);
}

// HOOKS

export function useCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
    staleTime: 1000 * 60,
  });
}

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("Not authenticated");

      await supabase
        .from("cart_items")
        .upsert(
          { user_id: user.id, product_id: productId, quantity: 1 },
          { onConflict: "user_id,product_id", ignoreDuplicates: false }
        );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Added to cart! 🛒");
    },
    onError: (error) => {
      if (error.message === "Not authenticated") {
        toast.error("Please sign in");
      } else {
        toast.error("Update failed, please try again");
      }
    }
  });
}

export function useRemoveFromCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await supabase.from("cart_items").delete().eq("id", id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.error("Removed from cart! 🗑️");
    },
  });
}

export function useUpdateQuantity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      if (quantity <= 0) {
        await supabase.from("cart_items").delete().eq("id", id);
      } else {
        await supabase.from("cart_items").update({ quantity }).eq("id", id);
      }
    },
    onMutate: async ({ id, quantity }) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      const previous = queryClient.getQueryData<CartItem[]>(["cart"]);

      queryClient.setQueryData<CartItem[]>(["cart"], (old = []) => {

        if (quantity <= 0) return old.filter((item) => item.id !== id);

        return old.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
      });
      return { previous };
    },
    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData<CartItem[]>(["cart"], context.previous);
      }
    },
  });
}

