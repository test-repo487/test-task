document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeButton = document.querySelector('.mobile-menu__close');
    const body = document.body;
    
    // Open menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.add('mobile-menu--active');
        body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });
    
    // Close menu when close button is clicked
    closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('mobile-menu--active');
        body.style.overflow = ''; // Restore scrolling
    });
    
    // Close menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('mobile-menu--active');
            body.style.overflow = ''; // Restore scrolling
        });
    });
});