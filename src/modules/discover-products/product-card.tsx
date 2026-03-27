import Link from "next/link";
import Image from "next/image";
import { Product } from "./Types/products";
import { IoMdHeartEmpty } from "react-icons/io";

export default function ProductCard({ productCard }: { productCard: Product }) {
  const { id, title, price, thumbnail } = productCard;
  return (
    <div
      key={id}
      className="flex flex-col text-center items-center justify-between h-full bg-accent 
          min-[992px]:hover:ring-1 min-[992px]:hover:ring-black py-5 px-3 rounded min-[992px]:w-75  transition-all duration-200
          ease-out min-[992px]:hover:scale-[1.02]"
    >
      <button className="text-2xl self-end pr-1 cursor-pointer text-muted-input">
        <IoMdHeartEmpty />
      </button>
      <Link href={`/product-details/${id}`} className="flex flex-col items-center justify-center gap-2">
        <Image src={thumbnail} alt={title} width={200} height={200} className="w-40 h-40" />
        <h2 className="text-lg">{title}</h2>
        <p className="text-2xl font-semibold">${price}</p>
      </Link>
      <Link href="/" className="w-full text-center py-2 bg-black text-white rounded-md mt-2">
        Buy Now
      </Link>
    </div>
  );
}
