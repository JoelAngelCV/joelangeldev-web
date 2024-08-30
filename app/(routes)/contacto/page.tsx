
import CircleImage from "@/components/circle-image"
import TransitionPage from "@/components/transition-page"
import ContactForm from "@/components/contact-form"


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
              <h3 className="flex items-center justify-center m-4 pt-5 tracking-wide">
                o escribe un correo a: joelangelcv@gmail.com
              </h3>
          </div>
      </>
    )
  }
  
  export default Contact