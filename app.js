// RVG Properties JavaScript with Tracking Pixels Integration
// Author: RVG Properties Development Team
// Last Modified: August 15, 2025

// Application State
const appState = {
    currentPage: 'home',
    currentUser: null,
    properties: [],
    filteredProperties: [],
    selectedAmenities: [],
    filters: {
        location: '',
        propertyType: '',
        category: '',
        forType: '',
        minPrice: '',
        maxPrice: '',
        furnishing: '',
        amenities: []
    },
    sortBy: 'relevance'
};

// Sample Properties Data
const sampleProperties = [
    {
        id: 1,
        title: "Luxury 3BHK Apartment in Bandra West",
        type: "3BHK",
        category: "Apartment",
        price: 25000000,
        priceText: "₹2.5 Cr",
        location: "Bandra West, Mumbai",
        area: 1200,
        furnishing: "Semi-Furnished",
        forType: "Buy",
        images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
        ],
        amenities: ["Swimming Pool", "Gym", "Security", "Power Backup", "Elevator"],
        description: "Spacious 3BHK apartment with modern amenities in prime Bandra location. Close to schools, shopping centers, and excellent connectivity.",
        agent: "Raj Sharma",
        phone: "+91 98765 43210",
        email: "raj.sharma@email.com",
        featured: true
    },
    {
        id: 2,
        title: "Modern 2BHK Flat for Rent in Koramangala",
        type: "2BHK",
        category: "Apartment",
        price: 35000,
        priceText: "₹35,000",
        location: "Koramangala, Bangalore",
        area: 950,
        furnishing: "Fully Furnished",
        forType: "Rent",
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop"
        ],
        amenities: ["Gym", "Security", "Power Backup", "Internet"],
        description: "Fully furnished 2BHK flat in the heart of Koramangala. Perfect for working professionals with all modern amenities.",
        agent: "Priya Singh",
        phone: "+91 87654 32109",
        email: "priya.singh@email.com",
        featured: true
    },
    {
        id: 3,
        title: "Cozy 1BHK Studio in Powai",
        type: "1BHK",
        category: "Studio",
        price: 18000,
        priceText: "₹18,000",
        location: "Powai, Mumbai",
        area: 450,
        furnishing: "Semi-Furnished",
        forType: "Rent",
        images: [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
        ],
        amenities: ["Security", "Elevator", "Power Backup"],
        description: "Affordable 1BHK studio apartment perfect for students and young professionals. Close to IT parks and colleges.",
        agent: "Priya Singh",
        phone: "+91 87654 32109",
        email: "priya.singh@email.com",
        featured: false
    },
    {
        id: 4,
        title: "Affordable 2BHK House in Greater Noida",
        type: "2BHK",
        category: "House",
        price: 15000000,
        priceText: "₹1.5 Cr",
        location: "Greater Noida West",
        area: 800,
        furnishing: "Unfurnished",
        forType: "Buy",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
        ],
        amenities: ["Park", "Security", "Power Backup"],
        description: "Well-planned 2BHK house in developing area with good infrastructure. Great investment opportunity with future growth potential.",
        agent: "Priya Singh",
        phone: "+91 87654 32109",
        email: "priya.singh@email.com",
        featured: false
    }
];

// Users Data
const users = [
    {
        id: "admin",
        email: "rvgproperties@gmail.com",
        password: "RVG@admin",
        name: "RVG Admin",
        role: "admin"
    },
    {
        id: "demo1",
        email: "demo@user.com",
        password: "demo123",
        name: "Demo User",
        role: "user"
    }
];

// DOM Elements
let navToggle, navMenu, authButtons, userMenu, userName, logoutBtn;
let loginBtn, registerBtn, loginModal, registerModal, loginForm, registerForm;
let showLoginModal, showRegisterModal;
let featuredPropertiesGrid, propertiesGrid, contactForm;
let locationFilter, propertyTypeFilter, categoryFilter, forTypeFilter;
let minPriceFilter, maxPriceFilter, furnishingFilter, sortSelect;
let clearFiltersBtn, resultsCount;
let heroSearchBtn, heroPropertyType, heroBudget;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Get DOM elements
    getDOMElements();
    
    // Initialize properties
    appState.properties = [...sampleProperties];
    appState.filteredProperties = [...sampleProperties];
    
    // Set up event listeners
    setupEventListeners();
    
    // Render initial content
    renderFeaturedProperties();
    renderProperties();
    
    // Check for saved user session
    checkUserSession();
    
    // Show home page by default
    showPage('home');
    
    // Initialize tracking
    initializeTracking();
}

