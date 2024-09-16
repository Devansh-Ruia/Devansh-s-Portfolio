document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Now, I’ll get back to you once I done killing this Sekiro boss.');
});
// Initialize AOS library for scroll animations
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true // Animation happens only once
});
// Scroll-triggered animations for headings
window.addEventListener('scroll', function() {
    const headings = document.querySelectorAll('.content-section');
    const triggerPoint = window.innerHeight / 1.1; // Adjust trigger point

    headings.forEach((heading) => {
        const headingTop = heading.getBoundingClientRect().top;

        if (headingTop < triggerPoint) {
            heading.classList.add('is-visible');
        }
    });
});

