const objectPokemon = POKEMON.pokemon;
const displayPokemon = document.getElementsByClassName('my-pokemon-pics')[0];

let pokemons = objectPokemon.map((poke)=>{
  return poke;
});

const displayData = () => {
  let noPokemons = 0;
  pokemons.forEach((poke)=>{
    if (poke.multipliers === null) {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
      <figcaption class="wp-caption-text">${poke.name} 0</figcaption>
      </figure>`;
      noPokemons = noPokemons + 1;
      return noPokemons;
    } else {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
      <figcaption class="wp-caption-text">${poke.name} ${poke.multipliers.length}</figcaption>
      </figure> `;
      idPokemon = document.getElementById('${poke.name}');
      return idPokemon;
    };
  });
  document.getElementById('header').innerHTML = `
  <h2>Total atrapados: ${151 - noPokemons} &nbsp; &nbsp; Por atrapar: ${noPokemons}</h2>`;
  classContenedor.classList.remove('hide');
};

const getSpawn = () => {
  pokemons.forEach(poke => {
    const chance = poke.avg_spawns;
    const time = poke.spawn_time;
    if (chance && time) {
      const spawn = parseFloat(chance) * parseFloat(time);
      console.log(spawn.toFixed(2));
    }
  });
};

// window.displayData = displayData;