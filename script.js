// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default anchor click behavior
        event.preventDefault();
        
        // Get the target section id from the href attribute
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start',     // Align to the top of the viewport
            });
        }
    });
});
