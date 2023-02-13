        function getComputerChoice() { // Get random result of Rock, Paper or Scissors
            const rockPaperScissors = ["Rock", "Paper", "Scissors"];
            return rockPaperScissors[Math.floor(Math.random()* rockPaperScissors.length)];
        }

        function playRockPaperScissors(playerSelection) { //Play 1 round of the game returning a string of the result.
            let playerCapitalised = playerSelection.toUpperCase();
            let computerSelection = getComputerChoice();
            let computerCapitalised = computerSelection.toUpperCase();
            let result = "undecided";

            //console.log(playerCapitalised);
            //console.log(computerCapitalised);

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
            
            
            switch(result[0]){
                case "undecided":
                    output = "Something went wrong, please try again.";
                    
                    break;
                case "draw":
                    output = `It's a draw! You picked ${result[1]} and the computer picked ${result[2]}`;
                    break;
                case "win":
                    output = "You win! " + result[1] + " beats " + result[2];
                    break;
                case "loss": 
                    output = "You lose " + result[2] + " beats " + result[1];
                    break;
            }
            return output;
            }

        

            const playButtons = document.querySelectorAll('#playButton');
            playButtons.forEach((playButton) => {
                playButton.addEventListener('click', () => {                                        
                    console.log(outputResultText(playRockPaperScissors(playButton.textContent)));
                });
            });

            function checkButton() {

            }
            
           
        
       /*function game() { //game of 5 rounds, counting the score

            //for loop up to 5 games
            let userScore = 0;
            let computerScore = 0;
            for(let i = 0; i < 5; i++) { //iterate through 5 games
                let result = playRockPaperScissors(prompt(), getComputerChoice()); //store array of result, playerchoice, computerchoice
                console.log(outputResultText(result)); //show who won each round
            
                switch(result[0]) { //track the score
                    case "win":
                        userScore++;
                        break;
                    case "loss":
                        computerScore++;
                        break;
                } 
            }
            console.log(`Final Score is ${userScore} - ${computerScore}`); //Output final score
            if(userScore > computerScore) {
                console.log(`Congratulations, you won!`)
            }
            else if(userScore < computerScore) {
                console.log(`Unlucky, you lost.`)
            }
            else {
                console.log(`It's a tie.`)
            }
            } */

        //game();    
 

        