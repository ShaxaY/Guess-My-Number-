'use strict';

let secretNumber = 0;
let score = 0;

const newGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

newGame();

document.querySelector('.again').addEventListener('click', newGame);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //If no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!💥';

    // When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //If Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!🥺';
      document.querySelector('.score').textContent = 0;
    }
    //if Gues too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!🥺';
      document.querySelector('.score').textContent = 0;
    }
  }
});
