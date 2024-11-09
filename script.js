let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');
const totalItems = items.length;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function moveToPreviousSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100; // Move left by 100% of the item's width
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
    
    // Reset and add the active and blue classes to the correct indicator
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active', 'blue');
        if (index === currentIndex) {
            indicator.classList.add('active', 'blue');
        }
    });
}

// Automatic slide transition every 3 seconds
setInterval(moveToNextSlide, 3000);

// Manual navigation for next and previous buttons
document.querySelector('.carousel-prev').addEventListener('click', moveToPreviousSlide);
document.querySelector('.carousel-next').addEventListener('click', moveToNextSlide);

// Event listeners for each indicator for manual slide selection
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Initialize the first slide and indicator
updateCarousel();
// Show popup and hide carousel
function showPopup(image, title, text) {
    document.getElementById("popup").style.display = "flex"; // Show popup
    document.body.classList.add('popup-active'); // Hide carousel
    document.getElementById("popup-image").src = image; // Set image source
    document.getElementById("popup-title").textContent = title; // Set title
    document.getElementById("popup-text").innerHTML = text; // Set description text
}

// Close popup and show carousel
function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide popup
    document.body.classList.remove('popup-active'); // Show carousel again
}


 // Handle the Collections menu click
 document.getElementById("collections-link").addEventListener("click", function() {
    // Hide other sections
    document.querySelector(".box1").style.display = "none"; // Hide image gallery section
    document.querySelector(".intro-section").style.display = "none"; // Hide intro section
    document.querySelector(".carousel-container").style.display = "block"; // Show carousel container
});

