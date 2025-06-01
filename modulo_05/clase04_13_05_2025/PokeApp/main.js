/* Esto si debería devolver lo mismo siempre */
const BASE_URL_API = "https://pokeapi.co/api/v2";
const formNombre = document.querySelector('#searchForm');
const salida = document.querySelector('#output')

// Validación con Zod

const { z } = window.Zod;

const nombreSchema = z.string()
  .nonempty("El nombre no puede estar vacío")
  .regex(/^[a-zA-Z0-9]+$/, "Solo se permiten letras y números");

/* Esto no devuelve lo mismo siempre */
const obtenerPokemonPorNombre = async (nombre) => {
    const url_consulta = `${BASE_URL_API}/pokemon/${nombre}`;
    const response = await fetch(url_consulta);
    if (!response.ok) {
        throw new Error('HTTP ' + response.status)
    }

    const data = await response.json()

    //console.log(data);
    return data;
}

function buildPokemonCard({ id, name, sprites, abilities, types }) {
    const liAbilities = abilities
        .map(a => `<li>${a.ability.name}</li>`)
        .join('');

    const chips = types
        .map(t => `<span class="types">${t.type.name}</span>`)
        .join('');

    return `
      <div class="card show">
        <img src="${sprites.front_default}" alt="${name}">
        <h2>#${id} – ${name}</h2>
        <ul>${liAbilities}</ul>
        ${chips}
      </div>`;
}

formNombre.addEventListener('submit', async (event) => {
    event.preventDefault()
    const nombre = event.target.nombrePokemon;
    if (!nombre) return;

    try {
        nombreSchema.parse(nombre.value);
    } catch (err) {
        salida.innerHTML = `<p id=errorMsg>${err.errors?.[0]?.message} </p>`;
        return;
    }

    showLoader();
    salida.innerHTML = '';
    // console.log(nombre.value);

    setTimeout(async () => {
        try {
            const pokemonData = await obtenerPokemonPorNombre(nombre.value)
            saveHistory(nombre.value)
            console.log(pokemonData)
            salida.innerHTML = buildPokemonCard(pokemonData)

            document.body.style.backgroundImage = `url(${pokemonData.sprites.front_default})`;
            document.body.style.backgroundSize = "contain";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundColor = "#f0f0f0"; 
        } catch (err) {
            salida.innerHTML = `<p id=errorMsg>El pokemon no se encuentra! (${err.message})</p>`
        } finally {
            hideLoader()
        }
    }, 2000);
})


const showLoader = () => document.querySelector("#loader").classList.remove('hidden')

const hideLoader = () => document.querySelector("#loader").classList.add('hidden')


/* ##### historial ###### */

const MAX_HISTORY = 5;

function saveHistory(nombre) {
    let history = JSON.parse(localStorage.getItem('pokeHistory')) || [];
    history = [nombre, ...history.filter(item => item !== nombre)]
    if (history.length > MAX_HISTORY)
        history = history.slice(0, MAX_HISTORY);
    localStorage.setItem('pokeHistory', JSON.stringify(history));
    renderHistory();
}


function renderHistory() {
    const container = document.querySelector('#recentSearch');
    const history = JSON.parse(localStorage.getItem('pokeHistory')) || [];

    if (!history.length)
        return container.innerHTML = '';

    container.innerHTML = `
    <p>Ultimos Pokemon encontrados:</p>
    <div class="history-buttons">
      ${history.map(name => `<button class="history-btn">${name}</button>`).join('')}
    </div>
  `;

    document.querySelectorAll('.history-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('[name=nombrePokemon]').value = btn.textContent;
            formNombre.dispatchEvent(new Event('submit'));
        });
    });
}

// Inicialízalo en el primer load
renderHistory();

