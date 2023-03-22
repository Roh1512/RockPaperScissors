const choices = ["rock" ,"scissors" ,"paper"];
function game() { // Play 5 rounds
    let pp = 0;
    let cp = 0;
    for(let i = 0 ; i < 5 ; i++){
        let currentRoundWinner = playRound();
        if(currentRoundWinner === "player"){
            pp = pp + 1;
        }else if(currentRoundWinner === "computer"){
            cp = cp + 1;
        }
    }
    console.log(`Your Poins = ${pp}.`);
    console.log(`Computer points = ${cp}.`);
    if(pp > cp){
        console.log("Game Over! Congratulations, You Won.");
        alert ("Game Over! Congratulations, You Won.");
    }else if(cp > pp){
        console.log("Game Over! Sorry, You Lost.");
        alert("Game Over! Sorry, You Lost.");
    }else{
        console.log("Game Over! Its a Tie.");
        alert("Game Over! Its a Tie.");
    }
}

function playRound() { // A single round
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log("Computer Selected :", computerSelection.toUpperCase());
    let rwinner = roundWinner(playerSelection, computerSelection);
    console.log("...................................");
    return rwinner;
}


function getComputerChoice() { // Get computer sellection
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice() { //Get Player Selection
    let input = prompt("Type \"Rock\" , \"Paper\" , or \"Scissors\"");
    while (input == null){ //When cancel is pressed, reprompt the question
        type = prompt("Type \"Rock\" , \"Paper\" , or \"Scissors\"");
    }
    input = input.toLowerCase();
    let check = validateInput(input); //Validate if the input is correct
    while (check == false) {
        input = prompt("Make sure you have entered a correct choice.");
    }
    input = input.toLowerCase();
    console.log("Player selected : ",input.toUpperCase());
    return input;
}

function validateInput(choice){ //Check if the input is the member of the array elements in choices
    return choices.includes(choice);
}

function roundWinner(choicePlayer,choiceComputer) { //Checks who wins in a single round
    if(choicePlayer === choiceComputer) {
        console.log("Tie!");
        return "tie";
    }else if((choicePlayer === "rock" && choiceComputer === "scissors") || (choicePlayer === "paper" && choiceComputer === "rock") || (choicePlayer === "scissors" && choiceComputer === "paper")) {
        console.log(`You Win! ${choicePlayer} beats ${choiceComputer}.`);
        return "player";
    }else{
        console.log(`You Lose! ${choiceComputer} beats ${choicePlayer}.`);
        return "computer";
    }
}

game();

