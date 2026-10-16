/**
 * WEDDING WEBSITE — APP
 * =====================
 * Reads from CONTENT (content.js) and builds the DOM.
 * Supports Russian (ru), English (en), Hebrew (he / RTL).
 * Do NOT store content here — edit content.js instead.
 */

/* ── Active language state & URL filter resolution ───────────── */
function parseLangParam(val) {
  if (!val) return null;
  const cleaned = String(val).toLowerCase().trim();
  if (['ru', 'rus', 'russian'].includes(cleaned)) return 'ru';
  if (['he', 'hb', 'heb', 'hebrew', 'ivrit'].includes(cleaned)) return 'he';
  if (['en', 'eng', 'english'].includes(cleaned)) return 'en';
  return null;
}

function getInitialLang() {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const fromSearch = parseLangParam(searchParams.get('lang') || searchParams.get('l'));
    if (fromSearch) return fromSearch;

    if (window.location.hash && window.location.hash.includes('?')) {
      const hashQuery = window.location.hash.split('?')[1];
      const hashParams = new URLSearchParams(hashQuery);
      const fromHash = parseLangParam(hashParams.get('lang') || hashParams.get('l'));
      if (fromHash) return fromHash;
    }
  } catch (_) {}
  return CONTENT.defaultLang || 'en';
}

let currentLang = getInitialLang();

function setLanguage(lang, updateUrl = false) {
  const resolved = parseLangParam(lang) || 'en';
  currentLang = resolved;

  // Update pressed state on language buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.setAttribute('aria-pressed', b.dataset.lang === resolved ? 'true' : 'false');
  });

  // RTL handling for Hebrew
  const isRtl = resolved === 'he';
  document.documentElement.dir  = isRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = resolved;

  // Update URL query parameter without triggering page reload
  if (updateUrl && window.history && window.history.replaceState) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', resolved === 'he' ? 'hb' : resolved);
      window.history.replaceState({}, '', url.toString());
    } catch (_) {}
  }

  // Re-render all dynamic content
  renderAll();
}

/** Resolve a translatable value: either a plain string or a { ru, en, he } object. */
function t(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[currentLang] || value['en'] || value['ru'] || '';
}

/* ── Helpers ────────────────────────────────────────────────── */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = t(value);
}

function setHtml(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = typeof value === 'string' ? value : t(value);
}

function makeImgWrapper(src, altValue) {
  const alt = t(altValue);
  const wrapper = document.createElement('div');
  wrapper.className = 'story-image';

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';

  img.addEventListener('error', () => {
    const ph = document.createElement('div');
    ph.className = 'img-placeholder';
    ph.textContent = alt || '📷';
    wrapper.replaceChild(ph, img);
  });

  wrapper.appendChild(img);
  return wrapper;
}

/* ── Language switcher ──────────────────────────────────────── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      setLanguage(lang, true);
    });
  });

  // Apply initial language state to HTML and buttons
  const isRtl = currentLang === 'he';
  document.documentElement.dir  = isRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.setAttribute('aria-pressed', b.dataset.lang === currentLang ? 'true' : 'false');
  });

  // Listen to browser navigation (back / forward)
  window.addEventListener('popstate', () => {
    const newLang = getInitialLang();
    if (newLang !== currentLang) {
      setLanguage(newLang, false);
    }
  });
}

/* ── Hero ───────────────────────────────────────────────────── */
function buildHero() {
  const { couple, date, hero } = CONTENT;

  if (hero.backgroundImage) {
    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    const img = (isMobile && hero.backgroundImageMobile) ? hero.backgroundImageMobile : hero.backgroundImage;
    document.querySelector('.section-hero').style.backgroundImage = `url('${img}')`;

    window.matchMedia('(max-width: 720px)').addEventListener('change', e => {
      const src = (e.matches && hero.backgroundImageMobile) ? hero.backgroundImageMobile : hero.backgroundImage;
      document.querySelector('.section-hero').style.backgroundImage = `url('${src}')`;
    });
  }

  const overlay = document.getElementById('hero-overlay');
  if (overlay) overlay.style.background = `rgba(0,0,0,${hero.overlayOpacity})`;
}

