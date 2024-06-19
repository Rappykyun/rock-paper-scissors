function getComputerChoice(){
    const pick = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random()*pick.length);
    return pick[randomIndex];
}
function getHumanChoice(){
    const humanChoice = prompt("Please enter youre move: ")
    return humanChoice;
}
function playRound() {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    human = human.toLowerCase(); // Convert human input to lowercase and reassign

    if (human === "rock" && computer === "paper") {
        computerScore++;
        return console.log("You lose! Paper beats Rock");
    } else if (human === "paper" && computer === "rock") {
        humanScore++;
        return console.log("You Win! Paper beats Rock");
    } else if (human === "paper" && computer === "scissors") {
        computerScore++;
        return console.log("You lose! Scissors beats Paper");
    } else if (human === "scissors" && computer === "paper") {
        humanScore++;
        return console.log("You Win! Scissors beats Paper");
    } else if (human === "rock" && computer === "scissors") {
        humanScore++;
        return console.log("You Win! Rock beats Scissors");
    } else if (human === "scissors" && computer === "rock") {
        computerScore++;
        return console.log("You lose! Rock beats Scissors");
    } else {
        return console.log("It's a tie! Both chose " + human.charAt(0).toUpperCase() + human.slice(1));
    }
}

function playGame() {
    for(let i = 1;i<=5;i++){
        playRound()
    }
    if (humanScore > computerScore){
        return console.log(`Congrats You Win!\n Your Score: ${humanScore}\n Computer score: ${computerScore}`)
    } else {
        return console.log(`Sorry You lose!\n Your Score: ${humanScore}\n Computer score: ${computerScore}`)
    }

}

let humanScore = 0;
let computerScore = 0;
playGame();