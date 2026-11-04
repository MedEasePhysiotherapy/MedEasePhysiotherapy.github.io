// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!firstName || !lastName || !phone || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid phone number');
                return;
            }
            
            // Create WhatsApp message
            const whatsappMessage = `Hi Dr. Nishtha,\n\nNew Contact Form Submission:\n\nName: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}\n\nBest regards,\n${firstName}`;
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp
            window.open(`https://wa.me/+919769620514?text=${encodedMessage}`, '_blank');
            
            // Show success message
            alert('Thank you for your message! You will be redirected to WhatsApp to send your inquiry.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Apply fade-in animation to service cards and other elements
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all images are always visible (don't animate images directly)
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
        img.style.opacity = '1';
        img.style.display = 'block';
    });
    
    // Apply animations to containers, not images
    const animateElements = document.querySelectorAll('.service-card, .feature-card, .therapist-card, .service-item');
    animateElements.forEach(element => {
        element.classList.add('animate-element');
        observer.observe(element);
    });
});

// Clinic timings: highlight today's row and show open/closed status (IST)
document.addEventListener('DOMContentLoaded', function() {
    const schedule = document.querySelector('.visit-schedule');
    const status = document.getElementById('visitStatus');
    if (!schedule || !status) return;

    const OPEN_MINUTES = 17 * 60;   // 5:00 PM
    const CLOSE_MINUTES = 21 * 60;  // 9:00 PM

    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hourCycle: 'h23'
    }).formatToParts(new Date());

    const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const weekday = weekdayMap[parts.find(p => p.type === 'weekday').value];
    const minutes = parseInt(parts.find(p => p.type === 'hour').value, 10) * 60 +
                    parseInt(parts.find(p => p.type === 'minute').value, 10);

    const todayRow = schedule.querySelector(`li[data-day="${weekday}"]`);
    if (todayRow) todayRow.classList.add('is-today');

    const isOpen = weekday !== 0 && minutes >= OPEN_MINUTES && minutes < CLOSE_MINUTES;
    status.textContent = isOpen ? 'Open now' : 'Closed now';
    status.classList.add(isOpen ? 'is-open' : 'is-closed');
});

// Phone number formatting
function formatPhoneNumber(input) {
    const phoneNumber = input.value.replace(/\D/g, '');
    let formattedNumber = phoneNumber;
    
    if (phoneNumber.length >= 6) {
        formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    } else if (phoneNumber.length >= 3) {
        formattedNumber = phoneNumber.replace(/(\d{3})(\d{0,3})/, '$1-$2');
    }
    
    input.value = formattedNumber;
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            formatPhoneNumber(this);
        });
    });
});

// Loading animation for external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const loader = document.createElement('div');
        loader.innerHTML = 'Loading...';
        loader.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            z-index: 9999;
            font-family: inherit;
        `;
        document.body.appendChild(loader);
        
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 1000);
    });
});

// Service card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Image loading - simplified approach
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all images are visible (remove any opacity issues)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '1';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Add focus styles for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, [tabindex]');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #007bff';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});
