// ===== GEETA STATIONERY — MAIN JS =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderFeaturedProducts();
});

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

function toggleMenu() {
  document.getElementById('navLinks')?.classList.toggle('open');
}

function toggleSearch() {
  const bar = document.getElementById('searchBar');
  bar?.classList.toggle('open');
  if (bar?.classList.contains('open')) {
    setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
  }
}

function doSearch() {
  const q = document.getElementById('searchInput')?.value.trim();
  if (q) {
    const base = window.location.pathname.includes('/pages/') ? '' : 'pages/';
    window.location.href = `${base}shop.html?search=${encodeURIComponent(q)}`;
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('searchBar')?.classList.contains('open')) doSearch();
  if (e.key === 'Escape') {
    document.getElementById('searchBar')?.classList.remove('open');
    document.getElementById('navLinks')?.classList.remove('open');
  }
});

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  if (!container || typeof PRODUCTS === 'undefined') return;
  container.innerHTML = PRODUCTS.slice(0, 8).map(renderProductCard).join('');
}
