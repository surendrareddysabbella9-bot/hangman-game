const words = [
  "python",
  "developer",
  "internship",
  "computer",
  "programming",
  "python",
  "laptop",
  "mobile",
  "keyboard",
  "monitor",
  "internet",
  "computer",
  "developer",
  "software",
  "programming",
];

let selectedWord = "";
let guessedLetters = [];
let attempts = 6;

const wordDisplay = document.getElementById("wordDisplay");
const keyboard = document.getElementById("keyboard");
const attemptsText = document.getElementById("attempts");
const message = document.getElementById("message");

function startGame() {
  selectedWord = words[Math.floor(Math.random() * words.length)];

  guessedLetters = [];
  attempts = 6;

  attemptsText.textContent = attempts;
  message.textContent = "";

  createKeyboard();
  updateWordDisplay();
}

function createKeyboard() {
  keyboard.innerHTML = "";

  for (let i = 65; i <= 90; i++) {
    const button = document.createElement("button");

    button.textContent = String.fromCharCode(i);

    button.addEventListener("click", () =>
      handleGuess(button.textContent.toLowerCase(), button),
    );

    keyboard.appendChild(button);
  }
}

function handleGuess(letter, button) {
  button.disabled = true;

  guessedLetters.push(letter);

  if (selectedWord.includes(letter)) {
    updateWordDisplay();
  } else {
    attempts--;
    attemptsText.textContent = attempts;
  }

  checkGameStatus();
}

function updateWordDisplay() {
  const display = selectedWord
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  wordDisplay.textContent = display;
}

function checkGameStatus() {
  const won = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  if (won) {
    message.textContent = "🎉 You Won!";
    disableKeyboard();
  }

  if (attempts === 0) {
    message.textContent = `💀 Game Over! Word was "${selectedWord}"`;

    disableKeyboard();
  }
}

function disableKeyboard() {
  const buttons = keyboard.querySelectorAll("button");

  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function restartGame() {
  startGame();
}

startGame();
