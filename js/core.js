/**
 * js/core.js
 *
 * This file contains core utilities, global data, and fundamental functionalities
 * that are shared across different modules and pages of the Timeless Chronicles website.
 */

// --- Global Data Structures ---
// These could eventually be loaded from JSON or a backend for larger applications.

// History Timeline Data
export const historyEras = [
    {
        id: 'ancient',
        name: 'Ancient Civilizations',
        period: 'c. 3000 BCE - 500 CE',
        description: 'Explore the birth of civilization, the rise of empires like Egypt, Greece, and Rome, and the foundational discoveries that shaped early human societies.',
        events: [
            { year: 'c. 3000 BCE', title: 'Unification of Egypt', detail: 'Formation of the first unified Egyptian state.' },
            { year: 'c. 2560 BCE', title: 'Construction of Great Pyramid of Giza', detail: 'The iconic monumental tomb for Pharaoh Khufu.' },
            { year: '776 BCE', title: 'First Olympic Games', detail: 'Recorded beginning of the ancient Olympic Games in Greece.' },
            { year: '509 BCE', title: 'Roman Republic Established', detail: 'Overthrow of the Roman monarchy and establishment of the Republic.' },
            { year: '27 BCE', title: 'Roman Empire Founded', detail: 'Octavian becomes Augustus, marking the start of the Roman Empire.' },
            { year: '330 CE', title: 'Constantinople Founded', detail: 'Emperor Constantine dedicates Constantinople as the new capital of the Roman Empire.' }
        ],
        image: 'images/history/ancient_civilizations.jpg'
    },
    {
        id: 'medieval',
        name: 'Medieval Period',
        period: 'c. 500 CE - 1500 CE',
        description: 'Journey through the Middle Ages, from the fall of Rome to the Renaissance, covering feudalism, the Crusades, and the emergence of nation-states.',
        events: [
            { year: '476 CE', title: 'Fall of Western Roman Empire', detail: 'Odoacer deposes Romulus Augustulus, marking the end of the Western Roman Empire.' },
            { year: '800 CE', title: 'Charlemagne Crowned Emperor', detail: 'Pope Leo III crowns Charlemagne Emperor of the Romans, founding the Carolingian Empire.' },
            { year: '1066 CE', title: 'Norman Conquest of England', detail: 'William the Conqueror invades England, profoundly changing English history.' },
            { year: '1096 CE', title: 'First Crusade Begins', detail: 'European Christian armies set out to reclaim the Holy Land.' },
            { year: '1347 CE', title: 'Black Death Arrives in Europe', detail: 'The devastating bubonic plague begins to spread across Europe.' },
            { year: '1453 CE', title: 'Fall of Constantinople', detail: 'The Ottoman Empire conquers Constantinople, ending the Byzantine Empire.' }
        ],
        image: 'images/history/medieval_period.jpg'
    },
    {
        id: 'renaissance',
        name: 'Renaissance & Exploration',
        period: 'c. 1400 CE - 1700 CE',
        description: 'Witness a period of profound cultural, artistic, political, and scientific rebirth across Europe, alongside monumental voyages of discovery.',
        events: [
            { year: '1492 CE', title: 'Columbus Arrives in Americas', detail: 'Christopher Columbus\'s first voyage to the Americas.' },
            { year: '1517 CE', 'title': 'Protestant Reformation Begins', detail: 'Martin Luther publishes his 95 Theses, sparking the Reformation.' },
            { year: '1543 CE', title: 'Copernicus Publishes Heliocentric Model', detail: 'On the Revolutions of the Heavenly Spheres marks a turning point in science.' },
            { year: '1607 CE', title: 'Jamestown Founded', detail: 'Establishment of the first permanent English settlement in North America.' },
            { year: '1687 CE', title: 'Newton Publishes Principia Mathematica', detail: 'Isaac Newton lays the foundations for classical mechanics.' }
        ],
        image: 'images/history/renaissance_exploration.jpg'
    },
    {
        id: 'modern',
        name: 'Modern & Contemporary',
        period: 'c. 1700 CE - Present',
        description: 'From the Enlightenment and revolutions to world wars and the digital age, explore the rapid transformations of recent centuries.',
        events: [
            { year: '1789 CE', title: 'French Revolution Begins', detail: 'Storming of the Bastille and the start of a transformative period in France.' },
            { year: '1804 CE', title: 'Napoleonic Empire Proclaimed', detail: 'Napoleon Bonaparte crowns himself Emperor of the French.' },
            { year: '1914 CE', title: 'World War I Begins', detail: 'Assassination of Archduke Franz Ferdinand triggers the Great War.' },
            { year: '1945 CE', title: 'End of World War II', detail: 'Surrender of Germany and Japan, conclusion of the deadliest conflict in history.' },
            { year: '1969 CE', title: 'Moon Landing', detail: 'Apollo 11 lands the first humans on the Moon.' },
            { year: '1991 CE', title: 'Dissolution of the USSR', detail: 'The end of the Soviet Union marks the end of the Cold War.' }
        ],
        image: 'images/history/modern_era.jpg'
    }
];

