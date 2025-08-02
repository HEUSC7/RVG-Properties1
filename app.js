// Application Data
const appData = {
  "users": [
    {
      "id": "admin",
      "email": "rvgproperties@gmail.com",
      "password": "RVG@admin",
      "name": "RVG Admin",
      "role": "admin",
      "registrationDate": "2025-01-01",
      "lastLogin": "2025-08-02",
      "status": "active"
    },
    {
      "id": "user1",
      "email": "raj.sharma@email.com",
      "password": "user123",
      "name": "Raj Sharma",
      "role": "user",
      "registrationDate": "2025-07-10",
      "lastLogin": "2025-08-01",
      "status": "active",
      "phone": "+91 98765 43210",
      "propertiesPosted": 2
    },
    {
      "id": "user2", 
      "email": "priya.singh@email.com",
      "password": "user123",
      "name": "Priya Singh",
      "role": "user",
      "registrationDate": "2025-07-15",
      "lastLogin": "2025-07-31",
      "status": "active",
      "phone": "+91 87654 32109",
      "propertiesPosted": 1
    },
    {
      "id": "user3",
      "email": "amit.kumar@email.com",
      "password": "user123", 
      "name": "Amit Kumar",
      "role": "user",
      "registrationDate": "2025-07-25",
      "lastLogin": "2025-08-01",
      "status": "active",
      "phone": "+91 76543 21098",
      "propertiesPosted": 1
    },
    {
      "id": "user4",
      "email": "neha.patel@email.com",
      "password": "user123",
      "name": "Neha Patel",
      "role": "user",
      "registrationDate": "2025-07-28",
      "lastLogin": "2025-08-02",
      "status": "active",
      "phone": "+91 65432 10987",
      "propertiesPosted": 1
    },
    {
      "id": "demo1",
      "email": "demo@user.com",
      "password": "demo123",
      "name": "Demo User",
      "role": "user",
      "registrationDate": "2025-08-01",
      "lastLogin": "2025-08-02",
      "status": "active",
      "phone": "+91 99999 00000",
      "propertiesPosted": 0
    }
  ],
  "properties": [
    {
      "id": 1,
      "title": "Luxury 3BHK Apartment in Bandra West",
      "type": "3BHK",
      "category": "Apartment",
      "price": 25000000,
      "location": "Bandra West, Mumbai",
      "area": 1200,
      "furnishing": "Semi-Furnished",
      "parking": "2 Covered",
      "age": "5 years",
      "status": "Ready to move",
      "forType": "Buy",
      "approvalStatus": "approved",
      "postedBy": "user1",
      "postedDate": "2025-07-15",
      "approvedDate": "2025-07-16",
      "images": ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"],
      "amenities": ["Swimming Pool", "Gym", "Security", "Power Backup", "Elevator", "Park"],
      "description": "Spacious 3BHK apartment with modern amenities in prime Bandra location. Close to schools, shopping centers, and excellent connectivity.",
      "agent": "Raj Sharma",
      "phone": "+91 98765 43210",
      "email": "raj.sharma@email.com",
      "featured": true
    },
    {
      "id": 2,
      "title": "Modern 2BHK Flat for Rent in Koramangala",
      "type": "2BHK",
      "category": "Apartment", 
      "price": 35000,
      "location": "Koramangala, Bangalore",
      "area": 950,
      "furnishing": "Fully Furnished",
      "parking": "1 Covered",
      "age": "3 years",
      "status": "Ready to move",
      "forType": "Rent",
      "approvalStatus": "approved",
      "postedBy": "user2",
      "postedDate": "2025-07-20",
      "approvedDate": "2025-07-21",
      "images": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&h=600&fit=crop"],
      "amenities": ["Gym", "Security", "Power Backup", "Internet", "AC", "Refrigerator"],
      "description": "Fully furnished 2BHK flat in the heart of Koramangala. Perfect for working professionals with all modern amenities.",
      "agent": "Priya Singh",
      "phone": "+91 87654 32109",
      "email": "priya.singh@email.com",
      "featured": true
    },
    {
      "id": 3,
      "title": "Spacious 4BHK Villa in Gurgaon",
      "type": "4BHK",
      "category": "Villa",
      "price": 45000000,
      "location": "Sector 47, Gurgaon",
      "area": 2500,
      "furnishing": "Unfurnished",
      "parking": "3 Covered",
      "age": "2 years",
      "status": "Ready to move",
      "forType": "Buy",
      "approvalStatus": "pending",
      "postedBy": "user3",
      "postedDate": "2025-08-01",
      "images": ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop"],
      "amenities": ["Swimming Pool", "Garden", "Security", "Power Backup", "Club House", "Kids Play Area"],
      "description": "Luxurious 4BHK villa with private garden and premium amenities. Located in peaceful residential area with excellent connectivity.",
      "agent": "Amit Kumar",
      "phone": "+91 76543 21098",
      "email": "amit.kumar@email.com",
      "featured": false
    },
    {
      "id": 4,
      "title": "Cozy 1BHK Studio in Powai", 
      "type": "1BHK",
      "category": "Studio",
      "price": 18000,
      "location": "Powai, Mumbai",
      "area": 450,
      "furnishing": "Semi-Furnished",
      "parking": "1 Open",
      "age": "7 years",
      "status": "Ready to move",
      "forType": "Rent",
      "approvalStatus": "approved",
      "postedBy": "user4",
      "postedDate": "2025-07-28",
      "approvedDate": "2025-07-29",
      "images": ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1502005229848-906ec1d5bf38?w=800&h=600&fit=crop"],
      "amenities": ["Security", "Elevator", "Power Backup", "Water Supply"],
      "description": "Affordable 1BHK studio apartment perfect for students and young professionals. Close to IT parks and colleges.",
      "agent": "Neha Patel",
      "phone": "+91 65432 10987",
      "email": "neha.patel@email.com",
      "featured": false
    },
    {
      "id": 5,
      "title": "Premium 3BHK Penthouse in Whitefield",
      "type": "3BHK", 
      "category": "Penthouse",
      "price": 32000000,
      "location": "Whitefield, Bangalore",
      "area": 1800,
      "furnishing": "Fully Furnished",
      "parking": "2 Covered",
      "age": "1 year",
      "status": "Ready to move",
      "forType": "Buy",
      "approvalStatus": "rejected",
      "postedBy": "user1",
      "postedDate": "2025-07-30",
      "rejectedDate": "2025-08-01",
      "rejectionReason": "Incomplete documentation provided",
      "images": ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop"],
      "amenities": ["Swimming Pool", "Gym", "Terrace Garden", "Security", "Elevator", "Club House"],
      "description": "Luxurious penthouse with panoramic city views and top-notch amenities. Premium location with easy access to tech parks.",
      "agent": "Raj Sharma",
      "phone": "+91 98765 43210",
      "email": "raj.sharma@email.com",
      "featured": false
    },
    {
      "id": 6,
      "title": "Affordable 2BHK House in Noida Extension",
      "type": "2BHK",
      "category": "House",
      "price": 15000000,
      "location": "Greater Noida West",
      "area": 800,
      "furnishing": "Unfurnished",
      "parking": "1 Covered",
      "age": "Under Construction",
      "status": "Under Construction",
      "forType": "Buy",
      "approvalStatus": "pending",
      "postedBy": "user2",
      "postedDate": "2025-08-02",
      "images": ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop"],
      "amenities": ["Park", "Security", "Power Backup", "Water Supply", "Shopping Complex"],
      "description": "Well-planned 2BHK house in developing area with good infrastructure. Great investment opportunity with future growth potential.",
      "agent": "Priya Singh",
      "phone": "+91 87654 32109",
      "email": "priya.singh@email.com",
      "featured": false
    }
  ],
  "inquiries": [
    {
      "id": 1,
      "propertyId": 1,
      "userEmail": "buyer1@email.com",
      "userName": "John Doe",
      "phone": "+91 99999 88888",
      "message": "I'm interested in this property. Please provide more details about the amenities and availability.",
      "date": "2025-07-30",
      "status": "pending",
      "response": ""
    },
    {
      "id": 2,
      "propertyId": 2,
      "userEmail": "tenant1@email.com", 
      "userName": "Jane Smith",
      "phone": "+91 88888 77777",
      "message": "When can I schedule a visit to this property? Is it available immediately?",
      "date": "2025-08-01",
      "status": "responded",
      "response": "Hi Jane, you can visit this weekend. The property is available immediately. Please call the agent at the provided number.",
      "respondedDate": "2025-08-01"
    },
    {
      "id": 3,
      "propertyId": 4,
      "userEmail": "student1@email.com",
      "userName": "Mike Johnson", 
      "phone": "+91 77777 66666",
      "message": "Is this property suitable for students? Are there any colleges nearby?",
      "date": "2025-08-02",
      "status": "pending",
      "response": ""
    },
    {
      "id": 4,
      "propertyId": 1,
      "userEmail": "investor1@email.com",
      "userName": "Sarah Wilson",
      "phone": "+91 66666 55555",
      "message": "I'm interested in this property for investment purposes. Can you provide ROI details?",
      "date": "2025-08-02",
      "status": "pending",
      "response": ""
    }
  ],
  "analytics": {
    "totalProperties": 6,
    "approvedProperties": 3,
    "pendingProperties": 2,
    "rejectedProperties": 1,
    "totalUsers": 6,
    "activeUsers": 6,
    "totalInquiries": 4,
    "pendingInquiries": 3,
    "respondedInquiries": 1,
    "monthlyStats": {
      "newProperties": 6,
      "newUsers": 5,
      "newInquiries": 4,
      "approvedProperties": 3
    },
    "cityStats": {
      "Mumbai": 2,
      "Bangalore": 2,
      "Gurgaon": 1,
      "Greater Noida": 1
    },
    "typeStats": {
      "1BHK": 1,
      "2BHK": 2,
      "3BHK": 2,
      "4BHK": 1
    },
    "revenueStats": {
      "totalRevenue": 97200000,
      "monthlyRevenue": 53000,
      "premiumListings": 2
    }
  },
  "cities": ["Mumbai", "Bangalore", "Delhi", "Gurgaor", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Noida", "Greater Noida", "Faridabad", "Ghaziabad"],
  "propertyTypes": ["1BHK", "2BHK", "3BHK", "4BHK+"],
  "categories": ["Apartment", "Villa", "House", "Studio", "Penthouse", "Plot"],
  "amenities": ["Swimming Pool", "Gym", "Security", "Power Backup", "Elevator", "Park", "Club House", "Kids Play Area", "Garden", "Terrace Garden", "AC", "Refrigerator", "Internet", "Water Supply", "Shopping Complex", "Hospital", "School", "ATM", "Temple"],
  "furnishingTypes": ["Fully Furnished", "Semi-Furnished", "Unfurnished"],
  "testimonials": [
    {
      "id": 1,
      "name": "Rahul Sharma",
      "location": "Mumbai", 
      "text": "RVG Properties helped me find the perfect home in Mumbai. Their service was exceptional and the process was smooth.",
      "rating": 5,
      "featured": true
    },
    {
      "id": 2,
      "name": "Priya Menon",
      "location": "Bangalore",
      "text": "Great platform with genuine listings. Found my dream apartment through RVG Properties within a week!",
      "rating": 5,
      "featured": true
    },
    {
      "id": 3,
      "name": "Amit Patel",
      "location": "Delhi",
      "text": "Professional service and transparent pricing. Highly recommend RVG Properties for property buying and selling.",
      "rating": 4,
      "featured": false
    },
    {
      "id": 4,
      "name": "Neha Gupta",
      "location": "Pune",
      "text": "Amazing experience with RVG Properties! Found my rental property quickly with their efficient search system.",
      "rating": 5,
      "featured": false
    },
    {
      "id": 5,
      "name": "Vikash Singh",
      "location": "Hyderabad",
      "text": "Professional team and excellent customer service. Highly recommend for property transactions.",
      "rating": 5,
      "featured": true
    }
  ]
};

// Global Variables
let currentPage = 'home';
let currentUser = null;

// Session Management & Security
class SessionManager {
  static setCurrentUser(user) {
    currentUser = user;
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    this.updateUIBasedOnRole();
  }

  static getCurrentUser() {
    if (currentUser) return currentUser;
    const user = sessionStorage.getItem('currentUser');
    if (user) {
      currentUser = JSON.parse(user);
      return currentUser;
    }
    return null;
  }

  static isAdmin() {
    const user = this.getCurrentUser();
    return user && user.role === 'admin';
  }

  static logout() {
    currentUser = null;
    sessionStorage.removeItem('currentUser');
    this.updateUIBasedOnRole();
    showPage('home');
    showToast('Logged out successfully', 'success');
  }

  static updateUIBasedOnRole() {
    const isAdmin = this.isAdmin();
    const user = this.getCurrentUser();
    
    // Show/hide admin elements
    const adminElements = document.querySelectorAll('.admin-only');
    adminElements.forEach(element => {
      if (isAdmin) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });

    // Update navigation based on role
    const publicNav = document.getElementById('publicNav');
    const adminNav = document.getElementById('adminNav');
    
    if (isAdmin) {
      if (publicNav) publicNav.style.display = 'none';
      if (adminNav) adminNav.classList.remove('hidden');
    } else {
      if (publicNav) publicNav.style.display = 'flex';
      if (adminNav) adminNav.classList.add('hidden');
    }

    // Update login/logout buttons and user info
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userMenu = document.getElementById('userMenu');
    const userNameDisplay = document.getElementById('userNameDisplay');
    
    if (user) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (registerBtn) registerBtn.style.display = 'none';
      if (userMenu) {
        userMenu.classList.remove('hidden');
        userMenu.style.display = 'flex';
      }
      if (userNameDisplay) userNameDisplay.textContent = user.name;
    } else {
      if (loginBtn) loginBtn.style.display = 'inline-block';
      if (registerBtn) registerBtn.style.display = 'inline-block';
      if (userMenu) {
        userMenu.classList.add('hidden');
        userMenu.style.display = 'none';
      }
    }
  }
}

