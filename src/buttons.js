const orderData = document.getElementById('contenedor1');
const eggData = document.getElementById('contenedor2');
const typeData = document.getElementById('contenedor3');
const weaknessData = document.getElementById('contenedor4'); 
// cambiar nombre botones ordenado
const btnZa = document.getElementById('btnza');
const btnAz = document.getElementById('btnaz');
const btnFup = document.getElementById('btnfup');
const btnFdown = document.getElementById('btnfdown');

const btn2km = document.getElementById('btn2km');
const btn5km = document.getElementById('btn5km');
const btn10km = document.getElementById('btn10km');
const notInEggs = document.getElementById('not-in-eggs');

const bug = document.getElementById('bug');
const dark = document.getElementById('dark');
const dragon = document.getElementById('dragon');
const electric = document.getElementById('electric');
const fairy = document.getElementById('fairy');
const fighting = document.getElementById('fighting');
const fire = document.getElementById('fire');
const flying = document.getElementById('flying');
const ghost = document.getElementById('ghost');
const grass = document.getElementById('grass');
const ground = document.getElementById('ground');
const ice = document.getElementById('ice');
const normal = document.getElementById('normal');
const poison = document.getElementById('poison');
const psychic = document.getElementById('psychic');
const rock = document.getElementById('rock');
const steel = document.getElementById('steel');
const water = document.getElementById('water');


const bugw = document.getElementById('bugw');
const darkw = document.getElementById('darkw');
const dragonw = document.getElementById('dragonw');
const electricw = document.getElementById('electricw');
const fairyw = document.getElementById('fairyw');
const fightingw = document.getElementById('fightingw');
const firew = document.getElementById('firew');
const flyingw = document.getElementById('flyingw');
const ghostw = document.getElementById('ghostw');
const grassw = document.getElementById('grassw');
const groundw = document.getElementById('groundw');
const icew = document.getElementById('icew');
const normalw = document.getElementById('normalw');
const poisonw = document.getElementById('poisonw');
const psychicw = document.getElementById('psychicw');
const rockw = document.getElementById('rockw');
const steelw = document.getElementById('steelw');
const waterw = document.getElementById('waterw');

const mouseOver1 = () => {
  orderData.classList.add('animacionVer');
  btnZa.classList.add('animacionVer');
  btnAz.classList.add('animacionVer');
  btnFup.classList.add('animacionVer');
  btnFdown.classList.add('animacionVer');
};
const mouseOut1 = () => {
  orderData.classList.remove('animacionVer');
  btnZa.classList.remove('animacionVer');
  btnAz.classList.remove('animacionVer');
  btnFup.classList.remove('animacionVer');
  btnFdown.classList.remove('animacionVer');
};
const mouseOver2 = () => {
  eggData.classList.add('animacionVer');
  btn2km.classList.add('animacionVer');
  btn5km.classList.add('animacionVer');
  btn10km.classList.add('animacionVer');
  notInEggs.classList.add('animacionVer');
};
const mouseOut2 = () => {
  eggData.classList.remove('animacionVer');
  btn2km.classList.remove('animacionVer');
  btn5km.classList.remove('animacionVer');
  btn10km.classList.remove('animacionVer');
  notInEggs.classList.remove('animacionVer');
};
const mouseOver3 = () => {
  typeData.classList.add('animacionVer');
  bug.classList.add('animacionVer');
  dark.classList.add('animacionVer');
  dragon.classList.add('animacionVer');
  electric.classList.add('animacionVer');
  fairy.classList.add('animacionVer');
  fighting.classList.add('animacionVer');
  fire.classList.add('animacionVer');
  flying.classList.add('animacionVer');
  ghost.classList.add('animacionVer');
  grass.classList.add('animacionVer');
  ground.classList.add('animacionVer');
  ice.classList.add('animacionVer');
  normal.classList.add('animacionVer');
  poison.classList.add('animacionVer');
  psychic.classList.add('animacionVer');
  rock.classList.add('animacionVer');
  steel.classList.add('animacionVer');
  water.classList.add('animacionVer');
};
const mouseOut3 = () => {
  typeData.classList.remove('animacionVer');
  bug.classList.remove('animacionVer');
  dark.classList.remove('animacionVer');
  dragon.classList.remove('animacionVer');
  electric.classList.remove('animacionVer');
  fairy.classList.remove('animacionVer');
  fighting.classList.remove('animacionVer');
  fire.classList.remove('animacionVer');
  flying.classList.remove('animacionVer');
  ghost.classList.remove('animacionVer');
  grass.classList.remove('animacionVer');
  ground.classList.remove('animacionVer');
  ice.classList.remove('animacionVer');
  normal.classList.remove('animacionVer');
  poison.classList.remove('animacionVer');
  psychic.classList.remove('animacionVer');
  rock.classList.remove('animacionVer');
  steel.classList.remove('animacionVer');
  water.classList.remove('animacionVer');
};
const mouseOver4 = () => {
  weaknessData.classList.add('animacionVer');
  bugw.classList.add('animacionVer');
  darkw.classList.add('animacionVer');
  dragonw.classList.add('animacionVer');
  electricw.classList.add('animacionVer');
  fairyw.classList.add('animacionVer');
  fightingw.classList.add('animacionVer');
  firew.classList.add('animacionVer');
  flyingw.classList.add('animacionVer');
  ghostw.classList.add('animacionVer');
  grassw.classList.add('animacionVer');
  groundw.classList.add('animacionVer');
  icew.classList.add('animacionVer');
  normalw.classList.add('animacionVer');
  poisonw.classList.add('animacionVer');
  psychicw.classList.add('animacionVer');
  rockw.classList.add('animacionVer');
  steelw.classList.add('animacionVer');
  waterw.classList.add('animacionVer');
};
const mouseOut4 = () => {
  weaknessData.classList.remove('animacionVer');
  bugw.classList.remove('animacionVer');
  darkw.classList.remove('animacionVer');
  dragonw.classList.remove('animacionVer');
  electricw.classList.remove('animacionVer');
  fairyw.classList.remove('animacionVer');
  fightingw.classList.remove('animacionVer');
  firew.classList.remove('animacionVer');
  flyingw.classList.remove('animacionVer');
  ghostw.classList.remove('animacionVer');
  grassw.classList.remove('animacionVer');
  groundw.classList.remove('animacionVer');
  icew.classList.remove('animacionVer');
  normalw.classList.remove('animacionVer');
  poisonw.classList.remove('animacionVer');
  psychicw.classList.remove('animacionVer');
  rockw.classList.remove('animacionVer');
  steelw.classList.remove('animacionVer');
  waterw.classList.remove('animacionVer');
};

orderData.addEventListener('mouseover', mouseOver1);
orderData.addEventListener('mouseout', mouseOut1);

eggData.addEventListener('mouseover', mouseOver2);
eggData.addEventListener('mouseout', mouseOut2);

typeData.addEventListener('mouseover', mouseOver3);
typeData.addEventListener('mouseout', mouseOut3);

weaknessData.addEventListener('mouseover', mouseOver4);
weaknessData.addEventListener('mouseout', mouseOut4);