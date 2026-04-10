import GetProducts from "../services/products-services";
import DiscoverProductsClient from "./discover-products-client";

export default async function DiscoverProducts() {
  const products = await GetProducts();
  return <DiscoverProductsClient products={products} />;
}
