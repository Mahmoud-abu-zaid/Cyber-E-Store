import { create } from "zustand";
import { ProductsState } from "../types/fillter-type";

export const useProductsStore = create<ProductsState>((set) => ({
  search: "",
  selectedBrands: [],
  isBrandOpen: false,

  setSearch: (value) => set({ search: value }),
  setSelectedBrands: (brands) => set({ selectedBrands: brands }),
  setIsBrandOpen: (value) => set({ isBrandOpen: value }),
}));