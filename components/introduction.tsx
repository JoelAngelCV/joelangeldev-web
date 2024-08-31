"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60'>
      <div className='z-20 grid items-center h-full p-6 py-20 md:py-10 md:grid-cols-2 '>
        <Image className="pt-6 w-64 md:w-96 mx-auto" src="/home-4.png" priority width="800" height="800" alt="Profile pic"/>

        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-4xl md:mb-10">
            Si se puede crear en la mente,
            <TypeAnimation
              sequence={[
                "se puede programar.",
                1000,
                "se puede optimizar.",
                1000,
                "se puede implementar.",
                1000,
                "se puede desarrollar.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto text-center mb-2 text-md md:text-lg md:mx-0 md:mb-8">
            Como desarrollador web me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 md:gap-10">
            <Link
            href="/portafolio"
            className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'
            >
              Ver proyectos
            </Link>
            <Link
            href="/contacto"
            className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary'
            >
              Contacta conmigo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
