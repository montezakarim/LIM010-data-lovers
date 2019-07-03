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
    displayData();
  } else {
    message.classList.remove('hide');
    message.innerHTML = 'Usuario o password incorrectos';
  };
};

btnLogin.addEventListener('click', loginAccess);
