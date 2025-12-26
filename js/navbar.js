// Navbar functionality - Shared across all pages
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

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
});

