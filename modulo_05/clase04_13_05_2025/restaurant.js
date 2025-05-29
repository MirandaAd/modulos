// Simulacion de reservacion de mesas

let mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve("Mesas disponibles");
      } else {
        reject("No hay suficientes mesas disponibles");
      }
    }, 2000);  // Simula un retraso (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.2;  // Simula un resultado aleatorio
      if (exito) {
        resolve(`Correo enviado con exito a ${nombreCliente}.`);
      } else {
        reject("Error al enviar el correo");
      }
    }, 1500);  // Simula el envío de un correo 
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas); // Llama a la función de verificación
    if (disponibilidad) {
      mesasDisponibles -= mesasSolicitadas; // Actualiza el número de mesas disponibles

    console.log(`Quedan ${mesasDisponibles} mesas disponibles.`);

    // Si hay mesas disponibles, llama a la función para enviar la confirmación.
    console.log("Enviando correo de confirmación...");
    const correoConfirmacion = await enviarConfirmacionReserva(nombreCliente);  // Llama a la función de envío de correo
    console.log(correoConfirmacion);
    }
    // Si no hay mesas disponibles o si ocurre un error, captura el error.
  } catch (error) {
    console.log("Error:", error);  // Maneja los errores en la promesa
  }
}

// Llamada de prueba
hacerReserva("Luis Garcia", 5);  // Intenta hacer una reserva 