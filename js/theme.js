// Theme Toggle Functionality - Shared across all pages
(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.documentElement;
    
    // Get saved theme or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        }
    } else {
        html.removeAttribute('data-theme');
        if (themeIcon) {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        }
    }
    
    // Theme toggle handler
    if (themeToggle && themeIcon) {
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
})();

