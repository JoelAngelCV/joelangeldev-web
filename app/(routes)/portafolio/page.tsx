import AvatarPortfolio from "@/components/avatar-portfolio"
import CircleImage from "@/components/circle-image"
import ContainerPage from "@/components/container"
import TransitionPage from "@/components/transition-page"
import { dataPortfolio } from "@/data"
import type { Metadata } from "next"
import ProjectCard from "@/components/projec-card"

export const metadata: Metadata = {
  title:"Portafolio"
}

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />
      <div className="h-full flex flex-col justify-center p-6">
        <h1 className="text-3xl leading-tight text-center md:text-4xl mb-8">Mis últimos <span className="text-secondary font-bold">trabajos realizados</span></h1>
        <div className="pt-4 sm:pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataPortfolio.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </ContainerPage>
  )
}

export default PortfolioPage
