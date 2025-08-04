import CircleImage from "@/components/circle-image"
import TransitionPage from "@/components/transition-page"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title:"Contacto"
}

const Contact = () => {

  return (
      <>
        <TransitionPage />
          <div className="flex flex-col justify-center h-lvh">
            <CircleImage />
              <h1 className="my-4 mt-8 md:my-12 md:mt-0 text-2xl leading-tight text-center md:text-4xl">
                La comunicación{' '}
                <span className="font-bold text-secondary md:inline block">es importante</span>
              </h1>
              <ContactForm />
          </div>
      </>
    )
  }
  
  export default Contact