// Data for Art Timeline
const artPeriods = {
    prehistoric: {
        title: "Prehistoric Art",
        description: "Early humans created cave paintings and simple sculptures.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/9_Bisonte_Magdaleniense_pol%C3%ADcromo.jpg/1024px-9_Bisonte_Magdaleniense_pol%C3%ADcromo.jpg", alt: "Cave of Altamira" },
            { src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cave-lions-chauvet-cave.jpg", alt: "Chauvet Cave" }
        ]
    },
    ancient: {
        title: "Ancient Art",
        description: "Civilizations like Egypt, Greece, and Rome produced monumental sculptures and architecture.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg/1024px-Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg", alt: "Pyramid of Giza" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/800px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg", alt: "School of Athens" }
        ]
    },
    renaissance: {
        title: "Renaissance Art",
        description: "A rebirth of classical art, with masters like Leonardo da Vinci and Michelangelo.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", alt: "Mona Lisa" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%27David%27_by_Michelangelo_Fir_JBU004.jpg/800px-%27David%27_by_Michelangelo_Fir_JBU004.jpg", alt: "David (Michelangelo)" }
        ]
    },
    baroque: {
        title: "Baroque Art",
        description: "Characterized by drama, emotion, and grandeur.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ecstasy_of_Saint_Teresa_September_2015-2a.jpg/800px-Ecstasy_of_Saint_Teresa_September_2015-2a.jpg", alt: "The Ecstasy of Saint Teresa" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/800px-The_Night_Watch_-_HD.jpg", alt: "The Night Watch" }
        ]
    },
    impressionism: {
        title: "Impressionism",
        description: "Focused on capturing fleeting moments and the effect of light.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/330px-Monet_-_Impression%2C_Sunrise.jpg", alt: "Impression, Sunrise" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edgar_Degas_-_La_Classe_de_danse.jpg/250px-Edgar_Degas_-_La_Classe_de_danse.jpg", alt: "The Dance Class" }
        ]
    },
    modern: {
        title: "Modern Art",
        description: "A wide range of styles, including Cubism, Surrealism, and Abstract Expressionism.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/250px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg", alt: "The Scream" },
            { src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/330px-Les_Demoiselles_d%27Avignon.jpg", alt: "Les Demoiselles d'Avignon" }
        ]
    },
    "ai-generated": {
        title: "AI-Generated Art",
        description: "Visual artwork created or enhanced through the use of artificial intelligence (AI) programs.",
        artworks: [
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.png/1024px-Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.png", alt: "Théâtre D'opéra Spatial" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Edmond_de_Belamy.png/800px-Edmond_de_Belamy.png", alt: "Edmond de Belamy" }
        ]
    }
};

