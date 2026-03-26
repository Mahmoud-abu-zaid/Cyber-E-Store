export default function HeroSectionVideo() {
  return (
    <section>
      <video className="mt-15 w-full h-[90vh] object-cover hidden lg:block" autoPlay loop muted playsInline>
        <source src="/video/background hero section.webm" type="video/webm" />
      </video>

      <video className="mt-15 w-full h-[90vh] object-cover hidden md:block lg:hidden" autoPlay loop muted playsInline>
        <source src="/video/background hero section tablet.webm" type="video/webm" />
      </video>

      <video className="mt-15 w-full h-[90vh] object-cover block md:hidden" autoPlay loop muted playsInline>
        <source src="/video/background hero section mobile.webm" type="video/webm" />
      </video>
    </section>
  );
}
