import { toast } from "sonner";
import { signup } from "../../actions";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { RegisterFormTypes } from "../../types/form-types";

export default function useRegisterForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormTypes>();

  const router = useRouter();

  const onSubmit = async (data: RegisterFormTypes) => {
    try {
      const res = await signup({
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        toast.error(res.error);
        return;
      }

      toast.success("Check your email to confirm your account");
      router.push("/auth/login");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
  };
}
