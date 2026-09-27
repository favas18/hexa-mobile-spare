/* =========================================================
   HEXA MOBILE SPARE - PRODUCT DATA
========================================================= */


/* =========================================================
   IPHONE MODELS
========================================================= */

const iphoneModels = [

  "iPhone 7",
  "iPhone 7 Plus",

  "iPhone 8",
  "iPhone 8 Plus",

  "iPhone X",
  "iPhone XS",
  "iPhone XS Max",
  "iPhone XR",

  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",

  "iPhone 12",
  "iPhone 12 mini",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",

  "iPhone 13",
  "iPhone 13 mini",
  "iPhone 13 Pro",
  "iPhone 13 Pro Max",

  "iPhone 14",
  "iPhone 14 Plus",
  "iPhone 14 Pro",
  "iPhone 14 Pro Max",

  "iPhone 15",
  "iPhone 15 Plus",
  "iPhone 15 Pro",
  "iPhone 15 Pro Max",

  "iPhone 16",
  "iPhone 16 Plus",
  "iPhone 16 Pro",
  "iPhone 16 Pro Max",

  "iPhone 17",
  "iPhone 17 Air",
  "iPhone 17 Pro",
  "iPhone 17 Pro Max"

];


/* =========================================================
   IPHONE PARTS
========================================================= */

const iphoneParts = [

  {
    id: "display",
    name: "Display",
    icon: "📱",
    description: "Display replacement options"
  },

  {
    id: "battery",
    name: "Battery",
    icon: "🔋",
    description: "Replacement batteries"
  },

  {
    id: "backglass",
    name: "Back Glass",
    icon: "◈",
    description: "Model colour back glass"
  },

  {
    id: "ringer",
    name: "Ringer",
    icon: "🔊",
    description: "Loudspeaker / ringer"
  },

  {
    id: "earpiece",
    name: "Earpiece",
    icon: "🔈",
    description: "Earpiece speaker"
  },

  {
    id: "charging",
    name: "Charging Flex",
    icon: "🔌",
    description: "Charging port flex"
  },

  {
    id: "frontcamera",
    name: "Front Camera",
    icon: "📷",
    description: "Front camera parts"
  },

  {
    id: "backcamera",
    name: "Back Camera",
    icon: "📸",
    description: "Rear camera parts"
  },

  {
    id: "batterycell",
    name: "Battery Cells",
    icon: "⚡",
    description: "Battery cell replacement"
  },

  {
    id: "housing",
    name: "Housing",
    icon: "▣",
    description: "Full body / housing"
  }

];


/* =========================================================
   DISPLAY TYPES
========================================================= */

const displayTypes = [

  {
    id: "dd",
    name: "DD Display",
    description: "Aftermarket DD display"
  },

  {
    id: "glass-change",
    name: "Glass Change",
    description: "Original panel with glass changed"
  },

  {
    id: "one-to-one",
    name: "One-to-One",
    description: "One-to-one replacement display"
  },

  {
    id: "removed",
    name: "Removed",
    description: "Removed / pulled display"
  }

];


/* =========================================================
   ACCESSORIES
========================================================= */

const accessories = {

  apple: [

    "Apple 20W Adapter",
    "Apple 30W Adapter",
    "Apple C to C Cable 1M",
    "Apple C to Lightning Cable 1M",
    "Apple EarPods USB-C",
    "Apple EarPods Lightning"

  ],

  samsung: [

    "Samsung 25W Adapter",
    "Samsung 65W Adapter",
    "Samsung 60W Adapter",
    "Samsung C to C Cable"

  ]

};


/* =========================================================
   TOOLS
========================================================= */

const tools = [

  {
    name: "Falcon 530",
    description: "Professional mobile repair tool",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
  },

  {
    name: "Mobile Repair Toolkit",
    description: "Professional technician tools",
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=80"
  }

];


/* =========================================================
   IPAD MODELS
========================================================= */

const ipadModels = [

  "iPad 5",
  "iPad 6",
  "iPad 7",
  "iPad 8",
  "iPad 9",
  "iPad 10",

  "iPad Air 2",
  "iPad Air 3",
  "iPad Air 4",
  "iPad Air 5",
  "iPad Air 6",

  "iPad mini 4",
  "iPad mini 5",
  "iPad mini 6",
  "iPad mini 7",

  "iPad Pro 9.7",
  "iPad Pro 10.5",
  "iPad Pro 11",
  "iPad Pro 12.9"

];


/* =========================================================
   IPAD PARTS
========================================================= */

const ipadParts = [

  "Display",
  "Battery",
  "Touch",
  "Home Button",
  "Charging Port",
  "Front Camera",
  "Back Camera",
  "Housing",
  "Speaker",
  "Power Flex"

];


/* =========================================================
   APPLE WATCH
========================================================= */

const watchModels = [

  "Apple Watch 1",
  "Apple Watch 2",
  "Apple Watch 3",
  "Apple Watch 4",
  "Apple Watch 5",
  "Apple Watch 6",
  "Apple Watch 7",
  "Apple Watch 8",
  "Apple Watch 9",
  "Apple Watch 10",
  "Apple Watch SE",
  "Apple Watch Ultra",
  "Apple Watch Ultra 2"

];


/* =========================================================
   WATCH PARTS
========================================================= */

const watchParts = [

  "Battery",
  "Touch",
  "OCA Glass",
  "Display",
  "Housing",
  "Charging Flex",
  "Speaker",
  "Power Flex"

];


/* =========================================================
   APPLE BACK GLASS COLOURS
========================================================= */

const appleColours = {

  "iPhone 11":
    ["Black", "Green", "Yellow", "Purple", "Red", "White"],

  "iPhone 12":
    ["Black", "White", "Red", "Green", "Blue", "Purple"],

  "iPhone 13":
    ["Midnight", "Starlight", "Blue", "Pink", "Red", "Green"],

  "iPhone 14":
    ["Midnight", "Starlight", "Blue", "Purple", "Red", "Yellow"],

  "iPhone 15":
    ["Black", "Blue", "Green", "Yellow", "Pink"],

  "iPhone 16":
    ["Black", "White", "Pink", "Teal", "Ultramarine"],

  "iPhone 16 Pro":
    ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],

  "iPhone 16 Pro Max":
    ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"],

  "iPhone 17":
    ["Black", "White", "Blue", "Green", "Pink"],

  "iPhone 17 Pro":
    ["Black", "Silver", "Natural Titanium"],

  "iPhone 17 Pro Max":
    ["Black", "Silver", "Natural Titanium"]

};


/* =========================================================
   IMAGE COLLECTION
========================================================= */

const images = {

  phone:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",

  accessories:
    "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",

  battery:
    "https://images.unsplash.com/photo-1609592424831-1c7bfcf4d4b4?auto=format&fit=crop&w=900&q=80",

  tools:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",

  ipad:
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",

  watch:
    "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80"

};


/* =========================================================
   BANNER SETTINGS
   ADMIN CAN CHANGE THESE LATER
========================================================= */

const bannerSettings = {

  title: "Professional iPhone Spare Parts",

  subtitle:
    "Displays, batteries, back glass, housing, cameras and complete repair parts.",

  label:
    "HEXA MOBILE SPARE",

  button:
    "Shop iPhone Parts",

  image:
    images.phone

};
