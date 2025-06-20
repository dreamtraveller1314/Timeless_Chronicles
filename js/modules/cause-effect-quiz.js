/**
 * js/modules/cause-effect-quiz.js
 *
 * This module implements the Cause & Effect Quiz game for the History page.
 */

import { causeEffectQuestions, playSound, correctSound, incorrectSound, shuffleArray, addClass, removeClass } from '../core.js';

document.addEventListener('DOMContentLoaded', () => {
    const causeEffectGame = document.getElementById('cause-effect-game');
    if (!causeEffectGame) {
        console.warn("Cause & Effect Quiz container not found. Skipping module initialization.");
        return;
    }

    const questionDisplay = document.getElementById('ce-question-display');
    const choicesDiv = document.getElementById('ce-choices');
    const feedbackMessage = document.getElementById('ce-feedback');
    const checkAnswerBtn = document.getElementById('ce-check-answer');
    const nextQuestionBtn = document.getElementById('ce-next-question');
    const restartQuizBtn = document.getElementById('ce-restart-quiz');
    const scoreDisplay = document.getElementById('ce-score-display');

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswer = null;

    /**
     * Initializes or restarts the quiz.
     */
    function startQuiz() {
        currentQuestions = shuffleArray([...causeEffectQuestions]); // Clone and shuffle
        currentQuestionIndex = 0;
        score = 0;
        selectedAnswer = null;
        displayQuestion();
        updateScoreDisplay();
        hideElement(nextQuestionBtn);
        hideElement(restartQuizBtn);
        showElement(checkAnswerBtn);
        feedbackMessage.textContent = '';
        removeClass(feedbackMessage, 'success');
        removeClass(feedbackMessage, 'error');
    }

    /**
     * Displays the current question and its options.
     */
    function displayQuestion() {
        const questionData = currentQuestions[currentQuestionIndex];
        if (!questionData) {
            endQuiz();
            return;
        }

        questionDisplay.textContent = questionData.question;
        choicesDiv.innerHTML = '';
        selectedAnswer = null;
        checkAnswerBtn.disabled = true; // Disable until an option is selected

        shuffleArray([...questionData.options]).forEach(option => {
            const button = document.createElement('button');
            addClass(button, 'choice-btn');
            button.textContent = option;
            button.addEventListener('click', () => selectChoice(button, option));
            choicesDiv.appendChild(button);
        });

        hideElement(nextQuestionBtn);
        showElement(checkAnswerBtn);
        removeClass(feedbackMessage, 'success');
        removeClass(feedbackMessage, 'error');
        feedbackMessage.textContent = '';
    }

    /**
     * Handles a user selecting an answer choice.
     * @param {HTMLElement} button The button element that was clicked.
     * @param {string} option The text of the selected option.
     */
    function selectChoice(button, option) {
        // Remove 'selected' class from all buttons
        choicesDiv.querySelectorAll('.choice-btn').forEach(btn => removeClass(btn, 'selected'));
        // Add 'selected' class to the clicked button
        addClass(button, 'selected');
        selectedAnswer = option;
        checkAnswerBtn.disabled = false;
    }

    /**
     * Checks the selected answer against the correct answer.
     */
    function checkAnswer() {
        if (selectedAnswer === null) return; // No answer selected

        const correctAnswer = currentQuestions[currentQuestionIndex].answer;
        if (selectedAnswer === correctAnswer) {
            score++;
            feedbackMessage.textContent = 'Correct!';
            addClass(feedbackMessage, 'success');
            playSound(correctSound);
        } else {
            feedbackMessage.textContent = `Incorrect. The correct answer was: "${correctAnswer}"`;
            addClass(feedbackMessage, 'error');
            playSound(incorrectSound);
        }
        updateScoreDisplay();
        disableChoices();
        hideElement(checkAnswerBtn);
        showElement(nextQuestionBtn);
    }

    /**
     * Disables all choice buttons after an answer is checked.
     */
    function disableChoices() {
        choicesDiv.querySelectorAll('.choice-btn').forEach(btn => btn.disabled = true);
    }

    /**
     * Updates the score display.
     */
    function updateScoreDisplay() {
        scoreDisplay.textContent = `Score: ${score} / ${currentQuestionIndex + 1}`;
    }

    /**
     * Proceeds to the next question or ends the quiz.
     */
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }

    /**
     * Ends the quiz and displays final score.
     */
    function endQuiz() {
        questionDisplay.textContent = 'Quiz Finished!';
        choicesDiv.innerHTML = '';
        feedbackMessage.textContent = `You scored ${score} out of ${currentQuestions.length}!`;
        updateScoreDisplay();
        hideElement(checkAnswerBtn);
        hideElement(nextQuestionBtn);
        showElement(restartQuizBtn);
    }

    // Event Listeners
    checkAnswerBtn.addEventListener('click', checkAnswer);
    nextQuestionBtn.addEventListener('click', nextQuestion);
    restartQuizBtn.addEventListener('click', startQuiz);

    // Initial load
    startQuiz();
});