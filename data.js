/* =========================================================
   HEXA MOBILE SPARE
   GREEN + WHITE DESIGN
========================================================= */

:root {
  --green: #168447;
  --green-dark: #096437;
  --green-light: #eaf8f0;
  --green-soft: #f4fbf7;

  --black: #101412;
  --text: #202522;
  --muted: #6c746f;

  --white: #ffffff;
  --border: #e2e9e4;

  --shadow:
    0 10px 35px rgba(0, 60, 30, 0.08);

  --radius: 18px;
}


/* RESET */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Arial,
    sans-serif;

  color: var(--text);
  background: #f8fbf9;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}


/* =========================================================
   TOP BAR
========================================================= */

.topbar {
  background: var(--green-dark);
  color: white;

  display: flex;
  justify-content: center;
  gap: 55px;

  padding: 9px 15px;

  font-size: 12px;
  font-weight: 600;
}


/* =========================================================
   HEADER
========================================================= */

.header {
  background: white;

  min-height: 82px;

  padding:
    14px
    max(20px, calc((100vw - 1250px) / 2));

  display: flex;
  align-items: center;
  gap: 35px;

  border-bottom: 1px solid var(--border);

  position: sticky;
  top: 0;

  z-index: 100;
}


.brand {
  display: flex;
  align-items: center;
  gap: 10px;

  min-width: 205px;
}


.logo-mark {
  width: 48px;
  height: 48px;
}

.logo-mark svg {
  width: 100%;
  height: 100%;
}


.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-text strong {
  color: var(--green);
  font-size: 25px;
  letter-spacing: 1px;
}

.brand-text span {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 2px;
}


/* SEARCH */

.search-box {
  flex: 1;

  max-width: 650px;

  height: 46px;

  display: flex;

  border:
    1px solid
    #d9e4dd;

  border-radius: 12px;

  overflow: hidden;

  background: #f7faf8;
}

.search-box input {
  flex: 1;

  border: 0;
  outline: none;

  background: transparent;

  padding: 0 16px;

  font-size: 14px;
}

.search-box button {
  width: 52px;

  border: 0;

  background: var(--green);

  color: white;
}


/* HEADER BUTTONS */

.header-actions {
  display: flex;
  gap: 10px;
  margin-left: auto;
}

.header-btn,
.cart-btn {
  border: 0;
  background: white;

  min-width: 65px;

  position: relative;

  color: #263029;

  font-weight: 600;
}

.cart-btn b {
  position: absolute;

  top: -5px;
  right: 0;

  background: var(--green);

  color: white;

  border-radius: 50%;

  width: 19px;
  height: 19px;

  font-size: 11px;

  display: flex;
  align-items: center;
  justify-content: center;
}


/* =========================================================
   NAVBAR
========================================================= */

.navbar {
  background: white;
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  max-width: 1250px;
  margin: auto;

  display: flex;
  align-items: center;

  overflow-x: auto;
}

.nav-inner button {
  background: transparent;

  border: 0;

  padding: 17px 23px;

  font-size: 13px;
  font-weight: 700;

  color: #39433e;

  white-space: nowrap;
}

.nav-inner button:hover {
  color: var(--green);
}


/* =========================================================
   APP CONTAINER
========================================================= */

#app {
  max-width: 1250px;
  margin: auto;

  padding:
    25px 20px 60px;
}


/* =========================================================
   HERO
========================================================= */

.hero {
  min-height: 410px;

  border-radius: 28px;

  overflow: hidden;

  position: relative;

  background:
    linear-gradient(
      90deg,
      rgba(4, 55, 30, .97) 0%,
      rgba(8, 92, 49, .87) 47%,
      rgba(8, 92, 49, .20) 100%
    ),
    url("https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1800&q=85")
    center / cover;

  display: flex;
  align-items: center;

  color: white;

  padding: 50px;
}


.hero-content {
  max-width: 580px;
}

.hero-label {
  display: inline-block;

  padding: 8px 13px;

  background: rgba(255,255,255,.13);

  border: 1px solid rgba(255,255,255,.3);

  border-radius: 30px;

  font-size: 12px;
  font-weight: 700;

  margin-bottom: 18px;
}

