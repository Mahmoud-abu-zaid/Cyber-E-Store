"use client";

import Link from "next/link";
import Loading from "@/app/products/loading";
import SidebarProducts from "./sidebar-products";
import { IoIosArrowForward } from "react-icons/io";
import { useFilteredProducts } from "../hooks/use-filtered-products";
import ProductCard from "@/modules/discover-products/components/product-card";

export default function ProductsClient() {

  const { products, isLoading, error } = useFilteredProducts();

  if (isLoading) return <Loading />;
  if (error || !products) return <div>Error loading products</div>;

  return (
    <div className="px-4 mb-5">
      <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground py-3">
        <Link href="/">Home</Link>
        <IoIosArrowForward />
        <span className="text-black font-medium">Products</span>
      </div>

      <div className="grid grid-cols-[280px_1fr] gap-4">
        <SidebarProducts  />

        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-start justify-center gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} productCard={product} />
          ))}
        </div>
      </div>
    </div>
  );
}