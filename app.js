/* =========================================================
   HEXA MOBILE SPARE
   CUSTOMER WEBSITE
   ========================================================= */

let selectedModel = null;

let cart = JSON.parse(localStorage.getItem("hexaCart")) || [];


/* =========================================================
   PAGE START
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderIphoneModels();

    setupSearch();

    updateCartCount();

});


/* =========================================================
   IPHONE MODEL CARDS
   ========================================================= */

function renderIphoneModels() {

    const container =
        document.getElementById("iphoneModels");

    if (!container) return;

    container.innerHTML = "";

    iphoneModels.forEach((model, index) => {

        /*
        IMPORTANT:
        model is an OBJECT.
        We use model.name instead of model.
        */

        const card =
            document.createElement("div");

        card.className = "model-card";

        card.innerHTML = `

            <div class="phone-visual">

                <div class="phone-body">

                    <div class="phone-screen">

                        <div class="screen-glow"></div>

                    </div>

                    <div class="dynamic-island"></div>

                    <div class="camera-system">

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>

            </div>

            <div class="model-info">

                <h3>${model.name}</h3>

                <p>
                    ${model.parts.length} spare parts
                </p>

                <button
                    onclick="selectModel(${index})"
                >
                    View Spare Parts
                    <span>→</span>
                </button>

            </div>

        `;

        container.appendChild(card);

    });

}


/* =========================================================
   SELECT IPHONE MODEL
   ========================================================= */

function selectModel(index) {

    selectedModel = iphoneModels[index];

    const title =
        document.getElementById("selectedModelTitle");

    if (title) {

        title.textContent =
            selectedModel.name;

    }

    renderParts(selectedModel);

    const section =
        document.getElementById("modelProducts");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   SHOW PARTS
   ========================================================= */

function renderParts(model) {

    const grid =
        document.getElementById("partGrid");

    if (!grid) return;

    grid.innerHTML = "";

    /*
    Remove duplicate parts.
    Each part appears ONLY ONCE.
    */

    const uniqueParts = [];

    model.parts.forEach(part => {

        const exists =
            uniqueParts.some(
                item =>
                    item.name.toLowerCase() ===
                    part.name.toLowerCase()
            );

        if (!exists) {

            uniqueParts.push(part);

        }

    });


    uniqueParts.forEach(part => {

        const card =
            document.createElement("div");

        card.className =
            "part-product-card";


        const discount =
            Math.round(
                ((part.mrp - part.price) /
                    part.mrp) * 100
            );


        card.innerHTML = `

            <div class="part-image">

                <div class="part-icon">

                    ${getPartIcon(part.name)}

                </div>

            </div>

            <div class="part-content">

                <small>
                    ${model.name}
                </small>

                <h3>
                    ${part.name}
                </h3>

                <div class="price-line">

                    <strong>
                        ₹${part.price.toLocaleString("en-IN")}
                    </strong>

                    <del>
                        ₹${part.mrp.toLocaleString("en-IN")}
                    </del>

                </div>

                <span class="discount-badge">
                    ${discount}% OFF
                </span>

                <div class="stock-text">

                    ${part.stock > 0
                        ? "● In Stock"
                        : "● Out of Stock"
                    }

                </div>

                <button
                    class="part-button"
                    onclick="openProduct('${part.id}')"
                >

                    View Details

                </button>

            </div>

        `;

        grid.appendChild(card);

    });

}


/* =========================================================
   PART ICONS
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


    /* BACK GLASS */

    if (product.name === "Back Glass") {

        showColourProducts(
            product,
            "Back Glass"
        );

        return;

    }


    /* HOUSING */

    if (product.name === "Housing") {

        showColourProducts(
            product,
            "Housing"
        );

        return;

    }


    showNormalProduct(product);

}


/* =========================================================
   BACK GLASS / HOUSING COLOURS
   ========================================================= */

function showColourProducts(product, title) {

    const colors =
        product.colors || [];


    let html = `

        <div class="modal-product">

            <button
                class="modal-close"
                onclick="closeModal()"
            >
                ×
            </button>

            <span class="modal-category">
                ${selectedModel.name}
            </span>

            <h2>
                ${title}
            </h2>

            <p class="modal-subtitle">
                Select colour
            </p>

            <div class="colour-grid">

    `;


    colors.forEach(color => {

        html += `

            <div class="colour-card">

                <div
                    class="colour-circle"
                    style="
                        background:${getColourCode(
                            color.name
                        )};
                    "
                ></div>

                <div class="colour-name">

                    ${color.name}

                </div>

                <button
                    onclick="
                        addColourToCart(
                            '${product.id}',
                            '${escapeText(color.name)}'
                        )
                    "
                >
                    Add to Cart
                </button>

            </div>

        `;

    });


    html += `

            </div>

        </div>

    `;


    openModal(html);

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


    const html = `

        <div class="modal-product">

            <button
                class="modal-close"
                onclick="closeModal()"
            >
                ×
            </button>

            <span class="modal-category">

                ${selectedModel.name}

            </span>

            <h2>

                ${product.name}

            </h2>

            <div class="modal-price">

                ₹${product.price.toLocaleString("en-IN")}

            </div>

            <div class="modal-mrp">

                MRP:
                <del>
                    ₹${product.mrp.toLocaleString("en-IN")}
                </del>

            </div>

            <span class="discount-badge">

                ${discount}% OFF

            </span>

            <div class="modal-stock">

                ${product.stock > 0
                    ? "✓ Available"
                    : "Out of Stock"
                }

            </div>

            <button
                class="modal-cart-button"
                onclick="
                    addToCart('${product.id}')
                "
            >

                Add to Cart

            </button>

        </div>

    `;


    openModal(html);

}