.hero h1 {
  font-size: clamp(38px, 5vw, 64px);

  line-height: .98;

  margin-bottom: 20px;
}

.hero h1 span {
  color: #b9f0ce;
}

.hero p {
  color: #e1f5e8;

  font-size: 16px;

  line-height: 1.6;

  margin-bottom: 28px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}


/* =========================================================
   BUTTONS
========================================================= */

.primary-btn {
  background: var(--green);

  color: white;

  border: 0;

  border-radius: 10px;

  padding: 13px 20px;

  font-weight: 700;
}

.primary-btn:hover {
  background: var(--green-dark);
}

.white-btn {
  background: white;

  color: var(--green-dark);

  border: 0;

  border-radius: 10px;

  padding: 13px 20px;

  font-weight: 700;
}

.outline-btn {
  background: white;

  color: var(--green);

  border: 1px solid var(--green);

  border-radius: 10px;

  padding: 11px 18px;

  font-weight: 700;
}


/* =========================================================
   SECTION
========================================================= */

.section {
  margin-top: 45px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;

  margin-bottom: 20px;
}

.section-heading h2 {
  font-size: 27px;
}

.section-heading p {
  color: var(--muted);

  font-size: 13px;

  margin-top: 5px;
}


/* =========================================================
   CATEGORY CARDS
========================================================= */

.category-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 14px;
}

.category-card {
  background: white;

  border: 1px solid var(--border);

  border-radius: 17px;

  padding: 22px 15px;

  min-height: 155px;

  transition: .2s;

  text-align: center;

  box-shadow: 0 5px 20px rgba(0,0,0,.03);
}

.category-card:hover {
  transform: translateY(-4px);

  border-color: #a6d8ba;

  box-shadow: var(--shadow);
}

.category-icon {
  height: 70px;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 48px;

  margin-bottom: 12px;
}

.category-card h3 {
  font-size: 15px;
}

.category-card p {
  color: var(--muted);

  font-size: 11px;

  margin-top: 4px;
}


/* =========================================================
   IPHONE MODEL GRID
========================================================= */

.model-grid {
  display: grid;

  grid-template-columns:
    repeat(6, 1fr);

  gap: 13px;
}

.model-card {
  background: white;

  border: 1px solid var(--border);

  border-radius: 16px;

  padding: 15px;

  text-align: center;

  transition: .2s;
}

.model-card:hover {
  transform: translateY(-4px);

  border-color: var(--green);
}

.phone-art {
  height: 145px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
}

.phone {
  height: 125px;
  width: 65px;

  border-radius: 13px;

  background:
    linear-gradient(
      135deg,
      #252a28,
      #89918c
    );

  border: 4px solid #151817;

  box-shadow:
    0 10px 20px rgba(0,0,0,.18);

  position: relative;
}

.phone::after {
  content: "";

  position: absolute;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #050505;

  top: 7px;
  left: 50%;

  transform: translateX(-50%);
}

.phone-screen {
  position: absolute;

  inset: 7px;

  border-radius: 8px;

  background:
    radial-gradient(
      circle at 30% 30%,
      #7ff0af,
      #103a28 70%
    );
}

.model-card h3 {
  font-size: 14px;
}

.model-card p {
  color: var(--muted);

  font-size: 11px;

  margin-top: 5px;
}


/* =========================================================
   FEATURE STRIP
========================================================= */

.feature-strip {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 12px;

  margin-top: 25px;
}

.feature {
  background: white;

  border: 1px solid var(--border);

  border-radius: 14px;

  padding: 18px;

  display: flex;

  gap: 12px;

  align-items: center;
}

.feature-icon {
  width: 40px;
  height: 40px;

  border-radius: 10px;

  background: var(--green-light);

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 20px;
}

.feature strong {
  display: block;

  font-size: 13px;
}

.feature span {
  color: var(--muted);

  font-size: 11px;
}


/* =========================================================
   PRODUCT GRID
========================================================= */

.product-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 16px;
}

.product-card {
  background: white;

  border: 1px solid var(--border);

  border-radius: 17px;

  overflow: hidden;

  transition: .2s;
}

