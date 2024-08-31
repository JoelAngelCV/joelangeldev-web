import CircleImage from "@/components/circle-image"
import TransitionPage from "@/components/transition-page"
import Link from "next/link"

const SuccessPage = () => {
  return (
    <>
      <TransitionPage />
        <div className="flex flex-col items-center justify-center h-lvh">
          <CircleImage />
          <h1 className="my-20 text-3xl" >Mensaje enviado con éxito</h1>
          <Link className="my-10 p-3 rounded-xl text-lg bg-secondary hover:bg-opacity-90" href={"/contacto"}>volver a la página de contacto</Link>
        </div>
    </>
  )
}

export default SuccessPage


  
  
  