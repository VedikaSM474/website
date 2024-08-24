// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 1000, // Duration of animations in milliseconds
    easing: 'ease-in-out', // Easing function for animations
    once: true, // Whether animation should happen only once
});

// Optional: Add JavaScript for additional interactivity
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
});
// script.js
// script.js

function searchImages() {
    // Get the search input value and convert to lowercase
    const query = document.getElementById('search-bar').value.toLowerCase();

    // Get all categories
    const birdsSection = document.getElementById('birds');
    const animalsSection = document.getElementById('animals');
    const natureSection = document.getElementById('nature');

    // Hide all sections by default
    birdsSection.style.display = 'none';
    animalsSection.style.display = 'none';
    natureSection.style.display = 'none';

    // Show the relevant section based on search query
    if (query === 'birds') {
        birdsSection.style.display = 'block';
    } else if (query === 'animals') {
        animalsSection.style.display = 'block';
    } else if (query === 'nature') {
        natureSection.style.display = 'block';
    } else {
        alert("No matching category found. Please search for 'birds', 'animals', or 'nature'.");
    }
}

// Clear search input and reset the visibility of sections
function clearSearch() {
    document.getElementById('search-bar').value = '';
    const birdsSection = document.getElementById('birds');
    const animalsSection = document.getElementById('animals');
    const natureSection = document.getElementById('nature');

    birdsSection.style.display = 'block';
    animalsSection.style.display = 'block';
    natureSection.style.display = 'block';
}

