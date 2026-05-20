"use client";

import Image from "next/image";
import { TbGardenCartOff } from "react-icons/tb";
import { HiOutlineXMark } from "react-icons/hi2";
import Loading from "@/components/sections/loading";
import { useCart, useRemoveFromCart, useUpdateQuantity } from "../hooks/use-cart";

export default function CartPage() {

  const { data: items = [], isLoading } = useCart();
  const { mutate: removeFromCart } = useRemoveFromCart();
  const { mutate: updateQuantity } = useUpdateQuantity();

  const total = items.reduce((sum, item) => sum + (item.product?.price ?? 0) * item.quantity, 0);


  if (isLoading) return <Loading />;

  return (
    <div className="pt-16 px-2 sm:px-7 2xl:container 2xl:mx-auto relative">
      <h1 className="text-2xl font-semibold">Shopping Cart</h1>


      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]  gap-3">
        <div>
          {items.length === 0 && <div className="flex flex-col items-center justify-center gap-2 text-2xl font-bold h-100">
            <p className="text-6xl">
              <TbGardenCartOff />
            </p>
            <p>
              No items in cart
            </p>
          </div>}
          {items.map((item) => (
            <div key={item.id} className=" border-b sm:p-4 p-2 px-1 my-2 rounded-md flex w-full items-center sm:gap-4 justify-between ">

              <div className="flex items-center">
                <Image src={item.product?.thumbnail ?? ""} alt={item.product?.title ?? ""} width={116} height={96} className="sm:w-24 sm:h-24 w-20 h-20 rounded-md object-cover" />                <div className="flex sm:flex-col sm:gap-0 gap-3">
                  <h4 className="sm:text-xl sm:w-50 w-18">{item.product?.title}</h4>
                  <p className="sm:flex hidden">{item.product?.brand}</p>
                  <p className="sm:flex hidden">{item.product?.tags[0]}</p>
                </div>
              </div>

              <div className="flex items-center sm:gap-2 gap-1">
                <button onClick={() => updateQuantity({ id: item.id, quantity: item.quantity - 1 })} className="text-xl cursor-pointer">-</button>
                <span className=" border py-1 px-3 rounded">{item.quantity}</span>
                <button onClick={() => updateQuantity({ id: item.id, quantity: item.quantity + 1 })} className="text-xl cursor-pointer">+</button>
              </div>
              <p>${item.product?.price}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-2xl cursor-pointer"><HiOutlineXMark /></button>
            </div>

          ))}
        </div>
        <div className="border p-4 sm:p-6 my-2 rounded-lg">
          <div className="sticky top-20">
            <h3 className="text-xl font-bold">Order Summary</h3>
            <div className="pt-4">
              <label>Discount code / Promo code</label>
              <input type="text" className="border p-3 w-full mt-2 rounded-lg" placeholder="Code" />
            </div>
            <div className="pt-4">
              <label>Your bonus card number</label>
              <div className="flex items-center justify-between border p-2 mt-2 rounded-md">
                <input type="text" placeholder="Enter Card Number" className="w-full  outline-0" />
                <button className="border w-25 h-9 rounded-sm cursor-pointer border-black">Apply</button>
              </div>
              <div className="">
                <div className="flex items-center justify-between py-2">
                  <p className="font-medium">Subtotal </p>
                  <p className="font-medium">${total.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p className="text-muted-input">Estimated Tax</p>
                  <p className="font-medium">$50</p>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p className="text-muted-input">Estimated shipping & Handling</p>
                  <p className="font-medium">$29</p>
                </div>
                <div className="flex items-center justify-between py-2">
                  <p className="font-medium">Total</p>
                  <p className="font-medium"> ${(total + 79).toFixed(2)}</p>
                </div>
                <button className="border w-full h-12 rounded-md cursor-pointer mt-4 bg-black text-white">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}