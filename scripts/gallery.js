let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length;

    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = 0; 
    } else if (currentSlide >= totalSlides) {
        currentSlide = totalSlides - 1; 
    }

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}
document.querySelector('.logout').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = 'auth.html';
});
