let userScore = 0;
let computerScore = 0;

function getComputerChoice() { // Get random result of Rock, Paper or Scissors
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    return rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)];
}

function playRockPaperScissors(playerSelection) { //Play 1 round of the game returning a string of the result.
    let playerCapitalised = playerSelection.toUpperCase();
    let computerSelection = getComputerChoice();
    let computerCapitalised = computerSelection.toUpperCase();
    let result = "undecided"; //initialise result in case of an error

    if(playerCapitalised === "ROCK"){
        switch(computerCapitalised){
            case "ROCK":
                result = "draw";
                break;
            case "PAPER":
                result = "loss";
                break;
            case "SCISSORS":
                result = "win";
                break;
        }
    }
    else if(playerCapitalised === "PAPER") {
        switch(computerCapitalised){
            case "ROCK":
                result = "win";
                break;
            case "PAPER":
                result = "draw";
                break;
            case "SCISSORS":
                result = "loss";
                break;                
        }
    }
    else if(playerCapitalised === "SCISSORS") {
        switch(computerCapitalised){
            case "ROCK":
                result = "loss";
                break;
            case "PAPER":
                result = "win";
                break;
            case "SCISSORS":
                result = "draw";
                break;                
        }            
    }
    return [result, playerSelection, computerSelection];
}
            
       
function outputResultText(result) {
    let output = "undecided";
    const container = document.querySelector('body');
    const outputDiv = document.createElement('div');
    
    switch(result[0]){
        case "undecided":
            output = "Something went wrong, please try again.";                    
            break;
        case "draw":
            output = `It's a draw! You picked ${result[1]} and the computer picked ${result[2]}`;
            break;
        case "win":
            output = "You win! " + result[1] + " beats " + result[2];
            userScore++;
            break;
        case "loss": 
            output = "You lose " + result[2] + " beats " + result[1];
            computerScore++;
            break;
    }
    if(userScore === 5){
        output = `You win! ${userScore} - ${computerScore}`
        userScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        output = `You lose, ${userScore} - ${computerScore}`
        computerScore = 0;
        userScore = 0;
    }
    outputDiv.textContent = output;
    container.appendChild(outputDiv);
    return output;
    }

        

const playButtons = document.querySelectorAll('#playButton');
playButtons.forEach((playButton) => playButton.addEventListener('click', () => {
    playRound(playButton.textContent)}));

function playRound(playerSelection)
{                              
    return outcome = outputResultText(playRockPaperScissors(playerSelection));
};
        

        