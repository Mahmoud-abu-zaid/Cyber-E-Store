import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

const servicesLinks = [
  { name: "Bonus program", href: "/" },
  { name: "Gift cards", href: "/" },
  { name: "Credit and payment", href: "/" },
  { name: "Service contracts", href: "/" },
  { name: "Non-cash account", href: "/" },
  { name: "Payment", href: "/" },
];
const assistantLinks = [
  { name: "Find an order", href: "/" },
  { name: "Terms of delivery", href: "/" },
  { name: "Exchange and return of goods", href: "/" },
  { name: "Guarantee", href: "/" },
  { name: "Frequently asked questions", href: "/" },
  { name: "Terms of use of the site", href: "/" },
];
const mediaLinks = [
  { icon: <FaTwitter />, href: "/" },
  { icon: <FaFacebookF />, href: "/" },
  { icon: <FaTiktok />, href: "/" },
  { icon: <FaInstagram />, href: "/" },
];
export default function Footer() {
  return (
    <footer className="bg-black text-white py-26 px-6 md:px-8">
      <div className="container mx-auto  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col justify-between ">
          <div className="flex flex-col">
            <Link href="/" className="inline-block w-20 h-7">
              <Image src="/img/Website logo white.png" alt="Website logo" className="object-contain" width={80} height={50} priority />
            </Link>
            <p className="pt-6 text-muted-text">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
          </div>
          <div className="flex gap-9 pt-6">
            {mediaLinks.map((links, index) => (
              <div key={index} className="text-lg">
                <Link href={links.href} className="text-white">
                  {links.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-md font-semibold">Services</h4>
          <ul>
            {servicesLinks.map((links) => (
              <li key={links.name} className="py-2">
                <Link href={links.href} className="text-muted-text hover:text-white">
                  {links.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold">Assistance to the buyer</h4>
          <ul>
            {assistantLinks.map((links) => (
              <li key={links.name} className="py-2">
                <Link href={links.href} className="text-muted-text hover:text-white">
                  {links.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
