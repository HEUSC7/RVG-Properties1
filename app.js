// RVG Properties - Fixed Authentication & Property Interaction

// Application Data
const appData = {
  "adminCredentials": {
    "email": "rvgproperties@gmail.com",
    "password": "RVG@admin",
    "role": "admin",
    "name": "RVG Admin"
  },
  "regularUsers": [
    {
      "id": 1,
      "name": "John User",
      "email": "user@example.com",
      "password": "user123",
      "role": "user",
      "phone": "+91 98765 43210",
      "dateRegistered": "2025-08-15",
      "status": "active"
    }
  ],
  "properties": [
    {
      "id": 1,
      "title": "Luxury 3BHK Apartment in Bandra West",
      "type": "3BHK",
      "price": "₹2.5 Cr",
      "priceNumber": 25000000,
      "location": "Bandra West, Mumbai",
      "city": "Mumbai",
      "area": "1200 sq ft",
      "furnishing": "Semi-Furnished",
      "forType": "Buy",
      "category": "Apartment",
      "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "amenities": ["Swimming Pool", "Gym", "Security", "Power Backup", "Elevator"],
      "featured": true,
      "status": "active",
      "views": 245,
      "inquiries": 12,
      "dateAdded": "2025-08-01",
      "description": "Spacious 3BHK apartment with modern amenities in prime Bandra location. Close to schools, shopping centers, and excellent connectivity."
    },
    {
      "id": 2,
      "title": "Modern 2BHK Flat for Rent in Koramangala",
      "type": "2BHK",
      "price": "₹35,000",
      "priceNumber": 35000,
      "location": "Koramangala, Bangalore",
      "city": "Bangalore",
      "area": "950 sq ft",
      "furnishing": "Fully Furnished",
      "forType": "Rent",
      "category": "Apartment",
      "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "amenities": ["Gym", "Security", "Power Backup", "Internet"],
      "featured": true,
      "status": "active",
      "views": 189,
      "inquiries": 8,
      "dateAdded": "2025-08-05",
      "description": "Fully furnished 2BHK flat in the heart of Koramangala. Perfect for working professionals with all modern amenities."
    },
    {
      "id": 3,
      "title": "Cozy 1BHK Studio in Powai",
      "type": "1BHK",
      "price": "₹18,000",
      "priceNumber": 18000,
      "location": "Powai, Mumbai",
      "city": "Mumbai",
      "area": "450 sq ft",
      "furnishing": "Semi-Furnished",
      "forType": "Rent",
      "category": "Studio",
      "image": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "amenities": ["Security", "Elevator", "Power Backup"],
      "featured": false,
      "status": "active",
      "views": 67,
      "inquiries": 3,
      "dateAdded": "2025-08-10",
      "description": "Affordable 1BHK studio apartment perfect for students and young professionals. Close to IT parks and colleges."
    },
    {
      "id": 4,
      "title": "Spacious 4BHK Villa in Gurgaon",
      "type": "4BHK+",
      "price": "₹3.2 Cr",
      "priceNumber": 32000000,
      "location": "Sector 49, Gurgaon",
      "city": "Gurgaon",
      "area": "2500 sq ft",
      "furnishing": "Unfurnished",
      "forType": "Buy",
      "category": "Villa",
      "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "amenities": ["Garden", "Parking", "Security", "Club House"],
      "featured": true,
      "status": "active",
      "views": 156,
      "inquiries": 9,
      "dateAdded": "2025-08-12",
      "description": "Spacious villa with modern architecture and premium amenities. Perfect for families looking for luxury living."
    },
    {
      "id": 5,
      "title": "Affordable 2BHK House in Greater Noida",
      "type": "2BHK",
      "price": "₹1.5 Cr",
      "priceNumber": 15000000,
      "location": "Greater Noida West",
      "city": "Delhi",
      "area": "800 sq ft",
      "furnishing": "Unfurnished",
      "forType": "Buy",
      "category": "House",
      "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "amenities": ["Park", "Security", "Power Backup"],
      "featured": false,
      "status": "active",
      "views": 89,
      "inquiries": 5,
      "dateAdded": "2025-08-15",
      "description": "Well-designed 2BHK house in developing area with good connectivity and future growth potential."
    },
    {
      "id": 6,
      "title": "Premium Penthouse in Pune",
      "type": "4BHK+",
      "price": "₹4.8 Cr",
      "priceNumber": 48000000,
      "location": "Koregaon Park, Pune",
      "city": "Pune",
      "area": "3000 sq ft",
      "furnishing": "Fully Furnished",
      "forType": "Buy",
      "category": "Penthouse",
      "image": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "amenities": ["Swimming Pool", "Gym", "Security", "Power Backup", "Elevator", "Terrace Garden"],
      "featured": true,
      "status": "active",
      "views": 312,
      "inquiries": 18,
      "dateAdded": "2025-08-18",
      "description": "Luxury penthouse with terrace garden and premium amenities. Perfect for those seeking the finest living experience."
    }
  ],
  "users": [
    {
      "id": 1,
      "name": "Rahul Sharma",
      "email": "rahul@email.com",
      "phone": "+91 98765 43210",
      "role": "user",
      "dateRegistered": "2025-08-15",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Priya Singh",
      "email": "priya@email.com",
      "phone": "+91 87654 32109",
      "role": "user", 
      "dateRegistered": "2025-08-18",
      "status": "active"
    }
  ],
  "stats": [
    {"icon": "🏠", "number": "50,000+", "label": "Properties Listed"},
    {"icon": "🌆", "number": "100+", "label": "Cities Covered"},
    {"icon": "👥", "number": "1 Lakh+", "label": "Happy Customers"},
    {"icon": "✅", "number": "1,000+", "label": "Verified Agents"}
  ],
  "categories": [
    {"icon": "🏢", "name": "Apartments", "description": "Modern living spaces in prime locations", "count": "25,000+ properties"},
    {"icon": "🏡", "name": "Villas", "description": "Luxury independent houses with privacy", "count": "8,000+ properties"},
    {"icon": "🏞️", "name": "Plots", "description": "Residential and commercial land", "count": "12,000+ properties"},
    {"icon": "🏢", "name": "Commercial", "description": "Office spaces and retail properties", "count": "5,000+ properties"}
  ],
  "testimonials": [
    {
      "id": 1,
      "text": "RVG Properties helped me find the perfect home in Mumbai. Their service was exceptional and the process was smooth.",
      "name": "Rahul Sharma",
      "location": "Mumbai",
      "rating": 5,
      "status": "active",
      "date": "2025-08-01"
    },
    {
      "id": 2,
      "text": "Great platform with genuine listings. Found my dream apartment through RVG Properties within a week!",
      "name": "Priya Menon",
      "location": "Bangalore",
      "rating": 5,
      "status": "active",
      "date": "2025-08-05"
    },
    {
      "id": 3,
      "text": "Professional service and transparent pricing. Highly recommend RVG Properties for property buying and selling.",
      "name": "Amit Patel",
      "location": "Delhi",
      "rating": 4,
      "status": "active",
      "date": "2025-08-10"
    }
  ],
  "activities": [
    {
      "id": 1,
      "icon": "🏠",
      "title": "New property added in Mumbai",
      "time": "2 hours ago"
    },
    {
      "id": 2,
      "icon": "👥",
      "title": "New user registered",
      "time": "4 hours ago"
    }
  ]
};

