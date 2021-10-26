let playerSelection;
let computerSelection;

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    generateRandomWord();
    computerSelection = generateRandomWord();
    playerSelection = "paper";
    console.log(computerSelection);
    decideOutcome(playerSelection, computerSelection);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    generateRandomWord();
    computerSelection = generateRandomWord();
    playerSelection = "scissors";
    console.log(computerSelection);
    decideOutcome(playerSelection, computerSelection);
});



const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    generateRandomWord();
    computerSelection = generateRandomWord();
    playerSelection = "rock";
    console.log(computerSelection);
    decideOutcome(playerSelection, computerSelection);
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
    } 
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("you won, computer lost");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("you won, computer lost");
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("computer won, you lost");
        
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("you won, computer lost");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("computer won, you lost");
    }
    else {
        console.log("it's a tie")
    }
}

function playOneGame() {

    const computerSelection = generateRandomWord();

    generateRandomWord();
    decideOutcome(playerSelection, computerSelection);
    console.log(scorePlayer, scoreComputer);
}





