import React, { useState, useEffect, useMemo } from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid'; 
import Planeta from './Planeta';
import Bitacora from './Bitacora';

function App() {
  const [planetasVisitados, setPlanetasVisitados] = useState([]);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState('En vuelo'); // ... (estado)
  
  useEffect(() => {
    console.log("¡El panel está listo!"); // Montaje

    const intervalo = setInterval(() => { // Montaje
      setCombustible(prev => {
        const nuevo = prev - 10;
        if (nuevo <= 0) {
          clearInterval(intervalo);
          setEstadoNave('Combustible agotado');
          return 0;
        }
        return nuevo;
      });
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-1">
        Panel de Control de la Nave
      </h1>

      <div className="space-y-4">
        <p className="text-xl">{mensajeEstado}</p>

        <p className="text-xl">
          Combustible:{' '}
          <span
            className={
              combustible > 30
                ? 'text-green-400'
                : combustible > 0
                ? 'text-yellow-400'
                : 'text-red-500'
            }
          >
            {combustible}%
          </span>
        </p>

        {/* Bitácora para añadir planetas */}
        <Bitacora
          planetasVisitados={planetasVisitados}
          setPlanetasVisitados={setPlanetasVisitados}
        />

        {/* Lista de planetas visitados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {planetasVisitados.map((planeta, index) => (
            <Planeta key={index} nombre={planeta} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;