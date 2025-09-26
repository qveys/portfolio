"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
// Import custom CSS without source map references
import "./css/toastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Header from "./components/header";
import "./css/card.scss";
import "./css/tailwind.css";
import "./css/globals.scss";
import HeadComponent from "@/app/components/head-component";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  return (
    <html lang="en">
      <HeadComponent />
      <body className={inter.className}>
        <ToastContainer />
        <Header/>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