// Application State
let currentUser = null; // CRITICAL: Start with null (not logged in)
let isAdminMode = false;
let currentAdminSection = 'overview';
let editingProperty = null;
let editingTestimonial = null;
let charts = {};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Initializing RVG Properties app...');
  initializeApp();
});

// Initialize Application
function initializeApp() {
  try {
    console.log('Setting up application...');
    renderPublicContent();
    updateAuthUI(); // CRITICAL: This ensures correct initial state
    setupAllEventListeners();
    console.log('✅ App initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing app:', error);
  }
}

// CRITICAL FIX 1: Authentication UI State Management
function updateAuthUI() {
  console.log('🔄 Updating auth UI, currentUser:', currentUser);
  
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const userMenu = document.getElementById('userMenu');
  const userName = document.getElementById('userName');
  const dashboardBtn = document.getElementById('dashboardBtn');
  const profileBtn = document.getElementById('profileBtn');
  const adminUserName = document.getElementById('adminUserName');
  
  if (currentUser === null) {
    // GUEST STATE: Show only Login/Register
    console.log('👻 Guest state: showing login/register only');
    if (loginBtn) {
      loginBtn.style.display = 'inline-flex';
      loginBtn.classList.remove('hidden');
    }
    if (registerBtn) {
      registerBtn.style.display = 'inline-flex';
      registerBtn.classList.remove('hidden');
    }
    if (userMenu) {
      userMenu.classList.add('hidden');
      userMenu.style.display = 'none';
    }
    if (dashboardBtn) {
      dashboardBtn.style.display = 'none';
      dashboardBtn.classList.add('hidden');
    }
    if (profileBtn) {
      profileBtn.style.display = 'none';
      profileBtn.classList.add('hidden');
    }
  } else {
    // LOGGED IN STATE: Hide login/register, show user menu
    console.log('👤 Logged in state for:', currentUser.role);
    if (loginBtn) {
      loginBtn.style.display = 'none';
      loginBtn.classList.add('hidden');
    }
    if (registerBtn) {
      registerBtn.style.display = 'none';
      registerBtn.classList.add('hidden');
    }
    if (userMenu) {
      userMenu.classList.remove('hidden');
      userMenu.style.display = 'flex';
    }
    if (userName) userName.textContent = currentUser.name;
    if (adminUserName) adminUserName.textContent = currentUser.name;
    
    // Role-based button visibility
    if (currentUser.role === 'admin') {
      // ADMIN: Show Dashboard, Hide Profile
      console.log('👑 Admin: showing dashboard button');
      if (dashboardBtn) {
        dashboardBtn.style.display = 'inline-flex';
        dashboardBtn.classList.remove('hidden');
        dashboardBtn.textContent = isAdminMode ? 'Back to Site' : 'Dashboard';
      }
      if (profileBtn) {
        profileBtn.style.display = 'none';
        profileBtn.classList.add('hidden');
      }
    } else {
      // REGULAR USER: Show Profile, Hide Dashboard
      console.log('👤 User: showing profile button');
      if (profileBtn) {
        profileBtn.style.display = 'inline-flex';
        profileBtn.classList.remove('hidden');
      }
      if (dashboardBtn) {
        dashboardBtn.style.display = 'none';
        dashboardBtn.classList.add('hidden');
      }
    }
  }
}

// CRITICAL BUG FIX: Setup all event listeners with better error handling
function setupAllEventListeners() {
  console.log('🔧 Setting up event listeners...');
  
  // FIXED: Add timeout to ensure DOM elements are ready
  setTimeout(() => {
    setupAuthEventListeners();
    setupModalCloseButtons();
    setupFormEventListeners();
    setupAdminEventListeners();
    setupFilterButtons();
    setupModalBackdrops();
    console.log('✅ Event listeners setup complete');
  }, 100);
}

// CRITICAL BUG FIX: Separate auth event listeners with better targeting
function setupAuthEventListeners() {
  console.log('🔐 Setting up auth event listeners...');
  
  // Login button with multiple targeting approaches
  const loginBtn = document.getElementById('loginBtn');
  console.log('Found login button:', loginBtn);
  if (loginBtn) {
    loginBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('✅ Login button clicked');
      openModal('loginModal');
      return false;
    };
    
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('✅ Login button event listener triggered');
      openModal('loginModal');
    }, true);
  } else {
    console.warn('❌ Login button not found!');
  }
  
  // Register button with multiple targeting approaches
  const registerBtn = document.getElementById('registerBtn');
  console.log('Found register button:', registerBtn);
  if (registerBtn) {
    registerBtn.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('✅ Register button clicked');
      openModal('registerModal');
      return false;
    };
    
    registerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('✅ Register button event listener triggered');
      openModal('registerModal');
    }, true);
  } else {
    console.warn('❌ Register button not found!');
  }
  
  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.onclick = function(e) {
      e.preventDefault();
      console.log('Logout button clicked');
      logout();
      return false;
    };
  }
  
  // Dashboard button
  const dashboardBtn = document.getElementById('dashboardBtn');
  if (dashboardBtn) {
    dashboardBtn.onclick = function(e) {
      e.preventDefault();
      console.log('Dashboard button clicked');
      toggleDashboard();
      return false;
    };
  }
  
  // Profile button
  const profileBtn = document.getElementById('profileBtn');
  if (profileBtn) {
    profileBtn.onclick = function(e) {
      e.preventDefault();
      console.log('Profile button clicked');
      showNotification('Profile feature coming soon!', 'info');
      return false;
    };
  }
  
  // Search button
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.onclick = function(e) {
      e.preventDefault();
      console.log('Search button clicked');
      handleSearch();
      return false;
    };
  }
}