function renderHero() {
  const { couple, date, hero } = CONTENT;
  const n1 = t(couple.name1);
  const n2 = t(couple.name2);
  const amp = t(couple.ampersand);

  setHtml('hero-names',
    `${n1} <span class="ampersand">${amp}</span> ${n2}`
  );
  document.title = `${n1} & ${n2} · ${t(date.display)}`;

  const navLogo = document.getElementById('nav-logo');
  if (navLogo) {
    navLogo.setAttribute('aria-label', `${n1} ${amp} ${n2} · Back to top`);
  }

  setText('hero-tagline',  couple.tagline);
  setText('hero-date',     `${t(date.dayRange)} · ${t(date.display)}`);
  setText('hero-venue',   hero.venueLabel);
}

/* ── Countdown ──────────────────────────────────────────────── */
let countdownInitialized = false;

function buildCountdown() {
  if (countdownInitialized) return;
  countdownInitialized = true;

  const target = new Date(CONTENT.date.iso).getTime();
  const container = document.getElementById('countdown');
  if (!container) return;

  const labelKeys = {
    ru: ['Дней', 'Часов', 'Минут', 'Секунд'],
    en: ['Days',   'Hours', 'Minutes', 'Seconds'],
    he: ['ימים',  'שעות',  'דקות',    'שניות'],
  };

  // Build structure once; update numbers and labels on language change
  container.innerHTML = '';
  const units = [0, 1, 2, 3].map(() => {
    const unit  = document.createElement('div');
    unit.className = 'countdown-unit';
    const num   = document.createElement('span');
    num.className = 'countdown-number';
    const label = document.createElement('span');
    label.className = 'countdown-label';
    unit.append(num, label);
    container.appendChild(unit);
    return { num, label };
  });

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      container.innerHTML = `<span style="font-family:var(--font-heading);font-size:1.5rem;font-style:italic">🎉</span>`;
      return;
    }
    const vals  = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000) / 60000),
      Math.floor((diff % 60000) / 1000),
    ];
    const labels = labelKeys[currentLang] || labelKeys['en'];
    vals.forEach((v, i) => {
      units[i].num.textContent   = String(v).padStart(2, '0');
      units[i].label.textContent = labels[i];
    });
  }

  tick();
  setInterval(tick, 1000);
}

/* ── Our Story ──────────────────────────────────────────────── */
/* ── Photo Gallery Carousel ─────────────────────────────────── */
let galleryCarouselState = {
  animationId: null,
  isPaused: false,
  isDragging: false,
  startX: 0,
  startScrollLeft: 0,
  pauseTimeout: null,
  cleanupListeners: null,
};

function renderGallery() {
  const { gallery } = CONTENT;
  const section = document.getElementById('gallery');
  if (!section || !gallery || !gallery.images || !gallery.images.length) return;

  setText('gallery-title', gallery.sectionTitle);
  setText('gallery-subtitle', gallery.subtitle);

  const track = document.getElementById('carousel-track');
  const viewport = document.getElementById('carousel-viewport');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track || !viewport) return;

  // Cleanup any previous animation or listeners
  if (galleryCarouselState.animationId) {
    cancelAnimationFrame(galleryCarouselState.animationId);
    galleryCarouselState.animationId = null;
  }
  if (galleryCarouselState.cleanupListeners) {
    galleryCarouselState.cleanupListeners();
    galleryCarouselState.cleanupListeners = null;
  }
  clearTimeout(galleryCarouselState.pauseTimeout);
  galleryCarouselState.isPaused = false;
  galleryCarouselState.isDragging = false;

  track.innerHTML = '';

  const baseImages = gallery.images;
  const totalSets = 4; // 4 sets for seamless, unbreakable infinite scrolling
  const allImages = [];

  for (let s = 0; s < totalSets; s++) {
    baseImages.forEach((imgData, idx) => {
      allImages.push({ ...imgData, originalIndex: idx });
    });
  }

  allImages.forEach((imgData) => {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.innerHTML = `
      <img src="${encodeURI(imgData.src)}" alt="${t(imgData.alt)}" loading="lazy" draggable="false" />
    `;
    track.appendChild(card);
  });

  setupCarouselEngine(viewport, track, prevBtn, nextBtn, totalSets);
}

