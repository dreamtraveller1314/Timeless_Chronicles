/**
 * js/modules/tool-matching.js
 *
 * This module implements the interactive Tool Matching Game for the History page.
 */

import { toolData, toolImages, playSound, correctSound, incorrectSound, shuffleArray, addClass, removeClass } from '../core.js';

document.addEventListener('DOMContentLoaded' , () => {
    const matchToolsContainer = document.getElementById('match-tools-container');
    if (!matchToolsContainer) {
        console.warn("Tool Matching Game container not found. Skipping module initialization.");
        return;
    }

    const toolOptionsDiv = document.getElementById('tool-options');
    const toolTargetsDiv = document.getElementById('tool-targets');
    const feedbackMessage = document.getElementById('tool-match-feedback');
    const replayButton = document.getElementById('tool-match-replay');

    let draggedTool = null;
    let correctMatches = 0;
    const totalTools = Object.keys(toolData).length;

    /**
     * Initializes the tool matching game.
     */
    function initializeGame() {
        toolOptionsDiv.innerHTML = '';
        toolTargetsDiv.innerHTML = '';
        feedbackMessage.textContent = '';
        replayButton.style.display = 'none';
        correctMatches = 0;

        const toolNames = shuffleArray(Object.keys(toolData));
        const toolDescriptions = shuffleArray(Object.values(toolData));

        // Create draggable tool images
        toolNames.forEach(toolName => {
            const img = document.createElement('img');
            img.src = toolImages[toolName];
            img.alt = toolName.replace('_', ' ');
            img.dataset.tool = toolName;
            img.classList.add('draggable-tool');
            img.draggable = true;
            toolOptionsDiv.appendChild(img);

            img.addEventListener('dragstart', (e) => {
                draggedTool = e.target;
                addClass(draggedTool, 'dragging');
                e.dataTransfer.setData('text/plain', toolName); // Set data for Firefox compatibility
            });

            img.addEventListener('dragend', () => {
                removeClass(draggedTool, 'dragging');
                draggedTool = null;
            });
        });

        // Create droppable target areas
        toolDescriptions.forEach(description => {
            const targetDiv = document.createElement('div');
            targetDiv.classList.add('droppable-target');
            targetDiv.dataset.description = description;
            targetDiv.innerHTML = `<p>${description}</p>`;
            toolTargetsDiv.appendChild(targetDiv);

            targetDiv.addEventListener('dragover', (e) => {
                e.preventDefault(); // Necessary to allow dropping
                addClass(targetDiv, 'drag-over');
            });

            targetDiv.addEventListener('dragleave', () => {
                removeClass(targetDiv, 'drag-over');
            });

            targetDiv.addEventListener('drop', (e) => {
                e.preventDefault();
                removeClass(targetDiv, 'drag-over');

                const droppedToolName = draggedTool ? draggedTool.dataset.tool : e.dataTransfer.getData('text/plain');
                if (droppedToolName && toolData[droppedToolName] === targetDiv.dataset.description) {
                    targetDiv.appendChild(draggedTool);
                    draggedTool.draggable = false;
                    addClass(targetDiv, 'correct');
                    addClass(draggedTool, 'matched');
                    playSound(correctSound);
                    feedbackMessage.textContent = 'Correct match!';
                    correctMatches++;

                    if (correctMatches === totalTools) {
                        feedbackMessage.textContent = 'Congratulations! You matched all the tools correctly!';
                        replayButton.style.display = 'block';
                    }
                } else {
                    playSound(incorrectSound);
                    feedbackMessage.textContent = 'Incorrect match. Try again!';
                }
            });
        });
    }

    replayButton.addEventListener('click', initializeGame);

    initializeGame(); // Start the game on page load
});