let scene, camera, renderer, skillsGroup;
let isUserInteracting = false;
let rotationSpeed = 0.001;
let lastMouseX, lastMouseY;

function isMobile() {
    return window.innerWidth <= 768;
}

const skills = [
    'Python', 'JavaScript', 'Machine Learning', 'Deep Learning', 'NLP',
    'Computer Vision', 'Data Analysis', 'TensorFlow', 'PyTorch', 'SQL',
    'Git', 'Azure', 'Flask', 'HTML', 'CSS', 'Bootstrap', 'C#', 'Java', 'C++', 'Scikit-Learn', 'Pandas', 'Numpy', 'Matplotlib', 'OpenCV', 'OpenAI', 'LangChain', 'LLMs', 'RAG'
];

const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F06292', '#AED581', '#7986CB', '#4DB6AC', '#FFD54F',
    '#9575CD', '#4DD0E1', '#81C784', '#DCE775', '#64B5F6'
];

function init() {
    console.log('Initializing skills globe');
    const container = document.getElementById('skills-globe');
    if (!container) {
        console.error('Skills globe container not found');
        return;
    }

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    skillsGroup = new THREE.Group();
    scene.add(skillsGroup);

    // Create floating skill labels
    skills.forEach((skill, index) => {
        const skillObject = createSkillObject(skill, index);
        skillsGroup.add(skillObject);
    });

    updateCameraPosition();

    // Add event listeners for user interaction
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mouseleave', onMouseUp);
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchmove', onTouchMove);
    container.addEventListener('touchend', onTouchEnd);

    window.addEventListener('resize', onWindowResize);

    animate();
    console.log('Skills globe initialized successfully');
}

function createSkillObject(skill, index) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const canvasSize = getCanvasSize();
    canvas.width = canvasSize;
    canvas.height = canvasSize / 2;

    const fontSize = getFontSize();
    context.font = `Bold ${fontSize}px Arial`;
    context.fillStyle = colors[index % colors.length];
    context.textAlign = 'center';
    context.fillText(skill, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);

    const phi = Math.acos(-1 + (2 * index) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;
    const radius = getGlobeRadius();

    sprite.position.setFromSphericalCoords(radius, phi, theta);
    sprite.scale.set(getSpriteScale(), getSpriteScale() / 2, 1);

    return sprite;
}

function getCanvasSize() {
    return window.innerWidth < 768 ? 256 : 512;
}

function getFontSize() {
    return window.innerWidth < 768 ? 24 : 48;
}

function getGlobeRadius() {
    return window.innerWidth < 768 ? 7 : 10;
}

function getSpriteScale() {
    return window.innerWidth < 768 ? 2 : 4;
}

function updateCameraPosition() {
    camera.position.z = window.innerWidth < 768 ? 12 : 15;
}

function onWindowResize() {
    const container = document.getElementById('skills-globe');
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    updateCameraPosition();

    // Recreate skill objects with new sizes
    while(skillsGroup.children.length > 0) {
        skillsGroup.remove(skillsGroup.children[0]);
    }
    skills.forEach((skill, index) => {
        const skillObject = createSkillObject(skill, index);
        skillsGroup.add(skillObject);
    });
}

function animate() {
    requestAnimationFrame(animate);

    if (!isUserInteracting) {
        // Rotate vertically when not interacting
        skillsGroup.rotation.x += rotationSpeed;
    }

    renderer.render(scene, camera);
}

function onMouseDown(event) {
    isUserInteracting = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
}

function onMouseMove(event) {
    if (isUserInteracting) {
        const deltaX = event.clientX - lastMouseX;
        const deltaY = event.clientY - lastMouseY;

        skillsGroup.rotation.y += deltaX * 0.005;
        skillsGroup.rotation.x += deltaY * 0.005;

        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
    }
}

function onMouseUp() {
    isUserInteracting = false;
}

function onTouchStart(event) {
    if (event.touches.length === 1) {
        isUserInteracting = true;
        lastMouseX = event.touches[0].pageX;
        lastMouseY = event.touches[0].pageY;
    }
}

function onTouchMove(event) {
    if (isUserInteracting && event.touches.length === 1) {
        const deltaX = event.touches[0].pageX - lastMouseX;
        const deltaY = event.touches[0].pageY - lastMouseY;

        skillsGroup.rotation.y += deltaX * 0.005;
        skillsGroup.rotation.x += deltaY * 0.005;

        lastMouseX = event.touches[0].pageX;
        lastMouseY = event.touches[0].pageY;
    }
}

function onTouchEnd() {
    isUserInteracting = false;
}

document.addEventListener('DOMContentLoaded', init);
