const btnStart = document.querySelector('.buttons button:nth-child(1)');
const btnReset = document.querySelector('.buttons button:nth-child(2)');
const cards = document.querySelectorAll('.card');

console.log(cards);

btnStart.addEventListener('click', () => {
  for (const card of cards) {
    card.classList.toggle('rotated');
  }

  // cards[0].classList.toggle('sort');
  // cards[1].classList.toggle('sort');
  // cards[2].classList.toggle('sort');

  btnStart.style.display = 'none';
  btnReset.style.display = 'none';
});

btnReset.addEventListener('click', () => {
  for (const card of cards) {
    card.classList.remove('rotated');
  }
});

for (const card of cards) {
  card.addEventListener('click', () => {
    card.classList.remove('rotated');
    card.classList.remove('reverse-sort');
    card.classList.remove('sort');
    card.classList.add('reverse-rotated');
  });
}
