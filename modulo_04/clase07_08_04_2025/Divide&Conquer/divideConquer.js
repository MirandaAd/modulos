function findMax(arr){
    // Caso base
    if(arr.length === 1){
        return arr[0]; //Devuelve el primer elemento
    }
    const mid = Math.floor(arr.length / 2); // Divide el arreglo a la mitad
    const left = arr.slice(0, mid); //Mitad de la izquierda
    const right = arr.slice(mid); //Mitad de la derecha
    const maxLeft = findMax(left); // Recursividad para la mitad izquierda
    const maxRight = findMax(right); // Recursividad para la mitad derecha
    return Math.max(maxLeft, maxRight); //Devuelve el máximo de las dos partes
}

const numeros = [3, 8, 2, 10, 5, 7];
console.log(findMax(numeros));