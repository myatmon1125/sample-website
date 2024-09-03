let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    if (slideIndex < slides.length) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex].classList.add('active');
        slideIndex++;
        setTimeout(showSlides, 10000); // Change image every 10 seconds
    }
}

showSlides();
