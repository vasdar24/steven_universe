let currentSlide = 0;
const slides = document.querySelectorAll('.gallery-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateSlide() {
    
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.gallery-slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
}

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }
    updateSlide();
}


updateSlide();

document.querySelector('.logout').addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = 'auth.html';
});
