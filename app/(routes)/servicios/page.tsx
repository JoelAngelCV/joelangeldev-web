import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";
import type { Metadata } from "next";
import ProjectSlider from "@/components/ImageSlider";

export const metadata: Metadata = {
  title:"Servicios"
}

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="w-full max-w-6xl px-4 pb-40 mx-auto md:mt-40 md:pb-0 md:px-6">
        <div className="flex justify-center items-center gap-10 flex-col md:flex-row mt-44">
          <div className="max-w-[400px] md:mt-0 text-center md:text-left">
            <h1 className="text-3xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              Mis{" "}
              <span className="font-bold text-secondary">
                servicios.
              </span>
            </h1>
            <p className="my-3 mb-12 text-lg text-gray-300">Ofrezco servicios especializados 
            como freelance.</p>
            <Link href="/contacto" className="px-3 py-2 text-lg rounded-lg bg-secondary/90 hover:bg-secondary font-bold">
              Contáctame
            </Link>   
          </div>

          {/* SLIDER */}
          <div>
            <SliderServices />
          </div>
        </div>
        <ProjectSlider />
      </div>
      
    </>
  )
}

export default ServicesPage;