function setupCarouselEngine(viewport, track, prevBtn, nextBtn, totalSets) {
  const state = galleryCarouselState;
  const speed = 0.65; // gentle, elegant speed in px per frame

  // Position initial scroll in the middle (Set 2 start)
  function initPosition() {
    const singleSetWidth = track.scrollWidth / totalSets;
    if (singleSetWidth > 0 && viewport.scrollLeft === 0) {
      viewport.scrollLeft = singleSetWidth * 1.5;
    }
  }
  requestAnimationFrame(initPosition);
  setTimeout(initPosition, 150);
  setTimeout(initPosition, 600);

  function pauseAutoScroll(durationMs = 2500) {
    state.isPaused = true;
    clearTimeout(state.pauseTimeout);
    if (durationMs > 0) {
      state.pauseTimeout = setTimeout(() => {
        if (!state.isDragging) state.isPaused = false;
      }, durationMs);
    }
  }

  // Truly infinite wrap listener: operates on ALL scroll causes (auto, touch, drag, wheel, button)
  let isWrapping = false;
  const onScroll = () => {
    if (isWrapping) return;
    const singleSetWidth = track.scrollWidth / totalSets;
    if (!singleSetWidth || singleSetWidth < 50) return;

    if (viewport.scrollLeft >= singleSetWidth * 2.5) {
      isWrapping = true;
      viewport.scrollLeft -= singleSetWidth;
      if (state.isDragging) state.startScrollLeft -= singleSetWidth;
      isWrapping = false;
    } else if (viewport.scrollLeft <= singleSetWidth * 0.5) {
      isWrapping = true;
      viewport.scrollLeft += singleSetWidth;
      if (state.isDragging) state.startScrollLeft += singleSetWidth;
      isWrapping = false;
    }
  };
  viewport.addEventListener('scroll', onScroll, { passive: true });

  // Auto-scroll loop
  function step() {
    if (!state.isPaused && !state.isDragging) {
      viewport.scrollLeft += speed;
    }
    state.animationId = requestAnimationFrame(step);
  }
  state.animationId = requestAnimationFrame(step);

  // Mouse hover pause
  const onMouseEnter = () => { state.isPaused = true; };
  const onMouseLeave = () => { if (!state.isDragging) state.isPaused = false; };
  viewport.addEventListener('mouseenter', onMouseEnter);
  viewport.addEventListener('mouseleave', onMouseLeave);

  // Mouse drag support
  const onMouseDown = e => {
    state.isDragging = true;
    state.isPaused = true;
    state.startX = e.pageX;
    state.startScrollLeft = viewport.scrollLeft;
    viewport.classList.add('is-dragging');
  };

  const onMouseMove = e => {
    if (!state.isDragging) return;
    const dx = e.pageX - state.startX;
    viewport.scrollLeft = state.startScrollLeft - dx;
  };

  const onMouseUp = () => {
    if (state.isDragging) {
      state.isDragging = false;
      viewport.classList.remove('is-dragging');
      pauseAutoScroll(2000);
    }
  };

  viewport.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  // Touch support for mobile phones
  const onTouchStart = () => {
    state.isPaused = true;
  };
  const onTouchMove = () => {
    state.isPaused = true;
  };
  const onTouchEnd = () => {
    pauseAutoScroll(2500);
  };
  viewport.addEventListener('touchstart', onTouchStart, { passive: true });
  viewport.addEventListener('touchmove', onTouchMove, { passive: true });
  viewport.addEventListener('touchend', onTouchEnd, { passive: true });

  // Navigation Arrow Buttons
  function getStepDistance() {
    const card = viewport.querySelector('.carousel-card');
    return card ? card.offsetWidth + 20 : 300;
  }

  const onPrevClick = () => {
    pauseAutoScroll(3000);
    viewport.scrollBy({ left: -getStepDistance(), behavior: 'smooth' });
  };
  const onNextClick = () => {
    pauseAutoScroll(3000);
    viewport.scrollBy({ left: getStepDistance(), behavior: 'smooth' });
  };

  if (prevBtn) prevBtn.addEventListener('click', onPrevClick);
  if (nextBtn) nextBtn.addEventListener('click', onNextClick);

  // Store cleanup function for re-rendering on lang switch
  state.cleanupListeners = () => {
    viewport.removeEventListener('scroll', onScroll);
    viewport.removeEventListener('mouseenter', onMouseEnter);
    viewport.removeEventListener('mouseleave', onMouseLeave);
    viewport.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    viewport.removeEventListener('touchstart', onTouchStart);
    viewport.removeEventListener('touchmove', onTouchMove);
    viewport.removeEventListener('touchend', onTouchEnd);
    if (prevBtn) prevBtn.removeEventListener('click', onPrevClick);
    if (nextBtn) nextBtn.removeEventListener('click', onNextClick);
  };
}

