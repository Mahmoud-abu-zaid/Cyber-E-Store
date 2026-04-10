import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { getProductById } from "@/modules/discover-products/services/products-services"
import ProductDetailsClient from "@/modules/product-details/components/product-details-client"

export default async function ProductDetails({ params, }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProductById(id)

  return (
    <section className="pt-18 2xl:container 2xl:mx-auto px-4">
      <div className="hidden lg:flex items-center gap-3 text-muted-text ">
        <Link href="/">Home</Link>
        <span className="text-xl">
          <IoIosArrowForward />
        </span>
        <Link href="/products">Products</Link>
        <span className="text-xl">
          <IoIosArrowForward />
        </span>
        <Link href="/products">{product.tags[0]}</Link>
        <span className="text-xl">
          <IoIosArrowForward />
        </span>
        <Link href="/products">{product.brand}</Link>
        <span className="text-xl">
          <IoIosArrowForward />
        </span>
        <span className="text-black">{product.title}</span>
      </div>

      <ProductDetailsClient product={product} />
    </section>
  )
}