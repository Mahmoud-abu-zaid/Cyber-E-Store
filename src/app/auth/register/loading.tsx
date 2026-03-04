import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative h-20 w-20 animate-pulse">
          <Image src="/img/Website logo.webp" alt="Website Logo" fill className="object-contain" priority />
        </div>
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-black" />
        <p className="text-sm text-muted-text tracking-wide">Preparing your experience...</p>
      </div>
    </div>
  );
}
