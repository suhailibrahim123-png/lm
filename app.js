const PRODUCTS = [
  { sku: "LM-C01", name: "LM Core H4 LED Bulb", tier: "Good", cat: "Headlight bulb", desc: "Plug-and-play 6000K white beam with clean cutoff. Ideal first upgrade for daily drivers seeking brighter, safer night visibility without complex fitting.", price: 2499 },
  { sku: "LM-C02", name: "LM Core H7 LED Bulb", tier: "Good", cat: "Headlight bulb", desc: "Compact external driver designed for hatchbacks and sedans. Stable output, low heat, and a natural white colour temperature for modern road presence.", price: 2499 },
  { sku: "LM-P03", name: "LM Pro H11 LED Bulb", tier: "Better", cat: "Headlight bulb", desc: "Copper-core cooling and focused optics for a sharper beam pattern. Recommended for drivers who demand clarity in rain, fog and unlit highways.", price: 3999 },
  { sku: "LM-P04", name: "LM Pro 9005/9006 LED Bulb", tier: "Better", cat: "Headlight bulb", desc: "Matched high and low beam pair with balanced colour and intensity. Built for vehicles that use dual-bulb headlamp systems.", price: 3999 },
  { sku: "LM-A05", name: "LM Apex Canbus LED Bulb", tier: "Best", cat: "Headlight bulb", desc: "Error-free Canbus decoding for German and Korean platforms. Silent operation, no dashboard warnings, and precision beam control.", price: 5999 },
  { sku: "LM-P06", name: "LM Bi-LED Projector 3 in", tier: "Better", cat: "Projector", desc: "Retrofit bi-LED projector with a sharp low-beam cutoff line. Transforms reflector housings into a controlled, modern lighting system.", price: 8999 },
  { sku: "LM-A07", name: "LM Bi-LED Projector 3.5 in Dual Beam", tier: "Best", cat: "Projector", desc: "High and low beam in a single lens assembly. Professionally aligned at fitting for maximum road illumination and oncoming-driver safety.", price: 12999 },
  { sku: "LM-A08", name: "LM Matrix Bi-LED Headlight Assembly", tier: "Best", cat: "Projector", desc: "Vehicle-specific full assembly with sequential signature lighting. The flagship option for owners who want factory-level presence and performance.", price: 18999 },
  { sku: "LM-C09", name: "LM Fog Lamp LED Set", tier: "Good", cat: "Fog lamp", desc: "White or selective yellow output in a waterproof housing. Cuts through monsoon spray and dusty conditions with a wide, low beam.", price: 2999 },
  { sku: "LM-P10", name: "LM Fog Lamp Projector", tier: "Better", cat: "Fog lamp", desc: "Flat cutoff projector optics engineered for rain and dust. Superior edge definition compared with standard fog LED bulbs.", price: 4999 },
  { sku: "LM-P11", name: "LM Sequential DRL Strip", tier: "Better", cat: "DRL", desc: "Flowing sequential turn signal with crisp daytime white. Adds a distinctive signature without compromising legal visibility.", price: 3499 },
  { sku: "LM-A12", name: "LM Switchback DRL", tier: "Best", cat: "DRL", desc: "White daytime running light that switches to amber on turn. Single harness, clean install, refined dual-function design.", price: 5499 },
  { sku: "LM-A13", name: "LM Dynamic Tail and Parking Cluster", tier: "Best", cat: "Tail light", desc: "Custom rear cluster with animated brake and indicator sequences. Designed for vehicles where rear presence and signalling clarity matter.", price: 14999 },
  { sku: "LM-C14", name: "LM Ambient Interior Kit", tier: "Good", cat: "Interior", desc: "64-colour fibre-optic ambient system with app and button control. Subtle cabin lighting that elevates the night-drive experience.", price: 3999 },
  { sku: "LM-C15", name: "LM Power Relay and Harness Kit", tier: "Good", cat: "Electrical", desc: "Stabilises voltage to LED loads and protects factory wiring. Essential companion for high-output bulb upgrades on older vehicles.", price: 1499 },
];

const WA = "919544488144";

