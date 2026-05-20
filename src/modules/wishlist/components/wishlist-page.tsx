"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";
import Loading from "@/components/sections/loading";
import { useAddToCart } from "@/modules/cart/hooks/use-cart";
import { useRemoveFromWishlist, useWishlist } from "../hooks/use-wishlist";

export default function WishlistPage() {
  const { data: items = [], isLoading } = useWishlist();
  const { mutate: removeFromWishlist } = useRemoveFromWishlist();
  const { mutate: addToCart } = useAddToCart();

  if (isLoading) return <Loading />;

  return (
    <div className="pt-16 px-2 sm:px-7 2xl:container 2xl:mx-auto">
      <div className="flex justify-center pt-2 text-5xl">
        {items.length === 0 ? <FaHeart className="text-muted-input" /> : <FaHeart className=" text-red-500" />}
      </div>
      <h1 className="text-4xl font-semibold text-center py-4">My Wishlist</h1>

      {items.length === 0 && <div className="flex items-center justify-center gap-4 text-2xl font-bold h-70">
        <p>No items in Wishlist</p>
      </div>}
      {items.map((item) => (
        <div key={item.id} className="border-b sm:p-4 p-2 my-2 rounded-md flex sm:flex-row flex-col w-full items-center sm:gap-4 sm:justify-between">
          <div className="flex flex-row items-center">
            <button onClick={() => removeFromWishlist(item.id)} className="text-2xl cursor-pointer text-end hidden sm:flex"><HiOutlineXMark /></button>
            <Image src={item.product?.thumbnail ?? ""} alt={item.product?.title ?? ""} width={116} height={96} className="sm:w-24 sm:h-24 h-35 w-40 rounded-md" />
            <div className="flex flex-col items-start gap-2 sm:gap-0 ">
              <h4 className="sm:text-xl sm:w-50 w-25">{item.product?.title}</h4>
              <p>{item.product?.brand}</p>
              <p>{item.product?.tags[0]}</p>
              <p className="sm:hidden ">$ {item.product?.price}</p>
            </div>
          </div>
          <p className="sm:flex hidden w-37">$ {item.product?.price}</p>
          <div className="flex items-center sm:w-auto w-full gap-2">
            <button onClick={() => addToCart(item.product_id)}
              className="text-center sm:w-35 w-full h-10 cursor-pointer bg-black text-white rounded-md mt-2">
              Add to Cart
            </button>
            <button onClick={() => removeFromWishlist(item.id)} className="sm:hidden text-2xl cursor-pointer text-center bg-red-500 w-15 h-10 flex justify-center items-center rounded-md text-white mt-2"><HiOutlineXMark /></button>
          </div>

        </div>

      ))}
    </div>
  );
}