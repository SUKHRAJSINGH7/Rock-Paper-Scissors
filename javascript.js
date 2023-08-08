// Wrap your code in a window load event listener
window.addEventListener('load', () => {
    // Get elements from the DOM
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const resultMessage = document.getElementById("result-message");
    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");
    const resetButton = document.getElementById("reset");

    // Initialize scores
    let playerScore = 0;
    let computerScore = 0;

    // Function to play a round
    function playRound(playerSelection) {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];

        if (playerSelection === computerSelection) {
            return "It's a tie!";
        } else if (
            (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper')
        ) {
            playerScore++;
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore++;
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }

    // Function to update the UI
    function updateUI(result) {
        resultMessage.textContent = result;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;

        if (playerScore >= 5 || computerScore >= 5) {
            endGame();
        }
    }

    // Function to handle button clicks
    function handleChoiceClick(choice) {
        const result = playRound(choice);
        updateUI(result);
    }

    // Function to end the game
    function endGame() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        if (playerScore > computerScore) {
            resultMessage.textContent = "You win the game!";
        } else if (computerScore > playerScore) {
            resultMessage.textContent = "You lose the game.";
        } else {
            resultMessage.textContent = "It's a tie! The game is a draw.";
        }

        resetButton.style.display = "block";
    }

    // Event listeners for button clicks
    rockButton.addEventListener("click", () => handleChoiceClick("Rock"));
    paperButton.addEventListener("click", () => handleChoiceClick("Paper"));
    scissorsButton.addEventListener("click", () => handleChoiceClick("Scissors"));

    // Event listener for reset button
    resetButton.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        resultMessage.textContent = "Choose your move!";
        playerScoreDisplay.textContent = "Player: 0";
        computerScoreDisplay.textContent = "Computer: 0";
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
        resetButton.style.display = "none";
    });

    // Reset UI at the beginning
    resetButton.dispatchEvent(new Event('click'));
});
