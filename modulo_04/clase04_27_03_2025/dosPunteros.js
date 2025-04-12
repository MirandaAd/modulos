const invitados = ["Andrés", "Brenda","Carlota", "David", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        //Compara las iniciales de los nombres
        if (arr[inicio][0] === arr[siguiente][0]) {
        //Devuelve la pareja de nombres
            return arr[inicio] + " y " + arr[siguiente];
        //Si no son iguales, se mueven los punteros
        } else {
            inicio++;
            siguiente++;
        }
    }
    //Si no se encuentra pareja de nombres, devuelve null
    return null;
}

console.log(encontrarPareja(invitados));