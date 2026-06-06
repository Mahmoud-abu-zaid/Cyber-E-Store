import "../styles/globals.css";
import type { Metadata } from "next";
import Providers from "@/providers/providers";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { AuthProvider } from "@/providers/auth-provider";
import { domAnimation, LazyMotion } from "framer-motion";
import OfflineWrapper from "@/providers/offline-wrapper";
import AnimateOnScroll from "@/components/animate-on-scroll";


export const metadata: Metadata = {
  title: {
    default: "Cyber E-Store",
    template: "%s | Cyber E-Store",
  },
  description: "Your one-stop shop for the latest electronics and gadgets.",
  keywords: ["electronics", "smartphones", "laptops", "gadgets", "Cyber E-Store"],
  authors: [{ name: "Cyber E-Store" }],
  creator: "Cyber E-Store",
  publisher: "Cyber E-Store",
  openGraph: {
    title: "Cyber E-Store",
    description: "Your one-stop shop for the latest electronics and gadgets.",
    type: "website",
    locale: "en_US",
    siteName: "Cyber E-Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber E-Store",
    description: "Your one-stop shop for the latest electronics and gadgets.",
  },
  icons: {
    icon: "/img/Website icon 2.webp",
    apple: "/img/Website icon 2.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/img/hero-poster-desktop.webp" media="(min-width: 1024px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/img/hero-poster-tablet.webp" media="(min-width: 768px) and (max-width: 1023px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/img/hero-poster-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />
      </head>
      <body>
        <LazyMotion features={domAnimation}>
          <Providers>
            <OfflineWrapper>
              <AuthProvider>
                <Header />
                {children}
                <AnimateOnScroll><Footer /></AnimateOnScroll>
              </AuthProvider>
            </OfflineWrapper>
          </Providers>
        </LazyMotion>
      </body>
    </html>
  );
}
