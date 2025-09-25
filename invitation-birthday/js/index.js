// JavaScript for Entrance Page (index.html)
document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enter-button');
    
    // Add magical sound effects
    function playMagicalSound() {
        console.log('✨ Magical sound played!');
    }
    
    // Letter animation on load
    function animateLetter() {
        const letter = document.querySelector('.letter');
        if (letter) {
            letter.style.animation = 'letterFloat 3s ease-in-out infinite';
        }
    }
    
    // Floating particles animation
    function createFloatingParticles() {
        const particlesContainer = document.querySelector('.floating-particles');
        
        if (!particlesContainer) return;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: var(--gold);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                animation: float ${Math.random() * 6 + 4}s infinite linear;
                animation-delay: ${Math.random() * 2}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    enterButton.addEventListener('click', function() {
        playMagicalSound();
        
        // Add magical transition effect
        enterButton.style.transform = 'scale(0.95)';
        enterButton.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.8)';
        
        setTimeout(() => {
            window.location.href = 'house-selection.html';
        }, 500);
    });

    // Initialize animations
    animateLetter();
    createFloatingParticles();

    console.log('✉️ Welcome to the entrance!');
});
