import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL_WEB as string),
  title: {
    default: "Joel Angel Dev - Desarrollador Web",
    template: "%s - Joel Angel Dev"
  },
  description: "Desarrollador web frontend con experiencia en el uso de lenguajes HTML, CSS, Javascript, Typesript, frameworks como React, Next JS, Angular; lenguajes de programación y tecnologías como Node Js, PHP, Mysql, Tailwind, Bootstrap, Git y otras herramientas de desarrollo web",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WC4DLL4M"/>
      <body className={urbanist.className}>
        <Navbar/>
        <Header/>
        {children}
      </body>
      <GoogleAnalytics gaId="G-R8NZXPVBNW"/>
    </html>
  );
}
