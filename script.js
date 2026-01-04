// Chef's Table – Minimal Interactions Only
// No parallax. No counters. No scroll effects.
// Just subtle reveals.

document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for subtle fade-in
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe content blocks
    document.querySelectorAll('.content-block').forEach(block => {
        observer.observe(block);
    });

    // Form submission (prevent default, show feedback)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const button = form.querySelector('.cta');
            const originalText = button.textContent;

            button.textContent = 'Message Received';
            button.style.opacity = '0.7';

            setTimeout(() => {
                form.reset();
                button.textContent = originalText;
                button.style.opacity = '1';
            }, 2500);
        });
    }
});

console.log('Chef\'s Table style loaded.');
