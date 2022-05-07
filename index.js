//initialization of all variables needed 

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

//checkGuess function used to compare users input with randomNumber
//and perform three actions depending on outcome
//1)setGameOver() if user input is equal to randomNumber
//2)setGameOver() if user exhuast 10turns
//3)else continue game and printing whether guess is less or higher than randomNumber

function checkGuess() {
const userGuess = Number(guessField.value);
if (guessCount === 1) {
guesses.textContent = 'Previous guesses: ';
}
guesses.textContent += userGuess + ' ';

if (userGuess === randomNumber) {
lastResult.textContent = 'Congratulations! You got it right!';
lastResult.style.backgroundColor = 'green';
lowOrHi.textContent = '';
setGameOver();
} else if (guessCount === 10) {
lastResult.textContent = '!!!GAME OVER!!!';
lowOrHi.textContent = '';
setGameOver();
} else {
lastResult.textContent = 'Wrong!';
lastResult.style.backgroundColor = 'red';
if(userGuess < randomNumber) {
lowOrHi.textContent = 'Last guess was too low!';
} else if(userGuess > randomNumber) {
lowOrHi.textContent = 'Last guess was too high!';
}
}

guessCount++;
guessField.value = '';
guessField.focus();
}

//setGameOver() is a function used in the implementation of checkGuess()
//sets game over depending the outcome of checkGuess

function setGameOver() {
guessField.disabled = true;
guessSubmit.disabled = true;
resetButton = document.createElement('button');
resetButton.textContent = 'Start new game';
tag = document.querySelector('main');
tag.appendChild(resetButton);
resetButton.addEventListener('click', resetGame);
}

//resetGame() creates a button to reset game when either the player 
//wins or exhuasts turns

function resetGame() {
    guessCount = 1;
    
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
    resetPara.textContent = '';
    }
    
    resetButton.parentNode.removeChild(resetButton);
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    lastResult.style.backgroundColor = 'white';
    
    randomNumber = Math.floor(Math.random() * 100) + 1;
    }


//the eventlistener fires the checkGuess function which is intertwined with other functions
guessSubmit.addEventListener('click', checkGuess);

//styling using javascript

heading= document.querySelector('h1')

heading.style.backgroundColor = 'yellow';
heading.style.fontSize = '150%';
heading.style.padding = '10px';
heading.style.boxShadow = '3px 3px 6px black';
heading.style.textAlign = 'center'

bodyy = document.querySelector('body')

bodyy.style.fontSize = '150%';
bodyy.style.padding = '10px';



