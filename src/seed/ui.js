//UI additions by Aquila
//Only thing I want to add later is images/searching for bosses
const jokers = [
    { "name": "Joker", "pos": { "x": 0, "y": 0 } }, { "name": "Greedy Joker", "pos": { "x": 6, "y": 1 } }, { "name": "Lusty Joker", "pos": { "x": 7, "y": 1 } }, { "name": "Wrathful Joker", "pos": { "x": 8, "y": 1 } }, { "name": "Gluttonous Joker", "pos": { "x": 9, "y": 1 } }, { "name": "Jolly Joker", "pos": { "x": 2, "y": 0 } }, { "name": "Zany Joker", "pos": { "x": 3, "y": 0 } }, { "name": "Mad Joker", "pos": { "x": 4, "y": 0 } }, { "name": "Crazy Joker", "pos": { "x": 5, "y": 0 } }, { "name": "Droll Joker", "pos": { "x": 6, "y": 0 } }, { "name": "Sly Joker", "pos": { "x": 0, "y": 14 } }, { "name": "Wily Joker", "pos": { "x": 1, "y": 14 } }, { "name": "Clever Joker", "pos": { "x": 2, "y": 14 } }, { "name": "Devious Joker", "pos": { "x": 3, "y": 14 } }, { "name": "Crafty Joker", "pos": { "x": 4, "y": 14 } }, { "name": "Half Joker", "pos": { "x": 7, "y": 0 } }, { "name": "Joker Stencil", "pos": { "x": 2, "y": 5 } }, { "name": "Four Fingers", "pos": { "x": 6, "y": 6 } }, { "name": "Mime", "pos": { "x": 4, "y": 1 } }, { "name": "Credit Card", "pos": { "x": 5, "y": 1 } }, { "name": "Ceremonial Dagger", "pos": { "x": 5, "y": 5 } }, { "name": "Banner", "pos": { "x": 1, "y": 2 } }, { "name": "Mystic Summit", "pos": { "x": 2, "y": 2 } }, { "name": "Marble Joker", "pos": { "x": 3, "y": 2 } }, { "name": "Loyalty Card", "pos": { "x": 4, "y": 2 } }, { "name": "8 Ball", "pos": { "x": 0, "y": 5 } }, { "name": "Misprint", "pos": { "x": 6, "y": 2 } }, { "name": "Dusk", "pos": { "x": 4, "y": 7 } }, { "name": "Raised Fist", "pos": { "x": 8, "y": 2 } }, { "name": "Chaos the Clown", "pos": { "x": 1, "y": 0 } }, { "name": "Fibonacci", "pos": { "x": 1, "y": 5 } }, { "name": "Steel Joker", "pos": { "x": 7, "y": 2 } }, { "name": "Scary Face", "pos": { "x": 2, "y": 3 } }, { "name": "Abstract Joker", "pos": { "x": 3, "y": 3 } }, { "name": "Delayed Gratification", "pos": { "x": 4, "y": 3 } }, { "name": "Hack", "pos": { "x": 5, "y": 2 } }, { "name": "Pareidolia", "pos": { "x": 6, "y": 3 } }, { "name": "Gros Michel", "pos": { "x": 7, "y": 6 } }, { "name": "Even Steven", "pos": { "x": 8, "y": 3 } }, { "name": "Odd Todd", "pos": { "x": 9, "y": 3 } }, { "name": "Scholar", "pos": { "x": 3, "y": 6 } }, { "name": "Business Card", "pos": { "x": 1, "y": 4 } }, { "name": "Supernova", "pos": { "x": 2, "y": 4 } }, { "name": "Ride the Bus", "pos": { "x": 1, "y": 6 } }, { "name": "Space Joker", "pos": { "x": 3, "y": 5 } }, { "name": "Egg", "pos": { "x": 0, "y": 10 } }, { "name": "Burglar", "pos": { "x": 1, "y": 10 } }, { "name": "Blackboard", "pos": { "x": 2, "y": 10 } }, { "name": "Runner", "pos": { "x": 3, "y": 10 } }, { "name": "Ice Cream", "pos": { "x": 4, "y": 10 } }, { "name": "DNA", "pos": { "x": 5, "y": 10 } }, { "name": "Splash", "pos": { "x": 6, "y": 10 } }, { "name": "Blue Joker", "pos": { "x": 7, "y": 10 } }, { "name": "Sixth Sense", "pos": { "x": 8, "y": 10 } }, { "name": "Constellation", "pos": { "x": 9, "y": 10 } }, { "name": "Hiker", "pos": { "x": 0, "y": 11 } }, { "name": "Faceless Joker", "pos": { "x": 1, "y": 11 } }, { "name": "Green Joker", "pos": { "x": 2, "y": 11 } }, { "name": "Superposition", "pos": { "x": 3, "y": 11 } }, { "name": "To Do List", "pos": { "x": 4, "y": 11 } }, { "name": "Cavendish", "pos": { "x": 5, "y": 11 } }, { "name": "Card Sharp", "pos": { "x": 6, "y": 11 } }, { "name": "Red Card", "pos": { "x": 7, "y": 11 } }, { "name": "Madness", "pos": { "x": 8, "y": 11 } }, { "name": "Square Joker", "pos": { "x": 9, "y": 11 } }, { "name": "Seance", "pos": { "x": 0, "y": 12 } }, { "name": "Riff-raff", "pos": { "x": 1, "y": 12 } }, { "name": "Vampire", "pos": { "x": 2, "y": 12 } }, { "name": "Shortcut", "pos": { "x": 3, "y": 12 } }, { "name": "Hologram", "pos": { "x": 4, "y": 12 } }, { "name": "Vagabond", "pos": { "x": 5, "y": 12 } }, { "name": "Baron", "pos": { "x": 6, "y": 12 } }, { "name": "Cloud 9", "pos": { "x": 7, "y": 12 } }, { "name": "Rocket", "pos": { "x": 8, "y": 12 } }, { "name": "Obelisk", "pos": { "x": 9, "y": 12 } }, { "name": "Midas Mask", "pos": { "x": 0, "y": 13 } }, { "name": "Luchador", "pos": { "x": 1, "y": 13 } }, { "name": "Photograph", "pos": { "x": 2, "y": 13 } }, { "name": "Gift Card", "pos": { "x": 3, "y": 13 } }, { "name": "Turtle Bean", "pos": { "x": 4, "y": 13 } }, { "name": "Erosion", "pos": { "x": 5, "y": 13 } }, { "name": "Reserved Parking", "pos": { "x": 6, "y": 13 } }, { "name": "Mail In Rebate", "pos": { "x": 7, "y": 13 } }, { "name": "To the Moon", "pos": { "x": 8, "y": 13 } }, { "name": "Hallucination", "pos": { "x": 9, "y": 13 } }, { "name": "Fortune Teller", "pos": { "x": 7, "y": 5 } }, { "name": "Juggler", "pos": { "x": 0, "y": 1 } }, { "name": "Drunkard", "pos": { "x": 1, "y": 1 } }, { "name": "Stone Joker", "pos": { "x": 9, "y": 0 } }, { "name": "Golden Joker", "pos": { "x": 9, "y": 2 } }, { "name": "Lucky Cat", "pos": { "x": 5, "y": 14 } }, { "name": "Baseball Card", "pos": { "x": 6, "y": 14 } }, { "name": "Bull", "pos": { "x": 7, "y": 14 } }, { "name": "Diet Cola", "pos": { "x": 8, "y": 14 } }, { "name": "Trading Card", "pos": { "x": 9, "y": 14 } }, { "name": "Flash Card", "pos": { "x": 0, "y": 15 } }, { "name": "Popcorn", "pos": { "x": 1, "y": 15 } }, { "name": "Spare Trousers", "pos": { "x": 4, "y": 15 } }, { "name": "Ancient Joker", "pos": { "x": 7, "y": 15 } }, { "name": "Ramen", "pos": { "x": 2, "y": 15 } }, { "name": "Walkie Talkie", "pos": { "x": 8, "y": 15 } }, { "name": "Seltzer", "pos": { "x": 3, "y": 15 } }, { "name": "Castle", "pos": { "x": 9, "y": 15 } }, { "name": "Smiley Face", "pos": { "x": 6, "y": 15 } }, { "name": "Campfire", "pos": { "x": 5, "y": 15 } }, { "name": "Golden Ticket", "pos": { "x": 5, "y": 3 } }, { "name": "Mr. Bones", "pos": { "x": 3, "y": 4 } }, { "name": "Acrobat", "pos": { "x": 2, "y": 1 } }, { "name": "Sock and Buskin", "pos": { "x": 3, "y": 1 } }, { "name": "Swashbuckler", "pos": { "x": 9, "y": 5 } }, { "name": "Troubadour", "pos": { "x": 0, "y": 2 } }, { "name": "Certificate", "pos": { "x": 8, "y": 8 } }, { "name": "Smeared Joker", "pos": { "x": 4, "y": 6 } }, { "name": "Throwback", "pos": { "x": 5, "y": 7 } }, { "name": "Hanging Chad", "pos": { "x": 9, "y": 6 } }, { "name": "Rough Gem", "pos": { "x": 9, "y": 7 } }, { "name": "Bloodstone", "pos": { "x": 0, "y": 8 } }, { "name": "Arrowhead", "pos": { "x": 1, "y": 8 } }, { "name": "Onyx Agate", "pos": { "x": 2, "y": 8 } }, { "name": "Glass Joker", "pos": { "x": 1, "y": 3 } }, { "name": "Showman", "pos": { "x": 6, "y": 5 } }, { "name": "Flower Pot", "pos": { "x": 0, "y": 6 } }, { "name": "Blueprint", "pos": { "x": 0, "y": 3 } }, { "name": "Wee Joker", "pos": { "x": 0, "y": 4 } }, { "name": "Merry Andy", "pos": { "x": 8, "y": 0 } }, { "name": "Oops! All 6s", "pos": { "x": 5, "y": 6 } }, { "name": "The Idol", "pos": { "x": 6, "y": 7 } }, { "name": "Seeing Double", "pos": { "x": 4, "y": 4 } }, { "name": "Matador", "pos": { "x": 4, "y": 5 } }, { "name": "Hit the Road", "pos": { "x": 8, "y": 5 } }, { "name": "The Duo", "pos": { "x": 5, "y": 4 } }, { "name": "The Trio", "pos": { "x": 6, "y": 4 } }, { "name": "The Family", "pos": { "x": 7, "y": 4 } }, { "name": "The Order", "pos": { "x": 8, "y": 4 } }, { "name": "The Tribe", "pos": { "x": 9, "y": 4 } }, { "name": "Stuntman", "pos": { "x": 8, "y": 6 } }, { "name": "Invisible Joker", "pos": { "x": 1, "y": 7 } }, { "name": "Brainstorm", "pos": { "x": 7, "y": 7 } }, { "name": "Satellite", "pos": { "x": 8, "y": 7 } }, { "name": "Shoot the Moon", "pos": { "x": 2, "y": 6 } }, { "name": "Drivers License", "pos": { "x": 0, "y": 7 } }, { "name": "Cartomancer", "pos": { "x": 7, "y": 3 } }, { "name": "Astronomer", "pos": { "x": 2, "y": 7 } }, { "name": "Burnt Joker", "pos": { "x": 3, "y": 7 } }, { "name": "Bootstraps", "pos": { "x": 9, "y": 8 } }, { "name": "Canio", "pos": { "x": 3, "y": 8 } }, { "name": "Triboulet", "pos": { "x": 4, "y": 8 } }, { "name": "Yorick", "pos": { "x": 5, "y": 8 } }, { "name": "Chicot", "pos": { "x": 6, "y": 8 } }, { "name": "Perkeo", "pos": { "x": 7, "y": 8 } }

];
const tarotsAndPlanets = [
    { "name": "The Fool", "pos": { "x": 0, "y": 0 } }, { "name": "The Magician", "pos": { "x": 1, "y": 0 } }, { "name": "The High Priestess", "pos": { "x": 2, "y": 0 } }, { "name": "The Empress", "pos": { "x": 3, "y": 0 } }, { "name": "The Emperor", "pos": { "x": 4, "y": 0 } }, { "name": "The Hierophant", "pos": { "x": 5, "y": 0 } }, { "name": "The Lovers", "pos": { "x": 6, "y": 0 } }, { "name": "The Chariot", "pos": { "x": 7, "y": 0 } }, { "name": "Justice", "pos": { "x": 8, "y": 0 } }, { "name": "The Hermit", "pos": { "x": 9, "y": 0 } }, { "name": "The Wheel of Fortune", "pos": { "x": 0, "y": 1 } }, { "name": "Strength", "pos": { "x": 1, "y": 1 } }, { "name": "The Hanged Man", "pos": { "x": 2, "y": 1 } }, { "name": "Death", "pos": { "x": 3, "y": 1 } }, { "name": "Temperance", "pos": { "x": 4, "y": 1 } }, { "name": "The Devil", "pos": { "x": 5, "y": 1 } }, { "name": "The Tower", "pos": { "x": 6, "y": 1 } }, { "name": "The Star", "pos": { "x": 7, "y": 1 } }, { "name": "The Moon", "pos": { "x": 8, "y": 1 } }, { "name": "The Sun", "pos": { "x": 9, "y": 1 } }, { "name": "Judgement", "pos": { "x": 0, "y": 2 } }, { "name": "The World", "pos": { "x": 1, "y": 2 } }, { "name": "Mercury", "pos": { "x": 0, "y": 3 } }, { "name": "Venus", "pos": { "x": 1, "y": 3 } }, { "name": "Earth", "pos": { "x": 2, "y": 3 } }, { "name": "Mars", "pos": { "x": 3, "y": 3 } }, { "name": "Jupiter", "pos": { "x": 4, "y": 3 } }, { "name": "Saturn", "pos": { "x": 5, "y": 3 } }, { "name": "Uranus", "pos": { "x": 6, "y": 3 } }, { "name": "Neptune", "pos": { "x": 7, "y": 3 } }, { "name": "Pluto", "pos": { "x": 8, "y": 3 } }, { "name": "Planet X", "pos": { "x": 9, "y": 2 } }, { "name": "Ceres", "pos": { "x": 8, "y": 2 } }, { "name": "Eris", "pos": { "x": 3, "y": 2 } }, { "name": "Familiar", "pos": { "x": 0, "y": 4 } }, { "name": "Grim", "pos": { "x": 1, "y": 4 } }, { "name": "Incantation", "pos": { "x": 2, "y": 4 } }, { "name": "Talisman", "pos": { "x": 3, "y": 4 } }, { "name": "Aura", "pos": { "x": 4, "y": 4 } }, { "name": "Wraith", "pos": { "x": 5, "y": 4 } }, { "name": "Sigil", "pos": { "x": 6, "y": 4 } }, { "name": "Ouija", "pos": { "x": 7, "y": 4 } }, { "name": "Ectoplasm", "pos": { "x": 8, "y": 4 } }, { "name": "Immolate", "pos": { "x": 9, "y": 4 } }, { "name": "Ankh", "pos": { "x": 0, "y": 5 } }, { "name": "Deja Vu", "pos": { "x": 1, "y": 5 } }, { "name": "Hex", "pos": { "x": 2, "y": 5 } }, { "name": "Trance", "pos": { "x": 3, "y": 5 } }, { "name": "Medium", "pos": { "x": 4, "y": 5 } }, { "name": "Cryptid", "pos": { "x": 5, "y": 5 } }, { "name": "The Soul", "pos": { "x": 2, "y": 2 } }, { "name": "Black Hole", "pos": { "x": 9, "y": 3 } }

];
const tags = [
    { "name": "Uncommon Tag", "pos": { "x": 0, "y": 0 } }, { "name": "Rare Tag", "pos": { "x": 1, "y": 0 } }, { "name": "Negative Tag", "pos": { "x": 2, "y": 0 } }, { "name": "Foil Tag", "pos": { "x": 3, "y": 0 } }, { "name": "Holographic Tag", "pos": { "x": 0, "y": 1 } }, { "name": "Polychrome Tag", "pos": { "x": 1, "y": 1 } }, { "name": "Investment Tag", "pos": { "x": 2, "y": 1 } }, { "name": "Voucher Tag", "pos": { "x": 3, "y": 1 } }, { "name": "Boss Tag", "pos": { "x": 0, "y": 2 } }, { "name": "Standard Tag", "pos": { "x": 1, "y": 2 } }, { "name": "Charm Tag", "pos": { "x": 2, "y": 2 } }, { "name": "Meteor Tag", "pos": { "x": 3, "y": 2 } }, { "name": "Buffoon Tag", "pos": { "x": 4, "y": 2 } }, { "name": "Handy Tag", "pos": { "x": 1, "y": 3 } }, { "name": "Garbage Tag", "pos": { "x": 2, "y": 3 } }, { "name": "Ethereal Tag", "pos": { "x": 3, "y": 3 } }, { "name": "Coupon Tag", "pos": { "x": 4, "y": 0 } }, { "name": "Double Tag", "pos": { "x": 5, "y": 0 } }, { "name": "Juggle Tag", "pos": { "x": 5, "y": 1 } }, { "name": "D6 Tag", "pos": { "x": 5, "y": 3 } }, { "name": "Top-up Tag", "pos": { "x": 4, "y": 1 } }, { "name": "Speed Tag", "pos": { "x": 0, "y": 3 } }, { "name": "Orbital Tag", "pos": { "x": 5, "y": 2 } }, { "name": "Economy Tag", "pos": { "x": 4, "y": 3 } }
];
const vouchers = [
    { "name": "Overstock", "pos": { "x": 0, "y": 0 } }, { "name": "Clearance Sale", "pos": { "x": 3, "y": 0 } }, { "name": "Hone", "pos": { "x": 4, "y": 0 } }, { "name": "Reroll Surplus", "pos": { "x": 0, "y": 2 } }, { "name": "Crystal Ball", "pos": { "x": 2, "y": 2 } }, { "name": "Telescope", "pos": { "x": 3, "y": 2 } }, { "name": "Grabber", "pos": { "x": 5, "y": 0 } }, { "name": "Wasteful", "pos": { "x": 6, "y": 0 } }, { "name": "Tarot Merchant", "pos": { "x": 1, "y": 0 } }, { "name": "Planet Merchant", "pos": { "x": 2, "y": 0 } }, { "name": "Seed Money", "pos": { "x": 1, "y": 2 } }, { "name": "Blank", "pos": { "x": 7, "y": 0 } }, { "name": "Magic Trick", "pos": { "x": 4, "y": 2 } }, { "name": "Hieroglyph", "pos": { "x": 5, "y": 2 } }, { "name": "Director's Cut", "pos": { "x": 6, "y": 2 } }, { "name": "Paint Brush", "pos": { "x": 7, "y": 2 } }, { "name": "Overstock Plus", "pos": { "x": 0, "y": 1 } }, { "name": "Liquidation", "pos": { "x": 3, "y": 1 } }, { "name": "Glow Up", "pos": { "x": 4, "y": 1 } }, { "name": "Reroll Glut", "pos": { "x": 0, "y": 3 } }, { "name": "Omen Globe", "pos": { "x": 2, "y": 3 } }, { "name": "Observatory", "pos": { "x": 3, "y": 3 } }, { "name": "Nacho Tong", "pos": { "x": 5, "y": 1 } }, { "name": "Recyclomancy", "pos": { "x": 6, "y": 1 } }, { "name": "Tarot Tycoon", "pos": { "x": 1, "y": 1 } }, { "name": "Planet Tycoon", "pos": { "x": 2, "y": 1 } }, { "name": "Money Tree", "pos": { "x": 1, "y": 3 } }, { "name": "Antimatter", "pos": { "x": 7, "y": 1 } }, { "name": "Illusion", "pos": { "x": 4, "y": 3 } }, { "name": "Petroglyph", "pos": { "x": 5, "y": 3 } }, { "name": "Retcon", "pos": { "x": 6, "y": 3 } }, { "name": "Palette", "pos": { "x": 7, "y": 3 } }
];

