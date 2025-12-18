// Character data (placeholder - easy to swap)
const characters = [
    {
        id: 'CH-001',
        name: 'Gurr',
        type: '3d',
        model: 'gurr.glb',
        stats: {
            'Power': 88,
            'Speed': 75,
            'Intelligence': 82,
            'Defense': 90,
            'Agility': 70,
            'Charisma': 85
        }
    },
    {
        id: 'CH-002',
        name: 'Nexus',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMGZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TkVYVVM8L3RleHQ+PC9zdmc+',
        stats: {
            'Power': 85,
            'Speed': 70,
            'Intelligence': 95,
            'Defense': 60,
            'Agility': 80,
            'Charisma': 75
        }
    },
    {
        id: 'CH-002',
        name: 'Vortex',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMGZhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Vk9SVEVYPC90ZXh0Pjwvc3ZnPg==',
        stats: {
            'Power': 90,
            'Speed': 95,
            'Intelligence': 65,
            'Defense': 70,
            'Agility': 90,
            'Charisma': 60
        }
    },
    {
        id: 'CH-003',
        name: 'Axiom',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMDBhYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5BWElPTTwvdGV4dD48L3N2Zz4=',
        stats: {
            'Power': 75,
            'Speed': 60,
            'Intelligence': 100,
            'Defense': 85,
            'Agility': 55,
            'Charisma': 90
        }
    },
    {
        id: 'CH-004',
        name: 'Zephyr',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMGZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+WkVQSFlSPC90ZXh0Pjwvc3ZnPg==',
        stats: {
            'Power': 65,
            'Speed': 100,
            'Intelligence': 75,
            'Defense': 50,
            'Agility': 100,
            'Charisma': 85
        }
    },
    {
        id: 'CH-005',
        name: 'Cipher',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMGZhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q0lQSEVSPC90ZXh0Pjwvc3ZnPg==',
        stats: {
            'Power': 80,
            'Speed': 75,
            'Intelligence': 90,
            'Defense': 80,
            'Agility': 70,
            'Charisma': 95
        }
    },
    {
        id: 'CH-006',
        name: 'Quantum',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjgwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iIzAwMCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMDBhYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5RVUFOVFVNPC90ZXh0Pjwvc3ZnPg==',
        stats: {
            'Power': 95,
            'Speed': 80,
            'Intelligence': 85,
            'Defense': 90,
            'Agility': 75,
            'Charisma': 70
        }
    }
];

