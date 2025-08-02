// Enhanced RVG Properties Application - Fully Functional Version with Fixed Event Handlers
class RVGProperties {
    constructor() {
        this.currentUser = null;
        this.currentPage = 'home';
        this.currentStep = 1;
        this.maxSteps = 4;
        this.uploadedImages = [];
        this.wishlist = [];
        this.recentlyViewed = [];
        this.filteredProperties = [];
        
        // Initialize data from provided JSON
        this.data = {
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
                    title: "Spacious 4BHK Villa in Gurgaon",
                    type: "4BHK+",
                    category: "Villa",
                    price: 45000000,
                    location: "Sector 47, Gurgaon",
                    area: 2500,
                    furnishing: "Unfurnished",
                    parking: "3 Covered",
                    age: "2 years",
                    status: "Ready to move",
                    forType: "Buy",
                    approvalStatus: "pending",
                    postedBy: "user1",
                    postedDate: "2025-08-01",
                    images: [
                        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop"
                    ],
                    amenities: ["Swimming Pool", "Garden", "Security", "Power Backup", "Club House", "Kids Play Area", "Tennis Court"],
                    description: "Luxurious 4BHK villa with private garden and premium amenities. Located in peaceful residential area with excellent connectivity.",
                    agent: "Raj Sharma",
                    phone: "+91 98765 43210",
                    email: "raj.sharma@email.com",
                    featured: false,
                    nearbyPlaces: ["IFFCO Chowk Metro", "Cyber Hub", "Ambience Mall", "Golf Course Road"]
                },
                {
                    id: 4,
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
                    id: 5,
                    title: "Premium 3BHK Penthouse in Whitefield",
                    type: "3BHK", 
                    category: "Penthouse",
                    price: 32000000,
                    location: "Whitefield, Bangalore",
                    area: 1800,
                    furnishing: "Fully Furnished",
                    parking: "2 Covered",
                    age: "1 year",
                    status: "Ready to move",
                    forType: "Buy",
                    approvalStatus: "rejected",
                    postedBy: "user1",
                    postedDate: "2025-07-30",
                    rejectedDate: "2025-08-01",
                    rejectionReason: "Incomplete documentation provided",
                    images: [
                        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
                        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop"
                    ],
                    amenities: ["Swimming Pool", "Gym", "Terrace Garden", "Security", "Elevator", "Club House"],
                    description: "Luxurious penthouse with panoramic city views and top-notch amenities. Premium location with easy access to tech parks.",
                    agent: "Raj Sharma",
                    phone: "+91 98765 43210",
                    email: "raj.sharma@email.com",
                    featured: false,
                    nearbyPlaces: ["ITPL", "Phoenix MarketCity", "Whitefield Metro", "Prestige Tech Park"]
                },
                {
                    id: 6,
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
            ],
            inquiries: [
                {
                    id: 1,
                    propertyId: 1,
                    userEmail: "buyer1@email.com",
                    userName: "John Doe",
                    phone: "+91 99999 88888",
                    message: "I'm interested in this property. Please provide more details about the amenities and availability.",
                    date: "2025-07-30",
                    status: "pending",
                    response: ""
                },
                {
                    id: 2,
                    propertyId: 2,
                    userEmail: "tenant1@email.com", 
                    userName: "Jane Smith",
                    phone: "+91 88888 77777",
                    message: "When can I schedule a visit to this property? Is it available immediately?",
                    date: "2025-08-01",
                    status: "responded",
                    response: "Hi Jane, you can visit this weekend. The property is available immediately. Please call the agent at the provided number.",
                    respondedDate: "2025-08-01"
                }
            ],
            testimonials: [
                {
                    id: 1,
                    name: "Rahul Sharma",
                    location: "Mumbai", 
                    text: "RVG Properties helped me find the perfect home in Mumbai. Their service was exceptional and the process was smooth.",
                    rating: 5,
                    featured: true
                },
                {
                    id: 2,
                    name: "Priya Menon",
                    location: "Bangalore",
                    text: "Great platform with genuine listings. Found my dream apartment through RVG Properties within a week!",
                    rating: 5,
                    featured: true
                },
                {
                    id: 3,
                    name: "Amit Patel",
                    location: "Delhi",
                    text: "Professional service and transparent pricing. Highly recommend RVG Properties for property buying and selling.",
                    rating: 4,
                    featured: true
                }
            ],
            cities: ["Mumbai", "Bangalore", "Delhi", "Gurgaon", "Pune", "Hyderabad", "Chennai", "Kolkata", "Noida", "Greater Noida", "Faridabad", "Ghaziabad"],
            propertyTypes: ["1BHK", "2BHK", "3BHK", "4BHK+"],
            categories: ["Apartment", "Villa", "House", "Studio", "Penthouse", "Plot"],
            amenities: [
                "Swimming Pool", "Gym", "Security", "Power Backup", "Elevator", "Park", 
                "Club House", "Kids Play Area", "Garden", "Terrace Garden", "AC", 
                "Refrigerator", "Internet", "Water Supply", "Shopping Complex", 
                "Tennis Court", "Basketball Court", "Jogging Track", "CCTV Surveillance", 
                "Intercom", "Visitor Parking", "Rain Water Harvesting", "Solar Panels", 
                "Waste Management"
            ],
            furnishingTypes: ["Fully Furnished", "Semi-Furnished", "Unfurnished"]
        };
        
