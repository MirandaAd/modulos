import React from 'react';
function Message({ estado, numero }) {
  let mensaje;

  if (estado === 'correcto') {
    mensaje = '¡Correcto! 🎉 Adivinaste el número.';
  } else if (estado === 'mayor') {
    mensaje = `El número es <strong>mayor</strong> que ${numero}.`;
  } else if (estado === 'menor') {
    mensaje = `El número es <strong>menor</strong> que ${numero}.`;
  } else if (estado === 'error') {
    mensaje = 'Por favor, ingresa un número entre 1 y 100.';
  } else {
    mensaje = 'Adivina un número del 1 al 100.';
  }

  return <p className="message" dangerouslySetInnerHTML={{ __html: mensaje }} />;
}

export default Message;