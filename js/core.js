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

// Art Timeline Data
export const artEras = [
    {
        id: 'prehistoric',
        name: 'Prehistoric Art',
        period: 'c. 40,000 – 4,000 BCE',
        description: 'The earliest forms of human expression, including cave paintings, sculptures, and megalithic structures, often reflecting spiritual beliefs and daily life.',
        image: 'images/art/prehistoric_art.jpg',
        details: [
            { title: 'Lascaux Cave Paintings', era: 'Upper Paleolithic', fact: 'Discovered in France, these depict large animals and are over 17,000 years old.' },
            { title: 'Venus of Willendorf', era: 'Upper Paleolithic', fact: 'A small, fertility figurine found in Austria, dating back around 25,000 years.' }
        ]
    },
    {
        id: 'ancient_art',
        name: 'Ancient Art',
        period: 'c. 4000 BCE – 400 CE',
        description: 'From monumental Egyptian pyramids and Greek sculptures to Roman frescoes, ancient art served religious, political, and commemorative purposes.',
        image: 'images/art/ancient_art.jpg',
        details: [
            { title: 'Pyramids of Giza', era: 'Ancient Egypt', fact: 'Massive tombs built for pharaohs, showcasing Egyptian engineering and religious beliefs.' },
            { title: 'Parthenon', era: 'Ancient Greece', fact: 'A temple dedicated to the goddess Athena, exemplifying classical Greek architecture and sculpture.' }
        ]
    },
    {
        id: 'medieval_art',
        name: 'Medieval Art',
        period: 'c. 400 – 1400 CE',
        description: 'Characterized by religious themes, illuminated manuscripts, mosaics, and Gothic cathedrals, reflecting the spiritual focus of the Middle Ages.',
        image: 'images/art/medieval_art.jpg',
        details: [
            { title: 'Book of Kells', era: 'Insular Art', fact: 'An illuminated manuscript Gospel book, a masterpiece of Western calligraphy.' },
            { title: 'Notre Dame Cathedral', era: 'Gothic', fact: 'A iconic example of French Gothic architecture with stunning stained glass.' }
        ]
    },
    {
        id: 'renaissance_art',
        name: 'Renaissance Art',
        period: 'c. 1400 – 1600 CE',
        description: 'A rebirth of classical ideals, focusing on humanism, perspective, and naturalism, with masters like Leonardo da Vinci and Michelangelo.',
        image: 'images/art/renaissance_art.jpg',
        details: [
            { title: 'Mona Lisa', era: 'High Renaissance', fact: 'Leonardo da Vinci\'s iconic portrait, famous for its enigmatic smile.' },
            { title: 'Sistine Chapel Ceiling', era: 'High Renaissance', fact: 'Michelangelo\'s monumental fresco cycle in the Vatican City.' }
        ]
    },
    {
        id: 'baroque_rococo',
        name: 'Baroque & Rococo',
        period: 'c. 1600 – 1750 CE',
        description: 'Baroque emphasized drama, grandeur, and emotion, while Rococo moved towards lightheartedness, elaborate ornamentation, and asymmetry.',
        image: 'images/art/baroque_rococo_art.jpg',
        details: [
            { title: 'The Night Watch', era: 'Baroque', fact: 'Rembrandt van Rijn\'s famous group portrait, known for its dramatic use of light and shadow.' },
            { title: 'The Swing', era: 'Rococo', fact: 'Jean-Honoré Fragonard\'s quintessential Rococo painting, full of playful sensuality.' }
        ]
    },
    {
        id: 'neoclassicism_romanticism',
        name: 'Neoclassicism & Romanticism',
        period: 'c. 1750 – 1850 CE',
        description: 'Neoclassicism revived classical forms and ideals, while Romanticism championed emotion, individualism, and the sublime in nature.',
        image: 'images/art/neoclassicism_romanticism_art.jpg',
        details: [
            { title: 'Oath of the Horatii', era: 'Neoclassicism', fact: 'Jacques-Louis David\'s masterpiece, embodying civic virtue and heroism.' },
            { title: 'Liberty Leading the People', era: 'Romanticism', fact: 'Eugène Delacroix\'s iconic depiction of the July Revolution of 1830.' }
        ]
    },
    {
        id: 'impressionism_postimpressionism',
        name: 'Impressionism & Post-Impressionism',
        period: 'c. 1860 – 1910 CE',
        description: 'Impressionism captured fleeting moments and light, while Post-Impressionism explored personal expression, symbolism, and structured forms.',
        image: 'images/art/impressionism_postimpressionism_art.jpg',
        details: [
            { title: 'Impression, Sunrise', era: 'Impressionism', fact: 'Claude Monet\'s painting that gave the movement its name, focusing on light and atmosphere.' },
            { title: 'Starry Night', era: 'Post-Impressionism', fact: 'Vincent van Gogh\'s iconic work, known for its swirling sky and emotional intensity.' }
        ]
    },
    {
        id: 'modern_art',
        name: 'Modern Art',
        period: 'c. 1900 CE – Present',
        description: 'A vast and diverse period including Cubism, Surrealism, Abstract Expressionism, Pop Art, and contemporary movements, constantly redefining art.',
        image: 'images/art/modern_art.jpg',
        details: [
            { title: 'Les Demoiselles d\'Avignon', era: 'Cubism', fact: 'Pablo Picasso\'s groundbreaking work, a precursor to Cubism.' },
            { title: 'Campbell\'s Soup Cans', era: 'Pop Art', fact: 'Andy Warhol\'s series, challenging traditional art notions with everyday objects.' }
        ]
    }
];


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


