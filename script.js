// ============================================================================
// PORTFOLIO JAVASCRIPT
// ============================================================================

// ============================================================================
// DARK MODE TOGGLE
// ============================================================================

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Check for saved theme preference or default to 'light' mode
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('class', savedTheme === 'dark' ? 'dark' : '');

// Update icon visibility
function updateThemeIcon() {
    if (html.classList.contains('dark')) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

updateThemeIcon();

// Theme toggle listener
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
});

// ============================================================================
// MOBILE MENU TOGGLE
// ============================================================================

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ============================================================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// ============================================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class
            if (entry.target.classList.contains('fade-in')) {
                entry.target.style.animation = 'fadeIn 0.8s ease-in-out forwards';
            } else if (entry.target.classList.contains('fade-in-left')) {
                entry.target.style.animation = 'fadeInLeft 0.8s ease-in-out forwards';
            } else if (entry.target.classList.contains('fade-in-right')) {
                entry.target.style.animation = 'fadeInRight 0.8s ease-in-out forwards';
            } else if (entry.target.classList.contains('slide-in-left')) {
                entry.target.style.animation = 'slideInLeft 0.8s ease-in-out forwards';
            } else if (entry.target.classList.contains('slide-in-right')) {
                entry.target.style.animation = 'slideInRight 0.8s ease-in-out forwards';
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// ============================================================================
// FORM SUBMISSION
// ============================================================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Validate form
        const nameInput = this.querySelector('input[placeholder="Your Name"]');
        const emailInput = this.querySelector('input[placeholder="your.email@example.com"]');
        const subjectInput = this.querySelector('input[placeholder="Subject"]');
        const messageInput = this.querySelector('textarea');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !subjectInput.value.trim() || !messageInput.value.trim()) {
            showNotification('Please fill all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // Show success message (for demo purposes)
        showNotification('Message sent successfully! I will reply soon.', 'success');

        // Reset form
        this.reset();

        // Log data (in production, you would send this to a server)
        console.log('Form Data:', {
            name: nameInput.value,
            email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value,
            timestamp: new Date().toISOString()
        });
    });
}

// ============================================================================
// NOTIFICATION SYSTEM
// ============================================================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg text-white font-semibold shadow-lg z-50 transition-all duration-300 ${
        type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    }`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ============================================================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'dark:text-blue-400');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-blue-600', 'dark:text-blue-400');
        }
    });
});

// ============================================================================
// PARALLAX EFFECT (Optional)
// ============================================================================

window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const scrollPercent = window.scrollY / document.documentElement.scrollHeight;

    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.5;
        element.style.transform = `translateY(${scrollPercent * 100 * speed}px)`;
    });
});

// ============================================================================
// TYPING EFFECT (Optional for heading)
// ============================================================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// ============================================================================
// SKILL PROGRESS ANIMATION
// ============================================================================

const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.classList.add('fade-in');
});

// ============================================================================
// KEYBOARD NAVIGATION
// ============================================================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenu.classList.add('hidden');
    }

    // Navigation shortcuts
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'k':
                e.preventDefault();
                // Could open a search or command palette here
                break;
        }
    }
});

// ============================================================================
// LOAD MORE PROJECTS (Example)
// ============================================================================

function loadMoreProjects() {
    // This would fetch more projects from a server
    console.log('Loading more projects...');
    showNotification('More projects coming soon!', 'info');
}

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================

if ('PerformanceObserver' in window) {
    try {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.duration}ms`);
            }
        });

        perfObserver.observe({ entryTypes: ['navigation', 'resource'] });
    } catch (e) {
        console.log('Performance monitoring not available');
    }
}

// ============================================================================
// PAGE LOAD ANIMATIONS
// ============================================================================

window.addEventListener('load', () => {
    // Trigger animations on page load
    document.querySelectorAll('[class*="fade-in"], [class*="slide-in"]').forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = el.className.includes('fade-in') ? 
                'fadeIn 0.8s ease-in-out' : 'slideInLeft 0.8s ease-in-out';
        }, index * 50);
    });
});

// ============================================================================
// RESPONSIVE IMAGE LOADING
// ============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ============================================================================
// CONSOLE GREETING
// ============================================================================

console.log(`
    %c Welcome to Jai Kumar's Portfolio 
    %c Full Stack Java Developer | Modern Web Development
    %c Designed with ❤️ using HTML, CSS & JavaScript
`, 
'font-size: 24px; font-weight: bold; color: #3b82f6;',
'font-size: 14px; color: #8b5cf6;',
'font-size: 12px; color: #10b981;'
);

// ============================================================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================================================

// Ensure proper focus management
document.addEventListener('focusin', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        e.target.parentElement.classList.add('ring-2', 'ring-blue-600');
    }
});

document.addEventListener('focusout', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        e.target.parentElement.classList.remove('ring-2', 'ring-blue-600');
    }
});

// ============================================================================
// READY STATE LOGGING
// ============================================================================

console.log(`Portfolio loaded successfully at ${new Date().toLocaleTimeString()}`);