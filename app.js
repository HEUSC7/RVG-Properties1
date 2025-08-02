// RVG Properties Application JavaScript
class RVGProperties {
    constructor() {
        this.currentUser = null;
        this.currentPage = 'home';
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
                    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"],
                    amenities: ["Swimming Pool", "Gym", "Security", "Power Backup", "Elevator", "Park"],
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
                    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop"],
                    amenities: ["Gym", "Security", "Power Backup", "Internet", "AC", "Refrigerator"],
                    description: "Fully furnished 2BHK flat in the heart of Koramangala. Perfect for working professionals with all modern amenities.",
                    agent: "Priya Singh",
                    phone: "+91 87654 32109",
                    email: "priya.singh@email.com",
                    featured: true
                },
                {
                    id: 3,
                    title: "Spacious 4BHK Villa in Gurgaon",
                    type: "4BHK",
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
                    images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop"],
                    amenities: ["Swimming Pool", "Garden", "Security", "Power Backup", "Club House"],
                    description: "Luxurious 4BHK villa with private garden and premium amenities.",
                    agent: "Raj Sharma",
                    phone: "+91 98765 43210",
                    email: "raj.sharma@email.com",
                    featured: false
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
                    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"],
                    amenities: ["Security", "Elevator", "Power Backup", "Water Supply"],
                    description: "Affordable 1BHK studio apartment perfect for students and young professionals.",
                    agent: "Priya Singh",
                    phone: "+91 87654 32109",
                    email: "priya.singh@email.com",
                    featured: false
                }
            ],
            inquiries: [
                {
                    id: 1,
                    propertyId: 1,
                    userEmail: "buyer1@email.com",
                    userName: "John Doe",
                    phone: "+91 99999 88888",
                    message: "I'm interested in this property. Please provide more details.",
                    date: "2025-07-30",
                    status: "pending"
                },
                {
                    id: 2,
                    propertyId: 2,
                    userEmail: "tenant1@email.com", 
                    userName: "Jane Smith",
                    phone: "+91 88888 77777",
                    message: "When can I schedule a visit to this property?",
                    date: "2025-08-01",
                    status: "responded",
                    response: "Hi Jane, you can visit this weekend. Please call the agent."
                }
            ],
            testimonials: [
                {
                    id: 1,
                    name: "Rahul Sharma",
                    location: "Mumbai", 
                    text: "RVG Properties helped me find the perfect home in Mumbai. Excellent service!",
                    rating: 5,
                    featured: true
                },
                {
                    id: 2,
                    name: "Priya Menon",
                    location: "Bangalore",
                    text: "Great platform with genuine listings. Found my dream apartment quickly!",
                    rating: 5,
                    featured: true
                },
                {
                    id: 3,
                    name: "Amit Patel",
                    location: "Delhi",
                    text: "Professional service and transparent pricing. Highly recommend!",
                    rating: 4,
                    featured: true
                }
            ],
            cities: ["Mumbai", "Bangalore", "Delhi", "Gurgaon", "Pune", "Hyderabad", "Chennai"],
            propertyTypes: ["1BHK", "2BHK", "3BHK", "4BHK+"],
            categories: ["Apartment", "Villa", "House", "Studio", "Penthouse"],
            amenities: ["Swimming Pool", "Gym", "Security", "Power Backup", "Elevator", "Park", "Club House", "Garden", "AC", "Internet"]
        };
        
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupApplication();
            });
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        this.setupEventListeners();
        this.populateDropdowns();
        this.loadFeaturedProperties();
        this.loadTestimonials();
        this.checkAuthState();
        this.navigateToPage('home'); // Ensure home page is active
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                if (page) {
                    this.navigateToPage(page);
                }
            });
        });

        // Brand logo click
        const navBrand = document.querySelector('.nav-brand');
        if (navBrand) {
            navBrand.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToPage('home');
            });
        }

        // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Auth buttons
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        
        if (loginBtn) loginBtn.addEventListener('click', () => this.showModal('loginModal'));
        if (registerBtn) registerBtn.addEventListener('click', () => this.showModal('registerModal'));
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.logout());

        // Modal controls
        const loginModalClose = document.getElementById('loginModalClose');
        const registerModalClose = document.getElementById('registerModalClose');
        const propertyModalClose = document.getElementById('propertyModalClose');
        
        if (loginModalClose) loginModalClose.addEventListener('click', () => this.hideModal('loginModal'));
        if (registerModalClose) registerModalClose.addEventListener('click', () => this.hideModal('registerModal'));
        if (propertyModalClose) propertyModalClose.addEventListener('click', () => this.hideModal('propertyModal'));

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

        // Forms
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const contactForm = document.getElementById('contactForm');
        const propertyForm = document.getElementById('propertyForm');
        
        if (loginForm) loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        if (registerForm) registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        if (contactForm) contactForm.addEventListener('submit', (e) => this.handleContact(e));
        if (propertyForm) propertyForm.addEventListener('submit', (e) => this.handlePropertySubmit(e));

        // Search and filters
        const searchBtn = document.getElementById('searchBtn');
        const applyFiltersBtn = document.getElementById('applyFiltersBtn');
        const clearFiltersBtn = document.getElementById('clearFiltersBtn');
        
        if (searchBtn) searchBtn.addEventListener('click', () => this.handleSearch());
        if (applyFiltersBtn) applyFiltersBtn.addEventListener('click', () => this.applyFilters());
        if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', () => this.clearFilters());

        // Admin and user actions
        const postPropertyBtn = document.getElementById('postPropertyBtn');
        const adminDashboardBtn = document.getElementById('adminDashboardBtn');
        
        if (postPropertyBtn) postPropertyBtn.addEventListener('click', () => this.navigateToPage('postProperty'));
        if (adminDashboardBtn) adminDashboardBtn.addEventListener('click', () => this.navigateToPage('admin'));

        // Admin tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.target.getAttribute('data-tab');
                if (tab) {
                    this.switchAdminTab(tab);
                }
            });
        });

        // Close modals on outside click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideModal(modal.id);
                }
            });
        });
    }

    populateDropdowns() {
        // Cities
        const citySelects = ['searchCity', 'filterCity'];
        citySelects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                // Clear existing options except first
                while (select.children.length > 1) {
                    select.removeChild(select.lastChild);
                }
                
                this.data.cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    select.appendChild(option);
                });
            }
        });

        // Property types
        const typeSelects = ['searchType', 'filterType', 'propertyType'];
        typeSelects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                // Clear existing options except first
                while (select.children.length > 1) {
                    select.removeChild(select.lastChild);
                }
                
                this.data.propertyTypes.forEach(type => {
                    const option = document.createElement('option');
                    option.value = type;
                    option.textContent = type;
                    select.appendChild(option);
                });
            }
        });

        // Categories
        const categorySelects = ['filterCategory', 'propertyCategory'];
        categorySelects.forEach(selectId => {
            const select = document.getElementById(selectId);
            if (select) {
                // Clear existing options except first
                while (select.children.length > 1) {
                    select.removeChild(select.lastChild);
                }
                
                this.data.categories.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category;
                    option.textContent = category;
                    select.appendChild(option);
                });
            }
        });
    }

    navigateToPage(page) {
        console.log('Navigating to page:', page);
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });
        
        // Show target page
        const targetPage = document.getElementById(page + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
            console.log('Page activated:', page);
        } else {
            console.error('Page not found:', page + 'Page');
        }

        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });

        this.currentPage = page;

        // Load page-specific content
        switch(page) {
            case 'properties':
                this.loadAllProperties();
                break;
            case 'admin':
                if (this.currentUser && this.currentUser.role === 'admin') {
                    this.loadAdminDashboard();
                } else {
                    this.navigateToPage('home');
                    this.showToast('Access denied. Admin privileges required.', 'error');
                }
                break;
            case 'postProperty':
                if (!this.currentUser) {
                    this.navigateToPage('home');
                    this.showToast('Please login to post properties.', 'error');
                }
                break;
        }
    }

    showModal(modalId) {
        console.log('Showing modal:', modalId);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            console.log('Modal shown');
        } else {
            console.error('Modal not found:', modalId);
        }
    }

    hideModal(modalId) {
        console.log('Hiding modal:', modalId);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    handleLogin(e) {
        e.preventDefault();
        console.log('Handling login...');
        
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
        
        if (!emailInput || !passwordInput) {
            console.error('Login form inputs not found');
            return;
        }
        
        const email = emailInput.value;
        const password = passwordInput.value;

        console.log('Login attempt:', email);

        const user = this.data.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            this.updateAuthUI();
            this.hideModal('loginModal');
            this.showToast(`Welcome back, ${user.name}!`);
            document.getElementById('loginForm').reset();
            console.log('Login successful:', user.name);
        } else {
            this.showToast('Invalid email or password.', 'error');
            console.log('Login failed');
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const phone = document.getElementById('registerPhone').value;
        const password = document.getElementById('registerPassword').value;

        // Check if user already exists
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
        this.showToast(`Welcome to RVG Properties, ${name}!`);
        document.getElementById('registerForm').reset();
    }

    logout() {
        this.currentUser = null;
        this.updateAuthUI();
        this.navigateToPage('home');
        this.showToast('Logged out successfully.');
    }

    updateAuthUI() {
        const authButtons = document.getElementById('authButtons');
        const userMenu = document.getElementById('userMenu');
        const adminMenu = document.getElementById('adminMenu');
        
        if (this.currentUser) {
            if (authButtons) authButtons.classList.add('hidden');
            if (userMenu) userMenu.classList.remove('hidden');
            
            const userName = document.getElementById('userName');
            if (userName) userName.textContent = this.currentUser.name;
            
            if (this.currentUser.role === 'admin') {
                if (adminMenu) adminMenu.classList.remove('hidden');
            } else {
                if (adminMenu) adminMenu.classList.add('hidden');
            }
        } else {
            if (authButtons) authButtons.classList.remove('hidden');
            if (userMenu) userMenu.classList.add('hidden');
            if (adminMenu) adminMenu.classList.add('hidden');
        }
    }

    checkAuthState() {
        // In a real app, you'd check localStorage or cookies here
        this.updateAuthUI();
    }

    loadFeaturedProperties() {
        const container = document.getElementById('featuredPropertiesGrid');
        if (!container) return;
        
        const featuredProperties = this.data.properties.filter(p => p.featured && p.approvalStatus === 'approved');
        
        container.innerHTML = '';
        featuredProperties.forEach(property => {
            container.appendChild(this.createPropertyCard(property));
        });
    }

    loadAllProperties() {
        const container = document.getElementById('allPropertiesGrid');
        if (!container) return;
        
        const approvedProperties = this.data.properties.filter(p => p.approvalStatus === 'approved');
        
        container.innerHTML = '';
        if (approvedProperties.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No properties found</h3><p>Try adjusting your search criteria.</p></div>';
            return;
        }
        
        approvedProperties.forEach(property => {
            container.appendChild(this.createPropertyCard(property));
        });
    }

    createPropertyCard(property) {
        const card = document.createElement('div');
        card.className = 'property-card';
        
        // Add click handler directly to the card
        card.addEventListener('click', () => {
            console.log('Property card clicked:', property.title);
            this.showPropertyDetails(property);
        });
        
        const imageUrl = property.images && property.images.length > 0 ? property.images[0] : 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop';
        
        card.innerHTML = `
            <div class="property-image" style="background-image: url('${imageUrl}')">
                <div class="property-status">${property.forType}</div>
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
        console.log('Showing property details:', property.title);
        
        const modal = document.getElementById('propertyModal');
        const title = document.getElementById('propertyModalTitle');
        const content = document.getElementById('propertyModalContent');
        
        if (!modal || !title || !content) {
            console.error('Property modal elements not found');
            return;
        }
        
        title.textContent = property.title;
        
        const imageGallery = property.images && property.images.length > 0 
            ? property.images.map(img => `<img src="${img}" alt="Property image">`).join('')
            : '<img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop" alt="Property image">';
        
        content.innerHTML = `
            <div class="property-gallery">
                ${imageGallery}
            </div>
            <div class="property-info">
                <div class="property-price">₹${this.formatPrice(property.price)}</div>
                <div class="property-location">📍 ${property.location}</div>
                
                <div class="property-details">
                    <div><strong>Type:</strong> ${property.type}</div>
                    <div><strong>Category:</strong> ${property.category}</div>
                    <div><strong>Area:</strong> ${property.area} sq ft</div>
                    <div><strong>Furnishing:</strong> ${property.furnishing}</div>
                    <div><strong>Parking:</strong> ${property.parking}</div>
                    <div><strong>Age:</strong> ${property.age}</div>
                    <div><strong>Status:</strong> ${property.status}</div>
                </div>
                
                <div class="property-description">
                    <h4>Description</h4>
                    <p>${property.description}</p>
                </div>
                
                <div class="property-amenities">
                    <h4>Amenities</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                        ${property.amenities.map(amenity => 
                            `<span class="amenity-tag">${amenity}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
            
            <div class="property-contact">
                <h4>Contact Agent</h4>
                <div><strong>Agent:</strong> ${property.agent}</div>
                <div><strong>Phone:</strong> ${property.phone}</div>
                <div><strong>Email:</strong> ${property.email}</div>
            </div>
            
            <div class="inquiry-form">
                <h4>Send Inquiry</h4>
                <form id="inquiryForm">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Your Email" required>
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
        
        // Add inquiry form handler
        const inquiryForm = content.querySelector('#inquiryForm');
        if (inquiryForm) {
            inquiryForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showToast('Inquiry sent successfully! The agent will contact you soon.');
                this.hideModal('propertyModal');
            });
        }
        
        this.showModal('propertyModal');
    }

    loadTestimonials() {
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
            `;
            container.appendChild(card);
        });
    }

    handleSearch() {
        const city = document.getElementById('searchCity').value;
        const type = document.getElementById('searchType').value;
        const forType = document.getElementById('searchFor').value;
        
        console.log('Search triggered:', { city, type, forType });
        
        // Navigate to properties page with filters
        this.navigateToPage('properties');
        
        // Apply search filters
        setTimeout(() => {
            if (city) {
                const filterCity = document.getElementById('filterCity');
                if (filterCity) filterCity.value = city;
            }
            if (type) {
                const filterType = document.getElementById('filterType');
                if (filterType) filterType.value = type;
            }
            if (forType) {
                const filterFor = document.getElementById('filterFor');
                if (filterFor) filterFor.value = forType;
            }
            
            this.applyFilters();
        }, 100);
    }

    applyFilters() {
        const cityElement = document.getElementById('filterCity');
        const typeElement = document.getElementById('filterType');
        const categoryElement = document.getElementById('filterCategory');
        const forTypeElement = document.getElementById('filterFor');
        
        const city = cityElement ? cityElement.value : '';
        const type = typeElement ? typeElement.value : '';
        const category = categoryElement ? categoryElement.value : '';
        const forType = forTypeElement ? forTypeElement.value : '';
        
        console.log('Applying filters:', { city, type, category, forType });
        
        let filteredProperties = this.data.properties.filter(p => p.approvalStatus === 'approved');
        
        if (city) {
            filteredProperties = filteredProperties.filter(p => 
                p.location.toLowerCase().includes(city.toLowerCase())
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
        
        const container = document.getElementById('allPropertiesGrid');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (filteredProperties.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No properties found</h3><p>Try adjusting your search criteria.</p></div>';
            return;
        }
        
        filteredProperties.forEach(property => {
            container.appendChild(this.createPropertyCard(property));
        });
        
        console.log('Filtered properties count:', filteredProperties.length);
    }

    clearFilters() {
        const elements = ['filterCity', 'filterType', 'filterCategory', 'filterFor'];
        elements.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.value = '';
        });
        this.loadAllProperties();
    }

    handleContact(e) {
        e.preventDefault();
        console.log('Contact form submitted');
        this.showToast('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset();
    }

    handlePropertySubmit(e) {
        e.preventDefault();
        
        if (!this.currentUser) {
            this.showToast('Please login to post properties.', 'error');
            return;
        }
        
        const newProperty = {
            id: Date.now(),
            title: document.getElementById('propertyTitle').value,
            type: document.getElementById('propertyType').value,
            category: document.getElementById('propertyCategory').value,
            forType: document.getElementById('propertyFor').value,
            price: parseInt(document.getElementById('propertyPrice').value),
            area: parseInt(document.getElementById('propertyArea').value),
            location: document.getElementById('propertyLocation').value,
            furnishing: document.getElementById('propertyFurnishing').value,
            parking: document.getElementById('propertyParking').value,
            description: document.getElementById('propertyDescription').value,
            phone: document.getElementById('propertyPhone').value,
            postedBy: this.currentUser.id,
            postedDate: new Date().toISOString().split('T')[0],
            approvalStatus: 'pending',
            agent: this.currentUser.name,
            email: this.currentUser.email,
            images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'],
            amenities: ['Security', 'Power Backup'],
            age: 'New',
            status: 'Ready to move',
            featured: false
        };
        
        this.data.properties.push(newProperty);
        
        // Update user's property count
        const user = this.data.users.find(u => u.id === this.currentUser.id);
        if (user) {
            user.propertiesPosted = (user.propertiesPosted || 0) + 1;
        }
        
        this.showToast('Property submitted successfully! It will be reviewed by our admin team.');
        document.getElementById('propertyForm').reset();
        this.navigateToPage('properties');
    }

    loadAdminDashboard() {
        this.updateAdminStats();
        this.loadAdminProperties();
        this.loadAdminUsers();
        this.loadAdminInquiries();
    }

    updateAdminStats() {
        const totalProps = document.getElementById('totalProperties');
        const pendingProps = document.getElementById('pendingProperties');
        const totalUsersEl = document.getElementById('totalUsers');
        const totalInquiriesEl = document.getElementById('totalInquiries');
        
        if (totalProps) totalProps.textContent = this.data.properties.length;
        if (pendingProps) pendingProps.textContent = this.data.properties.filter(p => p.approvalStatus === 'pending').length;
        if (totalUsersEl) totalUsersEl.textContent = this.data.users.filter(u => u.role === 'user').length;
        if (totalInquiriesEl) totalInquiriesEl.textContent = this.data.inquiries.length;
    }

    loadAdminProperties() {
        const container = document.getElementById('adminPropertiesGrid');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.data.properties.forEach(property => {
            const card = document.createElement('div');
            card.className = 'admin-property-card';
            
            const statusClass = property.approvalStatus === 'pending' ? 'status-pending' : 
                               property.approvalStatus === 'approved' ? 'status-approved' : 'status-rejected';
            
            card.innerHTML = `
                <div class="admin-property-header">
                    <div>
                        <h4>${property.title}</h4>
                        <div>₹${this.formatPrice(property.price)} • ${property.location}</div>
                        <div>Posted by: ${property.agent} on ${property.postedDate}</div>
                    </div>
                    <div class="admin-property-actions">
                        <span class="${statusClass}">${property.approvalStatus}</span>
                        ${property.approvalStatus === 'pending' ? `
                            <button class="btn btn--success btn--sm" onclick="app.approveProperty(${property.id})">Approve</button>
                            <button class="btn btn--warning btn--sm" onclick="app.rejectProperty(${property.id})">Reject</button>
                        ` : ''}
                        <button class="btn btn--outline btn--sm">View</button>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
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
                                <td>${inquiry.message}</td>
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
        console.log('Switching to admin tab:', tabName);
        
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked tab
        const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
        const tabPane = document.getElementById(tabName + 'Tab');
        
        if (tabBtn) tabBtn.classList.add('active');
        if (tabPane) tabPane.classList.add('active');
    }

    approveProperty(propertyId) {
        const property = this.data.properties.find(p => p.id === propertyId);
        if (property) {
            property.approvalStatus = 'approved';
            property.approvedDate = new Date().toISOString().split('T')[0];
            this.loadAdminProperties();
            this.updateAdminStats();
            this.showToast('Property approved successfully!');
        }
    }

    rejectProperty(propertyId) {
        const property = this.data.properties.find(p => p.id === propertyId);
        if (property) {
            property.approvalStatus = 'rejected';
            this.loadAdminProperties();
            this.updateAdminStats();
            this.showToast('Property rejected.', 'error');
        }
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

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        if (!toast || !toastMessage) return;
        
        toastMessage.textContent = message;
        toast.className = `toast ${type === 'error' ? 'error' : ''}`;
        toast.classList.remove('hidden');
        
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
        
        console.log('Toast shown:', message, type);
    }
}

// Initialize the application when DOM is loaded
let app;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new RVGProperties();
        window.app = app; // Make app globally available
    });
} else {
    app = new RVGProperties();
    window.app = app; // Make app globally available
}
