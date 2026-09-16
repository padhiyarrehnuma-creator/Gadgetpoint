/* =========================================================
   GadgetPoint — Main Script (28 Products)
   ========================================================= */

(function () {
  'use strict';

  /* =====================================================
     PRODUCT DATA — 28 PRODUCTS (4 categories × 7 each)
     ===================================================== */
  const PRODUCTS = [
    // ---------- PHONES (7) ----------
    { id: 1, name: 'Nova X5 Pro', price: 74999, category: 'phones', rating: 4.7, desc: 'Flagship 5G phone with 120Hz AMOLED display and 108MP camera.', img: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500' },
    { id: 2, name: 'Nova Lite 5G', price: 22999, category: 'phones', rating: 4.3, desc: 'Mid-range 5G phone with triple camera and 5000mAh battery.', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500' },
    { id: 3, name: 'Nova Ultra 5G', price: 89999, category: 'phones', rating: 4.8, desc: 'Ultra flagship with 200MP camera and titanium build.', img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500' },
    { id: 4, name: 'Nova Fold Z', price: 129999, category: 'phones', rating: 4.6, desc: 'Foldable phone with 7.6" inner display and Snapdragon 8 Gen 3.', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500' },
    { id: 5, name: 'Nova Neo 5G', price: 16999, category: 'phones', rating: 4.2, desc: 'Budget 5G phone with 90Hz display and 50MP camera.', img: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=500' },
    { id: 6, name: 'Nova Play 6', price: 13999, category: 'phones', rating: 4.1, desc: 'Gaming phone with cooling system and shoulder triggers.', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500' },
    { id: 7, name: 'Nova Note 12', price: 34999, category: 'phones', rating: 4.5, desc: 'Stylus phone with 6.7" AMOLED and 108MP camera.', img: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=500' },

    // ---------- LAPTOPS (7) ----------
    { id: 8, name: 'AeroBook Air 14', price: 65999, category: 'laptops', rating: 4.5, desc: 'Ultra-light laptop with M-series chip and 18-hour battery.', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500' },
    { id: 9, name: 'AeroBook Gaming 16', price: 89999, category: 'laptops', rating: 4.6, desc: 'Gaming laptop with RTX GPU and 240Hz display.', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500' },
    { id: 10, name: 'AeroBook Pro 15', price: 119999, category: 'laptops', rating: 4.8, desc: 'Pro laptop with 4K OLED and creator-focused performance.', img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500' },
    { id: 11, name: 'AeroBook Studio 17', price: 149999, category: 'laptops', rating: 4.7, desc: '17" studio laptop with color-accurate 4K display.', img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500' },
    { id: 12, name: 'AeroBook Ultra 13', price: 99999, category: 'laptops', rating: 4.6, desc: 'Premium ultrabook with 13.6" Liquid Retina display.', img: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500' },
    { id: 13, name: 'AeroBook Chromebook', price: 29999, category: 'laptops', rating: 4.0, desc: 'Lightweight Chromebook for everyday tasks.', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500' },
    { id: 14, name: 'AeroBook Work 15', price: 54999, category: 'laptops', rating: 4.3, desc: 'Business laptop with backlit keyboard and long battery.', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500' },

    // ---------- AUDIO (7) ----------
    { id: 15, name: 'SonicPods Max', price: 18999, category: 'audio', rating: 4.8, desc: 'Active noise cancelling wireless headphones with spatial audio.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { id: 16, name: 'BassBoom Speaker', price: 7999, category: 'audio', rating: 4.2, desc: 'Portable waterproof Bluetooth speaker with 30W output.', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500' },
    { id: 17, name: 'SonicBuds Pro', price: 12999, category: 'audio', rating: 4.6, desc: 'True wireless earbuds with ANC and 32-hour battery.', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500' },
    { id: 18, name: 'SonicBuds Lite', price: 4999, category: 'audio', rating: 4.1, desc: 'Budget wireless earbuds with punchy bass.', img: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500' },
    { id: 19, name: 'SonicBar Soundbar', price: 24999, category: 'audio', rating: 4.5, desc: 'Dolby Atmos soundbar with wireless subwoofer.', img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500' },
    { id: 20, name: 'SonicMic Studio', price: 9999, category: 'audio', rating: 4.7, desc: 'USB-C condenser microphone for streaming and podcasts.', img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500' },
    { id: 21, name: 'SonicPods ANC Lite', price: 6999, category: 'audio', rating: 4.0, desc: 'Over-ear headphones with hybrid ANC and 40h battery.', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500' },

    // ---------- ACCESSORIES (7) ----------
    { id: 22, name: 'Pulse Watch S2', price: 12999, category: 'accessories', rating: 4.4, desc: 'Smartwatch with AMOLED display, SpO2 and 7-day battery.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
    { id: 23, name: 'GameStation Pro', price: 45999, category: 'accessories', rating: 4.9, desc: 'Next-gen gaming console with ray tracing and 4K 120fps.', img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500' },
    { id: 24, name: 'PowerBank 20000mAh', price: 2999, category: 'accessories', rating: 4.3, desc: 'Fast-charging power bank with dual USB and Type-C PD.', img: 'https://images.unsplash.com/photo-1609592806596-4d1b2feb0b8d?w=500' },
    { id: 25, name: 'Wireless Charger Pad', price: 1999, category: 'accessories', rating: 4.2, desc: '15W Qi wireless charger with anti-slip surface.', img: 'https://images.unsplash.com/photo-1591290619762-c1b9f9c0f7c2?w=500' },
    { id: 26, name: 'ProGrip Gaming Mouse', price: 4999, category: 'accessories', rating: 4.6, desc: 'RGB gaming mouse with 26000 DPI optical sensor.', img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500' },
    { id: 27, name: 'MechKeys RGB Keyboard', price: 7999, category: 'accessories', rating: 4.7, desc: 'Mechanical keyboard with hot-swap switches and RGB.', img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500' },
    { id: 28, name: 'VR Vision Headset', price: 34999, category: 'accessories', rating: 4.5, desc: 'Standalone VR headset with 4K display and hand tracking.', img: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500' }
  ];

  /* =====================================================
     STATE
     ===================================================== */
  const state = {
    user: JSON.parse(localStorage.getItem('gp_user') || 'null'),
    cart: JSON.parse(localStorage.getItem('gp_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('gp_wishlist') || '[]'),
    ratings: JSON.parse(localStorage.getItem('gp_ratings') || '{}'),
    filter: { category: 'all', price: 'all', sort: 'default', search: '' },
    currentProduct: null,
    modalQty: 1,
    authMode: 'signup',
    pendingAction: null
  };

  /* =====================================================
     HELPERS
     ===================================================== */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const save = () => {
    localStorage.setItem('gp_user', JSON.stringify(state.user));
    localStorage.setItem('gp_cart', JSON.stringify(state.cart));
    localStorage.setItem('gp_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('gp_ratings', JSON.stringify(state.ratings));
  };
  const formatPrice = (n) => '₹' + n.toLocaleString('en-IN');
  const isLoggedIn = () => !!state.user;

  /* =====================================================
     AUTH MODAL
     ===================================================== */
  function openAuth(mode = 'signup', pendingAction = null) {
    state.authMode = mode;
    state.pendingAction = pendingAction;
    $('#authTitle').textContent = mode === 'signup' ? 'Create Account' : 'Login';
    $('#authSubmit').textContent = mode === 'signup' ? 'Create Account' : 'Login';
    $('#authSwitch').textContent = mode === 'signup'
      ? 'Already have an account? Login'
      : 'New here? Create Account';
    openModal('authModal');
  }

  function handleAuthSubmit() {
    const name = $('#authName').value.trim();
    const email = $('#authEmail').value.trim();
    const password = $('#authPassword').value.trim();

    if (!email || !password || (state.authMode === 'signup' && !name)) {
      alert('Please fill all fields');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Enter a valid email');
      return;
    }

    state.user = {
      name: state.authMode === 'signup' ? name : (state.user?.name || 'User'),
      email,
      phone: state.user?.phone || '—'
    };
    save();
    updateProfileUI();
    closeModal('authModal');
    clearAuthFields();

    if (typeof state.pendingAction === 'function') {
      const fn = state.pendingAction;
      state.pendingAction = null;
      fn();
    }
  }

  function clearAuthFields() {
    $('#authName').value = '';
    $('#authEmail').value = '';
    $('#authPassword').value = '';
  }

  function updateProfileUI() {
    if (state.user) {
      $('#pName').textContent = state.user.name;
      $('#pEmail').textContent = state.user.email;
      $('#pPhone').textContent = state.user.phone;
      $('#profilePhoto').textContent = state.user.name.charAt(0).toUpperCase();
    } else {
      $('#pName').textContent = 'Guest User';
      $('#pEmail').textContent = 'guest@example.com';
      $('#pPhone').textContent = '—';
      $('#profilePhoto').textContent = '👤';
    }
  }

  function requireAuth(action) {
    if (isLoggedIn()) return true;
    openAuth('signup', action);
    return false;
  }

  /* =====================================================
     MODALS
     ===================================================== */
  function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
    closeMenu();
  }
  function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
  }
  function closeAllModals() {
    $$('.modal-overlay').forEach((m) => m.classList.remove('open'));
  }

  /* =====================================================
     PRODUCTS RENDER
     ===================================================== */
  function getFilteredProducts() {
    let list = [...PRODUCTS];
    const { category, price, sort, search } = state.filter;

    if (category !== 'all') list = list.filter((p) => p.category === category);

    if (price === 'low') list = list.filter((p) => p.price < 20000);
    else if (price === 'mid') list = list.filter((p) => p.price >= 20000 && p.price <= 60000);
    else if (price === 'high') list = list.filter((p) => p.price > 60000);

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)
      );
    }

    if (sort === 'lowhigh') list.sort((a, b) => a.price - b.price);
    else if (sort === 'highlow') list.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }

  function renderProducts() {
    const grid = $('#productsGrid');
    if (!grid) return;
    const list = getFilteredProducts();

    if (!list.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px 0;">No products found.</p>';
      return;
    }

    grid.innerHTML = list
      .map((p) => {
        const inWish = state.wishlist.includes(p.id);
        return `
        <div class="product-card" data-id="${p.id}">
          <div class="card-img-wrap" data-img="${p.id}">
            <img src="${p.img}" alt="${p.name}" loading="lazy" />
          </div>
          <div class="card-body">
            <p class="card-cat">${p.category}</p>
            <h3 data-details="${p.id}">${p.name}</h3>
            <p class="card-rating">⭐ ${p.rating}</p>
            <p class="card-price">${formatPrice(p.price)}</p>
          </div>
          <div class="card-actions">
            <button class="btn-add-cart" data-add="${p.id}">Add to Cart</button>
            <button class="btn-wish ${inWish ? 'active' : ''}" data-wish="${p.id}" aria-label="Wishlist">❤</button>
          </div>
        </div>`;
      })
      .join('');

    attachProductEvents();
    initTilt();
  }

  function attachProductEvents() {
    $$('.product-card').forEach((card) => {
      const id = Number(card.dataset.id);

      const imgWrap = card.querySelector('.card-img-wrap');
      let clickTimer = null;
      imgWrap.addEventListener('click', (e) => {
        e.stopPropagation();
        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
          openProductDetails(id);
          return;
        }
        clickTimer = setTimeout(() => {
          clickTimer = null;
          openZoom(id);
        }, 220);
      });

      const nameEl = card.querySelector('[data-details]');
      nameEl.addEventListener('click', (e) => {
        e.stopPropagation();
        openProductDetails(id);
      });

      card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        if (e.target.closest('.card-img-wrap')) return;
        openProductDetails(id);
      });
    });

    $$('[data-add]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = Number(btn.dataset.add);
        requireAuth(() => addToCart(id, 1));
      });
    });

    $$('[data-wish]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = Number(btn.dataset.wish);
        requireAuth(() => toggleWishlist(id));
      });
    });
  }

  /* =====================================================
     3D TILT (desktop only)
     ===================================================== */
  function initTilt() {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) return;

    $$('.product-card').forEach((card) => {
      if (card.dataset.tiltReady) return;
      card.dataset.tiltReady = '1';

      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const cx = r.width / 2;
        const cy = r.height / 2;
        const rx = ((y - cy) / cy) * -8;
        const ry = ((x - cx) / cx) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`;
        card.style.setProperty('--mx', (x / r.width) * 100 + '%');
        card.style.setProperty('--my', (y / r.height) * 100 + '%');
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* =====================================================
     PRODUCT DETAILS MODAL
     ===================================================== */
  function openProductDetails(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    state.currentProduct = p;
    state.modalQty = 1;

    $('#modalImg').src = p.img;
    $('#modalImg').alt = p.name;
    $('#modalName').textContent = p.name;
    $('#modalCategory').textContent = p.category;
    $('#modalRating').textContent = '⭐ ' + p.rating;
    $('#modalPrice').textContent = formatPrice(p.price);
    $('#modalDesc').textContent = p.desc;
    $('#qtyValue').textContent = '1';

    renderUserStars(p.id);
    openModal('productModal');
  }

  function renderUserStars(productId) {
    const saved = state.ratings[productId] || 0;
    $$('#userStars span').forEach((s) => {
      s.classList.toggle('active', Number(s.dataset.star) <= saved);
    });
  }

  /* =====================================================
     IMAGE ZOOM
     ===================================================== */
  function openZoom(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    $('#zoomImg').src = p.img;
    $('#zoomImg').alt = p.name;
    openModal('zoomModal');
  }

  /* =====================================================
     CART
     ===================================================== */
  function addToCart(productId, qty) {
    const existing = state.cart.find((c) => c.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({ id: productId, qty });
    }
    save();
    updateCartBadge();
    animateCartBtn();
  }

  function updateCartBadge() {
    const count = state.cart.reduce((sum, c) => sum + c.qty, 0);
    const badge = $('#cartBadge');
    if (badge) badge.textContent = count;
  }

  function animateCartBtn() {
    const btn = $('#cartBtn');
    if (!btn) return;
    btn.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.25)' }, { transform: 'scale(1)' }],
      { duration: 350, easing: 'ease-out' }
    );
  }

  function renderCart() {
    const wrap = $('#cartItems');
    if (!wrap) return;
    if (!state.cart.length) {
      wrap.innerHTML = '<p style="text-align:center;color:#888;padding:20px;">Your cart is empty.</p>';
    } else {
      wrap.innerHTML = state.cart
        .map((c) => {
          const p = PRODUCTS.find((x) => x.id === c.id);
          if (!p) return '';
          return `
          <div class="cart-item" data-id="${p.id}">
            <img src="${p.img}" alt="${p.name}" />
            <div class="cart-item-info">
              <h4>${p.name}</h4>
              <p>${formatPrice(p.price)} × ${c.qty} = <strong>${formatPrice(p.price * c.qty)}</strong></p>
            </div>
            <div class="qty-control">
              <button data-cart-minus="${p.id}">−</button>
              <span>${c.qty}</span>
              <button data-cart-plus="${p.id}">+</button>
            </div>
            <button class="cart-remove" data-cart-remove="${p.id}">✕</button>
          </div>`;
        })
        .join('');
    }

    const total = state.cart.reduce((sum, c) => {
      const p = PRODUCTS.find((x) => x.id === c.id);
      return sum + (p ? p.price * c.qty : 0);
    }, 0);
    $('#cartTotal').textContent = formatPrice(total);

    $$('[data-cart-plus]').forEach((b) =>
      b.addEventListener('click', () => {
        const id = Number(b.dataset.cartPlus);
        const item = state.cart.find((c) => c.id === id);
        if (item) { item.qty++; save(); renderCart(); updateCartBadge(); }
      })
    );
    $$('[data-cart-minus]').forEach((b) =>
      b.addEventListener('click', () => {
        const id = Number(b.dataset.cartMinus);
        const item = state.cart.find((c) => c.id === id);
        if (item && item.qty > 1) { item.qty--; save(); renderCart(); updateCartBadge(); }
      })
    );
    $$('[data-cart-remove]').forEach((b) =>
      b.addEventListener('click', () => {
        const id = Number(b.dataset.cartRemove);
        state.cart = state.cart.filter((c) => c.id !== id);
        save(); renderCart(); updateCartBadge();
      })
    );
  }

  /* =====================================================
     WISHLIST
     ===================================================== */
  function toggleWishlist(id) {
    const idx = state.wishlist.indexOf(id);
    if(idx > -1) state.wishlist.splice(idx, 1);
    else state.wishlist.push(id);
    save();
    updateWishBadge();
    renderProducts();
  }

  function updateWishBadge() {
    const badge = $('#wishBadge');
    if (badge) badge.textContent = state.wishlist.length;
  }

  function renderWishlist() {
    const wrap = $('#wishlistItems');
    if (!wrap) return;
    if (!state.wishlist.length) {
      wrap.innerHTML = '<p style="text-align:center;color:#888;padding:20px;">Your wishlist is empty.</p>';
      return;
    }
    wrap.innerHTML = state.wishlist
      .map((id) => {
        const p = PRODUCTS.find((x) => x.id === id);
        if (!p) return '';
        return `
        <div class="cart-item">
          <img src="${p.img}" alt="${p.name}" />
          <div class="cart-item-info">
            <h4>${p.name}</h4>
            <p>${formatPrice(p.price)}</p>
          </div>
          <button class="cart-remove" data-wish-remove="${p.id}">✕</button>
        </div>`;
      })
      .join('');

    $$('[data-wish-remove]').forEach((b) =>
      b.addEventListener('click', () => {
        const id = Number(b.dataset.wishRemove);
        state.wishlist = state.wishlist.filter((w) => w !== id);
        save(); updateWishBadge(); renderWishlist(); renderProducts();
      })
    );
  }

  /* =====================================================
     HAMBURGER MENU
     ===================================================== */
  function openMenu() {
    $('#navLinks').classList.add('open');
    $('#hamburger').classList.add('active');
  }
  function closeMenu() {
    $('#navLinks').classList.remove('open');
    $('#hamburger').classList.remove('active');
  }
  function toggleMenu() {
    if ($('#navLinks').classList.contains('open')) closeMenu();
    else openMenu();
  }

  /* =====================================================
     CHATBOT
     ===================================================== */
  function initChatbot() {
    const toggle = $('#chatbotToggle');
    const box = $('#chatbotBox');
    const close = $('#chatbotClose');
    const send = $('#chatbotSend');
    const input = $('#chatbotInput');
    const messages = $('#chatbotMessages');

    toggle.addEventListener('click', () => box.classList.toggle('open'));
    close.addEventListener('click', () => box.classList.remove('open'));

    function reply(text) {
      const t = text.toLowerCase();
      if (t.includes('price') || t.includes('cost')) return 'Our prices start from ₹1,999. Check the Products section for details!';
      if (t.includes('delivery') || t.includes('shipping')) return 'Free shipping on orders above ₹999. Delivery in 3–5 days.';
      if (t.includes('offer') || t.includes('discount')) return 'Check the Offers section — 10% off on first purchase!';
      if (t.includes('warranty')) return 'All products come with a 1-year manufacturer warranty.';
      if (t.includes('hi') || t.includes('hello')) return 'Hello! How can I help you today?';
      return 'Thanks for your message! Our team will assist you shortly.';
    }

    function sendMsg() {
      const text = input.value.trim();
      if (!text) return;
      const userEl = document.createElement('div');
      userEl.className = 'user-msg';
      userEl.textContent = text;
      messages.appendChild(userEl);
      input.value = '';
      messages.scrollTop = messages.scrollHeight;

      setTimeout(() => {
        const botEl = document.createElement('div');
        botEl.className = 'bot-msg';
        botEl.textContent = reply(text);
        messages.appendChild(botEl);
        messages.scrollTop = messages.scrollHeight;
      }, 500);
    }

    send.addEventListener('click', sendMsg);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMsg(); });
  }

  /* =====================================================
     NAVIGATION
     ===================================================== */
  function scrollToSection(name) {
    const el = document.getElementById(name);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  }

  /* =====================================================
     INIT
     ===================================================== */
  function init() {
    renderProducts();
    updateCartBadge();
    updateWishBadge();
    updateProfileUI();
    initChatbot();

    $('#hamburger').addEventListener('click', toggleMenu);

    document.addEventListener('click', (e) => {
      const menu = $('#navLinks');
      const ham = $('#hamburger');
      if (!menu || !ham) return;
      if (!menu.contains(e.target) && !ham.contains(e.target)) closeMenu();
    });

    $$('[data-nav]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(el.dataset.nav);
      });
    });

    $('#searchToggle').addEventListener('click', () => {
      $('#searchBar').classList.toggle('open');
      if ($('#searchBar').classList.contains('open')) $('#searchInput').focus();
    });
    $('#searchInput').addEventListener('input', (e) => {
      state.filter.search = e.target.value.trim();
      renderProducts();
    });

    $('#categoryFilter').addEventListener('change', (e) => {
      state.filter.category = e.target.value;
      renderProducts();
    });
    $('#priceFilter').addEventListener('change', (e) => {
      state.filter.price = e.target.value;
      renderProducts();
    });
    $('#sortFilter').addEventListener('change', (e) => {
      state.filter.sort = e.target.value;
      renderProducts();
    });

    $('#cartBtn').addEventListener('click', () => {
      if (!requireAuth(() => { renderCart(); openModal('cartModal'); })) return;
      renderCart();
      openModal('cartModal');
    });

    $('#wishlistBtn').addEventListener('click', () => {
      if (!requireAuth(() => { renderWishlist(); openModal('wishlistModal'); })) return;
      renderWishlist();
      openModal('wishlistModal');
    });

    $('#profileBtn').addEventListener('click', () => {
      updateProfileUI();
      scrollToSection('profile');
    });

    $$('.modal-close').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(btn.dataset.close));
    });

    $$('.modal-overlay').forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('open');
      });
    });

    $('#qtyPlus').addEventListener('click', () => {
      state.modalQty++;
      $('#qtyValue').textContent = state.modalQty;
    });
    $('#qtyMinus').addEventListener('click', () => {
      if (state.modalQty > 1) {
        state.modalQty--;
        $('#qtyValue').textContent = state.modalQty;
      }
    });

    $('#modalAddCart').addEventListener('click', () => {
      const p = state.currentProduct;
      if (!p) return;
      const qty = state.modalQty;
      if (!requireAuth(() => {
        addToCart(p.id, qty);
        closeModal('productModal');
      })) return;
      addToCart(p.id, qty);
      closeModal('productModal');
    });

    $('#modalWishlist').addEventListener('click', () => {
      const p = state.currentProduct;
      if (!p) return;
      if (!requireAuth(() => toggleWishlist(p.id))) return;
      toggleWishlist(p.id);
    });

    $$('#userStars span').forEach((s) => {
      s.addEventListener('click', (e) => {
        e.stopPropagation();
        const p = state.currentProduct;
        if (!p) return;
        const rating = Number(s.dataset.star);
        state.ratings[p.id] = rating;
        save();
        renderUserStars(p.id);
      });
    });

    $('#authSubmit').addEventListener('click', handleAuthSubmit);
    $('#authSwitch').addEventListener('click', () => {
      state.authMode = state.authMode === 'signup' ? 'login' : 'signup';
      $('#authTitle').textContent = state.authMode === 'signup' ? 'Create Account' : 'Login';
      $('#authSubmit').textContent = state.authMode === 'signup' ? 'Create Account' : 'Login';
      $('#authSwitch').textContent = state.authMode === 'signup'
        ? 'Already have an account? Login'
        : 'New here? Create Account';
    });

    $('#checkoutBtn').addEventListener('click', () => {
      if (!state.cart.length) { alert('Your cart is empty.'); return; }
      alert('Order placed successfully! (Demo)');
      state.cart = [];
      save();
      updateCartBadge();
      renderCart();
      closeModal('cartModal');
    });

    $('#logoutBtn').addEventListener('click', () => {
      state.user = null;
      save();
      updateProfileUI();
      alert('Logged out');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllModals();
        closeMenu();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