// Data for Art Facts
const artFacts = [
    {
        fact: "The Mona Lisa has no eyebrows!",
        detail: "Shaving eyebrows was fashionable during the Renaissance.",
        emoji: "🖼️",
        category: "Renaissance"
    },
    {
        fact: "Van Gogh only sold one painting in his lifetime.",
        detail: "Now his works sell for millions.",
        emoji: "🌻",
        category: "Modern"
    },
    {
        fact: "Paint was once made from ground-up mummies.",
        detail: "It was called 'Mummy Brown' and used in the 16th–17th centuries.",
        emoji: "🧟",
        category: "Ancient"
    },
    {
        fact: "AI is now creating art.",
        detail: "Tools like DALL·E and MidJourney turn text into visuals.",
        emoji: "🤖",
        category: "AI Era"
    },
    {
        fact: "Cave art may be prehistoric animation.",
        detail: "Some paintings show multiple limbs to suggest movement.",
        emoji: "🦣",
        category: "Prehistoric"
    },
    {
        fact: "Leonardo da Vinci was ambidextrous.",
        detail: "He could write with one hand while drawing with the other.",
        emoji: "✍️",
        category: "Renaissance"
    },
    {
        fact: "Banksy once shredded his artwork after it was sold.",
        detail: "It self-destructed right after fetching $1.4 million at auction.",
        emoji: "🧨",
        category: "Street Art"
    },
    {
        fact: "Some museums dim the lights for Van Gogh's works.",
        detail: "His yellow pigments are so sensitive they fade under strong light.",
        emoji: "💡",
        category: "Modern"
    },
    {
        fact: "Artists used beetle shells for paint.",
        detail: "Iridescent green pigment came from ground beetles.",
        emoji: "🐞",
        category: "Materials"
    },
    {
        fact: "Michelangelo painted himself into the Sistine Chapel.",
        detail: "As St. Bartholomew’s flayed skin — quite the self-portrait!",
        emoji: "🖌️",
        category: "Renaissance"
    },
    {
        fact: "The world’s oldest known drawing is 73,000 years old.",
        detail: "Found in Blombos Cave, South Africa.",
        emoji: "📐",
        category: "Prehistoric"
    },
    {
        fact: "Jackson Pollock used house paint.",
        detail: "He preferred it for its texture and flow in drip paintings.",
        emoji: "🎨",
        category: "Modern"
    },
    {
        fact: "Ancient Greek statues were painted.",
        detail: "They weren't white — they were originally bright and colorful.",
        emoji: "🏛️",
        category: "Ancient"
    },
    {
        fact: "Frida Kahlo created 143 paintings.",
        detail: "55 of them are self-portraits.",
        emoji: "🎭",
        category: "Modern"
    },
    {
        fact: "The Great Wave off Kanagawa isn't just art — it's math.",
        detail: "Its curves and composition reflect Fibonacci patterns.",
        emoji: "🌊",
        category: "Japanese Art"
    },
    {
        fact: "Warhol once made a painting of 100 soup cans.",
        detail: "It symbolized mass production and pop culture.",
        emoji: "🥫",
        category: "Pop Art"
    },
    {
        fact: "Street artist Invader uses mosaic tiles.",
        detail: "Inspired by 8-bit video games like Space Invaders.",
        emoji: "👾",
        category: "Street Art"
    },
    {
        fact: "Salvador Dalí’s mustache is in a museum.",
        detail: "He was buried with it perfectly intact.",
        emoji: "🌀",
        category: "Surrealism"
    },
    {
        fact: "Picasso could draw before he could walk.",
        detail: "He completed his first painting at age 9.",
        emoji: "🧒",
        category: "Modern"
    },
    {
        fact: "Some cave art is located deep underground.",
        detail: "Early humans crawled miles through tunnels to paint in the dark.",
        emoji: "🕳️",
        category: "Prehistoric"
    }
];

