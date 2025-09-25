// JavaScript for Results Bridge Page (results-bridge.html)
document.addEventListener('DOMContentLoaded', function() {
    const wizardNameDisplay = document.getElementById('wizard-name-display');
    const houseBadge = document.getElementById('house-badge');
    const badgeCrest = document.getElementById('badge-crest');
    const badgeText = document.getElementById('badge-text');
    const resultsTitle = document.getElementById('results-title');
    const quizScoreDisplay = document.getElementById('quiz-score');
    const duelScoreDisplay = document.getElementById('duel-score');
    const totalScoreDisplay = document.getElementById('total-score');
    const scoreStatus = document.getElementById('score-status');
    const countdownTimer = document.getElementById('countdown-timer');
    const progressFill = document.getElementById('progress-fill');

    let countdown = 5;
    let countdownInterval;

    // Load user data from localStorage
    function loadUserData() {
        const wizardData = localStorage.getItem('wizardData');
        if (wizardData) {
            try {
                const userData = JSON.parse(wizardData);
                if (wizardNameDisplay) {
                    wizardNameDisplay.textContent = userData.name || 'Young Wizard';
                }
                if (badgeText) {
                    badgeText.textContent = userData.house ? userData.house.charAt(0).toUpperCase() + userData.house.slice(1) : 'Unknown';
                }
                if (badgeCrest) {
                    const houseEmojis = {
                        'gryffindor': '🦁',
                        'hufflepuff': '🦡',
                        'ravenclaw': '🦅',
                        'slytherin': '🐍'
                    };
                    badgeCrest.textContent = houseEmojis[userData.house] || '🏰';
                }
                return userData;
            } catch (error) {
                console.error('Error parsing wizard data:', error);
                window.location.href = 'house-selection.html';
                return null;
            }
        } else {
            window.location.href = 'house-selection.html';
            return null;
        }
    }

    // Display scores
    function displayScores() {
        const quizScore = parseInt(localStorage.getItem('quizGameScore') || '0');
        const duelScore = parseInt(localStorage.getItem('duelGameScore') || '0');
        const totalScore = quizScore + duelScore;
        const quizCompleted = localStorage.getItem('quizGameCompleted') === 'true';
        const duelCompleted = localStorage.getItem('duelGameCompleted') === 'true';

        totalScoreDisplay.textContent = totalScore;

        // Animate score counting
        animateScoreCounting(totalScore);

        // Determine status
        if (quizCompleted && duelCompleted && totalScore > 70) {
            resultsTitle.textContent = '🏆 Champion!';
            scoreStatus.innerHTML = `
                <div class="status-message success">
                    <span class="status-icon">✨</span>
                    <span class="status-text">You have earned your invitation!</span>
                </div>
            `;
        } else if (quizCompleted && duelCompleted) {
            resultsTitle.textContent = '💔 Not Quite';
            scoreStatus.innerHTML = `
                <div class="status-message failure">
                    <span class="status-icon">😔</span>
                    <span class="status-text">Score too low! You need more than 70 points.</span>
                </div>
            `;
        } else if (localStorage.getItem('quizGameSkipped') === 'true' || localStorage.getItem('duelGameSkipped') === 'true') {
            resultsTitle.textContent = '🏃 Skipped';
            scoreStatus.innerHTML = `
                <div class="status-message skipped">
                    <span class="status-icon">⏭️</span>
                    <span class="status-text">You skipped the challenges.</span>
                </div>
            `;
        } else {
            resultsTitle.textContent = '❓ Incomplete';
            scoreStatus.innerHTML = `
                <div class="status-message incomplete">
                    <span class="status-icon">⚠️</span>
                    <span class="status-text">Challenges not completed.</span>
                </div>
            `;
        }
    }

    // Animate score counting
    function animateScoreCounting(totalScore) {
        let currentTotal = 0;

        const totalInterval = setInterval(() => {
            currentTotal += Math.ceil(totalScore / 20);
            if (currentTotal >= totalScore) {
                currentTotal = totalScore;
                clearInterval(totalInterval);
            }
            totalScoreDisplay.textContent = currentTotal;
        }, 50);
    }

    // Start countdown
    function startCountdown() {
        countdownInterval = setInterval(() => {
            countdown--;
            countdownTimer.textContent = countdown;
            
            // Update progress bar
            const progress = ((5 - countdown) / 5) * 100;
            progressFill.style.width = `${progress}%`;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                redirectToInvitation();
            }
        }, 1000);
    }

    // Redirect to invitation page
    function redirectToInvitation() {
        // Add magical transition effect
        const resultsCard = document.querySelector('.results-card');
        resultsCard.style.transform = 'scale(0.95)';
        resultsCard.style.opacity = '0.8';
        
        setTimeout(() => {
            window.location.href = 'invitation.html';
        }, 500);
    }

    // Add magical effects
    function addMagicalEffects() {
        const resultsCard = document.querySelector('.results-card');
        
        // Add entrance animation
        resultsCard.style.opacity = '0';
        resultsCard.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            resultsCard.style.transition = 'all 0.8s ease';
            resultsCard.style.opacity = '1';
            resultsCard.style.transform = 'translateY(0)';
        }, 200);

        // Add sparkle effect to score values
        const scoreValues = document.querySelectorAll('.score-value');
        scoreValues.forEach((value, index) => {
            setTimeout(() => {
                value.style.animation = 'sparkle 0.6s ease-out';
            }, 1000 + (index * 200));
        });
    }

    // Initialize everything
    const userData = loadUserData();
    if (userData) {
        displayScores();
        addMagicalEffects();
        
        // Start countdown after a short delay
        setTimeout(() => {
            startCountdown();
        }, 1500);
        
        console.log('🎯 Results bridge loaded for:', userData.name);
    }
});
