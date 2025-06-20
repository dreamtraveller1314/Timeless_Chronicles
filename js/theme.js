/**
 * js/theme.js
 *
 * This file handles theme switching (light/dark mode) and background music playback
 * controls, applying global settings to the website.
 */

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggle-theme-btn');
    const playMusicBtn = document.getElementById('play-music-btn');
    const bgMusic = document.getElementById('bg-music');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeLabel = document.getElementById('volume-label');

    // --- Theme Toggling ---
    const currentTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(currentTheme);

    if (toggleThemeBtn) {
        if (currentTheme === 'dark-theme') {
            toggleThemeBtn.innerHTML = '☀️ Light Theme'; // Unicode sun icon
        } else {
            toggleThemeBtn.innerHTML = '🌙 Dark Theme'; // Unicode crescent moon icon
        }

        toggleThemeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light-theme')) {
                document.body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
                toggleThemeBtn.innerHTML = '☀️ Light Theme';
            } else {
                document.body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
                toggleThemeBtn.innerHTML = '🌙 Dark Theme';
            }
        });
    }

    // --- Background Music Control ---
    let isPlaying = localStorage.getItem('musicPlaying') === 'true'; // Remember last state

    // Initialize volume from local storage or default
    const savedVolume = localStorage.getItem('musicVolume');
    if (volumeSlider) {
        volumeSlider.value = savedVolume !== null ? savedVolume : 0.5;
        if (bgMusic) {
            bgMusic.volume = volumeSlider.value;
        }
        if (volumeLabel) {
            volumeLabel.textContent = `Volume: ${Math.round(volumeSlider.value * 100)}%`;
        }

        volumeSlider.addEventListener('input', () => {
            if (bgMusic) {
                bgMusic.volume = volumeSlider.value;
            }
            localStorage.setItem('musicVolume', volumeSlider.value);
            if (volumeLabel) {
                volumeLabel.textContent = `Volume: ${Math.round(volumeSlider.value * 100)}%`;
            }
        });
    }

    // Auto-play / Resume playback if it was playing previously
    if (bgMusic && isPlaying) {
        bgMusic.play().then(() => {
            if (playMusicBtn) {
                playMusicBtn.textContent = '⏸️ Pause Music'; // Unicode pause icon
            }
        }).catch(e => {
            console.warn("Autoplay was prevented:", e);
            // Autoplay might be blocked by browser policies. Update UI accordingly.
            isPlaying = false;
            if (playMusicBtn) {
                playMusicBtn.textContent = '🎵 Play Music';
            }
            localStorage.setItem('musicPlaying', 'false');
        });
    }


    if (playMusicBtn && bgMusic) {
        playMusicBtn.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    playMusicBtn.textContent = '⏸️ Pause Music';
                    isPlaying = true;
                    localStorage.setItem('musicPlaying', 'true');
                }).catch(e => {
                    console.error("Failed to play music:", e);
                    // Inform user if necessary, or log for debugging
                });
            } else {
                bgMusic.pause();
                playMusicBtn.textContent = '🎵 Play Music';
                isPlaying = false;
                localStorage.setItem('musicPlaying', 'false');
            }
        });
    }
});