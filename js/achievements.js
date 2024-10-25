document.addEventListener('DOMContentLoaded', () => {
    const achievements = [
        { title: "Bronze of International Festival Innovation on Green Technology (I-FINOG)", year: 2019, icon: "bi-trophy" },
        { title: "Awardee of Kontes Robot Indonesia (KRI) KRTMI", year: 2020, icon: "bi-award" },
        { title: "Semifinalists of National Software Development Competition Luxtrum XI DTETI Gadjah Mada University", year: 2018, icon: "bi-laptop" },
        { title: "2nd Runner Up in the Creative Robot Category, Robotic Day", year: 2017, icon: "bi-robot" },
        { title: "2nd Runner Up in the Creative Robot category, International Robotic Games", year: 2016, icon: "bi-globe" }
    ];

    const achievementContainer = document.getElementById('achievement-container');

    achievements.forEach((achievement, index) => {
        const achievementElement = document.createElement('div');
        achievementElement.classList.add('col-md-6', 'mb-4');
        achievementElement.innerHTML = `
            <div class="achievement-card h-100">
                <i class="bi ${achievement.icon} fs-1 mb-3 text-primary"></i>
                <h5 class="card-title">${achievement.title}</h5>
                <span class="achievement-year">${achievement.year}</span>
            </div>
        `;
        achievementContainer.appendChild(achievementElement);
    });
});
