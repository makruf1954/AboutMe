// Animasi fade-in saat scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