// Data for Art Quiz
const artQuestions = [
    {
        question: "Who painted the Mona Lisa?",
        options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
        correctAnswer: 1,
        explanation: "Leonardo da Vinci painted the Mona Lisa in the early 1500s during the Italian Renaissance. It’s one of the most recognized paintings in the world."
    },
    {
        question: "Which art movement is Salvador Dalí associated with?",
        options: ["Impressionism", "Cubism", "Surrealism", "Renaissance"],
        correctAnswer: 2,
        explanation: "Dalí was a leading figure in the Surrealist movement, which emphasized dreamlike, irrational imagery."
    },
    {
        question: "What is the main characteristic of Impressionist art?",
        options: ["Precise lines", "Emotional symbolism", "Use of abstract forms", "Capturing light and movement"],
        correctAnswer: 3,
        explanation: "Impressionist artists like Monet aimed to capture fleeting light and everyday scenes with loose, visible brushstrokes."
    },
    {
        question: "Which of these artists is known for 'The Starry Night'?",
        options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Georges Seurat"],
        correctAnswer: 2,
        explanation: "Van Gogh painted 'The Starry Night' in 1889, depicting a swirling night sky from his asylum room in Saint-Rémy-de-Provence."
    },
    {
        question: "What was Andy Warhol known for?",
        options: ["Pop art and mass media", "Renaissance frescoes", "Cubist sculpture", "Baroque paintings"],
        correctAnswer: 0,
        explanation: "Warhol was a leader in the Pop Art movement, turning everyday consumer items like soup cans into iconic art."
    },
    {
        question: "Which technique did Georges Seurat famously use?",
        options: ["Drip painting", "Fresco", "Pointillism", "Collage"],
        correctAnswer: 2,
        explanation: "Seurat used tiny dots of color in a technique called Pointillism, especially seen in 'A Sunday Afternoon on the Island of La Grande Jatte'."
    },
    {
        question: "Where is the Louvre Museum located?",
        options: ["London", "New York", "Madrid", "Paris"],
        correctAnswer: 3,
        explanation: "The Louvre, home to the Mona Lisa, is located in Paris and is the most visited museum in the world."
    },
    {
        question: "What does 'Renaissance' mean?",
        options: ["The end", "Rebirth", "New world", "Middle age"],
        correctAnswer: 1,
        explanation: "The term Renaissance means 'rebirth' and refers to the revival of classical art, architecture, and learning in Europe."
    },
    {
        question: "What defines Cubism?",
        options: ["Soft colors and smooth lines", "Use of organic forms", "Breaking subjects into geometric shapes", "Hyperrealistic detail"],
        correctAnswer: 2,
        explanation: "Cubism, pioneered by Picasso and Braque, breaks objects into geometric components and presents multiple viewpoints simultaneously."
    },
    {
        question: "Which artist is famous for cutting off part of his ear?",
        options: ["Michelangelo", "Vincent van Gogh", "Rembrandt", "Raphael"],
        correctAnswer: 1,
        explanation: "Van Gogh is known for cutting off part of his own ear during a mental health crisis and later painted several self-portraits with a bandaged ear."
    }
];

window.artPeriods = artPeriods;
window.artFacts = artFacts;
window.artQuestions = artQuestions;

