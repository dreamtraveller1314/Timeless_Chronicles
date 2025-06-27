document.addEventListener('DOMContentLoaded', () => {
    // Selectors for buttons and content area (updated to match HTML changes)
    const fashionTimelineButtons = document.querySelectorAll('.fashion-timeline-navigation button');
    const fashionTimelineContent = document.getElementById('fashion-timeline-content');

    // Data for fashion periods - UPDATED STRUCTURE for single image
    const fashionPeriods = window.fashionEras

    // Function to update text colors based on theme
    function updateTextColors(element) {
        // Find all elements that might contain text within the main content area
        const textElements = element.querySelectorAll('h4, p, li, strong'); // Changed h3 to h4 for inner content
        const textColor = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--text-color)';
        const headingColor = document.body.classList.contains('dark-theme') ? 'var(--primary-color-dark)' : 'var(--primary-color)';

        textElements.forEach(el => {
            if (el.tagName === 'H4') { // Apply heading color to h4
                el.style.color = headingColor;
            } else {
                el.style.color = textColor;
            }
        });
    }

    // Function to display the selected fashion period's content
    function showFashionPeriod(era) {
        const period = fashionPeriods[era];
        if (period) {
            let contentHTML = `
                <div class="era-details">
                    <h4>${period.era}</h4>
                    <p class="era-description">${period.description}</p>
            `;

            // Display a single image if available
            if (period.image && period.image.src) { // Check if image object and src exist
                contentHTML += `
                    <div class="fashion-single-image">
                        <img src="${period.image.src}" alt="${period.image.caption || period.era}" loading="lazy">
                        <p class="fashion-caption">${period.image.caption || 'No caption available.'}</p>
                    </div>
                `;
            }

            contentHTML += `</div>`; // Close era-details

            fashionTimelineContent.innerHTML = contentHTML;
            updateTextColors(fashionTimelineContent); // Apply theme colors to newly added content

        } else {
            fashionTimelineContent.innerHTML = '<p class="text-center timeline-placeholder-text">No information available for this period. Please select another era.</p>';
            // Ensure placeholder text color is also updated
            fashionTimelineContent.querySelector('.timeline-placeholder-text').style.color = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--text-color)';
        }
    }

    // Event listeners for fashion timeline buttons
    fashionTimelineButtons.forEach(button => {
        button.addEventListener('click', () => {
            const era = button.getAttribute('data-era');
            showFashionPeriod(era);
            
            // Remove 'active' class from all buttons and add to the clicked one
            fashionTimelineButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Initial call to update text colors on page load (for placeholder or default content)
    updateTextColors(fashionTimelineContent);

    // Listen for theme changes (assuming theme.js dispatches a custom event)
    document.body.addEventListener('themeChange', () => {
        // Re-apply current era content to update colors and styles
        const currentActiveEra = document.querySelector('.fashion-timeline-navigation button.active');
        if (currentActiveEra) {
            showFashionPeriod(currentActiveEra.getAttribute('data-era'));
        } else {
            // If no era is active (e.g., initial load with placeholder), update placeholder color
            updateTextColors(fashionTimelineContent);
        }
    });

    // Optional: Set a default active button/content on page load
    // This will automatically show the content for the 'ancient' era when the page loads.
    const defaultEra = 'ancient';
    const defaultButton = document.querySelector(`.fashion-timeline-navigation button[data-era="${defaultEra}"]`);
    if (defaultButton) {
        defaultButton.click(); // Simulate a click on the default button
    }
});