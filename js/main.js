// ===== GEETA STATIONERY - MAIN JS =====

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroSlider();
  renderFeaturedProducts();
});

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function toggleSearch() {
  document.getElementById('searchBar').classList.toggle('open');
  if (document.getElementById('searchBar').classList.contains('open')) {
    setTimeout(() => document.getElementById('searchInput').focus(), 100);
  }
}

function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) {
    window.location.href = `pages/shop.html?search=${encodeURIComponent(q)}`;
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.getElementById('searchBar')?.classList.contains('open')) {
    doSearch();
  }
});

// ===== HERO SLIDER =====
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('heroDots');
  if (!slides.length || !dotsContainer) return;

  let current = 0;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `hero-dot ${i === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });

  function goToSlide(index) {
    slides[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  setInterval(() => {
    goToSlide((current + 1) % slides.length);
  }, 5000);
}

// ===== RENDER FEATURED PRODUCTS (HOME PAGE) =====
function renderFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container || typeof PRODUCTS === 'undefined') return;

  const featured = PRODUCTS.slice(0, 8);
  container.innerHTML = featured.map(renderProductCard).join('');
}
