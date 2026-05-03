# Geeta Stationery – Website

> **Jodhpur's most trusted stationery store.**  
> Write. Learn. Grow.

---

## 📁 Project Structure

```
geeta-stationery/
│
├── index.html              ← Homepage
├── pages/
│   ├── shop.html           ← Products / Shop page
│   ├── product.html        ← Product detail page
│   ├── about.html          ← About Us page
│   └── contact.html        ← Contact page
├── css/
│   └── style.css           ← All styles
├── js/
│   ├── products.js         ← Products data + cart logic
│   └── main.js             ← Navbar, slider, UI logic
├── images/
│   └── logo.png            ← Shop logo
└── README.md
```

---

## 🚀 How to Deploy on GitHub Pages

1. Create a new GitHub repository (e.g., `geeta-stationery`)
2. Upload ALL these files maintaining the same folder structure
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch → `/ (root)`
5. Click **Save**
6. Your website will be live at:  
   `https://yourusername.github.io/geeta-stationery/`

---

## ✏️ What to Update After Client Confirms

### 1. Phone Number
Search and replace `+91 99999 99999` and `919999999999` in all HTML files with the real number.

### 2. Shop Address
Update the address in `index.html`, `pages/about.html`, `pages/contact.html`, and `pages/shop.html`.

### 3. Google Maps
In `pages/contact.html`, update the Google Maps embed URL with the exact shop location.

### 4. Email
Replace `geetastationery@gmail.com` with the real email.

### 5. Products & Prices
In `js/products.js`, update the `PRODUCTS` array with:
- Real product names
- Real prices
- Real product images (upload to `images/products/` folder)

### 6. Social Media Links
Update Instagram, Facebook links in all footers.

---

## 🎨 Design Info

- **Primary Color:** Navy Blue `#1A2B4A`
- **Accent Color:** Gold `#E8A020`
- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Fully Mobile Responsive**
- **No frameworks needed** – Pure HTML, CSS, JavaScript

---

## 📞 Features Included

- ✅ Hero image slider (auto-play)
- ✅ Product categories
- ✅ Products grid with Add to Cart
- ✅ Product detail page with image gallery
- ✅ Filter & sort on shop page
- ✅ Class-wise book section
- ✅ Testimonials
- ✅ Offers/Discount banners
- ✅ Contact form
- ✅ Google Maps embed
- ✅ Bulk order enquiry
- ✅ WhatsApp floating button
- ✅ WhatsApp order button
- ✅ Cart system (localStorage)
- ✅ Mobile responsive design
- ✅ SEO meta tags
