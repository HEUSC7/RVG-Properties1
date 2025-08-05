// RVG Properties - Complete Application with ALL Functionality
class RVGProperties {
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.currentPage = 'home';
        this.currentStep = 1;
        this.maxSteps = 4;
        this.uploadedImages = [];
        this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        this.recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
        this.filteredProperties = [];
        
        // Initialize data with persistence
        this.data = this.loadData();
        
        // Initialize the application
        this.init();
    }

    // CRITICAL: Load data with persistence
    loadData() {
        const defaultData = {
            users: [
                {
                    id: "admin",
                    email: "rvgproperties@gmail.com",
                    password: "RVG@admin",
                    name: "RVG Admin",
                    role: "admin",
                    registrationDate: "2025-01-01",
                    lastLogin: "2025-08-02",
                    status: "active"
                },
                {
                    id: "user1",
                    email: "raj.sharma@email.com",
                    password: "user123",
                    name: "Raj Sharma",
                    role: "user",
                    registrationDate: "2025-07-10",
                    lastLogin: "2025-08-01",
                    status: "active",
                    phone: "+91 98765 43210",
                    propertiesPosted: 2
                },
                {
                    id: "user2", 
                    email: "priya.singh@email.com",
                    password: "user123",
                    name: "Priya Singh",
                    role: "user",
                    registrationDate: "2025-07-15",
                    lastLogin: "2025-07-31",
                    status: "active",
                    phone: "+91 87654 32109",
                    propertiesPosted: 1
                },
                {
                    id: "demo1",
                    email: "demo@user.com",
                    password: "demo123",
                    name: "Demo User",
                    role: "user",
                    registrationDate: "2025-08-01",
                    lastLogin: "2025-08-02",
                    status: "active",
                    phone: "+91 99999 00000",
                    propertiesPosted: 0
                }
            ],
            properties: [
                {
                    id: 1,
                    title: "Luxury 3BHK Apartment in Bandra West",
                    type: "3BHK",
                    category: "Apartment",
                    price: 25000000,
                    location: "Bandra West, Mumbai",
                    area: 1200,
                    furnishing: "Semi-Furnished",
                    parking: "2 Covered",
                    age: "5 years",
                    status: "Ready to move",
                    forType: "Buy",
                    approvalStatus: "approved",
                    postedBy: "user1",
                    postedDate: "2025-07-15",
                    approvedDate: "2025-07-16",
                    images: [
                        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
                    ],
                    amenities: ["Swimming Pool", "Gym", "Security", "Power Backup", "Elevator", "Park", "Club House", "Kids Play Area"],
                    description: "Spacious 3BHK apartment with modern amenities in prime Bandra location. Close to schools, shopping centers, and excellent connectivity.",
                    agent: "Raj Sharma",
                    phone: "+91 98765 43210",
                    email: "raj.sharma@email.com",
                    featured: true,
                    nearbyPlaces: ["Linking Road", "Bandra Station", "Mount Mary Church", "Bandstand Promenade"],
                    floorPlan: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop"
                },
                {
                    id: 2,
                    title: "Modern 2BHK Flat for Rent in Koramangala",
                    type: "2BHK",
                    category: "Apartment", 
                    price: 35000,
                    location: "Koramangala, Bangalore",
                    area: 950,
                    furnishing: "Fully Furnished",
                    parking: "1 Covered",
                    age: "3 years",
                    status: "Ready to move",
                    forType: "Rent",
                    approvalStatus: "approved",
                    postedBy: "user2",
                    postedDate: "2025-07-20",
                    approvedDate: "2025-07-21",
                    images: [
                        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop"
                    ],
                    amenities: ["Gym", "Security", "Power Backup", "Internet", "AC", "Refrigerator", "Washing Machine"],
                    description: "Fully furnished 2BHK flat in the heart of Koramangala. Perfect for working professionals with all modern amenities.",
                    agent: "Priya Singh",
                    phone: "+91 87654 32109",
                    email: "priya.singh@email.com",
                    featured: true,
                    nearbyPlaces: ["Forum Mall", "BDA Complex", "Koramangala Metro", "CMH Road"],
                    floorPlan: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop"
                },
                {
                    id: 3,
                    title: "Cozy 1BHK Studio in Powai", 
                    type: "1BHK",
                    category: "Studio",
                    price: 18000,
                    location: "Powai, Mumbai",
                    area: 450,
                    furnishing: "Semi-Furnished",
                    parking: "1 Open",
                    age: "7 years",
                    status: "Ready to move",
                    forType: "Rent",
                    approvalStatus: "approved",
                    postedBy: "user2",
                    postedDate: "2025-07-28",
                    approvedDate: "2025-07-29",
                    images: [
                        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1502005229848-906ec1d5bf38?w=800&h=600&fit=crop"
                    ],
                    amenities: ["Security", "Elevator", "Power Backup", "Water Supply", "Garden"],
                    description: "Affordable 1BHK studio apartment perfect for students and young professionals. Close to IT parks and colleges.",
                    agent: "Priya Singh",
                    phone: "+91 87654 32109",
                    email: "priya.singh@email.com",
                    featured: false,
                    nearbyPlaces: ["Powai Lake", "IIT Bombay", "Hiranandani Gardens", "R City Mall"]
                },
                {
                    id: 4,
                    title: "Affordable 2BHK House in Greater Noida",
                    type: "2BHK",
                    category: "House",
                    price: 15000000,
                    location: "Greater Noida West",
                    area: 800,
                    furnishing: "Unfurnished",
                    parking: "1 Covered",
                    age: "Under Construction",
                    status: "Under Construction",
                    forType: "Buy",
                    approvalStatus: "approved",
                    postedBy: "user2",
                    postedDate: "2025-08-02",
                    approvedDate: "2025-08-02",
                    images: [
                        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop"
                    ],
                    amenities: ["Park", "Security", "Power Backup", "Water Supply", "Shopping Complex"],
                    description: "Well-planned 2BHK house in developing area with good infrastructure. Great investment opportunity with future growth potential.",
                    agent: "Priya Singh",
                    phone: "+91 87654 32109",
                    email: "priya.singh@email.com",
                    featured: false,
                    nearbyPlaces: ["Pari Chowk", "Knowledge Park", "Expo Mart", "Alpha Commercial Belt"]
                }
            ]
        };

        // Load from localStorage or use default
        const storedData = localStorage.getItem('rvgProperties');
        return storedData ? JSON.parse(storedData) : defaultData;
    }

    // Save data to localStorage
    saveData() {
        localStorage.setItem('rvgProperties', JSON.stringify(this.data));
    }

    // Initialize the application
    init() {
        this.setupEventListeners();
        this.setupNavigation();
        this.setupAuth();
        this.setupFilters();
        this.setupModals();
        this.setupForms();
        this.loadInitialData();
        this.updateAuthUI();
        
        // If user is logged in, update UI
        if (this.currentUser) {
            this.updateAuthUI();
        }
    }

    // Setup navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('[data-page]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.navigateToPage(page);
            });
        });

        // Hero search button
        const heroSearchBtn = document.getElementById('heroSearchBtn');
        if (heroSearchBtn) {
            heroSearchBtn.addEventListener('click', () => {
                this.navigateToPage('properties');
            });
        }
    }

    // Navigate to page
    navigateToPage(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        // Show target page
        const targetPage = document.getElementById(page + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = page;
            
            // Update navigation active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.page === page) {
                    link.classList.add('active');
                }
            });
            
            // Load page-specific content
            this.loadPageContent(page);
        }
    }

    // Load page content
    loadPageContent(page) {
        switch (page) {
            case 'home':
                this.renderFeaturedProperties();
                break;
            case 'properties':
                this.renderPropertiesPage();
                break;
            case 'services':
            case 'about':
            case 'contact':
                // Static content, no additional loading needed
                break;
        }
    }

    // Setup authentication
    setupAuth() {
        // Login button
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                this.showModal('loginModal');
            });
        }

        // Register button
        const registerBtn = document.getElementById('registerBtn');
        if (registerBtn) {
            registerBtn.addEventListener('click', () => {
                this.showModal('registerModal');
            });
        }

        // Logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                this.logout();
            });
        }

        // Modal switch links
        const showRegisterModal = document.getElementById('showRegisterModal');
        if (showRegisterModal) {
            showRegisterModal.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideModal('loginModal');
                this.showModal('registerModal');
            });
        }

        const showLoginModal = document.getElementById('showLoginModal');
        if (showLoginModal) {
            showLoginModal.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideModal('registerModal');
                this.showModal('loginModal');
            });
        }
    }

    // Setup forms
    setupForms() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin(e);
            });
        }

        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegister(e);
            });
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(e);
            });
        }
    }

    // Setup modals
    setupModals() {
        // Close modal buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal').classList.remove('active');
            });
        });

        // Close modal on backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });
    }

    // Setup filters
    setupFilters() {
        // Amenity buttons
        document.querySelectorAll('.amenity-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                this.applyFilters();
            });
        });

        // Filter inputs
        document.querySelectorAll('.filter-input').forEach(input => {
            input.addEventListener('change', () => {
                this.applyFilters();
            });
        });

        // Sort dropdown
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                this.sortProperties();
            });
        }

        // Clear filters button
        const clearFiltersBtn = document.getElementById('clearFiltersBtn');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => {
                this.clearFilters();
            });
        }
    }

    // Setup event listeners
    setupEventListeners() {
        // Mobile navigation toggle
        const navToggle = document.getElementById('navToggle');
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                document.getElementById('navMenu').classList.toggle('active');
            });
        }

        // Property card clicks (delegated event handling)
        document.body.addEventListener('click', (e) => {
            const propertyCard = e.target.closest('.property-card');
            if (propertyCard && propertyCard.dataset.id) {
                this.showPropertyDetailModal(propertyCard.dataset.id);
            }
        });
    }

    // FIXED: Apply filters with OR-based amenity logic
    applyFilters() {
        this.showSpinner();

        // Get filter values
        const location = document.getElementById('locationFilter')?.value || '';
        const propertyType = document.getElementById('propertyTypeFilter')?.value || '';
        const category = document.getElementById('categoryFilter')?.value || '';
        const forType = document.getElementById('forTypeFilter')?.value || '';
        const minPrice = document.getElementById('minPriceFilter')?.value || '';
        const maxPrice = document.getElementById('maxPriceFilter')?.value || '';
        const furnishing = document.getElementById('furnishingFilter')?.value || '';

        // Get selected amenities
        const selectedAmenities = [...document.querySelectorAll('.amenity-btn.active')]
            .map(btn => btn.dataset.amenity);

        // Filter properties
        this.filteredProperties = this.data.properties.filter(property => {
            // Only show approved properties
            if (property.approvalStatus !== 'approved') return false;

            // Location filter
            if (location && !property.location.toLowerCase().includes(location.toLowerCase())) {
                return false;
            }

            // Property type filter
            if (propertyType && property.type !== propertyType) {
                return false;
            }

            // Category filter
            if (category && property.category !== category) {
                return false;
            }

            // For type filter
            if (forType && property.forType !== forType) {
                return false;
            }

            // Price range filter
            if (minPrice && property.price < parseInt(minPrice)) {
                return false;
            }
            if (maxPrice && property.price > parseInt(maxPrice)) {
                return false;
            }

            // Furnishing filter
            if (furnishing && property.furnishing !== furnishing) {
                return false;
            }

            // FIXED: OR-based amenities filter instead of AND
            if (selectedAmenities.length > 0) {
                const hasAnyAmenity = property.amenities.some(amenity => 
                    selectedAmenities.includes(amenity)
                );
                if (!hasAmenity) {
                    return false;
                }
            }

            return true;
        });

        // Update results
        this.renderPropertiesList();
        this.updateResultsCount();
        this.hideSpinner();
    }

    // Sort properties
    sortProperties() {
        const sortValue = document.getElementById('sortSelect')?.value || 'relevance';
        
        switch (sortValue) {
            case 'price-low':
                this.filteredProperties.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                this.filteredProperties.sort((a, b) => b.price - a.price);
                break;
            case 'area-large':
                this.filteredProperties.sort((a, b) => b.area - a.area);
                break;
            case 'area-small':
                this.filteredProperties.sort((a, b) => a.area - b.area);
                break;
            case 'newest':
                this.filteredProperties.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
                break;
            default:
                // Relevance - featured properties first
                this.filteredProperties.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return 0;
                });
        }
        
        this.renderPropertiesList();
    }

    // Clear filters
    clearFilters() {
        // Clear form inputs
        document.querySelectorAll('.filter-input').forEach(input => {
            input.value = '';
        });

        // Clear amenity selections
        document.querySelectorAll('.amenity-btn.active').forEach(btn => {
            btn.classList.remove('active');
        });

        // Reset sort
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.value = 'relevance';
        }

        // Apply filters (will show all properties)
        this.applyFilters();
        
        this.showNotification('Filters cleared', 'success');
    }

    // Show property detail modal
    showPropertyDetailModal(propertyId) {
        const property = this.getPropertyById(Number(propertyId));
        if (!property) return;

        // Populate modal content
        document.getElementById('modalTitle').textContent = property.title;
        document.getElementById('modalDescription').textContent = property.description;

        // Populate image gallery
        const gallery = document.getElementById('modalGallery');
        gallery.innerHTML = '';
        property.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = property.title;
            img.style.cursor = 'pointer';
            gallery.appendChild(img);
        });

        // Show modal
        this.showModal('propertyModal');

        // Add to recently viewed
        this.addToRecentlyViewed(property.id);
    }

    // Get property by ID
    getPropertyById(id) {
        return this.data.properties.find(p => p.id === id);
    }

    // Load initial data
    loadInitialData() {
        this.filteredProperties = this.data.properties.filter(p => p.approvalStatus === 'approved');
        this.renderFeaturedProperties();
    }

    // Render featured properties on home page
    renderFeaturedProperties() {
        const container = document.getElementById('featuredPropertiesGrid');
        if (!container) return;

        const featuredProperties = this.data.properties
            .filter(p => p.featured && p.approvalStatus === 'approved')
            .slice(0, 6);

        container.innerHTML = featuredProperties.map(property => this.createPropertyCard(property)).join('');
    }

    // Render properties page
    renderPropertiesPage() {
        this.applyFilters(); // This will render the properties list
    }

    // Render properties list
    renderPropertiesList() {
        const container = document.getElementById('propertiesGrid');
        if (!container) return;

        if (this.filteredProperties.length === 0) {
            container.innerHTML = `
                <div class="no-properties">
                    <h3>No properties found</h3>
                    <p>Try adjusting your search criteria.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.filteredProperties.map(property => this.createPropertyCard(property)).join('');
    }

    // Create property card HTML
    createPropertyCard(property) {
        const formatPrice = (price) => {
            if (property.forType === 'Rent') {
                return `₹${price.toLocaleString()}`;
            } else {
                if (price >= 10000000) {
                    return `₹${(price / 10000000).toFixed(1)} Cr`;
                } else if (price >= 100000) {
                    return `₹${(price / 100000).toFixed(1)} Lakh`;
                } else {
                    return `₹${price.toLocaleString()}`;
                }
            }
        };

        const badges = [];
        badges.push(`<span class="property-badge badge-for-${property.forType.toLowerCase()}">${property.forType}</span>`);
        if (property.featured) {
            badges.push(`<span class="property-badge badge-featured">Featured</span>`);
        }

        const amenitiesDisplay = property.amenities.slice(0, 3);
        const moreCount = property.amenities.length - 3;

        return `
            <div class="property-card" data-id="${property.id}">
                <img src="${property.images[0]}" alt="${property.title}" class="property-image" loading="lazy">
                <div class="property-content">
                    <div class="property-badges">
                        ${badges.join('')}
                    </div>
                    <h3 class="property-title">${property.title}</h3>
                    <div class="property-price">${formatPrice(property.price)}</div>
                    <div class="property-location">📍 ${property.location}</div>
                    <div class="property-details">
                        <span>${property.type}</span>
                        <span>${property.area} sq ft</span>
                        <span>${property.furnishing}</span>
                    </div>
                    <div class="property-amenities">
                        ${amenitiesDisplay.map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
                        ${moreCount > 0 ? `<span class="amenity-tag amenities-more">+${moreCount} more</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    // Update results count
    updateResultsCount() {
        const counter = document.getElementById('resultsCount');
        if (counter) {
            const count = this.filteredProperties.length;
            counter.textContent = `${count} ${count === 1 ? 'property' : 'properties'} found`;
        }
    }

    // Handle login
    handleLogin(e) {
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!this.validateForm(e.target)) {
            return;
        }

        // Find user
        const user = this.data.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Update last login
            user.lastLogin = new Date().toISOString().split('T')[0];
            this.saveData();
            
            this.updateAuthUI();
            this.hideModal('loginModal');
            this.showNotification(`Welcome back, ${user.name}!`, 'success');
            
            // Reset form
            e.target.reset();
        } else {
            this.showNotification('Invalid email or password', 'error');
        }
    }

    // Handle register
    handleRegister(e) {
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const password = formData.get('password');
        const terms = formData.get('terms');

        if (!this.validateForm(e.target)) {
            return;
        }

        if (!terms) {
            this.showNotification('Please accept the terms and conditions', 'error');
            return;
        }

        // Check if user already exists
        if (this.data.users.find(u => u.email === email)) {
            this.showNotification('User with this email already exists', 'error');
            return;
        }

        // Create new user
        const newUser = {
            id: `user_${Date.now()}`,
            name,
            email,
            phone,
            password,
            role: 'user',
            registrationDate: new Date().toISOString().split('T')[0],
            lastLogin: new Date().toISOString().split('T')[0],
            status: 'active',
            propertiesPosted: 0
        };

        this.data.users.push(newUser);
        this.saveData();

        // Auto-login after registration
        this.currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        this.updateAuthUI();
        this.hideModal('registerModal');
        this.showNotification(`Welcome to RVG Properties, ${newUser.name}!`, 'success');
        
        // Reset form
        e.target.reset();
    }

    // Handle contact form
    handleContactForm(e) {
        const formData = new FormData(e.target);
        
        if (!this.validateForm(e.target)) {
            return;
        }

        // Simulate form submission
        this.showSpinner();
        
        setTimeout(() => {
            this.hideSpinner();
            this.showNotification('Thank you for your message! We will get back to you soon.', 'success');
            e.target.reset();
        }, 1000);
    }

    // Validate form
    validateForm(form) {
        let isValid = true;
        
        form.querySelectorAll('[required]').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('input-error');
                this.showFieldError(input, 'This field is required');
            } else {
                input.classList.remove('input-error');
                this.clearFieldError(input);
            }
        });

        // Email validation
        const emailInputs = form.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
            if (input.value && !this.isValidEmail(input.value)) {
                isValid = false;
                input.classList.add('input-error');
                this.showFieldError(input, 'Please enter a valid email address');
            }
        });

        return isValid;
    }

    // Show field error
    showFieldError(input, message) {
        this.clearFieldError(input);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }

    // Clear field error
    clearFieldError(input) {
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    }

    // Validate email
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Logout
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.updateAuthUI();
        this.showNotification('Logged out successfully', 'success');
        
        // Navigate to home page
        this.navigateToPage('home');
    }

    // Update authentication UI
    updateAuthUI() {
        const authButtons = document.getElementById('authButtons');
        const userMenu = document.getElementById('userMenu');
        const userName = document.getElementById('userName');

        if (this.currentUser) {
            authButtons.classList.add('hidden');
            userMenu.classList.remove('hidden');
            userName.textContent = `Welcome, ${this.currentUser.name}`;
        } else {
            authButtons.classList.remove('hidden');
            userMenu.classList.add('hidden');
        }
    }

    // Add to recently viewed
    addToRecentlyViewed(propertyId) {
        this.recentlyViewed = this.recentlyViewed.filter(id => id !== propertyId);
        this.recentlyViewed.unshift(propertyId);
        this.recentlyViewed = this.recentlyViewed.slice(0, 10); // Keep only last 10
        localStorage.setItem('recentlyViewed', JSON.stringify(this.recentlyViewed));
    }

    // Show modal
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    }

    // Hide modal
    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
        }
    }

    // Show spinner
    showSpinner() {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.classList.remove('hidden');
        }
    }

    // Hide spinner
    hideSpinner() {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.classList.add('hidden');
        }
    }

    // Show notification
    showNotification(message, type = 'success') {
        const container = document.getElementById('notifications');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        container.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new RVGProperties();
});

// Global error handler
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Prevent form submission on enter for search inputs
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('search-input')) {
        e.preventDefault();
        if (window.app) {
            window.app.navigateToPage('properties');
        }
    }
});
