let scoreComputer = 0;
let scorePlayer = 0;


    function generateRandomWord() {

        let randomNumber = Math.floor(Math.random()*3+1);
        
        if (randomNumber == parseInt(1)) {
            return "rock";
        }
        else if (randomNumber == parseInt(2)) {
            return "scissor";
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
    
    if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("computer won, you lost");
        return scoreComputer = scoreComputer +1;
    } 
    else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log("you won, computer lost");
        return scorePlayer = scorePlayer +1;
    }
    else if (playerSelection == "rock" && computerSelection == "scissor") {
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
    else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("computer won, you lost");
        return scoreComputer = scoreComputer +1;
    }
    else {
        console.log("it's a tie")
    }
}

function playOneGame() {

    const computerSelection = generateRandomWord();
    const playerSelection = prompt("kies eentje", "");

    generateRandomWord();
    decideOutcome(playerSelection, computerSelection);
    console.log(scorePlayer, scoreComputer);
}

function playFiveGames() {
    playOneGame();
    playOneGame();
    playOneGame();
    playOneGame();
    playOneGame();

    (scorePlayer < scoreComputer) ? console.log("Sadly, you lost. Try again!") : console.log("congrats, you won!");
}

playFiveGames();





//computerPlay creëeren, geeft at random rock, paper of scissors terug.
//random nummer genereren
//op basis van dat nummer een woord kiezen
//variabele playerSelection maken
//keuze speler vragen
//computerSelection identificeren

//functie maken die deze twee vergelijkt
//als -verschillende opties + gelijk spelen
//aangeven wie wint

//2 variabelen maken, eentje voor score persoon en een voor score computer
//+ 1 toevoegen aan de juiste if-statements
//scores weergeven
//teller maken die telt tot 5
//if-else loop maken die weergeeft wie op het einde gewonnen heeft. 
