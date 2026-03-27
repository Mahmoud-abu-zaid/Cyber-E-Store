"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductCard from "./product-card";
import { Product } from "./Types/products";
import useDiscoverProducts from "./hooks/use-diecover-products";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function DiscoverProductsClient({ products }: { products: Product[] }) {
  const { activeTab, setActiveTab, taps } = useDiscoverProducts();

  return (
    <div className="pb-12 px-3 w-full lg:container lg:mx-auto">
      <div>
        <ul className="flex gap-6 mb-4 relative">
          {taps.map((tap) => (
            <li
              key={tap}
              onClick={() => setActiveTab(tap)}
              className={`relative cursor-pointer pb-2
            ${activeTab === tap ? "text-black" : "text-muted-foreground"}
          `}
            >
              {tap}

              {activeTab === tap && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-black"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      {activeTab === "New Arrival" && (
        <div>
          <div className="hidden min-[992px]:grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  items-center gap-4 ">
            {products.map((product) => (
              <ProductCard key={product.id} productCard={product} />
            ))}
          </div>

          <div className="min-[992px]:hidden">
            <Carousel
              opts={{
                align: "start",
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3">
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="
                  pl-4
                  basis-[85%]
                  min-[380px]:basis-[65%]
                  min-[550px]:basis-[58%]
                  sm:basis-[40%]
                  md:basis-[31%]
                "
                  >
                    <ProductCard productCard={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      )}
      {activeTab === "Bestseller" &&
       <div className="flex flex-col justify-center items-center gap-1">
        <Image src="/img/Website icon.webp" alt="bestseller" width={100} height={100} className="py-3" loading="lazy"/>
        <p className="text-2xl font-semibold">we{"'"}re coming soon..</p>
        <p className="font-semibold text-lg"><em>we{"'"}re working on our new website. </em> </p>
        </div>}
      {activeTab === "Featured Products" && 
      <div className="flex flex-col justify-center items-center gap-1">
        <Image src="/img/Website icon.webp" alt="bestseller" width={100} height={100} className="py-3" loading="lazy"/>
        <p className="text-2xl font-semibold">we{"'"}re coming soon..</p>
        <p className="font-semibold text-lg"><em>we{"'"}re working on our new website. </em></p>
        </div>}
    </div>
  );
}
