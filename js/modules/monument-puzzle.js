/**
 * js/modules/monument-puzzle.js
 *
 * This module implements the interactive Monument Puzzle Game for the History page.
 */

import { monumentPuzzleImages, playSound, correctSound, incorrectSound, shuffleArray, addClass, removeClass } from '../core.js';

document.addEventListener('DOMContentLoaded', () => {
    const puzzleContainer = document.getElementById('puzzle-container');
    if (!puzzleContainer) {
        console.warn("Monument Puzzle container not found. Skipping module initialization.");
        return;
    }

    const puzzleBoard = document.getElementById('puzzle-board');
    const puzzleMessage = document.getElementById('puzzle-message');
    const puzzleResetBtn = document.getElementById('puzzle-reset');

    let currentPuzzleImage = null;
    const numPieces = 9; // 3x3 grid

    /**
     * Selects a random puzzle image and initializes the game.
     */
    function initializePuzzle() {
        puzzleBoard.innerHTML = '';
        puzzleMessage.textContent = '';
        puzzleResetBtn.style.display = 'none';

        currentPuzzleImage = shuffleArray(monumentPuzzleImages)[0];
        createPuzzlePieces(currentPuzzleImage.src);
    }

    /**
     * Creates and shuffles the puzzle pieces for the given image.
     * @param {string} imageUrl The URL of the full image.
     */
    function createPuzzlePieces(imageUrl) {
        const img = new Image();
        img.onload = () => {
            const pieceWidth = img.width / 3;
            const pieceHeight = img.height / 3;
            let pieces = [];

            for (let i = 0; i < numPieces; i++) {
                const piece = document.createElement('div');
                addClass(piece, 'puzzle-piece');
                piece.dataset.id = i;

                const row = Math.floor(i / 3);
                const col = i % 3;

                piece.style.width = `${pieceWidth}px`;
                piece.style.height = `${pieceHeight}px`;
                piece.style.backgroundImage = `url(${imageUrl})`;
                piece.style.backgroundSize = `${img.width}px ${img.height}px`;
                piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;
                piece.draggable = true;

                pieces.push(piece);
            }

            pieces = shuffleArray(pieces); // Shuffle pieces for the game

            pieces.forEach(piece => {
                puzzleBoard.appendChild(piece);
            });

            addDragDropListeners();
        };
        img.src = imageUrl;
    }

    let draggedItem = null;

    /**
     * Adds drag and drop listeners to puzzle pieces.
     */
    function addDragDropListeners() {
        const pieces = puzzleBoard.querySelectorAll('.puzzle-piece');

        pieces.forEach(piece => {
            piece.addEventListener('dragstart', (e) => {
                draggedItem = e.target;
                e.dataTransfer.setData('text/plain', e.target.dataset.id); // Set data for Firefox compatibility
                addClass(draggedItem, 'dragging');
            });

            piece.addEventListener('dragover', (e) => {
                e.preventDefault(); // Allows drop
                if (e.target !== draggedItem && e.target.classList.contains('puzzle-piece')) {
                    addClass(e.target, 'drag-over');
                }
            });

            piece.addEventListener('dragleave', (e) => {
                removeClass(e.target, 'drag-over');
            });

            piece.addEventListener('drop', (e) => {
                e.preventDefault();
                removeClass(e.target, 'drag-over');

                if (e.target !== draggedItem && e.target.classList.contains('puzzle-piece')) {
                    const droppedOnItem = e.target;
                    const container = puzzleBoard;

                    // Swap positions in the DOM
                    const draggedIndex = Array.from(container.children).indexOf(draggedItem);
                    const droppedIndex = Array.from(container.children).indexOf(droppedOnItem);

                    if (draggedIndex < droppedIndex) {
                        container.insertBefore(droppedOnItem, draggedItem);
                        container.insertBefore(draggedItem, container.children[droppedIndex]);
                    } else {
                        container.insertBefore(draggedItem, droppedOnItem);
                        container.insertBefore(droppedOnItem, container.children[draggedIndex]);
                    }

                    checkPuzzleCompletion();
                }
            });

            piece.addEventListener('dragend', () => {
                removeClass(draggedItem, 'dragging');
                draggedItem = null;
            });
        });
    }

    /**
     * Checks if the puzzle is completed (pieces are in correct order).
     */
    function checkPuzzleCompletion() {
        const pieces = puzzleBoard.querySelectorAll('.puzzle-piece');
        let isSolved = true;
        for (let i = 0; i < pieces.length; i++) {
            if (parseInt(pieces[i].dataset.id) !== i) {
                isSolved = false;
                break;
            }
        }

        if (isSolved) {
            puzzleMessage.textContent = `Puzzle Solved! It's the ${currentPuzzleImage.name}!`;
            addClass(puzzleMessage, 'success');
            playSound(correctSound);
            puzzleBoard.querySelectorAll('.puzzle-piece').forEach(piece => piece.draggable = false); // Disable dragging
            puzzleResetBtn.style.display = 'block';
        } else {
            removeClass(puzzleMessage, 'success');
            puzzleMessage.textContent = ''; // Clear message if not solved
        }
    }

    puzzleResetBtn.addEventListener('click', initializePuzzle);

    initializePuzzle(); // Start the puzzle on page load
});