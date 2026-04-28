"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AmazonZoom from "./amazon-zoom";
import { useQuery } from "@tanstack/react-query";
import { IoIosArrowForward } from "react-icons/io";
import Loading from "@/components/sections/loading";
import ProductScreenDetails from "./product-screen-details";
import ProductSpecifications from "./product-specifications";
import ProductCustomerReviews from "./product-customer-reviews";
import { Product } from "@/modules/discover-products/Types/products";
import { getProductById } from "@/modules/discover-products/services/products-services";

export default function ProductDetailsClient({
  productId,
}: {
  productId: string;
}) {
  const [activeImage, setActiveImage] = useState(0);

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  if (isLoading) return <Loading />;
  if (error || !product) return <div>Error loading product</div>;

  return (
    <section className="pt-18 2xl:container 2xl:mx-auto">
      <div className="px-4">
        <div className="hidden lg:flex items-center gap-3 text-muted-text">
          <Link href="/">Home</Link>
          <IoIosArrowForward />
          <Link href="/products">Products</Link>
          <IoIosArrowForward />
          <Link href="/products">{product.tags[0]}</Link>
          <IoIosArrowForward />
          <Link href="/products">{product.brand}</Link>
          <IoIosArrowForward />
          <span className="text-black">{product.title}</span>
        </div>

        <section className="grid lg:grid-cols-2 py-8">
          <div className="lg:sticky lg:top-24 self-start">
            <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-4 lg:gap-0">
              <div className="flex lg:flex-col flex-row flex-wrap gap-4 py-6">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-18 h-20 sm:w-28 sm:h-23 cursor-pointer"
                  >
                    <Image src={img} alt={product.title} width={200} height={200} className="sm:w-28 sm:h-23 w-18 h-20" onClick={() => setActiveImage(index)} />
                    {activeImage !== index && (
                      <div className="absolute inset-0 bg-white/70 pointer-events-none" />
                    )}
                  </div>
                ))}
              </div>
              <AmazonZoom
                src={product.images[activeImage] || product.thumbnail}
                alt={product.title}
              />
            </div>
          </div>

          <ProductSpecifications product={product} />
        </section>
      </div>

      <ProductScreenDetails product={product} />
      <ProductCustomerReviews product={product} />
    </section>
  );
}