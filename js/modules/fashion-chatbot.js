/**
 * js/modules/fashion-chatbot.js
 *
 * This module implements the interactive Fashion Historian Chatbot for the Fashion page.
 */

import { fashionChatbotResponses, addClass, removeClass } from '../core.js';
import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@7.1.0/dist/fuse.min.js'; // Import Fuse.js

document.addEventListener('DOMContentLoaded', () => {
    const chatLog = document.getElementById('chat-log');
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send');

    if (!chatLog || !chatInput || !chatSendBtn) {
        console.warn("Chatbot elements not found. Skipping module initialization.");
        return;
    }

    // Initialize Fuse.js for fuzzy searching through chatbot responses
    // We'll search primarily by keywords
    const fuseOptions = {
        keys: ['keywords'],
        threshold: 0.3, // Lower threshold for stricter matches, higher for more fuzzy
        includeMatches: true,
        includeScore: true
    };
    const fuse = new Fuse(fashionChatbotResponses, fuseOptions);


    /**
     * Appends a message to the chat log.
     * @param {string} message The text content of the message.
     * @param {string} senderClass 'user-message' or 'bot-message'.
     */
    function appendMessage(message, senderClass) {
        const messageDiv = document.createElement('div');
        addClass(messageDiv, 'chat-message');
        addClass(messageDiv, senderClass);
        messageDiv.textContent = message;
        chatLog.appendChild(messageDiv);
        chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to bottom
    }

    /**
     * Processes user input and generates a chatbot response.
     * @param {string} input The user's message.
     */
    function processInput(input) {
        if (!input.trim()) return;

        appendMessage(input, 'user-message');
        chatInput.value = ''; // Clear input field

        const searchResult = fuse.search(input.toLowerCase());
        let botResponse = "I'm sorry, I don't have information on that specific fashion topic. Can you try rephrasing or asking about a different era?";

        if (searchResult.length > 0 && searchResult[0].score < 0.5) { // Check score for relevance
            // Take the best match based on score
            botResponse = searchResult[0].item.response;
        } else {
            // Fallback for general greetings or simple keywords not matched well by Fuse
            const generalResponses = {
                'hello': 'Hello! I am your fashion historian chatbot. What would you like to know about fashion through the ages?',
                'hi': 'Hi there! Ask me anything about historical fashion!',
                'how are you': 'I am an AI, so I don\'t have feelings, but I\'m ready to help you learn about fashion!',
                'thank you': 'You\'re welcome! Is there anything else I can assist you with regarding historical fashion?',
                'thanks': 'You\'re welcome! Is there anything else I can assist you with regarding historical fashion?',
                'who are you': 'I am Timeless Chronicles\' Fashion Historian Chatbot, here to tell you about the evolution of style!'
            };
            const lowerInput = input.toLowerCase();
            for (const key in generalResponses) {
                if (lowerInput.includes(key)) {
                    botResponse = generalResponses[key];
                    break;
                }
            }
        }

        setTimeout(() => {
            appendMessage(botResponse, 'bot-message');
        }, 500); // Simulate typing delay
    }

    // Event Listeners
    chatSendBtn.addEventListener('click', () => processInput(chatInput.value));
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processInput(chatInput.value);
        }
    });
});