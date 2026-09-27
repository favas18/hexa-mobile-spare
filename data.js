/* =========================================================
   HEXA MOBILE SPARE
   iPhone model + Apple finish colour database
   ========================================================= */

const IPHONE_PARTS = [
  "Display",
  "Battery",
  "Back Glass",
  "Ringer",
  "Earpiece",
  "Charging Flex",
  "Front Camera",
  "Back Camera",
  "Battery Cells",
  "Housing"
];

/*
  Apple released finish colours.
  These are used ONLY for Back Glass and Housing.
*/

const IPHONE_COLORS = {

  "iPhone 7": [
    "Jet Black",
    "Black",
    "Silver",
    "Gold",
    "Rose Gold",
    "(PRODUCT)RED"
  ],

  "iPhone 7 Plus": [
    "Jet Black",
    "Black",
    "Silver",
    "Gold",
    "Rose Gold",
    "(PRODUCT)RED"
  ],

  "iPhone 8": [
    "Gold",
    "Silver",
    "Space Gray",
    "(PRODUCT)RED"
  ],

  "iPhone 8 Plus": [
    "Gold",
    "Silver",
    "Space Gray",
    "(PRODUCT)RED"
  ],

  "iPhone X": [
    "Silver",
    "Space Gray"
  ],

  "iPhone XR": [
    "Black",
    "White",
    "Blue",
    "Yellow",
    "Coral",
    "(PRODUCT)RED"
  ],

  "iPhone XS": [
    "Silver",
    "Space Gray",
    "Gold"
  ],

  "iPhone XS Max": [
    "Silver",
    "Space Gray",
    "Gold"
  ],

  "iPhone 11": [
    "Purple",
    "Green",
    "Yellow",
    "Black",
    "White",
    "(PRODUCT)RED"
  ],

  "iPhone 11 Pro": [
    "Space Gray",
    "Silver",
    "Gold",
    "Midnight Green"
  ],

  "iPhone 11 Pro Max": [
    "Space Gray",
    "Silver",
    "Gold",
    "Midnight Green"
  ],

  "iPhone 12 mini": [
    "Blue",
    "Green",
    "Black",
    "White",
    "(PRODUCT)RED",
    "Purple"
  ],

  "iPhone 12": [
    "Blue",
    "Green",
    "Black",
    "White",
    "(PRODUCT)RED",
    "Purple"
  ],

  "iPhone 12 Pro": [
    "Silver",
    "Graphite",
    "Gold",
    "Pacific Blue"
  ],

  "iPhone 12 Pro Max": [
    "Silver",
    "Graphite",
    "Gold",
    "Pacific Blue"
  ],

  "iPhone 13 mini": [
    "(PRODUCT)RED",
    "Starlight",
    "Midnight",
    "Blue",
    "Pink",
    "Green"
  ],

  "iPhone 13": [
    "(PRODUCT)RED",
    "Starlight",
    "Midnight",
    "Blue",
    "Pink",
    "Green"
  ],

  "iPhone 13 Pro": [
    "Sierra Blue",
    "Graphite",
    "Gold",
    "Silver",
    "Alpine Green"
  ],

  "iPhone 13 Pro Max": [
    "Sierra Blue",
    "Graphite",
    "Gold",
    "Silver",
    "Alpine Green"
  ],

  "iPhone 14": [
    "Midnight",
    "Starlight",
    "(PRODUCT)RED",
    "Blue",
    "Purple",
    "Yellow"
  ],

  "iPhone 14 Plus": [
    "Midnight",
    "Starlight",
    "(PRODUCT)RED",
    "Blue",
    "Purple",
    "Yellow"
  ],

  "iPhone 14 Pro": [
    "Space Black",
    "Silver",
    "Gold",
    "Deep Purple"
  ],

  "iPhone 14 Pro Max": [
    "Space Black",
    "Silver",
    "Gold",
    "Deep Purple"
  ],

  "iPhone 15": [
    "Black",
    "Green",
    "Blue",
    "Yellow",
    "Pink"
  ],

  "iPhone 15 Plus": [
    "Black",
    "Green",
    "Blue",
    "Yellow",
    "Pink"
  ],

  "iPhone 15 Pro": [
    "Black Titanium",
    "White Titanium",
    "Blue Titanium",
    "Natural Titanium"
  ],

  "iPhone 15 Pro Max": [
    "Black Titanium",
    "White Titanium",
    "Blue Titanium",
    "Natural Titanium"
  ],

  "iPhone 16": [
    "Black",
    "White",
    "Pink",
    "Teal",
    "Ultramarine"
  ],

  "iPhone 16 Plus": [
    "Black",
    "White",
    "Pink",
    "Teal",
    "Ultramarine"
  ],

  "iPhone 16 Pro": [
    "Black Titanium",
    "Natural Titanium",
    "White Titanium",
    "Desert Titanium"
  ],

  "iPhone 16 Pro Max": [
    "Black Titanium",
    "Natural Titanium",
    "White Titanium",
    "Desert Titanium"
  ],

  "iPhone 17": [
    "Black",
    "White",
    "Mist Blue",
    "Sage",
    "Lavender"
  ],

  "iPhone 17 Pro": [
    "Silver",
    "Cosmic Orange",
    "Deep Blue"
  ],

  "iPhone 17 Pro Max": [
    "Silver",
    "Cosmic Orange",
    "Deep Blue"
  ]

};


