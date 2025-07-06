import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

function Game() {
  /* Número objetivo entre 1 y 100 (solo se evalúa una vez) */
  const [target, setTarget] = useState(() => Math.floor(Math.random() * 100) + 1);

  /* Estados del juego */
  const [guess, setGuess] = useState('');
  const [estadoJuego, setEstadoJuego] = useState('inicio'); // inicio | correcto | mayor | menor | error
  const [finished, setFinished] = useState(false);

  /* -----  cuando el usuario hace clic en "Probar" o pulsa Enter  ----- */
  const handleGuess = () => {
    const num = parseInt(guess, 10);

    /* Validación */
    if (isNaN(num) || num < 1 || num > 100) {
      setEstadoJuego('error');
      return;
    }

    /* Comparación */
    if (num === target) {
      setEstadoJuego('correcto');
      setFinished(true);
    } else if (num < target) {
      setEstadoJuego('mayor'); // El objetivo es MAYOR que el ingresado
    } else {
      setEstadoJuego('menor'); // El objetivo es MENOR que el ingresado
    }
  };

  /* -----  reiniciar juego  ----- */
  const handleRestart = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setEstadoJuego('inicio');
    setFinished(false);
  };

  return (
    <section className="game">
      <h1>Juego de Adivinar el Número</h1>

      <InputNumber
        value={guess}
        setValue={setGuess}
        onSubmit={handleGuess}
        disabled={finished}
      />

      <Message estado={estadoJuego} numero={guess} />

      {finished && <RestartButton onClick={handleRestart} />}
    </section>
  );
}

export default Game;