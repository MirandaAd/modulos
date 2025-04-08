const productos = [];
function agregarProducto() {
    const input = document.getElementById("producto");
    const nombreProducto = input.value.trim(); 
    if (nombreProducto === "") {
        alert("Ingresa el nombre de algún producto.");
        return;
    }
    if (productos.includes(nombreProducto)) {
        alert("Este producto ya está en la lista.");
        return;
    }
    productos.push(nombreProducto);
    mostrarLista();
    input.value = "";
}

function eliminarProducto(nombreProducto) {
    const index = productos.indexOf(nombreProducto);
    if (index !== -1) { 
        productos.splice(index, 1); 
        mostrarLista();
    }
}

function vaciarLista() {
    productos.length = 0;
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("lista_productos"); 
    lista.innerHTML = ""; 
    productos.forEach((producto, index) => {
        const li = document.createElement("li"); 
        const productoAgregado = document.createTextNode(`${index+1}. ${producto} `);
        li.appendChild(productoAgregado);
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar producto"; 
        btnEliminar.classList.add("btn-delete"); 
        btnEliminar.onclick = () => eliminarProducto(producto); 
        li.appendChild(btnEliminar); 
        lista.appendChild(li); 
    });
}
