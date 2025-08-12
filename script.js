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
// Efek typing di hero section
const typingText = document.getElementById('typing-text');
const typingSubtext = document.getElementById('typing-subtext');

const textLines = [
    "Halo, Saya Naifi 👋",
    "Seorang Developer & Creator Digital"
];

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textLines[lineIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
            if (lineIndex === 0) {
                // pindah ke subtext
                setTimeout(() => {
                    typingSubtext.textContent = textLines[1];
                }, 500);
                return; // stop setelah baris pertama selesai
            }
        }
    }

    setTimeout(typeEffect, speed);
}

// Mulai efek setelah halaman load
window.addEventListener('load', () => {
    setTimeout(typeEffect, 500);
});
