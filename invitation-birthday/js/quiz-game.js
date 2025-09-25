// JavaScript for Quiz Game Page (quiz-game.html)
document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "What is the name of Harry Potter's owl?",
            options: ["Hedwig", "Pigwidgeon", "Errol", "Hermes"],
            correct: 0,
            image: "🦉",
            explanation: "Hedwig was Harry's loyal snowy owl companion!"
        },
        {
            question: "Which house is known for bravery and courage?",
            options: ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"],
            correct: 2,
            image: "🦁",
            explanation: "Gryffindor values bravery, courage, and chivalry!"
        },
        {
            question: "What is the spell to unlock doors?",
            options: ["Expelliarmus", "Alohomora", "Lumos", "Wingardium Leviosa"],
            correct: 1,
            image: "🔓",
            explanation: "Alohomora is the unlocking charm!"
        },
        {
            question: "Who is the headmaster of Hogwarts in the first book?",
            options: ["Severus Snape", "Albus Dumbledore", "Minerva McGonagall", "Rubeus Hagrid"],
            correct: 1,
            image: "👴",
            explanation: "Albus Dumbledore was the wise headmaster!"
        },
        {
            question: "What is the name of the magical train to Hogwarts?",
            options: ["Hogwarts Express", "Magic Express", "Flying Train", "Wizard Express"],
            correct: 0,
            image: "🚂",
            explanation: "The Hogwarts Express takes students to school!"
        }
    ];

    let currentQuestion = 0;
    let score = 0;
    let correctAnswers = 0;
    let gameActive = false;
    let selectedAnswer = null;

    const elements = {
        questionCard: document.getElementById('question-card'),
        questionNumber: document.getElementById('question-number'),
        scoreDisplay: document.getElementById('score-display'),
        questionText: document.getElementById('question-text'),
        questionImage: document.getElementById('question-image'),
        optionsContainer: document.getElementById('options-container'),
        progressFill: document.getElementById('progress-fill'),
        progressText: document.getElementById('progress-text'),
        feedbackSection: document.getElementById('feedback-section'),
        feedbackContent: document.getElementById('feedback-content'),
        startButton: document.getElementById('start-quiz'),
        skipButton: document.getElementById('skip-quiz')
    };

    // Initialize game
    function initializeGame() {
        currentQuestion = 0;
        score = 0;
        correctAnswers = 0;
        gameActive = false;
        selectedAnswer = null;
        
        elements.startButton.textContent = 'Start Quiz!';
        elements.startButton.disabled = false;
        elements.feedbackSection.style.display = 'none';
        
        updateDisplay();
    }

    // Start quiz
    function startQuiz() {
        if (gameActive) return;
        
        gameActive = true;
        elements.startButton.textContent = 'Quiz Active!';
        elements.startButton.disabled = true;
        
        loadQuestion();
        console.log('🧠 Magical quiz started!');
    }

    // Load current question
    function loadQuestion() {
        const question = questions[currentQuestion];
        
        elements.questionNumber.textContent = `Question ${currentQuestion + 1}`;
        elements.questionText.textContent = question.question;
        elements.questionImage.textContent = question.image;
        
        // Create options
        elements.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'quiz-option';
            optionElement.innerHTML = `
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;
            optionElement.addEventListener('click', () => selectAnswer(index));
            elements.optionsContainer.appendChild(optionElement);
        });
        
        // Animate question card
        elements.questionCard.style.transform = 'scale(0.9)';
        elements.questionCard.style.opacity = '0.7';
        
        setTimeout(() => {
            elements.questionCard.style.transform = 'scale(1)';
            elements.questionCard.style.opacity = '1';
        }, 200);
    }

    // Select answer
    function selectAnswer(answerIndex) {
        if (!gameActive || selectedAnswer !== null) return;
        
        selectedAnswer = answerIndex;
        const question = questions[currentQuestion];
        const isCorrect = answerIndex === question.correct;
        
        // Disable all options
        const options = elements.optionsContainer.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === answerIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Update score
        if (isCorrect) {
            score += 100;
            correctAnswers++;
            createFeedback('correct', `🎉 Correct! ${question.explanation}`);
        } else {
            createFeedback('incorrect', `❌ Wrong! The correct answer was: ${question.options[question.correct]}`);
        }
        
        updateDisplay();
        
        // Move to next question after delay
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                selectedAnswer = null;
                loadQuestion();
            } else {
                endQuiz();
            }
        }, 2000);
    }

    // Create feedback
    function createFeedback(type, message) {
        elements.feedbackSection.style.display = 'block';
        elements.feedbackContent.innerHTML = `
            <div class="feedback-message ${type}">
                <div class="feedback-icon">${type === 'correct' ? '✨' : '💥'}</div>
                <div class="feedback-text">${message}</div>
            </div>
        `;
        
        // Animate feedback
        elements.feedbackContent.style.transform = 'translateY(20px)';
        elements.feedbackContent.style.opacity = '0';
        
        setTimeout(() => {
            elements.feedbackContent.style.transform = 'translateY(0)';
            elements.feedbackContent.style.opacity = '1';
        }, 100);
    }

    // Update display
    function updateDisplay() {
        elements.scoreDisplay.textContent = `Score: ${score}`;
        elements.progressFill.style.width = `${(correctAnswers / questions.length) * 100}%`;
        elements.progressText.textContent = `${correctAnswers}/${questions.length} Correct`;
    }

    // End quiz
    function endQuiz() {
        gameActive = false;
        
        if (correctAnswers >= 3) {
            createFeedback('victory', `🏆 Congratulations! You scored ${score} points! Now prepare for battle!`);
            
            setTimeout(() => {
                localStorage.setItem('quizGameCompleted', 'true');
                localStorage.setItem('quizGameScore', score.toString());
                window.location.href = 'duel-game.html';
            }, 3000);
        } else {
            createFeedback('failure', `💔 Quiz failed! You need at least 3 correct answers. Try again!`);
            
            setTimeout(() => {
                elements.startButton.textContent = 'Try Again';
                elements.startButton.disabled = false;
            }, 2000);
        }
    }

    // Skip quiz
    function skipQuiz() {
        localStorage.setItem('quizGameSkipped', 'true');
        window.location.href = 'invitation.html';
    }

    // Event listeners
    elements.startButton.addEventListener('click', startQuiz);
    elements.skipButton.addEventListener('click', skipQuiz);

    // Initialize
    initializeGame();
    
    console.log('🧠 Magical Quiz initialized!');
});
