/**
 * ==================== Gallery Pro - Advanced Image Gallery ====================
 * A feature-rich image gallery with built-in editing tools
 * Author: Gallery Pro Team
 * Version: 1.0.0
 */

// ==================== Image Data Store ====================
let images = [
    // ==================== 10 Nature Images ====================
    { id: 1, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', title: 'Forest Sunlight', category: 'nature', favorite: true },
    { id: 2, src: 'https://images.unsplash.com/photo-1505854065738-dec62e815741?w=800&h=600&fit=crop', title: 'Ocean Waves', category: 'nature', favorite: false },
    { id: 3, src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop', title: 'Mountain Lake', category: 'nature', favorite: true },
    { id: 4, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop', title: 'Foggy Mountains', category: 'nature', favorite: false },
    { id: 5, src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop', title: 'Waterfall Paradise', category: 'nature', favorite: true },
    { id: 6, src: 'https://images.unsplash.com/photo-1518173946687-a4c036bc3c95?w=800&h=600&fit=crop', title: 'Autumn Forest', category: 'nature', favorite: false },
    { id: 7, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', title: 'Desert Sunset', category: 'nature', favorite: false },
    { id: 8, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop', title: 'Valley View', category: 'nature', favorite: false },
    { id: 9, src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop', title: 'Green Meadow', category: 'nature', favorite: false },
    { id: 10, src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop', title: 'Rainbow Hills', category: 'nature', favorite: true },

    // ==================== 10 Travel Images ====================
    { id: 20, src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop', title: 'Paris Eiffel Tower', category: 'travel', favorite: true },
    { id: 21, src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop', title: 'Tokyo Temple', category: 'travel', favorite: false },
    { id: 22, src: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&fit=crop', title: 'New York Skyline', category: 'travel', favorite: true },
    { id: 23, src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop', title: 'Venice Canals', category: 'travel', favorite: false },
    { id: 24, src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop', title: 'Rome Colosseum', category: 'travel', favorite: true },
    { id: 25, src: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop', title: 'Sydney Opera', category: 'travel', favorite: false },
    { id: 26, src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&h=600&fit=crop', title: 'Dubai Burj Khalifa', category: 'travel', favorite: false },
    { id: 27, src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop', title: 'London Bridge', category: 'travel', favorite: false },
    { id: 28, src: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=600&fit=crop', title: 'Barcelona Streets', category: 'travel', favorite: false },
    { id: 29, src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop', title: 'Dubai Marina', category: 'travel', favorite: true },

    // ==================== 10 Tech Images ====================
    { id: 30, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop', title: 'Circuit Board', category: 'tech', favorite: true },
    { id: 31, src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop', title: 'Retro Gaming', category: 'tech', favorite: false },
    { id: 32, src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop', title: 'Laptop Setup', category: 'tech', favorite: true },
    { id: 33, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop', title: 'Coding Screen', category: 'tech', favorite: false },
    { id: 34, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop', title: 'Team Working', category: 'tech', favorite: true },
    { id: 35, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop', title: 'Matrix Code', category: 'tech', favorite: false },
    { id: 36, src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop', title: 'Server Room', category: 'tech', favorite: false },
    { id: 37, src: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop', title: 'VR Headset', category: 'tech', favorite: false },
    { id: 38, src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop', title: 'Robot Future', category: 'tech', favorite: true },
    { id: 39, src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop', title: 'Code Debug', category: 'tech', favorite: false },

    // ==================== 10 Adventures Images ====================
    { id: 40, src: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop', title: 'Mountain Climbing', category: 'adventures', favorite: true },
    { id: 41, src: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800&h=600&fit=crop', title: 'Skydiving Thrill', category: 'adventures', favorite: false },
    { id: 42, src: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=600&fit=crop', title: 'Camping Night', category: 'adventures', favorite: true },
    { id: 43, src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop', title: 'Hiking Trail', category: 'adventures', favorite: false },
    { id: 44, src: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&h=600&fit=crop', title: 'Scuba Diving', category: 'adventures', favorite: true },
    { id: 45, src: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&h=600&fit=crop', title: 'Kayaking River', category: 'adventures', favorite: false },
    { id: 46, src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop', title: 'Cycling Race', category: 'adventures', favorite: false },
    { id: 47, src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop', title: 'Epic Mountains', category: 'adventures', favorite: true },
    { id: 48, src: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&h=600&fit=crop', title: 'Northern Lights', category: 'adventures', favorite: false },
    { id: 49, src: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=800&h=600&fit=crop', title: 'Rock Climbing', category: 'adventures', favorite: false },

    // ==================== 10 History Images ====================
    { id: 50, src: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=600&fit=crop', title: 'Great Wall China', category: 'history', favorite: true },
    { id: 51, src: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&h=600&fit=crop', title: 'Egyptian Pyramids', category: 'history', favorite: false },
    { id: 52, src: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=600&fit=crop', title: 'Greek Parthenon', category: 'history', favorite: true },
    { id: 53, src: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop', title: 'Taj Mahal', category: 'history', favorite: false },
    { id: 54, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop', title: 'Machu Picchu', category: 'history', favorite: true },
    { id: 55, src: 'https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=800&h=600&fit=crop', title: 'Stonehenge', category: 'history', favorite: false },
    { id: 56, src: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop', title: 'Roman Forum', category: 'history', favorite: false },
    { id: 57, src: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=600&fit=crop', title: 'Petra Jordan', category: 'history', favorite: true },
    { id: 58, src: 'https://images.unsplash.com/photo-1569230516306-5a8cb5586399?w=800&h=600&fit=crop', title: 'Angkor Wat', category: 'history', favorite: false },
    { id: 59, src: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&h=600&fit=crop', title: 'Ancient Castle', category: 'history', favorite: false },

    // ==================== 10 People Images ====================
    { id: 60, src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop', title: 'Friends Together', category: 'people', favorite: true },
    { id: 61, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop', title: 'Team Celebration', category: 'people', favorite: false },
    { id: 62, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop', title: 'Office Meeting', category: 'people', favorite: false },
    { id: 63, src: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop', title: 'Happy Crowd', category: 'people', favorite: false },
    { id: 64, src: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=800&h=600&fit=crop', title: 'Family Picnic', category: 'people', favorite: true },

    // ==================== 10 Animal Images ====================
    { id: 100, src: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800&h=600&fit=crop', title: 'Majestic Lion', category: 'animal', favorite: true },
    { id: 101, src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop', title: 'Giant Panda', category: 'animal', favorite: false },
    { id: 102, src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&h=600&fit=crop', title: 'African Elephant', category: 'animal', favorite: true },
    { id: 103, src: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&h=600&fit=crop', title: 'Red Fox', category: 'animal', favorite: false },
    { id: 104, src: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&h=600&fit=crop', title: 'Siberian Tiger', category: 'animal', favorite: true },
    { id: 105, src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800&h=600&fit=crop', title: 'Polar Bear', category: 'animal', favorite: false },
    { id: 106, src: 'https://images.unsplash.com/photo-1475809913362-28a064062ccd?w=800&h=600&fit=crop', title: 'Cheetah Sprint', category: 'animal', favorite: false },
    { id: 107, src: 'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=800&h=600&fit=crop', title: 'Grey Wolf', category: 'animal', favorite: false },
    { id: 108, src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&h=600&fit=crop', title: 'Sea Turtle', category: 'animal', favorite: false },
    { id: 109, src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&h=600&fit=crop', title: 'Happy Dog', category: 'animal', favorite: true },
    
    // ==================== 10 Bird Images ====================
    { id: 200, src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&h=600&fit=crop', title: 'Bald Eagle', category: 'bird', favorite: true },
    { id: 201, src: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800&h=600&fit=crop', title: 'Colorful Parrot', category: 'bird', favorite: false },
    { id: 202, src: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=800&h=600&fit=crop', title: 'Hummingbird', category: 'bird', favorite: true },
    { id: 203, src: 'https://images.unsplash.com/photo-1555169062-013468b47731?w=800&h=600&fit=crop', title: 'Blue Peacock', category: 'bird', favorite: false },
    { id: 204, src: 'https://images.unsplash.com/photo-1544923246-77307dd628b0?w=800&h=600&fit=crop', title: 'Snowy Owl', category: 'bird', favorite: true },
    { id: 205, src: 'https://images.unsplash.com/photo-1480044965905-02098d419e96?w=800&h=600&fit=crop', title: 'Flamingo', category: 'bird', favorite: false },
    { id: 206, src: 'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=800&h=600&fit=crop', title: 'Kingfisher', category: 'bird', favorite: false },
    { id: 207, src: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=800&h=600&fit=crop', title: 'Robin Red', category: 'bird', favorite: false },
    { id: 208, src: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=800&h=600&fit=crop', title: 'Toucan', category: 'bird', favorite: true },
    { id: 209, src: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=800&h=600&fit=crop', title: 'Swan Lake', category: 'bird', favorite: false },
];

// ==================== Application State ====================
let currentFilter = 'all';
let showFavoritesOnly = false;
let currentLightboxIndex = 0;
let currentEditingImage = null;
let editHistory = [];
let historyIndex = -1;

// Editor state object
let editorState = {
    originalImage: null,
    zoom: 1,
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    rotation: 0,
    flipH: false,
    flipV: false,
    grayscale: false,
    sepia: false,
    invert: false,
    isDrawing: false,
    drawMode: null, // 'draw' or 'eraser'
    drawings: [],
    texts: [],
    cropMode: false,
    cropStart: null,
    cropEnd: null
};

// ==================== DOM Elements ====================
const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxInfo = document.getElementById('lightboxInfo');
const editorModal = document.getElementById('editorModal');
const editorCanvas = document.getElementById('editorCanvas');
const ctx = editorCanvas.getContext('2d');
const uploadModal = document.getElementById('uploadModal');
const toastContainer = document.getElementById('toastContainer');

// ==================== Theme Toggle ====================
const themeToggle = document.getElementById('themeToggle');
let isDarkMode = localStorage.getItem('theme') === 'dark';

/**
 * Updates the theme based on isDarkMode state
 */
function updateTheme() {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    updateTheme();
});

// Initialize theme
updateTheme();

// ==================== Toast Notifications ====================
/**
 * Shows a toast notification
 * @param {string} message - The message to display
 * @param {string} type - Type of toast: 'info', 'success', or 'error'
 */
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==================== Gallery Rendering ====================
/**
 * Renders the gallery based on current filters
 */
function renderGallery() {
    let filteredImages = images;

    // Apply filters
    if (showFavoritesOnly) {
        filteredImages = images.filter(img => img.favorite);
    } else if (currentFilter !== 'all') {
        filteredImages = images.filter(img => img.category === currentFilter);
    }

    // Show empty state if no images
    if (filteredImages.length === 0) {
        galleryGrid.innerHTML = '';
        document.getElementById('emptyState').style.display = 'block';
        return;
    }

    document.getElementById('emptyState').style.display = 'none';

    // Render gallery cards
    galleryGrid.innerHTML = filteredImages.map((img, index) => `
        <div class="gallery-card" data-id="${img.id}" data-index="${index}">
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="card-overlay">
                <div class="card-info">
                    <div class="card-title">${img.title}</div>
                    <div class="card-category">${getCategoryEmoji(img.category)} ${capitalize(img.category)}</div>
                </div>
            </div>
            <div class="card-actions">
                <button class="card-btn favorite ${img.favorite ? 'active' : ''}" data-id="${img.id}" title="Favorite">
                    ${img.favorite ? '❤️' : '🤍'}
                </button>
                <button class="card-btn edit-btn" data-id="${img.id}" title="Edit">✏️</button>
                <button class="card-btn delete-btn" data-id="${img.id}" title="Delete">🗑️</button>
            </div>
        </div>
    `).join('');

    attachCardEvents();
}

/**
 * Gets emoji for a category
 * @param {string} category - The category name
 * @returns {string} The corresponding emoji
 */
function getCategoryEmoji(category) {
    const emojis = {
        nature: '🌿', travel: '✈️', tech: '💻', adventures: '🏔️',
        people: '👥', animal: '🐾', history: '🏛️', bird: '🐦'
    };
    return emojis[category] || '📷';
}

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The string to capitalize
 * @returns {string} Capitalized string
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Attaches event listeners to gallery cards
 */
function attachCardEvents() {
    // Card click for lightbox
    document.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.card-btn')) {
                const id = parseInt(card.dataset.id);
                openLightbox(id);
            }
        });
    });

    // Favorite buttons
    document.querySelectorAll('.card-btn.favorite').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleFavorite(id);
        });
    });

    // Edit buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            openEditor(id);
        });
    });

    // Delete buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            deleteImage(id);
        });
    });
}

// ==================== Category Filters ====================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.category;
        showFavoritesOnly = false;
        document.getElementById('favoritesBtn').classList.remove('btn-primary');
        document.getElementById('favoritesBtn').classList.add('btn-secondary');
        renderGallery();
    });
});

// Favorites filter toggle
document.getElementById('favoritesBtn').addEventListener('click', () => {
    showFavoritesOnly = !showFavoritesOnly;
    const btn = document.getElementById('favoritesBtn');
    if (showFavoritesOnly) {
        btn.classList.remove('btn-secondary');
        btn.classList.add('btn-primary');
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    } else {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
        document.querySelector('.filter-btn[data-category="all"]').classList.add('active');
    }
    renderGallery();
});

/**
 * Toggles favorite status of an image
 * @param {number} id - The image ID
 */
function toggleFavorite(id) {
    const img = images.find(i => i.id === id);
    if (img) {
        img.favorite = !img.favorite;
        showToast(img.favorite ? 'Added to favorites ❤️' : 'Removed from favorites', img.favorite ? 'success' : 'info');
        renderGallery();
    }
}

/**
 * Deletes an image from the gallery
 * @param {number} id - The image ID
 */
function deleteImage(id) {
    if (confirm('Are you sure you want to delete this image?')) {
        images = images.filter(i => i.id !== id);
        showToast('Image deleted', 'info');
        renderGallery();
    }
}

// ==================== Lightbox ====================
/**
 * Opens the lightbox with the specified image
 * @param {number} id - The image ID
 */
function openLightbox(id) {
    const filteredImages = getFilteredImages();
    currentLightboxIndex = filteredImages.findIndex(img => img.id === id);
    if (currentLightboxIndex === -1) return;

    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Gets currently filtered images
 * @returns {Array} Filtered images array
 */
function getFilteredImages() {
    if (showFavoritesOnly) {
        return images.filter(img => img.favorite);
    } else if (currentFilter !== 'all') {
        return images.filter(img => img.category === currentFilter);
    }
    return images;
}

/**
 * Updates the lightbox image and info
 */
function updateLightboxImage() {
    const filteredImages = getFilteredImages();
    const img = filteredImages[currentLightboxIndex];
    if (img) {
        lightboxImage.src = img.src;
        lightboxInfo.innerHTML = `<strong>${img.title}</strong> - ${getCategoryEmoji(img.category)} ${capitalize(img.category)} (${currentLightboxIndex + 1}/${filteredImages.length})`;
    }
}

/**
 * Closes the lightbox modal
 */
function closeLightboxModal() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Lightbox event listeners
document.getElementById('closeLightbox').addEventListener('click', closeLightboxModal);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightboxModal();
});

document.getElementById('prevImage').addEventListener('click', () => {
    const filteredImages = getFilteredImages();
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightboxImage();
});

document.getElementById('nextImage').addEventListener('click', () => {
    const filteredImages = getFilteredImages();
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredImages.length;
    updateLightboxImage();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') document.getElementById('prevImage').click();
        if (e.key === 'ArrowRight') document.getElementById('nextImage').click();
        if (e.key === 'Escape') closeLightboxModal();
    }
    if (editorModal.classList.contains('active')) {
        if (e.key === 'Escape') closeEditorModal();
        if (e.ctrlKey && e.key === 'z') { e.preventDefault(); undo(); }
        if (e.ctrlKey && e.key === 'y') { e.preventDefault(); redo(); }
    }
});

// Edit from lightbox
document.getElementById('editFromLightbox').addEventListener('click', () => {
    const filteredImages = getFilteredImages();
    const img = filteredImages[currentLightboxIndex];
    closeLightboxModal();
    openEditor(img.id);
});

// Download from lightbox
document.getElementById('downloadFromLightbox').addEventListener('click', () => {
    const filteredImages = getFilteredImages();
    const img = filteredImages[currentLightboxIndex];
    downloadImage(img.src, img.title);
});

/**
 * Downloads an image
 * @param {string} src - The image source URL
 * @param {string} title - The image title for filename
 */
function downloadImage(src, title) {
    const link = document.createElement('a');
    link.href = src;
    link.download = `${title || 'image'}.jpg`;
    link.click();
    showToast('Download started!', 'success');
}

// ==================== Upload Modal ====================
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const uploadForm = document.getElementById('uploadForm');
let uploadedImageData = null;

document.getElementById('uploadBtn').addEventListener('click', () => {
    uploadModal.classList.add('active');
});

document.getElementById('cancelUpload').addEventListener('click', () => {
    closeUploadModal();
});

uploadModal.addEventListener('click', (e) => {
    if (e.target === uploadModal) closeUploadModal();
});

/**
 * Closes the upload modal and resets state
 */
function closeUploadModal() {
    uploadModal.classList.remove('active');
    uploadForm.style.display = 'none';
    dropzone.style.display = 'block';
    uploadedImageData = null;
    document.getElementById('imageTitle').value = '';
}

// Dropzone events
dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleImageUpload(file);
    }
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleImageUpload(file);
});

/**
 * Handles image file upload
 * @param {File} file - The uploaded file
 */
function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedImageData = e.target.result;
        document.getElementById('previewContainer').innerHTML = `
            <img src="${uploadedImageData}" style="max-width: 100%; max-height: 200px; border-radius: 8px; margin-bottom: 1rem;">
        `;
        dropzone.style.display = 'none';
        uploadForm.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('imageTitle').value;
    const category = document.getElementById('imageCategory').value;

    const newImage = {
        id: Date.now(),
        src: uploadedImageData,
        title: title,
        category: category,
        favorite: false
    };

    images.unshift(newImage);
    renderGallery();
    closeUploadModal();
    showToast('Image uploaded successfully!', 'success');
});

// ==================== Image Editor ====================
/**
 * Opens the image editor with the specified image
 * @param {number} id - The image ID
 */
function openEditor(id) {
    const img = images.find(i => i.id === id);
    if (!img) return;

    currentEditingImage = img;
    resetEditorState();

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
        editorState.originalImage = image;
        editorCanvas.width = image.width;
        editorCanvas.height = image.height;
        saveToHistory();
        renderCanvas();
        editorModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    image.src = img.src;
}

/**
 * Resets the editor state to defaults
 */
function resetEditorState() {
    editorState = {
        originalImage: null,
        zoom: 1,
        brightness: 100,
        contrast: 100,
        saturation: 100,
        blur: 0,
        rotation: 0,
        flipH: false,
        flipV: false,
        grayscale: false,
        sepia: false,
        invert: false,
        isDrawing: false,
        drawMode: null,
        drawings: [],
        texts: [],
        cropMode: false,
        cropStart: null,
        cropEnd: null
    };
    editHistory = [];
    historyIndex = -1;

    // Reset UI sliders
    document.getElementById('brightness').value = 100;
    document.getElementById('contrast').value = 100;
    document.getElementById('saturation').value = 100;
    document.getElementById('blur').value = 0;
    document.getElementById('brightnessValue').textContent = '100%';
    document.getElementById('contrastValue').textContent = '100%';
    document.getElementById('saturationValue').textContent = '100%';
    document.getElementById('blurValue').textContent = '0px';

    // Reset active tool buttons
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
}

/**
 * Closes the editor modal
 */
function closeEditorModal() {
    editorModal.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('closeEditor').addEventListener('click', closeEditorModal);

/**
 * Renders the canvas with current editor state
 */
function renderCanvas() {
    const img = editorState.originalImage;
    if (!img) return;

    // Calculate dimensions based on rotation
    let width = img.width;
    let height = img.height;
    if (editorState.rotation === 90 || editorState.rotation === 270) {
        [width, height] = [height, width];
    }

    editorCanvas.width = width * editorState.zoom;
    editorCanvas.height = height * editorState.zoom;

    ctx.save();

    // Apply CSS filters
    let filters = [];
    filters.push(`brightness(${editorState.brightness}%)`);
    filters.push(`contrast(${editorState.contrast}%)`);
    filters.push(`saturate(${editorState.saturation}%)`);
    filters.push(`blur(${editorState.blur}px)`);
    if (editorState.grayscale) filters.push('grayscale(100%)');
    if (editorState.sepia) filters.push('sepia(100%)');
    if (editorState.invert) filters.push('invert(100%)');
    ctx.filter = filters.join(' ');

    // Apply transformations
    ctx.translate(editorCanvas.width / 2, editorCanvas.height / 2);
    ctx.rotate(editorState.rotation * Math.PI / 180);
    ctx.scale(
        editorState.flipH ? -editorState.zoom : editorState.zoom,
        editorState.flipV ? -editorState.zoom : editorState.zoom
    );

    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();

    // Reset filter for drawings and text
    ctx.filter = 'none';

    // Draw saved drawings
    editorState.drawings.forEach(drawing => {
        ctx.beginPath();
        ctx.strokeStyle = drawing.color;
        ctx.lineWidth = drawing.size * editorState.zoom;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        if (drawing.points.length > 0) {
            ctx.moveTo(drawing.points[0].x * editorState.zoom, drawing.points[0].y * editorState.zoom);
            drawing.points.forEach(point => {
                ctx.lineTo(point.x * editorState.zoom, point.y * editorState.zoom);
            });
        }
        ctx.stroke();
    });

    // Draw text overlays
    editorState.texts.forEach(text => {
        ctx.font = `${text.size * editorState.zoom}px ${text.font}`;
        ctx.fillStyle = text.color;
        ctx.fillText(text.text, text.x * editorState.zoom, text.y * editorState.zoom);
    });

    // Draw crop overlay
    if (editorState.cropMode && editorState.cropStart && editorState.cropEnd) {
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        const x = Math.min(editorState.cropStart.x, editorState.cropEnd.x);
        const y = Math.min(editorState.cropStart.y, editorState.cropEnd.y);
        const w = Math.abs(editorState.cropEnd.x - editorState.cropStart.x);
        const h = Math.abs(editorState.cropEnd.y - editorState.cropStart.y);
        ctx.strokeRect(x, y, w, h);
        ctx.setLineDash([]);

        // Darken outside crop area
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, editorCanvas.width, y);
        ctx.fillRect(0, y + h, editorCanvas.width, editorCanvas.height - y - h);
        ctx.fillRect(0, y, x, h);
        ctx.fillRect(x + w, y, editorCanvas.width - x - w, h);
    }
}

// ==================== History (Undo/Redo) ====================
/**
 * Saves the current state to history
 */
function saveToHistory() {
    const state = JSON.stringify({
        brightness: editorState.brightness,
        contrast: editorState.contrast,
        saturation: editorState.saturation,
        blur: editorState.blur,
        rotation: editorState.rotation,
        flipH: editorState.flipH,
        flipV: editorState.flipV,
        grayscale: editorState.grayscale,
        sepia: editorState.sepia,
        invert: editorState.invert,
        drawings: editorState.drawings,
        texts: editorState.texts
    });

    // Remove any redo history when new action is taken
    editHistory = editHistory.slice(0, historyIndex + 1);
    editHistory.push(state);
    historyIndex++;
}

/**
 * Undoes the last action
 */
function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        restoreState(JSON.parse(editHistory[historyIndex]));
        showToast('Undo', 'info');
    }
}

/**
 * Redoes the previously undone action
 */
function redo() {
    if (historyIndex < editHistory.length - 1) {
        historyIndex++;
        restoreState(JSON.parse(editHistory[historyIndex]));
        showToast('Redo', 'info');
    }
}

/**
 * Restores editor state from saved state
 * @param {Object} state - The state to restore
 */
function restoreState(state) {
    Object.assign(editorState, state);
    updateSliderUI();
    renderCanvas();
}

/**
 * Updates slider UI to match current state
 */
function updateSliderUI() {
    document.getElementById('brightness').value = editorState.brightness;
    document.getElementById('contrast').value = editorState.contrast;
    document.getElementById('saturation').value = editorState.saturation;
    document.getElementById('blur').value = editorState.blur;
    document.getElementById('brightnessValue').textContent = editorState.brightness + '%';
    document.getElementById('contrastValue').textContent = editorState.contrast + '%';
    document.getElementById('saturationValue').textContent = editorState.saturation + '%';
    document.getElementById('blurValue').textContent = editorState.blur + 'px';
}

document.getElementById('undoBtn').addEventListener('click', undo);
document.getElementById('redoBtn').addEventListener('click', redo);

// ==================== Transform Tools ====================
document.getElementById('rotateLeft').addEventListener('click', () => {
    editorState.rotation = (editorState.rotation - 90 + 360) % 360;
    saveToHistory();
    renderCanvas();
});

document.getElementById('rotateRight').addEventListener('click', () => {
    editorState.rotation = (editorState.rotation + 90) % 360;
    saveToHistory();
    renderCanvas();
});

document.getElementById('flipH').addEventListener('click', () => {
    editorState.flipH = !editorState.flipH;
    saveToHistory();
    renderCanvas();
});

document.getElementById('flipV').addEventListener('click', () => {
    editorState.flipV = !editorState.flipV;
    saveToHistory();
    renderCanvas();
});

// ==================== Crop Tool ====================
document.getElementById('cropBtn').addEventListener('click', () => {
    editorState.cropMode = true;
    editorState.drawMode = null;
    document.getElementById('cropBtn').classList.add('active');
    document.getElementById('applyCrop').style.display = 'inline-flex';
    document.getElementById('cancelCrop').style.display = 'inline-flex';
    document.getElementById('drawBtn').classList.remove('active');
    document.getElementById('eraserBtn').classList.remove('active');
    showToast('Click and drag to select crop area', 'info');
});

document.getElementById('applyCrop').addEventListener('click', () => {
    if (editorState.cropStart && editorState.cropEnd) {
        const x = Math.min(editorState.cropStart.x, editorState.cropEnd.x);
        const y = Math.min(editorState.cropStart.y, editorState.cropEnd.y);
        const w = Math.abs(editorState.cropEnd.x - editorState.cropStart.x);
        const h = Math.abs(editorState.cropEnd.y - editorState.cropStart.y);

        if (w > 10 && h > 10) {
            // Create cropped image
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = w;
            tempCanvas.height = h;
            const tempCtx = tempCanvas.getContext('2d');
            tempCtx.drawImage(editorCanvas, x, y, w, h, 0, 0, w, h);

            const croppedImage = new Image();
            croppedImage.onload = () => {
                editorState.originalImage = croppedImage;
                editorState.drawings = [];
                editorState.texts = [];
                editorState.rotation = 0;
                editorState.flipH = false;
                editorState.flipV = false;
                saveToHistory();
                renderCanvas();
                showToast('Image cropped!', 'success');
            };
            croppedImage.src = tempCanvas.toDataURL();
        }
    }
    cancelCrop();
});

document.getElementById('cancelCrop').addEventListener('click', cancelCrop);

/**
 * Cancels the crop operation
 */
function cancelCrop() {
    editorState.cropMode = false;
    editorState.cropStart = null;
    editorState.cropEnd = null;
    document.getElementById('cropBtn').classList.remove('active');
    document.getElementById('applyCrop').style.display = 'none';
    document.getElementById('cancelCrop').style.display = 'none';
    renderCanvas();
}

// ==================== Zoom Controls ====================
document.getElementById('zoomIn').addEventListener('click', () => {
    editorState.zoom = Math.min(editorState.zoom + 0.25, 3);
    renderCanvas();
});

document.getElementById('zoomOut').addEventListener('click', () => {
    editorState.zoom = Math.max(editorState.zoom - 0.25, 0.25);
    renderCanvas();
});

document.getElementById('zoomFit').addEventListener('click', () => {
    editorState.zoom = 1;
    renderCanvas();
});

// ==================== Filter Sliders ====================
['brightness', 'contrast', 'saturation', 'blur'].forEach(filter => {
    const slider = document.getElementById(filter);
    const valueDisplay = document.getElementById(filter + 'Value');

    slider.addEventListener('input', () => {
        editorState[filter] = parseInt(slider.value);
        valueDisplay.textContent = slider.value + (filter === 'blur' ? 'px' : '%');
        renderCanvas();
    });

    slider.addEventListener('change', () => {
        saveToHistory();
    });
});

// Filter toggle buttons
document.getElementById('grayscaleBtn').addEventListener('click', () => {
    editorState.grayscale = !editorState.grayscale;
    document.getElementById('grayscaleBtn').classList.toggle('active');
    saveToHistory();
    renderCanvas();
});

document.getElementById('sepiaBtn').addEventListener('click', () => {
    editorState.sepia = !editorState.sepia;
    document.getElementById('sepiaBtn').classList.toggle('active');
    saveToHistory();
    renderCanvas();
});

document.getElementById('invertBtn').addEventListener('click', () => {
    editorState.invert = !editorState.invert;
    document.getElementById('invertBtn').classList.toggle('active');
    saveToHistory();
    renderCanvas();
});

// ==================== Drawing Tools ====================
let currentDrawing = null;

document.getElementById('drawBtn').addEventListener('click', () => {
    editorState.drawMode = editorState.drawMode === 'draw' ? null : 'draw';
    editorState.cropMode = false;
    cancelCrop();
    document.getElementById('drawBtn').classList.toggle('active', editorState.drawMode === 'draw');
    document.getElementById('eraserBtn').classList.remove('active');
});

document.getElementById('eraserBtn').addEventListener('click', () => {
    editorState.drawMode = editorState.drawMode === 'eraser' ? null : 'eraser';
    editorState.cropMode = false;
    cancelCrop();
    document.getElementById('eraserBtn').classList.toggle('active', editorState.drawMode === 'eraser');
    document.getElementById('drawBtn').classList.remove('active');
});

document.getElementById('brushSize').addEventListener('input', (e) => {
    document.getElementById('brushSizeValue').textContent = e.target.value + 'px';
});

// Canvas mouse events for drawing and cropping
editorCanvas.addEventListener('mousedown', (e) => {
    const rect = editorCanvas.getBoundingClientRect();
    const x = (e.clientX - rect.left);
    const y = (e.clientY - rect.top);

    if (editorState.cropMode) {
        editorState.cropStart = { x, y };
        editorState.cropEnd = { x, y };
        editorState.isDrawing = true;
    } else if (editorState.drawMode) {
        editorState.isDrawing = true;
        const color = editorState.drawMode === 'eraser' ? '#ffffff' : document.getElementById('drawColor').value;
        const size = parseInt(document.getElementById('brushSize').value);
        currentDrawing = {
            color: color,
            size: size,
            points: [{ x: x / editorState.zoom, y: y / editorState.zoom }]
        };
    }
});

editorCanvas.addEventListener('mousemove', (e) => {
    if (!editorState.isDrawing) return;

    const rect = editorCanvas.getBoundingClientRect();
    const x = (e.clientX - rect.left);
    const y = (e.clientY - rect.top);

    if (editorState.cropMode) {
        editorState.cropEnd = { x, y };
        renderCanvas();
    } else if (editorState.drawMode && currentDrawing) {
        currentDrawing.points.push({ x: x / editorState.zoom, y: y / editorState.zoom });
        
        // Draw current stroke in real-time
        ctx.beginPath();
        ctx.strokeStyle = currentDrawing.color;
        ctx.lineWidth = currentDrawing.size * editorState.zoom;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        const points = currentDrawing.points;
        if (points.length >= 2) {
            ctx.moveTo(points[points.length - 2].x * editorState.zoom, points[points.length - 2].y * editorState.zoom);
            ctx.lineTo(points[points.length - 1].x * editorState.zoom, points[points.length - 1].y * editorState.zoom);
        }
        ctx.stroke();
    }
});

editorCanvas.addEventListener('mouseup', () => {
    if (editorState.isDrawing && editorState.drawMode && currentDrawing) {
        editorState.drawings.push(currentDrawing);
        currentDrawing = null;
        saveToHistory();
    }
    editorState.isDrawing = false;
});

editorCanvas.addEventListener('mouseleave', () => {
    if (editorState.isDrawing && editorState.drawMode && currentDrawing) {
        editorState.drawings.push(currentDrawing);
        currentDrawing = null;
        saveToHistory();
    }
    editorState.isDrawing = false;
});

// ==================== Text Tool ====================
document.getElementById('addTextBtn').addEventListener('click', () => {
    const text = document.getElementById('textInput').value;
    if (!text) {
        showToast('Please enter some text', 'error');
        return;
    }

    const size = parseInt(document.getElementById('fontSize').value);
    const font = document.getElementById('fontFamily').value;
    const color = document.getElementById('textColor').value;

    // Add text at center of canvas
    editorState.texts.push({
        text: text,
        size: size,
        font: font,
        color: color,
        x: editorCanvas.width / 2 / editorState.zoom,
        y: editorCanvas.height / 2 / editorState.zoom
    });

    document.getElementById('textInput').value = '';
    saveToHistory();
    renderCanvas();
    showToast('Text added!', 'success');
});

// ==================== Reset Editor ====================
document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('Reset all changes?')) {
        resetEditorState();
        if (currentEditingImage) {
            const image = new Image();
            image.crossOrigin = 'anonymous';
            image.onload = () => {
                editorState.originalImage = image;
                editorCanvas.width = image.width;
                editorCanvas.height = image.height;
                saveToHistory();
                renderCanvas();
            };
            image.src = currentEditingImage.src;
        }
        showToast('Image reset to original', 'success');
    }
});

// ==================== Save & Download ====================
document.getElementById('saveEditBtn').addEventListener('click', () => {
    const dataUrl = editorCanvas.toDataURL('image/png');
    const imgIndex = images.findIndex(i => i.id === currentEditingImage.id);
    if (imgIndex !== -1) {
        images[imgIndex].src = dataUrl;
        renderGallery();
        showToast('Image saved to gallery!', 'success');
    }
});

document.getElementById('downloadEditBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `${currentEditingImage?.title || 'edited-image'}.png`;
    link.href = editorCanvas.toDataURL('image/png');
    link.click();
    showToast('Image downloaded!', 'success');
});

// ==================== Initialize Application ====================
renderGallery();
console.log('🖼️ Gallery Pro loaded successfully!');