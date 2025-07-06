import React from 'react';

function RestartButton({ onClick }) {
  return (
    <button onClick={onClick} className="restart-button">
      Reiniciar Juego
    </button>
  );
}

export default RestartButton;