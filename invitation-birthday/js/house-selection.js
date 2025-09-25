// JavaScript for House Selection Page (house-selection.html)
document.addEventListener('DOMContentLoaded', function() {
    const proceedButton = document.getElementById('proceed-button');
    const wizardNameInput = document.getElementById('wizard-name');
    
    // User data storage
    let userData = {
        name: '',
        house: ''
    };
    
    // Add magical sound effects
    function playMagicalSound() {
        console.log('✨ Magical sound played!');
    }
    
    // Name input validation
    function validateForm() {
        const hasName = wizardNameInput.value.trim().length > 0;
        const hasHouse = userData.house !== '';
        
        if (hasName && hasHouse) {
            proceedButton.disabled = false;
        } else {
            proceedButton.disabled = true;
        }
    }
    
    // Name input handler
    wizardNameInput.addEventListener('input', function() {
        userData.name = this.value.trim();
        validateForm();
    });
    
    // House selection interaction
    function initializeHouseSelection() {
        const houses = document.querySelectorAll('.house');
        
        houses.forEach(house => {
            house.addEventListener('click', function() {
                // Remove selected class from all houses
                houses.forEach(h => h.classList.remove('selected'));
                
                // Add selected class to clicked house
                this.classList.add('selected');
                
                // Store house data
                userData.house = this.dataset.house;
                
                // Add magical effect
                this.style.transform = 'translateY(-15px) scale(1.05)';
                this.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.4)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1)';
                }, 300);
                
                playMagicalSound();
                validateForm();
            });
        });
    }
    
    // Proceed button click handler - redirects to quiz game
    proceedButton.addEventListener('click', function() {
        if (proceedButton.disabled) return;
        
        playMagicalSound();
        
        // Store user data in localStorage for next page
        localStorage.setItem('wizardData', JSON.stringify(userData));
        
        // Add magical transition effect
        proceedButton.style.transform = 'scale(0.95)';
        proceedButton.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.8)';
        
        setTimeout(() => {
            window.location.href = 'quiz-game.html';
        }, 500);
    });
    
    // Initialize house selection
    initializeHouseSelection();
    
    console.log('🎩 Sorting Ceremony initialized!');
});