.product-card:hover {
  transform: translateY(-4px);

  box-shadow: var(--shadow);
}

.product-image {
  height: 190px;

  background:
    linear-gradient(
      145deg,
      #f3faf6,
      #e2f1e8
    );

  display: flex;

  justify-content: center;
  align-items: center;

  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  padding: 18px;
}

.product-info {
  padding: 15px;
}

.product-tag {
  display: inline-block;

  background: var(--green-light);

  color: var(--green-dark);

  font-size: 10px;

  font-weight: 800;

  padding: 5px 8px;

  border-radius: 6px;

  margin-bottom: 8px;
}

.product-info h3 {
  font-size: 14px;

  line-height: 1.35;

  min-height: 38px;
}

.product-model {
  color: var(--muted);

  font-size: 11px;

  margin-top: 4px;
}

.price-row {
  display: flex;

  align-items: center;

  gap: 8px;

  margin-top: 12px;
}

.price {
  color: var(--green-dark);

  font-size: 18px;

  font-weight: 800;
}

.mrp {
  color: #909791;

  text-decoration: line-through;

  font-size: 11px;
}

.discount {
  color: #d04b3e;

  font-size: 10px;

  font-weight: 700;
}

.stock {
  font-size: 11px;

  margin-top: 7px;

  color: #4d5952;
}

.product-actions {
  display: flex;

  gap: 7px;

  margin-top: 12px;
}

.product-actions button {
  flex: 1;

  padding: 9px;

  border-radius: 8px;

  font-size: 11px;

  font-weight: 700;
}

.view-btn {
  background: white;

  border: 1px solid var(--green);

  color: var(--green);
}

.add-btn {
  background: var(--green);

  border: 1px solid var(--green);

  color: white;
}


/* =========================================================
   BANNER CARDS
========================================================= */

.banner-grid {
  display: grid;

  grid-template-columns:
    1.5fr 1fr;

  gap: 16px;
}

.promo-card {
  min-height: 220px;

  border-radius: 20px;

  padding: 28px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  overflow: hidden;

  position: relative;
}

.promo-green {
  background:
    linear-gradient(
      135deg,
      #0b5e35,
      #1e9b58
    );

  color: white;
}

.promo-white {
  background: white;

  border: 1px solid var(--border);
}

.promo-card h2 {
  font-size: 28px;

  max-width: 400px;

  margin-bottom: 8px;
}

.promo-card p {
  font-size: 13px;

  line-height: 1.5;

  max-width: 420px;

  margin-bottom: 18px;
}


/* =========================================================
   BREADCRUMB
========================================================= */

.breadcrumb {
  display: flex;

  align-items: center;

  gap: 8px;

  font-size: 12px;

  color: var(--muted);

  margin-bottom: 22px;
}

.breadcrumb button {
  border: 0;

  background: none;

  color: var(--green);

  font-weight: 700;
}


/* =========================================================
   MODEL PAGE
========================================================= */

.model-header {
  background: white;

  border: 1px solid var(--border);

  border-radius: 20px;

  padding: 25px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 22px;
}

.model-header h1 {
  font-size: 32px;
}

.model-header p {
  color: var(--muted);

  margin-top: 5px;
}

.parts-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 13px;
}

.part-card {
  background: white;

  border: 1px solid var(--border);

  border-radius: 15px;

  padding: 20px;

  text-align: left;

  transition: .2s;
}

.part-card:hover {
  border-color: var(--green);

  transform: translateY(-3px);
}

.part-icon {
  width: 45px;
  height: 45px;

  border-radius: 12px;

  background: var(--green-light);

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 22px;

  margin-bottom: 13px;
}

.part-card h3 {
  font-size: 14px;
}

.part-card p {
  font-size: 11px;

  color: var(--muted);

  margin-top: 5px;
}


/* =========================================================
   FILTER BAR
========================================================= */

.filter-bar {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 18px;
}

.filter-btn {
  border: 1px solid var(--border);

  background: white;

  color: #455149;

  border-radius: 30px;

  padding: 8px 13px;

  font-size: 11px;

  font-weight: 700;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--green);

  border-color: var(--green);

  color: white;
}


