"use client"

import handleForm from "@/app/action";
import { useState } from "react";


const ContactForm = () => {

  const [submit, setSubmit] = useState('')
  
  return (    
    <div className="flex items-center justify-center flex-col mt-10 mb-10">
      <form className="w-[80vw] md:w-[420px] flex flex-col gap-6"action={handleForm} >
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
     
        <button 
        className="w-1/2 mx-auto mt-2 md:text-lg p-2 rounded-md transition-all duration-300 ease-in-out bg-green-500 opacity-50"
        disabled={true}
        >
        Enviar
        </button>
      </form>
      {submit && <p className="text-lg text-center">{submit}</p>}
    </div>        
  )
}

export default ContactForm
