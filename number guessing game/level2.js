let randomNumber = parseInt((Math.random()*30)+1);

const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const startOver = document.querySelector('.resultParas')

const lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let previousGuesses = [];

let numGuesses = 1;

let playGame = true;

let restartBtn=$('#restart')

restartBtn.hide()

if (playGame){

    subt.addEventListener('click' , function(e) {

        e.preventDefault();

        const guess = parseInt(userInput.value);

        validateGuess(guess);

    });
    
};

function validateGuess(guess){

    if (isNaN(guess)){

        alert('Please enter a valid number')
   
    } else if (guess < 1) {

        alert('Please enter a number greater than 1!')

    } else {

        //keep record of number of attempted guesses

        previousGuesses.push(guess);

        //Check to see if game is over

        if (numGuesses === 11){

            displayGuesses(guess);

            displayMessage(`Game Over! Number was ${randomNumber}`);

            endGame();

        } else {

            //Display previous guessed numbers

            displayGuesses(guess)

            //check guess and display if wrong

             checkGuess(guess); 

        }

    }
    
};

function checkGuess(guess){

    //display clue if guess is too high or too low

    if (guess === randomNumber){

        displayMessage(`You guessed correctly!`)

        endGame();

    }else if (guess < randomNumber){

        displayMessage(`Too low! Try Again! `)

    }else if (guess > randomNumber){

        displayMessage(`Too High! Try Again!`)
   
    }

};

function displayGuesses(guess){

    restartBtn.show()

    userInput.value = '';

    guessSlot.innerHTML += `<span class = "guess_div">${guess}  </span>`;

    numGuesses++

    remaining.innerHTML = `${11 - numGuesses}  `;

};

function displayMessage(message){

lowOrHi.innerHTML = `<h1>${message}</h1>`

};
    
function endGame(){

    //clear user input

    userInput.value = '';

    //disable user input button 

    userInput.setAttribute('disabled', '');

    //display start new game button

    p.classList.add('button');

    p.innerHTML = `<h1 id = "newGame">Now go to next level</h1>`

    startOver.appendChild(p);

    playGame = false;

    restartBtn.hide()

    newGame();

}    ;
    
function newGame(){

    const newGameButton = document.querySelector('#newGame')

newGameButton.addEventListener('click',function(){

    //pick a new random number

    randomNumber = parseInt((Math.random()*30)+1);

    previousGuesses = [];

    numGuesses = 1;

    guessSlot.innerHTML = '';

    lowOrHi.innerHTML = '';

    remaining.innerHTML = `${11 - numGuesses}`

    userInput.removeAttribute('disabled');

startOver.removeChild(p);

playGame = true;

})

};
   $('#restart').click(function () {

    randomNumber = parseInt((Math.random()*30)+1);

    previousGuesses = [];

    numGuesses = 1;

    guessSlot.innerHTML = '';

    lowOrHi.innerhtml = '';

    remaining.innerHTML = `${11 - numGuesses}`

    userInput.removeAttribute('disabled');

    startOver.removeChild(p);

    playGame = true;
    
});







