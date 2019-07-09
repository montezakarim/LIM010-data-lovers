// asignar variable para que imprima lo que entre----------------------------------------------------------
const displayData = (dataToPrint) => {
  let noPokemons = 0;
  let thePokemons = 0;
  dataToPrint.forEach((poke)=>{
    if (poke.multipliers === null) {
      displayPokemon.innerHTML += `
        <figure class="wp-caption">
        <input class="pokePic untrapped" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
        <img class="type_background" src="img/Type_Background_${poke.type[0]}.png" alt="Type_Background_${poke.type[0]}.png">
        <figcaption class="wp-caption-text" type="button">${poke.name} 0</figcaption>
        </figure>`;
      noPokemons ++;
      return noPokemons;
    } else {
      displayPokemon.innerHTML += `
        <figure class="wp-caption">
        <input class="pokePic" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
        <img class="type_background" src="img/Type_Background_${poke.type[0]}.png" alt="Type_Background_${poke.type[0]}.png">
        <figcaption class="wp-caption-text" type="button">${poke.name} ${poke.multipliers.length}</figcaption>
        </figure> `;
      thePokemons ++;
    };
  });
  const parentNav = document.querySelectorAll('nav')[0];
  const getId = (event) => {
    const idPokemon = event.target.id;
    showCard(idPokemon);
  };
  parentNav.addEventListener('click', getId);
  header.innerHTML = `
    <h2>Total atrapados: ${thePokemons} &nbsp; &nbsp; Por atrapar: ${noPokemons}</h2>`;
  classContenedor1.classList.remove('hide'); 
  classContenedor2.classList.remove('hide'); 
  classContenedor3.classList.remove('hide'); 
  classContenedor4.classList.remove('hide'); 
  home.classList.remove('hide'); 
  return dataToPrint;
}; 

const sortPoke = (data, sortOrder) => {
  const arrSortName = data.slice().sort((aa, bb) => {
    if (aa.name > bb.name) {
      return 1;
    } if (aa.name < bb.name) {
      return -1;
    }
    return 0;
  });
  if (sortOrder === 'nameup') {
    return arrSortName;
  }
  if (sortOrder === 'namedown') {
    return arrSortName.reverse();
  }
  return 0;
};
 
const sortSpawns = (data, sortOrder) => {
  const arrSortSpawns = data.slice().sort((aa, bb) => {
    if (aa.avg_spawns > bb.avg_spawns) {
      return 1;
    } if (aa.avg_spawns < bb.avg_spawns) {
      return -1;
    }
    return 0;
  });
  if (sortOrder === 'avgup') {
    return arrSortSpawns;
  }
  if (sortOrder === 'avgdown') {
    return arrSortSpawns.reverse();
  }
  return 0;
};

const filterEgg = (data, kms) => {
  let egg = [];
  if (kms === '2 km') {
    egg = data.filter(poke => (poke.egg === '2 km'));
  } else if (kms === '5 km') {
    egg = data.filter(poke => (poke.egg === '5 km'));
  } else if (kms === '10 km') {
    egg = data.filter(poke => (poke.egg === '10 km'));
  } else if (kms === 'Not in Eggs') {
    egg = data.filter(poke => (poke.egg === 'Not in Eggs'));
  }
  return egg;
};

const filterByTypes = (condition) => {
  filteredArray = [];
pokemons.forEach(poke => {
  for (let i = 0; i < poke.type.length; i++) {
    if (poke.type[i] === condition) {
      filteredArray.push(poke); 
    } 
  } 
 })                          
return filteredArray;
};

const filterByWeaknesses = (condition) =>{
  filteredArray = [];
  pokemons.forEach(poke => {
    for (let i = 0; i < poke.weaknesses.length; i++) {
      if (poke.weaknesses[i] === condition) {
        filteredArray.push(poke); 
      } 
    } 
   })                          
  return filteredArray;
};

window.filterByTypes = filterByTypes;
window.filterByWeaknesses = filterByWeaknesses;
window.displayData = displayData;
window.sortPoke = sortPoke;
window.sortSpawns = sortSpawns;
window.filterEgg = filterEgg;