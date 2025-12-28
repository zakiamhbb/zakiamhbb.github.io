// Navbar functionality - Shared across all pages
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    // For pages with hero section (like index.html), handle scroll-based navbar styling
    if (navbar && hero) {
        function updateNavbar() {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            if (window.scrollY >= heroBottom - navbar.offsetHeight) {
                navbar.classList.remove('navbar-transparent');
                navbar.classList.add('navbar-colored');
            } else {
                navbar.classList.add('navbar-transparent');
                navbar.classList.remove('navbar-colored');
            }
        }

        // Initial call to set correct navbar style
        updateNavbar();

        // Update navbar style on scroll
        window.addEventListener('scroll', updateNavbar);
    } 
    // For pages without hero section, ensure navbar is colored
    else if (navbar && !hero) {
        // Ensure navbar has consistent styling on non-hero pages
        if (!navbar.classList.contains('navbar-transparent') && !navbar.classList.contains('navbar-colored')) {
            navbar.classList.add('navbar-colored');
        }
    }
});