// CRITICAL BUG FIX: Enhanced modal close button setup
function setupModalCloseButtons() {
  console.log('🔴 Setting up modal close buttons...');
  
  const closeButtons = [
    { id: 'closeLoginModal', modal: 'loginModal' },
    { id: 'closeRegisterModal', modal: 'registerModal' },
    { id: 'closePropertyModal', modal: 'propertyModal' },
    { id: 'closeTestimonialModal', modal: 'testimonialModal' },
    { id: 'closePropertyDetailModal', modal: 'propertyDetailModal' }
  ];
  
  closeButtons.forEach(({ id, modal }) => {
    const button = document.getElementById(id);
    console.log(`Found close button ${id}:`, button);
    if (button) {
      // Use onclick for immediate response
      button.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(`✅ Close button clicked for ${modal}`);
        closeModal(modal);
        return false;
      };
      
      // Also add event listener as backup
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(`✅ Close button event listener for ${modal}`);
        closeModal(modal);
      }, true);
    } else {
      console.warn(`❌ Close button ${id} not found!`);
    }
  });
  
  // Notification close
  const closeNotification = document.getElementById('closeNotification');
  if (closeNotification) {
    closeNotification.onclick = function(e) {
      e.preventDefault();
      hideNotification();
      return false;
    };
  }
}

// Setup form event listeners
function setupFormEventListeners() {
  console.log('📝 Setting up form event listeners...');
  
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.onsubmit = function(e) {
      e.preventDefault();
      console.log('Login form submitted');
      handleLogin(e);
      return false;
    };
  }
  
  // Register form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.onsubmit = function(e) {
      e.preventDefault();
      console.log('Register form submitted');
      handleRegister(e);
      return false;
    };
  }
  
  // Property form
  const propertyForm = document.getElementById('propertyForm');
  if (propertyForm) {
    propertyForm.onsubmit = function(e) {
      e.preventDefault();
      console.log('Property form submitted');
      handlePropertySubmit(e);
      return false;
    };
  }
  
  // Testimonial form
  const testimonialForm = document.getElementById('testimonialForm');
  if (testimonialForm) {
    testimonialForm.onsubmit = function(e) {
      e.preventDefault();
      console.log('Testimonial form submitted');
      handleTestimonialSubmit(e);
      return false;
    };
  }
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      console.log('Contact form submitted');
      handleContact(e);
      return false;
    };
  }
}

// Setup admin event listeners
function setupAdminEventListeners() {
  // Back to site button
  const backToSiteBtn = document.getElementById('backToSiteBtn');
  if (backToSiteBtn) {
    backToSiteBtn.onclick = function(e) {
      e.preventDefault();
      console.log('Back to site clicked');
      showPublicSite();
      return false;
    };
  }
  
  // Admin logout button
  const adminLogoutBtn = document.getElementById('adminLogoutBtn');
  if (adminLogoutBtn) {
    adminLogoutBtn.onclick = function(e) {
      e.preventDefault();
      console.log('Admin logout clicked');
      logout();
      return false;
    };
  }
  
  // Add property button
  const addPropertyBtn = document.getElementById('addPropertyBtn');
  if (addPropertyBtn) {
    addPropertyBtn.onclick = function(e) {
      e.preventDefault();
      console.log('Add property clicked');
      openPropertyModal();
      return false;
    };
  }
  
  // Add testimonial button
  const addTestimonialBtn = document.getElementById('addTestimonialBtn');
  if (addTestimonialBtn) {
    addTestimonialBtn.onclick = function(e) {
      e.preventDefault();
      console.log('Add testimonial clicked');
      openTestimonialModal();
      return false;
    };
  }
  
  // Cancel buttons
  const cancelPropertyBtn = document.getElementById('cancelPropertyBtn');
  if (cancelPropertyBtn) {
    cancelPropertyBtn.onclick = function(e) {
      e.preventDefault();
      closeModal('propertyModal');
      return false;
    };
  }
  
  const cancelTestimonialBtn = document.getElementById('cancelTestimonialBtn');
  if (cancelTestimonialBtn) {
    cancelTestimonialBtn.onclick = function(e) {
      e.preventDefault();
      closeModal('testimonialModal');
      return false;
    };
  }
  
  // Admin navigation links
  document.querySelectorAll('.admin-nav-link').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      const section = this.dataset.section;
      console.log('Admin nav clicked:', section);
      showAdminSection(section);
      return false;
    };
  });
}

// Setup filter buttons
function setupFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = function(e) {
      e.preventDefault();
      const filter = this.dataset.filter;
      console.log('Filter clicked:', filter);
      
      // Update active state
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter properties
      filterProperties(filter);
      return false;
    };
  });
}

// Setup modal backdrop clicks
function setupModalBackdrops() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        console.log('Modal backdrop clicked');
        modal.classList.add('hidden');
      }
    });
  });
}

// Authentication Functions
function handleLogin(e) {
  e.preventDefault();
  console.log('🔐 Processing login...');
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  console.log('Login attempt:', { email });
  
  // Validation
  if (!email || !password) {
    showNotification('Please enter both email and password', 'error');
    return;
  }
  
  // Check admin credentials
  if (email === appData.adminCredentials.email && password === appData.adminCredentials.password) {
    console.log('✅ Admin login successful');
    currentUser = {
      email: email,
      role: 'admin',
      name: appData.adminCredentials.name
    };
    
    showNotification('Welcome Admin! Redirecting to dashboard...', 'success');
    
    setTimeout(() => {
      showAdminDashboard();
      updateAuthUI(); // CRITICAL: Update UI after login
      closeModal('loginModal');
      document.getElementById('loginForm').reset();
    }, 1000);
    return;
  }
  
  // Check regular user credentials
  const regularUser = appData.regularUsers.find(u => u.email === email && u.password === password);
  if (regularUser) {
    console.log('✅ User login successful');
    currentUser = regularUser;
    isAdminMode = false;
    
    showNotification(`Welcome back, ${regularUser.name}!`, 'success');
    
    setTimeout(() => {
      showPublicSite();
      updateAuthUI(); // CRITICAL: Update UI after login
      closeModal('loginModal');
      document.getElementById('loginForm').reset();
    }, 1000);
    return;
  }
  
  // Check existing users (for demo)
  const existingUser = appData.users.find(u => u.email === email);
  if (existingUser) {
    console.log('✅ Demo user login');
    currentUser = { ...existingUser, role: 'user' }; // Ensure role is set
    isAdminMode = false;
    
    showNotification(`Welcome back, ${existingUser.name}!`, 'success');
    
    setTimeout(() => {
      showPublicSite();
      updateAuthUI(); // CRITICAL: Update UI after login
      closeModal('loginModal');
      document.getElementById('loginForm').reset();
    }, 1000);
    return;
  }
  
  console.log('❌ Invalid credentials');
  showNotification('Invalid credentials. Please try again.', 'error');
}

