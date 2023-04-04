const choices = ["rock" ,"scissors" ,"paper"];

let gameScreen = document.getElementById('gameScreen');
let startScreen = document.getElementById('startScreen');
let endScreen = document.getElementById('endScreen');

let playAgain = document.getElementById('playAgain');
let quitGame = document.getElementById('quitGame');
let endScreenMessage = document.getElementById('endScreenMessage');

let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

let resultText = document.getElementById('results');

quitGame.addEventListener('click', () => {
    gameScreen.style.display = "none";
    endScreen.style.display = "none";
    startScreen.style.display = "flex";
})

function game() { // Play 5 rounds
    resultText.innerText = "";
    gameScreen.style.pointerEvents = "auto";
    gameScreen.style.display = "flex";
    gameScreen.style.filter = "none";
    startScreen.style.display = "none";
    endScreen.style.display = "none";
    let playerPoints = 0;
    let computerPoints = 0;
    playerScore.innerText = playerPoints;
    computerScore.innerText = computerPoints;
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');



    let i =1;
    let winner;
    rock.addEventListener('click', () => {
        if(i<=5){
            winner = playRound('rock');
            console.log(winner);
            scoreUpdate(winner);
            i++;
            console.log(i);
            gameWinner(playerPoints,computerPoints);
        }
    });
    paper.addEventListener('click', () => {
        if(i <= 5){
            winner = playRound('paper');
            console.log(winner);
            scoreUpdate(winner)
            i++;
            console.log(i);
            gameWinner(playerPoints,computerPoints);
        }
    });
    scissors.addEventListener('click', () => {
        if(i <= 5){
            winner = playRound('scissors');
            console.log(winner);
            scoreUpdate(winner);
            i++;
            console.log(i);
            gameWinner(playerPoints,computerPoints);
        }
    });
   /*  for(let i = 1 ; i <= 5 ; i++){
        console.log(`${i}th Round.`);
        let currentRoundWinner = playRound();
        if(currentRoundWinner === "player"){
            pp = pp + 1;
        }else if(currentRoundWinner === "computer"){
            cp = cp + 1;
        }
    } */
/*     console.log(".....................");
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
    } */

    function gameWinner(playerPoints,computerPoints){
            if(i > 5){
                if(playerPoints > computerPoints){
                    console.log("Player Wins");
                    endScreenMessage.innerText = "You Win."
                }else if(computerPoints > playerPoints){
                    console.log("Computer Wins");
                    endScreenMessage.innerText = "You Lose."
                }else{
                    console.log("Game is tied");
                    endScreenMessage.innerText = "It's a Tie."
                }
                playerPoints = 0;
                computerPoints = 0;
                endScreen.style.display = "flex";
                gameScreen.style.filter = "blur(1px)";
                gameScreen.style.pointerEvents = "none";
                playAgain.addEventListener('click', game);
            }
        }
    


    function scoreUpdate(winner){
        if(winner === "player"){
            playerPoints++;
            playerScore.innerText = playerPoints;
            console.log(`Player Points : ${playerPoints}`);
        }else if(winner === "computer"){
            computerPoints++;
            computerScore.innerText = computerPoints;
            console.log(`Computer Points : ${computerPoints}`)
        }
    }
}

function playRound(playerSelection) { // A single round
    /* let playerSelection = getPlayerChoice(); */
    let computerSelection = getComputerChoice();
    let playerChoiceText = document.getElementById('playerChoiceText');
    let playerChoiceImg = document.getElementById('playerChoiceImg');
    let computerChoiceText = document.getElementById('computerChoiceText');
    let computerChoiceImg = document.getElementById('computerChoiceImg');

    playerChoiceText.innerText = playerSelection.toUpperCase();
    playerChoiceImg.setAttribute("src", `./images/${playerSelection}.png`);

    computerChoiceText.innerText = computerSelection.toUpperCase();
    computerChoiceImg.setAttribute("src", `./images/${computerSelection}.png`);


    console.log("Player Selected : ",playerSelection.toUpperCase());
    console.log("Computer Selected : ", computerSelection.toUpperCase());
    let rwinner = roundWinner(playerSelection, computerSelection);
    console.log(".................");
    return rwinner;
}


function getComputerChoice() { // Get computer sellection
    return choices[Math.floor(Math.random()*choices.length)];
}

/* function getPlayerChoice() { //Get Player Selection
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
    return input;
} */


function roundWinner(choicePlayer,choiceComputer) { //Checks who wins in a single round
    choicePlayer = choicePlayer.toUpperCase();
    choiceComputer = choiceComputer.toUpperCase();
    if(choicePlayer === choiceComputer) {
        console.log("Tie!");
        resultText.innerText = `"${choicePlayer}" and "${choiceComputer}". It's a Tie.`
        return "tie";
    }else if((choicePlayer === "ROCK" && choiceComputer === "SCISSORS") || (choicePlayer === "PAPER" && choiceComputer === "ROCK") || (choicePlayer === "SCISSORS" && choiceComputer === "PAPER")) {
        console.log(`You Win! "${choicePlayer}" beats "${choiceComputer}".`);
        resultText.innerText = `You Win! ${choicePlayer} beats ${choiceComputer}.`;
        return "player";
    }else{
        console.log(`You Lose! ${choiceComputer} beats ${choicePlayer}.`);
        resultText.innerText = `You Lose! "${choiceComputer}" beats "${choicePlayer}".`;
        return "computer";
    }
}


