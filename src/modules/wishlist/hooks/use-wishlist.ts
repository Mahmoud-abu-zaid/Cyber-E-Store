import axios from "axios";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const supabase = createClient();

// FETCH

async function fetchWishlist() {
  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return [];

  const { data: wishlistItems } = await supabase
    .from("wishlist_items")
    .select("*")
    .eq("user_id", user.id);

  if (!wishlistItems) return [];

  const merged = await Promise.all(
    wishlistItems.map(async (item) => {
      const { data: product } = await axios.get(
        `https://dummyjson.com/products/${item.product_id}`
      );
      return { ...item, product };
    })
  );

  return merged;
}

// HOOKS

export function useWishlist() {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: fetchWishlist,
    staleTime: 1000 * 60,
  });
}

export function useToggleWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      const user = (await supabase.auth.getUser()).data.user;
      if (!user) throw new Error("Not authenticated");

      const { data: existing } = await supabase
        .from("wishlist_items")
        .select("id")
        .eq("user_id", user.id)
        .eq("product_id", productId)
        .single();

      if (existing) {
        await supabase.from("wishlist_items").delete().eq("id", existing.id);
        return "removed";
      } else {
        await supabase
          .from("wishlist_items")
          .insert({ user_id: user.id, product_id: productId });
        return "added";
      }
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      if (result === "added") {
        toast.success("Added to wishlist! ❤️");
      } else {
        toast.error("Removed from wishlist! 🗑️");
      }
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

export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await supabase.from("wishlist_items").delete().eq("id", id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.error("Removed from wishlist! 🗑️");

    },
  });
}