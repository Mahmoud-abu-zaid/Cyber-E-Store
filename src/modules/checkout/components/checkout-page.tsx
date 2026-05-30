"use client";

import Address from "./address";
import Payment from "./payment";
import { useState } from "react";
import Shipping from "./shipping";
import { useForm, useWatch } from "react-hook-form";
import { SiShopify } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { onPay } from "../hooks/use-chekout";
import { IoLocationSharp } from "react-icons/io5";
import { PaymentForm } from "../types/checkout-types";

const steps = [
  { name: "Address", icon: <IoLocationSharp />, step: 1 },
  { name: "Shipping", icon: <SiShopify />, step: 2 },
  { name: "Payment", icon: <MdPayment />, step: 3 },
];

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState("Address");
  const { register, handleSubmit, control, formState: { errors } } = useForm<PaymentForm>();
  const cardData = useWatch({ control });

  return (
    <div className="pt-18 px-2 sm:px-7 2xl:container 2xl:mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-5 mb-6">
        {steps.map((step) => (
          <div key={step.name} className={`${activeStep === step.name ? "text-black" : "text-gray-400"} flex items-center gap-2 font-semibold`}>
            <div className={`text-3xl text-white rounded-full p-2 ${activeStep === step.name ? "bg-black" : "bg-gray-400"}`}>{step.icon}</div>
            <div>
              <p className="text-sm">step {step.step}</p>
              <p>{step.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="min-h-40">

        {activeStep === "Address" && <Address />}

        {activeStep === "Shipping" && <Shipping />}

        {activeStep === "Payment" && <Payment control={control} register={register} errors={errors} cardData={cardData} />}
      </div>

      <div className="flex justify-end gap-2 pb-5">
        <button onClick={() => setActiveStep((active) => {
          if (active === "Shipping") return "Address";
          if (active === "Payment") return "Shipping";
          return active;
        })} className="border border-black px-4 py-2 w-42 rounded cursor-pointer">
          Back
        </button>

        {activeStep === "Payment" ? (
          <button
            type="submit"
            onClick={handleSubmit(onPay)}
            className="border px-4 py-2 w-42 rounded bg-black text-white cursor-pointer"
          >
            Pay
          </button>
        ) : (
          <button type="button" onClick={() => setActiveStep((active) => {
            if (active === "Address") return "Shipping";
            if (active === "Shipping") return "Payment";
            return active;
          })} className="border px-4 py-2 w-42 rounded bg-black text-white cursor-pointer">
            Next
          </button>
        )}
      </div>
    </div>
  );
} 