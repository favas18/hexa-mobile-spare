/* =========================================================
   HEXA MOBILE SPARE - MAIN APPLICATION
========================================================= */


/* =========================================================
   STATE
========================================================= */

let cart =
  JSON.parse(localStorage.getItem("hexaCart")) || [];

let orders =
  JSON.parse(localStorage.getItem("hexaOrders")) || [];

let currentUser =
  JSON.parse(localStorage.getItem("hexaUser")) || null;


/* =========================================================
   PRICE GENERATOR
========================================================= */

function priceFor(text) {

  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    hash =
      ((hash << 5) - hash) +
      text.charCodeAt(i);

    hash |= 0;
  }

  hash = Math.abs(hash);

  return 299 + (hash % 4200);
}


function productPrice(name) {

  const price = priceFor(name);

  const mrp =
    Math.ceil((price * 1.25) / 10) * 10;

  return {
    price,
    mrp,
    discount:
      Math.round(
        ((mrp - price) / mrp) * 100
      )
  };

}


/* =========================================================
   PRODUCT IMAGE
========================================================= */

function productImage(type = "") {

  const text = type.toLowerCase();

  if (text.includes("battery"))
    return images.battery;

  if (
    text.includes("adapter") ||
    text.includes("cable") ||
    text.includes("earpod")
  )
    return images.accessories;

  if (text.includes("tool"))
    return images.tools;

  if (text.includes("ipad"))
    return images.ipad;

  if (text.includes("watch"))
    return images.watch;

  return images.phone;
}


/* =========================================================
   SAVE STATE
========================================================= */

function saveCart() {

  localStorage.setItem(
    "hexaCart",
    JSON.stringify(cart)
  );

  updateCartCount();
}


function saveOrders() {

  localStorage.setItem(
    "hexaOrders",
    JSON.stringify(orders)
  );

}


/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {

  const element =
    document.getElementById("cartCount");

  if (!element) return;

  element.textContent =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

}


/* =========================================================
   HOME
========================================================= */

function showHome() {

  const app =
    document.getElementById("app");

  app.innerHTML = `

    <section class="hero">

      <div class="hero-content">

        <div class="hero-label">
          ${bannerSettings.label}
        </div>

        <h1>
          ${bannerSettings.title}
          <br>
          <span>Built for technicians.</span>
        </h1>

        <p>
          ${bannerSettings.subtitle}
        </p>

        <div class="hero-buttons">

          <button
            class="white-btn"
            onclick="openCategory('iphone')"
          >
            ${bannerSettings.button}
          </button>

          <button
            class="outline-btn"
            onclick="openCategory('accessories')"
          >
            View Accessories
          </button>

        </div>

      </div>

    </section>


    <div class="feature-strip">

      <div class="feature">
        <div class="feature-icon">📦</div>
        <div>
          <strong>All India Delivery</strong>
          <span>Ship across India</span>
        </div>
      </div>

      <div class="feature">
        <div class="feature-icon">💰</div>
        <div>
          <strong>Best Prices</strong>
          <span>Wholesale-friendly pricing</span>
        </div>
      </div>

      <div class="feature">
        <div class="feature-icon">🔧</div>
        <div>
          <strong>Technician Parts</strong>
          <span>Repair-ready catalogue</span>
        </div>
      </div>

      <div class="feature">
        <div class="feature-icon">🔒</div>
        <div>
          <strong>Secure Checkout</strong>
          <span>UPI & COD</span>
        </div>
      </div>

    </div>


    <section class="section">

      <div class="section-heading">

        <div>
          <h2>Shop by Category</h2>

          <p>
            Genuine-style catalogue navigation for repair shops
          </p>
        </div>

      </div>


      <div class="category-grid">

        ${categoryCard(
          "📱",
          "iPhone Spare Parts",
          "iPhone 7 → 17 Pro Max",
          "iphone"
        )}

        ${categoryCard(
          "🔌",
          "Apple Accessories",
          "Adapters, cables & EarPods",
          "accessories"
        )}

        ${categoryCard(
          "🛠️",
          "Repair Tools",
          "Falcon 530 & tools",
          "tools"
        )}

        ${categoryCard(
          "▣",
          "iPad Spare Parts",
          "Display, battery & touch",
          "ipad"
        )}

        ${categoryCard(
          "⌚",
          "Apple Watch",
          "Battery, touch & OCA",
          "watch"
        )}

      </div>

    </section>


    <section class="section">

      <div class="section-heading">

        <div>
          <h2>Choose your iPhone</h2>

          <p>
            Select a model to see available spare parts.
          </p>
        </div>

        <button
          class="outline-btn"
          onclick="openCategory('iphone')"
        >
          View All
        </button>

      </div>


      <div class="model-grid">

        ${iphoneModels
          .slice(-12)
          .map(modelCard)
          .join("")}

      </div>

    </section>


    <section class="section">

      <div class="banner-grid">

        <div class="promo-card promo-green">

          <h2>
            Professional parts.
            One place.
          </h2>

          <p>
            Displays, batteries, housing, back glass,
            cameras, charging flex and more.
          </p>

          <div>
            <button
              class="white-btn"
              onclick="openCategory('iphone')"
            >
              Browse iPhone Parts
            </button>
          </div>

        </div>


        <div class="promo-card promo-white">

          <h2>
            Repair tools
          </h2>

          <p>
            Professional tools for mobile technicians.
          </p>

          <button
            class="primary-btn"
            onclick="openCategory('tools')"
          >
            View Tools
          </button>

        </div>

      </div>

    </section>

  `;

  updateCartCount();

}


