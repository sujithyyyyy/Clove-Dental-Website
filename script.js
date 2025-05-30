
// Initialize Lucide icons
function initializeLucideIcons() {
  if (typeof lucide !== 'undefined') {
      lucide.createIcons();
  }
}

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
      mobileMenu.classList.toggle('show');
  }
}

// Form handlers
function handleHeroForm(event) {
  event.preventDefault();
  console.log('Hero form submitted');
  
  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get('name') || event.target.querySelector('input[type="text"]').value;
  const phone = formData.get('phone') || event.target.querySelector('input[type="tel"]').value;
  const captcha = formData.get('captcha') || event.target.querySelectorAll('input[type="text"]')[1].value;
  
  // Basic validation
  if (!name || !phone || !captcha) {
      alert('Please fill in all fields.');
      return;
  }
  
  if (captcha !== '1514') {
      alert('Captcha is incorrect. Please try again.');
      return;
  }
  
  alert('Thank you for your interest! We will contact you soon.');
  event.target.reset();
}

function handleAppointmentForm(event) {
  event.preventDefault();
  console.log('Appointment form submitted');
  
  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get('name') || event.target.querySelector('input[type="text"]').value;
  const phone = formData.get('phone') || event.target.querySelector('input[type="tel"]').value;
  const captcha = formData.get('captcha') || event.target.querySelectorAll('input[type="text"]')[1].value;
  
  // Basic validation
  if (!name || !phone || !captcha) {
      alert('Please fill in all fields.');
      return;
  }
  
  if (captcha !== '1514') {
      alert('Captcha is incorrect. Please enter 1514.');
      return;
  }
  
  alert('Appointment request submitted successfully! We will contact you shortly.');
  event.target.reset();
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const target = document.querySelector(targetId);
          
          if (target) {
              const headerHeight = document.querySelector('.header').offsetHeight || 0;
              const targetPosition = target.offsetTop - headerHeight;
              
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              const mobileMenu = document.getElementById('mobileMenu');
              if (mobileMenu && mobileMenu.classList.contains('show')) {
                  mobileMenu.classList.remove('show');
              }
          }
      });
  });
}

// Close mobile menu when clicking on nav links
function initializeMobileMenuClose() {
  document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => {
          const mobileMenu = document.getElementById('mobileMenu');
          if (mobileMenu) {
              mobileMenu.classList.remove('show');
          }
      });
  });
}

// Initialize form event listeners
function initializeFormEventListeners() {
  // Hero form
  const heroForms = document.querySelectorAll('form[onsubmit*="handleHeroForm"]');
  heroForms.forEach(form => {
      form.removeAttribute('onsubmit');
      form.addEventListener('submit', handleHeroForm);
  });
  
  // Appointment form
  const appointmentForms = document.querySelectorAll('form[onsubmit*="handleAppointmentForm"]');
  appointmentForms.forEach(form => {
      form.removeAttribute('onsubmit');
      form.addEventListener('submit', handleAppointmentForm);
  });
}

// Initialize mobile menu button
function initializeMobileMenuButton() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
      mobileMenuBtn.removeAttribute('onclick');
      mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
}

// Add scroll effect to header
function initializeHeaderScrollEffect() {
  const header = document.querySelector('.header');
  if (header) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 0) {
              header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
          } else {
              header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
          }
      });
  }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing...');
  
  // Initialize Lucide icons
  initializeLucideIcons();
  
  // Initialize smooth scrolling
  initializeSmoothScrolling();
  
  // Initialize mobile menu functionality
  initializeMobileMenuClose();
  initializeMobileMenuButton();
  
  // Initialize form event listeners
  initializeFormEventListeners();
  
  // Initialize header scroll effect
  initializeHeaderScrollEffect();
  
  console.log('All functionality initialized successfully');
});

// Re-initialize icons if Lucide loads after DOM
window.addEventListener('load', function() {
  setTimeout(initializeLucideIcons, 100);
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
  // Close mobile menu on resize to larger screen
  if (window.innerWidth >= 768) {
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu && mobileMenu.classList.contains('show')) {
          mobileMenu.classList.remove('show');
      }
  }
});