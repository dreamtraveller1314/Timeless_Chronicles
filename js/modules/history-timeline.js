/**
 * js/modules/history-timeline.js
 *
 * This module manages the interactive timeline for the History page,
 * dynamically loading and displaying historical eras and their events.
 */

import { historyEras, addClass, removeClass } from '../core.js';

document.addEventListener('DOMContentLoaded', () => {
    const timelineNav = document.querySelector('.timeline-navigation');
    const timelineContent = document.getElementById('history-timeline-content');

    if (!timelineNav || !timelineContent) {
        console.warn("History timeline elements not found. Skipping module initialization.");
        return;
    }

    /**
     * Renders the navigation buttons for each historical era.
     */
    function renderTimelineNavigation() {
        timelineNav.innerHTML = ''; // Clear existing buttons
        historyEras.forEach(era => {
            const button = document.createElement('button');
            button.textContent = era.name;
            button.dataset.eraId = era.id;
            timelineNav.appendChild(button);

            button.addEventListener('click', () => {
                displayEraDetails(era.id);
                // Update active state
                Array.from(timelineNav.children).forEach(btn => removeClass(btn, 'active'));
                addClass(button, 'active');
            });
        });

        // Automatically select the first era if available
        if (historyEras.length > 0) {
            displayEraDetails(historyEras[0].id);
            addClass(timelineNav.children[0], 'active');
        }
    }

    /**
     * Displays the detailed information for a selected historical era.
     * @param {string} eraId The ID of the era to display.
     */
    function displayEraDetails(eraId) {
        const era = historyEras.find(e => e.id === eraId);
        if (!era) {
            timelineContent.innerHTML = '<p>Era not found.</p>';
            return;
        }

        let eventsHtml = era.events.map(event => `
            <div class="timeline-event">
                <span class="event-year">${event.year}</span>
                <div class="event-details">
                    <h4>${event.title}</h4>
                    <p>${event.detail}</p>
                </div>
            </div>
        `).join('');

        timelineContent.innerHTML = `
            <div class="era-detail-card card-item">
                <h4 class="era-title">${era.name} (${era.period})</h4>
                <p class="era-description">${era.description}</p>
                <img src="${era.image}" alt="${era.name} image" class="era-image">
                <div class="era-events">
                    <h5>Key Events:</h5>
                    ${eventsHtml}
                </div>
            </div>
        `;
    }

    renderTimelineNavigation();
});