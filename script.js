let index = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;

  index += step;

  if (index < 0) {
    index = totalSlides - 3; // Show the last 3 images when reaching the beginning
  } else if (index >= totalSlides - 2) {
    index = 0; // Loop back to the first set of images
  }

  const newTransform = `translateX(-${index * 33.33}%)`; // Move 33.33% for each image
  document.querySelector('.carousel-images').style.transform = newTransform;
}

window.addEventListener('scroll', function() {
    const sectionOne = document.querySelector('.background-section-one');
    const sectionTwo = document.querySelector('.background-section-two');
    
    let offset = window.pageYOffset; // Get the vertical scroll position
    
    // Adjust the background position slower than the content scroll, but in the same direction
    sectionOne.style.backgroundPosition = `center ${-offset * 0.2}px`; // Background moves slower
    sectionTwo.style.backgroundPosition = `center ${-offset * 0.3}px`; // You can tweak this for different speeds
  });
  
  
