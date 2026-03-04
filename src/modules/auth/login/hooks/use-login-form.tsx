import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LoginFormTypes } from "../../types/form-types";

export default function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormTypes>();

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

    toast.success("Welcome back 👋");
    router.replace("/account");
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
}
