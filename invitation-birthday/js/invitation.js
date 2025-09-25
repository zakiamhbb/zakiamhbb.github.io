// JavaScript for Invitation Page (invitation.html)
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-button');
    const restartButton = document.getElementById('restart-button');
    
    // Add magical sound effects
    function playMagicalSound() {
        console.log('✨ Magical sound played!');
    }
            
    // Video interaction
    function initializeVideoInteraction() {
        const video = document.querySelector('video');
        if (video) {
            video.addEventListener('loadeddata', function() {
                console.log('📹 Video loaded successfully');
            });
            
            video.addEventListener('error', function(e) {
                console.error('❌ Video loading error:', e);
            });
            
            // Add click to play/pause
            video.addEventListener('click', function() {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }
    }
    
    // Navigation buttons
    if (backButton) {
        backButton.addEventListener('click', function() {
            playMagicalSound();
            window.location.href = 'house-selection.html';
        });
    }
    
    if (restartButton) {
        restartButton.addEventListener('click', function() {
            playMagicalSound();
            localStorage.removeItem('wizardData');
            localStorage.removeItem('quizGameCompleted');
            localStorage.removeItem('quizGameScore');
            localStorage.removeItem('duelGameCompleted');
            localStorage.removeItem('duelGameScore');
            localStorage.removeItem('totalScore');
            window.location.href = 'index.html';
        });
    }
    
    // Add magical effects
    function addMagicalEffects() {
        // Add sparkle effect to invitation card
        const invitationCard = document.querySelector('.invitation-card');
        if (invitationCard) {
            invitationCard.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
                this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.3)';
            });
            
            invitationCard.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            });
        }
    }
    
    // Initialize everything
    initializeVideoInteraction();
    addMagicalEffects();
    
    // Add entrance animation
    const elements = document.querySelectorAll('.invitation-card');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    console.log('🎉 Invitation page loaded!');
});
