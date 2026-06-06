import { Metadata } from "next";
import Category from "@/components/sections/category";
import SummerSale from "@/components/sections/summer-sale";
import BestSellers from "@/components/sections/best-sellers";
import AnimateOnScroll from "@/components/animate-on-scroll";
import HeroSectionVideo from "@/components/sections/hero-section";
import FeaturedProducts from "@/components/sections/featured-products";
import DiscoverProducts from "@/modules/discover-products/components/discover-products";

export const metadata: Metadata = {
  title: "Home | Cyber E-Store",
  description: "Shop the latest electronics, smartphones, laptops, and gadgets at Cyber E-Store.",
  keywords: ["electronics", "smartphones", "laptops", "gadgets", "online shopping", "Cyber E-Store"],
  openGraph: {
    title: "Cyber E-Store",
    description: "Shop the latest electronics, smartphones, laptops, and gadgets.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <HeroSectionVideo />

      <AnimateOnScroll>
        <FeaturedProducts />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Category />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <DiscoverProducts />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <BestSellers />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <SummerSale />
      </AnimateOnScroll>

    </div>
  );
}