/* =========================================================
   IPHONE MODELS
   ========================================================= */

const iphoneModels = Object.keys(IPHONE_COLORS).map(model => {

  return {
    name: model,

    parts: IPHONE_PARTS.map(part => {

      const product = {
        id: `${model}-${part}`
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-"),

        name: part,

        model: model,

        category: "iPhone",

        mrp: Math.floor(Math.random() * 1500) + 1000,

        price: Math.floor(Math.random() * 900) + 500,

        stock: Math.floor(Math.random() * 25) + 1
      };

      /*
        ONLY Back Glass and Housing get colour options.
      */

      if (part === "Back Glass" || part === "Housing") {

        product.colors = IPHONE_COLORS[model].map(color => ({
          name: color
        }));

      }

      return product;

    })

  };

});


/* =========================================================
   ACCESSORIES
   ========================================================= */

const accessories = [

  {
    id: "apple-20w-adapter",
    brand: "Apple",
    name: "Apple 20W Adapter",
    category: "Accessories",
    mrp: 2499,
    price: 1599,
    stock: 20
  },

  {
    id: "apple-30w-adapter",
    brand: "Apple",
    name: "Apple 30W Adapter",
    category: "Accessories",
    mrp: 4499,
    price: 2999,
    stock: 15
  },

  {
    id: "apple-c-to-c-1m",
    brand: "Apple",
    name: "USB-C to USB-C Cable 1 Meter",
    category: "Accessories",
    mrp: 1999,
    price: 1199,
    stock: 30
  },

  {
    id: "apple-c-to-lightning-1m",
    brand: "Apple",
    name: "USB-C to Lightning Cable 1 Meter",
    category: "Accessories",
    mrp: 1999,
    price: 1199,
    stock: 25
  },

  {
    id: "apple-earphone-c",
    brand: "Apple",
    name: "Apple EarPods USB-C",
    category: "Accessories",
    mrp: 2499,
    price: 1699,
    stock: 15
  },

  {
    id: "apple-earphone-lightning",
    brand: "Apple",
    name: "Apple EarPods Lightning",
    category: "Accessories",
    mrp: 2499,
    price: 1699,
    stock: 15
  },

  {
    id: "samsung-25w",
    brand: "Samsung",
    name: "Samsung 25W Adapter",
    category: "Accessories",
    mrp: 1999,
    price: 999,
    stock: 20
  },

  {
    id: "samsung-65w",
    brand: "Samsung",
    name: "Samsung 65W Adapter",
    category: "Accessories",
    mrp: 4999,
    price: 2999,
    stock: 10
  },

  {
    id: "samsung-60w",
    brand: "Samsung",
    name: "Samsung 60W Adapter",
    category: "Accessories",
    mrp: 3999,
    price: 2499,
    stock: 12
  }

];


/* =========================================================
   TOOLS
   ========================================================= */

const tools = [

  {
    id: "falcon-530",
    name: "Falcon 530",
    category: "Tools",
    mrp: 9999,
    price: 7499,
    stock: 8,

    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80"
  }

];


/* =========================================================
   IPAD
   ========================================================= */

const ipadParts = [

  {
    id: "ipad-display",
    name: "iPad Display",
    category: "iPad",
    mrp: 5999,
    price: 3999,
    stock: 10
  },

  {
    id: "ipad-battery",
    name: "iPad Battery",
    category: "iPad",
    mrp: 3999,
    price: 2499,
    stock: 15
  },

  {
    id: "ipad-touch",
    name: "iPad Touch",
    category: "iPad",
    mrp: 2999,
    price: 1899,
    stock: 12
  },

  {
    id: "ipad-home-button",
    name: "iPad Home Button",
    category: "iPad",
    mrp: 1499,
    price: 899,
    stock: 15
  }

];


/* =========================================================
   iWATCH
   ========================================================= */

const iwatchParts = [

  {
    id: "iwatch-battery",
    name: "Apple Watch Battery",
    category: "iWatch",
    mrp: 2499,
    price: 1499,
    stock: 15
  },

  {
    id: "iwatch-touch",
    name: "Apple Watch Touch",
    category: "iWatch",
    mrp: 2999,
    price: 1999,
    stock: 10
  },

  {
    id: "iwatch-oca",
    name: "Apple Watch OCA Glass",
    category: "iWatch",
    mrp: 1499,
    price: 899,
    stock: 20
  }

];