// Initialize Three.js background
function initBackground() {
    if (typeof THREE === 'undefined') {
        console.error('THREE is not defined. Please ensure Three.js is loaded.');
        return;
    }
    
    const container = document.getElementById('background-canvas');
    if (!container) {
        console.error('Background canvas container not found');
        return;
    }
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: false 
    });
    
    // Append the canvas to the container
    container.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    console.log('Renderer created, canvas size:', window.innerWidth, window.innerHeight);
    
    // Color palette: greens, cyans, soft blues (darker, more atmospheric)
    const colors = {
        cyan: 0x00ffff,
        darkCyan: 0x0088aa,
        green: 0x00ff88,
        darkGreen: 0x008855,
        softBlue: 0x4488ff,
        darkBlue: 0x0044aa
    };
    
    // Create multiple wireframe grids at different depths for matrix effect
    const grids = [];
    for (let i = 0; i < 3; i++) {
        const gridSize = 150 + i * 50;
        const gridDivisions = 30 + i * 10;
        const gridColor = i === 0 ? colors.darkCyan : (i === 1 ? colors.darkGreen : colors.darkBlue);
        const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, gridColor, gridColor);
        gridHelper.material.opacity = 0.08 + i * 0.02;
        gridHelper.material.transparent = true;
        gridHelper.position.y = (i - 1) * 30;
        gridHelper.rotation.x = Math.PI / 2;
        scene.add(gridHelper);
        grids.push({
            grid: gridHelper,
            baseOpacity: 0.08 + i * 0.02,
            flickerPhase: Math.random() * Math.PI * 2
        });
    }
    
    // Create wireframe boxes for depth (fewer, more subtle)
    const boxes = [];
    for (let i = 0; i < 30; i++) {
        const size = Math.random() * 15 + 8;
        const geometry = new THREE.BoxGeometry(size, size, size);
        const edges = new THREE.EdgesGeometry(geometry);
        
        // Vary colors: greens, cyans, soft blues
        const colorIndex = i % 4;
        let color;
        if (colorIndex === 0) color = colors.darkCyan;
        else if (colorIndex === 1) color = colors.darkGreen;
        else if (colorIndex === 2) color = colors.softBlue;
        else color = colors.darkBlue;
        
        const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ 
                color: color,
                opacity: 0.15 + Math.random() * 0.1,
                transparent: true
            })
        );
        line.position.set(
            (Math.random() - 0.5) * 250,
            (Math.random() - 0.5) * 250,
            (Math.random() - 0.5) * 250
        );
        scene.add(line);
        boxes.push({
            mesh: line,
            baseOpacity: 0.15 + Math.random() * 0.1,
            flickerPhase: Math.random() * Math.PI * 2,
            flickerSpeed: 0.5 + Math.random() * 1.5,
            rotationSpeed: (Math.random() - 0.5) * 0.001
        });
    }
    
    // Add subtle floating particles (fewer, dimmer)
    const particles = [];
    for (let i = 0; i < 40; i++) {
        const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const colorIndex = i % 3;
        let color;
        if (colorIndex === 0) color = colors.darkCyan;
        else if (colorIndex === 1) color = colors.darkGreen;
        else color = colors.softBlue;
        
        const material = new THREE.MeshBasicMaterial({ 
            color: color,
            opacity: 0.2 + Math.random() * 0.2,
            transparent: true
        });
        const particle = new THREE.Mesh(geometry, material);
        particle.position.set(
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 400
        );
        scene.add(particle);
        particles.push({
            mesh: particle,
            speed: Math.random() * 0.008 + 0.005,
            baseOpacity: 0.2 + Math.random() * 0.2,
            flickerPhase: Math.random() * Math.PI * 2,
            flickerSpeed: 1 + Math.random() * 2
        });
    }
    
    // Add some connecting lines for matrix effect
    const lines = [];
    for (let i = 0; i < 20; i++) {
        const points = [];
        const startX = (Math.random() - 0.5) * 200;
        const startY = (Math.random() - 0.5) * 200;
        const startZ = (Math.random() - 0.5) * 200;
        
        for (let j = 0; j < 5; j++) {
            points.push(new THREE.Vector3(
                startX + (Math.random() - 0.5) * 50,
                startY + (Math.random() - 0.5) * 50,
                startZ + (Math.random() - 0.5) * 50
            ));
        }
        
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const colorIndex = i % 3;
        let color;
        if (colorIndex === 0) color = colors.darkCyan;
        else if (colorIndex === 1) color = colors.darkGreen;
        else color = colors.softBlue;
        
        const line = new THREE.Line(
            geometry,
            new THREE.LineBasicMaterial({
                color: color,
                opacity: 0.1 + Math.random() * 0.1,
                transparent: true
            })
        );
        scene.add(line);
        lines.push({
            mesh: line,
            baseOpacity: 0.1 + Math.random() * 0.1,
            flickerPhase: Math.random() * Math.PI * 2
        });
    }
    
    camera.position.z = 120;
    camera.position.y = 40;
    camera.lookAt(0, 0, 0);
    
    // Animation loop with subtle motion
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.005; // Slower time increment for more subtle movement
        
        // Very slow parallax camera movement
        camera.position.x = Math.sin(time * 0.03) * 15; // Much slower
        camera.position.y = 40 + Math.cos(time * 0.04) * 10; // Much slower
        camera.lookAt(0, 0, 0);
        
        // Grid animations - subtle pulsing/flickering
        grids.forEach((gridObj, i) => {
            const flicker = Math.sin(time * 0.5 + gridObj.flickerPhase) * 0.02;
            gridObj.grid.material.opacity = Math.max(0.05, gridObj.baseOpacity + flicker);
        });
        
        // Rotate boxes very slowly
        boxes.forEach((boxObj, i) => {
            boxObj.mesh.rotation.x += boxObj.rotationSpeed;
            boxObj.mesh.rotation.y += boxObj.rotationSpeed * 0.7;
            
            // Light flickers on boxes
            const flicker = Math.sin(time * boxObj.flickerSpeed + boxObj.flickerPhase) * 0.05;
            boxObj.mesh.material.opacity = Math.max(0.1, Math.min(0.25, boxObj.baseOpacity + flicker));
        });
        
        // Move particles slowly
        particles.forEach((particleObj) => {
            particleObj.mesh.position.y += particleObj.speed;
            if (particleObj.mesh.position.y > 200) {
                particleObj.mesh.position.y = -200;
            }
            particleObj.mesh.rotation.x += 0.005;
            particleObj.mesh.rotation.y += 0.005;
            
            // Flicker effect on particles
            const flicker = Math.sin(time * particleObj.flickerSpeed + particleObj.flickerPhase) * 0.1;
            particleObj.mesh.material.opacity = Math.max(0.1, Math.min(0.4, particleObj.baseOpacity + flicker));
        });
        
        // Flicker effect on connecting lines
        lines.forEach((lineObj) => {
            const flicker = Math.sin(time * 1.5 + lineObj.flickerPhase) * 0.05;
            lineObj.mesh.material.opacity = Math.max(0.05, Math.min(0.2, lineObj.baseOpacity + flicker));
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Create character cubes with wireframe sphere
function createCharacterCubes() {
    const gallery = document.getElementById('gallery');
    
    characters.forEach((character, index) => {
        const cubeWrapper = document.createElement('div');
        cubeWrapper.className = 'character-cube';
        cubeWrapper.dataset.characterIndex = index;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'cube-wrapper';
        
        // Create canvas for 3D scene (sphere + character)
        const canvas = document.createElement('canvas');
        canvas.className = 'character-3d-scene';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '10';
        
        wrapper.appendChild(canvas);
        cubeWrapper.appendChild(wrapper);
        
        // Initialize 3D scene with wireframe sphere and character
        initCharacterSphere(canvas, character, cubeWrapper);
        
        // Character label
        const label = document.createElement('div');
        label.className = 'character-label';
        label.textContent = character.name;
        cubeWrapper.appendChild(label);
        
        // Click handler
        cubeWrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            enlargeCharacter(index);
        });
        
        gallery.appendChild(cubeWrapper);
    });
}

