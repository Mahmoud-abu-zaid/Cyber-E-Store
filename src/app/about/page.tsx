import Image from "next/image";

export default function About() {
  return <div className="pt-16 px-2 2xl:container 2xl:mx-auto h-[70vh] flex justify-center items-center">
    <div className="flex flex-col justify-center items-center gap-1">
      <Image src="/img/Website icon.webp" alt="bestseller" width={100} height={100} className="py-3" loading="lazy" />
      <p className="text-2xl font-semibold">we{"'"}re coming soon..</p>
      <p className="font-semibold text-lg"><em>we{"'"}re working on our new website. </em> </p>
    </div>;
  </div>
}