// Fashion Timeline Data
export const fashionEras = [
    {
        id: 'ancient',
        era: 'Ancient Civilizations',
        period: 'c. 3000 BCE - 500 CE',
        description: 'From Egyptian linen to Roman togas, clothing emphasized drapery, status, and practical needs. Key materials: linen, wool.',
        image: 'images/fashion/ancient_fashion.jpg'
    },
    {
        id: 'medieval',
        era: 'Medieval Era',
        period: 'c. 500 CE - 1500 CE',
        description: 'Modesty and social hierarchy dominated. Tunics, gowns, and practical wear, evolving into more fitted styles by the late period. Key materials: wool, linen, silk (for wealthy).',
        image: 'images/fashion/medieval_fashion.jpg'
    },
    {
        id: 'renaissance',
        era: 'Renaissance',
        period: 'c. 1400 CE - 1600 CE',
        description: 'A period of rich fabrics, elaborate sleeves, and structured silhouettes. Influence from Italian and Spanish courts. Key elements: puffed sleeves, corsets, ruffs.',
        image: 'images/fashion/renaissance_fashion.jpg'
    },
    {
        id: 'baroque_rococo',
        era: 'Baroque & Rococo',
        period: 'c. 1600 CE - 1770 CE',
        description: 'Baroque: grandeur, heavy fabrics, elaborate embroidery. Rococo: lightness, pastel colors, intricate ornamentation, widespread panniers. Key elements: elaborate wigs, silk, lace.',
        image: 'images/fashion/baroque_rococo_fashion.jpg'
    },
    {
        id: 'regency_victorian',
        era: 'Regency & Victorian',
        period: 'c. 1790 CE - 1900 CE',
        description: 'Regency brought simpler, high-waisted dresses. Victorian: crinolines, bustles, structured tailoring, reflecting modesty and industrialization. Key elements: corsets, elaborate bonnets, dark colors.',
        image: 'images/fashion/regency_victorian_fashion.jpg'
    },
    {
        id: 'early_20th_century',
        era: 'Early 20th Century',
        period: 'c. 1900 CE - 1940 CE',
        description: 'From Edwardian S-bend to flapper dresses of the 1920s, and the tailored suits of the 1930s. Liberation and changing roles for women. Key elements: hobble skirts, cloche hats, simpler lines.',
        image: 'images/fashion/early_20th_century_fashion.jpg'
    },
    {
        id: 'mid_20th_century',
        era: 'Mid 20th Century',
        period: 'c. 1940 CE - 1970 CE',
        description: 'Wartime utility gave way to the New Look, then to youthful rebellion (mini-skirts, mod), and hippie counter-culture. Key elements: A-line skirts, denim, vibrant patterns.',
        image: 'images/fashion/mid_20th_century_fashion.jpg'
    },
    {
        id: 'late_20th_century',
        era: 'Late 20th Century',
        period: 'c. 1970 CE - 2000 CE',
        description: 'Punk, disco, power dressing, grunge, and hip-hop influences. Eclecticism and rapid trend cycles. Key elements: platform shoes, shoulder pads, tracksuits.',
        image: 'images/fashion/late_20th_century_fashion.jpg'
    },
    {
        id: '21st_century',
        era: '21st Century',
        period: 'c. 2000 CE - Present',
        description: 'Globalization, fast fashion, streetwear dominance, and increasing personalization. Blurring of gender lines and technology integration. Key elements: activewear as daily wear, sustainable fashion, digital influence.',
        image: 'images/fashion/21st_century_fashion.jpg'
    }
];


