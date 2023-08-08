function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitivity
    const playerChoice = playerSelection.toLowerCase();
    
    if (playerChoice === computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerChoice === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerChoice === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerChoice}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice (Rock/Paper/Scissors):`);
        const computerSelection = getComputerChoice(); // Assuming you've defined the getComputerChoice function

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! Your score: ${playerScore}, Computer's score: ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You lose the game. Your score: ${playerScore}, Computer's score: ${computerScore}`);
    } else {
        console.log("It's a tie! The game is a draw.");
    }
}

// Call the game function to start playing
game();
