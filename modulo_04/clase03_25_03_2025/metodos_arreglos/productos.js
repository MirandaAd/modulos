// Arreglo con objetos de la Tienda Online
const productos = [
    { nombre: "Pantalón", precio: 150, categoria: "Ropa" },
    { nombre: "Lentes", precio: 95, categoria: "Accesorios" },
    { nombre: "Sleeping Bag", precio: 380, categoria: "Ropa" },
    { nombre: "Mochila", precio: 160, categoria: "Accesorios" },
    { nombre: "Botas", precio: 220, categoria: "Calzado" },
    { nombre: "Camisa", precio: 80, categoria: "Ropa" },
    { nombre: "Gorra", precio: 70, categoria: "Accesorios" },
    { nombre: "Casco", precio: 200, categoria: "Accesorios" },
    { nombre: "Chamarra", precio: 230, categoria: "Ropa" },
    { nombre: "Tenis",precio: 190, categoria: "Calzado" },
];

// Filtra los productos con precio menor a $100
const menosDe100 = productos.filter((producto) => producto.precio < 100);
console.log(menosDe100);

// Ordena alfabeticamente los productos según su nombre
const ordenAlfabetico = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(ordenAlfabetico);

// Genera un arreglo con los nombres de los productos
const nombreProductos = productos.map((producto) => producto.nombre);
console.log(nombreProductos);

// Calcula el precio total de todos los productos
const sumaTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(`Total: $${sumaTotal}`);





