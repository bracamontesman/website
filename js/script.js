/*
  - variables:
    - images: represents a collection of image elements in the slider.
    - currentIndex: represents the index of the currently displayed image.

  - functions:
    - nextImage(): displays the next image in the slider.
*/

// selecting all image elements in the slider
const images = document.querySelectorAll('.slider img');

// initializing the currentIndex variable to 0
let currentIndex = 0;

// function to display the next image in the slider
function nextImage() {
  images[currentIndex].style.display = 'none'; // hide current image
  currentIndex = (currentIndex + 1) % images.length; // move to the next image
  images[currentIndex].style.display = 'block'; // display the new current image
}

// hide all images except the first one
for (let i = 1; i < images.length; i++) {
  images[i].style.display = 'none';
}

// automatic transition to the next image every three seconds
setInterval(nextImage, 3000);
