import React from 'react';
import { MessageCircle } from 'lucide-react'; // Icono similar al de chat/whatsapp

const WhatsAppButton = () => {
  const phoneNumber = "51925610070"; // Sustituye por tu número con código de país (sin el +)
  const message = "Hola, vi tu portafolio y me gustaría contactarte.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex justify-center mb-24">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
      >
        <MessageCircle size={24} />
        <span>Chatea conmigo en WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
