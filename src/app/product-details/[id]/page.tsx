import axios from "axios";
import { Metadata } from "next";
import { Product } from "@/modules/discover-products/Types/products";
import ProductDetailsClient from "@/modules/product-details/components/product-details-client";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { data: product } = await axios.get<Product>(
    `https://dummyjson.com/products/${id}`
  );

  return {
    title: `${product.title} `,
    description: product.description,
    keywords: [product.title, product.brand, product.category, "Cyber E-Store"],
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.thumbnail }],
      type: "website",
    },
  };
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductDetailsClient productId={id} />;
}