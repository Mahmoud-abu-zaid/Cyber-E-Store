import Category from "@/components/sections/category";
import HeroSectionVideo from "@/components/sections/hero-section";
import FeaturedProducts from "@/components/sections/featured-products";
import DiscoverProducts from "@/modules/discover-products/discover-products";

export default function Home() {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <HeroSectionVideo />
      <FeaturedProducts />
      <Category />
      <DiscoverProducts />
    </div>
  );
}
