// ===== GEETA STATIONERY — AI CHATBOT =====

let chatOpen = false;

function toggleAIChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('aiChatWindow');
  if (chatOpen) { win.classList.add('open'); } else { win.classList.remove('open'); }
}

const BOT_RESPONSES = {
  'school books': {
    msg: "📚 We have school books for Class 1–12, covering CBSE, RBSE, ICSE and all major Jodhpur schools including APS, KV, Global International, Vidheya Aashram and more!\n\nWhich class or school are you looking for?",
    quick: ['Class 1-5', 'Class 6-8', 'Class 9-10', 'Class 11-12']
  },
  'art supplies': {
    msg: "🎨 We have a great range of art supplies!\n\n• Watercolors (Camlin, Fevicryl)\n• Colour pencils (Faber Castell)\n• Sketch books & drawing pads\n• Brushes & canvas\n• Poster colors\n\nAll at the best prices in Jodhpur!",
    quick: ['View art products', 'Price range', 'WhatsApp order']
  },
  'print services': {
    msg: "🖨️ We offer full print & copy services at our store:\n\n• Photocopy / Xerox — ₹1/page\n• Color printing — ₹5/page\n• Passport photos — ₹20 for 4\n• Lamination — ₹10/sheet\n• Scanning — ₹5/page\n\nYou can send your file on WhatsApp before visiting!",
    quick: ['Send file on WhatsApp', 'View all services', 'Store location']
  },
  'gifts & toys': {
    msg: "🎁 We have a lovely gifts & toys section!\n\n• Toy cars & building blocks\n• Plush toys & puzzles\n• Readymade gift boxes\n• Gift wrapping paper & ribbons\n• Greeting cards for all occasions\n\nPerfect for birthdays & school events!",
    quick: ['View toys', 'Gift packaging', 'Price range']
  },
  'class 1-5': { msg: "📖 For Class 1–5, we have all NCERT, RBSE, and school-specific textbooks. We also stock the complete stationery kit — notebooks, pencils, crayons, geometry box and more!\n\nVisit us or WhatsApp to confirm availability.", quick: ['WhatsApp order', 'View products'] },
  'class 6-8': { msg: "📖 For Class 6–8, we stock NCERT & RBSE books, lab manuals, notebooks, and all required stationery. Maps, drawing instruments and more also available!", quick: ['WhatsApp order', 'View products'] },
  'class 9-10': { msg: "📖 For Class 9–10, we have NCERT books, RBSE books, guide books, sample papers, and complete stationery. Board exam prep materials also in stock!", quick: ['WhatsApp order', 'View products'] },
  'class 11-12': { msg: "📖 For Class 11–12, we have NCERT books for all streams — Science, Commerce & Arts — plus reference books, sample papers and board exam stationery!", quick: ['WhatsApp order', 'View products'] },
  'whatsapp order': { msg: "💬 Great! You can WhatsApp us directly:\n\n📱 +91 75685 21210\n\nJust send:\n1. Your product name / school name\n2. Class (if for books)\n3. Quantity needed\n\nWe'll confirm availability and you can collect from store!", quick: ['Open WhatsApp', 'Store location'] },
  'open whatsapp': { msg: "Opening WhatsApp for you! 📱", quick: [], action: 'whatsapp' },
  'store location': { msg: "📍 Find us at:\n\nGeeta Stationery\nJodhpur, Rajasthan, India\n\n⏰ Mon–Sat: 9AM – 8PM\n⏰ Sunday: 10AM – 4PM\n\n📱 +91 75685 21210\n\nNo home delivery — store pickup only.", quick: ['WhatsApp order', 'Print services'] },
  'price range': { msg: "💰 Our prices are the most affordable in Jodhpur!\n\n• Pens from ₹5\n• Notebooks from ₹25\n• School books from ₹60\n• Art sets from ₹99\n• Print from ₹1/page\n\nVisit us or WhatsApp for specific pricing!", quick: ['View products', 'WhatsApp order'] },
  'send file on whatsapp': { msg: "📤 To send your file for printing:\n\n1. Save our number: +91 75685 21210\n2. Send your file + instructions\n   (e.g. 2 color prints A4)\n3. We'll confirm the cost\n4. Visit & collect your prints!\n\nTap below to open WhatsApp 👇", quick: ['Open WhatsApp'], action: 'whatsapp' },
  'view all services': { msg: "You can see all our print & copy services on our dedicated page. Click below to view!", quick: ['Go to Print Services page'], action: 'print' },
  'view products': { msg: "Check out our full product catalog in the Shop section!", quick: ['Go to Shop'], action: 'shop' },
  'view art products': { msg: "You can browse all art supplies in our Shop!", quick: ['Go to Shop'], action: 'shop' },
  'view toys': { msg: "Browse all toys & games in our Shop!", quick: ['Go to Shop'], action: 'shop' },
  'gift packaging': { msg: "🎁 We have:\n• Readymade gift boxes (S/M/L)\n• Wrapping paper rolls\n• Ribbons & bows\n• Tissue paper\n• Greeting cards (Pack of 10)\n\nAll available at the store!", quick: ['View products', 'WhatsApp order'] },
  'go to print services page': { msg: "Taking you there!", quick: [], action: 'print' },
  'go to shop': { msg: "Taking you to our shop!", quick: [], action: 'shop' },
};

