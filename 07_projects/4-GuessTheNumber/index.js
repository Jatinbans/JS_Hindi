let randomNumber = parseInt(Math.random()*100 + 1);

//selectors
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#guessField')
const guessSlots = document.querySelector('.guesses')
const remaining = document.querySelector('.lasResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let preGuess = []
let numGuesses = 1
let playGame = true
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
       const guess =  parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    })
}

//functions

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess < 1){
        alert('Please enter a number less than 100')
    }else{
        preGuess.push(guess)
        if(numGuesses === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You gussed it right`)
        endGame()
    } else if(guess < randomNumber){
        displayGuess(`Number is too low`)

    }else if(guess < randomNumber){
        displayGuess(`Number is too high`)
    }

}


function displayGuess(guess){
    userInput.value = ''
    guessSlots.innerHTML += `${guess}  `
    numGuesses++;
    remaining.innerHTML = `${11- numGuesses}`
    
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id ="newGame">Start new Game</h2>'
    startOver.appendChild(p)
    newGame();
}


function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        preGuess = []
        numGuesses = 1;
        guess.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

