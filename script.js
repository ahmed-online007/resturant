window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Create floating particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particle.style.animationDuration = (3 + Math.random() * 4) + 's';
    particlesContainer.appendChild(particle);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.feature-card, .dish-card, .review-card, .about-content, .about-image').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for navigation links
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

// Add stagger effect to cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
});

document.querySelectorAll('.dish-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.review-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroParallax = document.querySelector('.hero-bg');
    if (heroParallax) {
        heroParallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});