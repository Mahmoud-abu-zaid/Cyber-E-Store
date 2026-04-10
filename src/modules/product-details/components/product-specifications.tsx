import { AiOutlineShop } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { Product } from "@/modules/discover-products/Types/products";
import { Colors, MemerySize, ProductDetails } from "../constants/product-specs";

export default function ProductSpecifications({ product }: { product: Product }) {
  return <div>
    <div>
      <h1 className="text-4xl font-bold pb-4">{product.title}</h1>
      <p className="text-3xl font-medium">${product.price}</p>
    </div>
    <div className="select-color flex items-center gap-1.5">
      <p className="text-lg font-medium">Select color :</p>
      {Colors.map((color) => (
        <button
          key={color.id}
          className={`w-6 h-6 rounded-full cursor-pointer ${color.className}`}
        />
      ))}
    </div>

    <div className="size-momery py-4 grid grid-cols-4 gap-2">
      {MemerySize.map((memory) => (
        <button
          key={memory.id}
          className="w-full h-12 border border-muted-text rounded-lg text-muted-foreground cursor-pointer hover:border-black hover:text-black transition"
        >
          {memory.label}
        </button>
      ))}
    </div>

    <div className="details grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
      {ProductDetails.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.id}
            className="flex items-center gap-3 bg-muted p-3 rounded-lg w-full"
          >
            <Icon className="text-muted-input text-3xl" />
            <div>
              <p className="text-muted-text text-sm">{item.label}</p>
              <p className="text-muted-input text-lg">{item.value}</p>
            </div>
          </div>
        )
      })}
    </div>

    <p className="py-5">{product.description}</p>

    <div className="flex gap-3">
      <button className="text-black w-full h-12  border border-black cursor-pointer hover:bg-muted rounded-md transition delay-25">Add to Wishlist</button>
      <button className="text-white w-full h-12 bg-black cursor-pointer rounded-md">Add to Card</button>
    </div>

    <div className="py-5 flex flex-wrap sm:justify-between  gap-3">
      <div className="flex items-center gap-2 w-50">
        <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center">
          <CiDeliveryTruck className="text-2xl text-muted-input" />
        </div>
        <div>
          <p className="text-sm text-muted-text">Free Delivery</p>
          <p>{product.shippingInformation}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-50">
        <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center">
          <AiOutlineShop className="text-2xl text-muted-input" />
        </div>
        <div>
          <p className="text-sm text-muted-text">In Stock</p>
          <p>{product.availabilityStatus}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-50">
        <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center">
          <HiOutlineBadgeCheck className="text-2xl text-muted-input" />

        </div>
        <div>
          <p className="text-sm text-muted-text">Guaranteed</p>
          <p>{product.warrantyInformation}</p>
        </div>
      </div>
    </div>
  </div>
}