/* ── Event Details ──────────────────────────────────────────── */
function renderDetails() {
  const { details } = CONTENT;
  if (!details) return;
  setText('details-title', details.sectionTitle);

  const grid = document.getElementById('details-grid');
  if (!grid) return;
  grid.innerHTML = '';

  details.cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'detail-card visible';
    div.setAttribute('role', 'listitem');

    const rawLines = t(card.lines);
    const lines = Array.isArray(rawLines) ? rawLines : (card.lines[currentLang] || card.lines['en'] || []);
    const linesHtml = lines.map(l => `<p>${l}</p>`).join('');

    div.innerHTML = `
      <span class="detail-icon" aria-hidden="true">${card.icon}</span>
      <h3>${t(card.title)}</h3>
      ${linesHtml}
    `;

    grid.appendChild(div);
  });
}

/* ── Schedule ───────────────────────────────────────────────── */
const OFFICIANT_IMAGES = [
  'images/lee_rabbi.jpg',
  'images/lee_v4.jpg',
  'images/lee_sheikh.jpg'
];
let chosenOfficiantImage = null;

function getOfficiantImage() {
  if (!chosenOfficiantImage) {
    const idx = Math.floor(Math.random() * OFFICIANT_IMAGES.length);
    chosenOfficiantImage = OFFICIANT_IMAGES[idx];
  }
  return chosenOfficiantImage;
}

function renderSchedule() {
  const { schedule } = CONTENT;
  if (!schedule) return;
  setText('schedule-title', schedule.sectionTitle);
  setText('schedule-subtitle', schedule.subtitle);

  const list = document.getElementById('schedule-list');
  if (list) {
    list.innerHTML = '';
    schedule.items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'schedule-item visible';
      const note = t(item.note);
      li.innerHTML = `
        <span class="schedule-time">${item.time}</span>
        <div class="schedule-body">
          <p class="schedule-label">${t(item.label)}</p>
          ${note ? `<p class="schedule-note">${note}</p>` : ''}
        </div>
      `;
      list.appendChild(li);
    });
  }

  const officiantImg = document.getElementById('schedule-officiant-img');
  if (officiantImg) {
    officiantImg.src = getOfficiantImage();
  }
}

/* ── Attire / Dress Code ────────────────────────────────────── */
function renderAttire() {
  const { attire } = CONTENT;
  if (!attire) return;

  const eyebrow = {
    ru: "ДРЕСС-КОД",
    en: "DRESS CODE",
    he: "קוד לבוש",
  };
  setText('attire-eyebrow', eyebrow);
  setText('attire-title', attire.sectionTitle);
  setText('attire-vibe', attire.vibe);
  setText('attire-subtitle', attire.subtitle);
  setHtml('attire-intro', attire.intro);

  // Cards (Ladies / Men)
  const cardsGrid = document.getElementById('attire-cards-grid');
  if (cardsGrid) {
    cardsGrid.innerHTML = '';
    (attire.cards || []).forEach(card => {
      const cardEl = document.createElement('div');
      cardEl.className = 'attire-card reveal';
      cardEl.setAttribute('role', 'listitem');

      const itemsHtml = (card.items || []).map(item => `
        <li class="attire-card-item">
          <span class="attire-card-bullet" aria-hidden="true">✦</span>
          <span>${t(item)}</span>
        </li>
      `).join('');

      cardEl.innerHTML = `
        <div class="attire-card-top">
          <span class="attire-card-icon" aria-hidden="true">${card.icon}</span>
          <h3 class="attire-card-title">${t(card.title)}</h3>
        </div>
        <ul class="attire-card-list">
          ${itemsHtml}
        </ul>
      `;
      cardsGrid.appendChild(cardEl);
    });
  }

  // Palette Swatches
  setText('attire-palette-title', attire.paletteTitle);
  setText('attire-palette-subtitle', attire.paletteSubtitle);

  const swatchesGrid = document.getElementById('attire-swatches-grid');
  if (swatchesGrid) {
    swatchesGrid.innerHTML = '';
    (attire.swatches || []).forEach(sw => {
      const el = document.createElement('div');
      el.className = 'attire-swatch-item reveal';
      el.setAttribute('role', 'listitem');

      el.innerHTML = `
        <div class="attire-swatch-circle" style="background-color: ${sw.hex};" title="${t(sw.name)} (${sw.hex})">
          <span class="attire-swatch-check" aria-hidden="true">✓</span>
        </div>
        <span class="attire-swatch-name">${t(sw.name)}</span>
        <span class="attire-swatch-hex">${sw.hex}</span>
      `;
      swatchesGrid.appendChild(el);
    });
  }

  // Reserved Colors
  setText('attire-reserved-title', attire.reservedTitle);
  setText('attire-reserved-subtitle', attire.reservedSubtitle);

  const reservedGrid = document.getElementById('attire-reserved-grid');
  if (reservedGrid) {
    reservedGrid.innerHTML = '';
    (attire.reservedItems || []).forEach(item => {
      const el = document.createElement('div');
      el.className = 'attire-reserved-item reveal';
      el.setAttribute('role', 'listitem');

      el.innerHTML = `
        <div class="attire-reserved-swatch-wrap">
          <div class="attire-reserved-swatch" style="background-color: ${item.color}; border: 1.5px solid ${item.border};">
            <span class="attire-reserved-icon" aria-hidden="true">${item.icon}</span>
          </div>
        </div>
        <div class="attire-reserved-info">
          <h5 class="attire-reserved-who">${t(item.who)}</h5>
          <p class="attire-reserved-for">${t(item.reservedFor)}</p>
        </div>
      `;
      reservedGrid.appendChild(el);
    });
  }
}

