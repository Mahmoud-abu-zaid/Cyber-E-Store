import { useState } from "react";

export function useProductsHooks() {
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  return {
    search,
    setSearch,
    selectedBrands,
    setSelectedBrands,
    isBrandOpen,
    setIsBrandOpen,
  };
}
