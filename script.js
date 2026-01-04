// Chef's Consulting - Enhanced Interactions
// Rich animations, staggered reveals, smooth scrolling

document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.split-layout, .service-card, .process-step, .bio-content, .contact-wrapper'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Stagger service card animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Stagger process step animations
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.15}s`;
    });

    // Form submission handling
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const button = form.querySelector('.cta');
            const originalText = button.textContent;

            // Animate button
            button.textContent = '✓ Mensaje enviado';
            button.style.background = 'var(--sage)';
            button.style.transform = 'scale(0.98)';

            setTimeout(() => {
                form.reset();
                button.textContent = originalText;
                button.style.background = '';
                button.style.transform = '';
            }, 3000);
        });
    }

    // Smooth scroll for anchor links
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

    // Add parallax effect to hero
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const hero = document.querySelector('.hero');
                if (hero) {
                    const scrolled = window.pageYOffset;
                    const rect = hero.getBoundingClientRect();

                    if (rect.bottom > 0) {
                        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    console.log('🍽️ Chef\'s Consulting - Enhanced design loaded');
});
