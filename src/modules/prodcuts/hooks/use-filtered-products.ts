import { useProductsQuery } from "./use-products-query";
import { useProductsStore } from "../stores/products-store";

export function useFilteredProducts() {
  const { data: products = [], isLoading, error } = useProductsQuery();

  const search = useProductsStore((s) => s.search);
  const selectedBrands = useProductsStore((s) => s.selectedBrands);

  const filteredProducts = products.filter(({ title, brand, category }) => {
    const q = search.toLowerCase();

    const matchesSearch =
      title.toLowerCase().includes(q) ||
      brand.toLowerCase().includes(q) ||
      category.toLowerCase().includes(q);

    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(brand);

    return matchesSearch && matchesBrand;
  });

  return { products: filteredProducts, isLoading, error };
}