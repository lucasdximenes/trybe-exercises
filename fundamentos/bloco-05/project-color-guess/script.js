const randomRgbText = document.getElementById('rgb-color');
const colorBallsSection = document.getElementById('color-balls');
const answerMessage = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const score = document.getElementById('score');

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}
function getRgbColor() {
  const r = getRandomNumber();
  const g = getRandomNumber();
  const b = getRandomNumber();
  return `rgb(${r}, ${g}, ${b})`;
}

function resultMessage(bool) {
  if (bool) {
    answerMessage.innerHTML = 'Acertou!';
  } else {
    answerMessage.innerHTML = 'Errou! Tente novamente!';
  }
}

function addScore(bool) {
  if (bool) {
    score.innerHTML = Number(score.innerHTML) + 3;
  }
}

function checkIfBallColorIsSameThanText(event) {
  const ballColor = event.target.style.backgroundColor;
  const rgbText = randomRgbText.innerHTML;
  if (ballColor === rgbText) {
    resultMessage(true);
    addScore(true);
  } else {
    resultMessage(false);
  }
}

function addBallsAndColors() {
  for (let i = 1; i <= 6; i += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.width = '75px';
    ball.style.height = '75px';
    ball.addEventListener('click', checkIfBallColorIsSameThanText);
    ball.style.backgroundColor = getRgbColor();
    colorBallsSection.appendChild(ball);
  }
}

function addRgbTextToRandomBall() {
  const balls = document.querySelectorAll('.ball');
  const randomBall = balls[Math.floor(Math.random() * balls.length)];

  randomBall.style.backgroundColor = randomRgbText.innerHTML;
}

function initializeGame() {
  randomRgbText.innerHTML = getRgbColor();
  addBallsAndColors();
  addRgbTextToRandomBall();
}
initializeGame();

resetButton.addEventListener('click', () => {
  colorBallsSection.innerHTML = '';
  answerMessage.innerHTML = 'Escolha uma cor';
  initializeGame();
});
