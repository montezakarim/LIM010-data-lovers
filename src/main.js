const arrayPokemon = POKEMON.pokemon;
const pokemons = arrayPokemon.map((poke)=>{  
  return poke;
});


const btnLogin = document.getElementById('btn-login');
const loginInput = document.getElementsByClassName('login-input')[0];
const formLogin = document.getElementById('login');
const message = document.getElementById('message');
const header = document.getElementById('header');
const displayPokemon = document.getElementsByClassName('my-pokemon-pics')[0];
const card = document.getElementById('card');
const back = document.getElementById('back');
const home = document.getElementById('home');

const loginAccess = () => {
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  if (email === '' && password === '') {
    formLogin.classList.add('hide');
    loginInput.classList.add('hide');
    document.body.style.backgroundImage = 'url("img/fondop3.jpg")';
    displayData(pokemons);
  } else {
    message.classList.remove('hide');
    message.innerHTML = 'Usuario o password incorrectos';
  };
};

btnLogin.addEventListener('click', loginAccess);

bug.addEventListener('click', () => filterByTypes('Bug'));
dark.addEventListener('click', () => filterByTypes('Dark'));
dragon.addEventListener('click', () => filterByTypes('Dragon'));
electric.addEventListener('click', () => filterByTypes('Electric'));
fairy.addEventListener('click', () => filterByTypes('Fairy'));
fighting.addEventListener('click', () => filterByTypes('Fighting'));
fire.addEventListener('click', () => filterByTypes('Fire'));
flying.addEventListener('click', () => filterByTypes('Flying'));
ghost.addEventListener('click', () => filterByTypes('Ghost'));
grass.addEventListener('click', () => filterByTypes('Grass'));
ground.addEventListener('click', () => filterByTypes('Ground'));
ice.addEventListener('click', () => filterByTypes('Ice'));
normal.addEventListener('click', () => filterByTypes('Normal'));
poison.addEventListener('click', () => filterByTypes('Poison'));
psychic.addEventListener('click', () => filterByTypes('Psychic'));
rock.addEventListener('click', () => filterByTypes('Rock'));
steel.addEventListener('click', () => filterByTypes('Steel'));
water.addEventListener('click', () => filterByTypes('Water'));

bugw.addEventListener('click', () => filterByWeaknesses('Bug'));
darkw.addEventListener('click', () => filterByWeaknesses('Dark'));
dragonw.addEventListener('click', () => filterByWeaknesses('Dragon'));
electricw.addEventListener('click', () => filterByWeaknesses('Electric'));
fairyw.addEventListener('click', () => filterByWeaknesses('Fairy'));
fightingw.addEventListener('click', () => filterByWeaknesses('Fighting'));
firew.addEventListener('click', () => filterByWeaknesses('Fire'));
flyingw.addEventListener('click', () => filterByWeaknesses('Flying'));
ghostw.addEventListener('click', () => filterByWeaknesses('Ghost'));
grassw.addEventListener('click', () => filterByWeaknesses('Grass'));
groundw.addEventListener('click', () => filterByWeaknesses('Ground'));
icew.addEventListener('click', () => filterByWeaknesses('Ice'));
normalw.addEventListener('click', () => filterByWeaknesses('Normal'));
poisonw.addEventListener('click', () => filterByWeaknesses('Poison'));
psychicw.addEventListener('click', () => filterByWeaknesses('Psychic'));
rockw.addEventListener('click', () => filterByWeaknesses('Rock'));
steelw.addEventListener('click', () => filterByWeaknesses('Steel'));
waterw.addEventListener('click', () => filterByWeaknesses('Water'));

btn2.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(window.sortPoke(pokemons, 'namedown'));
});
btn3.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(window.sortPoke(pokemons, 'nameup'));
});
btn4.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(window.sortSpawns(pokemons, 'avgup'));
});
btn5.addEventListener('click', () => {
  displayPokemon.innerHTML = null;
  displayData(window.sortSpawns(pokemons, 'avgdown'));
});
// btn2.addEventListener('click', sortBy(displayData, 'namedown'));
// btn3.addEventListener('click', sortBy(displayData, 'nameup'));
// btn4.addEventListener('click', sortBy(displayData, 'spawnup'));
// btn5.addEventListener('click', sortBy(displayData, 'spawndown'));