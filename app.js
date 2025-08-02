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
  "cities": ["Mumbai", "Bangalore", "Delhi", "Gurgaon", "Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Noida", "Greater Noida", "Faridabad", "Ghaziabad"],
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

// Current page state
let currentPage = 'home';

// Session Management & Security
class SessionManager {
  static setCurrentUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    this.updateUIBasedOnRole();
  }

  static getCurrentUser() {
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  static isAdmin() {
    const user = this.getCurrentUser();
    return user && user.role === 'admin';
  }

  static logout() {
    sessionStorage.removeItem('currentUser');
    this.updateUIBasedOnRole();
    showPage('home');
    showToast('Logged out successfully', 'success');
  }

  static updateUIBasedOnRole() {
    const isAdmin = this.isAdmin();
    const currentUser = this.getCurrentUser();
    
    // Show/hide admin elements
    const adminElements = document.querySelectorAll('.admin-only');
    adminElements.forEach(element => {
      if (isAdmin) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });

    // Update login/logout buttons and user info
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userInfo = document.getElementById('userInfo');

    if (currentUser) {
      if (loginBtn) loginBtn.classList.add('hidden');
      if (logoutBtn) logoutBtn.classList.remove('hidden');
      if (userInfo) {
        userInfo.classList.remove('hidden');
        userInfo.textContent = `Welcome, ${currentUser.name}`;
      }
    } else {
      if (loginBtn) loginBtn.classList.remove('hidden');
      if (logoutBtn) logoutBtn.classList.add('hidden');
      if (userInfo) userInfo.classList.add('hidden');
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
  const targetPage = document.getElementById(pageId + 'Page');
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
  const toast = document.getElementById('toast');
  if (!toast) return;
  
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
    return `â¹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `â¹${(price / 100000).toFixed(1)} L`;
  } else {
    return `â¹${price.toLocaleString()}`;
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
  const propertyTypeSelect = document.getElementById('propertyType');
  const propertyCategorySelect = document.getElementById('propertyCategory');
  const propertyLocationSelect = document.getElementById('propertyLocation');
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
  if (propertyLocationSelect) {
    propertyLocationSelect.innerHTML = '<option value="">Select City</option>';
    populateSelect(propertyLocationSelect, appData.cities);
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
  const modalTitle = document.getElementById('modalPropertyTitle');
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
        <h4 style="margin-bottom: 1rem; color: var(--color-primary-modern);">Property Details</h4>
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
        <h4 style="margin-bottom: 1rem; color: var(--color-primary-modern);">Contact Details</h4>
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
      <h4 style="margin-bottom: 1rem; color: var(--color-primary-modern);">Description</h4>
      <p style="line-height: 1.6; color: var(--color-gray);">${property.description}</p>
    </div>
    
    <div>
      <h4 style="margin-bottom: 1rem; color: var(--color-primary-modern);">Amenities</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${property.amenities.map(amenity => `<span style="background: var(--color-light-gray); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${amenity}</span>`).join('')}
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
  const container = document.getElementById('testimonialsGrid');
  if (!container) return;
  
  container.innerHTML = '';
  
  testimonials.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    const stars = 'â'.repeat(testimonial.rating) + 'â'.repeat(5 - testimonial.rating);
    
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
  const dashTotalProperties = document.getElementById('dashTotalProperties');
  const dashPendingProperties = document.getElementById('dashPendingProperties');
  const dashTotalUsers = document.getElementById('dashTotalUsers');
  const dashPendingInquiries = document.getElementById('dashPendingInquiries');
  
  if (dashTotalProperties) dashTotalProperties.textContent = appData.analytics.totalProperties;
  if (dashPendingProperties) dashPendingProperties.textContent = appData.analytics.pendingProperties;
  if (dashTotalUsers) dashTotalUsers.textContent = appData.analytics.totalUsers;
  if (dashPendingInquiries) dashPendingInquiries.textContent = appData.analytics.pendingInquiries;
  
  // Load recent activities
  loadRecentActivities();
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
      <div style="width: 40px; height: 40px; background: var(--color-primary-modern); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white;">
        <i class="${activity.icon}"></i>
      </div>
      <div style="flex: 1;">
        <div style="font-weight: 500; margin-bottom: 0.25rem;">${activity.message}</div>
        <div style="font-size: 0.9rem; color: var(--color-gray);">${activity.time}</div>
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
          <div style="font-size: 0.9rem; color: var(--color-gray);">ID: ${property.id}</div>
        </td>
        <td>${property.type}</td>
        <td>${formatPrice(property.price)}</td>
        <td>${property.location}</td>
        <td>${user ? user.name : 'Unknown'}</td>
        <td><span class="status-badge ${statusClass}">${property.approvalStatus}</span></td>
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
  const searchCity = document.getElementById('searchCity');
  const searchType = document.getElementById('searchType');
  const searchCategory = document.getElementById('searchCategory');
  
  if (searchCity) {
    searchCity.innerHTML = '<option value="">Select City</option>';
    populateSelect(searchCity, appData.cities);
  }
  if (searchType) {
    searchType.innerHTML = '<option value="">Property Type</option>';
    populateSelect(searchType, appData.propertyTypes);
  }
  if (searchCategory) {
    searchCategory.innerHTML = '<option value="">Category</option>';
    populateSelect(searchCategory, appData.categories);
  }
}

function populateFilterDropdowns() {
  const filterCity = document.getElementById('filterCity');
  const filterType = document.getElementById('filterType');
  
  if (filterCity) {
    filterCity.innerHTML = '<option value="">All Cities</option>';
    populateSelect(filterCity, appData.cities);
  }
  if (filterType) {
    filterType.innerHTML = '<option value="">All Types</option>';
    populateSelect(filterType, appData.propertyTypes);
  }
}

// Search Functionality
function performSearch() {
  const searchCity = document.getElementById('searchCity');
  const searchType = document.getElementById('searchType');
  const searchCategory = document.getElementById('searchCategory');
  const activeTab = document.querySelector('.search-tab.active');
  
  const city = searchCity ? searchCity.value : '';
  const type = searchType ? searchType.value : '';
  const category = searchCategory ? searchCategory.value : '';
  const forType = activeTab ? (activeTab.dataset.type === 'buy' ? 'Buy' : 'Rent') : '';
  
  let results = appData.properties.filter(p => p.approvalStatus === 'approved');
  
  if (city) results = results.filter(p => p.location.includes(city));
  if (type) results = results.filter(p => p.type === type);
  if (category) results = results.filter(p => p.category === category);
  if (forType) results = results.filter(p => p.forType === forType);
  
  renderProperties(results, 'allProperties');
  showPage('properties');
  showToast(`Found ${results.length} properties matching your criteria`, 'success');
}

// Filter Properties
function filterProperties() {
  const filterCity = document.getElementById('filterCity');
  const filterType = document.getElementById('filterType');
  const filterForType = document.getElementById('filterForType');
  
  const city = filterCity ? filterCity.value : '';
  const type = filterType ? filterType.value : '';
  const forType = filterForType ? filterForType.value : '';
  
  let results = appData.properties.filter(p => p.approvalStatus === 'approved');
  
  if (city) results = results.filter(p => p.location.includes(city));
  if (type) results = results.filter(p => p.type === type);
  if (forType) results = results.filter(p => p.forType === forType);
  
  renderProperties(results, 'allProperties');
}

// Post Property
function submitProperty() {
  const titleEl = document.getElementById('propertyTitle');
  const typeEl = document.getElementById('propertyType');
  const categoryEl = document.getElementById('propertyCategory');
  const priceEl = document.getElementById('propertyPrice');
  const locationEl = document.getElementById('propertyLocation');
  const areaEl = document.getElementById('propertyArea');
  const furnishingEl = document.getElementById('propertyFurnishing');
  const forTypeEl = document.getElementById('propertyForType');
  const descriptionEl = document.getElementById('propertyDescription');
  const contactNameEl = document.getElementById('contactName');
  const phoneEl = document.getElementById('contactPhone');
  const emailEl = document.getElementById('contactEmail');
  
  if (!titleEl || !typeEl || !categoryEl || !priceEl || !locationEl || !areaEl || 
      !furnishingEl || !forTypeEl || !descriptionEl || !contactNameEl || !phoneEl || !emailEl) {
    showToast('Please fill all required fields', 'error');
    return;
  }
  
  const newProperty = {
    id: appData.properties.length + 1,
    title: titleEl.value,
    type: typeEl.value,
    category: categoryEl.value,
    price: parseFloat(priceEl.value),
    location: locationEl.value,
    area: parseInt(areaEl.value),
    furnishing: furnishingEl.value,
    forType: forTypeEl.value,
    description: descriptionEl.value,
    agent: contactNameEl.value,
    phone: phoneEl.value,
    email: emailEl.value,
    approvalStatus: 'pending',
    postedBy: SessionManager.getCurrentUser()?.id || 'guest',
    postedDate: new Date().toISOString().split('T')[0],
    featured: false,
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'],
    amenities: ['Security', 'Power Backup'],
    parking: '1 Covered',
    age: 'New',
    status: 'Ready to move'
  };
  
  appData.properties.push(newProperty);
  showToast('Property submitted successfully! It will be reviewed by our team.', 'success');
  
  // Reset form
  const form = document.getElementById('postPropertyForm');
  if (form) form.reset();
}

// Close Modal Function
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
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
      const loginModal = document.getElementById('loginModal');
      if (loginModal) {
        loginModal.classList.remove('hidden');
      }
    });
  }
  
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      SessionManager.logout();
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
        const loginModal = document.getElementById('loginModal');
        if (loginModal) loginModal.classList.add('hidden');
        
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
  
  // Modal close buttons and overlays
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal-overlay')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        modal.classList.add('hidden');
      }
    }
  });
  
  // Search functionality
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Search button clicked');
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
  ['filterCity', 'filterType', 'filterForType'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('change', filterProperties);
    }
  });
  
  // Admin property filter
  const adminPropertyFilter = document.getElementById('adminPropertyFilter');
  if (adminPropertyFilter) {
    adminPropertyFilter.addEventListener('change', (e) => {
      renderAdminPropertiesTable(e.target.value);
    });
  }
  
  // Post property form
  const postPropertyForm = document.getElementById('postPropertyForm');
  if (postPropertyForm) {
    postPropertyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Post property form submitted');
      submitProperty();
    });
  }
  
  // Contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for your message! We will get back to you soon.', 'success');
      e.target.reset();
    });
  }
  
  // Initialize home page
  console.log('Initializing home page');
  showPage('home');
  
  console.log('RVG Properties initialization complete');
});