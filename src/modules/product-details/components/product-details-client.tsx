"use client"

import Image from "next/image"
import { useState } from "react"
import AmazonZoom from "./amazon-zoom";
import ProductSpecifications from "./product-specifications";
import { Product } from "@/modules/discover-products/Types/products"

export default function ProductDetailsClient({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0)

  return <>
    <div className="grid lg:grid-cols-2 grid-rows-1 py-8">
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
          />        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ProductSpecifications product={product} />
      </div>
    </div>
  </>
}