const bosses = [
    { "name": "Small Blind", "pos": { "x": 0, "y": 0 } }, { "name": "Big Blind", "pos": { "x": 0, "y": 1 } }, { "name": "The Ox", "pos": { "x": 0, "y": 2 } }, { "name": "The Hook", "pos": { "x": 0, "y": 7 } }, { "name": "The Mouth", "pos": { "x": 0, "y": 18 } }, { "name": "The Fish", "pos": { "x": 0, "y": 5 } }, { "name": "The Club", "pos": { "x": 0, "y": 4 } }, { "name": "The Manacle", "pos": { "x": 0, "y": 8 } }, { "name": "The Tooth", "pos": { "x": 0, "y": 22 } }, { "name": "The Wall", "pos": { "x": 0, "y": 9 } }, { "name": "The House", "pos": { "x": 0, "y": 3 } }, { "name": "The Mark", "pos": { "x": 0, "y": 23 } }, { "name": "Cerulean Bell", "pos": { "x": 0, "y": 26 } }, { "name": "The Wheel", "pos": { "x": 0, "y": 10 } }, { "name": "The Arm", "pos": { "x": 0, "y": 11 } }, { "name": "The Psychic", "pos": { "x": 0, "y": 12 } }, { "name": "The Goad", "pos": { "x": 0, "y": 13 } }, { "name": "The Water", "pos": { "x": 0, "y": 14 } }, { "name": "The Eye", "pos": { "x": 0, "y": 17 } }, { "name": "The Plant", "pos": { "x": 0, "y": 19 } }, { "name": "The Needle", "pos": { "x": 0, "y": 20 } }, { "name": "The Head", "pos": { "x": 0, "y": 21 } }, { "name": "Verdant Leaf", "pos": { "x": 0, "y": 28 } }, { "name": "Violet Vessel", "pos": { "x": 0, "y": 29 } }, { "name": "The Window", "pos": { "x": 0, "y": 6 } }, { "name": "The Serpent", "pos": { "x": 0, "y": 15 } }, { "name": "The Pillar", "pos": { "x": 0, "y": 16 } }, { "name": "The Flint", "pos": { "x": 0, "y": 24 } }, { "name": "Amber Acorn", "pos": { "x": 0, "y": 27 } }, { "name": "Crimson Heart", "pos": { "x": 0, "y": 25 } }
];
const editionMap = {
    "Foil": 1,
    "Holographic": 2,
    "Polychrome": 3
};
const stickerMap = {
    "Eternal": { x: 0, y: 0 },
    "Perishable": { x: 0, y: 2 },
    "Rental": { x: 1, y: 2 }
};

