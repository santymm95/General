// WhatsappButton.js

import React, { useEffect } from 'react';
import '../stylesCss/WhatsappButton.css';
import iconWhatsapp from '../assets/img/whatsapp.png';

const WhatsappButton = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    // Agrega o quita la clase "heartbeat" cada 3 segundos
    const intervalId = setInterval(() => {
      const button = document.querySelector('.btn-wsp');
      button.classList.toggle('heartbeat');
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <a href={whatsappLink} className="btn-wsp" target="_blank">
      <img className="what" src={iconWhatsapp} alt="WhatsApp" />
    </a>
  );
};

export default WhatsappButton;
