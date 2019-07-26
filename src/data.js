const sortPoke = (data, sortOrder, property) => {
  const arrSort = data.slice().sort((aa, bb) => {
    if (aa[property] > bb[property]) {
      return 1;
    } if (aa[property] < bb[property]) {
      return -1;
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

const filterData = (condition, filterArray, property) => {
  filteredArray = [];
  filterArray.forEach(poke => {
    for (let i = 0; i < poke[property].length; i++) {
      if (poke.type[i] === condition) {
        filteredArray.push(poke); 
      } 
    } 
  });                          
  return filteredArray;
};

window.filterData = filterData;
window.sortPoke = sortPoke;
window.filterEgg = filterEgg;