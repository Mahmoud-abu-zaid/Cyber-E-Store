import { Control, FieldErrors, UseFormRegister } from "react-hook-form";

export interface PaymentForm {
  cardholderName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
  saveCard: boolean;
}

export interface PaymentProps {
  control: Control<PaymentForm>;
  register: UseFormRegister<PaymentForm>;
  errors: FieldErrors<PaymentForm>;
  cardData: Partial<PaymentForm>;
}
