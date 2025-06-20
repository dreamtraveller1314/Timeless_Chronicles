// js/modules/art-quiz.js

document.addEventListener('DOMContentLoaded', () => {
    // Ensure artQuestions and artFacts are available from core.js
    const artQuestions = window.artQuestions;
    const artFacts = window.artFacts;

    let currentQuestion = 0;
    let score = 0;
    let timer;
    let timeLeft = 15; // seconds per question

    const quizQuestion = document.getElementById('art-quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback'); // New element from HTML for feedback
    const nextBtn = document.getElementById('next-btn');
    const quizResult = document.getElementById('quiz-result');
    const quizProgress = document.getElementById('quiz-progress');
    const scoreDisplay = document.getElementById('score-display');
    const artFactButton = document.getElementById('art-fact'); // The button itself is the fact card
    const retryButton = document.createElement('button'); // Create retry button
    retryButton.id = 'retry-btn';
    retryButton.textContent = 'Retry Quiz';
    retryButton.style.display = 'none'; // Initially hidden
    retryButton.classList.add('button', 'mt-20'); // Add some styling classes
    document.getElementById('quiz-container').appendChild(retryButton); // Append to quiz container


    function updateQuizTextColors() {
        const textColor = document.body.classList.contains('dark-theme') ? '#f0f0f0' : '#333';
        if (quizQuestion) quizQuestion.style.color = textColor;
        if (scoreDisplay) scoreDisplay.style.color = textColor;
        if (quizResult) quizResult.style.color = textColor;
        if (quizFeedback) quizFeedback.style.color = textColor; // Apply to new feedback element
    }

    function startTimer() {
        timeLeft = 15;
        // Check if the timerDisplay element exists before trying to update its content
        const timerDisplay = document.querySelector('.quiz-container p[id^="time-left"]'); // Find a p tag with ID starting with time-left (if you add it)
        if (timerDisplay) {
            timerDisplay.textContent = `Time left: ${timeLeft}s`;
        }
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            if (timerDisplay) {
                timerDisplay.textContent = `Time left: ${timeLeft}s`;
            }
            if (timeLeft <= 0) {
                clearInterval(timer);
                selectAnswer(-1); // Triggers timeout logic
            }
        }, 1000);
    }

    function loadQuestion() {
        if (currentQuestion >= artQuestions.length) {
            displayFinalQuizResult();
            return;
        }

        const question = artQuestions[currentQuestion];
        quizQuestion.textContent = question.question;
        quizOptions.innerHTML = '';
        quizFeedback.textContent = ''; // Clear previous feedback
        quizResult.textContent = ''; // Clear previous quiz result
        nextBtn.style.display = 'none'; // Hide next button until answer is selected

        question.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.classList.add('quiz-option-btn'); // Add a class for styling
            btn.onclick = () => selectAnswer(idx);
            quizOptions.appendChild(btn);
        });

        quizProgress.value = currentQuestion + 1;
        quizProgress.max = artQuestions.length; // Ensure max is set
        scoreDisplay.textContent = `Score: ${score}`;
        updateQuizTextColors();
        startTimer(); // Start timer for the new question
    }


    function selectAnswer(index) {
        clearInterval(timer); // Stop the countdown
        const question = artQuestions[currentQuestion];
        const options = quizOptions.querySelectorAll('button');

        // Disable all options
        options.forEach(b => b.disabled = true);

        if (index === -1) {
            // Timeout
            quizFeedback.innerHTML = `⏰ Time's up! The correct answer was <strong>${question.options[question.correctAnswer]}</strong>.`;
            quizResult.innerHTML = `<span style="font-size: 0.9em;">🧠 ${question.explanation}</span>`;
            if (options[question.correctAnswer]) { // Check if element exists before styling
                options[question.correctAnswer].classList.add('correct-answer');
            }
        } else {
            if (index === question.correctAnswer) {
                options[index].classList.add('correct-answer');
                quizFeedback.innerHTML = `✅ Correct!`;
                quizResult.innerHTML = `<span style="font-size: 0.9em;">🧠 ${question.explanation}</span>`;
                score++;
                // Play correct sound (assuming correctSound audio element exists)
                const correctAudio = document.getElementById('correctSound');
                if (correctAudio) correctAudio.play();
            } else {
                options[index].classList.add('incorrect-answer');
                options[question.correctAnswer].classList.add('correct-answer');
                quizFeedback.innerHTML = `❌ Wrong!`;
                quizResult.innerHTML = `Correct answer is <strong>${question.options[question.correctAnswer]}</strong>.<br><span style="font-size: 0.9em;">🧠 ${question.explanation}</span>`;
                // Play incorrect sound (assuming incorrectSound audio element exists)
                const incorrectAudio = document.getElementById('incorrectSound');
                if (incorrectAudio) incorrectAudio.play();
            }
        }

        scoreDisplay.textContent = `Score: ${score}`;
        updateQuizTextColors(); // Re-apply colors for feedback

        nextBtn.style.display = 'inline-block';
    }

    function displayFinalQuizResult() {
        quizQuestion.textContent = ``;
        quizOptions.innerHTML = '';
        quizFeedback.textContent = '';
        quizResult.innerHTML = `🏁 Quiz Complete! You scored <strong>${score}</strong> out of ${artQuestions.length}.`;
        scoreDisplay.textContent = `Final Score: ${score}/${artQuestions.length}`;
        nextBtn.style.display = 'none';
        retryButton.style.display = 'inline-block'; // Show retry button
        updateQuizTextColors(); // Update colors for final result
    }

    nextBtn.addEventListener('click', () => {
        currentQuestion++;
        loadQuestion();
    });

    retryButton.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        retryButton.style.display = 'none'; // Hide retry button
        loadQuestion(); // Restart the quiz
    });

    // Art Facts Logic
    let currentFactIndex = 0;

    function showArtFact() {
        const selected = artFacts[currentFactIndex];

        // Ensure the fact-body and fact-detail elements are selected within the artFactButton
        const factBody = artFactButton.querySelector('.fact-body');
        const factDetail = artFactButton.querySelector('.fact-detail');
        const factHeader = artFactButton.querySelector('.fact-header');

        if (factHeader) factHeader.innerHTML = `${selected.emoji} Random Art Fact`; // Keep "Random Art Fact" and update emoji
        if (factBody) factBody.textContent = selected.fact;
        if (factDetail) factDetail.textContent = selected.detail;


        // Animate
        if (artFactButton) {
            artFactButton.style.opacity = 0;
            artFactButton.style.transform = "scale(0.9)";
            setTimeout(() => {
                artFactButton.style.opacity = 1;
                artFactButton.style.transform = "scale(1)";
                artFactButton.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out"; // Add transition
            }, 100);
        }

        // Cycle to next fact
        currentFactIndex = (currentFactIndex + 1) % artFacts.length; // This ensures it loops back to 0
    }

    // Event listener for the art fact button
    if (artFactButton) {
        artFactButton.addEventListener('click', showArtFact);
        // Show initial fact on load
        showArtFact();
    }


    // Initial quiz load
    loadQuestion();
});