// Medieval Quest Data
export const medievalQuestData = {
    start: {
        text: "You stand at the edge of a whispering forest. A path leads deeper, and a faint glow emanates from within. Do you dare to enter, or seek another way?",
        options: [
            { text: "Enter the forest.", next: "forest_entrance" },
            { text: "Search for a hidden path.", next: "search_path" }
        ]
    },
    forest_entrance: {
        text: "The trees close in, their branches forming a dark canopy. You hear a rustling. A grumpy gnome blocks your path. 'Answer my riddle, or pay the toll!' he grumbles. 'What has an eye, but cannot see?'",
        options: [
            { text: "A needle.", next: "riddle_correct" },
            { text: "A storm.", next: "riddle_incorrect" },
            { text: "A potato.", next: "riddle_incorrect" }
        ]
    },
    riddle_correct: {
        text: "The gnome's eyes widen. 'Correct!' he says, stepping aside. 'Pass, adventurer!' You continue deeper and find a hidden glade with a sparkling stream. You feel refreshed and gain wisdom.",
        options: [
            { text: "Continue the journey.", next: "glade" }
        ]
    },
    riddle_incorrect: {
        text: "The gnome shakes his head. 'Wrong, foolish traveler! Now you must pay the toll!' He snatches your last coin. You proceed, feeling a bit poorer and disheartened.",
        options: [
            { text: "Continue the journey.", next: "glade" }
        ]
    },
    search_path: {
        text: "You search diligently along the forest edge. After a while, you stumble upon a worn cobblestone path, overgrown with moss. It seems less foreboding than the forest. As you follow it, you find a small, abandoned hut. Inside, you discover an old map!",
        options: [
            { text: "Enter the hut.", next: "hut_discovery" },
            { text: "Ignore the hut and follow the path.", next: "glade" }
        ]
    },
    hut_discovery: {
        text: "The hut is dusty and quiet. You find a tattered map detailing ancient ruins nearby. It looks like a long but potentially rewarding detour. Do you follow the map or continue on the main path?",
        options: [
            { text: "Follow the map to the ruins.", next: "ruins_adventure" },
            { text: "Stick to the main path.", next: "glade" }
        ]
    },
    glade: {
        text: "You arrive at a crossroads. To your left, a bustling market town; to your right, a winding mountain trail. Which way do you go?",
        options: [
            { text: "Head to the market town.", next: "market_town" },
            { text: "Take the mountain trail.", next: "mountain_trail" }
        ]
    },
    ruins_adventure: {
        text: "You spend days navigating treacherous terrain following the map. You discover ancient ruins, but they are guarded by spectral knights! You narrowly escape with your life, but manage to grab a rusty, ancient sword. You are tired but ready to continue.",
        options: [
            { text: "Proceed, sword in hand.", next: "glade" }
        ]
    },
    market_town: {
        text: "The market town is vibrant and full of life. You trade stories and learn of a local festival. You spend the night feasting and celebrating, gaining much-needed rest and cheer. Your quest feels renewed.",
        options: [
            { text: "Leave the town, refreshed.", next: "end_good" }
        ]
    },
    mountain_trail: {
        text: "The mountain trail is arduous, but the views are breathtaking. You encounter a lone hermit who shares ancient wisdom with you, teaching you a forgotten skill. You feel more capable, but weary.",
        options: [
            { text: "Descend the mountain.", next: "end_good" }
        ]
    },
    end_good: {
        text: "Your journey has been long and filled with challenges, but you emerge wiser and stronger. You have completed this leg of your medieval quest!",
        options: [
            { text: "Restart Quest", next: "start" }
        ]
    },
    end_bad: {
        text: "Alas, your journey has met an untimely end. Perhaps next time, make different choices...",
        options: [
            { text: "Restart Quest", next: "start" }
        ]
    }
};


// Tool Matching Game Data
export const toolData = {
    'hammer': 'For striking nails and breaking objects.',
    'chisel': 'Used for carving wood or stone.',
    'sickle': 'A curved blade used for harvesting crops.',
    'plow': 'Used to turn over soil for planting.',
    'pottery_wheel': 'For shaping clay into pots and vessels.',
    'loom': 'Used for weaving fabric.',
    'quill_pen': 'For writing with ink, typically made from a bird feather.',
    'abacus': 'An ancient counting device.'
};

// Monument Puzzle Data
export const monumentPuzzleImages = [
    { id: 'colosseum', src: 'images/puzzles/colosseum_full.jpg', name: 'Colosseum' },
    { id: 'pyramid', src: 'images/puzzles/pyramid_full.jpg', name: 'Pyramid of Giza' },
    { id: 'parthenon', src: 'images/puzzles/parthenon_full.jpg', name: 'Parthenon' },
    { id: 'taj_mahal', src: 'images/puzzles/taj_mahal_full.jpg', name: 'Taj Mahal' }
];

// Cause & Effect Quiz Data
export const causeEffectQuestions = [
    {
        question: "Cause: The invention of the printing press by Gutenberg in the 15th century. Effect?",
        options: [
            "Increased illiteracy rates.",
            "Slower dissemination of knowledge.",
            "Mass production of books and wider spread of ideas.",
            "Decline in religious texts."
        ],
        answer: "Mass production of books and wider spread of ideas."
    },
    {
        question: "Cause: The Black Death (mid-14th century) sweeping across Europe. Effect?",
        options: [
            "A population boom.",
            "Labor shortages and increased wages for survivors.",
            "Rise of feudalism.",
            "Improved public health infrastructure."
        ],
        answer: "Labor shortages and increased wages for survivors."
    },
    {
        question: "Cause: The discovery of gold in California in 1848. Effect?",
        options: [
            "A decrease in immigration to the United States.",
            "The California Gold Rush, leading to rapid population growth and development.",
            "A decline in the value of gold worldwide.",
            "The expansion of Native American territories."
        ],
        answer: "The California Gold Rush, leading to rapid population growth and development."
    },
    {
        question: "Cause: The assassination of Archduke Franz Ferdinand in 1914. Effect?",
        options: [
            "The immediate end of all European alliances.",
            "The start of World War II.",
            "A diplomatic resolution among European powers.",
            "The triggering of a series of events leading to World War I."
        ],
        answer: "The triggering of a series of events leading to World War I."
    }
];

