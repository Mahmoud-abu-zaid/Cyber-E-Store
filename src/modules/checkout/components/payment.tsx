import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";
import { useCart } from "@/modules/cart/hooks/use-cart";
import { useProfile } from "@/modules/account/hooks/use-profile";
import { Controller } from "react-hook-form";
import { PaymentProps } from "../types/checkout-types";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

const payments = ["Credit Card", "PayPal", "PayPal Credit"]

export default function Payment({ register, errors, cardData, control }: PaymentProps) {
  const { data: profile } = useProfile();
  const { data: items = [] } = useCart();
  const [activePayment, setActivePayment] = useState("Credit Card");
  const total = items.reduce((sum, item) => sum + (item.product?.price ?? 0) * item.quantity, 0);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="border p-4 rounded-lg">
        <h4>Summary</h4>
        <div>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 border-b py-2 pr-4 bg-accent my-2 rounded-md">
              <div>
                <Image src={item.product?.thumbnail ?? ""} alt={item.product?.title ?? ""} width={116} height={96} className="w-20 h-20 rounded-md inline" />
                <span>{item.product?.title}</span>
              </div>

              <p>${item.product?.price}</p>

            </div>
          ))}
          <div className="py-2">
            <p className="text-muted-input pb-2">Address</p>
            <p>{profile?.address}</p>
            <p>{profile?.phone_number}</p>
          </div>

          <div className="py-2">
            <p className="text-muted-input">Shipment method</p>
            <p>Free</p>
          </div>

          <div className="flex items-center justify-between py-2">
            <p className="text-muted-input">Subtotal</p>
            <p>${total.toFixed(2)} </p>
          </div>

          <div className="flex items-center justify-between py-2">
            <p className="text-muted-input">Estimated Tax</p>
            <p>$50</p>
          </div>

          <div className="flex items-center justify-between py-2">
            <p className="text-muted-input">Estimated shipping & Handling</p>
            <p>$29</p>
          </div>

          <div className="flex items-center justify-between py-2 font-medium">
            <p>Total</p>
            <p>${(total + 79).toFixed(2)} </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">Payment</h2>
        <div>
          <div className="flex items-center gap-4 p-4">
            {payments.map((payment) => (
              <ul key={payment} onClick={() => setActivePayment(payment)}>
                <li
                  className={`relative cursor-pointer pb-2 transition-colors duration-200 ${activePayment === payment ? "text-black" : "text-gray-500"}`}>
                  {payment}

                  {activePayment === payment && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }} />)}
                </li>
              </ul>
            ))}
          </div>
          {activePayment === "Credit Card" && <div className={`px-2 rounded-lg ${shareTechMono.className}`}>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex justify-center">
                <div className="relative">

                  <Image src="/img/Master Card.webp" alt="bestseller" width={550} height={500} className="w-88 h-65 lg:h-69 sm:h-66 object-cover" loading="lazy" />

                  <div className={`absolute top-[53%] text-2xl left-4 text-white tracking-widest z-10 ${shareTechMono.className}`}>
                    <p className="font-semibold" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8), 2px 4px 9px rgba(0,0,0,0.20)" }}>{cardData.cardNumber}</p>
                  </div>

                  <div className={`absolute top-[80%] left-[55%] transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold w-full z-10 `}>
                    <p className="font-semibold" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8), 2px 4px 9px rgba(0,0,0,0.20)" }}>{cardData.cardholderName}</p>
                  </div>

                  <div className={`absolute top-[67%] right-[25%] text-white text-sm  z-10 string`}>
                    <p className="font-semibold" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8), 2px 4px 9px rgba(0,0,0,0.20)" }}>{cardData.expDate}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">

                <Controller
                  name="cardholderName"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Cardholder name is required",
                    minLength: { value: 3, message: "Name must be at least 3 characters" },
                    maxLength: { value: 50, message: "Name must be at most 50 characters" },
                    pattern: { value: /^[A-Z\s]+$/, message: "Name must contain only letters" },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      maxLength={50}
                      placeholder="Cardholder Name"
                      onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                      className={`string border rounded px-3 py-2 w-full mb-1`}
                    />
                  )}
                />
                {errors.cardholderName && <p className="text-red-500 text-sm mb-3">{errors.cardholderName.message}</p>}

                <Controller
                  name="cardNumber"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Card number is required",
                    pattern: { value: /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/, message: "Invalid card number" },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Card Number"
                      maxLength={19}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, "").slice(0, 16);
                        const formatted = digits.match(/.{1,4}/g)?.join(" ") ?? "";
                        field.onChange(formatted);
                      }}

                      className={`string border rounded px-3 py-2 w-full mb-1`}
                    />
                  )}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mb-3">{errors.cardNumber.message}</p>}

                <div className="flex gap-4">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Exp. Date (MM/YY)"
                      {...register("expDate", {
                        required: "Expiry date is required",
                        pattern: { value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/, message: "Invalid format, use MM/YY" },
                      })}
                      className={`string border rounded px-3 py-2 w-full mb-1`}
                    />
                    {errors.expDate && <p className="text-red-500 text-sm mb-3">{errors.expDate.message}</p>}
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="CVV"
                      {...register("cvv", {
                        required: "CVV is required",
                        minLength: { value: 3, message: "CVV must be 3 or 4 digits" },
                        maxLength: { value: 4, message: "CVV must be 3 or 4 digits" },
                        pattern: { value: /^[0-9]{3,4}$/, message: "CVV must contain only strings" },
                      })}
                      className={`string border rounded px-3 py-2 w-full mb-1`}
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mb-3">{errors.cvv.message}</p>}
                  </div>
                </div>

                <div className="flex items-center my-4">
                  <input type="checkbox" id="save-card" className="mr-2 accent-black" {...register("saveCard")} />
                  <label htmlFor="save-card" className={`string text-sm`}>Save this card for future payments</label>
                </div>
              </div>
            </div>
          </div>}

          {activePayment === "PayPal" && <div className="p-4 rounded-lg mt-4">
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src="/img/Website icon.webp" alt="bestseller" width={100} height={100} className="py-3" loading="lazy" />
              <p className="text-2xl font-semibold">we{"'"}re coming soon..</p>
              <p className="font-semibold text-lg"><em>we{"'"}re working on our new website. </em> </p>
            </div></div>}

          {activePayment === "PayPal Credit" && <div className="p-4 rounded-lg mt-4">
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src="/img/Website icon.webp" alt="bestseller" width={100} height={100} className="py-3" loading="lazy" />
              <p className="text-2xl font-semibold">we{"'"}re coming soon..</p>
              <p className="font-semibold text-lg"><em>we{"'"}re working on our new website. </em> </p>
            </div></div>}
        </div>
      </div>
    </div>
  );
}