const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const resultMessage = document.getElementById('resultMessage');
const humanScores = document.getElementById('humanScore');
const computerScores = document.getElementById('computerScore');

btnRock.addEventListener('click', function() {
    playRound('rock');
});
btnPaper.addEventListener('click', function() {
    playRound('paper');
});
btnScissors.addEventListener('click', function() {
    playRound('scissors');
});

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * pick.length);
    return pick[randomIndex];
}

function playRound(human) {
    let computer = getComputerChoice();
    human = human.toLowerCase(); 

    if (human === "rock" && computer === "paper") {
        computerScore++;
        resultMessage.innerText = "You lose! Paper beats Rock";
    } else if (human === "paper" && computer === "rock") {
        humanScore++;
        resultMessage.innerText = "You Win! Paper beats Rock";
    } else if (human === "paper" && computer === "scissors") {
        computerScore++;
        resultMessage.innerText = "You lose! Scissors beats Paper";
    } else if (human === "scissors" && computer === "paper") {
        humanScore++;
        resultMessage.innerText = "You Win! Scissors beats Paper";
    } else if (human === "rock" && computer === "scissors") {
        humanScore++;
        resultMessage.innerText = "You Win! Rock beats Scissors";
    } else if (human === "scissors" && computer === "rock") {
        computerScore++;
        resultMessage.innerText = "You lose! Rock beats Scissors";
    } else {
        resultMessage.innerText = "It's a tie! Both chose " + human.charAt(0).toUpperCase() + human.slice(1);
    }

    humanScores.innerText = humanScore;
    computerScores.innerText = computerScore;

    if (humanScore === 5) {
        resultMessage.innerText = "Congratulations! You win the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultMessage.innerText = "Sorry! You lose the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScores.innerText = humanScore;
    computerScores.innerText = computerScore;
}
