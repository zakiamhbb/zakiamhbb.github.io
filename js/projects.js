document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById('project-container');
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    const modalTitle = document.querySelector('#projectModal .modal-title');
    const modalBody = document.querySelector('#projectModal .modal-body');

    const projects = [
        {
            title: "AI-Powered Autonomous Vehicle Object Detection",
            description: "Developed at LIPI using YOLO detection method for computer vision.",
            image: "images/project/autonomous-vehicle/Autonomus Vehicle Project.jpg",
            details: [
                "Achieved 96.7% accuracy in object detection for autonomous vehicles",
                "Enhanced safety and efficiency of self-driving cars",
                "Implemented advanced computer vision techniques",
                "Developed at Lembaga Ilmu Pengetahuan Indonesia (LIPI)"
            ]
        },
        {
            title: "Earthquake Detection and Automated Home Safety System",
            description: "Created an earthquake detection system for houses in earthquake-prone areas.",
            details: [
                "Implemented automated safety measures and warning monitoring",
                "Designed for homes in seismic zones",
                "Provides early warnings and initiates safety protocols",
                "Part of PKM Karsa Cipta project"
            ]
        },
        {
            title: "Line Follower Robot for Gate Tour",
            description: "Improved Mbot from Makeblock for gate tour functionality.",
            image: "images/project/japan/1629956768073.jpg",
            images: [
                "images/project/japan/1629956768073.jpg",
                "images/project/japan/1629956771623.jpg",
                "images/project/japan/1629956792527.jpg",
                "images/project/japan/1629956793178.jpg"
            ],
            details: [
                "Developed during International Hackathon in Kitakyushu, Japan",
                "Enhanced Mbot capabilities for autonomous navigation",
                "Implemented complex gate tour functionality",
                "Focused on Training Next Generation Engineers"
            ]
        },
        {
            title: "Air Quality Monitoring System",
            description: "IoT-based air quality monitoring using Node-Red and LabView.",
            details: [
                "Developed at PT. Multi Fabrindo (Medco Group)",
                "Achieved 70% accuracy in employee safety monitoring",
                "Utilizes IoT sensors for real-time data collection",
                "Implements advanced visualization techniques"
            ]
        },
        {
            title: "Machine Learning Algorithms for NLP, CV, and Recommendation Systems",
            description: "Developed at Sinas Mas Land, focusing on various ML applications.",
            details: [
                "Designed and optimized ML algorithms for NLP, CV, and recommendation systems",
                "Conducted thorough testing and deployment to production environments",
                "Focused on enhancing user experience through AI technologies",
                "Implemented at Sinas Mas Land"
            ]
        },
        {
            title: "Web and Mobile Applications with Integrated AI Technologies",
            description: "Developed at Sinar Mas Land using Outsystems for rapid development.",
            details: [
                "Created web and mobile applications with integrated AI technologies",
                "Utilized Outsystems for rapid development",
                "Incorporated computer vision, machine learning, and IoT",
                "Demonstrated synergy between rapid development tools and advanced AI"
            ]
        },
        {
            title: "Data Analysis and Visualization Dashboard",
            description: "Created at PT. Zona Edukasi Nusantara for data mining and visualization.",
            details: [
                "Conducted comprehensive data analysis, including mining and cleansing",
                "Developed interactive dashboards for complex data visualization",
                "Enabled data-driven decision making",
                "Implemented at PT. Zona Edukasi Nusantara"
            ]
        },
        {
            title: "Hogwarts Birthday Invitation",
            description: "Interactive magical birthday invitation with Hogwarts theme.",
            details: [
                "Created an immersive Hogwarts-themed birthday invitation experience",
                "Features magical animations and interactive elements",
                "Includes floating particles and sparkle effects",
                "Responsive design with enchanting visual effects"
            ],
            externalLink: "invitation-birthday/index.html"
        }
    ];

    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'col-md-4 mb-4';
        
        const imageHTML = project.image ? `
            <img src="${project.image}" alt="${project.title}" class="card-img-top project-image" style="height: 200px; object-fit: cover; border-radius: 10px 10px 0 0;">
        ` : '';
        
        card.innerHTML = `
            <div class="card h-100 project-card">
                ${imageHTML}
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <button class="btn btn-primary view-details" data-project-id="${projects.indexOf(project)}">View Details</button>
                </div>
            </div>
        `;
        return card;
    }

    projects.forEach(project => {
        projectContainer.appendChild(createProjectCard(project));
    });

    projectContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-details')) {
            const projectId = e.target.getAttribute('data-project-id');
            const project = projects[projectId];
            
            // Check if project has an external link
            if (project.externalLink) {
                window.location.href = project.externalLink;
            } else {
                modalTitle.textContent = project.title;
                
                let imagesHTML = '';
                if (project.images && project.images.length > 0) {
                    imagesHTML = `
                        <div class="project-images mb-4">
                            <div class="row g-2">
                                ${project.images.map(img => `
                                    <div class="col-6 col-md-3">
                                        <img src="${img}" alt="${project.title}" class="img-fluid project-modal-image" style="cursor: pointer; border-radius: 8px;" onclick="openImageModal('${img}', '${project.title}')">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                } else if (project.image) {
                    imagesHTML = `
                        <div class="project-image mb-4 text-center">
                            <img src="${project.image}" alt="${project.title}" class="img-fluid project-modal-image" style="max-height: 400px; border-radius: 8px; cursor: pointer;" onclick="openImageModal('${project.image}', '${project.title}')">
                        </div>
                    `;
                }
                
                modalBody.innerHTML = `
                    ${imagesHTML}
                    <ul>
                        ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                `;
                
                projectModal.show();
            }
        }
    });

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const projectsContent = document.getElementById('projects-content');
            if (projectsContent) {
                projectsContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Function to open image modal
function openImageModal(imageSrc, title) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="image-modal-close">&times;</span>
            <h4 class="image-modal-title">${title}</h4>
            <img src="${imageSrc}" alt="${title}" class="image-modal-img">
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    modal.querySelector('.image-modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}
