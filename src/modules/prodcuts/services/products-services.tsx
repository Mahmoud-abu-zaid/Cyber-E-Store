import axios from "axios";
import { Product } from "@/modules/discover-products/Types/products";

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export default async function GetProducts(): Promise<Product[]> {
  const response = await axios.get<ProductsResponse>(
    "https://dummyjson.com/products/category/smartphones"
  );

  return response.data.products;
}