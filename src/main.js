const displayPokemon = document.getElementById('myPokemonPics');
const btnLogin = document.getElementById('btnLogin');
const formLogin = document.getElementById('login');
const message = document.getElementById('message');
message.classList.add('hide');
const objectPokemon = POKEMON.pokemon;

const loginAccess = () => {
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  if (email === 'LABORATORIA' && password === 'LABORATORIA') {
    formLogin.classList.add('hide');
    btnLogin.classList.add('hide');
    document.body.style.backgroundImage = 'url("img/fondop3.jpg")';
    displayData();
  } else {
    message.classList.remove('hide');
    message.innerHTML = 'Usuario o password incorrectos';
  };
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
};

btnLogin.addEventListener('click', loginAccess);