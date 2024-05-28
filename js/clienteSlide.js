let currentSlide = 0;
const slides = document.querySelector('.slides-Clientes');
const totalSlides = document.querySelectorAll('.slideCliente').length;

function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
