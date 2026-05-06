import { useProductsQuery } from "./use-products-query";
import { useProductsStore } from "../stores/products-store";

export function useFilteredProducts() {
  const { data: products = [], isLoading, error } = useProductsQuery();

  const { search, selectedBrands, priceRange } = useProductsStore((s) => s.filters);

  const q = search.toLowerCase();

  const filteredProducts = products.filter(
    ({ title, brand, category, price }) => {
      const matchesSearch = !q || title.toLowerCase().includes(q) || brand.toLowerCase().includes(q) || category.toLowerCase().includes(q);

      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(brand);

      const matchesPrice = price >= priceRange.min && price <= priceRange.max;

      return matchesSearch && matchesBrand && matchesPrice;
    }
  );

  return { products: filteredProducts, isLoading, error };
}

