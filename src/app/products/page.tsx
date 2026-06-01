import type { Metadata } from "next";
import ProductsClient from "@/modules/prodcuts/components/products-client";

export const metadata: Metadata = {
  title: "Products ",
  description: "Browse our wide range of products including smartphones, laptops, and more.",
  keywords: ["products", "smartphones", "laptops", "electronics", "Cyber E-Store"],
  openGraph: {
    title: "Products ",
    description: "Browse our wide range of products including smartphones, laptops, and more.",
    type: "website",
  },
};

export default function Products() {
  return <div className="pt-18 2xl:container 2xl:mx-auto">
    <ProductsClient />
  </div>;
}
