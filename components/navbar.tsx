"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { itemsNavbar } from "@/data"
import MotionTransition from "./transition-component"

const Navbar = () => {
const router = usePathname()

  return (
    <MotionTransition 
      position="right" 
      className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-5 md:bottom-10">
      <>
        <nav className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <Link key={item.id} href={item.link}
              className={`group relative px-3 py-2 transition duration-150 rounded-full cursor-pointer 
                hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
              >
              <span
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black
                 text-white text-xs opacity-0 pointer-events-none group-hover:opacity-100
                   group-hover:pointer-events-auto transition whitespace-nowrap md:block hidden"
                >
                {item.title}
              </span>
              <span>{item.icon}</span>
            </Link>
          ))}
        </nav>
      </>
    </MotionTransition>
  )
}

export default Navbar
