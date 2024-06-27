// Select the image container element
const imageContainerEl = document.querySelector(".image-container");

// Select the previous and next buttons by their IDs
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

// Initialize rotation angle and timer variable
let x = 0;
let timer;

// Add click event listener to the previous button
prevEl.addEventListener("click", () => {
  // Increase rotation angle by 45 degrees to rotate to the previous image
  x = x + 45;
  // Clear the existing timer to reset the auto-rotation
  clearTimeout(timer);
  // Update the gallery to apply the new rotation angle
  updateGallery();
});

// Add click event listener to the next button
nextEl.addEventListener("click", () => {
  // Decrease rotation angle by 45 degrees to rotate to the next image
  x = x - 45;
  // Clear the existing timer to reset the auto-rotation
  clearTimeout(timer);
  // Update the gallery to apply the new rotation angle
  updateGallery();
});

// Function to update the gallery's rotation and set auto-rotation timer
function updateGallery() {
  // Apply the rotation transform to the image container element
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  // Set a timer to automatically rotate to the next image every 3 seconds
  timer = setTimeout(() => {
    // Decrease rotation angle by 45 degrees for the next image
    x = x - 45;
    // Recursively call updateGallery to continue the auto-rotation
    updateGallery();
  }, 3000);
}

// Initial call to start the auto-rotation when the script loads
updateGallery();