// Renaissance Memory Game Data
export const memoryGameCards = [
    { id: 'mona_lisa', image: 'images/memory_game/mona_lisa.jpg', fact: 'Leonardo da Vinci\'s iconic portrait, famous for its enigmatic smile.' },
    { id: 'david', image: 'images/memory_game/david.jpg', fact: 'Michelangelo\'s masterpiece, depicting the Biblical hero David.' },
    { id: 'birth_of_venus', image: 'images/memory_game/birth_of_venus.jpg', fact: 'Sandro Botticelli\'s painting depicting the goddess Venus arriving at the shore.' },
    { id: 'last_supper', image: 'images/memory_game/last_supper.jpg', fact: 'Leonardo da Vinci\'s mural depicting the final meal of Jesus with his apostles.' },
    { id: 'creation_of_adam', image: 'images/memory_game/creation_of_adam.jpg', fact: 'A famous fresco painting by Michelangelo, forming part of the Sistine Chapel ceiling.' },
    { id: 'arnolfini_portrait', image: 'images/memory_game/arnolfini_portrait.jpg', fact: 'Jan van Eyck\'s oil painting, notable for its complex iconography and optical effects.' }
];

// Fashion Chatbot Responses
export const fashionChatbotResponses = [
    {
        keywords: ['ancient egypt', 'egyptian fashion'],
        response: 'Ancient Egyptian fashion was primarily made of linen, light and breathable for the hot climate. Both men and women wore simple tunics or schenti, often adorned with elaborate collars and jewelry. Wigs were common for hygiene and status.'
    },
    {
        keywords: ['roman fashion', 'ancient rome'],
        response: 'Roman citizens, particularly men, were known for the toga, a large piece of wool fabric draped around the body. Women wore stolae (a long dress) and palla (a cloak). Practicality and social status dictated clothing choices.'
    },
    {
        keywords: ['medieval fashion', 'middle ages clothing'],
        response: 'Medieval fashion was heavily influenced by social class and modesty. Peasants wore simple tunics and leggings made of wool or linen. Nobles wore richer fabrics like silk and velvet, with more elaborate designs like fitted bodices and long flowing sleeves. Layering was common for warmth.'
    },
    {
        keywords: ['renaissance fashion'],
        response: 'Renaissance fashion, especially in Italy and Spain, saw a rise in structured garments. Women wore elaborate gowns with tight bodices and wide skirts. Men wore doublets, hose, and later, padded shoulders. Rich colors, luxurious fabrics like velvet and brocade, and intricate embroidery were popular.'
    },
    {
        keywords: ['baroque fashion', '17th century fashion'],
        response: 'Baroque fashion (17th century) emphasized grandeur and drama. Men adopted the "cavalier" style with wide-brimmed hats, elaborate lace collars, and full breeches. Women wore voluminous gowns with wide skirts and low necklines. Wigs became enormous and highly stylized.'
    },
    {
        keywords: ['rococo fashion', '18th century fashion'],
        response: 'Rococo fashion (mid-18th century) was characterized by lightness, asymmetry, and intricate ornamentation. Pastel colors, floral motifs, and delicate lace were common. Women wore wide panniers to create broad silhouettes, while men adopted simpler, but still elegant, coats and waistcoats.'
    },
    {
        keywords: ['victorian fashion', '19th century fashion'],
        response: 'Victorian fashion (mid-19th century) was defined by modesty, elaborate layers, and changing silhouettes. Women moved from crinolines to bustles, with tight corsets shaping the waist. Men wore tailored suits, often with top hats. Darker colors and heavy fabrics were common.'
    },
    {
        keywords: ['1920s fashion', 'flapper'],
        response: 'The 1920s, or the Roaring Twenties, brought the iconic flapper style. Women embraced looser, shorter dresses, dropped waists, and bobbed hair, reflecting a new sense of freedom. Men wore wider suits and fedoras.'
    },
    {
        keywords: ['1950s fashion', 'new look'],
        response: 'The 1950s saw Christian Dior\'s "New Look" define women\'s fashion: cinched waists, full skirts, and rounded shoulders, a return to femininity after wartime austerity. Men\'s fashion remained classic, with suits and casual wear becoming more common.'
    },
    {
        keywords: ['1960s fashion', 'mod fashion'],
        response: 'The 1960s was a decade of youth rebellion and diverse styles. Mini-skirts, go-go boots, and geometric patterns defined Mod fashion. Hippie culture introduced tie-dye, bell-bottoms, and ethnic prints. Unisex clothing also began to emerge.'
    },
    {
        keywords: ['1980s fashion', '80s fashion'],
        response: 'The 1980s were all about bold statements: power dressing with strong shoulders for women, bright neon colors, oversized clothing, and athletic wear as everyday fashion. Think big hair, shoulder pads, and tracksuits.'
    },
    {
        keywords: ['sustainable fashion'],
        response: 'Sustainable fashion focuses on environmentally friendly and ethically produced clothing. It emphasizes reducing waste, using eco-friendly materials, fair labor practices, and promoting longevity and recycling of garments.'
    },
    {
        keywords: ['fashion today', 'current fashion', '21st century fashion'],
        response: '21st-century fashion is highly globalized and diverse. Key trends include athleisure, gender-neutral clothing, fast fashion (though with growing criticism), vintage revival, and increasing integration of technology into fabrics and design.'
    },
    {
        keywords: ['what is fashion', 'define fashion'],
        response: 'Fashion is a popular style, especially in clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body. It is a reflection of cultural, social, and economic shifts throughout history.'
    },
    {
        keywords: ['hello', 'hi', 'hey'],
        response: 'Hello! I am your fashion historian chatbot. What would you like to know about fashion through the ages?'
    },
    {
        keywords: ['thank you', 'thanks'],
        response: 'You\'re welcome! Is there anything else I can assist you with regarding historical fashion?'
    },
    {
        keywords: ['bye', 'goodbye'],
        response: 'Goodbye! Feel free to ask me anything about fashion whenever you return.'
    }
];

