/**
 * js/modules/medieval-quest.js
 *
 * This module implements the interactive Medieval Quest game for the History page.
 */

import { medievalQuestData, addClass, removeClass } from '../core.js';

document.addEventListener('DOMContentLoaded', () => {
    const questGameContainer = document.getElementById('medieval-quest-game');
    if (!questGameContainer) {
        console.warn("Medieval Quest game container not found. Skipping module initialization.");
        return;
    }

    const questDisplay = document.getElementById('quest-display');
    const questOptionsDiv = document.getElementById('quest-options');
    const questStartBtn = document.getElementById('quest-start');

    let currentSceneId = 'start';

    /**
     * Initializes or restarts the quest.
     */
    function startQuest() {
        currentSceneId = 'start';
        displayScene(currentSceneId);
        questStartBtn.style.display = 'none'; // Hide start button once started
    }

    /**
     * Displays a specific scene in the quest.
     * @param {string} sceneId The ID of the scene to display.
     */
    function displayScene(sceneId) {
        const scene = medievalQuestData[sceneId];
        if (!scene) {
            console.error("Scene not found:", sceneId);
            questDisplay.textContent = "An error occurred. Please restart the quest.";
            questOptionsDiv.innerHTML = '';
            questStartBtn.style.display = 'block';
            return;
        }

        questDisplay.textContent = scene.text;
        questOptionsDiv.innerHTML = ''; // Clear previous options

        if (scene.options && scene.options.length > 0) {
            scene.options.forEach(option => {
                const button = document.createElement('button');
                addClass(button, 'quest-option-btn');
                button.textContent = option.text;
                button.addEventListener('click', () => {
                    handleChoice(option.next);
                });
                questOptionsDiv.appendChild(button);
            });
        } else {
            // If no options, it's an end scene
            questStartBtn.textContent = "Restart Quest";
            questStartBtn.style.display = 'block';
        }
    }

    /**
     * Handles the user's choice and advances to the next scene.
     * @param {string} nextSceneId The ID of the next scene.
     */
    function handleChoice(nextSceneId) {
        currentSceneId = nextSceneId;
        displayScene(currentSceneId);
    }

    questStartBtn.addEventListener('click', startQuest);

    // Initial display on load
    displayScene(currentSceneId); // Show initial "Start Quest" button
});