// Authentication
function authenticate(email, password) {
  const user = appData.users.find(u => u.email === email && u.password === password);
  if (user) {
    SessionManager.setCurrentUser(user);
    return true;
  }
  return false;
}

// Page Navigation
function showPage(pageId) {
  // Security check for admin pages
  if (pageId.includes('admin') || pageId.includes('manage') || pageId.includes('analytics') || pageId.includes('inquiries')) {
    if (!SessionManager.isAdmin()) {
      showToast('Access denied. Admin login required.', 'error');
      return;
    }
  }

  currentPage = pageId;

  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show selected page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    
    // Load page-specific content
    switch(pageId) {
      case 'home':
        loadHomePage();
        break;
      case 'properties':
        loadPropertiesPage();
        break;
      case 'admin-dashboard':
        loadAdminDashboard();
        break;
      case 'manage-properties':
        loadManageProperties();
        break;
      case 'post-property':
        loadPostPropertyPage();
        break;
    }
  }
}

// Toast Notifications
function showToast(message, type = 'success') {
  // Create toast if it doesn't exist
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast hidden';
    toast.innerHTML = `
      <div class="toast-icon"></div>
      <div class="toast-message"></div>
      <button class="toast-close">&times;</button>
    `;
    document.body.appendChild(toast);
    
    // Add close functionality
    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.classList.add('hidden');
    });
  }
  
  const toastMessage = toast.querySelector('.toast-message');
  const toastIcon = toast.querySelector('.toast-icon');
  
  if (toastMessage) toastMessage.textContent = message;
  toast.className = `toast ${type}`;
  
  if (toastIcon) {
    if (type === 'success') {
      toastIcon.className = 'toast-icon fas fa-check-circle';
    } else if (type === 'error') {
      toastIcon.className = 'toast-icon fas fa-exclamation-circle';
    }
  }
  
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}

