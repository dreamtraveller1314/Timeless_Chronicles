/**
 * js/modules/art-timeline.js
 *
 * This module manages the interactive timeline for the Art page,
 * dynamically loading and displaying art eras and their characteristics.
 */

import { artEras, addClass, removeClass } from '../core.js';

document.addEventListener('DOMContentLoaded', () => {
    const artTimelineNav = document.querySelector('.art-timeline-navigation');
    const artTimelineContent = document.getElementById('art-timeline-content');

    if (!artTimelineNav || !artTimelineContent) {
        console.warn("Art timeline elements not found. Skipping module initialization.");
        return;
    }

    /**
     * Renders the navigation buttons for each art era.
     */
    function renderArtTimelineNavigation() {
        artTimelineNav.innerHTML = ''; // Clear existing buttons
        artEras.forEach(era => {
            const button = document.createElement('button');
            button.textContent = era.name;
            button.dataset.eraId = era.id;
            artTimelineNav.appendChild(button);

            button.addEventListener('click', () => {
                displayArtEraDetails(era.id);
                // Update active state
                Array.from(artTimelineNav.children).forEach(btn => removeClass(btn, 'active'));
                addClass(button, 'active');
            });
        });

        // Automatically select the first era if available
        if (artEras.length > 0) {
            displayArtEraDetails(artEras[0].id);
            addClass(artTimelineNav.children[0], 'active');
        }
    }

    /**
     * Displays the detailed information for a selected art era.
     * @param {string} eraId The ID of the era to display.
     */
    function displayArtEraDetails(eraId) {
        const era = artEras.find(e => e.id === eraId);
        if (!era) {
            artTimelineContent.innerHTML = '<p>Art era not found.</p>';
            return;
        }

        let detailsHtml = era.details ? era.details.map(detail => `
            <div class="art-detail-item">
                <h5>${detail.title}</h5>
                <p><strong>Era:</strong> ${detail.era}</p>
                <p>${detail.fact}</p>
            </div>
        `).join('') : '<p>No specific details available for this era.</p>';

        artTimelineContent.innerHTML = `
            <div class="art-era-detail-card card-item">
                <h4 class="era-title">${era.name} (${era.period})</h4>
                <p class="era-description">${era.description}</p>
                <img src="${era.image}" alt="${era.name} image" class="era-image">
                <div class="era-details-list">
                    <h5>Notable Works/Facts:</h5>
                    ${detailsHtml}
                </div>
            </div>
        `;
    }

    renderArtTimelineNavigation();
});