const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
let pOneScore = document.querySelector('#pOneScore');
let pTwoScore = document.querySelector('#pTwoScore');
let maxScore = 5;
let gameOver = false;

playerOne.addEventListener('click', function () {
    updateScores(playerOne);
})
playerTwo.addEventListener('click', function () {
    updateScores(playerTwo);
})

document.querySelector('#maxScore').addEventListener('change', function (e) {
    maxScore = e.target.value;
    resetScores();
})

const updateScores = (player) => {
    if (!gameOver) {
        player === playerOne ? pOneScore.innerHTML++ : pTwoScore.innerHTML++;
        if (pOneScore.innerHTML == maxScore || pTwoScore.innerHTML == maxScore) {
            gameOver = true;
            if (pOneScore.innerHTML == maxScore) {
                pOneScore.style.color = 'green';
                pTwoScore.style.color = 'red';
            } else {
                pTwoScore.style.color = 'green';
                pOneScore.style.color = 'red';
            }
        }
    }
}

const resetScores = () => {
    pOneScore.innerHTML = 0;
    pTwoScore.innerHTML = 0;
    pOneScore.style.color = 'black';
    pTwoScore.style.color = 'black';
    gameOver = false;
}

document.querySelector('#reset').addEventListener('click', resetScores);