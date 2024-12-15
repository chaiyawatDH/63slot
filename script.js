// Slot items (symbols)
const symbols = ["🍀", "🔔", "💎", "7️⃣", "🍇", "🍒"];

// Game variables
let balance = 1000;
const betAmount = 5;

// Select DOM elements
const spinButton = document.getElementById("spinButton");
const resultMessage = document.getElementById("resultMessage");
const balanceDisplay = document.getElementById("balance");
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");

// Function to spin reels
function spinReels() {
    return [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
    ];
}

// Check for win condition
function checkWin(results) {
    if (results[0] === results[1] && results[1] === results[2]) {
        return true; // Win if all 3 symbols match
    }
    return false;
}

// Handle spin button click
spinButton.addEventListener("click", () => {
    if (balance < betAmount) {
        resultMessage.textContent = "Insufficient balance!";
        return;
    }

    // Deduct bet and update balance
    balance -= betAmount;
    balanceDisplay.textContent = balance;

    // Spin reels
    const results = spinReels();
    reel1.textContent = results[0];
    reel2.textContent = results[1];
    reel3.textContent = results[2];

    // Check win condition
    if (checkWin(results)) {
        const winAmount = betAmount * 100000; // Winning multiplier
        balance += winAmount;
        balanceDisplay.textContent = balance;
        resultMessage.textContent = `You win ${winAmount}! 🎉`;
    } else {
        resultMessage.textContent = "Better luck next time! 💔";
    }
});
