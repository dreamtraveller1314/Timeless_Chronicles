/**
 * js/modules/art-quiz.js
 *
 * This module implements the interactive Art History Quiz for the Art page.
 */

import { artQuizQuestions, playSound, correctSound, incorrectSound, shuffleArray, addClass, removeClass } from '../core.js';

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) {
        console.warn("Art Quiz container not found. Skipping module initialization.");
        return;
    }

    const questionElement = document.getElementById('art-quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const feedbackElement = document.getElementById('quiz-feedback');
    const progressElement = document.getElementById('quiz-progress');
    const scoreDisplay = document.getElementById('score-display');
    const nextBtn = document.getElementById('next-btn');
    const quizResult = document.getElementById('quiz-result');

    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    /**
     * Starts or restarts the art quiz.
     */
    function startQuiz() {
        currentQuestions = shuffleArray([...artQuizQuestions]); // Clone and shuffle questions
        currentQuestionIndex = 0;
        score = 0;
        progressElement.max = currentQuestions.length;
        quizResult.textContent = '';
        nextBtn.textContent = 'Next Question';
        hideElement(nextBtn);
        displayQuestion();
        updateScoreDisplay();
        updateProgressBar();
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

        questionElement.textContent = questionData.question;
        optionsContainer.innerHTML = ''; // Clear previous options
        feedbackElement.textContent = ''; // Clear feedback
        removeClass(feedbackElement, 'success');
        removeClass(feedbackElement, 'error');

        shuffleArray([...questionData.options]).forEach(option => {
            const button = document.createElement('button');
            addClass(button, 'choice-btn');
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(button, option, questionData.answer));
            optionsContainer.appendChild(button);
        });

        hideElement(nextBtn); // Hide next button until an answer is chosen
    }

    /**
     * Handles the user's answer selection.
     * @param {HTMLElement} selectedButton The button element clicked.
     * @param {string} selectedOption The text of the selected option.
     * @param {string} correctAnswer The correct answer for the current question.
     */
    function selectAnswer(selectedButton, selectedOption, correctAnswer) {
        // Disable all options after selection
        optionsContainer.querySelectorAll('.choice-btn').forEach(button => {
            button.disabled = true;
        });

        if (selectedOption === correctAnswer) {
            score++;
            feedbackElement.textContent = 'Correct!';
            addClass(feedbackElement, 'success');
            addClass(selectedButton, 'correct');
            playSound(correctSound);
        } else {
            feedbackElement.textContent = `Incorrect. The correct answer was: "${correctAnswer}"`;
            addClass(feedbackElement, 'error');
            addClass(selectedButton, 'incorrect');
            // Highlight correct answer
            Array.from(optionsContainer.children).find(btn => btn.textContent === correctAnswer).classList.add('correct');
            playSound(incorrectSound);
        }

        updateScoreDisplay();
        showElement(nextBtn);

        // Change "Next Question" to "Finish Quiz" if it's the last question
        if (currentQuestionIndex === currentQuestions.length - 1) {
            nextBtn.textContent = 'Finish Quiz';
        }
    }

    /**
     * Advances to the next question or ends the quiz.
     */
    function nextQuestion() {
        currentQuestionIndex++;
        updateProgressBar();
        if (currentQuestionIndex < currentQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }

    /**
     * Updates the score displayed to the user.
     */
    function updateScoreDisplay() {
        scoreDisplay.textContent = `Score: ${score} / ${currentQuestionIndex}`;
    }

    /**
     * Updates the progress bar.
     */
    function updateProgressBar() {
        progressElement.value = currentQuestionIndex;
    }

    /**
     * Ends the quiz, displays the final result, and offers to restart.
     */
    function endQuiz() {
        questionElement.textContent = 'Quiz Complete!';
        optionsContainer.innerHTML = '';
        feedbackElement.textContent = `You answered ${score} out of ${currentQuestions.length} questions correctly!`;
        quizResult.textContent = 'Click "Restart Quiz" to play again.';
        hideElement(scoreDisplay);
        hideElement(progressElement);
        nextBtn.textContent = 'Restart Quiz';
        showElement(nextBtn);
        nextBtn.removeEventListener('click', nextQuestion); // Remove previous listener
        nextBtn.addEventListener('click', startQuiz); // Add restart listener
    }

    // Initialize quiz on page load
    nextBtn.addEventListener('click', nextQuestion); // Set initial listener for next question
    startQuiz();
});