global.window = global;
require('../src/data');
require('./data.spec.js');
<<<<<<< HEAD
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
=======

const pokemons = [
  {
    'id': 1,
    'name': 'Bulbasaur',
    'type': [
      'Grass',
      'Poison'
    ],
    'egg': '2 km',
    'avg_spawns': 69,
    'multipliers': [1.58],
    'weaknesses': [
      'Fire',
      'Ice',
      'Flying',
      'Psychic'
    ],
  }, {
    'id': 2,
    'name': 'Ivysaur',
    'type': [
      'Grass',
      'Poison'
    ],
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
    ],
  }, {
    'id': 23,
    'name': 'Ekans',
    'type': [
      'Poison'
    ],
    'egg': '5 km',
    'avg_spawns': 227,
    'multipliers': [
      2.21,
      2.27
    ],
    'weaknesses': [
      'Ground',
      'Psychic'
    ],
  }, {
    'id': 95,
    'name': 'Onix',
    'type': [
      'Rock',
      'Ground'
    ],
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
  },
];
describe(sortPoke, () => {
  test('debería ser una función', () => {
    expect(typeof sortPoke).toEqual('function');
  });
  test('ordenar de la A a la Z', () => {
    expect(sortPoke(pokemons, 'nameup')[0].name).toEqual('Bulbasaur');
  });
  test('ordenar de la Z a la A', () => {
    expect(sortPoke(pokemons, 'namedown')[0].name).toEqual('Onix');
>>>>>>> b8ffa387d0a2bc3fcf871ea9be0752fb3991331e
  });
});
describe(sortSpawns, () => {
  test('debería ser una función', () => {
    expect(typeof sortSpawns).toEqual('function');
  });
  test('ordenar spawns ascendente', () => {
    expect(sortSpawns(pokemons, 'avgup')[0].avg_spawns).toEqual(4.2);
  });
  test('ordenar spawns descendente', () => {
    expect(sortSpawns(pokemons, 'avgdown')[0].avg_spawns).toEqual(227);
  });
});
describe(filterEgg, () => {
  test('debería ser una función', () => {
    expect(typeof filterEgg).toEqual('function');
  });
  test('mostrar los pokemons de huevos de 2 km', () => {
    expect(filterEgg(pokemons, '2 km')[0].egg).toEqual('2 km');
  });
  test('mostrar los pokemons de huevos de 5 km', () => {
    expect(filterEgg(pokemons, '5 km')[0].egg).toEqual('5 km');
  });
  test('mostrar los pokemons de huevos de 10 km', () => {
    expect(filterEgg(pokemons, '10 km')[0].egg).toEqual('10 km');
  });
  test('mostrar los pokemons que no vienen en huevo', () => {
    expect(filterEgg(pokemons, 'Not in Eggs')[0].egg).toEqual('Not in Eggs');
  });
});
describe(filterByTypes, () => {
  test('debería ser una función', () => {
    expect(typeof filterByTypes).toEqual('function');
  });
  test('mostrar los pokemons tipo Bicho', () => {
    expect(filterByTypes('Grass', pokemons)[0].type[0]).toEqual('Grass');
  });
});
describe(filterByWeaknesses, () => {
  test('debería ser una función', () => {
    expect(typeof filterByWeaknesses).toEqual('function');
  });
  test('mostrar los pokemons con debilidad tipo Bicho', () => {
    expect(filterByWeaknesses('Fire', pokemons)[0].weaknesses[0]).toEqual('Fire');
  });
});