import Image from "next/image";
import { getProductById } from "@/modules/discover-products/services/products-services";

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await getProductById(id);

  return (
    <div className="pt-11">
      <Image src={product.thumbnail} alt={product.title} width={200} height={200} className="w-40 h-40" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
