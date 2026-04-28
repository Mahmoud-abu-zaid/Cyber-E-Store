import { useQuery } from "@tanstack/react-query";
import GetProducts from "../services/products-services";
import { Product } from "@/modules/discover-products/Types/products";

export function useProductsQuery() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: GetProducts,
  });
}