// 中文名映射表
const nameMap = {
    "Abandoned Deck": "废弃牌组",
    "Anaglyph Deck": "浮雕牌组",
    "Black Deck": "黑色牌组",
    "Blue Deck": "蓝色牌组",
    "Challenge Deck": "挑战牌组",
    "Checkered Deck": "方格牌组",
    "Erratic Deck": "古怪牌组",
    "Ghost Deck": "幽灵牌组",
    "Green Deck": "绿色牌组",
    "Magic Deck": "魔法牌组",
    "Nebula Deck": "星云牌组",
    "Painted Deck": "彩绘牌组",
    "Plasma Deck": "等离子牌组",
    "Red Deck": "红色牌组",
    "Yellow Deck": "黄色牌组",
    "Zodiac Deck": "黄道牌组",
    "The Arm": "手臂",
    "Big Blind": "大盲注",
    "The Club": "梅花",
    "The Eye": "眼睛",
    "Amber Acorn": "琥珀之实",
    "Cerulean Bell": "蔚蓝之铃",
    "Crimson Heart": "绯红之心",
    "Verdant Leaf": "翠绿之叶",
    "Violet Vessel": "靛紫之杯",
    "The Fish": "鱼",
    "The Flint": "燧石",
    "The Goad": "挑衅",
    "The Head": "头部",
    "The Hook": "钩子",
    "The House": "房屋",
    "The Manacle": "镣铐",
    "The Mark": "标记",
    "The Mouth": "嘴巴",
    "The Needle": "针",
    "The Ox": "公牛",
    "The Pillar": "支柱",
    "The Plant": "植物",
    "The Psychic": "灵媒",
    "The Serpent": "巨蟒",
    "Small Blind": "小盲注",
    "The Tooth": "牙齿",
    "The Wall": "围墙",
    "The Water": "水",
    "The Wheel": "车轮",
    "The Window": "窗口",
    "Base": "基础",
    "Foil": "闪箔",
    "Holographic": "镭射",
    "Negative": "负片",
    "Polychrome": "多彩",
    "Bonus Card": "奖励牌",
    "Glass Card": "玻璃牌",
    "Gold Card": "黄金牌",
    "Lucky Card": "幸运牌",
    "Mult Card": "倍率牌",
    "Steel Card": "钢铁牌",
    "Stone Card": "石头牌",
    "Wild Card": "万能牌",
    "8 Ball": "八号球",
    "Abstract Joker": "抽象小丑",
    "Acrobat": "杂技演员",
    "Ancient Joker": "古老小丑",
    "Arrowhead": "箭头",
    "Astronomer": "天文学家",
    "Banner": "旗帜",
    "Baron": "男爵",
    "Baseball Card": "棒球卡",
    "Blackboard": "黑板",
    "Bloodstone": "血石",
    "Blue Joker": "蓝色小丑",
    "Blueprint": "蓝图",
    "Bootstraps": "提靴带",
    "Brainstorm": "头脑风暴",
    "Bull": "斗牛",
    "Burglar": "窃贼",
    "Burnt Joker": "烧焦小丑",
    "Business Card": "名片",
    "Canio": "卡尼奥",
    "Campfire": "篝火",
    "Card Sharp": "老千小丑",
    "Cartomancer": "卡牌术士",
    "Castle": "城堡",
    "Cavendish": "卡文迪什",
    "Ceremonial Dagger": "仪式匕首",
    "Certificate": "证书",
    "Chaos the Clown": "混沌小丑",
    "Chicot": "希科",
    "Clever Joker": "聪敏小丑",
    "Cloud 9": "9霄云外",
    "Constellation": "星座",
    "Crafty Joker": "精明小丑",
    "Crazy Joker": "狂野小丑",
    "Credit Card": "信用卡",
    "Delayed Gratification": "延迟满足",
    "Devious Joker": "阴险小丑",
    "Diet Cola": "零糖可乐",
    "DNA": "DNA",
    "Driver's License": "驾驶执照",
    "Droll Joker": "滑稽小丑",
    "Drunkard": "醉汉",
    "The Duo": "二重奏",
    "Dusk": "黄昏",
    "Egg": "鸡蛋",
    "Erosion": "侵蚀",
    "Even Steven": "偶数史蒂文",
    "Faceless Joker": "无面小丑",
    "The Family": "一家人",
    "Fibonacci": "斐波那契",
    "Flash Card": "闪示卡",
    "Flower Pot": "花盆",
    "Fortune Teller": "占卜师",
    "Four Fingers": "四指",
    "Gift Card": "礼品卡",
    "Glass Joker": "玻璃小丑",
    "Gluttonous Joker": "暴食小丑",
    "Golden Joker": "黄金小丑",
    "Greedy Joker": "贪婪小丑",
    "Green Joker": "绿色小丑",
    "Gros Michel": "大麦克香蕉",
    "Hack": "烂脱口秀演员",
    "Half Joker": "半张小丑",
    "Hallucination": "幻觉",
    "Hanging Chad": "未断选票",
    "Hiker": "徒步者",
    "Hit the Road": "上路吧杰克",
    "Hologram": "全息影像",
    "Ice Cream": "冰淇淋",
    "The Idol": "偶像",
    "Invisible Joker": "隐形小丑",
    "Joker": "小丑",
    "Jolly Joker": "开心小丑",
    "Juggler": "杂耍师",
    "Loyalty Card": "积分卡",
    "Luchador": "摔跤手",
    "Lucky Cat": "招财猫",
    "Lusty Joker": "色欲小丑",
    "Mad Joker": "疯狂小丑",
    "Madness": "疯狂",
    "Mail In Rebate": "邮件回扣",
    "Marble Joker": "大理石小丑",
    "Matador": "斗牛士",
    "Merry Andy": "快乐安迪",
    "Midas Mask": "迈达斯面具",
    "Mime": "哑剧演员",
    "Misprint": "印错小丑",
    "Mr. Bones": "骷髅先生",
    "Mystic Summit": "神秘之峰",
    "Obelisk": "方尖石塔",
    "Odd Todd": "奇数托德",
    "Onyx Agate": "缟玛瑙",
    "Oops! All 6s": "六六大顺",
    "The Order": "秩序",
    "Pareidolia": "幻视",
    "Perkeo": "帕奇欧",
    "Photograph": "照片",
    "Popcorn": "爆米花",
    "Raised Fist": "致胜之拳",
    "Ramen": "拉面",
    "Red Card": "红牌",
    "Reserved Parking": "私人车位",
    "Ride the Bus": "搭乘巴士",
    "Riff-raff": "乌合之众",
    "Showman": "马戏团长",
    "Rocket": "火箭",
    "Rough Gem": "璞玉",
    "Runner": "跑步选手",
    "Satellite": "卫星",
    "Scary Face": "恐怖面孔",
    "Scholar": "学者",
    "Séance": "通灵",
    "Seeing Double": "重影",
    "Seltzer": "苏打水",
    "Shoot the Moon": "射月",
    "Shortcut": "捷径",
    "Sixth Sense": "第六感",
    "Sly Joker": "奸诈小丑",
    "Smeared Joker": "模糊小丑",
    "Smiley Face": "微笑表情",
    "Sock and Buskin": "喜与悲",
    "Space Joker": "太空小丑",
    "Splash": "飞溅",
    "Square Joker": "方形小丑",
    "Steel Joker": "钢铁小丑",
    "Joker Stencil": "模具小丑",
    "Stone Joker": "石头小丑",
    "Stuntman": "特技演员",
    "Supernova": "超新星",
    "Superposition": "叠加态",
    "Swashbuckler": "侠盗",
    "Throwback": "回溯",
    "Golden Ticket": "黄金门票",
    "To the Moon": "冲向月球",
    "To Do List": "待办清单",
    "Trading Card": "交易卡",
    "The Tribe": "部落",
    "Triboulet": "特里布莱",
    "The Trio": "三重奏",
    "Troubadour": "游吟诗人",
    "Spare Trousers": "备用裤子",
    "Turtle Bean": "黑龟豆",
    "Vagabond": "流浪者",
    "Vampire": "吸血鬼",
    "Walkie Talkie": "对讲机",
    "Wee Joker": "小小丑",
    "Wily Joker": "狡猾小丑",
    "Wrathful Joker": "愤怒小丑",
    "Yorick": "约里克",
    "Zany Joker": "古怪小丑",
    "Black Sticker": "黑标贴",
    "Blue Seal": "蓝色蜡封",
    "Blue Sticker": "蓝标贴",
    "Locked": "锁定",
    "Debuffed": "被削弱",
    "Eternal": "永恒卡",
    "Gold Seal": "金色蜡封",
    "Gold Sticker": "金色标贴",
    "Green Sticker": "绿标贴",
    "Orange Sticker": "橙标贴",
    "Jumbo Arcana Pack": "巨型秘术包",
    "Mega Arcana Pack": "超级秘术包",
    "Arcana Pack": "秘术包",
    "Jumbo Buffoon Pack": "巨型小丑包",
    "Mega Buffoon Pack": "超级小丑包",
    "Buffoon Pack": "小丑包",
    "Jumbo Celestial Pack": "巨型天体包",
    "Mega Celestial Pack": "超级天体包",
    "Celestial Pack": "天体包",
    "Jumbo Spectral Pack": "巨型幻灵包",
    "Mega Spectral Pack": "超级幻灵包",
    "Spectral Pack": "幻灵包",
    "Jumbo Standard Pack": "巨型标准包",
    "Mega Standard Pack": "超级标准包",
    "Standard Pack": "标准包",
    "Perishable": "易腐",
    "Pinned": "固定",
    "Purple Seal": "紫色蜡封",
    "Purple Sticker": "紫标贴",
    "Red Seal": "红色蜡封",
    "Red Sticker": "红标贴",
    "n": "n",
    "Rental": "租用",
    "Not Discovered": "未发现",
    "White Sticker": "白标贴",
    "Ceres": "谷神星",
    "Earth": "地球",
    "Eris": "阋神星",
    "Jupiter": "木星",
    "Mars": "火星",
    "Mercury": "水星",
    "Neptune": "海王星",
    "Planet X": "X行星",
    "Pluto": "冥王星",
    "Saturn": "土星",
    "Uranus": "天王星",
    "Venus": "金星",
    "Ankh": "生命十字章",
    "Aura": "光环",
    "Black Hole": "黑洞",
    "Cryptid": "神秘生物",
    "Deja Vu": "既视感",
    "Ectoplasm": "灵质",
    "Familiar": "使魔",
    "Grim": "严峻",
    "Hex": "妖法",
    "Immolate": "火祭",
    "Incantation": "咒语",
    "Medium": "灵媒",
    "Ouija": "占卜",
    "Sigil": "符印",
    "The Soul": "灵魂",
    "Talisman": "护身符",
    "Trance": "入迷",
    "Wraith": "幽灵",
    "Black Stake": "黑注",
    "Blue Stake": "蓝注",
    "Gold Stake": "金注",
    "Green Stake": "绿注",
    "Orange Stake": "橙注",
    "Purple Stake": "紫注",
    "Red Stake": "红注",
    "White Stake": "白注",
    "Boss Tag": "Boss标签",
    "Buffoon Tag": "小丑标签",
    "Charm Tag": "吊饰标签",
    "Coupon Tag": "代金券标签",
    "D6 Tag": "D6标签",
    "Double Tag": "双倍标签",
    "Economy Tag": "经济标签",
    "Ethereal Tag": "空灵标签",
    "Foil Tag": "闪箔标签",
    "Garbage Tag": "垃圾标签",
    "Handy Tag": "顺手标签",
    "Holographic Tag": "镭射标签",
    "Investment Tag": "投资标签",
    "Juggle Tag": "杂耍标签",
    "Meteor Tag": "流星标签",
    "Negative Tag": "负片标签",
    "Orbital Tag": "轨道标签",
    "Polychrome Tag": "多彩标签",
    "Rare Tag": "稀有标签",
    "Speed Tag": "速度标签",
    "Standard Tag": "标准标签",
    "Top-up Tag": "充值标签",
    "Uncommon Tag": "罕见标签",
    "Voucher Tag": "优惠券标签",
    "The Chariot": "战车",
    "Death": "死神",
    "The Devil": "恶魔",
    "The Emperor": "皇帝",
    "The Empress": "皇后",
    "The Fool": "愚者",
    "The Hanged Man": "倒吊人",
    "The Hierophant": "教皇",
    "The Hermit": "隐者",
    "The High Priestess": "女祭司",
    "Judgement": "审判",
    "Justice": "正义",
    "The Lovers": "恋人",
    "The Magician": "魔术师",
    "The Moon": "月亮",
    "The Star": "星星",
    "Strength": "力量",
    "The Sun": "太阳",
    "Temperance": "节制",
    "The Tower": "塔",
    "The Wheel of Fortune": "命运之轮",
    "The World": "世界",
    "Antimatter": "反物质",
    "Blank": "空白",
    "Clearance Sale": "清仓特卖",
    "Crystal Ball": "水晶球",
    "Director's Cut": "导演剪辑版",
    "Glow Up": "焕彩",
    "Grabber": "抓手",
    "Hieroglyph": "象形文字",
    "Hone": "打磨",
    "Illusion": "幻象",
    "Liquidation": "清算",
    "Magic Trick": "魔术",
    "Money Tree": "摇钱树",
    "Nacho Tong": "玉米片夹",
    "Observatory": "天文台",
    "Omen Globe": "预兆球",
    "Overstock": "库存过剩",
    "Overstock Plus": "库存过剩加强版",
    "Paint Brush": "油漆刷",
    "Palette": "调色板",
    "Petroglyph": "岩画",
    "Planet Merchant": "星球牌商人",
    "Planet Tycoon": "星球大亨",
    "Recyclomancy": "回收魔法",
    "Reroll Glut": "重掷加强版",
    "Reroll Surplus": "多次重掷",
    "Retcon": "重构",
    "Seed Money": "种子基金",
    "Tarot Merchant": "塔罗牌商人",
    "Tarot Tycoon": "塔罗大亨",
    "Telescope": "望远镜",
    "Wasteful": "常弃常新",
    "Enter Name": "输入名字",
    "Wild": "万能牌",
    "Stone": "石头牌",
    "Glass": "玻璃牌",
    "Bonus": "奖励牌",
    "Steel":"钢铁牌",
    "Gold":"黄金牌",
    "Lucky":"幸运牌",
    "Mult":"倍率牌",
    "Hearts":"红桃",
    "Spades":"黑桃",
    "Diamonds":"方片",
    "Clubs":"梅花",
    "Ace":"A",
    "Queen":"Q",
    "Jack":"J",
    "King":"K"
};

