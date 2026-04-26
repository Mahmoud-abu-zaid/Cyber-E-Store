import { useState } from "react";
import { LucideSearch } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { Product } from "@/modules/discover-products/Types/products";

export default function SidebarProducts({ products }: { products: Product[] }) {
  const brands = ["Apple", "Samsung", "Xiaomi", "OnePlus", "Google", "Sony", "Huawei", "Nokia"];
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="flex justify-between items-center w-full text-xl border-b pb-2 cursor-pointer" onClick={() => setIsBrandOpen((prev) => !prev)}>
        <p className="font-medium">Brand</p>
        <IoIosArrowDown className={`transition-transform ${isBrandOpen ? "rotate-180" : ""}`} />
      </button>

      {isBrandOpen && (
        <div className="flex flex-col gap-3 mt-3">
          <div className="flex items-center bg-muted px-3 rounded-lg">
            <LucideSearch className="text-muted-input" />
            <input type="text" className="bg-muted p-2 w-full outline-none" placeholder="Search brand" />
          </div>

          {brands.map((brand) => (
            <label key={brand} htmlFor={brand} className="flex items-center gap-2 text-muted-foreground hover:text-black transition cursor-pointer pl-1" >
              <input id={brand} type="checkbox" className="accent-black" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}