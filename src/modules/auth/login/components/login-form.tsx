import Link from "next/link";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function LoginForm() {
  return (
    <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 p-5 justify-center items-center gap-10 pt-20">
      <div className="flex justify-center items-center">
        <form className="lg:w-3/4 w-full">
          <h1 className="text-3xl font-semibold pb-6">Log In</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-border px-3 py-2 rounded gap-2.5">
              <CiMail className="text-xl text-gray-800" />
              <input type="email" className="w-full outline-0" placeholder="Your email" />
            </div>

            <div className="flex items-center border border-border px-3 py-2 rounded gap-2.5">
              <RiLockPasswordLine className="text-xl text-gray-800" />
              <input type="password" className="w-full outline-0" placeholder="Password" />
            </div>

            <button type="submit" className="bg-black text-white rounded px-3 py-2 cursor-pointer">
              Log In
            </button>
            <Link href="/" className="text-end text-blue font-semibold">
              Forgot password?
            </Link>
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
              Don’t have an account?{" "}
              <Link href="/auth/register" className="text-blue font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="relative hidden md:block">
        <Image src="/img/login.webp" alt="Image Left" width={800} height={800} priority />
        <div className="absolute top-6 w-full text-muted-input lg:text-2xl p-15 lg:pt-12 pt-8 flex flex-col font-semibold">
          <p className="mb-4">
            The future belongs to those who <span className="text-blue"> believe </span>in the <span className="text-blue"> beauty of their dreams.</span>
          </p>
          <p className="text-end">- Eleanor Roosevelt</p>
        </div>
      </div>
    </div>
  );
}
