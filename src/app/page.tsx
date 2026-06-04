import { Metadata } from "next";
import dynamic from "next/dynamic";
import AnimateOnScroll from "@/components/animate-on-scroll";
import HeroSectionVideo from "@/components/sections/hero-section";

const FeaturedProducts = dynamic(() => import("@/components/sections/featured-products"));
const Category = dynamic(() => import("@/components/sections/category"));
const SummerSale = dynamic(() => import("@/components/sections/summer-sale"));
const BestSellers = dynamic(() => import("@/components/sections/best-sellers"));
const DiscoverProducts = dynamic(() => import("@/modules/discover-products/components/discover-products"));

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
      <AnimateOnScroll><FeaturedProducts /></AnimateOnScroll>
      <AnimateOnScroll><Category /></AnimateOnScroll>
      <AnimateOnScroll><DiscoverProducts /></AnimateOnScroll>
      <AnimateOnScroll><BestSellers /></AnimateOnScroll>
      <AnimateOnScroll><SummerSale /></AnimateOnScroll>
    </div>
  );
}