function getDOMElements() {
    // Navigation elements
    navToggle = document.getElementById('navToggle');
    navMenu = document.getElementById('navMenu');
    authButtons = document.getElementById('authButtons');
    userMenu = document.getElementById('userMenu');
    userName = document.getElementById('userName');
    logoutBtn = document.getElementById('logoutBtn');
    
    // Auth buttons
    loginBtn = document.getElementById('loginBtn');
    registerBtn = document.getElementById('registerBtn');
    
    // Modals
    loginModal = document.getElementById('loginModal');
    registerModal = document.getElementById('registerModal');
    loginForm = document.getElementById('loginForm');
    registerForm = document.getElementById('registerForm');
    
    // Modal triggers
    showLoginModal = document.getElementById('showLoginModal');
    showRegisterModal = document.getElementById('showRegisterModal');
    
    // Property containers
    featuredPropertiesGrid = document.getElementById('featuredPropertiesGrid');
    propertiesGrid = document.getElementById('propertiesGrid');
    
    // Forms
    contactForm = document.getElementById('contactForm');
    
    // Filters
    locationFilter = document.getElementById('locationFilter');
    propertyTypeFilter = document.getElementById('propertyTypeFilter');
    categoryFilter = document.getElementById('categoryFilter');
    forTypeFilter = document.getElementById('forTypeFilter');
    minPriceFilter = document.getElementById('minPriceFilter');
    maxPriceFilter = document.getElementById('maxPriceFilter');
    furnishingFilter = document.getElementById('furnishingFilter');
    sortSelect = document.getElementById('sortSelect');
    clearFiltersBtn = document.getElementById('clearFiltersBtn');
    resultsCount = document.getElementById('resultsCount');
    
    // Hero search
    heroSearchBtn = document.getElementById('heroSearchBtn');
    heroPropertyType = document.getElementById('heroPropertyType');
    heroBudget = document.getElementById('heroBudget');
}

function setupEventListeners() {
    // Navigation
    if (navToggle) {
        navToggle.addEventListener('click', toggleNavMenu);
    }
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
            updateActiveNavLink(this);
            
            // Close mobile menu
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Auth buttons
    if (loginBtn) {
        loginBtn.addEventListener('click', () => showModal('loginModal'));
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', () => showModal('registerModal'));
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // Modal switches
    if (showLoginModal) {
        showLoginModal.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('registerModal');
            showModal('loginModal');
        });
    }
    
    if (showRegisterModal) {
        showRegisterModal.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('loginModal');
            showModal('registerModal');
        });
    }
    
    // Forms
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Filters
    if (locationFilter) locationFilter.addEventListener('change', applyFilters);
    if (propertyTypeFilter) propertyTypeFilter.addEventListener('change', applyFilters);
    if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
    if (forTypeFilter) forTypeFilter.addEventListener('change', applyFilters);
    if (minPriceFilter) minPriceFilter.addEventListener('input', applyFilters);
    if (maxPriceFilter) maxPriceFilter.addEventListener('input', applyFilters);
    if (furnishingFilter) furnishingFilter.addEventListener('change', applyFilters);
    if (sortSelect) sortSelect.addEventListener('change', applySorting);
    if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearFilters);
    
    // Amenity buttons
    document.querySelectorAll('.amenity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            toggleAmenity(this.getAttribute('data-amenity'));
            this.classList.toggle('active');
        });
    });
    
    // Hero search
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', handleHeroSearch);
    }
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            hideModal(modal.id);
        });
    });
    
    // Close modal on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal(this.id);
            }
        });
    });
}

// Navigation Functions
function toggleNavMenu() {
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show requested page
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        appState.currentPage = pageId;
        
        // Track page view
        if (typeof trackPageView === 'function') {
            trackPageView(pageId);
        }
    }
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Modal Functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        appState.currentUser = user;
        updateAuthUI();
        hideModal('loginModal');
        showNotification('Login successful!', 'success');
        
        // Save session
        localStorage.setItem('rvg_user', JSON.stringify(user));
        
        // Track login event
        if (typeof trackLogin === 'function') {
            trackLogin();
        }
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const terms = formData.get('terms');
    
    if (!terms) {
        showNotification('Please accept terms and conditions', 'error');
        return;
    }
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showNotification('User already exists with this email', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: 'user_' + Date.now(),
        name,
        email,
        phone,
        password,
        role: 'user'
    };
    
    users.push(newUser);
    appState.currentUser = newUser;
    
    updateAuthUI();
    hideModal('registerModal');
    showNotification('Registration successful!', 'success');
    
    // Save session
    localStorage.setItem('rvg_user', JSON.stringify(newUser));
    
    // Track registration event
    if (typeof trackRegistration === 'function') {
        trackRegistration();
    }
}

function logout() {
    appState.currentUser = null;
    updateAuthUI();
    localStorage.removeItem('rvg_user');
    showNotification('Logged out successfully', 'info');
}

