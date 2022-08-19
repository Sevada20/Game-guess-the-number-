let generatedNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const num = +document.querySelector('.guess').value;

  if(score === 0) return;

  if(num === generatedNumber){
    displayMessage('You win');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = generatedNumber;

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    displayMessage( num > generatedNumber ? 'Too high' : 'Too law');
    score--;
    document.querySelector('.score').textContent = score;

    if(!score){
      displayMessage('Game over');

    }
  }
})

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  generatedNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = 'black';
})

function displayMessage(msg){
  document.querySelector('.message').textContent = msg;;
}