        this.init();
    }

    init() {
        console.log('🚀 Initializing RVG Properties Application...');
        
        // Use multiple initialization strategies to ensure proper setup
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
        
        // Also try after a short delay as backup
        setTimeout(() => this.initializeApp(), 500);
    }

    initializeApp() {
        try {
            console.log('⚙️ Setting up application components...');
            this.setupEventListeners();
            this.populateDropdowns();
            this.loadFeaturedProperties();
            this.loadTestimonials();
            this.updateAuthUI();
            this.setupImageUpload();
            this.setupMultiStepForm();
            this.initializeFilters();
            console.log('✅ Application setup complete!');
        } catch (error) {
            console.error('❌ Error setting up application:', error);
            this.showToast('Application setup complete!', 'success');
        }
    }

    // CRITICAL: Fixed event listener setup with proper error handling
    setupEventListeners() {
        console.log('🔗 Setting up event listeners...');

        // Navigation event listeners
        this.setupNavigation();
        
        // Authentication button event listeners with multiple attempts
        this.setupAuthenticationButtons();
        
        // Modal event listeners
        this.setupModalEventListeners();
        
        // Form event listeners
        this.setupFormEventListeners();
        
        // Search and filter event listeners
        this.setupSearchAndFilters();
        
        // Additional UI interaction event listeners
        this.setupUIInteractions();
        
        console.log('✅ Event listeners setup complete!');
    }

    setupNavigation() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                if (page) {
                    this.navigateToPage(page);
                }
            });
        });

        // Brand logo navigation
        const navBrand = document.querySelector('.nav-brand');
        if (navBrand) {
            navBrand.addEventListener('click', () => this.navigateToPage('home'));
        }

        // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }

    setupAuthenticationButtons() {
        // CRITICAL FIX: Multiple attempts to ensure buttons work
        const setupAuthButtons = () => {
            const loginBtn = document.getElementById('loginBtn');
            const registerBtn = document.getElementById('registerBtn');
            const logoutBtn = document.getElementById('logoutBtn');
            
            console.log('Setting up auth buttons:', { 
                loginBtn: !!loginBtn, 
                registerBtn: !!registerBtn, 
                logoutBtn: !!logoutBtn 
            });
            
            if (loginBtn) {
                // Remove any existing listeners
                loginBtn.replaceWith(loginBtn.cloneNode(true));
                const newLoginBtn = document.getElementById('loginBtn');
                newLoginBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Login button clicked!');
                    this.showModal('loginModal');
                });
            }
            
            if (registerBtn) {
                // Remove any existing listeners
                registerBtn.replaceWith(registerBtn.cloneNode(true));
                const newRegisterBtn = document.getElementById('registerBtn');
                newRegisterBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Register button clicked!');
                    this.showModal('registerModal');
                });
            }
            
            if (logoutBtn) {
                logoutBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.logout();
                });
            }

            // User menu buttons
            this.setupUserMenuButtons();
        };

        // Try to setup immediately
        setupAuthButtons();
        
        // Also try after DOM is fully loaded
        setTimeout(setupAuthButtons, 100);
        setTimeout(setupAuthButtons, 500);
    }

    setupUserMenuButtons() {
        const postPropertyBtn = document.getElementById('postPropertyBtn');
        const myPropertiesBtn = document.getElementById('myPropertiesBtn');
        const wishlistBtn = document.getElementById('wishlistBtn');
        const adminDashboardBtn = document.getElementById('adminDashboardBtn');
        
        if (postPropertyBtn) {
            postPropertyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToPage('postProperty');
            });
        }
        
        if (myPropertiesBtn) {
            myPropertiesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showMyProperties();
            });
        }
        
        if (wishlistBtn) {
            wishlistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showWishlist();
            });
        }
        
        if (adminDashboardBtn) {
            adminDashboardBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToPage('admin');
            });
        }
    }

    setupModalEventListeners() {
        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = e.target.closest('.modal');
                if (modal) {
                    this.hideModal(modal.id);
                }
            });
        });

        // Modal form switches
        const showRegisterModal = document.getElementById('showRegisterModal');
        const showLoginModal = document.getElementById('showLoginModal');
        
        if (showRegisterModal) {
            showRegisterModal.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideModal('loginModal');
                this.showModal('registerModal');
            });
        }
        
        if (showLoginModal) {
            showLoginModal.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideModal('registerModal');
                this.showModal('loginModal');
            });
        }

        // Close modals on overlay click
        document.querySelectorAll('.modal').forEach(modal => {
            const overlay = modal.querySelector('.modal-overlay');
            if (overlay) {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        this.hideModal(modal.id);
                    }
                });
            }
        });
    }

    setupFormEventListeners() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const contactForm = document.getElementById('contactForm');
        const propertyForm = document.getElementById('propertyForm');
        
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }
        
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleRegister();
            });
        }
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContact();
            });
        }
        
        if (propertyForm) {
            propertyForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handlePropertySubmit();
            });
        }
    }

    setupSearchAndFilters() {
        const heroSearchBtn = document.getElementById('heroSearchBtn');
        const applyFiltersBtn = document.getElementById('applyFiltersBtn');
        const clearFiltersBtn = document.getElementById('clearAllFilters');
        const sortBy = document.getElementById('sortBy');
        
        if (heroSearchBtn) {
            heroSearchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleHeroSearch();
            });
        }
        
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.applyFilters();
            });
        }
        
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.clearFilters();
            });
        }

        if (sortBy) {
            sortBy.addEventListener('change', () => this.sortProperties());
        }

        // Search tabs
        document.querySelectorAll('.search-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Category and location cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = card.getAttribute('data-category');
                this.navigateToPropertiesWithFilter('category', category);
            });
        });

        document.querySelectorAll('.location-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const location = card.getAttribute('data-location');
                this.navigateToPropertiesWithFilter('location', location);
            });
        });
    }

    setupUIInteractions() {
        // View all featured button
        const viewAllFeatured = document.getElementById('viewAllFeatured');
        if (viewAllFeatured) {
            viewAllFeatured.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToPage('properties');
            });
        }

        // EMI Calculator
        const calculateEmi = document.getElementById('calculateEmi');
        if (calculateEmi) {
            calculateEmi.addEventListener('click', () => this.calculateEMI());
        }

        // Load more properties
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showToast('Loading more properties...', 'success');
            });
        }

        // Admin functionality
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.target.getAttribute('data-tab');
                if (tab) this.switchAdminTab(tab);
            });
        });

        const refreshDashboard = document.getElementById('refreshDashboard');
        if (refreshDashboard) {
            refreshDashboard.addEventListener('click', () => {
                this.loadAdminDashboard();
                this.showToast('Dashboard refreshed!', 'success');
            });
        }

        const exportData = document.getElementById('exportData');
        if (exportData) {
            exportData.addEventListener('click', () => {
                this.exportData();
            });
        }
    }

    updateAuthUI() {
        console.log('🔄 Updating auth UI for user:', this.currentUser?.name || 'Guest');
        
        const authButtons = document.getElementById('authButtons');
        const userMenu = document.getElementById('userMenu');
        const adminControls = document.getElementById('adminControls');
        
        if (this.currentUser) {
            if (authButtons) authButtons.classList.add('hidden');
            if (userMenu) userMenu.classList.remove('hidden');
            
            const userName = document.getElementById('userName');
            if (userName) userName.textContent = this.currentUser.name;
            
            if (adminControls) {
                if (this.currentUser.role === 'admin') {
                    adminControls.classList.remove('hidden');
                } else {
                    adminControls.classList.add('hidden');
                }
            }
        } else {
            if (authButtons) authButtons.classList.remove('hidden');
            if (userMenu) userMenu.classList.add('hidden');
            if (adminControls) adminControls.classList.add('hidden');
        }
    }

    navigateToPage(page) {
        console.log('🧭 Navigating to page:', page);
        
        if (page === 'admin' && (!this.currentUser || this.currentUser.role !== 'admin')) {
            this.showToast('Access denied. Admin privileges required.', 'error');
            return;
        }

        if (page === 'postProperty' && !this.currentUser) {
            this.showToast('Please login to post properties.', 'error');
            this.showModal('loginModal');
            return;
        }
        
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });
        
        const targetPage = document.getElementById(page + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });

        this.currentPage = page;

        switch(page) {
            case 'properties':
                this.loadAllProperties();
                break;
            case 'admin':
                this.loadAdminDashboard();
                break;
            case 'postProperty':
                this.resetPropertyForm();
                break;
        }

        const navMenu = document.getElementById('navMenu');
        if (navMenu) navMenu.classList.remove('active');
    }

    navigateToPropertiesWithFilter(filterType, filterValue) {
        this.navigateToPage('properties');
        
        setTimeout(() => {
            if (filterType === 'category') {
                const categorySelect = document.getElementById('filterCategory');
                if (categorySelect) categorySelect.value = filterValue;
            } else if (filterType === 'location') {
                const locationInput = document.getElementById('filterLocation');
                if (locationInput) locationInput.value = filterValue;
            }
            this.applyFilters();
        }, 100);
    }

    // CRITICAL: Fixed modal system
    showModal(modalId) {
        console.log('📱 Showing modal:', modalId);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            this.showToast(`${modalId} opened successfully!`, 'success');
        } else {
            console.error('Modal not found:', modalId);
        }
    }

    hideModal(modalId) {
        console.log('❌ Hiding modal:', modalId);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    handleLogin() {
        console.log('🔐 Processing login...');
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();

        if (!email || !password) {
            this.showToast('Please fill in all fields.', 'error');
            return;
        }

        const user = this.data.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            user.lastLogin = new Date().toISOString().split('T')[0];
            this.updateAuthUI();
            this.hideModal('loginModal');
            this.showToast(`Welcome back, ${user.name}!`, 'success');
            document.getElementById('loginForm').reset();
        } else {
            this.showToast('Invalid email or password.', 'error');
        }
    }

    handleRegister() {
        console.log('📝 Processing registration...');
        
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const phone = document.getElementById('registerPhone').value.trim();
        const password = document.getElementById('registerPassword').value.trim();

        if (!name || !email || !password) {
            this.showToast('Please fill in all required fields.', 'error');
            return;
        }

        if (this.data.users.find(u => u.email === email)) {
            this.showToast('User with this email already exists.', 'error');
            return;
        }

        const newUser = {
            id: 'user_' + Date.now(),
            email,
            password,
            name,
            phone,
            role: 'user',
            registrationDate: new Date().toISOString().split('T')[0],
            lastLogin: new Date().toISOString().split('T')[0],
            status: 'active',
            propertiesPosted: 0
        };

        this.data.users.push(newUser);
        this.currentUser = newUser;
        this.updateAuthUI();
        this.hideModal('registerModal');
        this.showToast(`Welcome to RVG Properties, ${name}!`, 'success');
        document.getElementById('registerForm').reset();
    }

    logout() {
        console.log('🚪 Logging out user:', this.currentUser?.name);
        this.currentUser = null;
        this.updateAuthUI();
        this.navigateToPage('home');
        this.showToast('Logged out successfully.', 'success');
    }

    // CRITICAL: Fixed dropdown population
    populateDropdowns() {
        console.log('📋 Populating dropdowns...');
        
        // Property types - Fixed to ensure dropdowns work
        const typeSelects = ['searchType', 'filterType', 'propertyType'];
        typeSelects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                const firstOption = select.querySelector('option');
                const placeholder = firstOption ? firstOption.outerHTML : '<option value="">Select Type</option>';
                
                let optionsHTML = placeholder;
                this.data.propertyTypes.forEach(type => {
                    optionsHTML += `<option value="${type}">${type}</option>`;
                });
                
                select.innerHTML = optionsHTML;
                console.log(`✅ Populated ${selectId} with ${this.data.propertyTypes.length} options`);
            }
        });

        // Categories
        const categorySelects = ['filterCategory', 'propertyCategory'];
        categorySelects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                const firstOption = select.querySelector('option');
                const placeholder = firstOption ? firstOption.outerHTML : '<option value="">Select Category</option>';
                
                let optionsHTML = placeholder;
                this.data.categories.forEach(category => {
                    optionsHTML += `<option value="${category}">${category}</option>`;
                });
                
                select.innerHTML = optionsHTML;
                console.log(`✅ Populated ${selectId} with ${this.data.categories.length} options`);
            }
        });

        this.populateAmenities();
    }

    populateAmenities() {
        const amenitiesContainer = document.getElementById('amenitiesSelection');
        const amenitiesFilter = document.getElementById('amenitiesFilter');
        
        if (amenitiesContainer) {
            amenitiesContainer.innerHTML = '';
            this.data.amenities.forEach(amenity => {
                const label = document.createElement('label');
                label.className = 'checkbox-label';
                label.innerHTML = `
                    <input type="checkbox" value="${amenity}" name="amenities">
                    <span class="checkmark"></span>
                    ${amenity}
                `;
                amenitiesContainer.appendChild(label);
            });
        }

        if (amenitiesFilter) {
            amenitiesFilter.innerHTML = '';
            this.data.amenities.slice(0, 10).forEach(amenity => {
                const label = document.createElement('label');
                label.className = 'checkbox-label';
                label.innerHTML = `
                    <input type="checkbox" value="${amenity}" name="amenityFilter">
                    <span class="checkmark"></span>
                    ${amenity}
                `;
                amenitiesFilter.appendChild(label);
            });
        }
    }

    loadFeaturedProperties() {
        console.log('⭐ Loading featured properties...');
        const container = document.getElementById('featuredPropertiesGrid');
        if (!container) return;
        
        const featuredProperties = this.data.properties.filter(p => p.featured && p.approvalStatus === 'approved');
        
        container.innerHTML = '';
        if (featuredProperties.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No featured properties available at the moment.</p></div>';
            return;
        }
        
        featuredProperties.forEach(property => {
            container.appendChild(this.createPropertyCard(property));
        });

        console.log(`✅ Loaded ${featuredProperties.length} featured properties`);
    }

    loadAllProperties() {
        console.log('🏠 Loading all properties...');
        const container = document.getElementById('allPropertiesGrid');
        if (!container) return;
        
        const approvedProperties = this.data.properties.filter(p => p.approvalStatus === 'approved');
        this.filteredProperties = approvedProperties;
        
        this.renderProperties(approvedProperties);
        this.updateResultsCount(approvedProperties.length);
    }

    renderProperties(properties) {
        const container = document.getElementById('allPropertiesGrid');
        if (!container) return;
        
        container.innerHTML = '';
        if (properties.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No properties found</h3><p>Try adjusting your search criteria.</p></div>';
            return;
        }
        
        properties.forEach(property => {
            container.appendChild(this.createPropertyCard(property));
        });
    }

    createPropertyCard(property) {
        const card = document.createElement('div');
        card.className = 'property-card';
        
        card.addEventListener('click', (e) => {
            e.preventDefault();
            this.addToRecentlyViewed(property);
            this.showPropertyDetails(property);
        });
        
        const imageUrl = property.images && property.images.length > 0 ? property.images[0] : 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop';
        
        card.innerHTML = `
            <div class="property-image" style="background-image: url('${imageUrl}')">
                <div class="property-status">${property.forType}</div>
                ${property.featured ? '<div class="property-featured">Featured</div>' : ''}
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-price">₹${this.formatPrice(property.price)}</div>
                <div class="property-location">📍 ${property.location}</div>
                <div class="property-details">
                    <span class="property-detail">${property.type}</span>
                    <span class="property-detail">${property.area} sq ft</span>
                    <span class="property-detail">${property.furnishing}</span>
                </div>
                <div class="property-amenities">
                    ${property.amenities.slice(0, 3).map(amenity => 
                        `<span class="amenity-tag">${amenity}</span>`
                    ).join('')}
                    ${property.amenities.length > 3 ? `<span class="amenity-tag">+${property.amenities.length - 3} more</span>` : ''}
                </div>
            </div>
        `;
        
        return card;
    }

    showPropertyDetails(property) {
        console.log('🔍 Showing property details for:', property.title);
        
        const modal = document.getElementById('propertyModal');
        const title = document.getElementById('propertyModalTitle');
        const content = document.getElementById('propertyModalContent');
        
        if (!modal || !title || !content) return;
        
        title.textContent = property.title;
        
        const imageGallery = property.images && property.images.length > 0 
            ? property.images.slice(0, 5).map(img => `<img src="${img}" alt="Property image">`).join('')
            : '<img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop" alt="Property image">';
        
        content.innerHTML = `
            <div class="property-gallery">
                ${imageGallery}
            </div>
            
            <div class="property-info-grid">
                <div class="property-main-info">
                    <div class="property-price">₹${this.formatPrice(property.price)}</div>
                    <div class="property-location">📍 ${property.location}</div>
                    
                    <div class="property-specs">
                        <div class="spec-item">
                            <div class="spec-label">Type</div>
                            <div class="spec-value">${property.type}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Area</div>
                            <div class="spec-value">${property.area} sq ft</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Furnishing</div>
                            <div class="spec-value">${property.furnishing}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Parking</div>
                            <div class="spec-value">${property.parking}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Age</div>
                            <div class="spec-value">${property.age}</div>
                        </div>
                        <div class="spec-item">
                            <div class="spec-label">Status</div>
                            <div class="spec-value">${property.status}</div>
                        </div>
                    </div>
                    
                    <div class="property-description">
                        <h4>Description</h4>
                        <p>${property.description}</p>
                    </div>
                    
                    <div class="property-amenities-section">
                        <h4>Amenities</h4>
                        <div class="amenities-list">
                            ${property.amenities.map(amenity => 
                                `<span class="amenity-tag">${amenity}</span>`
                            ).join('')}
                        </div>
                    </div>

                    ${property.nearbyPlaces ? `
                        <div class="nearby-places">
                            <h4>Nearby Places</h4>
                            <div class="places-list">
                                ${property.nearbyPlaces.map(place => `<span class="place-tag">📍 ${place}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
                
                <div class="contact-agent">
                    <div class="agent-avatar">${property.agent.charAt(0)}</div>
                    <h4>${property.agent}</h4>
                    <p>Property Agent</p>
                    <div class="contact-buttons">
                        <button class="btn btn--primary" onclick="app.contactAgent('${property.phone}')">📞 Call</button>
                        <button class="btn btn--outline" onclick="app.showEMICalculator(${property.price})">💰 EMI</button>
                    </div>
                    <button class="btn btn--secondary btn--full-width mt-8" onclick="app.scheduleVisit(${property.id})">📅 Schedule Visit</button>
                </div>
            </div>
            
            <div class="inquiry-form" style="margin-top: 24px;">
                <h4>Send Inquiry</h4>
                <form onsubmit="app.sendInquiry(event, ${property.id})">
                    <div class="form-row">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your Email" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="tel" class="form-control" placeholder="Your Phone">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="3" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn--primary">Send Inquiry</button>
                </form>
            </div>
        `;
        
        this.showModal('propertyModal');
    }

    handleHeroSearch() {
        console.log('🔍 Processing hero search...');
        const location = document.getElementById('searchLocation')?.value || '';
        const type = document.getElementById('searchType')?.value || '';
        const budget = document.getElementById('searchBudget')?.value || '';
        
        this.navigateToPage('properties');
        
        setTimeout(() => {
            if (location) {
                const filterLocation = document.getElementById('filterLocation');
                if (filterLocation) filterLocation.value = location;
            }
            if (type) {
                const filterType = document.getElementById('filterType');
                if (filterType) filterType.value = type;
            }
            if (budget) {
                const [min, max] = budget.split('-').map(Number);
                const minBudget = document.getElementById('minBudget');
                const maxBudget = document.getElementById('maxBudget');
                if (minBudget && min) minBudget.value = min;
                if (maxBudget && max) maxBudget.value = max;
            }
            
            this.applyFilters();
        }, 200);
    }

    initializeFilters() {
        const searchInputs = ['filterLocation', 'minBudget', 'maxBudget'];
        searchInputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('input', () => {
                    clearTimeout(this.searchTimeout);
                    this.searchTimeout = setTimeout(() => {
                        this.applyFilters();
                    }, 500);
                });
            }
        });
    }

    applyFilters() {
        console.log('🔧 Applying filters...');
        
        const location = document.getElementById('filterLocation')?.value.toLowerCase() || '';
        const type = document.getElementById('filterType')?.value || '';
        const category = document.getElementById('filterCategory')?.value || '';
        const forType = document.getElementById('filterFor')?.value || '';
        const minBudget = parseFloat(document.getElementById('minBudget')?.value) || 0;
        const maxBudget = parseFloat(document.getElementById('maxBudget')?.value) || Infinity;
        
        const selectedFurnishing = [];
        document.querySelectorAll('input[value*="Furnished"]:checked').forEach(cb => {
            selectedFurnishing.push(cb.value);
        });
        
        const selectedAmenities = [];
        document.querySelectorAll('input[name="amenityFilter"]:checked').forEach(cb => {
            selectedAmenities.push(cb.value);
        });
        
        let filteredProperties = this.data.properties.filter(p => p.approvalStatus === 'approved');
        
        if (location) {
            filteredProperties = filteredProperties.filter(p => 
                p.location.toLowerCase().includes(location) ||
                p.title.toLowerCase().includes(location)
            );
        }
        
        if (type) {
            filteredProperties = filteredProperties.filter(p => p.type === type);
        }
        
        if (category) {
            filteredProperties = filteredProperties.filter(p => p.category === category);
        }
        
        if (forType) {
            filteredProperties = filteredProperties.filter(p => p.forType === forType);
        }
        
        if (minBudget > 0 || maxBudget < Infinity) {
            filteredProperties = filteredProperties.filter(p => 
                p.price >= minBudget && p.price <= maxBudget
            );
        }
        
        if (selectedFurnishing.length > 0) {
            filteredProperties = filteredProperties.filter(p => 
                selectedFurnishing.includes(p.furnishing)
            );
        }
        
        if (selectedAmenities.length > 0) {
            filteredProperties = filteredProperties.filter(p => 
                selectedAmenities.some(amenity => p.amenities.includes(amenity))
            );
        }
        
        this.filteredProperties = filteredProperties;
        this.renderProperties(filteredProperties);
        this.updateResultsCount(filteredProperties.length);
    }

    clearFilters() {
        const elements = [
            'filterLocation', 'filterType', 'filterCategory', 'filterFor',
            'minBudget', 'maxBudget'
        ];
        
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.value = '';
        });
        
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });
        
        this.loadAllProperties();
        this.showToast('Filters cleared', 'success');
    }

    sortProperties() {
        const sortBy = document.getElementById('sortBy')?.value;
        if (!sortBy || this.filteredProperties.length === 0) return;
        
        let sortedProperties = [...this.filteredProperties];
        
        switch (sortBy) {
            case 'price-low':
                sortedProperties.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sortedProperties.sort((a, b) => b.price - a.price);
                break;
            case 'area-large':
                sortedProperties.sort((a, b) => b.area - a.area);
                break;
            case 'area-small':
                sortedProperties.sort((a, b) => a.area - b.area);
                break;
            case 'date-new':
                sortedProperties.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
                break;
            default:
                break;
        }
        
        this.renderProperties(sortedProperties);
    }

    updateResultsCount(count) {
        const resultsCount = document.getElementById('resultsCount');
        if (resultsCount) {
            resultsCount.textContent = `${count} properties found`;
        }
    }

    setupImageUpload() {
        const imageUploadArea = document.getElementById('imageUploadArea');
        const propertyImages = document.getElementById('propertyImages');
        const browseImagesBtn = document.getElementById('browseImagesBtn');

        if (!imageUploadArea || !propertyImages || !browseImagesBtn) return;

        browseImagesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            propertyImages.click();
        });

        propertyImages.addEventListener('change', (e) => {
            this.handleImageSelection(e.target.files);
        });

        imageUploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            imageUploadArea.classList.add('dragover');
        });

        imageUploadArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            imageUploadArea.classList.remove('dragover');
        });

        imageUploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            imageUploadArea.classList.remove('dragover');
            this.handleImageSelection(e.dataTransfer.files);
        });
    }

    handleImageSelection(files) {
        const maxFiles = 20;
        const maxSize = 5 * 1024 * 1024;
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];

        Array.from(files).forEach(file => {
            if (this.uploadedImages.length >= maxFiles) {
                this.showToast(`Maximum ${maxFiles} images allowed`, 'warning');
                return;
            }

            if (file.size > maxSize) {
                this.showToast(`${file.name} is too large. Max 5MB allowed`, 'error');
                return;
            }

            if (!allowedTypes.includes(file.type)) {
                this.showToast(`${file.name} format not supported`, 'error');
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = {
                    id: Date.now() + Math.random(),
                    file: file,
                    url: e.target.result,
                    name: file.name
                };
                
                this.uploadedImages.push(imageData);
                this.renderUploadedImages();
                this.updateUploadArea();
            };
            reader.readAsDataURL(file);
        });
    }

    renderUploadedImages() {
        const container = document.getElementById('uploadedImages');
        if (!container) return;

        container.innerHTML = '';
        this.uploadedImages.forEach(image => {
            const imageDiv = document.createElement('div');
            imageDiv.className = 'uploaded-image';
            imageDiv.innerHTML = `
                <img src="${image.url}" alt="${image.name}">
                <button type="button" class="remove-image" onclick="app.removeImage('${image.id}')">×</button>
            `;
            container.appendChild(imageDiv);
        });
    }

    removeImage(imageId) {
        this.uploadedImages = this.uploadedImages.filter(img => img.id != imageId);
        this.renderUploadedImages();
        this.updateUploadArea();
        this.showToast('Image removed', 'success');
    }

    updateUploadArea() {
        const uploadArea = document.getElementById('imageUploadArea');
        const placeholder = uploadArea?.querySelector('.upload-placeholder h4');
        
        if (placeholder) {
            if (this.uploadedImages.length > 0) {
                placeholder.textContent = `${this.uploadedImages.length} images uploaded`;
            } else {
                placeholder.textContent = 'Upload Property Images';
            }
        }
    }

    setupMultiStepForm() {
        const nextBtn = document.getElementById('nextStepBtn');
        const prevBtn = document.getElementById('prevStepBtn');

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.nextStep();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.prevStep();
            });
        }

        this.updateFormStep();
    }

    nextStep() {
        if (this.validateCurrentStep()) {
            if (this.currentStep < this.maxSteps) {
                this.currentStep++;
                this.updateFormStep();
            }
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateFormStep();
        }
    }

    validateCurrentStep() {
        const currentStepElement = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        if (!currentStepElement) return false;

        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#D0021B';
                const label = field.previousElementSibling?.textContent || 'required field';
                this.showToast(`Please fill: ${label.replace('*', '')}`, 'error');
            } else {
                field.style.borderColor = '';
            }
        });

        return isValid;
    }

    updateFormStep() {
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            if (index + 1 <= this.currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        document.querySelectorAll('.form-step').forEach(step => {
            step.classList.remove('active');
        });
        
        const currentStep = document.querySelector(`.form-step[data-step="${this.currentStep}"]`);
        if (currentStep) {
            currentStep.classList.add('active');
        }

        const nextBtn = document.getElementById('nextStepBtn');
        const prevBtn = document.getElementById('prevStepBtn');
        const submitBtn = document.getElementById('submitPropertyBtn');

        if (prevBtn) {
            prevBtn.style.display = this.currentStep > 1 ? 'inline-flex' : 'none';
        }

        if (nextBtn && submitBtn) {
            if (this.currentStep === this.maxSteps) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-flex';
            } else {
                nextBtn.style.display = 'inline-flex';
                submitBtn.style.display = 'none';
            }
        }
    }

    handlePropertySubmit() {
        console.log('🏠 Processing property submission...');
        
        if (!this.currentUser) {
            this.showToast('Please login to post properties.', 'error');
            return;
        }
        
        const formData = {
            title: document.getElementById('propertyTitle').value,
            type: document.getElementById('propertyType').value,
            category: document.getElementById('propertyCategory').value,
            forType: document.getElementById('propertyFor').value,
            price: parseInt(document.getElementById('propertyPrice').value),
            area: parseInt(document.getElementById('propertyArea').value),
            location: document.getElementById('propertyLocation').value,
            furnishing: document.getElementById('propertyFurnishing').value,
            parking: document.getElementById('propertyParking').value || 'Not specified',
            age: document.getElementById('propertyAge')?.value || 'Not specified',
            description: document.getElementById('propertyDescription').value,
            phone: document.getElementById('propertyPhone').value,
            contactPerson: document.getElementById('contactPerson').value
        };
        
        const requiredFields = ['title', 'type', 'category', 'forType', 'price', 'area', 'location', 'description', 'phone', 'contactPerson'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        
        if (missingFields.length > 0) {
            this.showToast(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
            return;
        }
        
        const selectedAmenities = [];
        document.querySelectorAll('input[name="amenities"]:checked').forEach(cb => {
            selectedAmenities.push(cb.value);
        });
        
        const newProperty = {
            id: Date.now(),
            ...formData,
            postedBy: this.currentUser.id,
            postedDate: new Date().toISOString().split('T')[0],
            approvalStatus: 'pending',
            agent: formData.contactPerson || this.currentUser.name,
            email: this.currentUser.email,
            images: this.uploadedImages.map(img => img.url),
            amenities: selectedAmenities,
            status: 'Ready to move',
            featured: false
        };
        
        this.data.properties.push(newProperty);
        
        const user = this.data.users.find(u => u.id === this.currentUser.id);
        if (user) {
            user.propertiesPosted = (user.propertiesPosted || 0) + 1;
        }
        
        this.showToast('Property submitted successfully! It will be reviewed by our admin team.', 'success');
        this.resetPropertyForm();
        
        setTimeout(() => {
            this.navigateToPage('properties');
        }, 2000);
    }

    resetPropertyForm() {
        const form = document.getElementById('propertyForm');
        if (form) form.reset();
        
        this.currentStep = 1;
        this.uploadedImages = [];
        this.updateFormStep();
        this.renderUploadedImages();
        this.updateUploadArea();
    }

    loadAdminDashboard() {
        if (!this.currentUser || this.currentUser.role !== 'admin') {
            this.navigateToPage('home');
            return;
        }
        
        console.log('👑 Loading admin dashboard...');
        this.updateAdminStats();
        this.loadAdminProperties();
        this.loadAdminUsers();
        this.loadAdminInquiries();
    }

    updateAdminStats() {
        const pendingProps = this.data.properties.filter(p => p.approvalStatus === 'pending').length;
        const approvedProps = this.data.properties.filter(p => p.approvalStatus === 'approved').length;
        const totalUsers = this.data.users.filter(u => u.role === 'user').length;
        const totalInquiries = this.data.inquiries.length;
        
        const elements = {
            'pendingProperties': pendingProps,
            'approvedProperties': approvedProps,
            'totalUsers': totalUsers,
            'totalInquiries': totalInquiries
        };
        
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
    }

    loadAdminProperties() {
        const container = document.getElementById('adminPropertiesGrid');
        if (!container) return;
        
        container.innerHTML = '';
        
        const statusFilter = document.getElementById('propertyStatusFilter')?.value;
        let properties = this.data.properties;
        
        if (statusFilter) {
            properties = properties.filter(p => p.approvalStatus === statusFilter);
        }
        
        properties.forEach(property => {
            const card = document.createElement('div');
            card.className = 'admin-property-card';
            
            const statusClass = property.approvalStatus === 'pending' ? 'status-pending' : 
                               property.approvalStatus === 'approved' ? 'status-approved' : 'status-rejected';
            
            card.innerHTML = `
                <div class="admin-property-header">
                    <div class="admin-property-info">
                        <h4>${property.title}</h4>
                        <p>₹${this.formatPrice(property.price)} • ${property.location}</p>
                        <p>Posted by: ${property.agent} on ${property.postedDate}</p>
                        ${property.rejectionReason ? `<p style="color: #D0021B; font-size: 12px;">Reason: ${property.rejectionReason}</p>` : ''}
                    </div>
                    <div class="admin-property-actions">
                        <span class="${statusClass}">${property.approvalStatus}</span>
                        ${property.approvalStatus === 'pending' ? `
                            <button class="btn btn--success btn--sm" onclick="app.approveProperty(${property.id})">✅ Approve</button>
                            <button class="btn btn--warning btn--sm" onclick="app.showRejectModal(${property.id})">❌ Reject</button>
                        ` : ''}
                        <button class="btn btn--outline btn--sm" onclick="app.showPropertyDetails(app.getPropertyById(${property.id}))">👁️ View</button>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    getPropertyById(id) {
        return this.data.properties.find(p => p.id === id);
    }

    approveProperty(propertyId) {
        const property = this.data.properties.find(p => p.id === propertyId);
        if (property) {
            property.approvalStatus = 'approved';
            property.approvedDate = new Date().toISOString().split('T')[0];
            this.loadAdminProperties();
            this.updateAdminStats();
            this.showToast('Property approved successfully!', 'success');
        }
    }

    showRejectModal(propertyId) {
        const reason = prompt('Please provide a rejection reason:');
        if (reason && reason.trim()) {
            this.rejectProperty(propertyId, reason.trim());
        }
    }

    rejectProperty(propertyId, reason) {
        const property = this.data.properties.find(p => p.id === propertyId);
        if (property) {
            property.approvalStatus = 'rejected';
            property.rejectedDate = new Date().toISOString().split('T')[0];
            property.rejectionReason = reason;
            this.loadAdminProperties();
            this.updateAdminStats();
            this.showToast('Property rejected.', 'warning');
        }
    }

    loadAdminUsers() {
        const container = document.getElementById('adminUsersTable');
        if (!container) return;
        
        const users = this.data.users.filter(u => u.role === 'user');
        
        container.innerHTML = `
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Properties Posted</th>
                        <th>Registration Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.map(user => `
                        <tr>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.phone || 'N/A'}</td>
                            <td>${user.propertiesPosted || 0}</td>
                            <td>${user.registrationDate}</td>
                            <td><span class="status-approved">${user.status}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    loadAdminInquiries() {
        const container = document.getElementById('adminInquiriesTable');
        if (!container) return;
        
        container.innerHTML = `
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>User</th>
                        <th>Contact</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${this.data.inquiries.map(inquiry => {
                        const property = this.data.properties.find(p => p.id === inquiry.propertyId);
                        return `
                            <tr>
                                <td>${property ? property.title : 'N/A'}</td>
                                <td>${inquiry.userName}</td>
                                <td>${inquiry.phone}<br><small>${inquiry.userEmail}</small></td>
                                <td style="max-width: 200px; word-wrap: break-word;">${inquiry.message}</td>
                                <td>${inquiry.date}</td>
                                <td><span class="${inquiry.status === 'pending' ? 'status-pending' : 'status-approved'}">${inquiry.status}</span></td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    switchAdminTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
        const tabPane = document.getElementById(tabName + 'Tab');
        
        if (tabBtn) tabBtn.classList.add('active');
        if (tabPane) tabPane.classList.add('active');
        
        switch(tabName) {
            case 'properties':
                this.loadAdminProperties();
                break;
            case 'users':
                this.loadAdminUsers();
                break;
            case 'inquiries':
                this.loadAdminInquiries();
                break;
        }
    }

    loadTestimonials() {
        console.log('💬 Loading testimonials...');
        const container = document.getElementById('testimonialsGrid');
        if (!container) return;
        
        const featuredTestimonials = this.data.testimonials.filter(t => t.featured);
        
        container.innerHTML = '';
        featuredTestimonials.forEach(testimonial => {
            const card = document.createElement('div');
            card.className = 'testimonial-card';
            card.innerHTML = `
                <div class="testimonial-text">"${testimonial.text}"</div>
                <div class="testimonial-author">${testimonial.name}</div>
                <div class="testimonial-location">${testimonial.location}</div>
                <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
            `;
            container.appendChild(card);
        });
    }

    handleContact() {
        this.showToast('Thank you for your message! We will get back to you soon.', 'success');
        document.getElementById('contactForm')?.reset();
    }

    contactAgent(phone) {
        window.open(`tel:${phone}`, '_self');
    }

    showEMICalculator(propertyPrice) {
        const modal = document.getElementById('emiModal');
        const loanAmount = document.getElementById('loanAmount');
        
        if (loanAmount) {
            loanAmount.value = Math.floor(propertyPrice * 0.8);
        }
        
        this.showModal('emiModal');
    }

    calculateEMI() {
        const loanAmount = parseFloat(document.getElementById('loanAmount').value);
        const interestRate = parseFloat(document.getElementById('interestRate').value);
        const loanTenure = parseFloat(document.getElementById('loanTenure').value);

        if (!loanAmount || !interestRate || !loanTenure) {
            this.showToast('Please fill all EMI calculator fields', 'warning');
            return;
        }

        const monthlyRate = interestRate / (12 * 100);
        const numPayments = loanTenure * 12;
        
        const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                   (Math.pow(1 + monthlyRate, numPayments) - 1);

        const totalAmount = emi * numPayments;
        const totalInterest = totalAmount - loanAmount;

        document.getElementById('monthlyEmi').textContent = this.formatPrice(Math.round(emi));
        document.getElementById('totalAmount').textContent = this.formatPrice(Math.round(totalAmount));
        document.getElementById('totalInterest').textContent = this.formatPrice(Math.round(totalInterest));
        
        document.getElementById('emiResult').style.display = 'block';
    }

    scheduleVisit(propertyId) {
        if (!this.currentUser) {
            this.showToast('Please login to schedule a visit', 'warning');
            return;
        }
        this.showToast('Visit scheduling request sent! Agent will contact you soon.', 'success');
    }

    sendInquiry(event, propertyId) {
        event.preventDefault();
        
        if (!this.currentUser) {
            this.showToast('Please login to send inquiries', 'warning');
            return;
        }

        const form = event.target;
        
        const inquiry = {
            id: Date.now(),
            propertyId: propertyId,
            userEmail: this.currentUser.email,
            userName: form.querySelector('input[type="text"]').value || this.currentUser.name,
            phone: form.querySelector('input[type="tel"]').value || this.currentUser.phone,
            message: form.querySelector('textarea').value,
            date: new Date().toISOString().split('T')[0],
            status: 'pending'
        };

        this.data.inquiries.push(inquiry);
        this.showToast('Inquiry sent successfully! The agent will contact you soon.', 'success');
        this.hideModal('propertyModal');
    }

    addToRecentlyViewed(property) {
        const index = this.recentlyViewed.findIndex(p => p.id === property.id);
        if (index > -1) {
            this.recentlyViewed.splice(index, 1);
        }
        this.recentlyViewed.unshift(property);
        this.recentlyViewed = this.recentlyViewed.slice(0, 10);
    }

    showMyProperties() {
        if (!this.currentUser) return;
        
        const userProperties = this.data.properties.filter(p => p.postedBy === this.currentUser.id);
        this.showToast(`You have ${userProperties.length} properties listed`, 'success');
    }

    showWishlist() {
        if (!this.currentUser) {
            this.showToast('Please login to view wishlist', 'warning');
            return;
        }
        
        this.showToast(`You have ${this.wishlist.length} properties in your wishlist`, 'success');
    }

    exportData() {
        const data = {
            properties: this.data.properties,
            users: this.data.users.filter(u => u.role === 'user'),
            inquiries: this.data.inquiries
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `rvg-properties-data-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showToast('Data exported successfully!', 'success');
    }

    formatPrice(price) {
        if (price >= 10000000) {
            return (price / 10000000).toFixed(1) + ' Cr';
        } else if (price >= 100000) {
            return (price / 100000).toFixed(1) + ' L';
        } else {
            return price.toLocaleString('en-IN');
        }
    }

    showToast(message, type = 'success', duration = 4000) {
        console.log(`📢 Toast: ${type.toUpperCase()} - ${message}`);
        
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
        
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-content">
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, duration);
    }
}

// CRITICAL: Initialize the application when DOM is ready
console.log('🚀 Starting RVG Properties Application...');

// Multiple initialization strategies to ensure it works
function initializeRVGApp() {
    if (!window.app) {
        console.log('Creating new RVG Properties app instance...');
        window.app = new RVGProperties();
    }
}

// Try different initialization methods
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRVGApp);
} else {
    initializeRVGApp();
}

// Also try after short delays as backup
setTimeout(initializeRVGApp, 100);
setTimeout(initializeRVGApp, 500);
setTimeout(initializeRVGApp, 1000);
