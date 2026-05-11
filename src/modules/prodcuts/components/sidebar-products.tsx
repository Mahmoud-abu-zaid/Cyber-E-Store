import { LucideSearch } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { useProductsStore } from "../stores/products-store";
import { useProductsHooks } from "../hooks/use-products-hooks";

export default function SidebarProducts() {

  const brands = ["Apple", "Samsung", "Xiaomi", "Oppo", "OnePlus", "Google", "Sony", "Huawei", "Nokia"];
  const { filters, setSearch, setSelectedBrands } = useProductsStore();
  const { isBrandOpen, setIsBrandOpen } = useProductsHooks()


  const { search, selectedBrands } = filters;

  return (
    <div >
      <button
        className="flex justify-between items-center w-full text-xl border-b pb-2 cursor-pointer" onClick={() => setIsBrandOpen(state => !state)}>
        <p className="font-medium">Brand</p>
        <IoIosArrowDown className={`transition-transform ${isBrandOpen ? "rotate-180" : ""}`} />
      </button>
      {isBrandOpen && (
        <div className="flex flex-col gap-3 mt-3">
          <div className="flex items-center bg-muted px-3 rounded-lg">
            <LucideSearch className="text-muted-input" />
            <input type="text" className="bg-muted p-2 w-full outline-none" placeholder="Search brand" value={search}
              onChange={(e) => setSearch(e.target.value)} />
          </div>

          {brands.map((brand) => (
            <label key={brand} htmlFor={brand} className="flex items-center gap-2 text-muted-foreground hover:text-black transition cursor-pointer pl-1" >
              <input type="checkbox" id={brand} className="accent-black" checked={selectedBrands.includes(brand)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedBrands([...selectedBrands, brand]);
                  } else {
                    setSelectedBrands(
                      selectedBrands.filter((b) => b !== brand)
                    );
                  }
                }} />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-3 mt-3">
        <button
          className="flex justify-between items-center w-full text-xl border-b pb-2 cursor-pointer">
          <p className="font-medium">Battery capacity</p>
          <IoIosArrowDown className={`transition-transform `} />
        </button>
        <button
          className="flex justify-between items-center w-full text-xl border-b pb-2 cursor-pointer">
          <p className="font-medium">Screen type</p>
          <IoIosArrowDown className={`transition-transform`} />
        </button>
        <button
          className="flex justify-between items-center w-full text-xl border-b pb-2 cursor-pointer">
          <p className="font-medium">Screen diagonal</p>
          <IoIosArrowDown className={`transition-transform`} />
        </button>
        <button
          className="flex justify-between items-center w-full text-xl border-b pb-2 cursor-pointer">
          <p className="font-medium">Protection class</p>
          <IoIosArrowDown className={`transition-transform`} />
        </button>
        <button
          className="flex justify-between items-center w-full text-xl border-b pb-2 cursor-pointer">
          <p className="font-medium">Built-in memory</p>
          <IoIosArrowDown className={`transition-transform`} />
        </button>
      </div>
    </div>
  );
}