const arrayPokemon = POKEMON.pokemon;

let pokemons = arrayPokemon.map((poke)=>{  
  return poke;
});

const filterByType = (type) => {
  switch (type) {
  case Grass:
    break;
  case Poison:
    break;
  case Fire:
    break;
  case Flying:
    break;
  case Water:
    break;
  case Bug:
    break;
  case Normal:
    break;
  case Electric:
    break;
  case Ground:
    break;
  case Ice:
    break;
  case Psychic:
    break;
  case Fighting:
    break;
  case Rock:
    break;
  case Dragon:
    break;  
  }
};

const filter = () =>{
  let byType = {};
  let byWeakness = {};
  let types = [];
  pokemons.forEach(poke=>{
    if (!types.find(poke.type === types.type)) {
      types.push(poke.type);
    };
  });


  byType = pokemons.filter();
};

const showCard = (idPoke) => {
  displayPokemon.classList.add('hide');
  classContenedor1.classList.add('hide');
  classContenedor2.classList.add('hide');
  classContenedor3.classList.add('hide');
  classContenedor4.classList.add('hide');
  header.classList.add('hide');
  card.classList.remove('hide');
  back.classList.remove('hide');
  pokemons.forEach(poke =>{ 
    if (parseInt(idPoke) === poke.id) {
      card.innerHTML += `<img class="cardImg" src="${poke.img}" alt="${poke.name}" >`;
    }
  });
};

const displayData = () => {
  let noPokemons = 0;
  pokemons.forEach((poke)=>{
    if (poke.multipliers === null) {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input class="pokePic" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
      <figcaption class="wp-caption-text" type="button">${poke.name} 0</figcaption>
      </figure>`;
      noPokemons = noPokemons + 1;
      return noPokemons;
    } else {
      displayPokemon.innerHTML += `
      <figure class="wp-caption">
      <input class="pokePic" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
      <figcaption class="wp-caption-text" type="button">${poke.name} ${poke.multipliers.length}</figcaption>
      </figure> `;
    };
    return; 
  });
  const parentNav = document.querySelectorAll('nav')[0];
  const getId = (event) => {
    const idPokemon = event.target.id;
    showCard(idPokemon);
  };
  parentNav.addEventListener('click', getId);
  header.innerHTML = `
  <h2>Total atrapados: ${151 - noPokemons} &nbsp; &nbsp; Por atrapar: ${noPokemons}</h2>`;
  classContenedor1.classList.remove('hide'); 
  classContenedor2.classList.remove('hide'); 
  classContenedor3.classList.remove('hide'); 
  classContenedor4.classList.remove('hide'); 
  home.classList.remove('hide'); 
}; 

const getSpawn = () => {
  pokemons.forEach(poke => {
    const chance = poke.avg_chance;
    const time = poke.spawn_time;
    if (chance && time) {
      const spawn = parseFloat(chance) * parseFloat(time);
      // console.log(spawn.toFixed(2));
    }
  });
};

// window.displayData = displayData;