// Initialize 3D scene with wireframe sphere and character
function initCharacterSphere(canvas, character, cubeWrapper) {
    if (typeof THREE === 'undefined') {
        console.error('THREE is not defined. Cannot load 3D model.');
        return;
    }
    
    const width = 280;
    const height = 320;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent
    
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Disable depth test for better transparency rendering
    renderer.sortObjects = false;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x00ffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0x00ffff, 0.5);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0x0088aa, 0.3);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);
    
    // Check if GLTFLoader is available
    const GLTFLoaderClass = window.GLTFLoader || window.GLTFLoaderModule;
    
    if (!GLTFLoaderClass) {
        console.error('GLTFLoader not available');
        return;
    }
    
    const loader = new GLTFLoaderClass();
    let sphereModel = null;
    let characterModel = null;
    let mixer = null;
    let modelsLoaded = 0;
    const totalModels = 2; // sphere + character (if 3D)
    
    // Load wireframe sphere
    loader.load(
        'wireframe_sphere.glb',
        (gltf) => {
            sphereModel = gltf.scene;
            
            // Make sphere materials transparent and grey
            sphereModel.traverse((child) => {
                if (child.isMesh) {
                    // Update material to be transparent and grey
                    if (child.material) {
                        child.material.transparent = true;
                        child.material.opacity = 0.3; // More transparent
                        child.material.color.set(0x888888); // Grey color
                        child.material.emissive.set(0x444444); // Subtle grey glow
                        child.material.needsUpdate = true;
                    }
                    // Disable depth write to prevent clipping issues
                    if (child.material) {
                        child.material.depthWrite = false;
                    }
                }
            });
            
            // Scale sphere to fit nicely
            const box = new THREE.Box3().setFromObject(sphereModel);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 4.5 / maxDim; // Make sphere slightly larger
            sphereModel.scale.multiplyScalar(scale);
            
            // Center sphere
            const center = box.getCenter(new THREE.Vector3());
            sphereModel.position.x = -center.x * scale;
            sphereModel.position.y = -center.y * scale;
            sphereModel.position.z = -center.z * scale;
            
            scene.add(sphereModel);
            modelsLoaded++;
            
            // Load character if it's a 3D model
            if (character.type === '3d' && character.model) {
                loadCharacterModel();
            } else {
                // For 2D images, we'll handle them differently or just show sphere
                modelsLoaded++;
            }
        },
        undefined,
        (error) => {
            console.error('Error loading wireframe sphere:', error);
        }
    );
    
    // Load character model (if 3D)
    function loadCharacterModel() {
        loader.load(
            character.model,
            (gltf) => {
                characterModel = gltf.scene;
                
                // Center and scale character to fit inside sphere
                const box = new THREE.Box3().setFromObject(characterModel);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 2.5 / maxDim; // Smaller than sphere
                characterModel.scale.multiplyScalar(scale);
                
                characterModel.position.x = -center.x * scale;
                characterModel.position.y = -center.y * scale;
                characterModel.position.z = -center.z * scale;
                
                scene.add(characterModel);
                
                // Handle animations if present
                if (gltf.animations && gltf.animations.length > 0) {
                    mixer = new THREE.AnimationMixer(characterModel);
                    gltf.animations.forEach((clip) => {
                        mixer.clipAction(clip).play();
                    });
                }
                
                modelsLoaded++;
                cubeWrapper.dataset.model3d = 'true';
            },
            undefined,
            (error) => {
                console.error('Error loading character model:', error);
                modelsLoaded++;
            }
        );
    }
    
    // For 2D images, create a plane with the image texture
    if (!character.type || character.type !== '3d') {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(
            character.image,
            (texture) => {
                const geometry = new THREE.PlaneGeometry(2, 2.3);
                const material = new THREE.MeshBasicMaterial({
                    map: texture,
                    transparent: true,
                    side: THREE.DoubleSide
                });
                const plane = new THREE.Mesh(geometry, material);
                plane.position.z = 0;
                scene.add(plane);
                modelsLoaded++;
            },
            undefined,
            (error) => {
                console.error('Error loading character image:', error);
                modelsLoaded++;
            }
        );
    }
    
    // Animation loop
    const clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        
        const delta = clock.getDelta();
        if (mixer) {
            mixer.update(delta);
        }
        
        // Rotate sphere horizontally only (360 degrees on Y axis)
        if (sphereModel) {
            sphereModel.rotation.y += 0.003;
            // Remove X rotation to only rotate horizontally
        }
        
        // Rotate character slowly (opposite direction for visual interest)
        if (characterModel) {
            characterModel.rotation.y -= 0.005;
        }
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Store renderer and scene for cleanup if needed
    cubeWrapper.dataset.renderer = renderer;
    cubeWrapper.dataset.scene = scene;
}

