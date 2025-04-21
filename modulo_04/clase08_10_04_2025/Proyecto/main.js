// Importamos recetas desde un archivo externo simulado
import { getRecipes } from "./services/recipes.js";

// Verificamos que los datos recibidos sean un arreglo
const recetas = Array.isArray(getRecipes()) ? getRecipes() : [];

// Referencias a elementos del DOM
const input = document.getElementById("ingredient-input");
const recipesContainer = document.getElementById("recipes");
const sortSelect = document.getElementById("sort");
const suggestionBtn = document.getElementById("suggestion-btn");

// Variables globales para autocompletado y análisis
let currentSuggestionIndex = -1;
let currentSuggestions = [];
let historialIngredientes = [];


// =============================================
// FUNCIÓN: Mostrar recetas en pantalla
// =============================================
function renderRecetas(lista) {
    recipesContainer.innerHTML = ""; // Limpiamos el contenedor

    lista.forEach((receta) => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
        <img src="${receta.imagen}" alt="${receta.nombre}" />
        <h3>${receta.nombre}</h3>
        <p><strong>Tiempo:</strong> ${receta.tiempo} min</p>
        <p>${receta.pasos}</p>
      `;
        recipesContainer.appendChild(card);
    });
}


// =============================================
// FUNCIÓN: Filtrar recetas por ingrediente
// =============================================

// Primero: construir el array LPS (longest prefix suffix)
function construirLPS(patron) {
    const lps = Array(patron.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < patron.length) {
        if (patron[i] === patron[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

// Segundo: implementar la bBúsqueda KMP
function contieneKMP(texto, patron) {
    if (patron.length === 0) return true;
    const lps = construirLPS(patron);
    let i = 0;
    let j = 0;

    while (i < texto.length) {
        if (texto[i] === patron[j]) {
            i++;
            j++;
        }

        if (j === patron.length) {
            return true; 
        } else if (i < texto.length && texto[i] !== patron[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return false;
}

// Tercero: Función usando búsqueda KMP en lugar de .includes()
function filtrarPorIngrediente(ingrediente) {
    const lower = ingrediente.toLowerCase();

    return recetas.filter((receta) =>
        receta.ingredientes.some((ing) =>
            contieneKMP(ing.toLowerCase(), lower)
        )
    );
}


// =============================================
// FUNCIÓN: Actualizar historial y análisis
// =============================================
function actualizarHistorial(ingrediente) {
    historialIngredientes.push(ingrediente);

    // Sliding Window: mantenemos máximo 20 ingredientes
    if (historialIngredientes.length > 20) {
        historialIngredientes.shift();
    }

    // Mostrar en texto cuántos ingredientes únicos se han usado
    document.getElementById("analysis").textContent =
        `Usaste ${new Set(historialIngredientes).size} ingrediente${historialIngredientes.length > 1 ? 's' : ''} esta semana.`;

    actualizarSugerenciasRecientes();
}


// =============================================
// FUNCIÓN: Mostrar top ingredientes populares recientes (Sliding Window real)
// =============================================

// TODO: Sliding Window sobre últimas 5 búsquedas para encontrar ingredientes más frecuentes
function actualizarSugerenciasRecientes() { 
    const sugerenciasElemento = document.getElementById("recent-suggestions");

    // Tomar los últimos 5 ingredientes (ventana deslizante)
    const ventana = historialIngredientes.slice(-5);

    // Contar frecuencia de cada ingrediente
    const contador = {};
    for (const ingrediente of ventana) {
        const key = ingrediente.toLowerCase();
        contador[key] = (contador[key] || 0) + 1;
    }

    // Convertir a array y ordenar por frecuencia descendente
    const ingredientesOrdenados = Object.entries(contador)
        .sort((a, b) => b[1] - a[1]) // más frecuentes primero
        
    const titulo = document.createElement("p");
    titulo.textContent = "Has usado en tus recetas:";

    const lista = document.createElement("ul");

    ingredientesOrdenados.forEach(([ingrediente, cantidad]) => {
        const item = document.createElement("li");
        item.textContent = `${ingrediente} (${cantidad})`;
        lista.appendChild(item);
    });
    
    // Limpiar y agregar los nuevos elementos
    sugerenciasElemento.innerHTML = "";
    sugerenciasElemento.appendChild(titulo);
    sugerenciasElemento.appendChild(lista);
}



// =============================================
// FUNCIÓN: Mostrar sugerencias de autocompletado
// =============================================
function autocompletar(valor) {
    const autocompletarDiv = document.getElementById("autocomplete-list");
    autocompletarDiv.innerHTML = "";

    if (!valor) return;

    currentSuggestions = [...new Set(recetas.flatMap(r => r.ingredientes))]
        .filter((ing) => ing.toLowerCase().startsWith(valor.toLowerCase()))
        .slice(0, 5);

    currentSuggestionIndex = -1;

    currentSuggestions.forEach((sug) => {
        const item = document.createElement("div");
        item.textContent = sug;
        item.classList.add("autocomplete-item");
        item.onclick = () => {
            input.value = sug;
            input.focus();
        };
        autocompletarDiv.appendChild(item);
    });
}


// =============================================
// FUNCIÓN: Buscar recetas y mostrarlas
// =============================================
function buscarYRenderizar() {
    const valor = input.value.trim();
    if (!valor) return;

    const resultados = filtrarPorIngrediente(valor);
    actualizarHistorial(valor);
    renderRecetas(resultados);
}


// =============================================
// FUNCIÓN: Ordenar recetas por nombre o tiempo
// =============================================

function ordenarRecetas(tipo) {
    let ordenadas = [...recetas];

    if (tipo === "time") {
        ordenadas = mergeSortProp(ordenadas, (a, b) => a.tiempo - b.tiempo);
    } else {
        ordenadas = mergeSortProp(ordenadas, (a, b) => a.nombre.localeCompare(b.nombre));
    }

    renderRecetas(ordenadas);
}

function mergeSortProp(arr, prop) {
    if (arr.length <= 1) return arr;

    const medio = Math.floor(arr.length / 2);
    const izquierda = mergeSortProp(arr.slice(0, medio), prop);
    const derecha = mergeSortProp(arr.slice(medio), prop);

    return mergeProp(izquierda, derecha, prop);
}

function mergeProp(izquierda, derecha, prop) {
    const resultado = [];
    let i = 0, j = 0;

    while (i < izquierda.length && j < derecha.length) {
        if (prop(izquierda[i], derecha[j]) <= 0) {
            resultado.push(izquierda[i++]);
        } else {
            resultado.push(derecha[j++]);
        }
    }

    return [...resultado, ...izquierda.slice(i), ...derecha.slice(j)];
}


// =============================================
// FUNCIÓN: Resaltar sugerencia seleccionada
// =============================================
function highlightSuggestion(items) {
    items.forEach((item, index) => {
        item.classList.toggle("active", index === currentSuggestionIndex);
    });
}


// =============================================
// EVENTO: Cuando el usuario escribe en el input
// =============================================
input.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    autocompletar(value); // Solo muestra sugerencias

    if (!value) {
        renderRecetas(recetas); // Si está vacío, mostrar todas
    }
});


// =============================================
// EVENTO: Teclado para navegar sugerencias
// =============================================
input.addEventListener("keydown", (e) => {
    const items = document.querySelectorAll(".autocomplete-item");

    if (e.key === "ArrowDown") {
        e.preventDefault();
        if (currentSuggestionIndex < items.length - 1) {
            currentSuggestionIndex++;
            highlightSuggestion(items);
        }
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (currentSuggestionIndex > 0) {
            currentSuggestionIndex--;
            highlightSuggestion(items);
        }
    } else if (e.key === "Enter") {
        if (currentSuggestionIndex >= 0 && items[currentSuggestionIndex]) {
            input.value = items[currentSuggestionIndex].textContent;
            document.getElementById("autocomplete-list").innerHTML = "";
        }
        buscarYRenderizar(); // Ejecuta búsqueda
    }
});


// =============================================
// EVENTO: Cambiar tipo de ordenamiento
// =============================================
sortSelect.addEventListener("change", (e) => ordenarRecetas(e.target.value));


// =============================================
// EVENTO: Mostrar la receta más rápida
// =============================================
suggestionBtn.addEventListener("click", () => {
    // TODO: Reemplazar .reduce() con una implementación manual de Greedy para encontrar el menor tiempo
    const recetaMasRapida = recetas[0];

    for (let i = 1; i < recetas.length; i++) {
        if (recetas[i].tiempo < recetaMasRapida.tiempo) {
            recetaMasRapida = recetas[i];
        }
    }
    renderRecetas([recetaMasRapida]);
});


// =============================================
// Render inicial de todas las recetas
// =============================================
renderRecetas(recetas);
