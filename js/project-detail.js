document.addEventListener('DOMContentLoaded', function() {
    // Get project ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    const projectDetailContainer = document.getElementById('project-detail-container');
    
    if (!projectId || !projects || !projects[projectId]) {
        projectDetailContainer.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Project Not Found</h4>
                <p>The project you're looking for doesn't exist.</p>
                <hr>
                <a href="projects.html" class="btn btn-primary">Back to Projects</a>
            </div>
        `;
        return;
    }
    
    const project = projects[projectId];
    
    // Build image HTML
    let imageHTML = '';
    if (project.images && project.images.length > 0) {
        // Use first image as main image
        imageHTML = `
            <div class="project-detail-image mb-4">
                <img src="${project.images[0]}" alt="${project.title}" class="img-fluid rounded shadow">
            </div>
        `;
    } else if (project.image) {
        imageHTML = `
            <div class="project-detail-image mb-4">
                <img src="${project.image}" alt="${project.title}" class="img-fluid rounded shadow">
            </div>
        `;
    }
    
    // Build content HTML with paragraphs
    let contentHTML = '';
    if (project.content) {
        // Split content into paragraphs
        const paragraphs = project.content.split('\n\n').filter(p => p.trim().length > 0);
        contentHTML = `
            <div class="project-detail-content">
                ${paragraphs.map(paragraph => `<p class="project-detail-paragraph">${paragraph.trim()}</p>`).join('')}
            </div>
        `;
    }
    
    // Build details HTML
    let detailsHTML = '';
    if (project.details && project.details.length > 0) {
        detailsHTML = `
            <div class="project-detail-features">
                <h2 class="project-detail-section-title">Key Features</h2>
                <div class="project-detail-list">
                    ${project.details.map(detail => `<div class="project-detail-item">${detail}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    // Build full HTML
    projectDetailContainer.innerHTML = `
        <article class="project-detail-article">
            <header class="project-detail-header">
                <h1 class="project-detail-title">${project.title}</h1>
                <p class="project-detail-description">${project.description}</p>
            </header>
            ${imageHTML}
            ${contentHTML}
            ${detailsHTML}
        </article>
    `;
});

