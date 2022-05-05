const choices = ["rock", "paper", "scissors"]
const winners =[];

//this function will return a random string of rock, paper or scissors
function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

//this function will prompt the player for an input and will verify if it's a valid input and part of the choices
function playerChoice(){
    let input = prompt("Choose: Rock, Paper or Scissors");
    while(input === null){
        input = prompt("Choose: Rock, Paper or Scissors");
    }
    input = input.toLowerCase()
    let check = validateInput(input);
    while(check == false){
        input = prompt("Choose: Rock, Paper or Scissors");
    while(input == null){
        input = prompt("Choose: Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input;
}

// this function makes sure the input in playerChoice() is included in the variable choices
function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    }else{
        return false;
    }
}



//will check who will win
function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return `It's a tie!`;
    }else if((choiceP === "rock" && choiceC === "scissors") ||
            (choiceP === "paper" && choiceC === "rock") ||
            (choiceP === "scissors" && choiceC ==="paper")){
        return `Player won!`;
            }else{
                return `Computer won!`;
            }
}

//play one round
function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);

}


//this function will play a game of 5 rounds of rock paper scissors
function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(i)
    }
    logWins();
}


//log in the winner of the round
function logWins(){
    let playerWins = winners.filter((item) => item == `Player won!`).length;
    let computerWins = winners.filter((item) => item == `Computer won!`).length;
    let ties = winners.filter((item) => item ==`It's a tie!`).length;
    console.log("Results")
    console.log("Player wins:",playerWins)
    console.log("Computer wins:", computerWins)
    console.log("Ties:", ties)
}

//check what the player and the computer choose in the round
function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round",round);
    console.log("Player Choose:",playerChoice);
    console.log("Computer Choose:",computerChoice);
    console.log("-------------------------------")
}

playGame();