const buttonCreateLetter = document.getElementById('criar-carta');
const inputOfText = document.getElementById('carta-texto');
const containerOfWordLetter = document.getElementById('carta-gerada');

buttonCreateLetter.addEventListener('click', () => {
  const stringFromArray = inputOfText.value.split(" ");
  for (const word of stringFromArray) {
    const wordLetter = document.createElement('span');
    wordLetter.innerHTML = word;
    containerOfWordLetter.appendChild(wordLetter);
  }
})