/* =========================================================
   COLOUR SWATCHES
========================================================= */

.color-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 13px;
}

.color-card {
  background: white;

  border: 1px solid var(--border);

  border-radius: 15px;

  padding: 15px;
}

.color-swatch {
  height: 80px;

  border-radius: 11px;

  margin-bottom: 12px;

  border: 1px solid #ddd;
}

.color-card h3 {
  font-size: 13px;
}

.color-card p {
  color: var(--muted);

  font-size: 11px;

  margin-top: 4px;
}


/* =========================================================
   MODALS
========================================================= */

.modal {
  position: fixed;

  inset: 0;

  background:
    rgba(5, 20, 12, .62);

  z-index: 1000;

  display: none;

  align-items: center;
  justify-content: center;

  padding: 20px;
}

.modal.show {
  display: flex;
}

.modal-box {
  width: min(480px, 100%);

  max-height: 90vh;

  overflow-y: auto;

  background: white;

  border-radius: 22px;

  padding: 28px;

  position: relative;

  box-shadow:
    0 30px 80px rgba(0,0,0,.25);
}

.close {
  position: absolute;

  right: 18px;
  top: 15px;

  width: 32px;
  height: 32px;

  border-radius: 50%;

  border: 0;

  background: #f1f5f2;

  font-size: 20px;
}

.login-logo {
  width: 55px;
  height: 55px;

  border-radius: 16px;

  background: var(--green);

  color: white;

  display: flex;

  align-items: center;
  justify-content: center;

  font-weight: 900;

  margin-bottom: 17px;
}

.modal-box h2 {
  margin-bottom: 8px;
}

.muted {
  color: var(--muted);

  font-size: 13px;

  line-height: 1.5;
}

.google-btn {
  width: 100%;

  margin-top: 20px;

  padding: 13px;

  border: 1px solid #d9dfdb;

  border-radius: 10px;

  background: white;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  font-weight: 700;
}

.google-btn span {
  font-weight: 900;

  color: #4285f4;
}

.or {
  text-align: center;

  margin: 20px 0;

  color: #9ba39e;

  font-size: 11px;
}

.modal-input {
  width: 100%;

  padding: 13px;

  border:
    1px solid
    #d9e2dc;

  border-radius: 10px;

  outline: none;

  margin-bottom: 10px;
}

.full {
  width: 100%;
}


/* =========================================================
   CART
========================================================= */

.cart-modal {
  width: min(650px, 100%);
}

.cart-item {
  display: flex;

  align-items: center;

  gap: 12px;

  padding: 13px 0;

  border-bottom: 1px solid var(--border);
}

.cart-item-image {
  width: 65px;
  height: 65px;

  border-radius: 10px;

  background: var(--green-light);

  overflow: hidden;
}

.cart-item-image img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}

.cart-item-info {
  flex: 1;
}

.cart-item-info h4 {
  font-size: 13px;
}

.cart-item-info p {
  font-size: 11px;

  color: var(--muted);

  margin-top: 4px;
}

.remove-btn {
  border: 0;

  background: #fff0ee;

  color: #d04435;

  border-radius: 7px;

  padding: 7px;

  font-size: 11px;
}

.cart-total {
  display: flex;

  justify-content: space-between;

  font-size: 20px;

  font-weight: 800;

  padding: 20px 0;
}


/* =========================================================
   CHECKOUT
========================================================= */

.checkout-box {
  width: min(700px, 100%);
}

.form-grid {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 12px;
}

.form-field {
  display: flex;

  flex-direction: column;

  gap: 6px;

  margin-bottom: 12px;
}

.form-field.full-width {
  grid-column: 1 / -1;
}

.form-field label {
  font-size: 11px;

  font-weight: 700;
}

.form-field input,
.form-field textarea,
.form-field select {
  width: 100%;

  border:
    1px solid
    #dce4df;

  border-radius: 9px;

  padding: 11px;

  outline: none;
}

.payment-option {
  border:
    1px solid
    #dbe4de;

  border-radius: 11px;

  padding: 13px;

  margin-top: 8px;

  display: flex;

  gap: 10px;

  align-items: center;
}


