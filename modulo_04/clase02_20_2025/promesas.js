// Estados de una promesa: Pending, Fulfilled, Rejected

const obtenerDestino = (destino) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (destino) {
                resolve(`Destino confirmado: ${destino}`);
            } else {
                reject("Error: No se especifico un destino");
            }
        }, 3000)
    })
}

function notificarUsuario(destino) {
    console.log(destino);
}
function manejarError(error) {
    console.log(error);     
}


//Llamar a la promesa
obtenerDestino("Paris")
.then(notificarUsuario)
.catch(manejarError)
.finally(() => {
    console.log("Proceso finalizado / siempre se ejecuta");
});


