/* =========================================================
   HEXA MOBILE SPARE
   CUSTOMER WEBSITE LOGIC
   ========================================================= */

const iphoneModelsContainer =
  document.getElementById("iphoneModels");

const partGrid =
  document.getElementById("partGrid");

const modelProducts =
  document.getElementById("modelProducts");


let selectedModel = null;


/* =========================================================
   SHOW IPHONE MODELS
   ========================================================= */

function renderIphoneModels() {

  if (!iphoneModelsContainer) return;

  iphoneModelsContainer.innerHTML = "";

  iphoneModels.forEach(model => {

    const card = document.createElement("button");

    card.className = "model-card";

    card.innerHTML = `
      <div class="model-phone">
        <div class="phone-camera"></div>
      </div>

      <strong>${model.name}</strong>

      <span>View spare parts</span>
    `;

    card.addEventListener("click", () => {

      selectedModel = model;

      renderParts(model);

      document
        .getElementById("modelProducts")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    });

    iphoneModelsContainer.appendChild(card);

  });

}


/* =========================================================
   SHOW ONLY ONE OF EACH PART
   ========================================================= */

function renderParts(model) {

  if (!partGrid) return;

  partGrid.innerHTML = "";

  /*
    Safety protection:
    remove duplicate part names.
  */

  const uniqueParts = [];

  model.parts.forEach(product => {

    const alreadyExists =
      uniqueParts.some(
        item =>
          item.name.toLowerCase() ===
          product.name.toLowerCase()
      );

    if (!alreadyExists) {

      uniqueParts.push(product);

    }

  });


  uniqueParts.forEach(product => {

    const card =
      document.createElement("div");

    card.className = "product-card";

    const discount =
      Math.round(
        ((product.mrp - product.price) /
          product.mrp) * 100
      );


    card.innerHTML = `

      <div class="product-image">

        <div class="spare-icon">
          ${getPartIcon(product.name)}
        </div>

      </div>

      <div class="product-info">

        <div class="product-category">
          ${selectedModel.name}
        </div>

        <h3>${product.name}</h3>

        <div class="price-row">

          <span class="price">
            ₹${product.price.toLocaleString("en-IN")}
          </span>

          <span class="mrp">
            ₹${product.mrp.toLocaleString("en-IN")}
          </span>

        </div>

        <span class="discount">
          ${discount}% OFF
        </span>

        <span class="stock">
          ${product.stock} in stock
        </span>

        <button
          class="view-product"
          onclick="openProduct('${product.id}')"
        >
          View Product
        </button>

      </div>

    `;


    partGrid.appendChild(card);

  });

}


/* =========================================================
   PRODUCT ICON
   ========================================================= */

function getPartIcon(part) {

  const icons = {

    "Display": "▣",

    "Battery": "▰",

    "Back Glass": "◇",

    "Ringer": "◉",

    "Earpiece": "◌",

    "Charging Flex": "⌁",

    "Front Camera": "◉",

    "Back Camera": "◎",

    "Battery Cells": "▤",

    "Housing": "▱"

  };

  return icons[part] || "●";

}


/* =========================================================
   OPEN PRODUCT
   ========================================================= */

function openProduct(productId) {

  if (!selectedModel) return;

  const product =
    selectedModel.parts.find(
      item => item.id === productId
    );

  if (!product) return;


  /*
    BACK GLASS
    */

  if (product.name === "Back Glass") {

    showColorProducts(
      product,
      "Back Glass"
    );

    return;

  }


  /*
    HOUSING
    */

  if (product.name === "Housing") {

    showColorProducts(
      product,
      "Housing"
    );

    return;

  }


  showNormalProduct(product);

}


/* =========================================================
   COLOUR PRODUCTS
   ========================================================= */

function showColorProducts(product, title) {

  const colors =
    product.colors || [];


  const colorHTML =
    colors.map(color => {

      return `

        <div class="color-product">

          <div
            class="color-circle"
            style="
              background:
              ${getColorCode(color.name)};
            "
          ></div>

          <div>

            <strong>
              ${selectedModel.name}
            </strong>

            <p>${title} — ${color.name}</p>

          </div>

          <button
            onclick="
              addColorToCart(
                '${product.id}',
                '${color.name}'
              )
            "
          >
            Add
          </button>

        </div>

      `;

    }).join("");


  openModal(`

    <div class="product-modal">

      <button
        class="close-modal"
        onclick="closeModal()"
      >
        ×
      </button>

      <div class="modal-label">
        ${selectedModel.name}
      </div>

      <h2>${title}</h2>

      <p class="modal-description">
        Available colours for
        ${selectedModel.name}
      </p>

      <div class="color-list">

        ${colorHTML}

      </div>

    </div>

  `);

}


