const sortPoke = (data, sortOrder, property) => {
  const arrSort = data.slice().sort((aa, bb) => {
    if (property === 'name') {
      if (aa.name > bb.name) {
        return 1;
      } if (aa.name < bb.name) {
        return -1;
      }
    } else {
      if (aa.avg_spawns > bb.avg_spawns) {
        return 1;
      } if (aa.avg_spawns < bb.avg_spawns) {
        return -1;
      }
    }
  });
  if (sortOrder === '0') {   
    return arrSort;
  }
  if (sortOrder === '1') {
    return arrSort.reverse();
  }
};
 
const filterEgg = (data, kms, option) => {
  let egg = [];
  if (kms === option) {
    egg = data.filter(poke => (poke.egg === option));
  } 
  return egg;
};

const filterByTypes = (condition, filterArray) => {
  filteredArray = [];
  filterArray.forEach(poke => {
    for (let i = 0; i < poke.type.length; i++) {
      if (poke.type[i] === condition) {
        filteredArray.push(poke); 
      } 
    } 
  });                          
  return filteredArray;
};

const filterByWeaknesses = (condition, filterArray) =>{
  filteredArray = [];
  filterArray.forEach(poke => {
    for (let i = 0; i < poke.weaknesses.length; i++) {
      if (poke.weaknesses[i] === condition) {
        filteredArray.push(poke); 
      } 
    } 
  });                          
  return filteredArray;
};

window.filterByTypes = filterByTypes;
window.filterByWeaknesses = filterByWeaknesses;
window.sortPoke = sortPoke;
window.filterEgg = filterEgg;