"use client";

import { LucideSearch } from "lucide-react";
import { useProductsStore } from "../stores/products-store";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { usePriceConfig } from "../constants/price-config";

const BRANDS = ["Apple", "Samsung", "Xiaomi", "Oppo", "OnePlus", "Google", "Sony", "Huawei", "Nokia"];

export default function SidebarProductsMobile({ onClose }: { onClose: () => void }) {

  const { draftFilters, setDraftSearch, setDraftSelectedBrands, setDraftPriceRange } = useProductsStore();
  const { isBrandOpen, setIsBrandOpen, isPriceOpen, setIsPriceOpen } = useProductsStore();
  const { applyDraftFilters, resetDraftFilters } = useProductsStore();
  const { search, selectedBrands, priceRange } = draftFilters;
  const { minPrice, maxPrice, gap, step } = usePriceConfig();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button className="text-2xl cursor-pointer"
          onClick={() => {
            resetDraftFilters();
            applyDraftFilters();
            onClose();
          }}>
          <IoIosArrowBack />
        </button>
        <h2 className="text-2xl font-medium">Filters</h2>
      </div>
      <div>
        <button className="flex w-full items-center justify-between border-b pb-2 text-xl" onClick={() => setIsPriceOpen(!isPriceOpen)}>
          <span className="font-medium">Price</span>
          <IoIosArrowDown className={`transition-transform ${isPriceOpen ? "rotate-180" : ""}`} />
        </button>
        {isPriceOpen && (
          <div className="mt-4 space-y-4">

            <div className="flex justify-between text-sm font-medium">
              <div>
                <p className="py-2 font-light">From</p>
                <p className="border w-27.25 px-2 h-9 flex items-center">$ {priceRange.min}</p>
              </div>
              <div>
                <p className="py-2 text-end font-light">To</p>
                <p className="border w-27.25 px-2 h-9 flex items-center justify-end">$ {priceRange.max}</p>
              </div>
            </div>

            {/* Slider */}
            <div className="relative h-1 bg-gray-300 rounded">
              <div className="relative h-1 bg-gray-200 rounded-full">
                <div
                  className="absolute h-1 bg-black rounded-full"
                  style={{
                    left: `${((priceRange.min - minPrice) / (maxPrice - minPrice)) * 100}%`,
                    width: `${((priceRange.max - priceRange.min) / (maxPrice - minPrice)) * 100}%`,
                  }}
                />
              </div>

              <input type="range" min={minPrice} max={maxPrice} step={step} value={priceRange.min}
                onChange={(e) => {
                  const value = Math.min(Number(e.target.value), priceRange.max - gap);

                  setDraftPriceRange({ ...priceRange, min: value });
                }}
                className="range-thumb absolute w-full h-1 appearance-none bg-transparent" />

              <input type="range" min={minPrice} max={maxPrice} step={step} value={priceRange.max}
                onChange={(e) => {
                  const value = Math.max(Number(e.target.value), priceRange.min + gap);

                  setDraftPriceRange({ ...priceRange, max: value });
                }}
                className="range-thumb absolute w-full h-1 appearance-none bg-transparent" />
            </div>
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setIsBrandOpen(!isBrandOpen)} className="flex w-full items-center justify-between border-b pb-2 text-xl">
          <span className="font-medium">Brand</span>
          <IoIosArrowDown className={`transition-transform ${isBrandOpen ? "rotate-180" : ""}`} />
        </button>

        {isBrandOpen && (
          <div className="mt-3 space-y-3">
            <div className="flex items-center rounded-lg bg-muted px-3">
              <LucideSearch className="text-muted-foreground" />
              <input className="w-full bg-muted p-2 outline-none" placeholder="Search brand" value={search}
                onChange={(e) => {
                  const value = e.target.value;

                  setDraftSearch(value);
                  if (value.trim() === "") {
                    applyDraftFilters();
                  }
                }} />
            </div>

            {BRANDS.map((brand) => (
              <label
                key={brand} className="flex cursor-pointer items-center gap-2 text-muted-foreground hover:text-black">
                <input type="checkbox" className="accent-black" checked={selectedBrands.includes(brand)}
                  onChange={(e) => {
                    let updatedBrands: string[];
                    if (e.target.checked) {
                      updatedBrands = [...selectedBrands, brand];
                    } else {
                      updatedBrands = selectedBrands.filter(
                        (b) => b !== brand
                      );
                    }
                    setDraftSelectedBrands(updatedBrands);

                    if (updatedBrands.length === 0) {
                      applyDraftFilters();
                    }
                  }} />
                {brand}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {["Battery capacity", "Screen type", "Screen diagonal", "Protection class", "Built-in memory"].map((title) => (
          <button key={title} className="flex justify-between items-center w-full text-xl border-b pb-2 cursor-pointer">
            <p className="font-medium">{title}</p>
            <IoIosArrowDown className="transition-transform" />
          </button>
        ))}
      </div>

      <button
        className="w-full rounded-lg bg-black py-2 text-white"
        onClick={() => {
          applyDraftFilters();
          onClose();
        }}>
        Apply
      </button>
    </div>
  );
}