// Format Price
function formatPrice(price) {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} L`;
  } else {
    return `₹${price.toLocaleString()}`;
  }
}

// Load Home Page
function loadHomePage() {
  // Load featured properties
  const featuredProperties = appData.properties.filter(p => p.featured && p.approvalStatus === 'approved');
  renderProperties(featuredProperties, 'featuredProperties');
  
  // Load testimonials
  const featuredTestimonials = appData.testimonials.filter(t => t.featured);
  renderTestimonials(featuredTestimonials);
  
  // Update statistics
  const totalPropertiesEl = document.getElementById('totalPropertiesCount');
  const totalUsersEl = document.getElementById('totalUsersCount');
  
  if (totalPropertiesEl) {
    totalPropertiesEl.textContent = appData.properties.filter(p => p.approvalStatus === 'approved').length;
  }
  if (totalUsersEl) {
    totalUsersEl.textContent = appData.users.filter(u => u.role === 'user').length;
  }
  
  // Populate search dropdowns
  populateSearchDropdowns();
}

// Load Properties Page
function loadPropertiesPage() {
  const approvedProperties = appData.properties.filter(p => p.approvalStatus === 'approved');
  renderProperties(approvedProperties, 'allProperties');
  populateFilterDropdowns();
}

// Load Post Property Page
function loadPostPropertyPage() {
  // Check if user is logged in
  if (!SessionManager.getCurrentUser()) {
    showToast('Please login to post a property', 'error');
    const loginModal = document.getElementById('loginModal');
    if (loginModal) loginModal.classList.remove('hidden');
    return;
  }

  const propertyTypeSelect = document.getElementById('propertyType');
  const propertyCategorySelect = document.getElementById('propertyCategory');
  const propertyFurnishingSelect = document.getElementById('propertyFurnishing');
  
  // Clear existing options first
  if (propertyTypeSelect) {
    propertyTypeSelect.innerHTML = '<option value="">Select Type</option>';
    populateSelect(propertyTypeSelect, appData.propertyTypes);
  }
  if (propertyCategorySelect) {
    propertyCategorySelect.innerHTML = '<option value="">Select Category</option>';
    populateSelect(propertyCategorySelect, appData.categories);
  }
  if (propertyFurnishingSelect) {
    propertyFurnishingSelect.innerHTML = '<option value="">Select</option>';
    populateSelect(propertyFurnishingSelect, appData.furnishingTypes);
  }
}

// Render Properties
function renderProperties(properties, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  if (properties.length === 0) {
    container.innerHTML = '<div class="no-properties">No properties found matching your criteria.</div>';
    return;
  }
  
  properties.forEach(property => {
    const propertyCard = createPropertyCard(property);
    container.appendChild(propertyCard);
  });
}

// Create Property Card
function createPropertyCard(property) {
  const card = document.createElement('div');
  card.className = 'property-card';
  
  const imageUrl = property.images && property.images.length > 0 ? property.images[0] : 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop';
  
  card.innerHTML = `
    <div class="property-image" style="background-image: url('${imageUrl}')">
      <div class="property-badge">${property.forType}</div>
    </div>
    <div class="property-content">
      <h3 class="property-title">${property.title}</h3>
      <div class="property-price">${formatPrice(property.price)}</div>
      <div class="property-location">
        <i class="fas fa-map-marker-alt"></i>
        ${property.location}
      </div>
      <div class="property-details">
        <span><i class="fas fa-home"></i> ${property.type}</span>
        <span><i class="fas fa-expand-arrows-alt"></i> ${property.area} sq ft</span>
        <span><i class="fas fa-couch"></i> ${property.furnishing}</span>
        <span><i class="fas fa-car"></i> ${property.parking}</span>
      </div>
    </div>
  `;
  
  // Add click event listener
  card.addEventListener('click', () => openPropertyModal(property));
  
  return card;
}

// Open Property Modal
function openPropertyModal(property) {
  const modal = document.getElementById('propertyModal');
  const modalTitle = document.getElementById('propertyModalTitle');
  const modalBody = document.getElementById('propertyModalBody');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  modalTitle.textContent = property.title;
  
  const imageGallery = property.images && property.images.length > 0 
    ? property.images.map(img => `<img src="${img}" alt="Property Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">`).join('')
    : '<img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop" alt="Property Image" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">';
  
  modalBody.innerHTML = `
    <div style="margin-bottom: 2rem;">
      ${imageGallery}
    </div>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
      <div>
        <h4 style="margin-bottom: 1rem; color: #1E90FF;">Property Details</h4>
        <div style="display: grid; gap: 0.5rem;">
          <div><strong>Price:</strong> ${formatPrice(property.price)}</div>
          <div><strong>Type:</strong> ${property.type}</div>
          <div><strong>Category:</strong> ${property.category}</div>
          <div><strong>Area:</strong> ${property.area} sq ft</div>
          <div><strong>Furnishing:</strong> ${property.furnishing}</div>
          <div><strong>Parking:</strong> ${property.parking}</div>
          <div><strong>Age:</strong> ${property.age}</div>
          <div><strong>Status:</strong> ${property.status}</div>
        </div>
      </div>
      
      <div>
        <h4 style="margin-bottom: 1rem; color: #1E90FF;">Contact Details</h4>
        <div style="display: grid; gap: 0.5rem;">
          <div><strong>Agent:</strong> ${property.agent}</div>
          <div><strong>Phone:</strong> ${property.phone}</div>
          <div><strong>Email:</strong> ${property.email}</div>
        </div>
        
        <div style="margin-top: 1.5rem;">
          <button class="btn btn--primary" onclick="contactAgent('${property.phone}')">
            <i class="fas fa-phone"></i> Call Agent
          </button>
          <button class="btn btn--secondary" onclick="emailAgent('${property.email}')" style="margin-left: 1rem;">
            <i class="fas fa-envelope"></i> Email Agent
          </button>
        </div>
      </div>
    </div>
    
    <div style="margin-bottom: 2rem;">
      <h4 style="margin-bottom: 1rem; color: #1E90FF;">Description</h4>
      <p style="line-height: 1.6; color: #666;">${property.description}</p>
    </div>
    
    <div>
      <h4 style="margin-bottom: 1rem; color: #1E90FF;">Amenities</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${property.amenities.map(amenity => `<span style="background: #f0f0f0; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${amenity}</span>`).join('')}
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