/* ── Venue ──────────────────────────────────────────────────── */
function renderVenue() {
  const { venue } = CONTENT;
  if (!venue) return;
  setText('venue-title', venue.sectionTitle);
  setText('venue-name', venue.name);
  setHtml('venue-description', venue.description);

  const photo = document.querySelector('.venue-photo');
  if (photo && venue.photo) photo.src = venue.photo;

  const callout = document.getElementById('venue-accommodation-callout');
  if (callout && venue.accommodationCallout) {
    callout.innerHTML = `<span class="callout-icon">${venue.accommodationCallout.icon}</span><span class="callout-text">${t(venue.accommodationCallout.text)}</span>`;
  }

  // Castle Card
  if (venue.castle) {
    setText('venue-castle-title', venue.castle.title);
    setText('venue-castle-address', venue.castle.address);
    const castleDir = document.getElementById('venue-castle-directions');
    if (castleDir) {
      castleDir.href = venue.castle.directionsUrl;
      castleDir.textContent = t(venue.castle.directionsLabel);
    }
    const castleWeb = document.getElementById('venue-castle-website');
    if (castleWeb) {
      castleWeb.href = venue.castle.websiteUrl;
      castleWeb.textContent = t(venue.castle.websiteLabel);
    }
  }

  // Hotel Card
  if (venue.hotel) {
    setText('venue-hotel-title', venue.hotel.title);
    setText('venue-hotel-address', venue.hotel.address);
    setHtml('venue-hotel-note', venue.hotel.note);
    const hotelDir = document.getElementById('venue-hotel-directions');
    if (hotelDir) {
      hotelDir.href = venue.hotel.directionsUrl;
      hotelDir.textContent = t(venue.hotel.directionsLabel);
    }
    const hotelWeb = document.getElementById('venue-hotel-website');
    if (hotelWeb) {
      hotelWeb.href = venue.hotel.websiteUrl;
      hotelWeb.textContent = t(venue.hotel.websiteLabel);
    }
  }

  const iframe = document.getElementById('venue-map-iframe');
  if (iframe && !iframe.src && venue.mapsEmbedUrl) iframe.src = venue.mapsEmbedUrl;

  // Castle plan (opens full-size in the lightbox)
  const plan = venue.plan;
  const planBtn = document.getElementById('venue-plan-btn');
  const planImg = document.getElementById('venue-plan-img');
  if (plan && planBtn && planImg) {
    setText('venue-plan-title',   plan.title);
    setText('venue-plan-caption', plan.caption);
    setText('venue-plan-zoom',    plan.zoomHint);
    planImg.src = plan.src;
    planImg.alt = t(plan.alt);
    planBtn.setAttribute('aria-label', t(plan.zoomHint));
    // Assign (not addEventListener) so re-rendering on language switch doesn't stack handlers
    planBtn.onclick = () => openLightbox(0, [{ src: plan.src, alt: plan.alt }]);

    // 3D virtual tours
    setText('venue-plan-tours-label', plan.toursLabel);
    const tours = document.getElementById('venue-plan-tours');
    if (tours) {
      tours.innerHTML = (plan.tours || []).map(tour => `
        <a href="${tour.url}" class="btn btn-outline venue-plan-tour" target="_blank" rel="noopener">
          <span class="venue-plan-tour-icon" aria-hidden="true">&#x1F3E0;</span>${t(tour.label)}
        </a>
      `).join('');
    }
  }
}

