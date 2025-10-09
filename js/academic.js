// Academic Site - Minimal JavaScript
// Smooth scrolling and basic interactions

document.addEventListener('DOMContentLoaded', function() {
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

    // Eye element follows cursor subtly
    const eye = document.querySelector('.brand-eye');
    if (eye) {
        const eyeInner = eye.querySelector('.eye-inner');

        document.addEventListener('mousemove', (e) => {
            const rect = eye.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
            const distance = Math.min(8, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 50);

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            eyeInner.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
    }

    // Add active class to current nav item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
