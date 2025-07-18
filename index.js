
const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const displayResult = document.getElementById('displayResult');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');

let player = 0;
let computer = 0;

function playGame(playerSelection){
    const computerSelection = choices[Math.floor(Math.random()*3)];
    let result = '';

    if(playerSelection === computerSelection){
        result = "IT'S TIE!";
    }
    else{
        switch(playerSelection){
            case 'rock':
                result = computerSelection === 'scissors' ? 'YOU WIN!': 'YOU LOSE!';
                break;
            case 'paper':
                result = computerSelection === 'rock' ? 'YOU WIN!': 'YOU LOSE!';
                break;
            case 'scissors':
                result = computerSelection === 'paper' ? 'YOU WIN!': 'YOU LOSE!';
                break;
        }

    }
    playerChoice.textContent = `Player: ${playerSelection}`;
    computerChoice.textContent = `Computer: ${computerSelection}`;
    displayResult.textContent = `${result}`;

    displayResult.classList.remove('green', 'red');

    switch(result){
        case 'YOU WIN!':
            displayResult.classList.add('green');
            player++;
            playerScore.textContent = player;
            break;
        case 'YOU LOSE!':
            displayResult.classList.add('red');
            computer++;
            computerScore.textContent = computer;
            break;
    }
}