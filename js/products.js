// ===== GEETA STATIONERY - PRODUCTS DATA =====
const PRODUCTS = [
  // NOTEBOOKS
  { id: 1, name: "Classmate A4 Notebook 200 Pages", category: "notebooks", price: 85, oldPrice: 110, image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80", images: ["https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80"], badge: "Best Seller", rating: 4.8, reviews: 42, description: "Premium quality 200-page A4 ruled notebook with thick pages, perfect for school and college use.", availability: "In Stock", sku: "NB-001" },
  { id: 11, name: "Classmate 5-Subject Spiral Notebook", category: "notebooks", price: 150, oldPrice: 190, image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80", images: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80"], badge: "Popular", rating: 4.8, reviews: 56, description: "5-subject spiral notebook with dividers. 300 pages total, ruled. Great for senior students.", availability: "In Stock", sku: "NB-011" },

  // STATIONERY
  { id: 2, name: "Reynolds 045 Ball Pen (Pack of 10)", category: "stationery", price: 60, oldPrice: 75, image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80", images: ["https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80"], badge: "Popular", rating: 4.7, reviews: 88, description: "Reynolds 045 ballpoint pens, smooth writing, long-lasting. Pack of 10.", availability: "In Stock", sku: "PN-002" },
  { id: 7, name: "Apsara Pencils HB (Pack of 10)", category: "stationery", price: 30, oldPrice: 40, image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&q=80", images: ["https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80"], badge: null, rating: 4.6, reviews: 95, description: "Apsara HB pencils, smooth writing with break-resistant lead. Pack of 10.", availability: "In Stock", sku: "PN-007" },

  // ART
  { id: 3, name: "Camlin Watercolor Set 18 Shades", category: "art", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80", images: ["https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80"], badge: "Sale", rating: 4.6, reviews: 55, description: "Vibrant 18-shade watercolor paint set by Camlin. Ideal for students and artists.", availability: "In Stock", sku: "ART-003" },
  { id: 12, name: "Faber Castell Colour Pencil Set 24", category: "art", price: 180, oldPrice: 230, image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80", images: ["https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&q=80"], badge: "Best Seller", rating: 4.9, reviews: 102, description: "Faber Castell 24-shade colour pencil set with smooth pigmented leads.", availability: "In Stock", sku: "ART-012" },

  // BOOKS
  { id: 4, name: "NCERT Science Class 10", category: "books", price: 75, oldPrice: 90, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80", images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"], badge: "New", rating: 4.9, reviews: 120, description: "Latest edition NCERT Science textbook for Class 10. As per CBSE curriculum 2025-26.", availability: "In Stock", sku: "BK-004" },
  { id: 9, name: "NCERT Maths Class 8", category: "books", price: 70, oldPrice: 85, image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80", images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80"], badge: null, rating: 4.7, reviews: 80, description: "NCERT Mathematics textbook for Class 8. Latest CBSE curriculum 2025-26.", availability: "In Stock", sku: "BK-009" },

  // GEOMETRY
  { id: 5, name: "Staedtler Geometry Box", category: "geometry", price: 140, oldPrice: 180, image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&q=80", images: ["https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&q=80"], badge: "Best Seller", rating: 4.8, reviews: 67, description: "Staedtler metal geometry set with compass, divider, set squares and protractor.", availability: "In Stock", sku: "GM-005" },

  // OFFICE
  { id: 6, name: "A4 Copy Paper 500 Sheets", category: "office", price: 250, oldPrice: 320, image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80", images: ["https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80"], badge: "Value Pack", rating: 4.5, reviews: 34, description: "Premium 75 GSM A4 white copy paper. 500 sheets per ream. Ideal for home, office, and school.", availability: "In Stock", sku: "OF-006" },

  // TOYS
  { id: 13, name: "Mini Toy Car Set (Pack of 4)", category: "toys", price: 199, oldPrice: 280, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"], badge: "Popular", rating: 4.5, reviews: 38, description: "Colourful die-cast mini toy cars, set of 4. Great gift for kids of all ages.", availability: "In Stock", sku: "TOY-013" },
  { id: 14, name: "Creative Building Blocks Set", category: "toys", price: 349, oldPrice: 450, image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80", images: ["https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80"], badge: "Best Seller", rating: 4.8, reviews: 65, description: "100-piece colourful building blocks set. Boosts creativity and fine motor skills in children.", availability: "In Stock", sku: "TOY-014" },
  { id: 15, name: "Educational Puzzle Game", category: "toys", price: 249, oldPrice: 320, image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"], badge: "New", rating: 4.6, reviews: 29, description: "Fun and educational puzzle board game for kids. Develops problem solving and logical thinking.", availability: "In Stock", sku: "TOY-015" },
  { id: 16, name: "Soft Plush Teddy Bear", category: "toys", price: 299, oldPrice: 399, image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=400&q=80", images: ["https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&q=80"], badge: null, rating: 4.7, reviews: 44, description: "Super soft and huggable plush teddy bear. Perfect gift for birthdays and occasions.", availability: "In Stock", sku: "TOY-016" },

  // GIFTS & GIFT PACKAGING
  { id: 17, name: "Premium Gift Wrap & Ribbon Set", category: "gifts", price: 89, oldPrice: 120, image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80", images: ["https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80"], badge: "Popular", rating: 4.7, reviews: 51, description: "Beautiful gift wrapping paper with ribbons and bows. Available in various colours and designs.", availability: "In Stock", sku: "GFT-017" },
  { id: 18, name: "Readymade Gift Box (Various Sizes)", category: "gifts", price: 49, oldPrice: 75, image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400&q=80", images: ["https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600&q=80"], badge: "New", rating: 4.6, reviews: 33, description: "Ready-to-use decorative gift boxes in small, medium and large sizes. Comes with tissue paper.", availability: "In Stock", sku: "GFT-018" },
  { id: 19, name: "Greeting Cards (Pack of 10)", category: "gifts", price: 120, oldPrice: 160, image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400&q=80", images: ["https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80"], badge: null, rating: 4.5, reviews: 27, description: "Assorted greeting cards for birthdays, festivals, and special occasions. Pack of 10.", availability: "In Stock", sku: "GFT-019" },

  // SCHOOL SHOES
  { id: 20, name: "Black School Shoes – Boys", category: "shoes", price: 599, oldPrice: 799, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"], badge: "New Season", rating: 4.6, reviews: 48, description: "Durable black school shoes for boys. Comfortable fit, sturdy sole, perfect for daily school use.", availability: "In Stock", sku: "SH-020" },
  { id: 21, name: "Black School Shoes – Girls", category: "shoes", price: 549, oldPrice: 749, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80", images: ["https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80"], badge: "New Season", rating: 4.7, reviews: 52, description: "Neat and comfortable black school shoes for girls. Slip-resistant sole, long-lasting quality.", availability: "In Stock", sku: "SH-021" },
  { id: 22, name: "School Canvas Shoes (White)", category: "shoes", price: 399, oldPrice: 549, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80", images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80"], badge: "Popular", rating: 4.5, reviews: 36, description: "Classic white canvas school shoes. Lightweight and breathable, ideal for PT and uniform days.", availability: "In Stock", sku: "SH-022" }
];

// STORE PICKUP ONLY — No delivery
const STORE_POLICY = {
  delivery: false,
  pickupOnly: true,
  pickupNote: "No home delivery available. Please visit the store to collect your order.",
  storeHours: "Mon–Sat: 9:00 AM – 8:00 PM | Sunday: 10:00 AM – 4:00 PM",
  phone: "+91 75685 21210",
  whatsapp: "917568521210"
};

// Cart
let cart = JSON.parse(localStorage.getItem('geetaCart') || '[]');

function saveCart() {
  localStorage.setItem('geetaCart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = total);
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) { existing.qty += 1; } else { cart.push({ id: productId, name: product.name, price: product.price, image: product.image, qty: 1 }); }
  saveCart();
  showToast(`"${product.name}" added — collect from store!`);
}

function showToast(msg) {
  let toast = document.querySelector('.cart-toast');
  if (!toast) { toast = document.createElement('div'); toast.className = 'cart-toast'; document.body.appendChild(toast); }
  toast.textContent = '🛍️ ' + msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function renderProductCard(product) {
  return `
    <div class="product-card" onclick="window.location='${getProductUrl(product.id)}'">
      <div class="product-img">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <img src="${product.image}" alt="${product.name}" loading="lazy"/>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="cat-label">${getCategoryLabel(product.category)}</p>
        <div class="product-price">
          <span class="price-now">₹${product.price}</span>
          ${product.oldPrice ? `<span class="price-old">₹${product.oldPrice}</span>` : ''}
        </div>
        <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
          <i class="fas fa-shopping-bag"></i> Reserve at Store
        </button>
      </div>
    </div>
  `;
}

function getCategoryLabel(cat) {
  const labels = { books: 'School Books', notebooks: 'Notebooks', stationery: 'Stationery', art: 'Art Supplies', office: 'Office Supplies', geometry: 'Geometry Sets', toys: 'Toys & Games', gifts: 'Gifts & Packaging', shoes: 'School Shoes' };
  return labels[cat] || cat;
}

function getProductUrl(id) {
  const depth = window.location.pathname.includes('/pages/') ? '' : 'pages/';
  return `${depth}product.html?id=${id}`;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
