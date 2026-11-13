/* ============================================================
   Pure Eden Foundation — interactions & content
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Data ---------------- */
  const IMG = 'assets/img/';

  const NEWS = [
    {
      id: 'mhd-2026',
      tag: 'Event', date: 'Jun 2026',
      title: '2026 Menstrual Hygiene Day Commemoration & Sanitary Pad Donation',
      excerpt: 'PureEden Foundation partnered with the Ablekuma West Municipal Education Directorate (SHEP) and Ghana Health Service for a multi-school menstrual health symposium and major sanitary pad donation.',
      hero: IMG + 'news/mhd-2026.jpg',
      body: [
        'In June 2026, PureEden Foundation hosted a landmark commemoration of World Menstrual Hygiene Day in collaboration with the Ablekuma West Municipal Education Directorate’s School Health Education Programme (SHEP) and health professionals from the Ghana Health Service.',
        'Bringing together students and educators from multiple basic and junior high schools across the municipality, the symposium featured keynote addresses from PureEden Foundation leadership and interactive reproductive health workshops.',
        'Using visual menstrual cycle charts and 3D anatomical models, Ghana Health Service facilitators guided students through the biology of menstruation, ovulation, and safe hygiene practices — empowering young girls with accurate, stigma-free knowledge and answering their questions openly.',
        'To crown the event, PureEden Foundation presented five full cartons and hundreds of individual packs of sanitary pads to participating schools and students, reinforcing the Foundation’s commitment to ending period poverty and keeping girls in school.'
      ],
      gallery: [
        IMG + 'gallery/mhd2026-1.jpg', IMG + 'gallery/mhd2026-2.jpg', IMG + 'gallery/mhd2026-3.jpg',
        IMG + 'gallery/mhd2026-4.jpg', IMG + 'gallery/mhd2026-5.jpg', IMG + 'gallery/mhd2026-6.jpg',
        IMG + 'gallery/mhd2026-7.jpg', IMG + 'gallery/mhd2026-8.jpg', IMG + 'gallery/mhd2026-9.jpg',
        IMG + 'gallery/mhd2026-10.jpg', IMG + 'gallery/mhd2026-11.jpg', IMG + 'gallery/mhd2026-12.jpg',
        IMG + 'gallery/mhd2026-13.jpg'
      ]
    },
    {
      id: 'darkuman',
      tag: 'Event', date: 'May 28, 2025',
      title: 'Menstrual Hygiene Day Commemoration at Darkuman JHS',
      excerpt: 'Under the theme “Breaking the Silence: Empowering Young Minds Through Menstrual Health Education,” PureEden Foundation reached 100 students and teachers at Darkuman 1 JHS.',
      hero: IMG + 'news/darkuman.jpg',
      body: [
        'On Wednesday, May 28, 2025, PureEden Foundation commemorated World Menstrual Hygiene Day at Darkuman 1 Junior High School (JHS) under the theme “Breaking the Silence: Empowering Young Minds Through Menstrual Health Education,” bringing together 100 students, school teachers, and the PEF team for a morning of learning, mentorship, and practical support.',
        'Facilitators from the PureEden Foundation led interactive classroom sessions from 9:00 AM to 11:00 AM to dismantle stigma and taboos surrounding menstruation — creating an open, supportive environment where students stepped up to the microphone to ask questions, share reflections, and embrace menstrual health with confidence.',
        'Following the educational sessions, the PEF team and school staff distributed packs of sanitary pads, hygiene gift bags, and refreshments to every participating girl, ensuring students have the essential supplies they need to stay in school comfortably throughout their cycle.',
        'Teachers and leadership at Darkuman JHS commended the initiative, which forms a core milestone in PureEden Foundation’s Menstrual Health Project supporting girl-child education and wellbeing across Ghana.'
      ],
      gallery: [
        IMG + 'gallery/darkuman-1.jpg', IMG + 'gallery/darkuman-2.jpg', IMG + 'gallery/darkuman-3.jpg',
        IMG + 'gallery/darkuman-4.jpg', IMG + 'gallery/darkuman-5.jpg', IMG + 'gallery/darkuman-6.jpg',
        IMG + 'gallery/darkuman-7.jpg', IMG + 'gallery/darkuman-8.jpg', IMG + 'gallery/darkuman-9.jpg',
        IMG + 'gallery/darkuman-10.jpg'
      ]
    },
    {
      id: 'akropong',
      tag: 'Donation', date: 'Oct 25, 2024',
      title: 'PureEden Foundation Brings Hope to Akropong School for the Blind',
      excerpt: 'The team donated food items and toiletries to support students with visual impairments at Akropong School for the Blind, Eastern Region.',
      hero: IMG + 'gallery/akropong-1.jpg',
      body: [
        'On Friday, October 18, 2024, the PureEden Foundation donated essential food items and toiletries to Akropong School for the Blind in the Eastern Region, supporting the school’s work empowering students with visual impairments.',
        'The PEF team, led by Associate Executive Director Louisa Mensah, included Communications and Programs Manager Dennis Ato Keelson and Administrator Samuel Sekyi.',
        'The donation included rice, sugar, beans, tomato paste, iodine salt, maize, millet, cooking oil, and sanitary pads — ensuring students receive necessary sustenance while easing pressure on the school’s resources.',
        'The gesture reflects PEF’s broader mission to improve lives through education, health, and social welfare across vulnerable communities in Ghana.'
      ],
      gallery: [
        IMG + 'gallery/akropong-2.jpg', IMG + 'gallery/akropong-3.jpg', IMG + 'gallery/akropong-4.jpg',
        IMG + 'gallery/akropong-5.jpg', IMG + 'gallery/akropong-6.jpg', IMG + 'gallery/akropong-7.jpg'
      ]
    },
    {
      id: 'ntraban',
      tag: 'Donation', date: 'Oct 25, 2024',
      title: 'Sanitary Pads Donated to Ntraban Methodist Basic School',
      excerpt: 'PureEden Foundation donated sanitary pads to girl-children at Ntraban Methodist Basic School and Yaara Roman Catholic Basic School.',
      hero: IMG + 'news/ntraban-1.jpg',
      body: [
        'PureEden Foundation donated packs of sanitary pads to girl-children at Ntraban Methodist Basic School and Yaara Roman Catholic Basic School in the Bono East Region.',
        'The distribution forms part of the Foundation’s Menstrual Health Project, which aims to keep girls in school by removing barriers linked to menstrual hygiene.',
        'Teachers and guardians at both schools welcomed the support, noting its direct impact on student attendance and confidence.'
      ],
      gallery: [ IMG + 'news/ntraban-1.jpg', IMG + 'gallery/mh-1.jpg', IMG + 'gallery/mh-3.jpg', IMG + 'gallery/mh-4.jpg', IMG + 'gallery/mh-5.jpg' ]
    },
    {
      id: 'menstrual-health',
      tag: 'Programme', date: 'Sep 2025',
      title: 'Menstrual Health Project Continues Across Bono East',
      excerpt: 'The Menstrual Health Project continues through the school year, reaching more girl-children across partner schools in Bono East.',
      hero: IMG + 'girl-child.jpg',
      body: [
        'Running from May through September, the Menstrual Health Project continues to provide sanitary supplies and hygiene education to girl-children across partner schools in the Bono East Region.',
        'PureEden Foundation is working with school leadership to expand the programme’s reach to additional communities in the coming terms.'
      ],
      gallery: [ IMG + 'gallery/mh-3.jpg', IMG + 'gallery/mh-1.jpg', IMG + 'gallery/mh-4.jpg' ]
    }
  ];

  const EVENTS = [
    { id: 'e0', type: 'past', day: '08', month: 'Jun', title: '2026 Menstrual Hygiene Day Commemoration', meta: 'June 2026 · Ablekuma West Municipality',
      detail: 'A multi-school Menstrual Hygiene Day symposium and major sanitary pad donation in partnership with the Ablekuma West Municipal Education Directorate (SHEP) and Ghana Health Service.', articleId: 'mhd-2026' },
    { id: 'e3', type: 'past', day: '28', month: 'May', title: 'Menstrual Hygiene Day Commemoration at Darkuman JHS', meta: 'May 28, 2025 · Darkuman 1 JHS, Accra',
      detail: 'Under the theme “Breaking the Silence: Empowering Young Minds Through Menstrual Health Education,” PEF brought together 100 students and teachers for menstrual health education and sanitary pad distribution.', articleId: 'darkuman' },
    { id: 'e4', type: 'past', day: '18', month: 'Oct', title: 'Donation at Akropong School for the Blind', meta: 'Oct 18, 2024 · Eastern Region',
      detail: 'The PEF team donated food items and toiletries to Akropong School for the Blind, supporting students with visual impairments.', articleId: 'akropong' },
    { id: 'e5', type: 'past', day: '17', month: 'Jul', title: 'Sanitary Pad Distribution, Ntraban', meta: '2024 · Bono East Region',
      detail: 'Sanitary pads were distributed to girl-children at Ntraban Methodist Basic School and Yaara Roman Catholic Basic School.', articleId: 'ntraban' }
  ];

  const SOCIAL = [
    { platform: 'Instagram', badge: '#c13584', video: false, media: IMG + 'gallery/mh-1.jpg',
      caption: 'Handing over hygiene kits at Ntraban Methodist Basic School today.', handle: '@pureeden_foundation_', date: '2d',
      url: 'https://www.instagram.com/pureeden_foundation_' },
    { platform: 'TikTok', badge: '#111', video: true, media: IMG + 'gallery/akropong-1.jpg',
      caption: 'A day in the field with our volunteer team.', handle: '@pureeden.foundati', date: '4d',
      url: 'https://www.tiktok.com/@pureeden.foundati' },
    { platform: 'YouTube', badge: '#c4302b', video: true, media: IMG + 'gallery/akropong-6.jpg',
      caption: 'Watch the full recap of our Akropong School donation drive.', handle: 'PureEden Foundation', date: '1w',
      url: 'https://www.youtube.com/@pureedenfoundation' },
    { platform: 'LinkedIn', badge: '#0a66c2', video: false, media: IMG + 'gallery/mh-5.jpg',
      caption: 'Proud to announce a new partnership expanding our reach in Bono East.', handle: 'PureEden Foundation', date: '1w',
      url: 'https://www.linkedin.com/company/pureeden-foundation' }
  ];

  const GALLERY_STORIES = NEWS.filter(function (n) { return n.gallery && n.gallery.length; });

  /* ---------------- Helpers ---------------- */
  const $ = function (s, r) { return (r || document).querySelector(s); };
  const $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  const el = function (tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  const findNews = function (id) { return NEWS.find(function (n) { return n.id === id; }); };
  const findEvent = function (id) { return EVENTS.find(function (e) { return e.id === id; }); };

  /* ---------------- Mobile nav ---------------- */
  function initNav() {
    const header = $('.site-header');
    const toggle = $('.nav-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', header.classList.contains('menu-open'));
    });
    $$('.nav a').forEach(function (a) {
      a.addEventListener('click', function () { header.classList.remove('menu-open'); });
    });
  }

  /* ---------------- Hero carousel ---------------- */
  function initCarousel() {
    const track = $('.carousel-track');
    const dotsWrap = $('.carousel-dots');
    if (!track) return;
    const slides = $$('.slide', track);
    let i = 0, timer;
    slides.forEach(function (_, idx) {
      const b = el('button'); if (idx === 0) b.className = 'active';
      b.setAttribute('aria-label', 'Show slide ' + (idx + 1));
      b.addEventListener('click', function () { go(idx); reset(); });
      dotsWrap.appendChild(b);
    });
    const dots = $$('button', dotsWrap);
    function go(n) {
      i = (n + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (i * 100) + '%)';
      dots.forEach(function (d, k) { d.classList.toggle('active', k === i); });
    }
    function next() { go(i + 1); }
    function reset() { clearInterval(timer); timer = setInterval(next, 5000); }
    reset();
  }

  /* ---------------- News ---------------- */
  function renderNews() {
    const feat = NEWS[0];
    const featEl = $('#news-featured');
    if (featEl) {
      featEl.innerHTML =
        '<div class="thumb"><img src="' + feat.hero + '" alt="' + esc(feat.title) + '" loading="lazy"></div>' +
        '<div class="body"><div class="news-meta"><span class="pill">' + esc(feat.tag) + '</span><span class="date">' + esc(feat.date) + '</span></div>' +
        '<h3>' + esc(feat.title) + '</h3><p>' + esc(feat.excerpt) + '</p></div>';
      featEl.addEventListener('click', function () { openArticle(feat.id); });
    }
    const side = $('#news-side');
    if (side) {
      NEWS.filter(function (n) { return n.id !== feat.id; }).slice(0, 3).forEach(function (n) {
        const item = el('div', 'news-item');
        item.innerHTML =
          '<div class="thumb"><img src="' + n.hero + '" alt="' + esc(n.title) + '" loading="lazy"></div>' +
          '<div><div class="kicker">' + esc(n.tag) + '</div><h4>' + esc(n.title) + '</h4><div class="date">' + esc(n.date) + '</div></div>';
        item.addEventListener('click', function () { openArticle(n.id); });
        side.appendChild(item);
      });
    }
  }

  /* ---------------- Events ---------------- */
  let eventsTab = 'upcoming';
  function setEventsTab(tab) {
    eventsTab = tab;
    $$('.tabs button').forEach(function (x) { x.classList.toggle('active', x.dataset.tab === tab); });
    renderEvents();
  }
  function renderEvents() {
    const list = $('#events-list');
    if (!list) return;
    list.innerHTML = '';
    const items = EVENTS.filter(function (e) { return e.type === eventsTab; });
    if (!items.length) {
      const empty = el('div', 'event event-empty');
      empty.innerHTML =
        '<div class="event-empty-inner">' +
          '<h4>No upcoming events scheduled right now</h4>' +
          '<p>We don’t have a confirmed date on the calendar at the moment. Subscribe to our newsletter below for announcements, or browse our recent community outreach events.</p>' +
          '<div class="event-empty-actions">' +
            '<button class="btn btn-navy btn-sm" type="button" data-switch-tab="past">View Past Events</button>' +
            '<a class="btn btn-outline btn-sm" href="#newsletter-form">Get Event Updates</a>' +
          '</div>' +
        '</div>';
      const switchBtn = $('[data-switch-tab]', empty);
      if (switchBtn) switchBtn.addEventListener('click', function () { setEventsTab('past'); });
      list.appendChild(empty);
      return;
    }
    items.forEach(function (e) {
      const wrap = el('div', 'event');
      const support = e.campaign
        ? '<a class="btn btn-green btn-sm" href="#" data-campaign="' + e.id + '">Support This Event</a>'
        : (e.articleId ? '<a class="btn btn-green btn-sm" href="#" data-article="' + e.articleId + '">Read the Story</a>' : '');
      wrap.innerHTML =
        '<div class="event-head">' +
          '<div class="event-date"><div class="d">' + esc(e.day) + '</div><div class="m">' + esc(e.month) + '</div></div>' +
          '<div class="event-sep"></div>' +
          '<div class="event-info"><h4>' + esc(e.title) + '</h4><div class="meta">' + esc(e.meta) + '</div></div>' +
          '<div class="event-toggle">View details</div>' +
        '</div>' +
        '<div class="event-body"><p>' + esc(e.detail) + '</p>' + support + '</div>';
      const head = $('.event-head', wrap);
      head.addEventListener('click', function () {
        const open = wrap.classList.toggle('open');
        $('.event-toggle', wrap).textContent = open ? 'Hide details' : 'View details';
      });
      list.appendChild(wrap);
    });
  }
  function initEventTabs() {
    $$('.tabs button').forEach(function (b) {
      b.addEventListener('click', function () {
        setEventsTab(b.dataset.tab);
      });
    });
  }

  /* ---------------- Team ---------------- */
  const TEAM = [
    { name: 'Marilyn Kermah', role: 'Executive Director', mono: 'MK', color: '#1c8a4e' },
    { name: 'Louisa Mensah', role: 'Associate Executive Director', photo: IMG + 'team/louisa.png' },
    { name: 'Raymah Quist-Therson', role: 'Community Partnership Coordinator', photo: IMG + 'team/raymah.jpg' },
    { name: 'Samuel Sakyi Obeng', role: 'Administrator / Coordinator', photo: IMG + 'team/samuel.png' }
  ];
  function renderTeam() {
    const grid = $('#team-grid');
    if (!grid) return;
    TEAM.forEach(function (t) {
      const card = el('div', 'team-card');
      const inner = t.photo
        ? '<img src="' + t.photo + '" alt="' + esc(t.name) + '" loading="lazy">'
        : '<div class="mono" style="background:' + t.color + '">' + t.mono + '</div>';
      card.innerHTML = '<div class="photo">' + inner + '</div><h4>' + esc(t.name) + '</h4><div class="role">' + esc(t.role) + '</div>';
      grid.appendChild(card);
    });
  }

  /* ---------------- Social ---------------- */
  function renderSocial() {
    const grid = $('#social-grid');
    if (!grid) return;
    SOCIAL.forEach(function (p) {
      const a = el('a', 'social-card');
      a.href = p.url; a.target = '_blank'; a.rel = 'noopener';
      a.innerHTML =
        '<div class="social-media"><img src="' + p.media + '" alt="' + esc(p.platform) + ' post" loading="lazy">' +
          '<span class="social-badge" style="background:' + p.badge + '">' + esc(p.platform) + '</span>' +
          (p.video ? '<span class="social-play"><i></i></span>' : '') +
        '</div>' +
        '<div class="social-body"><div class="cap">' + esc(p.caption) + '</div>' +
          '<div class="row"><span>' + esc(p.handle) + '</span><span>' + esc(p.date) + '</span></div></div>';
      grid.appendChild(a);
    });
  }

  /* ---------------- Gallery + Lightbox ---------------- */
  let galleryScroll = 0;
  function renderGallery() {
    const track = $('#gallery-track');
    if (!track) return;
    GALLERY_STORIES.forEach(function (n) {
      const card = el('div', 'gallery-card');
      card.innerHTML =
        '<img src="' + n.gallery[0] + '" alt="' + esc(n.title) + '" loading="lazy">' +
        '<div class="cap"><h4>' + esc(n.title) + '</h4><span>' + n.gallery.length + ' photos</span></div>';
      card.addEventListener('click', function () { openLightbox(n); });
      track.appendChild(card);
    });
    const prev = $('#gallery-prev'), next = $('#gallery-next');
    const cardW = 300; // 280 + 20 gap
    function maxScroll() {
      const vp = $('.gallery-viewport').clientWidth;
      return Math.max(0, GALLERY_STORIES.length * cardW - vp);
    }
    function apply() {
      galleryScroll = Math.max(0, Math.min(maxScroll(), galleryScroll));
      track.style.transform = 'translateX(-' + galleryScroll + 'px)';
      prev.disabled = galleryScroll <= 0;
      next.disabled = galleryScroll >= maxScroll() - 1;
    }
    prev.addEventListener('click', function () { galleryScroll -= cardW * 2; apply(); });
    next.addEventListener('click', function () { galleryScroll += cardW * 2; apply(); });
    window.addEventListener('resize', apply);
    apply();
  }

  function openLightbox(story) {
    const lb = $('#lightbox');
    $('#lightbox-title').textContent = story.title;
    const grid = $('#lightbox-grid');
    grid.innerHTML = '';
    story.gallery.forEach(function (src) {
      const img = el('img'); img.src = src; img.loading = 'lazy'; img.alt = story.title;
      grid.appendChild(img);
    });
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function initLightbox() {
    const lb = $('#lightbox');
    if (!lb) return;
    function close() { lb.classList.remove('open'); document.body.style.overflow = ''; }
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    $('#lightbox-close').addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ---------------- Router: home / article / campaign ---------------- */
  const homeView = function () { return $('#home-view'); };
  const articleView = function () { return $('#article-view'); };
  const campaignView = function () { return $('#campaign-view'); };

  function showView(which) {
    homeView().classList.toggle('hidden', which !== 'home');
    articleView().classList.toggle('hidden', which !== 'article');
    campaignView().classList.toggle('hidden', which !== 'campaign');
    window.scrollTo(0, 0);
  }

  function openArticle(id, push) {
    const a = findNews(id);
    if (!a) return;
    const v = articleView();
    const shareUrl = location.origin + location.pathname + '?story=' + id;
    v.innerHTML =
      '<article class="article">' +
        '<button class="back-link" data-home>← Back to News &amp; Updates</button>' +
        '<div class="news-meta"><span class="pill">' + esc(a.tag) + '</span><span class="date">' + esc(a.date) + '</span></div>' +
        '<h1>' + esc(a.title) + '</h1>' +
        '<div class="share-row"><span class="lbl">Share</span>' +
          '<a href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl) + '" target="_blank" rel="noopener">Facebook</a>' +
          '<a href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(a.title) + '&url=' + encodeURIComponent(shareUrl) + '" target="_blank" rel="noopener">X</a>' +
          '<a href="https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(shareUrl) + '" target="_blank" rel="noopener">LinkedIn</a>' +
          '<a href="https://wa.me/?text=' + encodeURIComponent(a.title + ' ' + shareUrl) + '" target="_blank" rel="noopener">WhatsApp</a>' +
          '<button class="copy" data-copy="' + esc(shareUrl) + '">Copy Link</button>' +
        '</div>' +
        '<div class="article-hero"><img src="' + a.hero + '" alt="' + esc(a.title) + '"></div>' +
        '<div class="article-body">' + a.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
        (a.gallery && a.gallery.length ? '<div class="article-gallery">' + a.gallery.map(function (s) { return '<img src="' + s + '" alt="' + esc(a.title) + '" loading="lazy" data-full>'; }).join('') + '</div>' : '') +
      '</article>' +
      '<div class="more-stories"><div class="divider"></div>' +
        '<h2 class="section-title" style="margin-bottom:26px;">More Stories</h2><div class="more-grid" id="more-grid"></div></div>';

    const more = $('#more-grid', v);
    NEWS.filter(function (n) { return n.id !== id; }).slice(0, 3).forEach(function (n) {
      const c = el('div', 'more-card');
      c.innerHTML = '<div class="thumb"><img src="' + n.hero + '" alt="' + esc(n.title) + '" loading="lazy"></div>' +
        '<div class="body"><div class="kicker">' + esc(n.tag) + '</div><h4>' + esc(n.title) + '</h4><div class="date">' + esc(n.date) + '</div></div>';
      c.addEventListener('click', function () { openArticle(n.id, true); });
      more.appendChild(c);
    });
    $('[data-copy]', v).addEventListener('click', function () {
      const btn = this;
      if (navigator.clipboard) navigator.clipboard.writeText(btn.dataset.copy).catch(function () {});
      btn.textContent = 'Link Copied'; setTimeout(function () { btn.textContent = 'Copy Link'; }, 1800);
    });
    $('[data-home]', v).addEventListener('click', function () { goHome(true); });
    $$('[data-full]', v).forEach(function (img) {
      img.addEventListener('click', function () { openLightbox(a); });
    });

    showView('article');
    if (push !== false) history.pushState({ view: 'article', id: id }, '', '?story=' + id);
  }

  function openCampaign(id, push) {
    const e = findEvent(id);
    if (!e) return;
    const v = campaignView();
    const c = e.campaign;
    let inner =
      '<div class="campaign">' +
        '<button class="back-link" data-home>← Back to Events</button>' +
        '<div class="eyebrow navy">Support This Event</div>' +
        '<h1>' + esc(e.title) + '</h1>' +
        '<p class="meta">' + esc(e.meta) + '</p>';
    if (c) {
      inner +=
        '<div class="campaign-hero"><img src="' + c.img + '" alt="' + esc(e.title) + '"></div>' +
        '<p class="desc">' + esc(c.desc) + '</p>' +
        '<div class="progress"><i style="width:' + c.pct + '%"></i></div>' +
        '<div class="progress-meta"><span>' + c.pct + '% funded</span><span>Ends ' + esc(c.end) + '</span></div>' +
        '<div class="campaign-actions"><a class="btn btn-navy" href="https://paystack.com/" target="_blank" rel="noopener">Donate</a>' +
          '<a class="btn btn-outline" href="mailto:info@pureedenfoundation.com?subject=Volunteering">Volunteer</a></div>';
    } else {
      inner +=
        '<p class="desc">' + esc(e.detail) + ' There is no fixed fundraising target for this event, but you can still support the work it represents.</p>' +
        '<div class="campaign-actions"><a class="btn btn-navy" href="https://paystack.com/" target="_blank" rel="noopener">Donate</a>' +
          (e.articleId ? '<button class="btn btn-outline" data-article="' + e.articleId + '">Read the Story</button>' : '') + '</div>';
    }
    inner += '<div class="divider" style="margin:44px 0 30px;"></div>' +
      '<h2 class="section-title" style="font-size:22px;margin-bottom:18px;">Other Events</h2><div class="events-list" id="campaign-others"></div></div>';
    v.innerHTML = inner;

    const others = $('#campaign-others', v);
    EVENTS.filter(function (x) { return x.id !== id; }).forEach(function (x) {
      const row = el('div', 'event');
      row.innerHTML = '<div class="event-head"><div class="event-date"><div class="d">' + esc(x.day) + '</div><div class="m">' + esc(x.month) + '</div></div>' +
        '<div class="event-sep"></div><div class="event-info"><h4>' + esc(x.title) + '</h4><div class="meta">' + esc(x.meta) + '</div></div>' +
        '<span class="pill">' + (x.type === 'upcoming' ? 'Upcoming' : 'Past') + '</span></div>';
      row.style.cursor = 'pointer';
      $('.event-head', row).addEventListener('click', function () { openCampaign(x.id, true); });
      others.appendChild(row);
    });
    const readBtn = $('[data-article]', v);
    if (readBtn) readBtn.addEventListener('click', function () { openArticle(readBtn.dataset.article, true); });
    $('[data-home]', v).addEventListener('click', function () { goHome(true); });

    showView('campaign');
    if (push !== false) history.pushState({ view: 'campaign', id: id }, '', '?event=' + id);
  }

  function goHome(push) {
    showView('home');
    if (push !== false) history.pushState({ view: 'home' }, '', location.pathname);
  }

  // Delegate event/campaign buttons rendered in the home events list
  function initDelegation() {
    document.addEventListener('click', function (e) {
      const camp = e.target.closest('[data-campaign]');
      if (camp) { e.preventDefault(); openCampaign(camp.dataset.campaign, true); return; }
      const art = e.target.closest('#home-view [data-article]');
      if (art) { e.preventDefault(); openArticle(art.dataset.article, true); return; }
    });
  }

  function routeFromUrl() {
    const p = new URLSearchParams(location.search);
    if (p.get('story') && findNews(p.get('story'))) { openArticle(p.get('story'), false); }
    else if (p.get('event') && findEvent(p.get('event'))) { openCampaign(p.get('event'), false); }
    else { showView('home'); }
  }
  window.addEventListener('popstate', function () { routeFromUrl(); });

  /* ---------------- Newsletter ---------------- */
  function initNewsletter() {
    const form = $('#newsletter-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = $('button', form);
      const input = $('input', form);
      if (!input.value) return;
      btn.textContent = 'Thank you!';
      input.value = '';
      setTimeout(function () { btn.textContent = 'Subscribe'; }, 2500);
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  function initReveal() {
    const els = $$('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) { return; }
    document.documentElement.classList.add('js-reveal');
    const reveal = function (e) { e.classList.add('in'); };
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.01, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
    // Safety net: never leave content invisible if the observer misses an element.
    setTimeout(function () { els.forEach(reveal); }, 3500);
  }

  /* ---------------- Footer year ---------------- */
  function initYear() { const y = $('#year'); if (y) y.textContent = new Date().getFullYear(); }

  /* ---------------- Boot ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initCarousel();
    renderNews();
    renderEvents();
    initEventTabs();
    renderTeam();
    renderSocial();
    renderGallery();
    initLightbox();
    initDelegation();
    initNewsletter();
    initReveal();
    initYear();
    routeFromUrl();
  });
})();