function handleRegister(e) {
  e.preventDefault();
  console.log('📝 Processing registration...');
  
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const phone = document.getElementById('registerPhone').value;
  const password = document.getElementById('registerPassword').value;
  
  // Validation
  if (!name || !email || !phone || !password) {
    showNotification('Please fill in all fields', 'error');
    return;
  }
  
  if (password.length < 6) {
    showNotification('Password must be at least 6 characters', 'error');
    return;
  }
  
  // Check if user already exists
  const existsInRegular = appData.regularUsers.find(u => u.email === email);
  const existsInUsers = appData.users.find(u => u.email === email);
  
  if (existsInRegular || existsInUsers) {
    showNotification('User with this email already exists!', 'error');
    return;
  }
  
  const newUser = {
    id: Math.max(...appData.users.map(u => u.id), ...appData.regularUsers.map(u => u.id)) + 1,
    name,
    email,
    phone,
    password,
    role: 'user',
    dateRegistered: new Date().toISOString().split('T')[0],
    status: 'active'
  };
  
  appData.regularUsers.push(newUser);
  appData.users.push({...newUser, password: undefined});
  
  currentUser = newUser;
  isAdminMode = false;
  
  showNotification('Registration successful! Welcome to RVG Properties!', 'success');
  
  setTimeout(() => {
    updateAuthUI(); // CRITICAL: Update UI after registration
    closeModal('registerModal');
    document.getElementById('registerForm').reset();
    
    if (isAdminMode) {
      renderUsersTable();
      renderAdminStats();
    }
  }, 1500);
}

function logout() {
  console.log('👋 User logging out');
  currentUser = null; // CRITICAL: Reset to null
  isAdminMode = false;
  showPublicSite();
  updateAuthUI(); // CRITICAL: Update UI after logout
  showNotification('Logged out successfully', 'info');
}

// Dashboard Functions
function toggleDashboard() {
  if (currentUser?.role === 'admin') {
    if (isAdminMode) {
      showPublicSite();
    } else {
      showAdminDashboard();
    }
  }
}

function showPublicSite() {
  console.log('🌐 Showing public site');
  const publicContent = document.getElementById('publicContent');
  const adminDashboard = document.getElementById('adminDashboard');
  
  if (publicContent) publicContent.classList.remove('hidden');
  if (adminDashboard) adminDashboard.classList.add('hidden');
  
  isAdminMode = false;
  updateAuthUI();
}

function showAdminDashboard() {
  console.log('👨‍💼 Showing admin dashboard');
  const publicContent = document.getElementById('publicContent');
  const adminDashboard = document.getElementById('adminDashboard');
  
  if (publicContent) publicContent.classList.add('hidden');
  if (adminDashboard) adminDashboard.classList.remove('hidden');
  
  isAdminMode = true;
  updateAuthUI();
  renderAdminContent();
  showAdminSection('overview');
}

function showAdminSection(section) {
  console.log(`📊 Showing admin section: ${section}`);
  
  // Update navigation
  document.querySelectorAll('.admin-nav-link').forEach(link => {
    link.classList.remove('active');
  });
  const activeLink = document.querySelector(`[data-section="${section}"]`);
  if (activeLink) activeLink.classList.add('active');
  
  // Hide all sections
  document.querySelectorAll('.admin-section').forEach(sec => {
    sec.classList.add('hidden');
  });
  
  // Show selected section
  const sectionElement = document.getElementById(`admin${section.charAt(0).toUpperCase() + section.slice(1)}`);
  if (sectionElement) {
    sectionElement.classList.remove('hidden');
  }
  
  // Update title
  const titles = {
    overview: 'Dashboard Overview',
    properties: 'Property Management',
    users: 'User Management',
    analytics: 'Analytics Dashboard',
    testimonials: 'Testimonials Management',
    settings: 'Settings'
  };
  const adminSectionTitle = document.getElementById('adminSectionTitle');
  if (adminSectionTitle) {
    adminSectionTitle.textContent = titles[section] || 'Dashboard';
  }
  
  currentAdminSection = section;
  
  // Load section specific content
  if (section === 'analytics') {
    setTimeout(renderAnalyticsCharts, 100);
  } else if (section === 'overview') {
    setTimeout(renderOverviewChart, 100);
  }
}

// Render Functions
function renderPublicContent() {
  console.log('🎨 Rendering public content');
  renderStats();
  renderProperties();
  renderCategories();
  renderTestimonials();
}

