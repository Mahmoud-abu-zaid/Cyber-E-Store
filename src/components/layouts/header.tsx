"use client";

import Link from "next/link";
import Image from "next/image";
import { SlHeart } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { PiShoppingCart } from "react-icons/pi";
import { FaRegCircleXmark } from "react-icons/fa6";
import { CiLogout, CiSearch } from "react-icons/ci";
import { useAuth } from "@/providers/auth-provider";
import { useCart } from "@/modules/cart/hooks/use-cart";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { RiMenuFill, RiShoppingBag3Line } from "react-icons/ri";
import { useLogout } from "@/modules/auth/login/hooks/use-logout";
import { useWishlist } from "@/modules/wishlist/hooks/use-wishlist";
import { useProfile } from "@/modules/account/hooks/use-profile";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Sign up", href: "/auth/register" },
];

export default function Header() {
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();
  const handleLogout = useLogout();
  const { data: profile } = useProfile();
  const { data: items = [] } = useCart();
  const { data: products = [] } = useWishlist();
  const { showMenu, setShowMenu } = useMobileMenu();

  return (
    <header className="py-3 px-7 z-40 fixed top-0 left-0 right-0 bg-white">
      <nav className="flex justify-between lg:justify-center lg:gap-4 w-full items-center ">
        <div className="object-contain shrink-0">
          <Link href="/">
            <Image src="/img/Website logo.webp" alt="Website logo" className="object-contain shrink-0" width={120} height={100} priority />
          </Link>
        </div>

        <div className="hidden lg:flex gap-14 items-center">
          <div className="bg-thread-bg  px-4 py-2 rounded-md flex items-center gap-3 text-muted-input">
            <CiSearch className="text-xl" />
            <input type="text" placeholder="Search" className="outline-0 min-w-70 xl:w-93" />
          </div>

          <div>
            <ul className="flex items-center gap-8 text-muted-text font-medium">
              {navLinks.map((link) => {
                if (isLoggedIn && link.name === "Sign up") return null;
                return (
                  <li key={link.name} className="w-14">
                    <Link href={link.href} className={`${pathname === link.href ? "text-black" : "text-muted-text"} hover:text-black transition-colors`}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4 text-xl ">
            <Link href="/wishlist">
              <div className=" relative ">
                <SlHeart />
                <span className={`absolute -top-3 -right-3 bg-red-500 w-5 h-5 text-center text-sm rounded-full text-white ${products[0] ? "block" : "hidden"}`}>{products.length}</span>
              </div>
            </Link>
            <Link href="/cart" className="cursor-pointer">
              <div className=" relative ">
                <PiShoppingCart />
                <span className={`absolute -top-3 -right-3 bg-red-500 w-5 h-5 text-center text-sm rounded-full text-white ${items[0] ? "block" : "hidden"}`}>{items.length}</span>
              </div>
            </Link>
            {isLoggedIn && (
              <div>
                <button onClick={() => setShowMenu((show) => !show)} className="cursor-pointer relative flex items-center ">
                  {profile?.avatar_url ? (
                    <Image src={profile.avatar_url} alt="profile image" width={90} height={90} className="rounded-full h-8 w-8" />
                  ) :
                    <GoPerson />
                  }
                </button>
                <div>
                  {showMenu && (
                    <div className=" absolute left-[79%] bg-black text-white p-3 rounded-md flex flex-col gap-2 shadow-xl w-57 text-[17px]">
                      <Link href="/account" className="flex items-center gap-2 p-2 hover:bg-thread-bg hover:text-black rounded-md">
                        <GoPerson />
                        <span>Manage My Account</span>
                      </Link>
                      <Link href="/account" className="flex items-center gap-2 p-2 hover:bg-thread-bg hover:text-black rounded-md">
                        <RiShoppingBag3Line />
                        <span>My Order</span>
                      </Link>
                      <Link href="/account" className="flex items-center gap-2 p-2 hover:bg-thread-bg hover:text-black rounded-md">
                        <FaRegCircleXmark />
                        <span>Cancellations</span>
                      </Link>
                      <Link href="/account" className="flex items-center gap-2 p-2 hover:bg-thread-bg hover:text-black rounded-md">
                        <FaRegStar />
                        <span>Reviews</span>
                      </Link>
                      <button onClick={handleLogout} className="flex items-center text-red-500 gap-2 p-2 bg-thread-bg rounded-md cursor-pointer">
                        <CiLogout className="text-[25px]" />
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <button onClick={() => setShowMenu((show) => !show)} className="block lg:hidden cursor-pointer">
          <RiMenuFill className="text-3xl" />
        </button>
      </nav>

      {showMenu && (
        <div className="absolute right-0 left-0 top-15 bg-white lg:hidden p-3 flex flex-col gap-3 shadow-xl items-center">
          <ul className="flex items-center flex-col gap-2 font-medium w-full">
            {navLinks.map((link) => {
              if (isLoggedIn && link.name === "Sign up") return null;
              return (
                <li
                  key={link.name}
                  className={`${pathname == link.href ? "text-black bg-thread-bg shadow-[0_0px_10px_#f5f5f5]" : "text-muted-text"
                    } hover:bg-thread-bg hover:text-black hover:shadow-[0_0px_10px_#f5f5f5] text-center  min-w-full rounded-lg`}
                >
                  <Link href={link.href} className={`hover:text-black flex justify-center py-2`}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="bg-thread-bg  px-4 py-2 rounded-md flex items-center gap-3 text-muted-input w-full shadow-[0_0px_8px_#f5f5f5]">
            <CiSearch className="text-xl" />
            <input type="text" placeholder="Search" className="outline-0 w-full" />
          </div>

          <div className="flex items-center gap-8 text-xl text-black ">
            <Link href="/wishlist" className="bg-thread-bg p-2 rounded-full shadow-[0_0px_20px_#f5f5f5]">
              <div className=" relative ">
                <SlHeart />
                <span className={`absolute -top-3 -right-3 bg-red-500 w-5 h-5 text-center text-sm rounded-full text-white ${products[0] ? "block" : "hidden"}`}>{products.length}</span>
              </div>
            </Link>

            <Link href="/cart" className="bg-thread-bg p-2 rounded-full shadow-[0_0px_20px_#f5f5f5]">
              <div className=" relative ">
                <PiShoppingCart />
                <span className={`absolute -top-3 -right-3 bg-red-500 w-5 h-5 text-center text-sm rounded-full text-white ${items[0] ? "block" : "hidden"}`}>{items.length}</span>
              </div>
            </Link>

            {isLoggedIn && (
              <div className="flex items-center gap-4 text-xl -ml-3">
                <Link href="/account" className={`${profile?.avatar_url ? "" : "bg-thread-bg p-2"} rounded-full shadow-[0_0px_20px_#f5f5f5]`}>
                  {profile?.avatar_url ? (
                    <Image src={profile.avatar_url} alt="profile image" width={90} height={90} className="rounded-full h-8 w-8" />
                  ) :
                    <GoPerson />
                  }
                </Link>

                <button onClick={handleLogout} className="bg-thread-bg p-2 rounded-full shadow-[0_0px_20px_#f5f5f5] text-red-500 cursor-pointer">
                  <CiLogout />
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </header>
  );
}