// Enlarge character
function enlargeCharacter(index) {
    const character = characters[index];
    const cubes = document.querySelectorAll('.character-cube');
    const clickedCube = cubes[index];
    const overlay = document.querySelector('.overlay') || createOverlay();
    
    // Add enlarged class
    clickedCube.classList.add('enlarged');
    overlay.classList.add('active');
    
    // Show stats panel
    showStatsPanel(character);
    
    // Note: Rotation is now handled by Three.js animation loop
    // No need for CSS rotation on the cube element
}

// Create overlay
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.addEventListener('click', closeEnlarged);
    document.body.appendChild(overlay);
    return overlay;
}

// Close enlarged view
function closeEnlarged() {
    const enlargedCube = document.querySelector('.character-cube.enlarged');
    const overlay = document.querySelector('.overlay');
    const statsPanel = document.getElementById('statsPanel');
    
    if (enlargedCube) {
        // No need to clear rotation interval as it's handled by Three.js
        enlargedCube.classList.remove('enlarged');
    }
    
    if (overlay) {
        overlay.classList.remove('active');
    }
    
    if (statsPanel) {
        statsPanel.classList.remove('active');
    }
}

// Show stats panel with typing animation
function showStatsPanel(character) {
    const statsPanel = document.getElementById('statsPanel');
    const characterName = document.getElementById('characterName');
    const characterId = document.getElementById('characterId');
    const statsBody = document.getElementById('statsBody');
    
    // Set character info
    characterName.textContent = '';
    characterId.textContent = '';
    statsBody.innerHTML = '';
    
    // Show panel
    statsPanel.classList.add('active');
    
    // Type character name
    typeText(characterName, character.name, 50, () => {
        // Type character ID
        typeText(characterId, `[ ${character.id} ]`, 30, () => {
            // Create and animate stats
            createStats(character.stats);
        });
    });
}

