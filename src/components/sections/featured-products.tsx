"use client";

import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <div>
        <div className="bg-white flex flex-col lg:flex-row items-center gap-6  text-center lg:text-left py-1">
          <Image src="/img/PlayStation.webp" alt="AirPods Max" width={300} height={400} className="hidden lg:block w-48 lg:w-72" priority />
          <Image src="/img/PlayStation (2).webp" alt="AirPods Max" width={300} height={300} className="block lg:hidden w-48 lg:w-72" priority />
          <div>
            <h2 className="text-3xl lg:text-4xl font-medium mb-3">Playstation 5</h2>
            <p className="text-muted-foreground max-w-md">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="bg-gray-100 flex flex-col lg:flex-row items-center lg:text-left gap-4 py-3">
            <Image src="/img/hero__gnfk5g59t0qe_xlarge_2x 1 (2).webp" alt="AirPods Max" width={100} height={100} className="hidden lg:block w-25" />
            <Image src="/img/hero__gnfk5g59t0qe_xlarge_2x 1.webp" alt="AirPods Max" width={450} height={400} className="block lg:hidden w-25" />
            <div>
              <h2 className="text-2xl flex flex-row lg:flex-col gap-1.5 justify-center">
                <span> Apple </span>
                <span> AirPods </span>
                <span className="font-bold"> Max</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-2">Computational audio. Listen, it{"’"}s powerful</p>
            </div>
          </div>

          <div className="bg-main-bg text-white flex flex-col lg:flex-row items-center lg:text-left text-center gap-4 py-3">
            <Image src="/img/image 36.webp" alt="Apple Vision Pro" width={350} height={350} className="hidden lg:block w-55" />
            <Image src="/img/image 36 (2).webp" alt="Apple Vision Pro" width={450} height={450} className="block lg:hidden w-45" />
            <div>
              <h2 className="text-2xl">
                Apple <br className="hidden lg:flex" /> Vision
                <span className="font-bold"> Pro</span>
              </h2>
              <p className="text-sm text-gray-300 mt-2">An immersive way to experience entertainment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:pl-7 px-2 lg:px-0 py-4 text-center lg:text-left">
        <div className="max-w-md">
          <h2 className="text-4xl lg:text-6xl font-extralight leading-tight">
            Macbook <span className="font-bold">Air</span>
          </h2>
          <p className="text-gray-600 mt-4">The new 15-inch MacBook Air makes room for more of what you love.</p>
          <button className="mt-6 inline-block border border-black px-6 py-2 rounded-sm hover:bg-black hover:text-white transition cursor-pointer">Shop Now</button>
        </div>
        <Image src="/img/Screenshot_2026-03-11_214044-removebg-preview.webp" alt="Macbook Air" width={250} height={250} className="hidden lg:block w-60 lg:w-80" />
        <Image src="/img/Screenshot_2026-03-05_232342-removebg-preview.webp" alt="Macbook Air" width={250} height={250} className="block lg:hidden w-60 lg:w-80" />
      </div>
    </section>
  );
}
