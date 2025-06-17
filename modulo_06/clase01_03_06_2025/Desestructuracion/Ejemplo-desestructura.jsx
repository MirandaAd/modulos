// Ejemplo desestructuracion
const objeto = {
    at1: "x",
    at2: "y"
}

const {at1, at2} = objeto


const persona = {
    nombre: "Ricardo",
    apellido: "Becerra",
    edad: 25,
    profesion: "Desarrollador",
    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const {nombre, apellido, saludar} = persona

