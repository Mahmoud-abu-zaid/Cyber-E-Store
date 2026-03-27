import axios from "axios";
import { Product } from "../Types/products";

interface ProductsResponse {
  products: Product[];
  limit: number;
}
export default async function GetProducts() {
  const data = { limit: 8 };
  const response = await axios.get<ProductsResponse>("https://dummyjson.com/products/category/smartphones", { params: data });

  return response.data.products;
}

export async function getProductById(id: string): Promise<Product> {
  const response = await axios.get<Product>(`https://dummyjson.com/products/${id}`);

  return response.data;
}