// Contact Agent Functions
function contactAgent(phone) {
  window.open(`tel:${phone}`, '_blank');
}

function emailAgent(email) {
  window.open(`mailto:${email}`, '_blank');
}

// Render Testimonials
function renderTestimonials(testimonials) {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    card.innerHTML = `
      <div class="testimonial-text">"${testimonial.text}"</div>
      <div class="testimonial-rating">${stars}</div>
      <div class="testimonial-author">${testimonial.name}</div>
      <div class="testimonial-location">${testimonial.location}</div>
    `;
    
    container.appendChild(card);
  });
}

// Admin Dashboard
function loadAdminDashboard() {
  if (!SessionManager.isAdmin()) {
    showToast('Access denied. Admin login required.', 'error');
    return;
  }
  
  // Update dashboard statistics
  const totalProperties = document.getElementById('totalProperties');
  const pendingApprovals = document.getElementById('pendingApprovals');
  const totalUsers = document.getElementById('totalUsers');
  const totalInquiries = document.getElementById('totalInquiries');
  
  if (totalProperties) totalProperties.textContent = appData.analytics.totalProperties;
  if (pendingApprovals) pendingApprovals.textContent = appData.analytics.pendingProperties;
  if (totalUsers) totalUsers.textContent = appData.analytics.totalUsers;
  if (totalInquiries) totalInquiries.textContent = appData.analytics.totalInquiries;
  
  // Load recent activities
  loadRecentActivities();
  
  // Load admin properties table
  renderAdminPropertiesTable();
}