const ICONS = {
  "Headlight bulb": `<svg viewBox="0 0 24 24" fill="none" stroke="#c9a962" stroke-width="1.5"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5V15h8v-1.5A6 6 0 0 0 12 3z"/></svg>`,
  "Projector": `<svg viewBox="0 0 24 24" fill="none" stroke="#c9a962" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`,
  "Fog lamp": `<svg viewBox="0 0 24 24" fill="none" stroke="#c9a962" stroke-width="1.5"><path d="M4 15h16M6 19h12"/><path d="M8 11a4 4 0 0 1 8 0"/><path d="M12 3v2"/></svg>`,
  "DRL": `<svg viewBox="0 0 24 24" fill="none" stroke="#c9a962" stroke-width="1.5"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 12h2M11 12h2M15 12h2"/></svg>`,
  "Tail light": `<svg viewBox="0 0 24 24" fill="none" stroke="#c9a962" stroke-width="1.5"><path d="M12 3c-4 0-7 2-8 5v8c1 3 4 5 8 5s7-2 8-5V8c-1-3-4-5-8-5z"/><path d="M9 12h6"/></svg>`,
  "Interior": `<svg viewBox="0 0 24 24" fill="none" stroke="#c9a962" stroke-width="1.5"><path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4"/></svg>`,
  "Electrical": `<svg viewBox="0 0 24 24" fill="none" stroke="#c9a962" stroke-width="1.5"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>`,
};

function fmt(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

/* Mobile menu */
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
}

/* Dropdown touch */
document.querySelectorAll(".nav-drop").forEach((dd) => {
  const btn = dd.querySelector("button");
  if (!btn) return;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dd.classList.toggle("open");
  });
});
document.addEventListener("click", () => {
  document.querySelectorAll(".nav-drop.open").forEach((d) => d.classList.remove("open"));
});

/* Catalogue */
function renderCatalogue(filter) {
  const root = document.getElementById("cat");
  if (!root) return;
  const list = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.tier === filter);
  root.innerHTML = list
    .map(
      (p) => `
    <article class="product" data-tier="${p.tier}">
      <div class="ico">${ICONS[p.cat] || ICONS["Headlight bulb"]}</div>
      <span class="tier">${p.tier}</span>
      <h3>${p.name}</h3>
      <span class="cat">${p.cat}</span>
      <p>${p.desc}</p>
      <div class="foot">
        <span class="price">${fmt(p.price)} <small>/ pair</small></span>
        <a class="btn btn-gold" href="purchase.html?p=${p.sku}">Order</a>
      </div>
    </article>`
    )
    .join("");
}

const filters = document.querySelector(".filters");
if (filters) {
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-tier]");
    if (!btn) return;
    filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");
    renderCatalogue(btn.dataset.tier);
  });
  renderCatalogue("All");
}

/* Purchase form */
function initPurchase() {
  const sel = document.getElementById("variant");
  const qty = document.getElementById("qty");
  const est = document.getElementById("est");
  const form = document.getElementById("pf");
  if (!sel || !form) return;

  const params = new URLSearchParams(location.search);
  const pre = params.get("p");

  sel.innerHTML = PRODUCTS.map(
    (p) =>
      `<option value="${p.sku}" data-price="${p.price}" ${p.sku === pre ? "selected" : ""}>${p.name} — ${fmt(p.price)}</option>`
  ).join("");

  function updateEst() {
    const opt = sel.selectedOptions[0];
    const price = Number(opt?.dataset.price || 0);
    const q = Math.max(1, Number(qty.value) || 1);
    est.textContent = fmt(price * q);
  }
  sel.addEventListener("change", updateEst);
  qty.addEventListener("input", updateEst);
  updateEst();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const opt = sel.selectedOptions[0];
    const msg = [
      "New order — Light Master Automotive",
      `Name: ${fd.get("name")}`,
      `Product: ${opt.text}`,
      `Qty: ${fd.get("qty")}`,
      `Estimate: ${est.textContent}`,
      `Vehicle: ${fd.get("vehicle")}`,
      `Address: ${fd.get("address")}`,
      `Phone: ${fd.get("phone")}`,
    ].join("\n");
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    const fb = document.getElementById("fb");
    fb.style.display = "block";
    fb.innerHTML = `Order prepared. <a href="${url}" target="_blank" rel="noopener">Open WhatsApp to send</a>`;
    window.open(url, "_blank");
  });
}
initPurchase();

/* Warranty form */
function initWarranty() {
  const form = document.getElementById("wf");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const msg = [
      "Warranty claim — Light Master Automotive",
      `Invoice: ${fd.get("invoice")}`,
      `Name: ${fd.get("name")}`,
      `Product: ${fd.get("product")}`,
      `Issue: ${fd.get("issue")}`,
    ].join("\n");
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
    const fb = document.getElementById("fb");
    fb.style.display = "block";
    fb.innerHTML = `Claim prepared. <a href="${url}" target="_blank" rel="noopener">Open WhatsApp to send</a>`;
    window.open(url, "_blank");
  });
}
initWarranty();
