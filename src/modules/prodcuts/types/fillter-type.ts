export interface ProductsState  {
  search: string;
  selectedBrands: string[];
  isBrandOpen: boolean;

  setSearch: (value: string) => void;
  setSelectedBrands: (brands: string[]) => void;
  setIsBrandOpen: (value: boolean) => void;
};