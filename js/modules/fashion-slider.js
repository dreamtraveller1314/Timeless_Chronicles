/**
 * js/modules/fashion-slider.js
 *
 * This module implements the interactive Fashion Image Slider for the Fashion page.
 */

import { fashionEras } from '../core.js';

document.addEventListener('DOMContentLoaded', () => {
    const fashionImage = document.getElementById('fashion-image');
    const fashionCaption = document.getElementById('fashion-caption');
    const prevFashionBtn = document.getElementById('prev-fashion-btn');
    const nextFashionBtn = document.getElementById('next-fashion-btn');

    if (!fashionImage || !fashionCaption || !prevFashionBtn || !nextFashionBtn) {
        console.warn("Fashion slider elements not found. Skipping module initialization.");
        return;
    }

    let currentIndex = 0;

    /**
     * Updates the slider with the current fashion era's image and caption.
     */
    function updateSlider() {
        if (fashionEras.length === 0) {
            fashionImage.src = 'images/placeholder.jpg';
            fashionCaption.textContent = 'No fashion eras to display.';
            prevFashionBtn.disabled = true;
            nextFashionBtn.disabled = true;
            return;
        }

        const currentEra = fashionEras[currentIndex];
        fashionImage.style.opacity = '0'; // Start fade out
        setTimeout(() => {
            fashionImage.src = currentEra.image;
            fashionCaption.textContent = `${currentEra.era} (${currentEra.period}): ${currentEra.description}`;
            fashionImage.alt = currentEra.era;
            fashionImage.style.opacity = '1'; // Fade in new image
        }, 300); // Match CSS transition duration
    }

    /**
     * Navigates to the previous fashion era in the slider.
     */
    function showPrevEra() {
        currentIndex = (currentIndex - 1 + fashionEras.length) % fashionEras.length;
        updateSlider();
    }

    /**
     * Navigates to the next fashion era in the slider.
     */
    function showNextEra() {
        currentIndex = (currentIndex + 1) % fashionEras.length;
        updateSlider();
    }

    // Event Listeners
    prevFashionBtn.addEventListener('click', showPrevEra);
    nextFashionBtn.addEventListener('click', showNextEra);

    // Initial update on page load
    updateSlider();
});