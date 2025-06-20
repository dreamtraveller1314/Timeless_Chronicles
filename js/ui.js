/**
 * js/ui.js
 *
 * This file manages general user interface interactions and visual enhancements
 * that are common across all pages, such as the page loader and back-to-top button.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Page Loader
    const loader = document.getElementById('loader');
    if (loader) {
        // A small delay to ensure CSS transitions can play
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            // Remove loader from DOM after transition to free up resources
            loader.addEventListener('transitionend', () => loader.remove());
        }, 500); // Wait for 0.5s before fading out
    }

    // Back to Top Button
    const backToTopBtn = document.getElementById('top-btn');
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show after scrolling 300px
                backToTopBtn.style.display = 'block';
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
                // Hide only after transition to allow smooth fade out
                setTimeout(() => {
                    if (window.scrollY <= 300) { // Double check in case of quick scroll up/down
                        backToTopBtn.style.display = 'none';
                    }
                }, 300); // Match CSS transition duration
            }
        });

        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth Scrolling for internal navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});