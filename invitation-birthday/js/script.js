// JavaScript for Hogwarts Birthday Invitation - Shared Functions
document.addEventListener('DOMContentLoaded', function() {
    
    // Add magical sound effects (optional)
    function playMagicalSound() {
        // You can add actual sound files here if desired
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
    
    // Initialize common animations
    animateLetter();
    createFloatingParticles();
    
    // Add scroll effects for magical elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.magical-border');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add keyboard support for accessibility
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.classList.contains('house')) {
                activeElement.click();
            }
        }
    });
    
    console.log('🧙‍♂️ Hogwarts Birthday Invitation loaded successfully!');
});