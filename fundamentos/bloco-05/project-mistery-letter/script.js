const textInput = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');
const letterWordsCounter = document.getElementById('carta-contador');

const classes = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright'],
  inclination: ['skewleft', 'skewright'],
};

function getRandomStyleClass() {
  const classStyle = classes.style;
  const classStyleLength = classes.style.length;
  const randomStyle = classStyle[Math.floor(Math.random() * classStyleLength)];
  return randomStyle;
}
function getRandomSizeClass() {
  const classSize = classes.size;
  const classSizeLength = classes.size.length;
  const randomSize = classSize[Math.floor(Math.random() * classSizeLength)];
  return randomSize;
}
function getRandomRotationClass() {
  const classRotation = classes.rotation;
  const classRotationLength = classes.rotation.length;
  const randomRotation = classRotation[Math.floor(Math.random() * classRotationLength)];
  return randomRotation;
}
function getRandomInclinationClass() {
  const classInclination = classes.inclination;
  const classInclinationLength = classes.inclination.length;
  const randomInclination = classInclination[Math.floor(Math.random() * classInclinationLength)];
  return randomInclination;
}

function addRandomClassToSpan() {
  const spans = generatedLetter.querySelectorAll('span');
  for (let i = 0; i < spans.length; i += 1) {
    const span = spans[i];
    span.classList.add(getRandomStyleClass());
    span.classList.add(getRandomSizeClass());
    span.classList.add(getRandomRotationClass());
    span.classList.add(getRandomInclinationClass());
  }
}

function changeClasses(event) {
  const span = event.target;
  span.classList = '';
  span.classList.add(getRandomStyleClass());
  span.classList.add(getRandomSizeClass());
  span.classList.add(getRandomRotationClass());
  span.classList.add(getRandomInclinationClass());
}

// Requirement 3
function separatePhraseToArrayOfWords() {
  const phrase = textInput.value;
  const words = phrase.split(' ');
  return words;
}
function createWordSpan() {
  const words = separatePhraseToArrayOfWords();
  const phrase = textInput.value;
  // Requirement 5
  if (phrase === '' || phrase.trim() === '') {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    generatedLetter.innerHTML = '';
    for (let i = 0; i < words.length; i += 1) {
      const wordSpan = document.createElement('span');
      const word = words[i];
      wordSpan.textContent = word;
      wordSpan.addEventListener('click', changeClasses);
      generatedLetter.appendChild(wordSpan);
    }
  }
}

// create function to count words in the phrase
function countWords() {
  const words = separatePhraseToArrayOfWords();
  const phrase = textInput.value;
  if (phrase === '' || phrase.trim() === '') {
    letterWordsCounter.innerText = '';
  } else {
    letterWordsCounter.innerText = words.length;
  }
}

createLetterButton.addEventListener('click', () => {
  createWordSpan();
  addRandomClassToSpan();
  countWords();
});
