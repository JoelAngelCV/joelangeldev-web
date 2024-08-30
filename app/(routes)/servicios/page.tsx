import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 px-7 my-16 md:my-0 md:px-20">
        <div className="max-w-[450px] mt-16 md:mt-0 text-center md:text-left">
          <h1 className="text-3xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis{" "}
            <span className="font-bold text-secondary">
              servicios.
            </span>
          </h1>
          <p className="my-3 mb-8 md:mb-4 text-lg text-gray-300">Ofrezco mis servicios de desarrollo web frontend especializados 
          en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, 
          como HTML, CSS y JavaScript, React, Next JS, diseño interfaces de usuario intuitivas y responsivas que reflejan la 
          identidad de marca y mejoran su presencia en línea.</p>
          <Link href="/contact" className="px-3 py-2 text-lg rounded-lg bg-secondary/90 hover:bg-secondary font-bold">
            Contacta conmigo
          </Link>   
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  )
}

export default ServicesPage;
