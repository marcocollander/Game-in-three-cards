const btnStart = document.querySelector('#btnStart');
const btnReset = document.querySelector('#btnReset');
const cards = document.querySelectorAll('.cards__img');
const button = document.querySelector('.nav__button');
const bars = document.querySelector('.nav__button-bars');
const cross = document.querySelector('.nav__button-cross');
const list = document.querySelector('.nav__list');

let isBtnStartActive = true;
let isBtnResetActive = false;
let isCardActive = false;
let counterCards = 0;

button.addEventListener('click', () => {
  list.classList.toggle('nav__list--visible');
  cross.classList.toggle('nav__button-cross--visible');
  bars.classList.toggle('nav__button-bars--visible');
});

btnStart.addEventListener('click', () => {
  if (isBtnStartActive) {
    for (const card of cards) {
      card.classList.add('rotated');
      card.classList.remove('rotatedBis');
      card.style.backgroundImage = 'url("../images/back-small.png")';
    }

    isBtnStartActive = false;
    isBtnResetActive = true;
    isCardActive = true;
  }
});

btnReset.addEventListener('click', () => {
  if (isBtnResetActive) {
    for (const card of cards) {
      card.classList.remove('rotated');
      card.classList.add('rotatedBis');
    }
    cards[0].style.backgroundImage = 'url("../images/dama-karo-small.png")';
    cards[1].style.backgroundImage = 'url("../images/dama-pik-small.png")';
    cards[2].style.backgroundImage = 'url("../images/dama-kier-small.png")';

    isBtnResetActive = false;
    isBtnStartActive = true;
  }
});

const url = [
  'url("../images/dama-karo-small.png")',
  'url("../images/dama-pik-small.png")',
  'url("../images/dama-kier-small.png")',
];

cards.forEach((card) => {
  let rand = 0;
  console.log(card);
  card.addEventListener('click', () => {
    if (isCardActive && counterCards < 3) {
      counterCards++;
      rand = Math.floor(Math.random() * 3);
      console.log(rand);
      card.style.backgroundImage = url[rand];
      card.classList.remove('rotated');
      card.classList.add('rotatedBis');
      isBtnResetActive = false;
      isBtnStartActive = false;
    } else {
      isCardActive = false;
      counterCards = 0;
      isBtnResetActive = true;
      isBtnStartActive = false;
    }
  });
});
