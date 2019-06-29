const btnLogin = document.getElementById('btn-login');
const loginInput = document.getElementsByClassName('login-input')[0];
const formLogin = document.getElementById('login');
const message = document.getElementById('message');
const classContenedor = document.getElementById('contenedor');
message.classList.add('hide');

const loginAccess = () => {
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  if (email === 'LABORATORIA' && password === 'LABORATORIA') {
    formLogin.classList.add('hide');
    loginInput.classList.add('hide');
    document.body.style.backgroundImage = 'url("img/fondop3.jpg")';
    displayData();
    getSpawn();
  } else {
    message.classList.remove('hide');
    message.innerHTML = 'Usuario o password incorrectos';
  };
};

btnLogin.addEventListener('click', loginAccess);

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

const mouseOver = () => {
  classContenedor.classList.add('animacionVer');
  btn1.classList.add('animacionVer');
  btn2.classList.add('animacionVer');
  btn3.classList.add('animacionVer');
  btn4.classList.add('animacionVer');
  btn5.classList.add('animacionVer');
};
const mouseOut = () => {
  classContenedor.classList.remove('animacionVer');
  btn1.classList.remove('animacionVer');
  btn2.classList.remove('animacionVer');
  btn3.classList.remove('animacionVer');
  btn4.classList.remove('animacionVer');
  btn5.classList.remove('animacionVer');
};

btn1.addEventListener('mouseover', mouseOver);
classContenedor.addEventListener('mouseout', mouseOut);


