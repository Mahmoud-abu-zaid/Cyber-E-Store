"use client";

import Link from "next/link";
import Image from "next/image";
import { SlHeart } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { RiMenuFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PiShoppingCart } from "react-icons/pi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Sign up", href: "/auth/register" },
];

export default function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest("#mobile-menu")) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [showMenu]);

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
              {navLinks.map((link) => (
                <li key={link.name} className="w-14">
                  <Link href={link.href} className={`${pathname == link.href ? "text-black" : "text-muted-text"} hover:text-black transition-colors`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 text-xl ">
            <Link href="/">
              <SlHeart />
            </Link>
            <Link href="/">
              <PiShoppingCart />
            </Link>
            <Link href="/account">
              <GoPerson />
            </Link>
          </div>
        </div>
        <button onClick={() => setShowMenu((show) => !show)} className="block lg:hidden cursor-pointer">
          <RiMenuFill className="text-3xl" />
        </button>
      </nav>

      {showMenu && (
        <div className="absolute right-0 left-0 top-16 bg-white lg:hidden p-3 flex flex-col gap-3 shadow-xl items-center">
          <ul className="flex items-center flex-col gap-2 font-medium w-full">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`${
                  pathname == link.href ? "text-black bg-thread-bg shadow-[0_0px_10px_#f5f5f5]" : "text-muted-text"
                } hover:bg-thread-bg hover:text-black hover:shadow-[0_0px_10px_#f5f5f5] text-center  min-w-full rounded-lg`}
              >
                <Link href={link.href} className={`hover:text-black flex justify-center py-2`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="bg-thread-bg  px-4 py-2 rounded-md flex items-center gap-3 text-muted-input w-full shadow-[0_0px_8px_#f5f5f5]">
            <CiSearch className="text-xl" />
            <input type="text" placeholder="Search" className="outline-0 w-full" />
          </div>

          <div className="flex items-center gap-8 text-xl text-black ">
            <Link className="bg-thread-bg p-2 rounded-full shadow-[0_0px_20px_#f5f5f5]" href="/">
              <SlHeart />
            </Link>
            <Link href="/" className="bg-thread-bg p-2 rounded-full shadow-[0_0px_20px_#f5f5f5]">
              <PiShoppingCart />
            </Link>
            <Link href="/account" className="bg-thread-bg p-2 rounded-full shadow-[0_0px_20px_#f5f5f5]">
              <GoPerson />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
