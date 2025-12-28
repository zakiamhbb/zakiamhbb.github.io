// Projects data - shared between projects.js and project-detail.js
const projects = [
        {
            title: "AI-Powered Autonomous Vehicle Object Detection",
            description: "Developed at LIPI using YOLO detection method for computer vision.",
            image: "images/project/autonomous-vehicle/Autonomus Vehicle Project.jpg",
            content: `This project represents a significant advancement in autonomous vehicle technology, focusing on real-time object detection and recognition capabilities. During my internship at Lembaga Ilmu Pengetahuan Indonesia (LIPI), I developed a sophisticated computer vision system using the YOLO (You Only Look Once) detection method, which revolutionized how autonomous vehicles perceive and interact with their environment. The system was designed to identify and classify various objects including pedestrians, vehicles, traffic signs, and obstacles in real-time, enabling safer and more reliable autonomous navigation.

The implementation involved training deep learning models on extensive datasets of road scenarios, carefully tuning hyperparameters to optimize detection accuracy while maintaining computational efficiency. Through rigorous testing and iterative improvements, the system achieved an impressive 96.7% accuracy rate in object detection, significantly enhancing the safety and reliability of autonomous driving systems. The project demonstrated the practical application of cutting-edge AI research in solving real-world transportation challenges, contributing to the development of safer autonomous vehicles for future smart cities.`,
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
            content: `This innovative project addresses a critical safety need in earthquake-prone regions by developing an intelligent system that can detect seismic activity and automatically initiate safety protocols to protect residents and property. As part of the PKM Karsa Cipta initiative, I designed and implemented a comprehensive earthquake detection and home safety automation system that combines sensor technology, real-time data processing, and automated response mechanisms. The system continuously monitors ground vibrations and seismic patterns, providing early warning capabilities that can make the difference between safety and disaster.

The automated safety features include automatic gas line shutoff, emergency lighting activation, and structural safety notifications, all triggered within seconds of detecting potentially dangerous seismic activity. The system is specifically designed for residential use in seismic zones, offering homeowners peace of mind and enhanced protection. Through extensive testing and validation, the project demonstrated its effectiveness in providing timely warnings and executing automated safety measures, potentially saving lives and reducing property damage during earthquake events.`,
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
            content: `This project emerged from an exciting international collaboration during the Hackathon in Kitakyushu, Japan, where I worked alongside engineers from around the world to enhance the capabilities of the Makeblock Mbot platform. The challenge was to transform a standard line-following robot into an intelligent system capable of navigating complex gate tour courses with precision and reliability. The project required deep understanding of sensor integration, control algorithms, and real-time decision-making systems, pushing the boundaries of what educational robotics platforms could achieve.

The enhanced Mbot featured sophisticated line detection algorithms that could handle various line conditions, including curves, intersections, and varying surface textures. I implemented advanced navigation logic that allowed the robot to make intelligent decisions at gate points, optimizing its path while maintaining speed and accuracy. The project not only demonstrated technical innovation but also highlighted the importance of international collaboration in engineering education. Working in a multicultural team environment, we combined diverse perspectives and expertise to create a solution that exceeded the original requirements, showcasing the power of collaborative problem-solving in technology development.`,
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
            content: `During my work at PT. Multi Fabrindo (Medco Group), I developed a comprehensive IoT-based air quality monitoring system designed to ensure workplace safety and environmental compliance. The system integrates multiple air quality sensors strategically placed throughout the facility to continuously monitor various pollutants, including particulate matter, volatile organic compounds, and toxic gases. Using Node-Red for data flow management and LabView for advanced visualization and control, the system provides real-time monitoring capabilities that enable proactive safety management and immediate response to hazardous conditions.

The platform achieved 70% accuracy in employee safety monitoring by correlating air quality data with worker locations and exposure times, providing valuable insights for occupational health management. The system features intuitive dashboards that display real-time metrics, historical trends, and automated alerts when air quality parameters exceed safety thresholds. This project demonstrated the practical application of IoT technologies in industrial safety, combining sensor technology, data analytics, and user-friendly interfaces to create a comprehensive solution that protects worker health while ensuring regulatory compliance.`,
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
            content: `At Sinar Mas Land, I led the development of a comprehensive machine learning platform that integrated multiple AI domains to enhance business operations and customer experiences. The project encompassed three major areas: Natural Language Processing (NLP) for customer service automation and sentiment analysis, Computer Vision (CV) for property image analysis and quality assessment, and Recommendation Systems for personalized property suggestions. Each component was carefully designed and optimized to work seamlessly together, creating a unified AI ecosystem that transformed how the company interacted with customers and managed property assets.

The NLP component processed thousands of customer inquiries daily, using advanced transformer models to understand context, sentiment, and intent, enabling automated responses and intelligent routing to appropriate departments. The computer vision system analyzed property images to automatically detect features, assess quality, and generate detailed property descriptions, significantly reducing manual review time. The recommendation engine leveraged collaborative filtering and content-based approaches to provide personalized property suggestions based on user preferences and behavior patterns. Through rigorous testing, optimization, and deployment to production environments, these systems demonstrated measurable improvements in operational efficiency and customer satisfaction, showcasing the transformative power of integrated AI solutions in the real estate industry.`,
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
            content: `This project showcased the innovative combination of rapid application development platforms with cutting-edge AI technologies, demonstrating how modern development tools can accelerate the integration of complex AI capabilities into user-facing applications. Using Outsystems as the primary development platform, I created both web and mobile applications that seamlessly integrated computer vision, machine learning, and IoT technologies, enabling users to interact with AI-powered features through intuitive interfaces. The applications served multiple business functions, from property management and customer engagement to internal process automation.

The integration of AI technologies into the Outsystems platform required creative problem-solving and custom development approaches, as we bridged the gap between rapid development frameworks and advanced AI systems. Computer vision capabilities allowed users to scan property documents and automatically extract information, machine learning models provided intelligent insights and predictions, while IoT integration enabled real-time monitoring and control of smart building systems. This project demonstrated that sophisticated AI functionality doesn't require sacrificing development speed or user experience, proving that rapid development tools and advanced AI can work in harmony to deliver powerful, user-friendly solutions that drive business value.`,
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
            content: `As a Data Analyst at PT. Zona Edukasi Nusantara, I developed a comprehensive data analysis and visualization platform that transformed how the organization understood and utilized its educational data. The project involved extensive data mining and cleansing processes to extract meaningful insights from large datasets containing student performance metrics, course enrollment patterns, and educational resource utilization. I worked with complex, multi-dimensional data sources, applying statistical analysis techniques and machine learning algorithms to identify trends, patterns, and actionable insights that could inform strategic decision-making.

The interactive dashboard I created provided stakeholders with intuitive visualizations of complex educational data, enabling them to explore information through interactive charts, graphs, and drill-down capabilities. The system featured real-time data updates, customizable views, and export functionality that allowed users to generate reports and presentations directly from the dashboard. By making data accessible and understandable, the platform empowered educators and administrators to make evidence-based decisions about curriculum development, resource allocation, and student support initiatives. The project demonstrated the critical role of data visualization in translating raw data into actionable intelligence, ultimately contributing to improved educational outcomes and operational efficiency.`,
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

// Only run on projects.html page
if (document.getElementById('project-container')) {
    document.addEventListener('DOMContentLoaded', function() {
        const projectContainer = document.getElementById('project-container');

        function createProjectCard(project) {
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            
            card.innerHTML = `
                <div class="card h-100 project-card">
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
                    // Redirect to project detail page with project ID
                    window.location.href = `project-detail.html?id=${projectId}`;
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
}
