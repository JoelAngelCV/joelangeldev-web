import CircleImage from "@/components/circle-image"
import TransitionPage from "@/components/transition-page"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"
import WhatsAppButton from "@/components/whatsApp-button"

export const metadata: Metadata = {
  title:"Contacto"
}

const Contact = () => {

  return (
      <>    
        <TransitionPage />
        <div className="w-full max-w-6xl px-4 mx-auto mt-36 md:pb-0 md:px-6">
          <CircleImage />
          <h1 className="my-4 mt-8 md:my-12 md:mt-0 text-3xl leading-tight text-center md:text-4xl">
            La comunicación{' '}
            <span className="font-bold text-secondary md:inline block">es importante</span>
          </h1>
          <ContactForm />
          <WhatsAppButton />
        </div>
      </>
    )
  }
  
export default Contact