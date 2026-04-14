"use client";
import { IoIosArrowDown } from "react-icons/io";
import { Product } from "@/modules/discover-products/Types/products";
import { useState } from "react";

export default function ProductScreenDetails({ product }: { product: Product }) {
  const [moreDetails, setMoreDetails] = useState(false);
  return <>
    <div className="bg-muted sm:px-10 px-5 sm:py-10 py-5 flex justify-center items-center">
      <div className="bg-white  px-5 py-5 rounded-lg">
        <div>
          <h2 className="text-2xl pb-3">Details</h2>
          <p className="w-full text-muted-foreground">{product.description}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-[20px] pt-5">Screen</h3>
          <div className="flex justify-between border-b pb-2">
            <p>Screen diagonal</p>
            <p>N/A</p>
          </div>

          <div className="flex justify-between border-b pb-2">
            <p>The screen resolution</p>
            <p>N/A</p>
          </div>

          <div className="flex justify-between border-b pb-2">
            <p>The screen refresh rate</p>
            <p>N/A</p>
          </div>

          <div className="flex justify-between border-b pb-2">
            <p>The pixel density</p>
            <p>N/A</p>
          </div>

          <div className="flex justify-between border-b pb-2">
            <p>Screen type</p>
            <p>N/A</p>
          </div>

          <div className="flex justify-between border-b pb-2">
            <p>Additionally</p>
            <p>N/A</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[20px]">CPU</h3>
            <div className="flex justify-between border-b pb-2">
              <p>CPU</p>
              <p>N/A</p>
            </div>
            <div className="flex justify-between pb-2">
              <p>Number of cores</p>
              <p>N/A</p>
            </div>
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${moreDetails ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora unde nemo in maxime dolores porro, corporis iure ducimus eaque accusamus repellendus nostrum consectetur quam quos, eum dolore, aperiam cumque nulla? Laborum consequuntur nulla id non quisquam quas, vitae modi quo possimus. Cupiditate hic beatae tempora odit, deleniti tempore sed itaque.</p>
        </div>
        <div className="flex justify-center mt-5">
          <button className="flex justify-center items-center gap-3 border border-black rounded-lg w-54 h-12 cursor-pointer" onClick={() => setMoreDetails((state) => !state)}>{moreDetails ? "View Less" : "View More"} < IoIosArrowDown className={`transition-transform ${moreDetails ? "rotate-180" : ""}`} /></button>
        </div>
      </div>
      <div>
      </div>
    </div>
  </>
}