const DEFAULT_RESPONSE = {
  msg: "I'm not sure about that specific query, but I'd love to help! 😊\n\nYou can ask me about:\n• School books & which class\n• Art supplies & prices\n• Print & copy services\n• Toys, gifts & shoes\n• Store timings & location\n\nOr WhatsApp us directly at +91 75685 21210!",
  quick: ['School books', 'Print services', 'WhatsApp order', 'Store location']
};

function sendAIMsg() {
  const input = document.getElementById('aiInput');
  if (!input) return;
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';
  addMsg(msg, 'user');
  document.getElementById('quickReplies').innerHTML = '';
  setTimeout(() => respondToMsg(msg), 600);
}

function quickReply(text) {
  addMsg(text, 'user');
  document.getElementById('quickReplies').innerHTML = '';
  setTimeout(() => respondToMsg(text), 500);
}

function addMsg(text, type) {
  const msgs = document.getElementById('aiMsgs');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = `ai-msg ${type}`;
  div.innerHTML = text.replace(/\n/g, '<br/>');
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('aiMsgs');
  const typing = document.createElement('div');
  typing.className = 'ai-msg bot';
  typing.id = 'aiTyping';
  typing.innerHTML = '<div class="ai-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(typing);
  msgs.scrollTop = msgs.scrollHeight;
}

function respondToMsg(userMsg) {
  showTyping();
  const key = userMsg.toLowerCase().trim();
  let response = DEFAULT_RESPONSE;
  for (const [k, v] of Object.entries(BOT_RESPONSES)) {
    if (key.includes(k)) { response = v; break; }
  }
  setTimeout(() => {
    document.getElementById('aiTyping')?.remove();
    addMsg(response.msg, 'bot');
    if (response.action === 'whatsapp') {
      setTimeout(() => window.open('https://wa.me/917568521210', '_blank'), 800);
    } else if (response.action === 'print') {
      setTimeout(() => {
        const base = window.location.pathname.includes('/pages/') ? '' : 'pages/';
        window.location.href = `${base}print-services.html`;
      }, 800);
    } else if (response.action === 'shop') {
      setTimeout(() => {
        const base = window.location.pathname.includes('/pages/') ? '' : 'pages/';
        window.location.href = `${base}shop.html`;
      }, 800);
    }
    if (response.quick && response.quick.length) {
      const qr = document.getElementById('quickReplies');
      if (qr) qr.innerHTML = response.quick.map(q => `<button class="ai-quick-btn" onclick="quickReply('${q}')">${q}</button>`).join('');
    }
    document.getElementById('aiMsgs').scrollTop = document.getElementById('aiMsgs').scrollHeight;
  }, 1000);
}
