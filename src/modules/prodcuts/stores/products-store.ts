import { create } from "zustand";
import { Filters, ProductsState } from "../types/fillter-type";

const initialFilters: Filters = {
  search: "",
  selectedBrands: [],
  priceRange: {
    min: 50,
    max: 1000,
  },
};
export const useProductsStore = create<ProductsState>((set) => ({
  filters: structuredClone(initialFilters),
  draftFilters: structuredClone(initialFilters),
  isBrandOpen: false,
  isPriceOpen: false,

  // Desktop 
  setSearch: (value) =>
    set((state) => ({
      filters: { ...state.filters, search: value },
    })),

  setSelectedBrands: (brands) =>
    set((state) => ({
      filters: { ...state.filters, selectedBrands: brands },
    })),

  // Mobile 

  setPriceRange: (range) =>
    set((state) => ({
      filters: { ...state.filters, priceRange: range },
    })),

  setDraftPriceRange: (range) =>
    set((state) => ({
      draftFilters: {
        ...state.draftFilters,
        priceRange: range,
      },
    })),

  resetDraftPriceRange: () =>
    set((state) => ({
      draftFilters: {
        ...state.draftFilters,
        priceRange: state.filters.priceRange,
      },
    })),

  setDraftSearch: (value) =>
    set((state) => ({
      draftFilters: { ...state.draftFilters, search: value },
    })),

  setDraftSelectedBrands: (brands) =>
    set((state) => ({
      draftFilters: { ...state.draftFilters, selectedBrands: brands },
    })),

  applyDraftFilters: () =>
    set((state) => ({
      filters: state.draftFilters,
    })),

  resetDraftFilters: () =>
    set(() => ({
      draftFilters: structuredClone(initialFilters),
    })),


}));