import ProductDetailsClient from "@/modules/product-details/components/product-details-client";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProductDetailsClient productId={id} />;
}