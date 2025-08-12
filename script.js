// Fade-in scroll animation dengan delay
const fadeElements = document.querySelectorAll('.fade-in');

function checkScroll() {
    fadeElements.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            setTimeout(() => {
                el.classList.add('show');
            }, i * 150); // delay antar elemen
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
