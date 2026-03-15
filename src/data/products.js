const products = [
    {
        id: 1,
        name: "Vanilla",
        category: "Small Cups (35 ML)",
        size: "35 ML",
        price: "₹7",
        image: "/assets/products/sample.png"
    },
    {
        id: 2,
        name: "Vanilla",
        category: "Large Cups (60 ML)",
        size: "60 ML",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 3,
        name: "Strawberry",
        category: "Large Cups (60 ML)",
        size: "60 ML",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 4,
        name: "Plain Pista",
        category: "Large Cups (60 ML)",
        size: "60 ML",
        price: "₹15",
        image: "/assets/products/sample.png"
    },
    {
        id: 5,
        name: "Mango",
        category: "Jumbo Cups (100 ML)",
        size: "100 ML",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 6,
        name: "Butter Scotch",
        category: "Jumbo Cups (100 ML)",
        size: "100 ML",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 7,
        name: "Vanilla Jumbo",
        category: "Jumbo Cups (100 ML)",
        size: "100 ML",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 8,
        name: "Tutti Frutti",
        category: "Jumbo Cups (100 ML)",
        size: "100 ML",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 9,
        name: "Mango Ripple",
        category: "Ripple Sundae (125 ML)",
        size: "125 ML",
        price: "₹25",
        image: "/assets/products/sample.png"
    },
    {
        id: 10,
        name: "Mix Fruit Ripple",
        category: "Ripple Sundae (125 ML)",
        size: "125 ML",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 11,
        name: "Tripple Ripple",
        category: "Ripple Sundae (125 ML)",
        size: "125 ML",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 12,
        name: "Chocolate Ripple",
        category: "Ripple Sundae (125 ML)",
        size: "125 ML",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 13,
        name: "Choco Chips",
        category: "Premium Cup (110 ML)",
        size: "110 ML",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 14,
        name: "Kesar Pista",
        category: "Premium Cup (110 ML)",
        size: "110 ML",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 15,
        name: "American Dry Fruit",
        category: "Premium Cup (110 ML)",
        size: "110 ML",
        price: "₹40",
        image: "/assets/products/sample.png"
    },
    {
        id: 16,
        name: "Raj Bhog",
        category: "Premium Cup (110 ML)",
        size: "110 ML",
        price: "₹40",
        image: "/assets/products/sample.png"
    },
    {
        id: 17,
        name: "Cassata",
        category: "Novelties",
        size: "Per piece",
        price: "₹50",
        image: "/assets/products/sample.png"
    },
    {
        id: 18,
        name: "Vanilla Sandwich",
        category: "Novelties",
        size: "Per piece",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 19,
        name: "Cookies & Cream Sandwich",
        category: "Novelties",
        size: "Per piece",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 20,
        name: "Mishti Matka Kulfi (Mataki)",
        category: "Novelties",
        size: "Per piece",
        price: "₹50",
        image: "/assets/products/sample.png"
    },
    {
        id: 21,
        name: "Choco Vanilla",
        category: "Mishti Cone",
        size: "40 ML",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 22,
        name: "Mini Butter Cone",
        category: "Mishti Cone",
        size: "80 ML",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 23,
        name: "Chocolate",
        category: "Mishti Cone",
        size: "80 ML",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 24,
        name: "Strawberry",
        category: "Mishti Cone",
        size: "110 ML",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 25,
        name: "Green Pista",
        category: "Mishti Cone",
        size: "110 ML",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 26,
        name: "Kesar Pista",
        category: "Mishti Cone",
        size: "110 ML",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 27,
        name: "Butter Scotch",
        category: "Mishti Cone",
        size: "110 ML",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 28,
        name: "Choco Chips",
        category: "Mishti Cone",
        size: "110 ML",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 29,
        name: "Orange Candy",
        category: "Ice Candy",
        size: "Per piece",
        price: "₹5",
        image: "/assets/products/sample.png"
    },
    {
        id: 30,
        name: "Mango Candy",
        category: "Ice Candy",
        size: "Per piece",
        price: "₹5",
        image: "/assets/products/sample.png"
    },
    {
        id: 31,
        name: "Twix Chocobar",
        category: "Chocolate World",
        size: "Per piece",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 32,
        name: "Big Chocobar",
        category: "Chocolate World",
        size: "Per piece",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 33,
        name: "Raja Bar",
        category: "Special Mishti Bar",
        size: "Per piece",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 34,
        name: "Malai Kulfi",
        category: "Special Mishti Bar",
        size: "Per piece",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 35,
        name: "Chopity Kullfi",
        category: "Special Mishti Bar",
        size: "Per piece",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 36,
        name: "Rajasthani Kullfi",
        category: "Special Mishti Bar",
        size: "Per piece",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 37,
        name: "Rose Gulkand Kullfi",
        category: "Special Mishti Bar",
        size: "Per piece",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 38,
        name: "Rabdi Malai Kullfi",
        category: "Special Mishti Bar",
        size: "Per piece",
        price: "₹25",
        image: "/assets/products/sample.png"
    },
    {
        id: 39,
        name: "Pan Kulfi",
        category: "Special Mishti Bar",
        size: "Per piece",
        price: "₹20",
        image: "/assets/products/sample.png"
    },
    {
        id: 40,
        name: "Rajbhog Kullfi",
        category: "Special Mishti Bar",
        size: "Per piece",
        price: "₹30",
        image: "/assets/products/sample.png"
    },
    {
        id: 41,
        name: "Matka Cut",
        category: "Mishti Special Kulfi",
        size: "40 ML",
        price: "₹10",
        image: "/assets/products/sample.png"
    },
    {
        id: 42,
        name: "Mawa Badam",
        category: "Mishti Special Kulfi",
        size: "40 ML",
        price: "₹15",
        image: "/assets/products/sample.png"
    },
    {
        id: 43,
        name: "Vanilla",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹200",
        image: "/assets/products/sample.png"
    },
    {
        id: 44,
        name: "Strawberry",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹200",
        image: "/assets/products/sample.png"
    },
    {
        id: 45,
        name: "Plain Pista",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹200",
        image: "/assets/products/sample.png"
    },
    {
        id: 46,
        name: "Mango",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹220",
        image: "/assets/products/sample.png"
    },
    {
        id: 47,
        name: "Tutti Frutti",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹240",
        image: "/assets/products/sample.png"
    },
    {
        id: 48,
        name: "Butter Scotch",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹240",
        image: "/assets/products/sample.png"
    },
    {
        id: 49,
        name: "Choco Chips",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹260",
        image: "/assets/products/sample.png"
    },
    {
        id: 50,
        name: "American Dry Fruit",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹280",
        image: "/assets/products/sample.png"
    },
    {
        id: 51,
        name: "Kesar Pista",
        category: "Combi Pack",
        size: "700 ML + 700 ML",
        price: "₹280",
        image: "/assets/products/sample.png"
    }
];

export default products;