/* =========================================================
   CATEGORY CARD
========================================================= */

function categoryCard(
  icon,
  title,
  description,
  category
) {

  return `

    <button
      class="category-card"
      onclick="openCategory('${category}')"
    >

      <div class="category-icon">
        ${icon}
      </div>

      <h3>${title}</h3>

      <p>${description}</p>

    </button>

  `;

}


/* =========================================================
   MODEL CARD
========================================================= */

function modelCard(model) {

  return `

    <button
      class="model-card"
      onclick="openIphoneModel('${model}')"
    >

      <div class="phone-art">

        <div class="phone">
          <div class="phone-screen"></div>
        </div>

      </div>

      <h3>${model}</h3>

      <p>
        View spare parts →
      </p>

    </button>

  `;

}


/* =========================================================
   IPHONE CATEGORY
========================================================= */

function openCategory(category) {

  if (category === "iphone") {
    showIphoneModels();
    return;
  }

  if (category === "accessories") {
    showAccessories();
    return;
  }

  if (category === "tools") {
    showTools();
    return;
  }

  if (category === "ipad") {
    showIpad();
    return;
  }

  if (category === "watch") {
    showWatch();
    return;
  }

}


/* =========================================================
   IPHONE MODELS
========================================================= */

function showIphoneModels() {

  document.getElementById("app").innerHTML = `

    ${breadcrumb("Home", "iPhone")}

    <div class="model-header">

      <div>

        <h1>iPhone Spare Parts</h1>

        <p>
          Choose your iPhone model.
        </p>

      </div>

      <div>
        📱
      </div>

    </div>


    <div class="model-grid">

      ${iphoneModels
        .map(modelCard)
        .join("")}

    </div>

  `;

}


/* =========================================================
   IPHONE MODEL PAGE
========================================================= */

function openIphoneModel(model) {

  document.getElementById("app").innerHTML = `

    ${breadcrumb(
      "iPhone",
      model
    )}

    <div class="model-header">

      <div>

        <h1>${model}</h1>

        <p>
          Select the spare part you need.
        </p>

      </div>

      <button
        class="outline-btn"
        onclick="showIphoneModels()"
      >
        ← Models
      </button>

    </div>


    <div class="parts-grid">

      ${iphoneParts
        .map(part => `

          <button
            class="part-card"
            onclick="openPart('${model}', '${part.id}')"
          >

            <div class="part-icon">
              ${part.icon}
            </div>

            <h3>${part.name}</h3>

            <p>
              ${part.description}
            </p>

          </button>

        `)
        .join("")}

    </div>

  `;

}


/* =========================================================
   PART PAGE
========================================================= */

