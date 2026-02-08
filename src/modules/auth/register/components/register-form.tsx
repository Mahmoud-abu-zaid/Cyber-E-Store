"use client";
import Link from "next/link";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import useRegisterForm from "../hooks/use-register-form";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";

export default function RegisterForm() {
  const { register, errors, handleSubmit, onSubmit } = useRegisterForm();
  return (
    <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 p-5 justify-center items-center gap-10 pt-20">
      <div className="relative hidden md:block">
        <Image src="/img/register.webp" alt="Modern workspace with inspirational quote by Steve Jobs" className="lg:max-h-[79vh]" width={800} height={500} priority />
        <div className="absolute top-6 w-full text-muted-input lg:text-2xl p-15 lg:pt-12 pt-8 flex flex-col font-semibold">
          <p className="mb-4">
            The only way to <span className="text-blue"> do great work</span> is to <span className="text-blue">love what you do.</span>
          </p>
          <p className="text-end">- Steve Jobs</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <form className="lg:w-3/4 w-full" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-semibold pb-6">Sign Up</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-border px-3 py-2 rounded gap-2.5">
              <CiMail className="text-xl text-gray-800" />
              <input
                type="email"
                className="w-full outline-0"
                placeholder="Your email"
                {...register("email", {
                  required: "Email Is Required",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                    message: "Email Must Be Lowercase And Valid, Like example@domain.com",
                  },
                })}
              />
            </div>

            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <div className="flex items-center border border-border px-3 py-2 rounded gap-2.5">
              <RiLockPasswordLine className="text-xl text-gray-800" />
              <input
                type="password"
                className="w-full outline-0"
                placeholder="Password"
                {...register("password", {
                  required: "Password Is Required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password Must Be At Least 8 Characters Long And Include Uppercase, Lowercase, A Number, And One Special Character (@, $, !, %, *, ?, &).",
                  },
                })}
              />
            </div>

            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <div className="flex items-center border border-border px-3 py-2 rounded gap-2.5">
              <RiLockPasswordFill className="text-xl text-gray-800" />
              <input
                type="password"
                placeholder="Repeat Password"
                className="w-full outline-0"
                {...register("repeatPassword", {
                  required: "Please Confirm Your Password",
                  validate: (value, formValues) => value === formValues.password || "Passwords Do Not Match",
                })}
              />
            </div>
            {errors.repeatPassword && <p className="text-red-500 text-sm">{errors.repeatPassword.message}</p>}

            <button type="submit" className="bg-black text-white rounded px-3 py-2 cursor-pointer">
              Sign Up
            </button>
          </div>
          <div className="flex items-center my-6">
            <div className="grow border-t border-border"></div>
            <span className="mx-4 text-sm text-muted-foreground">or</span>
            <div className="grow border-t border-border"></div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className="h-12 text-sm font-medium border-2 w-1/2 flex items-center justify-center gap-2 rounded-xl cursor-pointer">
              <FcGoogle className="text-2xl" />
              <span className="text-lg">Google</span>
            </button>
            <button className="h-12 gap-3 text-sm font-medium border-2 w-1/2 flex items-center justify-center rounded-xl cursor-pointer">
              <FaFacebook className="text-blue text-2xl" />
              <span className="text-lg">Facebook</span>
            </button>{" "}
          </div>

          <div>
            <p className="text-center mt-6 text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue font-medium">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
