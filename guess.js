'use strict';
let score = 20;
let highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('#q').textContent = secretNumber;
document.querySelector('#checkk').addEventListener('click', function () {
  let number = Number(document.querySelector('#text').value);
  if (!number || number > 20 || number < 1) {
    document.querySelector('#start').textContent = 'No Number...';
  } else if (number === secretNumber) {
    document.querySelector('#start').textContent = 'You Win :)';
    document.querySelector('body').style.backgroundColor = 'brown';
    document.querySelector('#q').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.hiscore').textContent = highscore;
    }
  } else if (number > secretNumber) {
    if (score > 1) {
      document.querySelector('#start').textContent = 'Too High!';
      score--;
      document.querySelector('.scoreno').textContent = score;
    } else {
      document.querySelector('#start').textContent = 'You lose :(';
      document.querySelector('.scoreno').textContent = 0;
    }
  } else if (number < secretNumber) {
    if (score > 1) {
      document.querySelector('#start').textContent = 'Too low!';
      score--;
      document.querySelector('.scoreno').textContent = score;
    } else {
      document.querySelector('#start').textContent = 'You lose :(';
      document.querySelector('.scoreno').textContent = 0;
    }
  }
});
document.querySelector('#again').addEventListener('click', function () {
  document.querySelector('#start').textContent = 'Start Guessing....';
  document.querySelector('.scoreno').textContent = 20;
  // document.querySelector('#hscore').textContent = 'Highscore : 0';
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('#q').textContent = secretNumber;
  document.querySelector('#text').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('#q').textContent = '?';
});
