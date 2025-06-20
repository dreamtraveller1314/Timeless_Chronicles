/**
 * js/modules/memory-game.js
 *
 * This module implements the Renaissance Memory Game for the Art page.
 */

import { memoryGameCards, playSound, correctSound, incorrectSound, shuffleArray, addClass, removeClass } from '../core.js';

document.addEventListener('DOMContentLoaded', () => {
    const memoryGameContainer = document.getElementById('memoryGame');
    if (!memoryGameContainer) {
        console.warn("Memory Game container not found. Skipping module initialization.");
        return;
    }

    const gameBoard = document.getElementById('gameBoard');
    const matchCountDisplay = document.getElementById('matchCount');
    const timerDisplay = document.getElementById('pairtimer');
    const resetGameBtn = document.getElementById('resetMemoryGame');
    const funFactDisplay = document.getElementById('funFact');

    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let timer;
    let timeLeft = 60; // seconds

    /**
     * Initializes the memory game.
     */
    function initializeGame() {
        gameBoard.innerHTML = '';
        flippedCards = [];
        matchedPairs = 0;
        timeLeft = 60;
        matchCountDisplay.textContent = 0;
        timerDisplay.textContent = timeLeft;
        funFactDisplay.textContent = '';
        clearInterval(timer);

        // Create pairs of cards
        cards = [];
        memoryGameCards.forEach(item => {
            cards.push({ ...item, id: item.id + '-a' });
            cards.push({ ...item, id: item.id + '-b' });
        });

        shuffleArray(cards);
        renderCards();
        startTimer();
    }

    /**
     * Renders the cards on the game board.
     */
    function renderCards() {
        cards.forEach(cardData => {
            const cardElement = document.createElement('div');
            addClass(cardElement, 'card');
            cardElement.dataset.cardId = cardData.id.slice(0, -2); // Base ID for matching
            cardElement.innerHTML = `<img src="${cardData.image}" alt="${cardData.id}" class="card-image hidden">`; // Image initially hidden

            cardElement.addEventListener('click', () => flipCard(cardElement, cardData));
            gameBoard.appendChild(cardElement);
        });
    }

    /**
     * Flips a card and handles game logic.
     * @param {HTMLElement} cardElement The HTML element of the card.
     * @param {Object} cardData The data associated with the card.
     */
    function flipCard(cardElement, cardData) {
        if (flippedCards.length < 2 && !cardElement.classList.contains('flipped') && !cardElement.classList.contains('matched')) {
            addClass(cardElement, 'flipped');
            cardElement.querySelector('.card-image').classList.remove('hidden'); // Show image
            flippedCards.push({ element: cardElement, data: cardData });

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 1000); // Check for match after a short delay
            }
        }
    }

    /**
     * Checks if the two flipped cards are a match.
     */
    function checkForMatch() {
        const [card1, card2] = flippedCards;

        if (card1.data.id.slice(0, -2) === card2.data.id.slice(0, -2)) { // Match found
            addClass(card1.element, 'matched');
            addClass(card2.element, 'matched');
            playSound(correctSound);
            matchedPairs++;
            matchCountDisplay.textContent = matchedPairs;
            funFactDisplay.textContent = card1.data.fact; // Display fact for matched pair

            if (matchedPairs === memoryGameCards.length) {
                endGame(true); // All pairs matched
            }
        } else { // No match
            removeClass(card1.element, 'flipped');
            removeClass(card2.element, 'flipped');
            card1.element.querySelector('.card-image').classList.add('hidden');
            card2.element.querySelector('.card-image').classList.add('hidden');
            playSound(incorrectSound);
            funFactDisplay.textContent = 'No match. Keep trying!';
        }
        flippedCards = [];
    }

    /**
     * Starts the game timer.
     */
    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                endGame(false); // Time's up
            }
        }, 1000);
    }

    /**
     * Ends the game and displays the result.
     * @param {boolean} win True if the player won, false otherwise.
     */
    function endGame(win) {
        clearInterval(timer);
        gameBoard.querySelectorAll('.card').forEach(card => card.style.pointerEvents = 'none'); // Disable clicking

        if (win) {
            funFactDisplay.textContent = `Congratulations! You matched all pairs in ${60 - timeLeft} seconds!`;
            // Potentially add confetti or other win animation
        } else {
            funFactDisplay.textContent = 'Time\'s up! Try again to match all pairs.';
            // Show all cards for a moment
            gameBoard.querySelectorAll('.card').forEach(card => {
                addClass(card, 'flipped');
                card.querySelector('.card-image').classList.remove('hidden');
            });
        }
        resetGameBtn.style.display = 'block';
    }

    resetGameBtn.addEventListener('click', initializeGame);

    initializeGame(); // Start the game on page load
});