// Typing animation
function typeText(element, text, speed, callback) {
    let index = 0;
    element.classList.add('typing');
    
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(typeInterval);
            element.classList.remove('typing');
            if (callback) callback();
        }
    }, speed);
}

// Create stats with animated bars
function createStats(stats) {
    const statsBody = document.getElementById('statsBody');
    
    Object.entries(stats).forEach(([statName, statValue], index) => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        
        const label = document.createElement('div');
        label.className = 'stat-label';
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = statName;
        
        const valueSpan = document.createElement('span');
        valueSpan.className = 'stat-value';
        valueSpan.textContent = statValue;
        
        label.appendChild(nameSpan);
        label.appendChild(valueSpan);
        
        const barContainer = document.createElement('div');
        barContainer.className = 'stat-bar-container';
        
        const bar = document.createElement('div');
        bar.className = 'stat-bar';
        bar.style.width = '0%';
        
        barContainer.appendChild(bar);
        
        statItem.appendChild(label);
        statItem.appendChild(barContainer);
        
        statsBody.appendChild(statItem);
        
        // Animate bar after a short delay
        setTimeout(() => {
            bar.style.width = `${statValue}%`;
        }, index * 100 + 200);
    });
}

// Close button handler
document.getElementById('closeBtn').addEventListener('click', closeEnlarged);

// Initialize on load
function initializeApp() {
    console.log('Initializing app...');
    
    // Wait for THREE to be available
    if (typeof THREE === 'undefined') {
        console.log('Waiting for THREE.js...');
        setTimeout(initializeApp, 50);
        return;
    }
    
    console.log('THREE.js loaded, initializing background...');
    try {
        initBackground();
        console.log('Background initialized successfully');
    } catch (error) {
        console.error('Error initializing background:', error);
    }
    
    // Wait for GLTFLoader if needed
    function initCubes() {
        if (typeof THREE !== 'undefined') {
            console.log('Creating character cubes...');
            try {
                createCharacterCubes();
                console.log('Character cubes created successfully');
            } catch (error) {
                console.error('Error creating character cubes:', error);
            }
        } else {
            setTimeout(initCubes, 100);
        }
    }
    
    initCubes();
}

// Try to initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already ready
    initializeApp();
}

