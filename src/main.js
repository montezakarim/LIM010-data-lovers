const arrayPokemon = POKEMON.pokemon;
const pokemons = arrayPokemon.map((poke)=>{  
  return poke;
});

const parentNav = document.querySelectorAll('nav')[0];
let filteredArray = pokemons;
const btnLogin = document.getElementById('btn-login');
const loginInput = document.getElementsByClassName('login-input')[0];
const formLogin = document.getElementById('login');
const message = document.getElementById('message');
const header = document.getElementById('header');
const displayPokemon = document.getElementsByClassName('my-pokemon-pics')[0];
const card = document.getElementById('card');
const home = document.getElementById('home');

const loginAccess = () => {
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  if (email === '' && password === '') {
    formLogin.classList.add('hide');
    loginInput.classList.add('hide');
    document.body.style.backgroundImage = 'url("img/fondop3.jpg")';
    showDisplay(pokemons);
  } else {
    message.classList.remove('hide');
    message.innerHTML = 'Usuario o password incorrectos';
  };
};

const getId = (event) => {
  const idPokemon = event.target.id;
  showCard(idPokemon);
};

btnLogin.addEventListener('click', loginAccess);

parentNav.addEventListener('click', getId);


typeData.addEventListener('click', (event) => {
  let type = event.target.value;
  if (type !== undefined) {
    displayPokemon.innerHTML = null;
    showDisplay(filterByTypes(type, pokemons));
  }
});

weaknessData.addEventListener('click', (event) =>{
  let weakness = event.target.value;
  if (weakness !== undefined) {
    displayPokemon.innerHTML = null;
    showDisplay(filterByWeaknesses(weakness, pokemons));
  }
});


btnZa.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(sortPoke(filteredArray, '1', 'name'));
});
btnAz.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(sortPoke(filteredArray, '0', 'name'));
});
btnFup.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(sortPoke(filteredArray, '0', 'avg-spawns'));
});
btnFdown.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  showDisplay(sortPoke(filteredArray, '1', 'avg-spawns'));
});
let result = [];
eggData.addEventListener('click', (event) => {
  let kms = event.target.value;
  if (kms !== undefined) {
    displayPokemon.innerHTML = null;
    result = filterEgg(pokemons, kms, kms);
    showDisplay(result);
    header.innerHTML = `Pokemones que nacen de huevos de &kms corresponden al &nbsp; ${((result.length) / 151 * 100).toFixed(2)}% de la region Kanto`;
  }
});

home.addEventListener('click', () => {
  card.classList.add('hide');
  displayPokemon.innerHTML = null;
  header.classList.remove('hide');
  displayPokemon.classList.remove('hide');
  filteredArray = pokemons;
  showDisplay(filteredArray);
});
const showCard = (idPoke) => {
  displayPokemon.classList.add('hide');
  orderData.classList.add('hide');
  eggData.classList.add('hide');
  typeData.classList.add('hide');
  weaknessData.classList.add('hide');
  header.classList.add('hide');
  card.classList.remove('hide');
  pokemons.forEach(poke =>{ 
    if (parseInt(idPoke) === poke.id) {
      card.innerHTML = `
      <img class="cardImg b-radius50 border-gy" src="${poke.img}" alt="${poke.name}" >
      <aside class="characteristics column white">
      <h2>${poke.name}</h2>
      <aside class="pokedex">
        <div>
        <p> #: ${poke.num}</p>
        </div>
        <div>
        <p>peso: ${poke.weight}</p>
        </div>
        <div>
        <p>talla: ${poke.height}</p>
        </div>
      </aside>
      <aside class="type-size">
        <div>
          <p>tipo:</p>
          <divclass="type-card">
          <img class"size-img" src="img/${poke.type[0]}.png" alt="${poke.type[0]}" >
          <img class"size-img" src="img/${poke.type[1]}.png" alt="${poke.type[1]}" >
          <img class"size-img" src="img/${poke.type[2]}.png" alt="${poke.type[2]}" >
          <img class"size-img" src="img/${poke.type[3]}.jpg" alt="${poke.type[3]}" >
          </div>
        </div>
        <div>
          <p>debilidad:</p>
          <div>
          <img class"size-img" src="img/${poke.weaknesses[0]}.png" alt="${poke.weaknesses[0]}" >
          <img class"size-img" src="img/${poke.weaknesses[1]}.png" alt="${poke.weaknesses[1]}" >
          <img class"size-img" src="img/${poke.weaknesses[2]}.png" alt="${poke.weaknesses[2]}" >
          <img class"size-img" src="img/${poke.weaknesses[3]}.png" alt="${poke.weaknesses[3]}" >
          </div>
        </div>
      </aside>
    </aside>      
      `;
    }
  });
};

const showDisplay = (arrayToPrint) =>{
  let noPokemons = [];
  let thePokemons = [];
  arrayToPrint.forEach(poke =>{
    if (poke.multipliers === null) {
      displayPokemon.innerHTML += `
        <figure class="wp-caption wrap center-t m-auto">
        <input class="pokePic untrapped b-radius50 width100 border-gy" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
        <img class="type_background absolute b-radius50" src="img/Type_Background_${poke.type[0]}.png" alt="Type_Background_${poke.type[0]}.png">
        <figcaption class="wp-caption-text center-t absolute bottom0 b-radius50 calibri font14 z-index5" type="button width100">${poke.name} 0</figcaption>
        </figure>`;
      noPokemons += poke;
      return noPokemons;
    } else {
      displayPokemon.innerHTML += `
      <figure class="wp-caption wrap center-t m-auto">
      <input class="pokePic b-radius50 width100 border-gy" name="${poke.name}" id="${poke.id}" type="image" src="${poke.img}" alt="${poke.name}">
      <img class="type_background absolute b-radius50" src="img/Type_Background_${poke.type[0]}.png" alt="Type_Background_${poke.type[0]}.png">
      <figcaption class="wp-caption-text center-t absolute bottom0 b-radius50 calibri font14 z-index5 width100" type="button">${poke.name} ${poke.multipliers.length}</figcaption>
      </figure> `;
      thePokemons += poke;
      return thePokemons;
    };
  });
  header.innerHTML = `
  <h2>Total atrapados: ${thePokemons.length / 15} &nbsp; &nbsp; Por atrapar: ${noPokemons.length / 15}</h2>`;
  orderData.classList.remove('hide'); 
  eggData.classList.remove('hide'); 
  typeData.classList.remove('hide'); 
  weaknessData.classList.remove('hide'); 
  home.classList.remove('hide'); 
};