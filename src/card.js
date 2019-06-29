let card = document.getElementById('cardPokemon');

const showCard = (idPokemon) => {
  pokemons.forEach(poke => {  
    idPokemon = poke.id;
    console.log(idPokemon);
  });
};
