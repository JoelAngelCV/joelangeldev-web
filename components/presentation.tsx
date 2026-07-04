import Link from "next/link"
import { Download } from "lucide-react"

const Presentation = () => {
  return (
    <div className="border-2 border-secondary rounded-2xl grid items-center h-full md:mx-40 p-1 
          py-8 my-8 md:my-16 md:grid-cols-2 md:p-7">
      <p className="px-2 text-gray-300">
        Estudié Ingeniería de Sistemas donde aprendí a programar en lenguajes C++ y Java;
        luego me especialicé en frameworks y tecnologías de la web como
        Javascript, React, NextJS entre otras, actualmente desarrollo aplicaciones web de forma independiente.
      </p>
      <Link
        href="/curriculumjacv.pdf"
        target="_blank"
        className='flex mx-auto px-3 py-2 mt-5 md:mt-0 border-2 transition-all cursor-pointer 
        text-gray-300 text-lg w-fit rounded-xl hover:shadow-md hover:shadow-green-500 
          hover:font-bold hover:text-green-500 hover:border-green-500'
      >
        Currículum
        <Download className="ml-2 hover:text-green-500" size={25} strokeWidth={1.5} />
      </Link>
      </div>
  )
}

export default Presentation