// Load Recent Activities
function loadRecentActivities() {
  const container = document.getElementById('recentActivities');
  if (!container) return;
  
  const activities = [
    { type: 'property', message: 'New property posted: Spacious 4BHK Villa', time: '2 hours ago', icon: 'fas fa-home' },
    { type: 'user', message: 'New user registered: Demo User', time: '5 hours ago', icon: 'fas fa-user-plus' },
    { type: 'inquiry', message: 'New inquiry for Luxury 3BHK Apartment', time: '1 day ago', icon: 'fas fa-question-circle' },
    { type: 'approval', message: 'Property approved: Modern 2BHK Flat', time: '2 days ago', icon: 'fas fa-check-circle' }
  ];
  
  container.innerHTML = activities.map(activity => `
    <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: white; border-radius: 10px; margin-bottom: 1rem; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
      <div style="width: 40px; height: 40px; background: #1E90FF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
        <i class="${activity.icon}"></i>
      </div>
      <div style="flex: 1;">
        <div style="font-weight: 500; margin-bottom: 0.25rem;">${activity.message}</div>
        <div style="font-size: 0.9rem; color: #666;">${activity.time}</div>
      </div>
    </div>
  `).join('');
}

// Manage Properties
function loadManageProperties() {
  if (!SessionManager.isAdmin()) {
    showToast('Access denied. Admin login required.', 'error');
    return;
  }
  
  renderAdminPropertiesTable();
}

