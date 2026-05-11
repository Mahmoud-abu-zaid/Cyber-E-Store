export interface PriceRange {
  min: number;
  max: number;
}
export interface Filters {
  search: string;
  selectedBrands: string[];
  priceRange: PriceRange;
}

export interface ProductsState {
  filters: Filters;
  draftFilters: Filters;

  applyDraftFilters: () => void;
  resetDraftFilters: () => void;
  resetDraftPriceRange: () => void;
  setSearch: (value: string) => void;
  setDraftSearch: (value: string) => void;
  setPriceRange: (range: PriceRange) => void;
  setSelectedBrands: (brands: string[]) => void;
  setDraftPriceRange: (range: PriceRange) => void;
  setDraftSelectedBrands: (brands: string[]) => void;
}