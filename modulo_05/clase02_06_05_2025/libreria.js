// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
}

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);// Simulamos leer el JSON con un retraso de 1 segundo
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // simulación de escribir el libro en el "archivo" (es decir, agregarlo al objeto)
    // agregar el nuevo libro a `biblioteca.libros`
    setTimeout(() => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`El libro ${titulo} ha sido agregado a la biblioteca.`);
        mostrarLibros();  
    }, 1500);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simulacion de retraso al cambiar la disponibilidad
    setTimeout(() => {
        // Pista: busca el libro por título y cambia la propiedad 'disponible' a nuevoEstado
        const libro = biblioteca.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            console.log(`El estado del libro ${libro.titulo} ha cambiado a ${nuevoEstado ? 'disponible' : 'prestado'}.`);
        } else {
            console.log(`El libro ${titulo} no se encuentra en la biblioteca.`);
        }
        mostrarLibros();
    }, 1500);
}

// Ejemplo de ejecución de la aplicación
mostrarLibros();

setTimeout(() => {
    agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
}, 3000); 
    
setTimeout(() => {
    actualizarDisponibilidad("1984", false);
}, 3000);