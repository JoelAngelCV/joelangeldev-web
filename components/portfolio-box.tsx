import Image from "next/image"
import Link from "next/link"

interface PortfolioProps {
    data: {
        id:number,
        title: string,
        image: string,
        urlGithub: string,
        urlDemo: string,
        description: string
    }
}

const PortfolioBox = (props: PortfolioProps) => {
    const { data } = props
    const { title, image, urlGithub, urlDemo, description} = data
    const palabrasClave = ["Ecommerce", "Full", "Stack", "NextJS", "Typescript", "Strapi", "ShadcnUI", "TaliwindCSS", "PostgreSQL", "Cloudinary", "Stripe", "Vercel", "Render", "Neondb", "HTML", "CSS", "Javascript", "Bootstrap", "MySQL", "PHP", "Github"];
    const renderDescription = description.split(" ").map((palabra, index) => 
  palabrasClave.includes(palabra) ? <strong key={index}>{palabra} </strong> : palabra + " "
);

  return (
    <div className="p-4 mb-16 mt-8 rounded-xl flex md:flex-row flex-col-reverse">
      <div className="md:w-1/2">
        <Image src={image} alt="Image product" width={200} height={200} className="w-full mx-auto md:w-[400px] rounded-2xl h-auto mt-6 sm:mt-0 hover:scale-110"/>
        <div className="flex gap-5 mt-5 justify-center">
          <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
              Github
          </Link>
          <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80">
              Demo
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <h3 className="mb-4 text-2xl sm:text-3xl">
          {title}
        </h3>
        <p className="sm:text-lg">{renderDescription}</p>
      </div>  
    </div>
  )
}

export default PortfolioBox
