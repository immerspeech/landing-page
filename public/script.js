document.addEventListener('DOMContentLoaded', async () => {
    
    // --- Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked (for mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // --- Sticky Header Transparency/Blur ---
    const mainHeader = document.getElementById('mainHeader');
    const reviewsLine = document.querySelector('.reviews-line'); // Get reviews line element

    const updateStickyPositions = () => {
        const headerHeight = mainHeader.offsetHeight;
        reviewsLine.style.top = `${headerHeight}px`; // Set reviews line top based on header height
    };

    // Update on load and resize
    updateStickyPositions();
    window.addEventListener('resize', updateStickyPositions);

    window.addEventListener('scroll', () => {
        if (window.scrollY > mainHeader.offsetHeight / 2) { // Add class when scrolled past half header height
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

});

function formSubmitted() {
    alert("Thank you! Your contact form has been submitted.");
}