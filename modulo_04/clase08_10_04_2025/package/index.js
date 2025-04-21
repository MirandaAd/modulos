const fs = require('fs');
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
    let notas = [];
    if (fs.existsSync(filePath)) {
        notas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } else {
        fs.writeFileSync(filePath, '[]');
        notas = [];
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);
    fs.writeFileSync(filePath, JSON.stringify(notas));
    console.log('Nota agregada con éxito.');
}
/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
        const notas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        console.log('Notas guardadas:');
        notas.forEach((nota, index) => {
            console.log(`${index + 1}. ${nota.titulo}`);
        });
    } else {
        console.log('No hay notas guardadas.');
    }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
    if (fs.existsSync(filePath)) {
        let notas = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        notas = notas.filter(nota => nota.titulo !== titulo);
        fs.writeFileSync(filePath, JSON.stringify(notas));
        console.log(`Nota con título "${titulo}" eliminada.`);
    } else {
        console.log('No hay notas para eliminar.');
    }
}

agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');