/* =========================================================
   COLOUR PREVIEW
   ========================================================= */

function getColorCode(color) {

  const colors = {

    "Jet Black": "#111111",
    "Black": "#111111",
    "Space Black": "#181818",
    "Space Gray": "#777777",
    "Silver": "#d8d8d8",
    "White": "#f5f5f5",
    "Gold": "#d8bd8c",
    "Rose Gold": "#e5b7aa",
    "Pink": "#f3b6c2",
    "Blue": "#477ca8",
    "Midnight": "#202a32",
    "Starlight": "#eee5d5",
    "Green": "#71836d",
    "Purple": "#7c688a",
    "Yellow": "#e7d24c",
    "Coral": "#ff806f",
    "(PRODUCT)RED": "#b32026",
    "Midnight Green": "#53615b",
    "Graphite": "#505050",
    "Pacific Blue": "#4c6478",
    "Sierra Blue": "#9aaec4",
    "Alpine Green": "#52655b",
    "Deep Purple": "#40354f",
    "Black Titanium": "#3c3c3b",
    "White Titanium": "#e5e5e0",
    "Blue Titanium": "#4d5968",
    "Natural Titanium": "#9b988f",
    "Desert Titanium": "#b6a18b",
    "Teal": "#6d9d98",
    "Ultramarine": "#465f9d",
    "Mist Blue": "#aebfc8",
    "Sage": "#9aa88e",
    "Lavender": "#b8a9c8",
    "Cosmic Orange": "#c76b38",
    "Deep Blue": "#314b70"

  };


  return colors[color] || "#999";

}


/* =========================================================
   NORMAL PRODUCT
   ========================================================= */

function showNormalProduct(product) {

  const discount =
    Math.round(
      ((product.mrp - product.price) /
        product.mrp) * 100
    );


  openModal(`

    <div class="product-modal">

      <button
        class="close-modal"
        onclick="closeModal()"
      >
        ×
      </button>

      <div class="modal-label">
        ${selectedModel.name}
      </div>

      <h2>${product.name}</h2>

      <div class="modal-price">
        ₹${product.price.toLocaleString("en-IN")}
      </div>

      <div class="modal-mrp">
        MRP
        ₹${product.mrp.toLocaleString("en-IN")}
      </div>

      <span class="discount">
        ${discount}% OFF
      </span>

      <p>
        Stock available:
        <strong>${product.stock}</strong>
      </p>

      <button
        class="add-cart"
        onclick="
          addToCart('${product.id}')
        "
      >
        Add to Cart
      </button>

    </div>

  `);

}


/* =========================================================
   MODAL
   ========================================================= */

function openModal(content) {

  let modal =
    document.getElementById("hexaModal");

  if (!modal) {

    modal =
      document.createElement("div");

    modal.id = "hexaModal";

    modal.className = "hexa-modal";

    document.body.appendChild(modal);

  }


  modal.innerHTML = content;

  modal.classList.add("active");

}


function closeModal() {

  const modal =
    document.getElementById("hexaModal");

  if (modal) {

    modal.classList.remove("active");

  }

}


/* =========================================================
   CART
   ========================================================= */

let cart =
  JSON.parse(
    localStorage.getItem("hexaCart")
  ) || [];


function addToCart(productId) {

  if (!selectedModel) return;

  const product =
    selectedModel.parts.find(
      item => item.id === productId
    );

  if (!product) return;


  cart.push({

    id: product.id,

    model: selectedModel.name,

    name: product.name,

    price: product.price,

    quantity: 1

  });


  saveCart();

  closeModal();

  alert(
    `${product.name} added to cart`
  );

}


function addColorToCart(
  productId,
  color
) {

  if (!selectedModel) return;

  const product =
    selectedModel.parts.find(
      item => item.id === productId
    );

  if (!product) return;


  cart.push({

    id:
      `${product.id}-${color}`,

    model:
      selectedModel.name,

    name:
      `${product.name} - ${color}`,

    price:
      product.price,

    quantity: 1

  });


  saveCart();

  closeModal();

  alert(
    `${product.name} - ${color} added to cart`
  );

}


function saveCart() {

  localStorage.setItem(
    "hexaCart",
    JSON.stringify(cart)
  );

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderIphoneModels();

  }
);
