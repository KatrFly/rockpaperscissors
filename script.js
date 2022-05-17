let playerSelection;
let computerSelection;
let scorePlayer = 0;
let scoreComputer = 0;
let amountGames = 0;

const body = document.querySelector("#body");

const score = document.createElement('div');
body.appendChild(score);

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    generateRandomWord();
    computerSelection = generateRandomWord();
    playerSelection = "paper";
    console.log(computerSelection);
    decideOutcome(playerSelection, computerSelection);
    score.textContent = scorePlayer + " - " + scoreComputer;
    amountGames = amountGames + 1;
    if (amountGames < 5) {
        score.textContent = scorePlayer + " - " + scoreComputer;
    }
    else if (scorePlayer < scoreComputer) {
        score.textContent = "The computer won, try again!";
    }
    else if (scoreComputer < scorePlayer) {
        score.textContent = "Congratulations, you won!";
    }
    else {
        score.textContent = "it's a tie, play again!"
    }
    
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    generateRandomWord();
    computerSelection = generateRandomWord();
    playerSelection = "scissors";
    console.log(computerSelection);
    decideOutcome(playerSelection, computerSelection);
    amountGames = amountGames + 1;
    if (amountGames < 5) {
        score.textContent = scorePlayer + " - " + scoreComputer;
    }
    else if (scorePlayer < scoreComputer) {
        score.textContent = "The computer won, try again!";
    }
    else if (scoreComputer < scorePlayer) {
        score.textContent = "Congratulations, you won!";
    }
    else {
        score.textContent = "it's a tie, play again!"
    }
    
    
});

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    generateRandomWord();
    computerSelection = generateRandomWord();
    playerSelection = "rock";
    console.log(computerSelection);
    decideOutcome(playerSelection, computerSelection);
    score.textContent = scorePlayer + " - " + scoreComputer;
    amountGames = amountGames + 1;
    if (amountGames < 5) {
        score.textContent = scorePlayer + " - " + scoreComputer;
    }
    else if (scorePlayer < scoreComputer) {
        score.textContent = "The computer won, try again!";
    }
    else if (scoreComputer < scorePlayer) {
        score.textContent = "Congratulations, you won!";
    }
    else {
        score.textContent = "it's a tie, play again!"
    }
    
});

function generateRandomWord() {

    let randomNumber = Math.floor(Math.random()*3+1);
    
    if (randomNumber == parseInt(1)) {
        return "rock";
    }
    else if (randomNumber == parseInt(2)) {
        return "scissors";
    }
    else if (randomNumber == parseInt(3)) {
        return "paper";
    }
    else {
        alert("something went wrong");
    }
}

function decideOutcome (playerSelection, computerSelection) {

    console.log("jij hebt " + playerSelection + " gekozen, de computer heeft " + computerSelection +" gekozen.");
    
    if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("computer won, you lost");
        return scoreComputer = scoreComputer +1;
    } 
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("you won, computer lost");
        return scorePlayer = scorePlayer +1;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("you won, computer lost");
        return scorePlayer = scorePlayer +1;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("computer won, you lost");
        return scoreComputer = scoreComputer +1;
        
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("you won, computer lost");
        return scorePlayer = scorePlayer +1;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("computer won, you lost");
        return scoreComputer = scoreComputer +1;
    }
    else {
        console.log("it's a tie")
    }
}