function maskToCanvas(canvas, itemName, type, itemModifiers, itemStickers) {
    let itemData;
    let imgSrc;
    let gridWidth;
    let gridHeight;

    if (type === 'joker') {
        itemData = jokers.find(j => j.name === itemName);
        imgSrc = '../assets/seed-images/Jokers.png';
        gridWidth = 10;
        gridHeight = 16;
    } else if (type === 'tarot' || type === 'planet') {
        itemData = tarotsAndPlanets.find(t => t.name === itemName);
        imgSrc = '../assets/seed-images/Tarots.png';
        gridWidth = 10;
        gridHeight = 6;
    }

    if (!itemData) {
        console.error(`${type.charAt(0).toUpperCase() + type.slice(1)} not found:`, itemName);
        return;
    }

    const imageWidth = imgSrc.includes('Jokers.png') ? 710 : 710; // Width of your images
    const imageHeight = imgSrc.includes('Jokers.png') ? 1520 : 570; // Height of your images

    const itemWidth = imageWidth / gridWidth;
    const itemHeight = imageHeight / gridHeight;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imgSrc;
    img.onload = function () {
        ctx.drawImage(
            img,
            itemData.pos.x * itemWidth,
            itemData.pos.y * itemHeight,
            itemWidth,
            itemHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );

        const overlayModifier = itemModifiers.find(mod => ["Foil", "Holographic", "Polychrome"].includes(mod));
        if (overlayModifier) {
            overlayEdition(ctx, canvas, editionMap[overlayModifier]);
        }

        itemStickers.forEach(stick => {
            if (stickerMap[stick]) {
                overlaySticker(ctx, canvas, stickerMap[stick]);
            }
        });

        if (itemModifiers.includes("Negative")) {
            canvas.style.filter = 'invert(0.8)';
        }
    };
}

