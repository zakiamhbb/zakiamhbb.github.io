document.addEventListener('DOMContentLoaded', () => {
    // Profile animation
    const profileAnimation = document.getElementById('profile-animation');
    if (profileAnimation && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(400, 400);
        profileAnimation.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x1a237e, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add portfolio items
    const portfolioItems = [
        { title: 'AI-Powered Image Recognition', description: 'Developed a state-of-the-art image recognition system using deep learning techniques.' },
        { title: 'Natural Language Processing Tool', description: 'Created an advanced NLP tool for sentiment analysis and text classification.' },
        { title: 'Predictive Analytics Dashboard', description: 'Designed and implemented a real-time predictive analytics dashboard for business intelligence.' },
        { title: 'Machine Learning Model Optimization', description: 'Optimized existing ML models, improving performance and reducing computational costs.' }
    ];

    const portfolioContainer = document.getElementById('portfolio-items');
    portfolioItems.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('col-md-6', 'col-lg-3', 'mb-4');
        portfolioItem.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        `;
        portfolioContainer.appendChild(portfolioItem);

        gsap.from(portfolioItem, {
            duration: 0.5,
            opacity: 0,
            y: 50,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: portfolioItem,
                start: 'top bottom-=100',
            }
        });
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }
});
