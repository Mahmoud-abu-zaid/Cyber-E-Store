"use client";
import { m } from "framer-motion";

export default function HeroSectionVideo() {
  return (
    <m.section
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <video className="mt-15 w-full h-[90vh] object-cover hidden lg:block" autoPlay loop muted playsInline poster="/img/hero-poster-desktop.webp">
        <source src="/video/background hero section.webm" type="video/webm" />
      </video>
      <video className="mt-15 w-full h-[90vh] object-cover hidden md:block lg:hidden" autoPlay loop muted playsInline poster="/img/hero-poster-tablet.webp">
        <source src="/video/background hero section tablet.webm" type="video/webm" />
      </video>
      <video className="mt-15 w-full h-[90vh] object-cover block md:hidden" autoPlay loop muted playsInline poster="/img/hero-poster-mobile.webp">
        <source src="/video/background hero section mobile.webm" type="video/webm" />
      </video>

      <m.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)",
          width: "200%",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 0.8,
          delay: 21,
          repeat: Infinity,
          repeatDelay: 21,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      <m.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <m.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 border-b-2 border-r-2 border-white rotate-45" />
        </m.div>
      </m.div>
    </m.section>
  );
}