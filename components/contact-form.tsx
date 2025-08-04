"use client"

import handleForm from "@/app/action";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [numeroUsuario, setNumeroUsuario] = useState("");
  const [habilitarBoton, setHabilitarBoton] = useState(false);
  
  useEffect(() => {
    const generado = Math.floor(Math.random() * 9000) + 1000; // Ej: 4 dígitos
    setNumeroAleatorio(generado);
  }, []);

  useEffect(() => {
    // Validación simple para habilitar el botón
    const todoLleno =
      numeroUsuario.trim() === numeroAleatorio.toString();

    setHabilitarBoton(todoLleno);
  }, [numeroUsuario, numeroAleatorio]);

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
        
        <div className="flex items-center justify-center -my-0.5">  
          <p className="text-center">Por favor ingresa este código:<strong>&nbsp;{numeroAleatorio}</strong></p>
          <input
            className="w-12 mx-2 rounded-xl text-center font-bold"
            type="text"
            minLength={4}
            maxLength={4}
            value={numeroUsuario}
            onChange={(e) => setNumeroUsuario(e.target.value)}
          />  
        </div>
        <p className="h-1 text-center mb-3">
         {numeroUsuario.length == 4 && numeroUsuario !== numeroAleatorio.toString() && (
          <span className="text-sm text-red-500">El número no coincide</span>
          )} 
        </p>
        <button 
        className="w-1/2 mx-auto mt-2 md:text-lg p-2 rounded-md transition-all duration-300 ease-in-out"
        disabled={!habilitarBoton}
        style={{
          backgroundColor: habilitarBoton ? "green" : "gray",
          color: "white",
          cursor: habilitarBoton ? "pointer" : "not-allowed",
        }}
        >
        Enviar
        </button>
      </form>
    </div>
  )
}

export default ContactForm
