const choices = ["rock" ,"scissors" ,"paper"];//Array of choices to select a random choice for computer.


//Varibles that reference elements in the dom

//Variables for 3 screens
let gameScreen = document.getElementById('gameScreen');
let startScreen = document.getElementById('startScreen');
let endScreen = document.getElementById('endScreen');

//Variables for elements in the end Screen
let playAgain = document.getElementById('playAgain');
let quitGame = document.getElementById('quitGame');
let endScreenMessage = document.getElementById('endScreenMessage');

//Variables for score uptate section
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');

//Variable referencing the element that display results after each round
let resultText = document.getElementById('results');

//Variables for the 3 buttons Rock, Paper, Scissors
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


//Function to return to Start screen after clicking on quit Game option
quitGame.addEventListener('click', () => {
    gameScreen.style.display = "none";
    endScreen.style.display = "none";
    startScreen.style.display = "flex";
})

//Function that execute the game
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



    let i =1;
    let winner;
    rock.addEventListener('click', () => {
        if(i<=5){
            winner = playRound('rock');
            gamePlay();
        }
    });
    paper.addEventListener('click', () => {
        if(i <= 5){
            winner = playRound('paper');
            gamePlay();
        }
    });
    scissors.addEventListener('click', () => {
        if(i <= 5){
            winner = playRound('scissors');
            gamePlay();
        }
    });

    function gamePlay() {
        scoreUpdate(winner);
        i++;
        gameWinner(playerPoints,computerPoints);
    }

    //Function update score after each round.
    function scoreUpdate(winner){
        if(winner === "player"){
            playerPoints++;
            playerScore.innerText = playerPoints;
        }else if(winner === "computer"){
            computerPoints++;
            computerScore.innerText = computerPoints;
        }
    }


    //Function to find who wins the game.
    function gameWinner(playerPoints,computerPoints){
            if(i > 5){
                if(playerPoints > computerPoints){
                    endScreenMessage.innerText = "You Win."
                }else if(computerPoints > playerPoints){
                    endScreenMessage.innerText = "You Lose."
                }else{
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
    
}

function playRound(playerSelection) { // A single round
    /* let playerSelection = getPlayerChoice(); Avoided this line bcz player select option from one of the button.*/
    let computerSelection = getComputerChoice();

    playerChoiceText.innerText = playerSelection.toUpperCase();
    playerChoiceImg.setAttribute("src", `./images/${playerSelection}.png`);

    computerChoiceText.innerText = computerSelection.toUpperCase();
    computerChoiceImg.setAttribute("src", `./images/${computerSelection}.png`);

    let rwinner = roundWinner(playerSelection, computerSelection);
    return rwinner;
}


function getComputerChoice() { // Get computer sellection
    return choices[Math.floor(Math.random()*choices.length)];
}


function roundWinner(choicePlayer,choiceComputer) { //Checks who wins in a single round
    choicePlayer = choicePlayer.toUpperCase();
    choiceComputer = choiceComputer.toUpperCase();
    if(choicePlayer === choiceComputer) {
        resultText.innerText = `"${choicePlayer}" and "${choiceComputer}". It's a Tie.`
        return "tie";
    }else if((choicePlayer === "ROCK" && choiceComputer === "SCISSORS") || (choicePlayer === "PAPER" && choiceComputer === "ROCK") || (choicePlayer === "SCISSORS" && choiceComputer === "PAPER")) {
        resultText.innerText = `You Win! ${choicePlayer} beats ${choiceComputer}.`;
        return "player";
    }else{
        resultText.innerText = `You Lose! "${choiceComputer}" beats "${choicePlayer}".`;
        return "computer";
    }
}


