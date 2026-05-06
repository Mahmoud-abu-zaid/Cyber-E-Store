"use client";

import { useState } from "react";
import { TbShoppingBagX } from "react-icons/tb";
import { RiEqualizerLine } from "react-icons/ri";
import SidebarProducts from "./sidebar-products";
import Loading from "@/components/sections/loading";
import SidebarProductsMobile from "./sidebar-products-mobile";
import { useFilteredProducts } from "../hooks/use-filtered-products";
import ProductCard from "@/modules/discover-products/components/product-card";

export default function ProductsClient() {
  const { products, isLoading, error } = useFilteredProducts();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  if (isLoading) return <div><Loading /></div>;
  if (error) return <div>Error</div>;

  return (
    <div className="relative px-4 pb-4">
      <div>
        <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-black px-4 py-2 border rounded flex items-center justify-between gap-2 mb-3 ml-3 cursor-pointer">
          <p>Fillters</p>
          <RiEqualizerLine />
        </button>

      </div>
      <div className="lg:grid grid-cols-[280px_1fr] gap-4">
        <aside className="hidden lg:block">
          <div className="sticky top-20">
            <SidebarProducts />
          </div>
        </aside>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 items-start pl-3">
          {products.length === 0 ? (
            <div className="col-span-full h-[50vh] flex justify-center items-center py-20">
              <div className="text-lg text-muted-foreground flex items-center flex-col gap-2">
                <TbShoppingBagX className="text-6xl"/>
                <p className="font-medium">Nothing matches your search</p> 
              </div>
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} productCard={product} />
            ))
          )}


        </div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden ">
          <div className="absolute left-0 top-0 h-full w-full bg-white p-4 overflow-y-auto">
            <SidebarProductsMobile onClose={() => setIsSidebarOpen(false)} />
          </div>
        </div>
      )}

    </div>
  );
}