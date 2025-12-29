document.addEventListener('DOMContentLoaded', () => {
    const achievements = [
        { 
            title: "Magang Merdeka Batch 2 - Data Analyst, PT. Zona Edukasi Nusantara", 
            year: 2022, 
            icon: "bi-award", 
            image: [
                "images/achievements/sertifikat-km-batch-2.jpg",
                "images/achievements/sk-penilaian-176.jpg"
            ]
        },
        { title: "Cross Culture Program 2021", year: 2021, icon: "bi-award", image: "images/achievements/certificate-zakia-mahbub-abdullah.jpg" },
        { title: "Awardee of Kontes Robot Indonesia (KRI) KRTMI", year: 2020, icon: "bi-award", image: "images/achievements/KRTMI.png" },
        { title: "Peraih Pendanaan - PKM 5 Bidang 2020", year: 2020, icon: "bi-trophy", image: "images/achievements/pkm-5-bidang-2020-ketua-kelompok.jpg" },
        { title: "Asian University, Taiwan - Online Learning Exchange Program, Fintech", year: 2020, icon: "bi-file-earmark-text", image: "images/achievements/transkip-fintech.jpg" },
        { title: "Asian University, Taiwan - Online Learning Exchange Program, Artificial Intelligence", year: 2020, icon: "bi-file-earmark-text", image: "images/achievements/transkip.jpg" },
        { title: "Bronze of International Festival Innovation on Green Technology (I-FINOG), Malaysia", year: 2019, icon: "bi-trophy", image: "images/achievements/bronze-medal-ifinog-2019.jpg" },
        { title: "International Ideathon Hackathon for Training Next Generation Engineers, Japan", year: 2019, icon: "bi-award", image: "images/achievements/sertifikat-ideathon-hackathon.jpg" },
        { title: "Semifinalists of National Software Development Competition Luxtrum XI DTETI Gadjah Mada University", year: 2018, icon: "bi-laptop", image: "images/achievements/sertifikat-semifinalis-nsdc.jpg" },
        { title: "2nd Runner Up in the Creative Robot Category, Robotic Day", year: 2017, icon: "bi-robot" },
        { title: "2nd Runner Up in the Creative Robot category, International Robotic Games", year: 2016, icon: "bi-globe", image: "images/achievements/sertifikat-irg-robotik.jpg" }
    ];

    const achievementContainer = document.getElementById('achievement-container');

    achievements.forEach((achievement, index) => {
        const achievementElement = document.createElement('div');
        achievementElement.classList.add('col-md-6', 'col-lg-4', 'mb-4', 'fade-in');
        achievementElement.style.animationDelay = `${index * 0.1}s`;
        
        const iconHTML = `
            <div class="achievement-icon-box mb-3">
                <i class="bi ${achievement.icon}"></i>
            </div>
        `;
        
        const yearHTML = achievement.year ? `<span class="achievement-year">${achievement.year}</span>` : '';
        const seeDetailsButton = achievement.image ? `
            <button class="btn btn-primary mt-3 see-details-btn" data-image="${achievement.image}" data-title="${achievement.title.replace(/"/g, '&quot;')}">
                <i class="bi bi-eye me-2"></i>See Details
            </button>
        ` : '';
        
        achievementElement.innerHTML = `
            <div class="achievement-card h-100 text-center">
                ${iconHTML}
                <h5 class="card-title">${achievement.title}</h5>
                ${yearHTML}
                ${seeDetailsButton}
            </div>
        `;
        achievementContainer.appendChild(achievementElement);
    });
    
    // Add event listeners for "See Details" buttons
    achievementContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('see-details-btn') || e.target.closest('.see-details-btn')) {
            const button = e.target.classList.contains('see-details-btn') ? e.target : e.target.closest('.see-details-btn');
            const imageSrc = button.getAttribute('data-image');
            const title = button.getAttribute('data-title');
            openImageModal(imageSrc, title);
        }
    });

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const achievementsContent = document.getElementById('achievements-content');
            if (achievementsContent) {
                achievementsContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
