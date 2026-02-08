import { toast } from "sonner";
import { login } from "../../actions";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { LoginFormTypes } from "../../types/form-types";

export default function useLoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormTypes>();

  const router = useRouter();

  const onSubmit = async (data: LoginFormTypes) => {
    try {
      const res = await login({
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      toast.success("Welcome back 👋");
      router.push("/account");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return {
    register,
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
  };
}
