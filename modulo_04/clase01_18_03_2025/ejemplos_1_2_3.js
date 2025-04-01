console.log(pais);
var pais = 'México';
console.log(pais);

function pruebaVar() {
    let ciudad = 'Madrid';
    if (true) {
        console.log(ciudad);
    }
    console.log(ciudad);
}

pruebaVar();

//Ejemplo 2

//Arrow function
/*function sumar(a, b) {
    return a + b;
} */

//const sumar = (a, b) => {clave: valor}; No funciona - no permitido
//const sumar = (a, b) => ({clave: valor});
/*const sumar = (a, b) => {
    return {clave: valor};
};*/
/*const sumar = (a, b) => {
    return a+b;
};*/

const sumar = (a, b) => a + b;
console.log(sumar(4,7));

const array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);

// Templete literals o template strings
const getName = (nombre) => 'Ricardo';
const getLastName = (apellido) => 'Garcia';

const nombre = getName;
const apellido = getLastName;

//console.log("¡hola! " + nombre + " " + apellido) + "es un placer conocerte";

console.log(`¡hola! ${nombre} ${apellido} es un placer conocerte`);
//console.log(`https://api/${recurso}/{endopoint}/${id}`);