/* =========================================================
   COLOUR CODE
   ========================================================= */

function getColourCode(color) {

    const colors = {

        "Jet Black": "#111111",

        "Black": "#111111",

        "Space Black": "#181818",

        "Space Gray": "#777777",

        "Silver": "#d8d8d8",

        "White": "#f5f5f5",

        "Gold": "#d9bd8a",

        "Rose Gold": "#e5b7aa",

        "Pink": "#efb8c5",

        "Blue": "#477ca8",

        "Midnight": "#202a32",

        "Starlight": "#eee5d5",

        "Green": "#71836d",

        "Purple": "#7d698c",

        "Yellow": "#e6d24d",

        "Coral": "#ff806f",

        "(PRODUCT)RED": "#b82027",

        "Midnight Green": "#53615b",

        "Graphite": "#505050",

        "Pacific Blue": "#4d667c",

        "Sierra Blue": "#9eafc1",

        "Alpine Green": "#52645a",

        "Deep Purple": "#40364f",

        "Black Titanium": "#3d3d3b",

        "White Titanium": "#e5e4df",

        "Blue Titanium": "#4f5c6b",

        "Natural Titanium": "#9d9a90",

        "Desert Titanium": "#b5a08a",

        "Teal": "#6e9d98",

        "Ultramarine": "#465f9c",

        "Mist Blue": "#afc1ca",

        "Sage": "#99a78d",

        "Lavender": "#b8a9c8",

        "Cosmic Orange": "#c76b38",

        "Deep Blue": "#314b70"

    };

    return colors[color] || "#999999";

}


/* =========================================================
   CART
   ========================================================= */

function addToCart(productId) {

    if (!selectedModel) return;

    const product =
        selectedModel.parts.find(
            item => item.id === productId
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === product.id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            model: selectedModel.name,

            name: product.name,

            price: product.price,

            quantity: 1

        });

    }


    saveCart();

    closeModal();

    showToast(
        `${product.name} added to cart`
    );

}


/* =========================================================
   COLOUR CART
   ========================================================= */

function addColourToCart(
    productId,
    colour
) {

    if (!selectedModel) return;

    const product =
        selectedModel.parts.find(
            item => item.id === productId
        );

    if (!product) return;


    const cartId =
        `${product.id}-${colour}`;


    const existing =
        cart.find(
            item => item.id === cartId
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: cartId,

            model:
                selectedModel.name,

            name:
                `${product.name} - ${colour}`,

            price:
                product.price,

            quantity: 1

        });

    }


    saveCart();

    closeModal();

    showToast(
        `${product.name} - ${colour} added`
    );

}


/* =========================================================
   SAVE CART
   ========================================================= */

function saveCart() {

    localStorage.setItem(
        "hexaCart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


/* =========================================================
   CART COUNT
   ========================================================= */

function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    document
        .querySelectorAll(".cart-count")
        .forEach(element => {

            element.textContent = count;

        });

}


/* =========================================================
   MODAL
   ========================================================= */

function openModal(content) {

    let modal =
        document.getElementById(
            "hexaModal"
        );


    if (!modal) {

        modal =
            document.createElement("div");

        modal.id =
            "hexaModal";

        modal.className =
            "hexa-modal";

        document.body.appendChild(modal);

    }


    modal.innerHTML = content;

    setTimeout(() => {

        modal.classList.add("active");

    }, 10);

}


function closeModal() {

    const modal =
        document.getElementById(
            "hexaModal"
        );

    if (modal) {

        modal.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

    const search =
        document.getElementById(
            "searchInput"
        );

    if (!search) return;


    search.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .toLowerCase()
                    .trim();


            document
                .querySelectorAll(
                    ".model-card"
                )
                .forEach(card => {

                    const text =
                        card.textContent
                            .toLowerCase();

                    card.style.display =
                        text.includes(query)
                            ? ""
                            : "none";

                });

        }
    );

}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        document.getElementById(
            "hexaToast"
        );


    if (!toast) {

        toast =
            document.createElement("div");

        toast.id =
            "hexaToast";

        document.body.appendChild(toast);

    }


    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);

}


/* =========================================================
   SECURITY / TEXT
   ========================================================= */

function escapeText(text) {

    return String(text)
        .replace(/'/g, "\\'");
}