function renderStats() {
  const statsGrid = document.getElementById('statsGrid');
  if (!statsGrid) return;
  
  statsGrid.innerHTML = appData.stats.map(stat => `
    <div class="stat-item">
      <div class="stat-icon">${stat.icon}</div>
      <div class="stat-number">${stat.number}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

// CRITICAL FIX 2: Property Interaction - Clickable cards with modal (FIXED: Preserve properties after modal)
function renderProperties(filter = 'all') {
  const propertiesGrid = document.getElementById('propertiesGrid');
  if (!propertiesGrid) return;
  
  let properties = appData.properties.filter(p => p.status === 'active');
  
  if (filter !== 'all') {
    properties = properties.filter(p => p.forType === filter);
  }
  
  propertiesGrid.innerHTML = properties.map(property => `
    <div class="property-card" data-property-id="${property.id}">
      ${property.featured ? '<span class="featured-badge">Featured</span>' : ''}
      <img src="${property.image}" alt="${property.title}" class="property-image" 
           onerror="this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'">
      <div class="property-content">
        <h3 class="property-title">${property.title}</h3>
        <div class="property-details">
          <div class="property-detail">
            <strong>Type:</strong> ${property.type}
          </div>
          <div class="property-detail">
            <strong>Area:</strong> ${property.area}
          </div>
          <div class="property-detail">
            <strong>Location:</strong> ${property.location}
          </div>
          <div class="property-detail">
            <strong>Furnishing:</strong> ${property.furnishing}
          </div>
        </div>
        <div class="property-price">${property.price} ${property.forType === 'Rent' ? '/month' : ''}</div>
        <div class="property-amenities">
          ${property.amenities.slice(0, 4).map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
          ${property.amenities.length > 4 ? `<span class="amenity-tag">+${property.amenities.length - 4} more</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  
  // CRITICAL: Add click handlers to property cards with better event handling
  document.querySelectorAll('.property-card').forEach(card => {
    card.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      const propertyId = parseInt(this.dataset.propertyId);
      console.log('🏠 Property card clicked:', propertyId);
      openPropertyDetailModal(propertyId);
      return false;
    };
    
    // Also add cursor pointer for better UX
    card.style.cursor = 'pointer';
  });
}

// CRITICAL FIX 2: Property Detail Modal Function
function openPropertyDetailModal(propertyId) {
  console.log('🔍 Opening property detail modal for ID:', propertyId);
  
  const property = appData.properties.find(p => p.id === propertyId);
  if (!property) {
    console.error('Property not found:', propertyId);
    return;
  }
  
  // Increment view count
  property.views = (property.views || 0) + 1;
  console.log(`📈 Property views incremented to: ${property.views}`);
  
  // Update admin stats if in admin mode
  if (isAdminMode) {
    renderAdminStats();
    renderPropertiesTable();
  }
  
  // Populate modal with property data
  const elements = {
    propertyDetailTitle: 'Property Details',
    propertyDetailImage: property.image,
    propertyDetailName: property.title,
    propertyDetailPrice: `${property.price} ${property.forType === 'Rent' ? '/month' : ''}`,
    propertyDetailLocation: property.location,
    propertyDetailType: property.type,
    propertyDetailArea: property.area,
    propertyDetailFurnishing: property.furnishing,
    propertyDetailCategory: property.category,
    propertyDetailDesc: property.description || 'No description available.'
  };
  
  // Set text content for elements
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'propertyDetailImage') {
        element.src = value;
        element.alt = property.title;
        element.onerror = function() {
          this.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop';
        };
      } else {
        element.textContent = value;
      }
    }
  });
  
  // Populate amenities
  const amenitiesContainer = document.getElementById('propertyDetailAmenities');
  if (amenitiesContainer && property.amenities) {
    amenitiesContainer.innerHTML = property.amenities.map(amenity => 
      `<span class="amenity-tag">${amenity}</span>`
    ).join('');
  }
  
  // Open the modal
  openModal('propertyDetailModal');
  
  showNotification(`Viewing ${property.title}`, 'info');
}

// Global functions for property detail modal actions
window.contactForProperty = function() {
  showNotification('Contact form coming soon! Call +91 98765 43210 for now.', 'info');
  closeModal('propertyDetailModal');
};

window.shareProperty = function() {
  if (navigator.share) {
    navigator.share({
      title: 'Check out this property!',
      text: 'Found this great property on RVG Properties',
      url: window.location.href
    });
  } else {
    // Fallback - copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    showNotification('Property link copied to clipboard!', 'success');
  }
};

function renderCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  if (!categoriesGrid) return;
  
  categoriesGrid.innerHTML = appData.categories.map(category => `
    <div class="category-card">
      <div class="category-icon">${category.icon}</div>
      <h3 class="category-name">${category.name}</h3>
      <p class="category-description">${category.description}</p>
      <div class="category-count">${category.count}</div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (!testimonialsGrid) return;
  
  const activeTestimonials = appData.testimonials.filter(t => t.status === 'active');
  
  testimonialsGrid.innerHTML = activeTestimonials.map(testimonial => {
    const stars = '⭐'.repeat(testimonial.rating);
    return `
      <div class="testimonial-card">
        <div class="testimonial-text">"${testimonial.text}"</div>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-location">${testimonial.location}</div>
        <div class="testimonial-rating">${stars}</div>
      </div>
    `;
  }).join('');
}

// Admin Render Functions
function renderAdminContent() {
  console.log('👨‍💼 Rendering admin content');
  renderAdminStats();
  renderPropertiesTable();
  renderUsersTable();
  renderTestimonialsTable();
  renderActivities();
}

function renderAdminStats() {
  const totalProperties = appData.properties.length;
  const activeProperties = appData.properties.filter(p => p.status === 'active').length;
  const totalUsers = appData.users.length + appData.regularUsers.length;
  const totalViews = appData.properties.reduce((sum, p) => sum + (p.views || 0), 0);
  
  const elements = {
    totalPropertiesCount: totalProperties,
    activePropertiesCount: activeProperties,
    totalUsersCount: totalUsers,
    totalViewsCount: totalViews.toLocaleString()
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function renderPropertiesTable() {
  const propertiesTableBody = document.getElementById('propertiesTableBody');
  if (!propertiesTableBody) return;
  
  propertiesTableBody.innerHTML = appData.properties.map(property => `
    <tr>
      <td>${property.id}</td>
      <td>
        <img src="${property.image}" alt="${property.title}" class="property-thumbnail" 
             onerror="this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=100&h=70&fit=crop'">
      </td>
      <td>
        <div style="max-width: 200px;">
          <strong>${property.title}</strong>
          <br><small>${property.description ? property.description.substring(0, 50) + '...' : ''}</small>
        </div>
      </td>
      <td><span class="status status--info">${property.type}</span></td>
      <td><strong>${property.price}</strong></td>
      <td>${property.location}</td>
      <td>
        <span class="status status--${property.status === 'active' ? 'success' : 'error'}">
          ${property.status}
        </span>
      </td>
      <td>
        <button class="featured-toggle ${property.featured ? 'active' : ''}" 
                onclick="togglePropertyFeatured(${property.id})" 
                title="${property.featured ? 'Remove from featured' : 'Mark as featured'}">
          ${property.featured ? '⭐' : '☆'}
        </button>
      </td>
      <td><strong>${property.views || 0}</strong> views</td>
      <td>
        <div class="admin-actions">
          <button class="btn btn--outline btn--sm" onclick="editProperty(${property.id})" title="Edit Property">
            ✏️ Edit
          </button>
          <button class="btn btn--outline btn--sm" onclick="togglePropertyStatus(${property.id})" title="Toggle Status">
            ${property.status === 'active' ? '❌ Deactivate' : '✅ Activate'}
          </button>
          <button class="btn btn--outline btn--sm" onclick="deleteProperty(${property.id})" title="Delete Property">
            🗑️ Delete
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderUsersTable() {
  const usersTableBody = document.getElementById('usersTableBody');
  if (!usersTableBody) return;
  
  const allUsers = [...appData.users, ...appData.regularUsers];
  const uniqueUsers = allUsers.filter((user, index, self) => 
    index === self.findIndex(u => u.email === user.email)
  );
  
  usersTableBody.innerHTML = uniqueUsers.map(user => `
    <tr>
      <td>${user.id}</td>
      <td><strong>${user.name}</strong></td>
      <td>${user.email}</td>
      <td>${user.phone || 'N/A'}</td>
      <td>
        <span class="status status--${user.role === 'admin' ? 'warning' : 'info'}">
          ${user.role}
        </span>
      </td>
      <td>${user.dateRegistered}</td>
      <td>
        <span class="status status--${user.status === 'active' ? 'success' : 'error'}">
          ${user.status}
        </span>
      </td>
      <td>
        <div class="admin-actions">
          <button class="btn btn--outline btn--sm" onclick="toggleUserStatus(${user.id})" title="Toggle Status">
            ${user.status === 'active' ? '❌ Deactivate' : '✅ Activate'}
          </button>
        </div>
      </td>
    </tr>
  `).join('');
  
  // Update user stats
  const totalCount = document.getElementById('usersTotalCount');
  const activeCount = document.getElementById('usersActiveCount');
  if (totalCount) totalCount.textContent = uniqueUsers.length;
  if (activeCount) activeCount.textContent = uniqueUsers.filter(u => u.status === 'active').length;
}

function renderTestimonialsTable() {
  const testimonialsTableBody = document.getElementById('testimonialsTableBody');
  if (!testimonialsTableBody) return;
  
  testimonialsTableBody.innerHTML = appData.testimonials.map(testimonial => {
    const stars = '⭐'.repeat(testimonial.rating);
    return `
      <tr>
        <td>${testimonial.id}</td>
        <td><strong>${testimonial.name}</strong></td>
        <td>${testimonial.location}</td>
        <td>${stars}</td>
        <td>
          <span class="status status--${testimonial.status === 'active' ? 'success' : 'error'}">
            ${testimonial.status}
          </span>
        </td>
        <td>${testimonial.date}</td>
        <td>
          <div class="admin-actions">
            <button class="btn btn--outline btn--sm" onclick="editTestimonial(${testimonial.id})" title="Edit Testimonial">
              ✏️ Edit
            </button>
            <button class="btn btn--outline btn--sm" onclick="toggleTestimonialStatus(${testimonial.id})" title="Toggle Status">
              ${testimonial.status === 'active' ? '❌ Hide' : '✅ Show'}
            </button>
            <button class="btn btn--outline btn--sm" onclick="deleteTestimonial(${testimonial.id})" title="Delete Testimonial">
              🗑️ Delete
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function renderActivities() {
  const activityList = document.getElementById('activityList');
  if (!activityList) return;
  
  activityList.innerHTML = appData.activities.map(activity => `
    <div class="activity-item">
      <div class="activity-icon">${activity.icon}</div>
      <div class="activity-content">
        <div class="activity-title">${activity.title}</div>
        <div class="activity-time">${activity.time}</div>
      </div>
    </div>
  `).join('');
}

// Chart Functions
function renderOverviewChart() {
  const ctx = document.getElementById('propertiesChart');
  if (!ctx || !window.Chart) return;
  
  if (charts.overview) {
    charts.overview.destroy();
  }
  
  const propertyTypes = appData.properties.reduce((acc, property) => {
    acc[property.type] = (acc[property.type] || 0) + 1;
    return acc;
  }, {});
  
  charts.overview = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(propertyTypes),
      datasets: [{
        data: Object.values(propertyTypes),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderAnalyticsCharts() {
  if (!window.Chart) return;
  
  renderPropertyPerformanceChart();
  renderUserGrowthChart();
  renderPropertyTypesChart();
  renderRevenueChart();
}

function renderPropertyPerformanceChart() {
  const ctx = document.getElementById('propertyPerformanceChart');
  if (!ctx) return;
  
  if (charts.performance) {
    charts.performance.destroy();
  }
  
  const properties = appData.properties.slice(0, 5);
  charts.performance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: properties.map(p => p.title.substring(0, 20) + '...'),
      datasets: [{
        label: 'Views',
        data: properties.map(p => p.views || 0),
        backgroundColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function renderUserGrowthChart() {
  const ctx = document.getElementById('userGrowthChart');
  if (!ctx) return;
  
  if (charts.userGrowth) {
    charts.userGrowth.destroy();
  }
  
  charts.userGrowth = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'New Users',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: '#FFC185',
        backgroundColor: 'rgba(255, 193, 133, 0.1)',
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function renderPropertyTypesChart() {
  const ctx = document.getElementById('propertyTypesChart');
  if (!ctx) return;
  
  if (charts.propertyTypes) {
    charts.propertyTypes.destroy();
  }
  
  const propertyTypes = appData.properties.reduce((acc, property) => {
    acc[property.type] = (acc[property.type] || 0) + 1;
    return acc;
  }, {});
  
  charts.propertyTypes = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(propertyTypes),
      datasets: [{
        data: Object.values(propertyTypes),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderRevenueChart() {
  const ctx = document.getElementById('revenueChart');
  if (!ctx) return;
  
  if (charts.revenue) {
    charts.revenue.destroy();
  }
  
  charts.revenue = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue (₹ Lakhs)',
        data: [2.4, 3.1, 2.8, 3.5, 4.2, 3.9],
        backgroundColor: '#5D878F'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Property Management Functions
function openPropertyModal(propertyId = null) {
  console.log('🏠 Opening property modal for ID:', propertyId);
  editingProperty = propertyId;
  
  const propertyModalTitle = document.getElementById('propertyModalTitle');
  const propertyForm = document.getElementById('propertyForm');
  
  if (propertyId) {
    const property = appData.properties.find(p => p.id === propertyId);
    if (property) {
      if (propertyModalTitle) propertyModalTitle.textContent = 'Edit Property';
      
      // Populate form fields
      const fields = [
        'propertyTitle', 'propertyType', 'propertyPrice', 'propertyLocation',
        'propertyCity', 'propertyArea', 'propertyImage', 'propertyFurnishing',
        'propertyFor', 'propertyCategory', 'propertyDescription'
      ];
      
      fields.forEach(fieldId => {
        const element = document.getElementById(fieldId);
        if (element) {
          const propertyKey = fieldId.replace('property', '').toLowerCase();
          let value = property[propertyKey];
          
          // Handle special cases
          if (propertyKey === 'for') value = property.forType;
          
          element.value = value || '';
        }
      });
      
      const featuredCheckbox = document.getElementById('propertyFeatured');
      if (featuredCheckbox) featuredCheckbox.checked = property.featured || false;
    }
  } else {
    if (propertyModalTitle) propertyModalTitle.textContent = 'Add New Property';
    if (propertyForm) propertyForm.reset();
  }
  
  openModal('propertyModal');
}

function handlePropertySubmit(e) {
  e.preventDefault();
  console.log('💾 Property form submitted');
  
  const formData = {
    title: document.getElementById('propertyTitle').value.trim(),
    type: document.getElementById('propertyType').value,
    price: document.getElementById('propertyPrice').value.trim(),
    location: document.getElementById('propertyLocation').value.trim(),
    city: document.getElementById('propertyCity').value.trim(),
    area: document.getElementById('propertyArea').value.trim(),
    image: document.getElementById('propertyImage').value.trim(),
    furnishing: document.getElementById('propertyFurnishing').value,
    forType: document.getElementById('propertyFor').value,
    category: document.getElementById('propertyCategory').value,
    description: document.getElementById('propertyDescription').value.trim(),
    featured: document.getElementById('propertyFeatured').checked
  };
  
  // Validation
  const requiredFields = ['title', 'type', 'price', 'location', 'city', 'area', 'image', 'furnishing', 'forType', 'category'];
  const missingFields = requiredFields.filter(field => !formData[field]);
  
  if (missingFields.length > 0) {
    showNotification(`Please fill in all required fields: ${missingFields.join(', ')}`, 'error');
    return;
  }
  
  // Extract price number
  const priceString = formData.price.replace(/[₹,\s]/g, '');
  let priceNumber = 0;
  if (priceString.includes('Cr')) {
    priceNumber = parseFloat(priceString.replace('Cr', '')) * 10000000;
  } else if (priceString.includes('Lakh')) {
    priceNumber = parseFloat(priceString.replace('Lakh', '')) * 100000;
  } else {
    priceNumber = parseFloat(priceString) || 0;
  }
  
  const propertyData = {
    ...formData,
    priceNumber,
    amenities: ["Security", "Power Backup", "Parking"],
    status: 'active',
    views: 0,
    inquiries: 0,
    dateAdded: new Date().toISOString().split('T')[0]
  };
  
  if (editingProperty) {
    const index = appData.properties.findIndex(p => p.id === editingProperty);
    if (index !== -1) {
      appData.properties[index] = { 
        ...appData.properties[index], 
        ...propertyData 
      };
      showNotification('Property updated successfully!', 'success');
    }
  } else {
    const newProperty = {
      id: Math.max(...appData.properties.map(p => p.id)) + 1,
      ...propertyData
    };
    appData.properties.unshift(newProperty);
    showNotification('Property added successfully!', 'success');
  }
  
  closeModal('propertyModal');
  renderPropertiesTable();
  renderAdminStats();
  renderProperties();
  renderActivities();
  e.target.reset();
}

// Testimonial Management Functions
function openTestimonialModal(testimonialId = null) {
  console.log('💬 Opening testimonial modal for ID:', testimonialId);
  editingTestimonial = testimonialId;
  
  const testimonialModalTitle = document.getElementById('testimonialModalTitle');
  const testimonialForm = document.getElementById('testimonialForm');
  
  if (testimonialId) {
    const testimonial = appData.testimonials.find(t => t.id === testimonialId);
    if (testimonial) {
      if (testimonialModalTitle) testimonialModalTitle.textContent = 'Edit Testimonial';
      
      const elements = {
        testimonialName: document.getElementById('testimonialName'),
        testimonialLocation: document.getElementById('testimonialLocation'),
        testimonialRating: document.getElementById('testimonialRating'),
        testimonialText: document.getElementById('testimonialText')
      };
      
      if (elements.testimonialName) elements.testimonialName.value = testimonial.name;
      if (elements.testimonialLocation) elements.testimonialLocation.value = testimonial.location;
      if (elements.testimonialRating) elements.testimonialRating.value = testimonial.rating;
      if (elements.testimonialText) elements.testimonialText.value = testimonial.text;
    }
  } else {
    if (testimonialModalTitle) testimonialModalTitle.textContent = 'Add New Testimonial';
    if (testimonialForm) testimonialForm.reset();
  }
  
  openModal('testimonialModal');
}

function handleTestimonialSubmit(e) {
  e.preventDefault();
  console.log('💾 Testimonial form submitted');
  
  const formData = {
    name: document.getElementById('testimonialName').value.trim(),
    location: document.getElementById('testimonialLocation').value.trim(),
    rating: parseInt(document.getElementById('testimonialRating').value),
    text: document.getElementById('testimonialText').value.trim()
  };
  
  if (!formData.name || !formData.location || !formData.rating || !formData.text) {
    showNotification('Please fill in all fields', 'error');
    return;
  }
  
  const testimonialData = {
    ...formData,
    status: 'active',
    date: new Date().toISOString().split('T')[0]
  };
  
  if (editingTestimonial) {
    const index = appData.testimonials.findIndex(t => t.id === editingTestimonial);
    if (index !== -1) {
      appData.testimonials[index] = { 
        ...appData.testimonials[index], 
        ...testimonialData 
      };
      showNotification('Testimonial updated successfully!', 'success');
    }
  } else {
    const newTestimonial = {
      id: Math.max(...appData.testimonials.map(t => t.id)) + 1,
      ...testimonialData
    };
    appData.testimonials.push(newTestimonial);
    showNotification('Testimonial added successfully!', 'success');
  }
  
  closeModal('testimonialModal');
  renderTestimonialsTable();
  renderTestimonials();
  renderActivities();
  e.target.reset();
}

// Search and Filter Functions
function handleSearch() {
  console.log('🔍 Search triggered');
  
  const searchType = document.getElementById('searchType');
  const searchFor = document.getElementById('searchFor');
  const searchLocation = document.getElementById('searchLocation');
  
  const type = searchType ? searchType.value : '';
  const forType = searchFor ? searchFor.value : '';
  const location = searchLocation ? searchLocation.value.toLowerCase() : '';
  
  let filteredProperties = appData.properties.filter(p => p.status === 'active');
  
  if (type) {
    filteredProperties = filteredProperties.filter(p => p.type === type);
  }
  
  if (forType) {
    filteredProperties = filteredProperties.filter(p => p.forType === forType);
  }
  
  if (location) {
    filteredProperties = filteredProperties.filter(p => 
      p.location.toLowerCase().includes(location) ||
      p.city.toLowerCase().includes(location)
    );
  }
  
  // Render filtered properties
  const propertiesGrid = document.getElementById('propertiesGrid');
  if (propertiesGrid) {
    if (filteredProperties.length === 0) {
      propertiesGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
          <h3>No properties found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      `;
    } else {
      renderFilteredProperties(filteredProperties, propertiesGrid);
    }
  }
  
  showNotification(`Found ${filteredProperties.length} properties matching your criteria`, 'info');
}

function renderFilteredProperties(properties, container) {
  container.innerHTML = properties.map(property => `
    <div class="property-card" data-property-id="${property.id}">
      ${property.featured ? '<span class="featured-badge">Featured</span>' : ''}
      <img src="${property.image}" alt="${property.title}" class="property-image" 
           onerror="this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'">
      <div class="property-content">
        <h3 class="property-title">${property.title}</h3>
        <div class="property-details">
          <div class="property-detail">
            <strong>Type:</strong> ${property.type}
          </div>
          <div class="property-detail">
            <strong>Area:</strong> ${property.area}
          </div>
          <div class="property-detail">
            <strong>Location:</strong> ${property.location}
          </div>
          <div class="property-detail">
            <strong>Furnishing:</strong> ${property.furnishing}
          </div>
        </div>
        <div class="property-price">${property.price} ${property.forType === 'Rent' ? '/month' : ''}</div>
        <div class="property-amenities">
          ${property.amenities.slice(0, 4).map(amenity => `<span class="amenity-tag">${amenity}</span>`).join('')}
          ${property.amenities.length > 4 ? `<span class="amenity-tag">+${property.amenities.length - 4} more</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  
  // CRITICAL: Add click tracking to filtered properties with fixed event handling
  container.querySelectorAll('.property-card').forEach(card => {
    card.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      const propertyId = parseInt(this.dataset.propertyId);
      console.log('🏠 Filtered property card clicked:', propertyId);
      openPropertyDetailModal(propertyId);
      return false;
    };
    card.style.cursor = 'pointer';
  });
}

function filterProperties(filter) {
  console.log('📊 Filtering properties by:', filter);
  renderProperties(filter);
}

// Contact Form Handler
function handleContact(e) {
  e.preventDefault();
  console.log('📧 Contact form submitted');
  
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  
  if (!name || !email || !phone || !message) {
    showNotification('Please fill in all fields', 'error');
    return;
  }
  
  showNotification(`Thank you, ${name}! Your message has been sent. We'll contact you soon.`, 'success');
  e.target.reset();
}

// CRITICAL BUG FIX: Enhanced modal functions
function openModal(modalId) {
  console.log('📝 Opening modal:', modalId);
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex'; // Ensure it's visible
    
    const firstInput = modal.querySelector('input, textarea, select');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
    
    console.log('✅ Modal opened successfully:', modalId);
  } else {
    console.warn('❌ Modal not found:', modalId);
  }
}

function closeModal(modalId) {
  console.log('❌ Closing modal:', modalId);
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 100);
    console.log('✅ Modal closed successfully:', modalId);
  } else {
    console.warn('❌ Modal not found for closing:', modalId);
  }
}

// Notification System
function showNotification(message, type = 'info') {
  console.log(`🔔 Notification (${type}):`, message);
  
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notificationMessage');
  
  if (notification && notificationMessage) {
    notificationMessage.textContent = message;
    notification.classList.remove('success', 'error', 'info');
    notification.classList.add(type);
    notification.classList.remove('hidden');
    notification.classList.add('show');
    
    setTimeout(() => {
      hideNotification();
    }, 5000);
  }
}

function hideNotification() {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 300);
  }
}

// Global functions for admin table actions
window.editProperty = function(id) {
  openPropertyModal(id);
};

window.togglePropertyStatus = function(id) {
  const property = appData.properties.find(p => p.id === id);
  if (property) {
    property.status = property.status === 'active' ? 'inactive' : 'active';
    renderPropertiesTable();
    renderAdminStats();
    renderProperties();
    showNotification(`Property ${property.status === 'active' ? 'activated' : 'deactivated'} successfully`, 'success');
  }
};

window.togglePropertyFeatured = function(id) {
  const property = appData.properties.find(p => p.id === id);
  if (property) {
    property.featured = !property.featured;
    renderPropertiesTable();
    renderProperties();
    showNotification(`Property ${property.featured ? 'marked as featured' : 'removed from featured'}`, 'success');
  }
};

window.deleteProperty = function(id) {
  const property = appData.properties.find(p => p.id === id);
  if (property && confirm(`Are you sure you want to delete "${property.title}"? This action cannot be undone.`)) {
    appData.properties = appData.properties.filter(p => p.id !== id);
    renderPropertiesTable();
    renderAdminStats();
    renderProperties();
    showNotification('Property deleted successfully', 'info');
  }
};

window.toggleUserStatus = function(id) {
  const user = [...appData.users, ...appData.regularUsers].find(u => u.id === id);
  if (user) {
    user.status = user.status === 'active' ? 'inactive' : 'active';
    renderUsersTable();
    renderAdminStats();
    showNotification(`User ${user.status === 'active' ? 'activated' : 'deactivated'} successfully`, 'success');
  }
};

window.editTestimonial = function(id) {
  openTestimonialModal(id);
};

window.toggleTestimonialStatus = function(id) {
  const testimonial = appData.testimonials.find(t => t.id === id);
  if (testimonial) {
    testimonial.status = testimonial.status === 'active' ? 'inactive' : 'active';
    renderTestimonialsTable();
    renderTestimonials();
    showNotification(`Testimonial ${testimonial.status === 'active' ? 'activated' : 'hidden'} successfully`, 'success');
  }
};

window.deleteTestimonial = function(id) {
  const testimonial = appData.testimonials.find(t => t.id === id);
  if (testimonial && confirm(`Are you sure you want to delete the testimonial from "${testimonial.name}"?`)) {
    appData.testimonials = appData.testimonials.filter(t => t.id !== id);
    renderTestimonialsTable();
    renderTestimonials();
    showNotification('Testimonial deleted successfully', 'info');
  }
};

// Error handling
window.addEventListener('error', function(e) {
  console.error('❌ JavaScript Error:', e.error);
  showNotification('An error occurred. Please refresh the page.', 'error');
});

console.log('✅ RVG Properties application loaded successfully!');
