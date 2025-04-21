// Importar modulo
const fs = require('fs');

//Mensaje de ejemplo
const mensaje = `¡Hola desde node.js! Esta es una línea escrita desde JS`;

// Escribir el archivo
fs.writeFile('..notas/saludo.txt', mensaje, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err)
    } else {
        console.log('Archivo creado exitosamente como saludo.txt')
    }
});