// Render Admin Properties Table
function renderAdminPropertiesTable(filter = '') {
  const container = document.getElementById('adminPropertiesTable');
  if (!container) return;
  
  let properties = appData.properties;
  
  if (filter) {
    properties = properties.filter(p => p.approvalStatus === filter);
  }
  
  container.innerHTML = properties.map(property => {
    const user = appData.users.find(u => u.id === property.postedBy);
    const statusClass = `status-${property.approvalStatus}`;
    
    return `
      <tr>
        <td>
          <div style="font-weight: 500;">${property.title}</div>
          <div style="font-size: 0.9rem; color: #666;">ID: ${property.id}</div>
        </td>
        <td>${user ? user.name : 'Unknown'}</td>
        <td><span class="status-badge ${statusClass}">${property.approvalStatus}</span></td>
        <td>${property.postedDate}</td>
        <td>
          <div style="display: flex; gap: 0.5rem;">
            ${property.approvalStatus === 'pending' ? `
              <button class="btn btn--success btn--sm" onclick="approveProperty(${property.id})">
                <i class="fas fa-check"></i>
              </button>
              <button class="btn btn--secondary btn--sm" onclick="rejectProperty(${property.id})">
                <i class="fas fa-times"></i>
              </button>
            ` : ''}
            <button class="btn btn--outline btn--sm" onclick="viewPropertyDetails(${property.id})">
              <i class="fas fa-eye"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Property Approval Actions
function approveProperty(propertyId) {
  if (!SessionManager.isAdmin()) {
    showToast('Access denied. Admin login required.', 'error');
    return;
  }
  
  const property = appData.properties.find(p => p.id === propertyId);
  if (property) {
    property.approvalStatus = 'approved';
    property.approvedDate = new Date().toISOString().split('T')[0];
    
    // Update analytics
    appData.analytics.approvedProperties++;
    appData.analytics.pendingProperties--;
    
    renderAdminPropertiesTable();
    showToast('Property approved successfully!', 'success');
  }
}

function rejectProperty(propertyId) {
  if (!SessionManager.isAdmin()) {
    showToast('Access denied. Admin login required.', 'error');
    return;
  }
  
  const reason = prompt('Please enter rejection reason:');
  if (reason) {
    const property = appData.properties.find(p => p.id === propertyId);
    if (property) {
      property.approvalStatus = 'rejected';
      property.rejectedDate = new Date().toISOString().split('T')[0];
      property.rejectionReason = reason;
      
      // Update analytics
      appData.analytics.rejectedProperties++;
      appData.analytics.pendingProperties--;
      
      renderAdminPropertiesTable();
      showToast('Property rejected successfully!', 'success');
    }
  }
}

function viewPropertyDetails(propertyId) {
  const property = appData.properties.find(p => p.id === propertyId);
  if (property) {
    openPropertyModal(property);
  }
}

// Populate Dropdowns
function populateSelect(selectElement, options) {
  if (!selectElement) return;
  
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });
}

function populateSearchDropdowns() {
  const searchLocation = document.getElementById('searchLocation');
  const searchType = document.getElementById('searchType');
  
  if (searchLocation) {
    searchLocation.innerHTML = '<option value="">Select Location</option>';
    populateSelect(searchLocation, appData.cities);
  }
  if (searchType) {
    searchType.innerHTML = '<option value="">Property Type</option>';
    populateSelect(searchType, appData.propertyTypes);
  }
}

function populateFilterDropdowns() {
  const filterLocation = document.getElementById('filterLocation');
  const filterType = document.getElementById('filterType');
  
  if (filterLocation) {
    filterLocation.innerHTML = '<option value="">All Locations</option>';
    populateSelect(filterLocation, appData.cities);
  }
  if (filterType) {
    filterType.innerHTML = '<option value="">All Types</option>';
    populateSelect(filterType, appData.propertyTypes);
  }
}

// Search Functionality
function performSearch() {
  const searchLocation = document.getElementById('searchLocation');
  const searchType = document.getElementById('searchType');
  const searchBudget = document.getElementById('searchBudget');
  const activeTab = document.querySelector('.search-tab.active');
  
  const location = searchLocation ? searchLocation.value : '';
  const type = searchType ? searchType.value : '';
  const budget = searchBudget ? searchBudget.value : '';
  const forType = activeTab ? (activeTab.dataset.type === 'buy' ? 'Buy' : 'Rent') : '';
  
  let results = appData.properties.filter(p => p.approvalStatus === 'approved');
  
  if (location) results = results.filter(p => p.location.toLowerCase().includes(location.toLowerCase()));
  if (type) results = results.filter(p => p.type === type);
  if (forType) results = results.filter(p => p.forType === forType);
  
  // Budget filtering
  if (budget) {
    const [min, max] = budget.split('-').map(Number);
    if (max) {
      results = results.filter(p => p.price >= min * 100000 && p.price <= max * 100000);
    } else {
      results = results.filter(p => p.price >= min * 100000);
    }
  }
  
  renderProperties(results, 'allProperties');
  showPage('properties');
  showToast(`Found ${results.length} properties matching your criteria`, 'success');
}

// Filter Properties
function filterProperties() {
  const filterLocation = document.getElementById('filterLocation');
  const filterType = document.getElementById('filterType');
  
  const location = filterLocation ? filterLocation.value : '';
  const type = filterType ? filterType.value : '';
  
  let results = appData.properties.filter(p => p.approvalStatus === 'approved');
  
  if (location) results = results.filter(p => p.location.toLowerCase().includes(location.toLowerCase()));
  if (type) results = results.filter(p => p.type === type);
  
  renderProperties(results, 'allProperties');
  
  // Update results count
  const resultsCount = document.getElementById('resultsCount');
  if (resultsCount) {
    resultsCount.textContent = `Showing ${results.length} properties`;
  }
}

// FIXED: Post Property Function
function submitProperty() {
  const currentUser = SessionManager.getCurrentUser();
  if (!currentUser) {
    showToast('Please login to post a property', 'error');
    return;
  }

  // Get form elements
  const form = document.getElementById('propertyForm');
  if (!form) {
    showToast('Property form not found', 'error');
    return;
  }

  const formData = new FormData(form);

  // Validate required fields
  const requiredFields = ['title', 'type', 'category', 'forType', 'location', 'price', 'area', 'agent', 'phone', 'email'];
  for (const field of requiredFields) {
    if (!formData.get(field)) {
      showToast(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field`, 'error');
      return;
    }
  }

  // Generate unique ID
  const newId = Math.max(...appData.properties.map(p => p.id)) + 1;

  // Create new property object
  const newProperty = {
    id: newId,
    title: formData.get('title'),
    type: formData.get('type'),
    category: formData.get('category'),
    price: parseFloat(formData.get('price')),
    location: formData.get('location'),
    area: parseInt(formData.get('area')),
    furnishing: formData.get('furnishing') || 'Unfurnished',
    parking: formData.get('parking') || '1 Covered',
    age: formData.get('age') || 'New',
    status: formData.get('status') || 'Ready to move',
    forType: formData.get('forType'),
    description: formData.get('description') || '',
    agent: formData.get('agent'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    approvalStatus: 'pending',
    postedBy: currentUser.id,
    postedDate: new Date().toISOString().split('T')[0],
    featured: false,
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'],
    amenities: formData.getAll('amenities') || ['Security', 'Power Backup']
  };

  // Add to properties array
  appData.properties.push(newProperty);
  
  // Update analytics
  appData.analytics.totalProperties++;
  appData.analytics.pendingProperties++;

  // Reset form
  form.reset();

  // Show success message
  showToast('Property submitted successfully! It will be reviewed by our admin team before going live.', 'success');

  // If current user is admin, refresh admin tables
  if (SessionManager.isAdmin()) {
    setTimeout(() => {
      renderAdminPropertiesTable();
    }, 100);
  }
}

