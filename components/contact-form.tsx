"use client"
import handleForm from "@/app/action"

const ContactForm = () => {

  return (
    <div className="flex items-center justify-center">
      <form action={handleForm} method="POST" className="w-[80vw] md:w-[420px] flex flex-col gap-6">
        <input 
          type="text" 
          name="user_name" 
          placeholder="Nombre" 
          className="h-12 md:h-14 w-full px-4 text-lg md:text-xl rounded-2xl bg-transparent
                   border-gray-300 border-2 block text-black placeholder:text-gray-300
                   focus:bg-gray-200 focus:ring-2 focus:ring-purple-700 focus:shadow-lg
                   focus:shadow-purple-950 transition-all focus:placeholder:text-indigo-950"
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue) {
              e.target.classList.remove('bg-transparent');
              e.target.classList.add('bg-gray-300');
            } else {
              e.target.classList.remove('bg-gray-300');
              e.target.classList.add('bg-transparent');
            }
          }}
          required
        />

        <input 
          type="email" 
          name="user_email" 
          placeholder="Correo" 
          className="h-12 md:h-14 w-full px-4 text-lg md:text-xl rounded-2xl bg-transparent
                   border-gray-300 border-2 block text-black placeholder:text-gray-300
                   focus:bg-gray-200 focus:ring-2 focus:ring-purple-700 focus:shadow-lg
                   focus:shadow-purple-950 transition-all focus:placeholder:text-indigo-950"
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue) {
              e.target.classList.remove('bg-transparent');
              e.target.classList.add('bg-gray-300');
            } else {
              e.target.classList.remove('bg-gray-300');
              e.target.classList.add('bg-transparent');
            }
          }}
          required
        />

        <input 
          type="text" 
          name="subject" 
          placeholder="Asunto" 
          className="h-12 md:h-14 w-full px-4 text-lg md:text-xl rounded-2xl bg-transparent
                   border-gray-300 border-2 block text-black placeholder:text-gray-300
                   focus:bg-gray-200 focus:ring-2 focus:ring-purple-700 focus:shadow-lg
                   focus:shadow-purple-950 transition-all focus:placeholder:text-indigo-950"
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue) {
              e.target.classList.remove('bg-transparent');
              e.target.classList.add('bg-gray-300');
            } else {
              e.target.classList.remove('bg-gray-300');
              e.target.classList.add('bg-transparent');
            }
          }}
          required
        />

        <textarea 
        name="content" 
        placeholder="Mensaje" 
        className="h-36 md:h-44 w-full px-4 pt-2 text-lg md:text-xl rounded-2xl bg-transparent
                 border-gray-300 border-2 block text-black placeholder:text-gray-300
                 focus:bg-gray-200 focus:ring-2 focus:ring-purple-700 focus:shadow-lg
                 focus:shadow-purple-950 transition-all focus:placeholder:text-indigo-950"
          onChange={(e) => {
            const inputValue = e.target.value;
            if (inputValue) {
              e.target.classList.remove('bg-transparent');
              e.target.classList.add('bg-gray-300');
            } else {
              e.target.classList.remove('bg-gray-300');
              e.target.classList.add('bg-transparent');
            }
          }}
          required>
        </textarea>

        <button className="w-1/2 mx-auto mt-2 bg-secondary text-white md:text-lg p-2 rounded-md hover:bg-green-500 hover:font-bold">
        Enviar
        </button>
      </form>
    </div>
  )
}

export default ContactForm