function openPart(model, part) {

  if (part === "display") {

    showDisplayTypes(model);
    return;

  }

  if (part === "backglass") {

    showColours(
      model,
      "Back Glass"
    );

    return;

  }

  if (part === "housing") {

    showColours(
      model,
      "Housing"
    );

    return;

  }

  const names = {

    battery: "Battery",

    ringer: "Ringer",

    earpiece: "Earpiece",

    charging: "Charging Flex",

    frontcamera: "Front Camera",

    backcamera: "Back Camera",

    batterycell: "Battery Cells"

  };

  const name =
    names[part] || part;

  showProducts(
    `${model} ${name}`,
    [model],
    name
  );

}


/* =========================================================
   DISPLAY TYPES
========================================================= */

function showDisplayTypes(model) {

  document.getElementById("app").innerHTML = `

    ${breadcrumb(
      model,
      "Display"
    )}

    <div class="model-header">

      <div>

        <h1>${model} Display</h1>

        <p>
          Choose display quality.
        </p>

      </div>

    </div>


    <div class="parts-grid">

      ${displayTypes
        .map(type => `

          <button
            class="part-card"
            onclick="showProducts(
              '${model} ${type.name}',
              ['${model}'],
              '${type.name}'
            )"
          >

            <div class="part-icon">
              📱
            </div>

            <h3>
              ${type.name}
            </h3>

            <p>
              ${type.description}
            </p>

          </button>

        `)
        .join("")}

    </div>

  `;

}


/* =========================================================
   COLOURS
========================================================= */

function showColours(
  model,
  partName
) {

  let colours =
    appleColours[model];

  if (!colours) {

    colours = [
      "Black",
      "White",
      "Silver",
      "Gold",
      "Green",
      "Blue"
    ];

  }


  document.getElementById("app").innerHTML = `

    ${breadcrumb(
      model,
      partName
    )}

    <div class="model-header">

      <div>

        <h1>
          ${model} ${partName}
        </h1>

        <p>
          Select available colour.
        </p>

      </div>

    </div>


    <div class="color-grid">

      ${colours
        .map(colour => {

          const productName =
            `${model} ${partName} - ${colour}`;

          const pricing =
            productPrice(productName);

          return `

            <div class="color-card">

              <div
                class="color-swatch"
                style="
                  background:
                  ${colourBackground(colour)};
                "
              ></div>

              <h3>
                ${colour}
              </h3>

              <p>
                ₹${pricing.price.toLocaleString()}
              </p>

              <button
                class="primary-btn"
                style="
                  width:100%;
                  margin-top:10px;
                  font-size:11px;
                "
                onclick="
                  addProduct(
                    '${productName}',
                    '${model}',
                    '${partName}',
                    '${productImage(partName)}'
                  )
                "
              >
                Add to Cart
              </button>

            </div>

          `;

        })
        .join("")}

    </div>

  `;

}


function colourBackground(colour) {

  const c =
    colour.toLowerCase();

  if (c.includes("black"))
    return "#171918";

  if (c.includes("white"))
    return "#f4f4f1";

  if (c.includes("silver"))
    return "linear-gradient(135deg,#eee,#aaa)";

  if (c.includes("gold"))
    return "linear-gradient(135deg,#e7d09b,#9c7b35)";

  if (c.includes("green"))
    return "#5b7563";

  if (c.includes("blue"))
    return "#52718e";

  if (c.includes("pink"))
    return "#d9a4ae";

  if (c.includes("purple"))
    return "#75617e";

  if (c.includes("red"))
    return "#982e35";

  if (c.includes("yellow"))
    return "#d5b74c";

  if (c.includes("titanium"))
    return "#777a78";

  return "#aaa";

}


/* =========================================================
   PRODUCTS
========================================================= */

function showProducts(
  title,
  models = [],
  type = ""
) {

  const products = [];

  models.forEach(model => {

    for (let i = 1; i <= 4; i++) {

      products.push({
        id:
          `${model}-${type}-${i}`
          .replace(/\s/g, "-"),

        name:
          `${model} ${type}`,

        model,

        type,

        image:
          productImage(type),

        ...productPrice(
          `${model}${type}${i}`
        ),

        stock:
          2 + (
            priceFor(
              model + type + i
            ) % 18
          )

      });

    }

  });


  renderProductList(
    title,
    products
  );

}


