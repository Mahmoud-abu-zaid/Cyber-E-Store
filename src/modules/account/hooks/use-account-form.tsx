import { useForm } from "react-hook-form";
import { AccountTypes } from "../types/account-types";
import { useState } from "react";

export default function useAccountForm() {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm<AccountTypes>();
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  function onSubmit(data: AccountTypes) {
    console.log(data);
    reset();
  }

  return { register, handleSubmit, errors, image, preview, handleImage, onSubmit, setImage, setPreview, isDirty ,reset};
}