// Tool Matching Game Images (ensure these paths are correct in your project)
export const toolImages = {
    hammer: 'images/tools/hammer.png',
    chisel: 'images/tools/chisel.png',
    sickle: 'images/tools/sickle.png',
    plow: 'images/tools/plow.png',
    pottery_wheel: 'images/tools/pottery_wheel.png',
    loom: 'images/tools/loom.png',
    quill_pen: 'images/tools/quill_pen.png',
    abacus: 'images/tools/abacus.png'
};

// Common audio elements
export const correctSound = document.getElementById('correctSound');
export const incorrectSound = document.getElementById('incorrectSound');

export function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0; // Rewind to start
        audioElement.play().catch(e => console.error("Error playing sound:", e));
    }
}

// Global utility for shuffling arrays
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Global utility for showing/hiding elements with display: none
export function showElement(element) {
    if (element) element.style.display = 'block';
}

export function hideElement(element) {
    if (element) element.style.display = 'none';
}

// Global utility for adding/removing CSS classes
export function addClass(element, className) {
    if (element) element.classList.add(className);
}

export function removeClass(element, className) {
    if (element) element.classList.remove(className);
}

// Global event listener utility
export function on(element, event, handler) {
    if (element) element.addEventListener(event, handler);
}

export function off(element, event, handler) {
    if (element) element.removeEventListener(event, handler);
}