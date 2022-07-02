const btnStart = document.querySelector('#btnStart');
const btnReset = document.querySelector('#btnReset');
const cards = document.querySelectorAll('.cards__img');
const button = document.querySelector('.nav__button');
const bars = document.querySelector('.nav__button-bars');
const cross = document.querySelector('.nav__button-cross');
const list = document.querySelector('.nav__list');
const resultsIn = document.getElementById('quantum');
const result = document.getElementById('result');

let isBtnStartActive = true;
let isBtnResetActive = false;
let isCardActive = false;
let counterCards = 0;
let rand = 0;
let numberCard = 0;
let cardActive;
let numberOfAttempts = 0;
let results = 0;
let maxNumberOfAttempts = 0;
let isGameOver = false;

button.addEventListener('click', () => {
  list.classList.toggle('nav__list--visible');
  cross.classList.toggle('nav__button-cross--visible');
  bars.classList.toggle('nav__button-bars--visible');
});

btnStart.addEventListener('click', () => {
  if (isBtnStartActive) {
    if (!isGameOver) {
      maxNumberOfAttempts = prompt(
        'Wpisz ile razy chcesz zagrać, max. 20 razy'
      );
      isGameOver = true;
    }

    for (const card of cards) {
      card.classList.remove('reset');
      card.classList.add('back');
      card.style.backgroundImage = 'url("../images/back-small.png")';
    }

    isBtnStartActive = false;
    isCardActive = true;

    btnStart.classList.remove('buttons__item--active');
  }
});

const url = [
  'url("../images/dama-karo-small.png")',
  'url("../images/dama-pik-small.png")',
  'url("../images/dama-kier-small.png")',
];

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    counterCards++;
    if (isCardActive) {
      if (counterCards === 1) {
        rand = Math.floor(Math.random() * 3);

        isBtnResetActive = false;
        isBtnStartActive = false;

        card.style.backgroundImage = url[rand];
        card.classList.add('front');

        if (rand === 1) {
          alert('Gratulacje, znalazłeś damę pik');
          isBtnResetActive = true;
          isCardActive = false;
          counterCards = 0;
          btnReset.classList.add('buttons__item--active');
          numberOfAttempts++;
          results++;
        } else {
          alert('Pudło, to nie dama pik');
          numberCard = Number(e.currentTarget.dataset.numberCard);
          switch (numberCard) {
            case 0:
              document
                .querySelector('[data-number-card="1"]')
                .classList.add('cards__img--active');
              document
                .querySelector('[data-number-card="1"]')
                .classList.remove('back');
              break;
            case 1:
              document
                .querySelector('[data-number-card="2"]')
                .classList.add('cards__img--active');
              document
                .querySelector('[data-number-card="2"]')
                .classList.remove('back');
              break;
            case 2:
              document
                .querySelector('[data-number-card="1"]')
                .classList.add('cards__img--active');
              document
                .querySelector('[data-number-card="1"]')
                .classList.remove('back');
              break;
          }
          cardActive = document.querySelector('.cards__img--active');
        }
      } else if (counterCards === 2) {
        cardActive.style.backgroundImage = url[1];
        cardActive.classList.remove('cards__img--active');
        cardActive.classList.add('front');
        isBtnResetActive = true;
        btnReset.classList.add('buttons__item--active');
        counterCards = 0;
        numberOfAttempts++;
      }
    }
  });
});

btnReset.addEventListener('click', () => {
  if (isBtnResetActive) {
    for (const card of cards) {
      card.classList.remove('back');
      card.classList.remove('front');
      card.classList.add('reset');
    }
    cards[0].style.backgroundImage = 'url("../images/dama-karo-small.png")';
    cards[1].style.backgroundImage = 'url("../images/dama-pik-small.png")';
    cards[2].style.backgroundImage = 'url("../images/dama-kier-small.png")';

    isBtnResetActive = false;
    isBtnStartActive = true;

    btnReset.classList.remove('buttons__item--active');
    btnStart.classList.add('buttons__item--active');
    result.value = results.toString();
    resultsIn.value = numberOfAttempts.toString();
    console.log(typeof maxNumberOfAttempts);
    console.log(typeof numberOfAttempts);
    if (numberOfAttempts.toString() === maxNumberOfAttempts) {
      alert('Koniec gry, zagraj ponownie');
      isGameOver = false;
      numberOfAttempts = 0;
      maxNumberOfAttempts = '0';
      result.value = 0;
      resultsIn.value = 0;
    }
  }
});
