"use client";

import Link from "next/link";
import { TbDeviceWatch } from "react-icons/tb";
import { PiGameControllerLight } from "react-icons/pi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiCamera, CiHeadphones, CiMobile3 } from "react-icons/ci";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const categories = [
  { href: "/products", icon: <CiMobile3 />, name: "Phones" },
  { href: "/products", icon: <TbDeviceWatch />, name: "Smart Watches" },
  { href: "/products", icon: <CiCamera />, name: "Cameras" },
  { href: "/products", icon: <CiHeadphones />, name: "Headphones" },
  { href: "/products", icon: <HiOutlineComputerDesktop />, name: "Computers" },
  { href: "/products", icon: <PiGameControllerLight />, name: "Gaming" },
];

export default function Category() {
  return (
    <section className="container mx-auto py-12 px-3">
      <div className="mb-6">
        <h2 className="text-3xl font-semibold">Browse by Category</h2>
        <p className="text-muted-foreground mt-2">Find what you’re looking for</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {categories.map((category) => (
            <CarouselItem
              key={category.name}
              className="
                pl-3
                basis-[45%]       
                sm:basis-[30%]     
                lg:basis-[18%] 
              "
            >
              <Link
                href={category.href}
                className="
                  flex h-full flex-col items-center justify-center
                  gap-4 rounded-xl border bg-background p-6
                  transition
                  hover:bg-accent 
                "
              >
                <span className="text-4xl text-muted-foreground">{category.icon}</span>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
