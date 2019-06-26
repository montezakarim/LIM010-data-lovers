const displayPokemon = document.getElementById('myPokemonPics');
const btnLogin = document.getElementById('btnLogin');
const formLogin = document.getElementById('login');
const objectPokemon = POKEMON.pokemon;

const loginAccess = () => {
  formLogin.classList.add('hide');
  btnLogin.classList.add('hide');
  displayData();
};

const displayData = () => {
  let allPokemons = 0;
  for (let i = 0; i < objectPokemon.length; i++) {
    const pokemon = objectPokemon[i];
    
    if (pokemon.multipliers === null) {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input name="${pokemon.name}" type="image" src="${pokemon.img}" alt="${pokemon.name}">
      <figcaption class="wp-caption-text">${pokemon.name} 0</figcaption>
      </figure>
    
    `;
    } else {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input name="${pokemon.name}" type="image" src="${pokemon.img}" alt="${pokemon.name}">
      <figcaption class="wp-caption-text">${pokemon.name} ${pokemon.multipliers.length}</figcaption>
      </figure> `;
      allPokemons += pokemon.multipliers.length;
      document.getElementById('header').innerHTML = `
      <h1>Total región Kanto: ${allPokemons}</h1>`;
    }
  }
};

btnLogin.addEventListener('click', loginAccess);