function checkUserSession() {
    const savedUser = localStorage.getItem('rvg_user');
    if (savedUser) {
        appState.currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

function updateAuthUI() {
    if (appState.currentUser) {
        if (authButtons) authButtons.classList.add('hidden');
        if (userMenu) userMenu.classList.remove('hidden');
        if (userName) userName.textContent = `Welcome ${appState.currentUser.name}`;
    } else {
        if (authButtons) authButtons.classList.remove('hidden');
        if (userMenu) userMenu.classList.add('hidden');
    }
}

// Property Functions
function renderFeaturedProperties() {
    if (!featuredPropertiesGrid) return;
    
    const featuredProperties = appState.properties.filter(p => p.featured);
    featuredPropertiesGrid.innerHTML = featuredProperties.map(property => 
        createPropertyCard(property)
    ).join('');
    
    // Add click listeners to property cards
    addPropertyCardListeners(featuredPropertiesGrid);
}

function renderProperties() {
    if (!propertiesGrid) return;
    
    propertiesGrid.innerHTML = appState.filteredProperties.map(property => 
        createPropertyCard(property)
    ).join('');
    
    // Update results count
    if (resultsCount) {
        resultsCount.textContent = `${appState.filteredProperties.length} properties found`;
    }
    
    // Add click listeners to property cards
    addPropertyCardListeners(propertiesGrid);
}

function createPropertyCard(property) {
    const badgeClass = property.forType === 'Buy' ? 'badge-buy' : 'badge-rent';
    const featuredBadge = property.featured ? '<div class="badge-featured">Featured</div>' : '';
    const amenitiesDisplay = property.amenities.slice(0, 3).map(amenity => 
        `<span class="amenity-tag">${amenity}</span>`
    ).join('');
    const moreAmenities = property.amenities.length > 3 ? 
        `<span class="amenity-tag">+${property.amenities.length - 3} more</span>` : '';
    
    return `
        <div class="property-card" data-property-id="${property.id}">
            <div class="property-image" style="background-image: url('${property.images[0]}')">
                <div class="property-badge ${badgeClass}">${property.forType}</div>
                ${featuredBadge}
            </div>
            <div class="property-content">
                <div class="property-price">${property.priceText}</div>
                <div class="property-title">${property.title}</div>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-details">
                    <span>${property.type}</span>
                    <span>${property.area} sq ft</span>
                    <span>${property.furnishing}</span>
                </div>
                <div class="property-amenities">
                    ${amenitiesDisplay}
                    ${moreAmenities}
                </div>
            </div>
        </div>
    `;
}

function addPropertyCardListeners(container) {
    container.querySelectorAll('.property-card').forEach(card => {
        card.addEventListener('click', function() {
            const propertyId = parseInt(this.getAttribute('data-property-id'));
            const property = appState.properties.find(p => p.id === propertyId);
            if (property) {
                showPropertyDetails(property);
                
                // Track property view
                if (typeof trackPropertyView === 'function') {
                    trackPropertyView(property.id, property.title, property.price);
                }
            }
        });
    });
}

function showPropertyDetails(property) {
    const modal = document.getElementById('propertyModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGallery = document.getElementById('modalGallery');
    const modalDescription = document.getElementById('modalDescription');
    
    if (modal && modalTitle && modalGallery && modalDescription) {
        modalTitle.textContent = property.title;
        
        // Create image gallery
        modalGallery.innerHTML = property.images.map(img => 
            `<img src="${img}" alt="${property.title}" style="width: 100%; margin-bottom: 1rem; border-radius: 8px;">`
        ).join('');
        
        modalDescription.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <strong>Price:</strong> ${property.priceText}<br>
                <strong>Location:</strong> ${property.location}<br>
                <strong>Area:</strong> ${property.area} sq ft<br>
                <strong>Type:</strong> ${property.type}<br>
                <strong>Furnishing:</strong> ${property.furnishing}
            </div>
            <div style="margin-bottom: 1rem;">
                <strong>Description:</strong><br>
                ${property.description}
            </div>
            <div style="margin-bottom: 1rem;">
                <strong>Amenities:</strong><br>
                ${property.amenities.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join(' ')}
            </div>
            <div>
                <strong>Contact Agent:</strong><br>
                ${property.agent} - ${property.phone}<br>
                ${property.email}
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// Filter Functions
function applyFilters() {
    // Update filter state
    appState.filters = {
        location: locationFilter?.value || '',
        propertyType: propertyTypeFilter?.value || '',
        category: categoryFilter?.value || '',
        forType: forTypeFilter?.value || '',
        minPrice: minPriceFilter?.value ? parseInt(minPriceFilter.value) : '',
        maxPrice: maxPriceFilter?.value ? parseInt(maxPriceFilter.value) : '',
        furnishing: furnishingFilter?.value || '',
        amenities: appState.selectedAmenities
    };
    
    // Filter properties
    appState.filteredProperties = appState.properties.filter(property => {
        // Location filter
        if (appState.filters.location && !property.location.includes(appState.filters.location)) {
            return false;
        }
        
        // Property type filter
        if (appState.filters.propertyType && property.type !== appState.filters.propertyType) {
            return false;
        }
        
        // Category filter
        if (appState.filters.category && property.category !== appState.filters.category) {
            return false;
        }
        
        // For type filter
        if (appState.filters.forType && property.forType !== appState.filters.forType) {
            return false;
        }
        
        // Price filter
        if (appState.filters.minPrice && property.price < appState.filters.minPrice) {
            return false;
        }
        
        if (appState.filters.maxPrice && property.price > appState.filters.maxPrice) {
            return false;
        }
        
        // Furnishing filter
        if (appState.filters.furnishing && property.furnishing !== appState.filters.furnishing) {
            return false;
        }
        
        // Amenities filter
        if (appState.filters.amenities.length > 0) {
            const hasAllAmenities = appState.filters.amenities.every(amenity => 
                property.amenities.includes(amenity)
            );
            if (!hasAllAmenities) {
                return false;
            }
        }
        
        return true;
    });
    
    // Apply sorting
    applySorting();
    
    // Re-render properties
    renderProperties();
}

function toggleAmenity(amenity) {
    const index = appState.selectedAmenities.indexOf(amenity);
    if (index > -1) {
        appState.selectedAmenities.splice(index, 1);
    } else {
        appState.selectedAmenities.push(amenity);
    }
    applyFilters();
}

function applySorting() {
    const sortBy = sortSelect?.value || 'relevance';
    appState.sortBy = sortBy;
    
    switch (sortBy) {
        case 'price-low':
            appState.filteredProperties.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            appState.filteredProperties.sort((a, b) => b.price - a.price);
            break;
        case 'area-large':
            appState.filteredProperties.sort((a, b) => b.area - a.area);
            break;
        case 'area-small':
            appState.filteredProperties.sort((a, b) => a.area - b.area);
            break;
        case 'newest':
            appState.filteredProperties.sort((a, b) => b.id - a.id);
            break;
        default: // relevance
            // Keep original order but prioritize featured properties
            appState.filteredProperties.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return 0;
            });
    }
    
    renderProperties();
}

function clearFilters() {
    // Reset filter inputs
    if (locationFilter) locationFilter.value = '';
    if (propertyTypeFilter) propertyTypeFilter.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (forTypeFilter) forTypeFilter.value = '';
    if (minPriceFilter) minPriceFilter.value = '';
    if (maxPriceFilter) maxPriceFilter.value = '';
    if (furnishingFilter) furnishingFilter.value = '';
    if (sortSelect) sortSelect.value = 'relevance';
    
    // Clear amenity selections
    appState.selectedAmenities = [];
    document.querySelectorAll('.amenity-btn.active').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset filtered properties to all properties
    appState.filteredProperties = [...appState.properties];
    
    // Re-render
    renderProperties();
    
    showNotification('Filters cleared', 'info');
}

// Search Functions
function handleHeroSearch(e) {
    e.preventDefault();
    
    const propertyType = heroPropertyType?.value;
    const budget = heroBudget?.value;
    
    // Navigate to properties page
    showPage('properties');
    updateActiveNavLink(document.querySelector('[data-page="properties"]'));
    
    // Apply search filters
    if (propertyType && propertyTypeFilter) {
        propertyTypeFilter.value = propertyType;
    }
    
    // Apply budget filter logic here if needed
    
    applyFilters();
    
    showNotification('Search results updated', 'info');
}

// Form Functions
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    showSpinner();
    
    setTimeout(() => {
        hideSpinner();
        showNotification('Thank you! Your message has been sent successfully.', 'success');
        e.target.reset();
        
        // Track contact form submission
        if (typeof trackContactFormSubmit === 'function') {
            trackContactFormSubmit();
        }
    }, 1000);
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notifications = document.getElementById('notifications');
    if (!notifications) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notifications.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 4000);
}

function showSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.classList.remove('hidden');
    }
}

function hideSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.classList.add('hidden');
    }
}

// Tracking Functions
function initializeTracking() {
    // Initialize tracking pixels if available
    console.log('Tracking initialized');
    
    // Track initial page view
    if (typeof fbq !== 'undefined') {
        fbq('track', 'PageView');
    }
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: 'Home',
            page_location: window.location.href
        });
    }
}

// Enhanced tracking functions are already included in HTML
// trackSearchButton(), trackCategoryClick(), trackLocationClick(), 
// trackPropertyView(), trackContactFormSubmit(), trackLogin(), 
// trackRegistration(), trackPageView() are defined in the HTML

// Export functions for global access
window.appState = appState;
window.showPage = showPage;
window.showNotification = showNotification;
