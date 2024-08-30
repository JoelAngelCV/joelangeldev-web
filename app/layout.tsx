import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joel Angel Dev - Desarrollador web Frontend",
  description: "Desarrollador web frontend con experiencia en el uso de lenguajes HTML, CSS, Javascript, Typesript, frameworks como React, Next JS, Angular; lenguajes de programación y tecnologías como Node Js, PHP, Mysql, Tailwind, Bootstrap, Git y otras herramientas de desarrollo web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