/* ── Travel / How to get there ──────────────────────────────── */
function renderTravel() {
  const { travel } = CONTENT;
  setText('travel-title', travel.sectionTitle);
  setText('travel-intro', travel.intro);

  const container = document.getElementById('airports-list');
  if (!container) return;
  container.innerHTML = '';

  // Badge colours
  const badgeColors = { green: '#2d7a4f', blue: '#1a5fa8', yellow: '#b07d00' };
  const badgeBg     = { green: '#e8f5ee', blue: '#e8f0fb', yellow: '#fef9e7' };

  // ── Airports ──────────────────────────────────────────────
  const airportsWrap = document.createElement('div');
  airportsWrap.className = 'travel-section reveal visible';
  airportsWrap.innerHTML = `<h3 class="travel-subtitle">✈️ ${t({ en:'Recommended Airports', ru:'Рекомендуемые аэропорты', he:'נמלי תעופה מומלצים' })}</h3>`;
  const airportsGrid = document.createElement('div');
  airportsGrid.className = 'travel-airports-grid';

  travel.airports.forEach(ap => {
    const color  = badgeColors[ap.badge] || '#555';
    const bg     = badgeBg[ap.badge]     || '#f5f5f5';
    const card   = document.createElement('a');
    card.className = 'travel-airport-card reveal visible';
    card.href      = ap.url;
    card.target    = '_blank';
    card.rel       = 'noopener';
    card.innerHTML = `
      <span class="travel-airport-code" style="color:${color};background:${bg}">${ap.code}</span>
      <p class="travel-airport-name">${t(ap.name)}</p>
      <p class="travel-airport-desc">${t(ap.desc)}</p>
    `;
    airportsGrid.appendChild(card);
  });
  airportsWrap.appendChild(airportsGrid);
  container.appendChild(airportsWrap);

  // ── Train ────────────────────────────────────────────────
  const tr = travel.trainSection;
  const trainWrap = document.createElement('div');
  trainWrap.className = 'travel-section reveal visible';
  const routesHtml = tr.routes.map(r => `
    <div class="travel-route">
      <span class="travel-route-from">${t(r.from)}</span>
      <span class="travel-route-desc">${t(r.desc)}</span>
    </div>
  `).join('');
  const trainAppsHtml = tr.apps.map(a => `
    <a href="${a.url}" class="travel-app-chip" target="_blank" rel="noopener">
      🚆 ${a.name} <span>${t(a.desc)}</span>
    </a>
  `).join('');
  trainWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(tr.title)}</h3>
    <p class="travel-text">${t(tr.intro)}</p>
    <div class="travel-routes">${routesHtml}</div>
    <div class="travel-chips">${trainAppsHtml}</div>
  `;
  container.appendChild(trainWrap);

  // ── Coach ────────────────────────────────────────────────
  const co = travel.coachSection;
  const coachWrap = document.createElement('div');
  coachWrap.className = 'travel-section reveal visible';
  const stepsHtml = co.steps.map((s, i) => `
    <li class="travel-step"><span class="travel-step-num">${i + 1}</span>${t(s)}</li>
  `).join('');
  const coachChips = co.companies.map(c => `
    <a href="${c.url}" class="travel-app-chip" target="_blank" rel="noopener">🚌 ${c.name}</a>
  `).join('');
  coachWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(co.title)}</h3>
    <p class="travel-text">${t(co.intro)}</p>
    <p class="travel-route-title">${t(co.routeTitle)}</p>
    <ol class="travel-steps">${stepsHtml}</ol>
    <div class="travel-chips">${coachChips}</div>
  `;
  container.appendChild(coachWrap);

  // ── Shuttle ──────────────────────────────────────────────
  const sh = travel.shuttleSection;
  const shuttleWrap = document.createElement('div');
  shuttleWrap.className = 'travel-section reveal visible';
  shuttleWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(sh.title)}</h3>
    <p class="travel-text">${t(sh.text)}</p>
  `;
  container.appendChild(shuttleWrap);

  // ── Car Rental ───────────────────────────────────────────
  const ca = travel.carSection;
  const carWrap = document.createElement('div');
  carWrap.className = 'travel-section reveal visible';
  const carChips = ca.companies.map(c => `
    <a href="${c.url}" class="travel-app-chip" target="_blank" rel="noopener">🚗 ${c.name}</a>
  `).join('');
  carWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(ca.title)}</h3>
    <p class="travel-text">${t(ca.intro)}</p>
    <div class="travel-chips">${carChips}</div>
  `;
  container.appendChild(carWrap);

  // ── ZTL Signs ────────────────────────────────────────────
  const ztl = travel.ztlSection;
  if (ztl) {
    const ztlWrap = document.createElement('div');
    ztlWrap.className = 'travel-section travel-ztl-section reveal visible';
    const paragraphsHtml = ztl.paragraphs.map(p => `<p class="travel-text">${t(p)}</p>`).join('');
    ztlWrap.innerHTML = `
      <div class="travel-ztl-layout">
        <div class="travel-ztl-info">
          <h3 class="travel-subtitle">${t(ztl.title)}</h3>
          ${paragraphsHtml}
          <div class="travel-ztl-tip">
            ${t(ztl.tip)}
          </div>
        </div>
        <div class="travel-ztl-visual">
          <img src="${ztl.image}" alt="${t(ztl.caption)}" class="travel-ztl-img" loading="lazy" />
          <span class="travel-ztl-caption">${t(ztl.caption)}</span>
        </div>
      </div>
    `;
    container.appendChild(ztlWrap);
  }

  // ── Apps ─────────────────────────────────────────────────
  const ap = travel.appsSection;
  const appsWrap = document.createElement('div');
  appsWrap.className = 'travel-section reveal visible';
  const appsHtml = ap.apps.map(a => `
    <a href="${a.url}" class="travel-app-chip" target="_blank" rel="noopener">
      ${a.emoji} ${a.name} <span>${t(a.desc)}</span>
    </a>
  `).join('');
  appsWrap.innerHTML = `
    <h3 class="travel-subtitle">${t(ap.title)}</h3>
    <div class="travel-chips">${appsHtml}</div>
  `;
  container.appendChild(appsWrap);

  // ── Contact note ─────────────────────────────────────────
  const noteWrap = document.createElement('p');
  noteWrap.className = 'travel-contact-note reveal visible';
  noteWrap.textContent = t(travel.contactNote);
  container.appendChild(noteWrap);
}


