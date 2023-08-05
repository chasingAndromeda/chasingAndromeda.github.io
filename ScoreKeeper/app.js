const playerOneButt = document.querySelector('#playerOne');
const playerTwoButt = document.querySelector('#playerTwo');
const scoreValue = document.querySelector('#scoreValue');
const resetButt = document.querySelector('#reset');
const form = document.querySelector('form');
const numGames = document.querySelector('#numGamesValue');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

let playerOneScore = 0;
let playerTwoScore = 0;
let numGamesValue = 1;
let isGameFinished = false;

playerOneButt.addEventListener('click', function(){
    if (!isGameFinished){
        playerOneScore = ++playerOneScore;
        p1Score.innerText = `${playerOneScore}`;
        checkIfNumGamesReached();
    }
})

playerTwoButt.addEventListener('click', function(){
    if (!isGameFinished){
        playerTwoScore = ++playerTwoScore;
        p2Score.innerText = `${playerTwoScore}`;
        checkIfNumGamesReached();
    }
})

resetButt.addEventListener('click', reset)

form.addEventListener('change', function(){
    numGamesValue = numGames.value;
    reset();
})

function reset(){
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneButt.removeAttribute('disabled');
    playerTwoButt.removeAttribute('disabled');
    p1Score.innerText = `${playerOneScore}`;
    p2Score.innerText = `${playerTwoScore}`;
    p1Score.style.color = null;
    p2Score.style.color = null;
    isGameFinished = false;
}

function checkIfNumGamesReached(){
    if (playerOneScore === parseInt(numGamesValue) || playerTwoScore === parseInt(numGamesValue)){
        playerOneButt.setAttribute('disabled', true);
        playerTwoButt.setAttribute('disabled', true);
        isGameFinished = true;
        if (playerOneScore === parseInt(numGamesValue)){
            p1Score.style.color = 'green';
            p2Score.style.color = 'red';
        }
        else if (playerTwoScore === parseInt(numGamesValue)){
            p1Score.style.color = 'red';
            p2Score.style.color = 'green';
        }
    }
}