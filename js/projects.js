document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById('project-container');
    const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
    const modalTitle = document.querySelector('#projectModal .modal-title');
    const modalBody = document.querySelector('#projectModal .modal-body');

    const projects = [
        {
            title: "AI-Powered Autonomous Vehicle Object Detection",
            description: "Developed at LIPI using YOLO detection method for computer vision.",
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
        card.innerHTML = `
            <div class="card h-100">
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
                modalBody.innerHTML = `
                    <ul>
                        ${project.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                `;
                
                projectModal.show();
            }
        }
    });
});