function overlayEdition(ctx, canvas, index) {
    const editionImg = new Image();
    editionImg.src = '../assets/seed-images/Editions.png';
    editionImg.onload = function () {
        const editionWidth = editionImg.width / 5;
        const editionHeight = editionImg.height;

        ctx.drawImage(
            editionImg,
            index * editionWidth,
            0,
            editionWidth,
            editionHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function overlaySticker(ctx, canvas, position) {
    const stickerImg = new Image();
    stickerImg.src = '../assets/seed-images/stickers.png';
    stickerImg.onload = function () {
        const stickerWidth = stickerImg.width / 5;
        const stickerHeight = stickerImg.height / 3;

        ctx.drawImage(
            stickerImg,
            position.x * stickerWidth,
            position.y * stickerHeight,
            stickerWidth,
            stickerHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function getStandardCardName(cardName) {
    return cardName.replace(/\b(Purple|Red|Blue|Gold) Seal\b/g, '').replace(/\b(Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)\b/g, '').replace(/\b(Foil|Holographic|Polychrome)\b/g, '').trim();
}

function getStandardCardModifiers(cardName) {
    const sealRegex = /\b(Purple Seal|Red Seal|Blue Seal|Gold Seal)\b/g;
    const enhancementRegex = /\b(Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)\b/g;
    const editionRegex = /\b(Foil|Holographic|Polychrome)\b/g;

    const seals = [];
    let sealMatch;
    while ((sealMatch = sealRegex.exec(cardName)) !== null) {
        seals.push(sealMatch[0]);
    }

    // Remove the seal text from the card name
    const cardNameWithoutSeals = cardName.replace(sealRegex, '').trim();

    const enhancements = cardNameWithoutSeals.match(enhancementRegex) || [];
    const editions = cardNameWithoutSeals.match(editionRegex) || [];

    return [...seals, ...enhancements, ...editions];
}

function getStandardCardPosition(rank, suit) {
    const rankMap = {
        '2': 0, '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, '8': 6, '9': 7, '10': 8, 'Jack': 9, 'Queen': 10, 'King': 11, 'Ace': 12
    };
    const suitMap = {
        'Hearts': 0, 'Clubs': 1, 'Diamonds': 2, 'Spades': 3
    };

    const x = rankMap[rank];
    const y = suitMap[suit];

    return { x, y };
}

function renderStandardCard(canvas, rank, suit, modifiers, seal) {

    const ctx = canvas.getContext('2d');

    const deckImg = new Image();
    deckImg.src = '../assets/seed-images/8BitDeck.png';
    const enhancersImg = new Image();
    enhancersImg.src = '../assets/seed-images/Enhancers.png';

    const cardWidth = 71;
    const cardHeight = 95;
    const deckWidth = 923;
    const deckHeight = 380;
    const enhancersWidth = 497;
    const enhancersHeight = 475;

    const { x: cardX, y: cardY } = getStandardCardPosition(rank, suit);

    deckImg.onload = function () {
        enhancersImg.onload = function () {
            // Draw the card background
            const enhancerPos = getEnhancerPosition(modifiers);
            ctx.drawImage(
                enhancersImg,
                enhancerPos.x * (enhancersWidth / 7),
                enhancerPos.y * (enhancersHeight / 5),
                enhancersWidth / 7,
                enhancersHeight / 5,
                0,
                0,
                cardWidth,
                cardHeight
            );

            // Draw the card rank and suit
            ctx.drawImage(
                deckImg,
                cardX * (deckWidth / 13),
                cardY * (deckHeight / 4),
                deckWidth / 13,
                deckHeight / 4,
                0,
                0,
                cardWidth,
                cardHeight
            );

            // Draw the edition overlay
            const edition = modifiers.find(mod => ["Foil", "Holographic", "Polychrome"].includes(mod));
            if (edition) {
                overlayEdition(ctx, canvas, editionMap[edition]);
            }

            // Draw the seal overlay
            if (seal) {
                const sealPos = getSealPosition(seal);
                ctx.drawImage(
                    enhancersImg,
                    sealPos.x * (enhancersWidth / 7),
                    sealPos.y * (enhancersHeight / 5),
                    enhancersWidth / 7,
                    enhancersHeight / 5,
                    0,
                    0,
                    cardWidth,
                    cardHeight
                );
            }
        };
        enhancersImg.src = '../assets/seed-images/Enhancers.png';
    };
    deckImg.src = '../assets/seed-images/8BitDeck.png';
}


function getEnhancerPosition(modifiers) {
    const enhancerMap = {
        'Bonus': { x: 1, y: 1 },
        'Mult': { x: 2, y: 1 },
        'Wild': { x: 3, y: 1 },
        'Glass': { x: 5, y: 1 },
        'Steel': { x: 6, y: 1 },
        'Stone': { x: 5, y: 0 },
        'Gold': { x: 6, y: 0 },
        'Lucky': { x: 4, y: 1 }
    };

    const enhancer = modifiers.find(mod => Object.keys(enhancerMap).includes(mod));
    return enhancer ? enhancerMap[enhancer] : { x: 1, y: 0 };
}

function getSealPosition(seal) {
    const sealMap = {
        'Gold Seal': { x: 2, y: 0 },
        'Purple Seal': { x: 4, y: 4 },
        'Red Seal': { x: 5, y: 4 },
        'Blue Seal': { x: 6, y: 4 }
    };

    return sealMap[seal];
}

function parseStandardCardName(cardName) {
    const sealRegex = /(Purple|Red|Blue|Gold) Seal/;
    const sealMatch = cardName.match(sealRegex);
    const seal = sealMatch ? sealMatch[0] : null;

    let cleanedCardName = seal ? cardName.replace(sealRegex, '').trim() : cardName;

    const modifierRegex = /(Foil|Holographic|Polychrome|Bonus|Mult|Wild|Glass|Steel|Stone|Gold|Lucky)/g;
    const modifiers = cleanedCardName.match(modifierRegex) || [];

    // Remove all modifiers from the cleaned card name
    cleanedCardName = cleanedCardName.replace(modifierRegex, '').trim();

    const parts = cleanedCardName.split(' of ');
    if (parts.length !== 2) {
        console.error('Invalid card name format:', cardName);
        return null;
    }

    const suit = parts[1].trim();
    const rankPart = parts[0].trim();
    const rank = rankPart.split(' ').pop(); // Get the last word as rank

    return { rank, suit, modifiers, seal };
}

function getModifierColor(modifier) {
    if (modifier.includes('Seal')) {
        return '#ff80ff'; // Light Purple
    } else if (modifier.includes('Bonus') || modifier.includes('Mult') || modifier.includes('Wild')) {
        return '#ff8080'; // Light Red
    } else if (modifier.includes('Glass') || modifier.includes('Steel') || modifier.includes('Stone') || modifier.includes('Gold') || modifier.includes('Lucky')) {
        return '#8080ff'; // Light Blue
    } else if (modifier.includes('Foil') || modifier.includes('Holographic') || modifier.includes('Polychrome')) {
        return '#80ff80'; // Light Green
    }
    return '#ffffff'; // White (default)
}

function renderBoss(canvas, bossName) {
    const bossData = bosses.find(boss => boss.name === bossName);
    if (!bossData) {
        console.error("Boss not found:", bossName);
        return;
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = '../assets/seed-images/BlindChips.png';
    img.onload = function () {
        const bossWidth = 714 / 21;
        const bossHeight = 1054 / 31;

        ctx.drawImage(
            img,
            bossData.pos.x * bossWidth,
            bossData.pos.y * bossHeight,
            bossWidth,
            bossHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function renderTag(canvas, tagName) {
    const tagData = tags.find(tag => tag.name === tagName);
    if (!tagData) {
        console.error("Tag not found:", tagName);
        return;
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = '../assets/seed-images/tags.png';
    img.onload = function () {
        const tagWidth = 204 / 6;
        const tagHeight = 170 / 5;

        ctx.drawImage(
            img,
            tagData.pos.x * tagWidth,
            tagData.pos.y * tagHeight,
            tagWidth,
            tagHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

function renderVoucher(canvas, voucherName) {
    const voucherData = vouchers.find(voucher => voucher.name === voucherName);
    if (!voucherData) {
        console.error("Voucher not found:", voucherName);
        return;
    }

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = '../assets/seed-images/Vouchers.png';
    img.onload = function () {
        const voucherWidth = 639 / 9;
        const voucherHeight = 380 / 4;

        ctx.drawImage(
            img,
            voucherData.pos.x * voucherWidth,
            voucherData.pos.y * voucherHeight,
            voucherWidth,
            voucherHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
    };
}

let _searchIdx = -1;

function searchAndHighlight(resetIndex) {
    const si = document.getElementById('searchInput');
    const sc = document.getElementById('scrollingContainer');
    if (!si || !sc) return;

    const terms = si.value.split(',')
        .map(t => t.trim().toLowerCase())
        .filter(t => t.length > 0);

    const items = sc.querySelectorAll('.queueItem, .packItem > div, .voucherContainer, .tagContainer, .bossContainer');

    items.forEach(item => {
        if (terms.length === 0) {
            item.classList.remove('highlight');
            item.style.opacity = '';
            item.style.outline = '';
            return;
        }
        const text = item.textContent.toLowerCase();
        const match = terms.some(t => text.includes(t));
        if (match) {
            item.classList.add('highlight');
            item.style.opacity = '';
        } else {
            item.classList.remove('highlight');
            item.style.opacity = '0.3';
            item.style.outline = '';
        }
    });

    _searchIdx = resetIndex === false ? _searchIdx : -1;
    const hits = sc.querySelectorAll('.highlight');
    hits.forEach(h => { h.style.outline = ''; });
    if (hits.length === 0) { _searchIdx = -1; updateSearchCount(); return; }
    if (_searchIdx < 0 || _searchIdx >= hits.length) _searchIdx = 0;
    hits[_searchIdx].style.outline = '2px solid #6366f1';
    hits[_searchIdx].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    updateSearchCount();
}

function searchPrev() {
    const sc = document.getElementById('scrollingContainer');
    if (!sc) return;
    const hits = sc.querySelectorAll('.highlight');
    if (hits.length === 0) return;
    hits.forEach(h => { h.style.outline = ''; });
    _searchIdx = (_searchIdx - 1 + hits.length) % hits.length;
    hits[_searchIdx].style.outline = '2px solid #6366f1';
    hits[_searchIdx].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    updateSearchCount();
}

function searchNext() {
    const sc = document.getElementById('scrollingContainer');
    if (!sc) return;
    const hits = sc.querySelectorAll('.highlight');
    if (hits.length === 0) return;
    hits.forEach(h => { h.style.outline = ''; });
    _searchIdx = (_searchIdx + 1) % hits.length;
    hits[_searchIdx].style.outline = '2px solid #6366f1';
    hits[_searchIdx].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    updateSearchCount();
}

function updateSearchCount() {
    const sc = document.getElementById('scrollingContainer');
    const el = document.getElementById('searchCount');
    if (!el || !sc) return;
    const total = sc.querySelectorAll('.highlight').length;
    if (total === 0) { el.textContent = ''; return; }
    el.textContent = (_searchIdx + 1) + '/' + total;
}

(function () {
    const resultsContainer = document.getElementById('seed-results');
    if (!resultsContainer) { console.error('[seed/ui] #seed-results not found'); return; }

    const scrollingContainer = document.createElement('div');
    scrollingContainer.id = 'scrollingContainer';
    scrollingContainer.style.overflowY = 'auto';
    scrollingContainer.style.flex = '1';
    scrollingContainer.style.minHeight = '0';

    const searchRow = document.createElement('div');
    searchRow.style.cssText = 'display:flex;gap:4px;margin-bottom:6px;flex-shrink:0;align-items:center;';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.className = 'seed-input';
    searchInput.style.flex = '1';
    searchInput.placeholder = '\u641C\u7D22\u7ED3\u679C (\u82F1\u6587\u9017\u53F7\u5206\u9694)';

    const searchCount = document.createElement('span');
    searchCount.id = 'searchCount';
    searchCount.style.cssText = 'font-size:11px;color:#71717a;min-width:32px;text-align:center;';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '\u2191';
    prevBtn.className = 'btn btn-sm';
    prevBtn.title = '\u4E0A\u4E00\u4E2A';
    prevBtn.addEventListener('click', searchPrev);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = '\u2193';
    nextBtn.className = 'btn btn-sm';
    nextBtn.title = '\u4E0B\u4E00\u4E2A';
    nextBtn.addEventListener('click', searchNext);

    const searchBtn = document.createElement('button');
    searchBtn.textContent = '\u641C\u7D22';
    searchBtn.className = 'btn btn-sm';
    searchBtn.addEventListener('click', function () { searchAndHighlight(true); });

    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.shiftKey ? searchPrev() : searchNext();
        }
    });

    searchRow.appendChild(searchInput);
    searchRow.appendChild(searchBtn);
    searchRow.appendChild(prevBtn);
    searchRow.appendChild(nextBtn);
    searchRow.appendChild(searchCount);

    resultsContainer.style.display = 'flex';
    resultsContainer.style.flexDirection = 'column';
    resultsContainer.appendChild(searchRow);
    resultsContainer.appendChild(scrollingContainer);

    function extractShopQueues(text) {
        const shopQueues = [];
        const regex = /==ANTE \d+==[\s\S]*?(?=(?:==ANTE \d+==|$))/g;
        const matches = text.match(regex);
        if (matches) {
            matches.forEach(match => {
                const titleMatch = match.match(/==ANTE (\d+)==/);
                let title = titleMatch ? '==底注' + titleMatch[1] + '==' : 'Untitled';
                const bossMatch = match.match(/Boss: (.+)/);
                const voucherMatch = match.match(/Voucher: (.+)/);
                const tagsMatch = match.match(/Tags: (.+)/);
                const queueMatch = match.match(/Shop Queue:([\s\S]*?)(?=Packs:|$)/);
                const packsMatch = match.match(/Packs:([\s\S]*?)(?=(?:==ANTE \d+==|$))/);
                const boss = bossMatch ? bossMatch[1].trim() : '';
                const voucher = voucherMatch ? voucherMatch[1].trim() : '';
                const tags = tagsMatch ? tagsMatch[1].trim().split(',').map(tag => tag.trim()) : [];
                const queue = queueMatch ? queueMatch[1].trim().split('\n').filter(item => item.trim() !== '') : [];
                const packs = packsMatch ? packsMatch[1].trim().split('\n').filter(item => item.trim() !== '') : [];
                shopQueues.push({ title, queue, boss, voucher, tags, packs });
            });
        }
        return shopQueues;
    }

    function parseCardItem(item) {
        const modifiers = ['Foil', 'Holographic', 'Polychrome', 'Negative'];
        const stickers = ['Perishable', 'Rental', 'Eternal'];
        let cardName = item.replace(/^\d+\)/, '').trim();
        let itemModifiers = [];
        let itemStickers = [];
        modifiers.forEach(mod => {
            const regex = new RegExp('\\b' + mod + '\\b', 'i');
            if (regex.test(cardName)) { itemModifiers.push(mod); cardName = cardName.replace(regex, '').trim(); }
        });
        stickers.forEach(stick => {
            const regex = new RegExp('\\b' + stick + '\\b', 'i');
            if (regex.test(cardName)) { itemStickers.push(stick); cardName = cardName.replace(regex, '').trim(); }
        });
        return { cardName, itemModifiers, itemStickers };
    }

    function determineItemType(itemName) {
        if (jokers.find(j => j.name === itemName)) return 'joker';
        else if (tarotsAndPlanets.find(tp => tp.name === itemName)) return 'tarot';
        else return 'unknown';
    }

    window.displayShopQueues = function displayShopQueues() {
        const textarea = document.getElementById('outputBox');
        const text = textarea.value;
        if (!text) return;
        const shopQueues = extractShopQueues(text);
        scrollingContainer.innerHTML = '';

        shopQueues.forEach(({ title, queue, boss, voucher, tags, packs }) => {
            const queueContainer = document.createElement('div');
            queueContainer.className = 'queueContainer';

            const queueTitle = document.createElement('div');
            queueTitle.className = 'queueTitle';
            queueTitle.textContent = title;
            queueContainer.appendChild(queueTitle);

            const queueInfo = document.createElement('div');
            queueInfo.className = 'queueInfo';

            const voucherElement = document.createElement('div');
            voucherElement.innerHTML = '<b><u>优惠券</u></b>';
            voucherElement.style = "font-size: 16px";
            if (voucher) {
                const vc = document.createElement('div'); vc.className = 'voucherContainer';
                const vc2 = document.createElement('canvas'); vc2.width = 71; vc2.height = 95;
                renderVoucher(vc2, voucher); vc.appendChild(vc2);
                const vn = document.createElement('div'); vn.textContent = nameMap[voucher] || voucher; vn.classList.add('voucherName');
                vc.appendChild(vn); voucherElement.appendChild(vc);
            }
            queueInfo.appendChild(voucherElement);

            const bossElement = document.createElement('div');
            bossElement.innerHTML = '<b><u>Boss盲注</u></b>';
            bossElement.style = "font-size: 16px";
            if (boss) {
                const bc = document.createElement('div'); bc.className = 'bossContainer';
                const bc2 = document.createElement('canvas'); bc2.width = 34; bc2.height = 34;
                renderBoss(bc2, boss); bc.appendChild(bc2);
                const bn = document.createElement('div'); bn.textContent = nameMap[boss] || boss; bn.classList.add('bossName');
                bc.appendChild(bn); bossElement.appendChild(bc);
            }
            queueInfo.appendChild(bossElement);

            const tagsElement = document.createElement('div');
            tagsElement.innerHTML = '<b><u>标签</u></b>';
            tagsElement.style = "font-size: 16px";
            const tagsContainer = document.createElement('div'); tagsContainer.className = 'tagsContainer';
            tags.forEach(tag => {
                const tc = document.createElement('div'); tc.className = 'tagContainer';
                const tc2 = document.createElement('canvas'); tc2.width = 34; tc2.height = 34;
                renderTag(tc2, tag); tc.appendChild(tc2);
                const tn = document.createElement('div'); tn.textContent = nameMap[tag] || tag; tn.classList.add('tagName');
                tc.appendChild(tn); tagsContainer.appendChild(tc);
            });
            tagsElement.appendChild(tagsContainer);
            queueInfo.appendChild(tagsElement);
            queueContainer.appendChild(queueInfo);

            const scrollable = document.createElement('div');
            scrollable.className = 'scrollable no-select';
            queueContainer.appendChild(scrollable);

            queue.forEach(item => {
                const { cardName, itemModifiers, itemStickers } = parseCardItem(item);
                const queueItem = document.createElement('div'); queueItem.className = 'queueItem';
                const canvas = document.createElement('canvas'); canvas.width = 71; canvas.height = 95;
                const itemType = determineItemType(cardName);
                if (itemType !== 'unknown') maskToCanvas(canvas, cardName, itemType, itemModifiers, itemStickers);
                queueItem.appendChild(canvas);
                const itemText = document.createElement('div'); itemText.textContent = nameMap[cardName] || cardName;
                queueItem.appendChild(itemText);
                itemModifiers.forEach(mod => { const t = document.createElement('div'); t.className = 'modifier'; t.textContent = nameMap[mod] || mod; queueItem.appendChild(t); });
                itemStickers.forEach(stick => { const t = document.createElement('div'); t.className = 'sticker'; t.textContent = nameMap[stick] || stick; queueItem.appendChild(t); });
                scrollable.appendChild(queueItem);
            });

            if (packs.length > 0) {
                const pt = document.createElement('div'); pt.className = 'queueTitle'; pt.textContent = '==卡牌包==';
                queueContainer.appendChild(pt);
                const pc = document.createElement('div'); queueContainer.appendChild(pc);
                packs.forEach(pack => {
                    const packParts = pack.split(' - ');
                    const packName = packParts[0];
                    const packCards = packParts[1] ? packParts[1].split(', ') : [];
                    const pi = document.createElement('div'); pi.className = 'packItem';
                    const pn = document.createElement('div'); pn.textContent = (nameMap[packName] || packName) + ': '; pn.classList.add('packName'); pi.appendChild(pn);
                    packCards.forEach(cardName => {
                        const { cardName: parsedCardName, itemModifiers, itemStickers } = parseCardItem(cardName);
                        const itemType = determineItemType(parsedCardName);
                        const cc = document.createElement('div');
                        if (itemType !== 'unknown') {
                            const canvas = document.createElement('canvas'); canvas.width = 71; canvas.height = 95;
                            maskToCanvas(canvas, parsedCardName, itemType, itemModifiers, itemStickers);
                            cc.appendChild(canvas);
                            const it = document.createElement('div'); it.textContent = nameMap[parsedCardName] || parsedCardName; it.classList.add('cardName'); cc.appendChild(it);
                            itemModifiers.forEach(mod => { const t = document.createElement('div'); t.classList.add('modifier'); t.textContent = nameMap[mod] || mod; cc.appendChild(t); });
                            itemStickers.forEach(stick => { const t = document.createElement('div'); t.classList.add('sticker'); t.textContent = nameMap[stick] || stick; cc.appendChild(t); });
                        } else {
                            const { rank, suit, modifiers, seal } = parseStandardCardName(cardName);
                            const canvas = document.createElement('canvas'); canvas.width = 71; canvas.height = 95;
                            renderStandardCard(canvas, rank, suit, modifiers, seal);
                            cc.appendChild(canvas);
                            const ct = document.createElement('div');
                            const stdName = getStandardCardName(cardName);
                            if (nameMap[stdName]) ct.textContent = nameMap[stdName];
                            else ct.textContent = (nameMap[suit] || suit) + (nameMap[rank] || rank);
                            ct.classList.add('standardCardName'); cc.appendChild(ct);
                            modifiers.forEach(modifier => { const t = document.createElement('div'); t.textContent = nameMap[modifier] || modifier; t.classList.add('modifier'); t.style.color = getModifierColor(modifier); cc.appendChild(t); });
                            if (seal) { const t = document.createElement('div'); t.textContent = nameMap[seal] || seal; t.classList.add('seal'); t.style.color = getModifierColor(seal); cc.appendChild(t); }
                        }
                        pi.appendChild(cc);
                    });
                    pc.appendChild(pi);
                });
            }
            scrollingContainer.appendChild(queueContainer);
        });

        document.querySelectorAll('.scrollable').forEach(scrollable => {
            let isDown = false, startX, scrollLeft;
            scrollable.addEventListener('mousedown', (e) => { isDown = true; scrollable.classList.add('active'); startX = e.pageX - scrollable.offsetLeft; scrollLeft = scrollable.scrollLeft; scrollable.classList.add('no-select'); });
            scrollable.addEventListener('mouseleave', () => { isDown = false; scrollable.classList.remove('active'); scrollable.classList.remove('no-select'); });
            scrollable.addEventListener('mouseup', () => { isDown = false; scrollable.classList.remove('active'); scrollable.classList.remove('no-select'); });
            scrollable.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); scrollable.scrollLeft = scrollLeft - (e.pageX - scrollable.offsetLeft - startX); });
        });
        searchAndHighlight(true);
    }
})();