// Close Modal Function
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Open Modal Function
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing RVG Properties');
  
  // Initialize session management
  SessionManager.updateUIBasedOnRole();
  
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.dataset.page;
      console.log('Navigation clicked:', page);
      if (page) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        showPage(page);
      }
    });
  });
  
  // Logo click to go home
  const logoElement = document.querySelector('.nav-logo');
  if (logoElement) {
    logoElement.addEventListener('click', () => {
      showPage('home');
    });
    logoElement.style.cursor = 'pointer';
  }
  
  // Login/Logout buttons
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Login button clicked');
      openModal('loginModal');
    });
  }
  
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      SessionManager.logout();
    });
  }
  
  // Register button
  const registerBtn = document.getElementById('registerBtn');
  if (registerBtn) {
    registerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('registerModal');
    });
  }
  
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Login form submitted');
      
      const emailEl = document.getElementById('loginEmail');
      const passwordEl = document.getElementById('loginPassword');
      
      if (!emailEl || !passwordEl) {
        showToast('Login form elements not found', 'error');
        return;
      }
      
      const email = emailEl.value;
      const password = passwordEl.value;
      
      if (authenticate(email, password)) {
        closeModal('loginModal');
        
        const user = SessionManager.getCurrentUser();
        showToast(`Welcome back, ${user.name}!`, 'success');
        
        if (user.role === 'admin') {
          showPage('admin-dashboard');
        } else {
          showPage('home');
        }
        
        // Clear form
        emailEl.value = '';
        passwordEl.value = '';
      } else {
        showToast('Invalid email or password', 'error');
      }
    });
  }
  
  // Register form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameEl = document.getElementById('registerName');
      const emailEl = document.getElementById('registerEmail');
      const phoneEl = document.getElementById('registerPhone');
      const passwordEl = document.getElementById('registerPassword');
      
      if (!nameEl || !emailEl || !phoneEl || !passwordEl) {
        showToast('Registration form elements not found', 'error');
        return;
      }
      
      const name = nameEl.value;
      const email = emailEl.value;
      const phone = phoneEl.value;
      const password = passwordEl.value;
      
      // Check if user already exists
      const existingUser = appData.users.find(u => u.email === email);
      if (existingUser) {
        showToast('User with this email already exists', 'error');
        return;
      }
      
      // Create new user
      const newUser = {
        id: 'user' + (appData.users.length + 1),
        email: email,
        password: password,
        name: name,
        phone: phone,
        role: 'user',
        registrationDate: new Date().toISOString().split('T')[0],
        lastLogin: new Date().toISOString().split('T')[0],
        status: 'active',
        propertiesPosted: 0
      };
      
      appData.users.push(newUser);
      appData.analytics.totalUsers++;
      
      closeModal('registerModal');
      showToast('Registration successful! Please login to continue.', 'success');
      
      // Clear form
      registerForm.reset();
      
      // Open login modal
      setTimeout(() => {
        openModal('loginModal');
      }, 1000);
    });
  }
  
  // Modal close buttons and overlays
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    }
    
    // Close modal when clicking outside
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });
  
  // Search functionality
  const heroSearchForm = document.getElementById('heroSearchForm');
  if (heroSearchForm) {
    heroSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Search form submitted');
      performSearch();
    });
  }
  
  // Search tabs
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
  
  // Property filters
  const applyFiltersBtn = document.getElementById('applyFilters');
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', (e) => {
      e.preventDefault();
      filterProperties();
    });
  }
  
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Reset all filter inputs
      const filterInputs = document.querySelectorAll('#filterLocation, #filterType');
      filterInputs.forEach(input => input.value = '');
      
      // Show all approved properties
      const approvedProperties = appData.properties.filter(p => p.approvalStatus === 'approved');
      renderProperties(approvedProperties, 'allProperties');
      
      const resultsCount = document.getElementById('resultsCount');
      if (resultsCount) {
        resultsCount.textContent = `Showing ${approvedProperties.length} properties`;
      }
    });
  }
  
  // Admin property filter
  const adminPropertyFilter = document.getElementById('adminPropertyFilter');
  if (adminPropertyFilter) {
    adminPropertyFilter.addEventListener('change', (e) => {
      renderAdminPropertiesTable(e.target.value);
    });
  }
  
  // FIXED: Post property form
  const propertyForm = document.getElementById('propertyForm');
  if (propertyForm) {
    propertyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Post property form submitted');
      submitProperty();
    });
  }
  
  // Sort properties
  const sortProperties = document.getElementById('sortProperties');
  if (sortProperties) {
    sortProperties.addEventListener('change', (e) => {
      const sortValue = e.target.value;
      let properties = appData.properties.filter(p => p.approvalStatus === 'approved');
      
      switch(sortValue) {
        case 'price-low':
          properties.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          properties.sort((a, b) => b.price - a.price);
          break;
        case 'area':
          properties.sort((a, b) => b.area - a.area);
          break;
        case 'newest':
        default:
          properties.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
          break;
      }
      
      renderProperties(properties, 'allProperties');
    });
  }
  
  // Budget range slider
  const budgetRange = document.getElementById('budgetRange');
  const budgetValue = document.getElementById('budgetValue');
  if (budgetRange && budgetValue) {
    budgetRange.addEventListener('input', (e) => {
      const value = e.target.value;
      budgetValue.textContent = `₹${value}L`;
    });
  }
  
  // Initialize home page
  console.log('Initializing home page');
  showPage('home');
  
  console.log('RVG Properties initialization complete');
});

// Additional CSS for toast notifications (add to your CSS file)
const additionalCSS = `
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #28a745;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10000;
  min-width: 300px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transform: translateX(400px);
  transition: transform 0.3s ease;
}

.toast:not(.hidden) {
  transform: translateX(0);
}

.toast.error {
  background: #dc3545;
}

.toast-message {
  flex: 1;
}

.toast-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  margin-left: 0.5rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: capitalize;
}

.status-approved {
  background: #d4edda;
  color: #155724;
}

.status-pending {
  background: #fff3cd;
  color: #856404;
}

.status-rejected {
  background: #f8d7da;
  color: #721c24;
}

.no-properties {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
}
`;

// Add the CSS to the document
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = additionalCSS;
  document.head.appendChild(style);
}