/* ── Gifts ──────────────────────────────────────────────────── */
function renderGifts() {
  const { gifts } = CONTENT;
  setText('gifts-title', gifts.sectionTitle);
  setText('gifts-intro', gifts.intro);
  setText('gifts-toggle-label', gifts.detailsToggle);

  const grid = document.getElementById('gifts-grid');
  if (!grid) return;
  grid.innerHTML = '';

  gifts.options.forEach(option => {
    const div = document.createElement('div');
    div.className = 'gift-card reveal';

    const btnHtml = option.url
      ? `<a href="${option.url}" class="btn btn-outline" target="_blank" rel="noopener">${t(option.label)}</a>`
      : '';

    const text = t(option.text);
    const textHtml = text ? `<p>${text}</p>` : '';

    const detailsHtml = option.details && option.details.length
      ? `<dl class="gift-details">${option.details.map(row => `
          <div class="gift-detail-row">
            <dt>${t(row.label)}</dt>
            <dd>${t(row.value)}</dd>
          </div>`).join('')}</dl>`
      : '';

    div.innerHTML = `
      <span class="gift-icon" aria-hidden="true">${option.icon}</span>
      <h3>${t(option.title)}</h3>
      ${textHtml}
      ${detailsHtml}
      ${btnHtml}
    `;

    grid.appendChild(div);
  });
}


/* ── Lightbox ───────────────────────────────────────────────── */
let lightboxIndex = 0;
/** The image set currently shown in the lightbox (story gallery by default, or a one-off set such as the castle plan). */
let activeLightboxImages = [];

