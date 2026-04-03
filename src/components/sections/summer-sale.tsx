import Link from "next/link";
import Image from "next/image";

export default function SummerSale() {
  return (
    <div className=" flex justify-between gap-4 bg-linear-to-tl from-black to-[#787878] sm:h-80 h-60">
      <div>
        <Image src="/img/banner big summer sale 2 .webp" alt="Summer Sale 1" width={420} height={420} className="absolute left-0 sm:w-80 w-40" loading="lazy" />
      </div>
      <div className="flex flex-col justify-center items-center text-center text-white py-3 z-10">
        <h2 className="md:text-[55px] text-4xl font-thin">Big Summer<span className="font-medium"> Sale</span></h2>
        <p className="sm:text-muted-text text-white text-sm">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <Link href={"/products"} className="mt-6 block border border-white px-6 py-3 rounded-sm hover:bg-black hover:text-white transition cursor-pointer md:w-47.5">
          Shop Now</Link>
      </div>
      <div className="flex items-end">
        <Image src="/img/banner big summer sale 1 .webp" alt="Big Summer Sale 2" width={370} height={370} className=" absolute right-0 sm:w-60 w-37.5" loading="lazy" />
      </div>
    </div>
  );
}