/* =========================================================
   ORDER
========================================================= */

.order-card {
  background: white;

  border: 1px solid var(--border);

  border-radius: 17px;

  padding: 20px;

  margin-bottom: 13px;
}

.order-top {
  display: flex;

  justify-content: space-between;

  gap: 15px;
}

.order-status {
  background: var(--green-light);

  color: var(--green-dark);

  padding: 7px 10px;

  border-radius: 20px;

  font-size: 10px;

  font-weight: 800;
}

.timeline {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  margin-top: 22px;
}

.timeline-step {
  position: relative;

  text-align: center;

  font-size: 10px;

  color: #929a95;
}

.timeline-step::before {
  content: "";

  width: 14px;
  height: 14px;

  display: block;

  border-radius: 50%;

  background: #d9e0dc;

  margin: 0 auto 8px;
}

.timeline-step.done {
  color: var(--green);

  font-weight: 700;
}

.timeline-step.done::before {
  background: var(--green);
}


/* =========================================================
   EMPTY
========================================================= */

.empty {
  background: white;

  border: 1px dashed #cdd8d1;

  border-radius: 18px;

  padding: 45px 20px;

  text-align: center;

  color: var(--muted);
}


/* =========================================================
   FOOTER
========================================================= */

.footer {
  background: #102119;

  color: #dfe9e3;

  margin-top: 50px;
}

.footer-grid {
  max-width: 1250px;

  margin: auto;

  padding: 50px 20px;

  display: grid;

  grid-template-columns:
    1.5fr 1fr 1fr 1fr;

  gap: 40px;
}

.footer-logo {
  font-size: 28px;

  color: #75d69c;

  font-weight: 900;

  margin-bottom: 10px;
}

.footer h3 {
  color: white;

  font-size: 14px;

  margin-bottom: 15px;
}

.footer p {
  font-size: 12px;

  color: #aebdb4;

  margin: 8px 0;

  line-height: 1.5;
}

.footer button {
  display: block;

  border: 0;

  background: none;

  color: #aebdb4;

  margin: 9px 0;

  font-size: 12px;
}

.footer button:hover {
  color: white;
}

.footer-bottom {
  border-top:
    1px solid
    rgba(255,255,255,.08);

  text-align: center;

  padding: 18px;

  font-size: 11px;

  color: #94a59c;
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media(max-width: 1000px) {

  .header {
    gap: 15px;
  }

  .category-grid {
    grid-template-columns:
      repeat(3, 1fr);
  }

  .model-grid {
    grid-template-columns:
      repeat(4, 1fr);
  }

  .product-grid {
    grid-template-columns:
      repeat(3, 1fr);
  }

  .parts-grid {
    grid-template-columns:
      repeat(3, 1fr);
  }

  .color-grid {
    grid-template-columns:
      repeat(3, 1fr);
  }

}


@media(max-width: 700px) {

  .topbar {
    gap: 12px;

    justify-content: space-around;

    font-size: 9px;
  }

  .header {
    flex-wrap: wrap;

    padding: 12px 15px;
  }

  .brand {
    min-width: auto;
  }

  .search-box {
    order: 3;

    flex-basis: 100%;
  }

  .header-btn span,
  .cart-btn span {
    display: none;
  }

  .hero {
    min-height: 440px;

    padding: 28px;

    border-radius: 20px;
  }

  .category-grid,
  .model-grid,
  .product-grid,
  .parts-grid,
  .color-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .feature-strip {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .banner-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns:
      1fr 1fr;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-field.full-width {
    grid-column: auto;
  }

}


@media(max-width: 450px) {

  #app {
    padding-left: 12px;
    padding-right: 12px;
  }

  .hero {
    padding: 23px;
  }

  .hero h1 {
    font-size: 39px;
  }

  .category-grid,
  .model-grid,
  .product-grid,
  .parts-grid,
  .color-grid {
    grid-template-columns:
      repeat(2, 1fr);

    gap: 9px;
  }

  .product-image {
    height: 145px;
  }

  .phone {
    transform: scale(.85);
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

}
