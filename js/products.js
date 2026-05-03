// ===== GEETA STATIONERY - PRODUCTS DATA =====
const PRODUCTS = [
  {
    id: 1,
    name: "Classmate A4 Notebook 200 Pages",
    category: "notebooks",
    price: 85,
    oldPrice: 110,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"
    ],
    badge: "Best Seller",
    rating: 4.8,
    reviews: 42,
    description: "Premium quality 200-page A4 ruled notebook with thick pages, perfect for school and college use.",
    availability: "In Stock",
    sku: "NB-001"
  },
  {
    id: 2,
    name: "Reynolds 045 Ball Pen (Pack of 10)",
    category: "stationery",
    price: 60,
    oldPrice: 75,
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80"],
    badge: "Popular",
    rating: 4.7,
    reviews: 88,
    description: "Reynolds 045 ballpoint pens in blue ink. Smooth writing, long-lasting. Pack of 10.",
    availability: "In Stock",
    sku: "PN-002"
  },
  {
    id: 3,
    name: "Camlin Watercolor Set 18 Shades",
    category: "art",
    price: 120,
    oldPrice: 160,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80"],
    badge: "Sale",
    rating: 4.6,
    reviews: 55,
    description: "Vibrant 18-shade watercolor paint set by Camlin. Ideal for students and artists.",
    availability: "In Stock",
    sku: "ART-003"
  },
  {
    id: 4,
    name: "NCERT Science Class 10 Textbook",
    category: "books",
    price: 75,
    oldPrice: 90,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80"],
    badge: "New",
    rating: 4.9,
    reviews: 120,
    description: "Latest edition NCERT Science textbook for Class 10. As per CBSE curriculum 2024-25.",
    availability: "In Stock",
    sku: "BK-004"
  },
  {
    id: 5,
    name: "Staedtler Geometry Box",
    category: "geometry",
    price: 140,
    oldPrice: 180,
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&q=80"],
    badge: "Best Seller",
    rating: 4.8,
    reviews: 67,
    description: "Staedtler metal geometry set with compass, divider, set squares and protractor.",
    availability: "In Stock",
    sku: "GM-005"
  },
  {
    id: 6,
    name: "A4 Colour Printer Paper (500 Sheets)",
    category: "office",
    price: 250,
    oldPrice: 320,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80"],
    badge: "Value Pack",
    rating: 4.5,
    reviews: 34,
    description: "Premium 75 GSM A4 white copy paper. 500 sheets per ream. Ideal for home, office, and school.",
    availability: "In Stock",
    sku: "OF-006"
  },
  {
    id: 7,
    name: "Apsara Pencils HB (Pack of 10)",
    category: "stationery",
    price: 30,
    oldPrice: 40,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&q=80"],
    badge: null,
    rating: 4.6,
    reviews: 95,
    description: "Apsara HB pencils, smooth writing with break-resistant lead. Pack of 10.",
    availability: "In Stock",
    sku: "PN-007"
  },
  {
    id: 8,
    name: "Drawing & Sketch Book A4 (60 Pages)",
    category: "art",
    price: 65,
    oldPrice: 85,
    image: "https://images.unsplash.com/photo-1471666875520-c75081f42081?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1471666875520-c75081f42081?w=600&q=80"],
    badge: null,
    rating: 4.5,
    reviews: 29,
    description: "Thick A4 sketch/drawing pad with 60 sheets, 140 GSM cartridge paper for sketching and painting.",
    availability: "In Stock",
    sku: "ART-008"
  },
  {
    id: 9,
    name: "NCERT Maths Class 8 Textbook",
    category: "books",
    price: 70,
    oldPrice: 85,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80"],
    badge: null,
    rating: 4.7,
    reviews: 80,
    description: "NCERT Mathematics textbook for Class 8. Latest CBSE curriculum.",
    availability: "In Stock",
    sku: "BK-009"
  },
  {
    id: 10,
    name: "Fevicryl Hobby Ideas Acrylic Color Set",
    category: "art",
    price: 199,
    oldPrice: 260,
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80"],
    badge: "Sale",
    rating: 4.7,
    reviews: 47,
    description: "Fevicryl 8-shade acrylic color set for hobbyists and professionals. Water-based, vibrant colors.",
    availability: "In Stock",
    sku: "ART-010"
  },
  {
    id: 11,
    name: "Classmate 5-Subject Spiral Notebook",
    category: "notebooks",
    price: 150,
    oldPrice: 190,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80"],
    badge: "Popular",
    rating: 4.8,
    reviews: 56,
    description: "5-subject spiral notebook with dividers. 300 pages total, ruled. Great for college students.",
    availability: "In Stock",
    sku: "NB-011"
  },
  {
    id: 12,
    name: "Faber Castell Colour Pencil Set (24 Shades)",
    category: "art",
    price: 180,
    oldPrice: 230,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80",
    images: ["https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&q=80"],
    badge: "Best Seller",
    rating: 4.9,
    reviews: 102,
    description: "Faber Castell 24-shade colour pencil set with smooth pigmented leads. Great for kids and artists.",
    availability: "In Stock",
    sku: "ART-012"
  }
];

// Cart stored in localStorage
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
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, name: product.name, price: product.price, image: product.image, qty: 1 });
  }
  saveCart();
  showToast(`"${product.name}" added to cart!`);
}

function showToast(msg) {
  let toast = document.querySelector('.cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'cart-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = '🛍️ ' + msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
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
          <i class="fas fa-shopping-bag"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
}

function getCategoryLabel(cat) {
  const labels = { books: 'School Books', notebooks: 'Notebooks', stationery: 'Stationery', art: 'Art Supplies', office: 'Office Supplies', geometry: 'Geometry Sets' };
  return labels[cat] || cat;
}

function getProductUrl(id) {
  const depth = window.location.pathname.includes('/pages/') ? '' : 'pages/';
  return `${depth}product.html?id=${id}`;
}

// Initialize cart count on load
document.addEventListener('DOMContentLoaded', updateCartCount);