/* =========================================================
   PRODUCT LIST
========================================================= */

function renderProductList(
  title,
  products
) {

  document.getElementById("app").innerHTML = `

    ${breadcrumb(
      "Catalogue",
      title
    )}

    <div class="section-heading">

      <div>
        <h1>${title}</h1>

        <p>
          Available products
        </p>
      </div>

    </div>


    <div class="filter-bar">

      <button
        class="filter-btn active"
      >
        All
      </button>

      <button
        class="filter-btn"
        onclick="sortCurrentProducts('low')"
      >
        Price Low
      </button>

      <button
        class="filter-btn"
        onclick="sortCurrentProducts('high')"
      >
        Price High
      </button>

    </div>


    <div
      id="productsContainer"
      class="product-grid"
    >

      ${products
        .map(productCard)
        .join("")}

    </div>

  `;


  window.currentProducts =
    products;

}


function productCard(product) {

  return `

    <div class="product-card">

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

      </div>


      <div class="product-info">

        <span class="product-tag">
          ${product.type}
        </span>

        <h3>
          ${product.name}
        </h3>

        <p class="product-model">
          ${product.model}
        </p>


        <div class="price-row">

          <span class="price">
            ₹${product.price.toLocaleString()}
          </span>

          <span class="mrp">
            ₹${product.mrp.toLocaleString()}
          </span>

          <span class="discount">
            ${product.discount}% OFF
          </span>

        </div>


        <div class="stock">
          ${product.stock} in stock
        </div>


        <div class="product-actions">

          <button
            class="view-btn"
            onclick='viewProduct(${JSON.stringify(product)})'
          >
            Details
          </button>

          <button
            class="add-btn"
            onclick='addProduct(
              ${JSON.stringify(product.name)},
              ${JSON.stringify(product.model)},
              ${JSON.stringify(product.type)},
              ${JSON.stringify(product.image)}
            )'
          >
            Add Cart
          </button>

        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   SORT
========================================================= */

function sortCurrentProducts(direction) {

  if (!window.currentProducts)
    return;

  const products =
    [...window.currentProducts];

  products.sort((a, b) => {

    return direction === "low"
      ? a.price - b.price
      : b.price - a.price;

  });

  document.getElementById(
    "productsContainer"
  ).innerHTML =
    products.map(productCard).join("");

}


/* =========================================================
   ACCESSORIES
========================================================= */

function showAccessories() {

  const products = [];

  accessories.apple.forEach(name => {

    const p =
      productPrice(name);

    products.push({

      id: name,

      name,

      model: "Apple",

      type: "Apple Accessories",

      image:
        images.accessories,

      ...p,

      stock:
        5 + priceFor(name) % 20

    });

  });


  accessories.samsung.forEach(name => {

    const p =
      productPrice(name);

    products.push({

      id: name,

      name,

      model: "Samsung",

      type: "Samsung Accessories",

      image:
        images.accessories,

      ...p,

      stock:
        5 + priceFor(name) % 20

    });

  });


  renderProductList(
    "Apple & Samsung Accessories",
    products
  );

}


/* =========================================================
   TOOLS
========================================================= */

function showTools() {

  const products =
    tools.map(tool => {

      return {

        id: tool.name,

        name: tool.name,

        model: "Professional Tool",

        type: "Repair Tools",

        image: tool.image,

        ...productPrice(tool.name),

        stock:
          3 + priceFor(tool.name) % 12

      };

    });


  renderProductList(
    "Repair Tools",
    products
  );

}


/* =========================================================
   IPAD
========================================================= */

function showIpad() {

  document.getElementById("app").innerHTML = `

    ${breadcrumb(
      "Home",
      "iPad"
    )}

    <div class="model-header">

      <div>

        <h1>iPad Spare Parts</h1>

        <p>
          Select an iPad model.
        </p>

      </div>

    </div>


    <div class="model-grid">

      ${ipadModels.map(model => `

        <button
          class="model-card"
          onclick="showIpadParts('${model}')"
        >

          <div class="phone-art">
            <div class="phone">
              <div class="phone-screen"></div>
            </div>
          </div>

          <h3>${model}</h3>

          <p>
            View parts →
          </p>

        </button>

      `).join("")}

    </div>

  `;

}


function showIpadParts(model) {

  document.getElementById("app").innerHTML = `

    ${breadcrumb(
      "iPad",
      model
    )}

    <div class="model-header">

      <div>

        <h1>${model}</h1>

        <p>
          iPad spare parts
        </p>

      </div>

    </div>


    <div class="parts-grid">

      ${ipadParts.map(part => `

        <button
          class="part-card"
          onclick="
            showProducts(
              '${model} ${part}',
              ['${model}'],
              '${part}'
            )
          "
        >

          <div class="part-icon">
            ${ipadIcon(part)}
          </div>

          <h3>${part}</h3>

          <p>
            Available parts
          </p>

        </button>

      `).join("")}

    </div>

  `;

}


function ipadIcon(part) {

  if (part === "Battery")
    return "🔋";

  if (part === "Camera")
    return "📷";

  if (part === "Speaker")
    return "🔊";

  return "▣";

}


/* =========================================================
   WATCH
========================================================= */

function showWatch() {

  document.getElementById("app").innerHTML = `

    ${breadcrumb(
      "Home",
      "Apple Watch"
    )}

    <div class="model-header">

      <div>

        <h1>Apple Watch Spare Parts</h1>

        <p>
          First generation to latest models.
        </p>

      </div>

    </div>


    <div class="model-grid">

      ${watchModels.map(model => `

        <button
          class="model-card"
          onclick="showWatchParts('${model}')"
        >

          <div class="phone-art">

            <div
              style="
                width:80px;
                height:105px;
                border-radius:25px;
                background:#202522;
                border:6px solid #111;
                box-shadow:0 10px 20px rgba(0,0,0,.15);
              "
            ></div>

          </div>

          <h3>${model}</h3>

          <p>
            View parts →
          </p>

        </button>

      `).join("")}

    </div>

  `;

}


function showWatchParts(model) {

  document.getElementById("app").innerHTML = `

    ${breadcrumb(
      "Apple Watch",
      model
    )}

    <div class="model-header">

      <div>

        <h1>${model}</h1>

        <p>
          Apple Watch spare parts
        </p>

      </div>

    </div>


    <div class="parts-grid">

      ${watchParts.map(part => `

        <button
          class="part-card"
          onclick="
            showProducts(
              '${model} ${part}',
              ['${model}'],
              '${part}'
            )
          "
        >

          <div class="part-icon">
            ${watchIcon(part)}
          </div>

          <h3>${part}</h3>

          <p>
            Available parts
          </p>

        </button>

      `).join("")}

    </div>

  `;

}


function watchIcon(part) {

  if (part === "Battery")
    return "🔋";

  if (
    part === "Touch" ||
    part === "OCA Glass" ||
    part === "Display"
  )
    return "⌚";

  return "⚙️";

}


/* =========================================================
   SEARCH
========================================================= */

function searchProducts(query) {

  query =
    query
      .trim()
      .toLowerCase();

  if (!query) {

    showHome();

    return;

  }


  const products = [];


  iphoneModels.forEach(model => {

    iphoneParts.forEach(part => {

      const name =
        `${model} ${part.name}`;

      if (
        name
          .toLowerCase()
          .includes(query)
      ) {

        const p =
          productPrice(name);

        products.push({

          id: name,

          name,

          model,

          type: part.name,

          image:
            productImage(part.name),

          ...p,

          stock:
            4 + priceFor(name) % 15

        });

      }

    });

  });


  accessories.apple
    .concat(accessories.samsung)
    .forEach(name => {

      if (
        name
          .toLowerCase()
          .includes(query)
      ) {

        const p =
          productPrice(name);

        products.push({

          id: name,

          name,

          model:
            name.includes("Samsung")
              ? "Samsung"
              : "Apple",

          type: "Accessories",

          image:
            images.accessories,

          ...p,

          stock: 8

        });

      }

    });


  if (!products.length) {

    document.getElementById("app").innerHTML = `

      <div class="empty">

        <h2>
          No products found
        </h2>

        <p>
          Try searching for iPhone 13 display,
          battery, housing, adapter or cable.
        </p>

      </div>

    `;

    return;

  }


  renderProductList(
    `Search results for "${query}"`,
    products
  );

}


/* =========================================================
   PRODUCT DETAILS
========================================================= */

function viewProduct(product) {

  document.getElementById(
    "productDetails"
  ).innerHTML = `

    <img
      src="${product.image}"
      style="
        width:100%;
        height:230px;
        object-fit:contain;
        background:#f2f8f4;
        border-radius:15px;
      "
    >

    <div style="margin-top:18px">

      <span class="product-tag">
        ${product.type}
      </span>

      <h2>
        ${product.name}
      </h2>

      <p class="muted">
        ${product.model}
      </p>

      <div class="price-row">

        <span class="price">
          ₹${product.price.toLocaleString()}
        </span>

        <span class="mrp">
          ₹${product.mrp.toLocaleString()}
        </span>

        <span class="discount">
          ${product.discount}% OFF
        </span>

      </div>

      <p class="stock">
        Stock available:
        ${product.stock}
      </p>

      <button
        class="primary-btn full"
        style="margin-top:20px"
        onclick="
          addProduct(
            '${product.name}',
            '${product.model}',
            '${product.type}',
            '${product.image}'
          );
          closeProduct();
        "
      >
        Add to Cart
      </button>

    </div>

  `;


  document
    .getElementById("productModal")
    .classList.add("show");

}


function closeProduct() {

  document
    .getElementById("productModal")
    .classList.remove("show");

}


/* =========================================================
   ADD PRODUCT
========================================================= */

function addProduct(
  name,
  model,
  type,
  image
) {

  const pricing =
    productPrice(name);

  const existing =
    cart.find(
      item =>
        item.name === name
    );


  if (existing) {

    existing.quantity++;

  } else {

    cart.push({

      id:
        Date.now(),

      name,

      model,

      type,

      image,

      price:
        pricing.price,

      mrp:
        pricing.mrp,

      quantity: 1

    });

  }


  saveCart();

  showToast(
    "Added to cart ✓"
  );

}


/* =========================================================
   CART
========================================================= */

function openCart() {

  renderCart();

  document
    .getElementById("cartModal")
    .classList.add("show");

}


function closeCart() {

  document
    .getElementById("cartModal")
    .classList.remove("show");

}


function renderCart() {

  const container =
    document.getElementById(
      "cartItems"
    );

  const summary =
    document.getElementById(
      "cartSummary"
    );


  if (!cart.length) {

    container.innerHTML = `

      <div class="empty">

        🛒

        <h3>
          Your cart is empty
        </h3>

        <p>
          Add some spare parts to continue.
        </p>

      </div>

    `;

    summary.innerHTML = "";

    return;

  }


  container.innerHTML =
    cart.map((item, index) => `

      <div class="cart-item">

        <div class="cart-item-image">

          <img
            src="${item.image}"
            alt=""
          >

        </div>

        <div class="cart-item-info">

          <h4>
            ${item.name}
          </h4>

          <p>
            ${item.model}
          </p>

          <p>
            ₹${item.price.toLocaleString()}
            × ${item.quantity}
          </p>

        </div>

        <button
          class="remove-btn"
          onclick="removeCartItem(${index})"
        >
          Remove
        </button>

      </div>

    `).join("");


  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );


  summary.innerHTML = `

    <div class="cart-total">

      <span>Total</span>

      <span>
        ₹${total.toLocaleString()}
      </span>

    </div>

    <button
      class="primary-btn full"
      onclick="startCheckout()"
    >
      Proceed to Checkout
    </button>

  `;

}


function removeCartItem(index) {

  cart.splice(index, 1);

  saveCart();

  renderCart();

}


/* =========================================================
   LOGIN
========================================================= */

function openLogin() {

  document
    .getElementById("loginModal")
    .classList.add("show");

}


function closeLogin() {

  document
    .getElementById("loginModal")
    .classList.remove("show");

}


function loginMobile() {

  const mobile =
    document
      .getElementById("mobileLogin")
      .value
      .trim();


  if (
    mobile.length !== 10 ||
    isNaN(mobile)
  ) {

    alert(
      "Enter a valid 10 digit mobile number."
    );

    return;

  }


  currentUser = {

    name:
      "HEXA Customer",

    mobile

  };


  localStorage.setItem(
    "hexaUser",
    JSON.stringify(currentUser)
  );


  closeLogin();

  showToast(
    "Login successful ✓"
  );

}


function loginGoogle() {

  currentUser = {

    name:
      "Google Customer",

    provider:
      "Google"

  };


  localStorage.setItem(
    "hexaUser",
    JSON.stringify(currentUser)
  );


  closeLogin();

  showToast(
    "Google login demo successful ✓"
  );

}


/* =========================================================
   CHECKOUT
========================================================= */

function startCheckout() {

  if (!cart.length) {

    return;

  }


  if (!currentUser) {

    closeCart();

    openLogin();

    return;

  }


  closeCart();

  renderCheckout();

  document
    .getElementById(
      "checkoutModal"
    )
    .classList.add("show");

}


function closeCheckout() {

  document
    .getElementById(
      "checkoutModal"
    )
    .classList.remove("show");

}


function renderCheckout() {

  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );


  document.getElementById(
    "checkoutContent"
  ).innerHTML = `

    <p class="muted">
      Shipping across India.
    </p>

    <br>


    <div class="form-grid">

      <div class="form-field">

        <label>
          Full Name
        </label>

        <input
          id="checkoutName"
          value="${currentUser.name || ""}"
          placeholder="Customer name"
        >

      </div>


      <div class="form-field">

        <label>
          Mobile Number
        </label>

        <input
          id="checkoutMobile"
          value="${currentUser.mobile || ""}"
          placeholder="10 digit mobile"
        >

      </div>


      <div class="form-field full-width">

        <label>
          Delivery Address
        </label>

        <textarea
          id="checkoutAddress"
          rows="3"
          placeholder="House / shop, street, town, district, Kerala / state, PIN"
        ></textarea>

      </div>


      <div class="form-field">

        <label>
          State
        </label>

        <input
          id="checkoutState"
          placeholder="Kerala"
        >

      </div>


      <div class="form-field">

        <label>
          PIN Code
        </label>

        <input
          id="checkoutPin"
          maxlength="6"
          placeholder="PIN"
        >

      </div>

    </div>


    <h3 style="margin-top:10px">
      Payment
    </h3>


    <label class="payment-option">

      <input
        type="radio"
        name="payment"
        value="UPI"
        checked
      >

      <span>
        💳 UPI / Online Payment
      </span>

    </label>


    <label class="payment-option">

      <input
        type="radio"
        name="payment"
        value="COD"
      >

      <span>
        💵 Cash on Delivery
      </span>

    </label>


    <div
      style="
        display:flex;
        justify-content:space-between;
        margin:20px 0;
        font-size:20px;
        font-weight:800;
      "
    >

      <span>Total</span>

      <span>
        ₹${total.toLocaleString()}
      </span>

    </div>


    <button
      class="primary-btn full"
      onclick="placeOrder()"
    >
      Place Order
    </button>

  `;

}


/* =========================================================
   PLACE ORDER
========================================================= */

function placeOrder() {

  const name =
    document
      .getElementById("checkoutName")
      .value
      .trim();

  const mobile =
    document
      .getElementById("checkoutMobile")
      .value
      .trim();

  const address =
    document
      .getElementById("checkoutAddress")
      .value
      .trim();

  const state =
    document
      .getElementById("checkoutState")
      .value
      .trim();

  const pin =
    document
      .getElementById("checkoutPin")
      .value
      .trim();


  if (
    !name ||
    !mobile ||
    !address ||
    !state ||
    !pin
  ) {

    alert(
      "Please complete the delivery details."
    );

    return;

  }


  const payment =
    document.querySelector(
      'input[name="payment"]:checked'
    ).value;


  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price *
        item.quantity,
      0
    );


  const order = {

    id:
      "HX" +
      Date.now()
        .toString()
        .slice(-8),

    customer:
      name,

    mobile,

    address,

    state,

    pin,

    payment,

    items:
      [...cart],

    total,

    status:
      "Order Placed",

    paymentStatus:
      payment === "COD"
        ? "Pending"
        : "Paid",

    shippingStatus:
      "Processing",

    expectedDelivery:
      getDeliveryDate(),

    date:
      new Date().toLocaleString()

  };


  orders.unshift(order);

  saveOrders();


  cart = [];

  saveCart();


  closeCheckout();

  showToast(
    `Order ${order.id} placed successfully ✓`
  );


  openOrders();

}


/* =========================================================
   DELIVERY DATE
========================================================= */

function getDeliveryDate() {

  const date =
    new Date();

  date.setDate(
    date.getDate() + 5
  );

  return date.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }
  );

}


/* =========================================================
   ORDERS
========================================================= */

function openOrders() {

  if (!currentUser) {

    openLogin();

    return;

  }


  const app =
    document.getElementById("app");


  if (!orders.length) {

    app.innerHTML = `

      <div class="empty">

        <h2>
          No orders yet
        </h2>

        <p>
          Your orders and delivery status
          will appear here.
        </p>

        <br>

        <button
          class="primary-btn"
          onclick="showHome()"
        >
          Start Shopping
        </button>

      </div>

    `;

    return;

  }


  app.innerHTML = `

    ${breadcrumb(
      "Home",
      "My Orders"
    )}

    <div class="section-heading">

      <div>

        <h1>
          My Orders
        </h1>

        <p>
          Track your orders and expected delivery.
        </p>

      </div>

    </div>


    ${orders
      .map(orderCard)
      .join("")}

  `;

}


function orderCard(order) {

  const statusMap = {

    "Order Placed": 1,

    "Confirmed": 2,

    "Shipped": 3,

    "Delivered": 4

  };


  const step =
    statusMap[order.status] || 1;


  return `

    <div class="order-card">

      <div class="order-top">

        <div>

          <strong>
            Order #${order.id}
          </strong>

          <p class="muted">
            ${order.date}
          </p>

        </div>

        <span class="order-status">
          ${order.status}
        </span>

      </div>


      <div style="margin-top:15px">

        <strong>
          ₹${order.total.toLocaleString()}
        </strong>

        <p class="muted">
          Payment:
          ${order.payment}
          •
          ${order.paymentStatus}
        </p>

        <p class="muted">
          Expected delivery:
          <strong>
            ${order.expectedDelivery}
          </strong>
        </p>

      </div>


      <div class="timeline">

        ${[
          "Order Placed",
          "Confirmed",
          "Shipped",
          "Delivered"
        ]
          .map(
            (name, i) => `

              <div
                class="
                  timeline-step
                  ${i + 1 <= step
                    ? "done"
                    : ""}
                "
              >

                ${name}

              </div>

            `
          )
          .join("")}

      </div>

    </div>

  `;

}


/* =========================================================
   BREADCRUMB
========================================================= */

function breadcrumb(
  first,
  second
) {

  return `

    <div class="breadcrumb">

      <button
        onclick="showHome()"
      >
        ${first}
      </button>

      <span>›</span>

      <strong>
        ${second}
      </strong>

    </div>

  `;

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  const toast =
    document.createElement("div");

  toast.textContent =
    message;

  toast.style.position =
    "fixed";

  toast.style.bottom =
    "25px";

  toast.style.left =
    "50%";

  toast.style.transform =
    "translateX(-50%)";

  toast.style.background =
    "#102119";

  toast.style.color =
    "white";

  toast.style.padding =
    "12px 20px";

  toast.style.borderRadius =
    "10px";

  toast.style.zIndex =
    "3000";

  toast.style.fontSize =
    "13px";

  toast.style.fontWeight =
    "700";

  document.body.appendChild(toast);


  setTimeout(() => {

    toast.remove();

  }, 2200);

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    showHome();

    updateCartCount();

  }
);
