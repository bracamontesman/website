// Image Slider Functionality
const images = document.querySelectorAll('.slider img');

if (images.length > 0) {
    let currentIndex = 0;
    let intervalId;

    // Hide all images except the first one
    images.forEach((img, index) => {
        if (index !== 0) img.classList.add('hidden');
    });

    // Function to display the next image in the slider
    function nextImage() {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('hidden');
    }

    // Start automatic transition to the next image every two seconds
    function startSlideshow() {
        intervalId = setInterval(nextImage, 2000);
    }

    // Stop automatic transition
    function stopSlideshow() {
        clearInterval(intervalId);
    }

    // Add event listeners to pause on hover
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', stopSlideshow);
    slider.addEventListener('mouseleave', startSlideshow);

    // Start the slideshow initially
    startSlideshow();
} else {
    console.error('No images found in the slider.');
}