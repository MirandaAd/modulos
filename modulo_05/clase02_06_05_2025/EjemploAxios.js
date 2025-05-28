const axios = require('axios');

const BASE_URL = "https://fakestoreapi.com"

function obtenerProducto(id, callback) {
    axios.get(`${BASE_URL}/products/${id}`)
        .then(respuesta => callback(null, respuesta.data))
        .catch(error => callback(error, null));
}

function guardarProductoNuevo(objeto, callback) {

    const body = JSON.stringify(objeto)

    axios.post(`${BASE_URL}/products`, body)
        .then(respuesta => callback(null, respuesta.data))
        .catch(error => callback(error, null));
    
}
function callback (error, producto) {
    if (error) {
        console.error('Error: ', error.message)
    } else {
        console.log(`Producto: ${producto.title} - Precio: $ ${producto.price}`);
    }
}

/* Lamada a la API 
obtenerProducto(2, callback);
obtenerProducto(8, callback);
obtenerProducto(20, callback);
obtenerProducto(50, callback);
obtenerProducto(100, callback);
obtenerProducto(10000, callback);
*/

/* Crear nuevo producto */
const nuevoProducto = {
    id: 105,
    title: "Poco Phone",
    price: 100.50,
    description: "Telefono Poco",
    category: "Celuares",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}

guardarProductoNuevo(nuevoProducto, callback);

function obtenerProductosPorCategoria(categoria, callback) {
    axios.get(`${BASE_URL}/products`)
        .then(respuesta => callback(categoria, null, respuesta.data))
        .catch(error => callback(categoria, error, null))
}

function filtrarProductosPorCategoria(categoria, error, products) {
    if (error) {
        console.error('Error: ', error.message)
    } else {
        const productosCat = products.filter(product => product.category === categoria)
        console.warn(productosCat)
    }
}

obtenerProductosPorCategoria('jewelery', filtrarProductosPorCategoria);