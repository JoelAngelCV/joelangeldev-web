import Avatar from "@/components/avatar";
import Certificates from "@/components/certificates";
import ContainerPage from "@/components/container";
import Presentation from "@/components/presentation";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import SkillsList from "@/components/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Sobre Mí"
}

const PageAboutMe = () => {
  return (
   <>
    <TransitionPage />
    
    <ContainerPage>
      <Avatar />
      <h1 className="text-3xl leading-tight text-center md:text-4xl">
        Sobre{' '}
        <span className="font-bold text-secondary">mí</span>
      </h1>
      <Presentation />
      <h2 className="text-3xl mt-20 leading-tight text-center md:text-4xl md:mt-28">
        Mis{' '}
        <span className="font-bold text-secondary">habilidades</span>
      </h2>
      <SkillsList/>
      <h2 className="text-3xl mt-20 leading-tight text-center md:text-4xl md:mt-28">
        Mis{' '}
        <span className="font-bold text-secondary">estudios</span>
      </h2>
      <TimeLine />
      <h3 className="text-3xl mt-14 leading-tight text-center md:text-4xl md:mt-10">
        Mis{' '}
        <span className="font-bold text-secondary">certificados</span>
      </h3>
      <Certificates />
    </ContainerPage>
   </>
  )
}

export default PageAboutMe;