function initLightbox() {
  const lb    = document.getElementById('lightbox');
  const close = document.getElementById('lightbox-close');
  const prev  = document.getElementById('lightbox-prev');
  const next  = document.getElementById('lightbox-next');
  if (!lb) return;

  close.addEventListener('click', closeLightbox);
  prev.addEventListener('click',  () => navigateLightbox(-1));
  next.addEventListener('click',  () => navigateLightbox(1));
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function navigateLightbox(dir) {
  if (activeLightboxImages.length < 2) return;
  lightboxIndex = (lightboxIndex + dir + activeLightboxImages.length) % activeLightboxImages.length;
  setLightboxImage(lightboxIndex);
}

function setLightboxImage(index) {
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  const { src, alt } = activeLightboxImages[index];
  if (img) { img.src = src; img.alt = t(alt); }
  if (cap) cap.textContent = t(alt);
}

/**
 * @param {number} index  Index of the image to show.
 * @param {Array}  [images]  Optional image set; defaults to the story gallery.
 */
function openLightbox(index, images) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  activeLightboxImages = images || storyLightboxImages;
  lightboxIndex = index;
  setLightboxImage(index);
  // Hide prev/next arrows when there is nothing to navigate to
  const single = activeLightboxImages.length < 2;
  const prev = document.getElementById('lightbox-prev');
  const next = document.getElementById('lightbox-next');
  if (prev) prev.hidden = single;
  if (next) next.hidden = single;
  lb.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.hidden = true;
  document.body.style.overflow = '';
}

/* ── RSVP ───────────────────────────────────────────────────── */
function renderRsvp() {
  const { rsvp } = CONTENT;
  setText('rsvp-title', rsvp.sectionTitle);
  setText('rsvp-intro', rsvp.intro);

  const iframe = document.getElementById('rsvp-iframe');
  if (!iframe) return;

  const newSrc = rsvp.formUrls[currentLang] || rsvp.formUrls['en'];
  iframe.height = rsvp.formHeight;

  // Only update src when the language actually changes to avoid a reload flicker
  if (iframe.src !== newSrc) {
    iframe.src = newSrc;
  }

  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn && rsvp.whatsapp) {
    waBtn.href      = rsvp.whatsapp.url;
    waBtn.innerHTML = rsvp.whatsapp.icon + t(rsvp.whatsapp.label);
  }

  const calBtn = document.getElementById('calendar-btn');
  if (calBtn && rsvp.calendar) {
    calBtn.href      = rsvp.calendar.url;
    calBtn.innerHTML = `${rsvp.calendar.icon}<span class="btn-calendar-label">${t(rsvp.calendar.label)}</span>`;
  }
}

/* ── Footer ─────────────────────────────────────────────────── */
function renderFooter() {
  setText('footer-text', CONTENT.footer.text);
}

/* ── Nav labels ─────────────────────────────────────────────── */
function renderNav() {
  document.querySelectorAll('[data-nav]').forEach(link => {
    const key = link.dataset.nav;
    if (CONTENT.nav[key]) link.textContent = t(CONTENT.nav[key]);
  });
}

/* ── Navbar behaviour (scroll + hamburger) ──────────────────── */
function initNav() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    navbar.classList.toggle('nav-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      navbar.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && !navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      navbar.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ── Scroll-reveal (IntersectionObserver) ───────────────────── */
let revealObserver = null;

function initReveal() {
  if (revealObserver) revealObserver.disconnect();

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '60px' });

  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    } else {
      revealObserver.observe(el);
    }
  });

  // Safety fallback: ensure all elements are visible after a short delay
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.5) {
        el.classList.add('visible');
      }
    });
  }, 350);
}

/* ── Full re-render (called on language switch) ─────────────── */
function renderAll() {
  renderHero();
  renderNav();
  renderDetails();
  renderGallery();
  renderSchedule();
  renderAttire();
  renderVenue();
  renderTravel();

  renderGifts();
  renderRsvp();
  renderFooter();

  // Re-observe all .reveal elements after DOM is updated
  requestAnimationFrame(initReveal);
}

/* ── Boot ───────────────────────────────────────────────────── */
function boot() {
  // One-time structural builds (things that don't change layout on lang switch)
  buildHero();
  buildCountdown();
  initNav();
  initLangSwitcher();

  // Initial full render in defaultLang
  renderAll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
