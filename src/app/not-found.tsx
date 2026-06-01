import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">

        <div className="flex justify-center mb-6">
          <div className="">
            <Image
              src="/img/Website icon.webp"
              alt="bestseller"
              width={80}
              height={80}
              className="py-3"
              loading="lazy"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-black mb-3">404</h1>
        <p className="text-xl font-semibold text-black mb-2">
          Page Not Found
        </p>
        <p className="text-gray-500 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium "
        >
          Go Home
          <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  );
}