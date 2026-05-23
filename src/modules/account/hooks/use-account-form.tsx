import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadAvatar } from "./useUploadAvatar";
import { createClient } from "@/lib/supabase/client";
import { AccountTypes } from "../types/account-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const supabase = createClient();

export default function useAccountForm() {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors, isDirty } } = useForm<AccountTypes>();

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const mutation = useMutation({
    mutationFn: async (data: AccountTypes) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      let avatar_url: string | undefined = undefined;
      if (image) {
        avatar_url = await uploadAvatar(image, user.id);
      }

      const { data: existing } = await supabase
        .from("user_profiles")
        .select("id")
        .eq("id", user.id)
        .maybeSingle();

      const { error } = existing
        ? await supabase
          .from("user_profiles")
          .update({
            first_name: data.firstName,
            last_name: data.lastName,
            username: data.userName,
            email: data.email,
            address: data.address,
            phone_number: data.phoneNumber,
            avatar_url,
            updated_at: new Date().toISOString(),
          })
          .eq("id", user.id)
        : await supabase
          .from("user_profiles")
          .insert({
            id: user.id,
            first_name: data.firstName,
            last_name: data.lastName,
            username: data.userName,
            email: data.email,
            address: data.address,
            phone_number: data.phoneNumber,
            avatar_url,
          });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      toast.success("Profile updated successfully! 🎉");
      reset();
      setImage(null);
      setPreview(null);
    },
    onError: (error: Error) => {
      if (error.message === "Not authenticated") {
        toast.error("Please sign in");
      } else if (error.message.includes("user_profiles_username_key")) {
        toast.error("Username already taken, please choose another");
      } else {
        toast.error("Update failed, please try again");
      }
    },
  });

  function onSubmit(data: AccountTypes) {
    mutation.mutate(data);
  }

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    image,
    preview,
    handleImage,
    onSubmit,
    isLoading: mutation.isPending,
    setPreview,
    setImage,
    reset,
  };
}