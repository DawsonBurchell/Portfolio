// Parallax & Fade
window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('visible');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        if (form.checkValidity()) {
            alert('Message sent! (Demo)');
            form.reset();
        }
    });
}

// Carousel Auto-Scroll
const carousel = document.querySelector('.carousel');
if (carousel) {
    setInterval(() => {
        carousel.scrollLeft += 320;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) carousel.scrollLeft = 0;
    }, 3000);
}