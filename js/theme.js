// Theme functionality - prevents flash and handles toggle
(function() {
    const html = document.documentElement;
    
    // Part 1: Prevent flash of wrong theme (runs immediately)
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    }
    
    // Part 2: Initialize theme toggle button (runs when DOM is ready)
    function initThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        
        if (!themeToggle || !themeIcon) return;
        
        // Set initial icon based on current theme
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        } else {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        }
        
        // Handle toggle click
        themeToggle.addEventListener('click', function() {
            const isDark = html.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                // Switch to light mode
                html.removeAttribute('data-theme');
                themeIcon.classList.remove('bi-moon-fill');
                themeIcon.classList.add('bi-sun-fill');
                localStorage.setItem('theme', 'light');
            } else {
                // Switch to dark mode
                html.setAttribute('data-theme', 'dark');
                themeIcon.classList.remove('bi-sun-fill');
                themeIcon.classList.add('bi-moon-fill');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeToggle);
    } else {
        initThemeToggle();
    }
    
    // Re-initialize when navbar loads (for dynamically loaded navbars)
    document.addEventListener('navbarLoaded', initThemeToggle);
    
    // Fallback: try again after a short delay
    setTimeout(initThemeToggle, 500);
})();
