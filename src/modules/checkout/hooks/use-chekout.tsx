import { toast } from "sonner";
import { PaymentForm } from "../types/checkout-types";

const today = new Date();

export function getDeliveryDate(days: number) {
  const date = new Date(today);
  date.setDate(today.getDate() + days);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

 export function onPay(data: PaymentForm) {
    console.log("Payment data:", data);
    toast.success("Payment Successful!");
  }
