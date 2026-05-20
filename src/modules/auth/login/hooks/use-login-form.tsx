import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { LoginFormTypes } from "../../types/form-types";

export default function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormTypes>();

  const queryClient = useQueryClient();

  const router = useRouter();
  const supabase = createClient();

  const onSubmit = async (data: LoginFormTypes) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    await queryClient.invalidateQueries();
    toast.success("Welcome back 👋");
    router.replace("/account");
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
}
