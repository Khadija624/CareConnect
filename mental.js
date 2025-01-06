
function submitFeedback() {
    const feedback = document.getElementById('feedbackInput').value;
    if (feedback.trim()) {
        alert('Thank you for your feedback!');
        document.getElementById('feedbackInput').value = '';
    } else {
        alert('Please enter your feedback before submitting.');
    }
}

let currentIndex = 0;

function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.video-container');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = currentIndex * -100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function playVideo(thumbnail, videoId) {
    // Hide the thumbnail
    thumbnail.style.display = 'none';
    // Show the iframe
    const iframe = thumbnail.nextElementSibling;
    iframe.style.display = 'block';
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}
