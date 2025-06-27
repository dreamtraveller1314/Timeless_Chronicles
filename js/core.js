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


  const fashionEras = [
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



const medievalQuestData = {
        start: {
            text: "You are living in medieval Europe. Choose your path:",
            options: [
                { text: "Become a Knight", next: "knightStart" },
                { text: "Join the Crusades", next: "crusadesStart" },
                { text: "Become a Traveling Merchant", next: "merchantStart" }
            ]
        },

        
        knightStart: {
            text: "As a knight, you swear fealty to your lord and prepare for battle. What is your first mission?",
            options: [
                { text: "Protect the village from raiders", next: "protectVillage" },
                { text: "Enter a grand tournament", next: "tournament" }
            ]
        },
        protectVillage: {
            text: "You defend the village from bandits! 🏰 Fun fact: Knights were often called upon to protect local lands, not just fight in wars. Now, what will you do?",
            options: [
                { text: "Train new squires", next: "trainSquires" },
                { text: "Travel to court for political matters", next: "courtPolitics" }
            ]
        },
        tournament: {
            text: "You compete in jousts and melee fights, gaining fame. ⚔ Fun fact: Tournaments were both entertainment and a way to sharpen combat skills. What next?",
            options: [
                { text: "Spend winnings on better armor", next: "betterArmor" },
                { text: "Donate earnings to the church", next: "donateChurch" }
            ]
        },
        trainSquires: {
            text: "You mentor young squires, passing on chivalry and skills. 📜 Fun fact: Training took years, and squires learned weaponry, horsemanship, and etiquette.",
            options: [] 
        },
        courtPolitics: {
            text: "You navigate court intrigue, building alliances. 🏛 Fun fact: Many knights were involved in political plots, not just battlefield duties.",
            options: [] 
        },
        betterArmor: {
            text: "You upgrade to full plate armor, becoming nearly invincible. 🛡 Fun fact: By the late Middle Ages, plate armor provided top-tier protection.",
            options: [] 
        },
        donateChurch: {
            text: "You donate to the local monastery, ensuring prayers for your soul. ⛪ Fun fact: The medieval church wielded massive influence over society and politics.",
            options: [] 
        },

        
        crusadesStart: {
            text: "You embark on the Crusades to the Holy Land. The journey is perilous. How will you approach it?",
            options: [
                { text: "Lead a charge into battle", next: "leadCharge" },
                { text: "Negotiate with local leaders", next: "negotiate" }
            ]
        },
        leadCharge: {
            text: "You bravely lead a charge, but many are lost. ⚔ Fun fact: The Crusades saw both heroic feats and terrible losses. What do you do next?",
            options: [
                { text: "Retreat and regroup", next: "retreatRegroup" },
                { text: "Press on for victory", next: "pressOn" }
            ]
        },
        negotiate: {
            text: "You broker a temporary peace, avoiding bloodshed. 🤝 Fun fact: Despite their reputation, some Crusader leaders sought diplomacy.",
            options: [
                { text: "Establish trade routes", next: "crusadeTrade" },
                { text: "Return home as a respected envoy", next: "crusadeReturnHome" }
            ]
        },
        retreatRegroup: {
            text: "You save your men but lose ground. ⚔ Fun fact: Not all Crusades were successful — many ended in failure or retreat.",
            options: []
        },
        pressOn: {
            text: "You seize a key stronghold, but at a cost. 🏰 Fun fact: Crusader castles were key to holding territory in foreign lands.",
            options: []
        },
        crusadeTrade: {
            text: "You help set up trade between East and West, bringing new goods home. 🌍 Fun fact: The Crusades opened Europe to spices, silk, and ideas.",
            options: []
        },
        crusadeReturnHome: {
            text: "You return home as a hero, sharing tales of distant lands. 🏡 Fun fact: Crusaders brought back exotic knowledge, art, and culture.",
            options: []
        },

        
        merchantStart: {
            text: "As a merchant, you navigate trade routes across Europe and beyond. What goods will you focus on?",
            options: [
                { text: "Spices and exotic goods", next: "merchantSpices" },
                { text: "Textiles and fine fabrics", next: "merchantFabrics" }
            ]
        },
        merchantSpices: {
            text: "You import valuable spices, making huge profits. 🌶 Fun fact: Pepper, cloves, and cinnamon were luxury items in medieval Europe. What challenge arises?",
            options: [
                { text: "Face pirate attacks", next: "merchantPirates" },
                { text: "Deal with corrupt officials", next: "merchantOfficials" }
            ]
        },
        merchantFabrics: {
            text: "You bring silk and wool across Europe, impressing nobles. 🧵 Fun fact: Fine fabrics symbolized wealth and status. What's next?",
            options: [
                { text: "Expand into jewelry trade", next: "merchantJewelry" },
                { text: "Invest in shipbuilding", next: "merchantShips" }
            ]
        },
        merchantPirates: {
            text: "You fend off pirates and secure your cargo. 🏴‍☠️ Fun fact: Medieval maritime trade was risky, with pirates and storms common.",
            options: []
        },
        merchantOfficials: {
            text: "You bribe officials to smooth your operations. 💰 Fun fact: Corruption was rampant, and merchants often paid for protection.",
            options: []
        },
        merchantJewelry: {
            text: "You trade precious gems, winning powerful clients. 💎 Fun fact: Medieval jewelry blended local craftsmanship with imported gems.",
            options: []
        },
        merchantShips: {
            text: "You invest in bigger ships, expanding your reach. 🚢 Fun fact: Merchant fleets were vital to medieval economies and exploration.",
            options: []
        }
    };

const historyEvents = {
    prehistory: { title: "Prehistory (3.3M–3000 BCE)", content: "Stone tools, fire, farming, and early villages before writing." },
    ancient: { title: "Ancient Times (3000 BCE - 500 CE)", content: "The rise of early civilizations like Egypt, Greece, and Rome." },
    middle_age: { title: "Middle Ages (500 - 1500 CE)", content: "The era of feudalism, castles, and the rise of empires." },
    renaissance: { title: "Renaissance & Enlightenment (1500 - 1800)", content: "A rebirth of art, science, and philosophy." },
    modern: { title: "Modern Era (1800s-1945)", content: "Industrial revolution to digital technology." },
    contemporary: { title: "Contemporary Era (1945 – Present)", content: "Globalization, digital revolution, and shifting global powers." }
};


  const monumentPuzzleImages = [
    { id: 'colosseum', src: 'images/puzzles/colosseum_full.jpg', name: 'Colosseum' },
    { id: 'pyramid', src: 'images/puzzles/pyramid_full.jpg', name: 'Pyramid of Giza' },
    { id: 'parthenon', src: 'images/puzzles/parthenon_full.jpg', name: 'Parthenon' },
    { id: 'taj_mahal', src: 'images/puzzles/taj_mahal_full.jpg', name: 'Taj Mahal' }
];


  const causeEffectQuestions = [
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


  const memoryGameCards = [
        { name: "Mona Lisa", img: "images/mona_lisa.jpg", fact: "The Mona Lisa, painted by Leonardo da Vinci, is famous for her enigmatic smile and is one of the world's most recognizable artworks." },
        { name: "The Birth of Venus", img: "images/venus.jpg", fact: "Sandro Botticelli's 'The Birth of Venus' depicts the goddess Venus arriving on shore after her birth, celebrating classical beauty and mythological themes." },
        { name: "The School of Athens", img: "images/athens.jpg", fact: "Raphael's 'The School of Athens' is a fresco showcasing ancient Greek philosophers and scientists, including Plato, Aristotle, and Socrates." },
        { name: "Primavera", img: "images/primavera.jpg", fact: "Botticelli's 'Primavera' is an allegorical painting depicting a group of mythological figures in a lush garden, representing the arrival of spring." }
    ];


  const fashionChatbotResponses = [
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

  const correctSound = document.getElementById('correctSound');

  function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0; 
        audioElement.play().catch(e => console.error("Error playing sound:", e));
    }
}


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


  function showElement(element) {
    if (element) element.style.display = 'block';
}

  function hideElement(element) {
    if (element) element.style.display = 'none';
}


  function addClass(element, className) {
    if (element) element.classList.add(className);
}

  function removeClass(element, className) {
    if (element) element.classList.remove(className);
}


  function on(element, event, handler) {
    if (element) element.addEventListener(event, handler);
}

  function off(element, event, handler) {
    if (element) element.removeEventListener(event, handler);
}

document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 1500);

    
    window.shuffleArray = function(arr) {
        
        const array = arr.slice();
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
});

window.artPeriods = artPeriods;
window.artFacts = artFacts;
window.artQuestions = artQuestions;
window.fashionEras = fashionEras;
window.historyEvents = historyEvents;
window.medievalQuestData = medievalQuestData;
window.monumentPuzzleImages = monumentPuzzleImages;
window.causeEffectQuestions = causeEffectQuestions;
window.memoryGameCards = memoryGameCards;
window.fashionChatbotResponses = fashionChatbotResponses;
window.correctSound = correctSound;
window.playSound = playSound;
window.shuffleArray = shuffleArray;
window.showElement = showElement;
window.hideElement = hideElement;
window.addClass = addClass;
window.removeClass = removeClass;
window.on = on;
window.off = off;