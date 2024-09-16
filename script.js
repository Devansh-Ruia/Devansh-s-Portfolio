// Correctly structured code in 'script.js'

document.addEventListener('DOMContentLoaded', function() {
    // Define options for the Intersection Observer
    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the element is in the viewport
                entry.target.classList.add('visible');
            } else {
                // Remove 'visible' class when the element is out of the viewport
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Target all elements with the class 'fade-in' for observation
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => observer.observe(el));
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop, // Scroll to the element's position
            behavior: 'smooth'             // Enable smooth scrolling
        });
    });
});