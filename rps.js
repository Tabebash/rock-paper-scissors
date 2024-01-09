//References 

const scissorsBtn = document.querySelector('.scissors');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper')
const resetBtn = document.querySelector('.reset');
const results = document.querySelector('.results')
const div = document.querySelector('.container')
const emptyText = document.createElement('p');
results.appendChild(emptyText);


//RESET 
resetBtn.addEventListener('click', resetGame);

//GAME
let WIN = "You Win!!";
let LOSE = "You Lose!!";
let DRAW = "Draw!!";

let WINS = 0;
let LOSES = 0;
let DRAWS = 0;

playerSelection = '';

 function getComputerChoice () {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = "rock";
  }else if (computerChoice === 2) {
    computerChoice = "paper";
  }else if (computerChoice === 3) {
    computerChoice = "scissors"
  }
  return computerChoice;
}

//game play
 function playRound (playerSelection, computerSelection) {
    
  if (computerSelection === playerSelection) {
   
    DRAWS++
    return DRAW
  }

  if (computerSelection === "rock" && playerSelection === "paper") {
    
    WINS++
    return WIN
  }else if (computerSelection === "paper" && playerSelection === "rock") {
    
    LOSES++
    return LOSE
  }

  if (computerSelection === "scissors" && playerSelection === "rock") {
    
    WINS++
    return WIN
  }else if (computerSelection === "rock" && playerSelection === "scissors") {

    LOSES++
    return LOSE
  }

  if (computerSelection === "paper" && playerSelection === "scissors") {
    WIN = "You Win!!";
    WINS++
    return WIN
  }else if (computerSelection === "scissors" && playerSelection === "paper") {
    LOSE = "You Lose!!";
    LOSES++
    return LOSE
  }
};

div.addEventListener('click', function (e) {

    results.style.padding = "1rem"  // adds padding to result <div> after click so its invisible
    let target = e.target;
    computerSelection = getComputerChoice();
    switch (target.className) {
        case 'scissors': playerSelection = 'scissors';
            
            break;

        case 'paper': playerSelection = 'paper';

            break;

        case 'rock': playerSelection = 'rock';
    }
    playRound(playerSelection, computerSelection);
    getWinner();
})



//determines winner
function getWinner() {
    emptyText.innerHTML = `You have won ${WINS} and lost ${LOSES} <br> Draws: ${DRAWS} `;

    if (WINS === 5) {
        results.style.backgroundColor = "green"
        emptyText.textContent = "Hurray!!!! You WON!";
        setTimeout(() => { resetGame(); }, 500);
    }else if (LOSES === 5) {
        results.style.backgroundColor = "red"
        emptyText.textContent = "Sorry, You Lost";
        setTimeout(() => { resetGame(); }, 500);
        
    }

    
}

//resets game
  function resetGame() {
    computerSelection = '';
    playerSelection = '';
    WINS = 0;
    LOSES = 0;
    DRAWS = 0;
    results.style.backgroundColor = '';
    emptyText.textContent = '';
    results.style.padding = '';
  }

 