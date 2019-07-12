global.window = global;
require('../src/data');
require('./data.spec.js');
const pokemons = 
[{'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'egg': '2 km',
  'avg_spawns': 69,
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'egg': 'Not in Eggs',
  'avg_spawns': 4.2,
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]
}, {
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'egg': 'Not in Eggs',
  'avg_spawns': 1.7,
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ]
}, 
{
  'id': 23,
  'num': '023',
  'name': 'Ekans',
  'type': [
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '6.9 kg',
  'egg': '5 km',
  'avg_spawns': 227,
  'multipliers': [
    2.21,
    2.27
  ],
  'weaknesses': [
    'Ground',
    'Psychic'
  ]
},
{
  'id': 95,
  'num': '095',
  'name': 'Onix',
  'type': [
    'Rock',
    'Ground'
  ],
  'height': '8.79 m',
  'weight': '210.0 kg',
  'egg': '10 km',
  'avg_spawns': 10,
  'multipliers': null,
  'weaknesses': [
    'Water',
    'Grass',
    'Ice',
    'Fighting',
    'Ground',
    'Steel'
  ]
}
];
  
describe(displayData, () => {
  it('debería ser una función', () => { 
    expect(typeof displayData).toEqual('function');
  });
});
describe(sortPoke, () => {
  it('debería ser una función', () => {
    expect(typeof sortPoke).toEqual('function');
  });
  
  it('Ordenar de la A-Z', () =>{
    expect(sortPoke(pokemons, 'nameup')[0].name).toEqual('Bulbasaur');
  });

  it('Ordenar de la Z-A', () =>{
    expect(sortPoke(pokemons, 'namedown')[0].name).toEqual('Venusaur');
  });
});
describe(sortSpawns, () => {
  it('debería ser una función', () => {
    expect(typeof sortSpawns).toEqual('function');
  });
  it('Ordear por Spawn Ascendente ', () =>{
    expect(sortSpawns(pokemons, 'avgup')[0].avg_spawns).toEqual(1.7);
  });
  it('Ordear por Spawn Descendente ', () =>{
    expect(sortSpawns(pokemons, 'avgdown')[0].avg_spawns).toEqual(227);
  });
});
describe(filterEgg, () => {
  it('debería ser una función', () => {
    expect(typeof filterEgg).toEqual('function');
  });
});
describe(filterByTypes, () => {
  it('debería ser una función', () => {
    expect(typeof filterByTypes).toEqual('function');
  });
});
describe(filterByWeaknesses, () => {
  it('debería ser una función', () => {
    expect(typeof filterByWeaknesses).toEqual('function');
  });
});