// Quizzes Data (Example structure for Art Quiz)
export const artQuizQuestions = [
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci",
        fact: "The Mona Lisa is famous for its enigmatic smile and the sfumato technique, where colors and tones are blended to create soft, hazy transitions."
    },
    {
        question: "Which movement is characterized by the use of strong, vibrant colors and distorted forms to evoke emotion?",
        options: ["Cubism", "Impressionism", "Expressionism", "Surrealism"],
        answer: "Expressionism",
        fact: "Expressionism emerged in Germany in the early 20th century, emphasizing the artist's inner experience rather than objective reality."
    },
    {
        question: "What ancient Greek architectural order is characterized by plain, sturdy columns with a simple capital?",
        options: ["Doric", "Ionic", "Corinthian", "Tuscan"],
        answer: "Doric",
        fact: "The Doric order is the oldest and simplest of the three classical Greek architectural orders, known for its robust and austere appearance."
    },
    {
        question: "Which artist is known for painting melting clocks?",
        options: ["René Magritte", "Frida Kahlo", "Salvador Dalí", "Joan Miró"],
        answer: "Salvador Dalí",
        fact: "Salvador Dalí was a prominent Spanish Surrealist artist best known for his striking and bizarre images, such as those in 'The Persistence of Memory'."
    },
    {
        question: "What is the technique of painting on wet plaster called?",
        options: ["Tempera", "Oil painting", "Fresco", "Gouache"],
        answer: "Fresco",
        fact: "Fresco painting, particularly 'buon fresco,' involves painting with water-based pigments on freshly applied wet plaster, allowing the paint to become an integral part of the wall."
    }
];

// Art Facts
export const artFacts = [
    "The world's most expensive painting ever sold is Leonardo da Vinci's 'Salvator Mundi,' fetching $450.3 million.",
    "The 'Mona Lisa' has its own mailbox at the Louvre because of all the love letters it receives.",
    "Van Gogh only sold one painting during his lifetime, 'The Red Vineyard.'",
    "Picasso was a prolific artist, producing an estimated 50,000 artworks.",
    "The 'Sistine Chapel Ceiling' by Michelangelo took him four years to complete (1508-1512).",
    "Pointillism is an art technique in which small, distinct dots of color are applied in patterns to form an image.",
    "The ancient Greeks painted their marble statues with vibrant colors, a fact often forgotten today.",
    "The 'Venus de Milo' statue is missing its arms, and their original position remains a mystery.",
    "The color ultramarine, originally made from lapis lazuli, was once more expensive than gold.",
    "Street art pioneer Banksy's true identity remains unknown despite global fame.",
    "Many famous artists, like Georgia O'Keeffe, were inspired by natural forms and landscapes."
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