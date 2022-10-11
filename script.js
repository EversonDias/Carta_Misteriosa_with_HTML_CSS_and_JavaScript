const buttonCreateLetter = document.getElementById('criar-carta');
const inputOfText = document.getElementById('carta-texto');
const containerOfWordLetter = document.getElementById('carta-gerada');
const countLetter = document.getElementById('carta-contador');

const objectOfStyles = [
  [
    'newspaper',
    'magazine1',
    'magazine2',
  ],
  [
    'medium',
    'big',
    'reallybig',
  ],
  [
    'rotateleft',
    'rotateright',
  ],
  [
    'skewleft',
    'skewright',
  ],
];

function numberRandom(max) {
  const number = Math.floor(Math.random() * max);
  return number;
}

function generateOfClass() {
  return `${objectOfStyles[0][numberRandom(3)]} ${objectOfStyles[1][numberRandom(3)]} ${objectOfStyles[2][numberRandom(2)]} ${objectOfStyles[3][numberRandom(2)]}`;
}

function selectedClass(event) {
  const listClass = generateOfClass();
  if (event.target.classList.value !== listClass) {
    event.target.className = listClass;
  } else {
    event.target.className = generateOfClass();
  }
}

buttonCreateLetter.addEventListener('click', () => {
  const stringFromArray = inputOfText.value.split(' ');
  if (stringFromArray[0]) {
    containerOfWordLetter.innerHTML = ' ';
  }
  for (const word of stringFromArray) {
    if (word) {
      const wordLetter = document.createElement('span');
      wordLetter.innerHTML = word;
      wordLetter.className = generateOfClass();
      wordLetter.addEventListener('click', selectedClass);
      containerOfWordLetter.appendChild(wordLetter);
    }
  }
  countLetter.innerHTML = stringFromArray.length;
});
