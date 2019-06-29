/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const pokemonData = () => {
//   return 'POKEMON';
// };

// window.pokemonData = pokemonData;
const objectPokemon = POKEMON.pokemon;
const displayPokemon = document.getElementById('my-pokemon-pics');
const displayData = () => {
  let allPokemons = 0;
  for (let i = 0; i < objectPokemon.length; i++) {
    const pokemon = objectPokemon[i];
    if (pokemon.multipliers === null) {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input name="${pokemon.name}" type="image" src="${pokemon.img}" alt="${pokemon.name}">
      <figcaption class="wp-caption-text">${pokemon.name} 0</figcaption>
      </figure>`;
    } else {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input name="${pokemon.name}" type="image" src="${pokemon.img}" alt="${pokemon.name}">
      <figcaption class="wp-caption-text">${pokemon.name} ${pokemon.multipliers.length}</figcaption>
      </figure> `;
      allPokemons += pokemon.multipliers.length;
      document.getElementById('header').innerHTML = `
      <h4>Total atrapados: ${allPokemons}</h4>`;
    };
  };
  classContenedor.classList.remove('hide');
};

window.displayData = displayData;