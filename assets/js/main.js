/* ============================================
   main.js
   - content/site.json を読み込みページを構築
   - 未設定の項目は非表示
   ============================================ */

(function () {
  "use strict";

  /* ---------- SVG Icons (線画スタイル) ---------- */
  var ICONS = {
    book: '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="7" x2="16" y2="7"/><line x1="9" y1="11" x2="14" y2="11"/></svg>',

    brain: '<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 4.55 2.92A4.5 4.5 0 0 1 20 9.5a4.5 4.5 0 0 1-1.7 3.52A5 5 0 0 1 12 18"/><path d="M12 2a5 5 0 0 0-4.55 2.92A4.5 4.5 0 0 0 4 9.5a4.5 4.5 0 0 0 1.7 3.52A5 5 0 0 0 12 18"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/></svg>',

    users: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',

    message: '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="13" y2="12"/></svg>',

    smile: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',

    person: '<svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',

    mic: '<svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',

    pen: '<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',

    eye: '<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',

    handshake: '<svg viewBox="0 0 24 24"><path d="M11 17l-2 2-4-4 5-5 3 3"/><path d="M13 7l2-2 4 4-5 5-3-3"/><path d="M3 11l4-4"/><path d="M21 13l-4 4"/><path d="M1 13l5-5"/><path d="M23 11l-5 5"/></svg>',

    calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',

    monitor: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',

    free: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="6" x2="12" y2="12"/><line x1="12" y1="12" x2="16" y2="16"/></svg>',

    bookopen: '<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',

    check: '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',

    x_mark: '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',

    alert: '<svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',

    arrow: '<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
  };

  /* ---------- SNS Brand Icons (fill, no stroke) ---------- */
  var SNS_ICONS = {
    note_com: '<svg viewBox="0 0 24 24" fill="#41C9B4" stroke="none"><rect x="4" y="2" width="16" height="20" rx="2"/><rect x="7" y="6" width="10" height="2" rx="1" fill="white"/><rect x="7" y="10" width="10" height="2" rx="1" fill="white"/><rect x="7" y="14" width="6" height="2" rx="1" fill="white"/></svg>',
    x_social: '<svg viewBox="0 0 24 24" fill="#000000" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    line: '<svg viewBox="0 0 24 24" fill="#06C755" stroke="none"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>'
  };

  /* ---------- SNS Brand Images (外部画像) ---------- */
  var SNS_IMAGES = {
    note_com: "assets/images/icon-note.png",
    dokusyokai: "assets/images/icon-dokusyokai.png",
    kokucheese: "assets/images/icon-kokucheese.png"
  };

  /**
   * アイコンSVGを返す
   */
  function getIcon(name) {
    return ICONS[name] || ICONS["book"];
  }

  /**
   * SNSアイコンHTMLを返す（画像があれば<img>、なければSVG）
   */
  function getSnsIcon(name) {
    if (SNS_IMAGES[name]) {
      return '<img src="' + SNS_IMAGES[name] + '" alt="" class="sns__brand-img" loading="lazy">';
    }
    return SNS_ICONS[name] || "";
  }

  /**
   * テキストを安全にエスケープ
   */
  function escapeHtml(str) {
    if (!str) return "";
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * 改行を<br>に変換（エスケープ済みテキスト用）
   */
  function nl2br(str) {
    return escapeHtml(str).replace(/\n/g, "<br>");
  }

  /**
   * 限定的なHTMLタグのみ許可するサニタイザー
   * <a href="..." > のみ許可し、それ以外はエスケープ
   */
  function sanitizeHtml(str) {
    if (!str) return "";
    // まず全体をエスケープ
    var escaped = escapeHtml(str);
    // エスケープされた <a> タグを復元（href が # または https:// で始まるもののみ）
    // innerHTML は " を &quot; にしないブラウザが多いため両方に対応
    escaped = escaped.replace(
      /&lt;a\s+href=(?:&quot;|")(#[^"&]*|https?:\/\/[^"&]*)(?:&quot;|")&gt;/g,
      '<a href="$1">'
    );
    escaped = escaped.replace(/&lt;\/a&gt;/g, "</a>");
    // 改行を<br>に
    escaped = escaped.replace(/\n/g, "<br>");
    return escaped;
  }

  /**
   * セクション表示/非表示
   */
  function toggleSection(id, show) {
    var el = document.getElementById(id);
    if (el) {
      el.classList.toggle("is-hidden", !show);
    }
  }

  /**
   * 値が存在するかチェック
   */
  function hasValue(val) {
    if (val === null || val === undefined) return false;
    if (typeof val === "string") return val.trim().length > 0;
    if (Array.isArray(val)) return val.length > 0;
    return true;
  }

  /* ==========================================
     ページ構築
     ========================================== */

  function buildPage(data) {
    // --- Header ---
    buildHeader(data);

    // --- Hero ---
    buildHero(data);

    // --- Intro ---
    buildIntro(data);

    // --- Recommended ---
    buildRecommended(data);

    // --- Reassurance ---
    buildReassurance(data);

    // --- Section Images ---
    buildSectionImages(data);

    // --- Growth ---
    buildGrowth(data);

    // --- Flow ---
    buildFlow(data);

    // --- Schedule (開催概要 - 統合版) ---
    buildBasics(data);

    // --- Book Rules ---
    buildBookRules(data);

    // --- Rules ---
    buildRules(data);

    // --- FAQ ---
    buildFaq(data);

    // --- SNS ---
    buildSns(data);

    // --- CTA Bottom ---
    buildCtaBottom(data);

    // --- Footer ---
    buildFooter(data);

    // --- Mobile CTA ---
    buildMobileCta(data);

    // --- Navigation ---
    initNavigation();

    // Remove loading state
    document.body.classList.remove("is-loading");
  }

  /* ---------- Header ---------- */
  function buildHeader(data) {
    var header = data.header;
    if (!header) return;

    // Logo text
    var logoTextEl = document.getElementById("header-logo-text");
    if (logoTextEl && hasValue(header.title)) {
      logoTextEl.textContent = header.title;
    }

    // Navigation items
    var navListEl = document.getElementById("nav-list");
    if (navListEl && hasValue(header.nav)) {
      navListEl.innerHTML = header.nav
        .map(function (item) {
          return (
            '<li class="nav__item">' +
            '<a href="' + escapeHtml(item.href) + '" class="nav__link">' +
            escapeHtml(item.label) +
            "</a></li>"
          );
        })
        .join("");
    }
  }

  /* ---------- Navigation (hamburger toggle) ---------- */
  function initNavigation() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("nav");
    if (!toggle || !nav) return;

    // Toggle menu open/close
    toggle.addEventListener("click", function () {
      var isOpen = toggle.classList.toggle("is-active");
      nav.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close on nav link click
    nav.addEventListener("click", function (e) {
      if (e.target.closest(".nav__link")) {
        toggle.classList.remove("is-active");
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });

    // Close on resize to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1200) {
        toggle.classList.remove("is-active");
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }

  /* ---------- Hero ---------- */
  function buildHero(data) {
    var hero = data.hero;
    if (!hero) {
      toggleSection("hero", false);
      return;
    }

    var applyUrl = data.links && data.links.apply_url ? data.links.apply_url : "#";

    // Headline
    var headlineEl = document.getElementById("hero-headline");
    if (headlineEl && hasValue(hero.headline)) {
      headlineEl.innerHTML = nl2br(hero.headline);
    }

    // Subheadline
    var subEl = document.getElementById("hero-subheadline");
    if (subEl && hasValue(hero.subheadline)) {
      subEl.textContent = hero.subheadline;
    }

    // Badges
    var badgesEl = document.getElementById("hero-badges");
    if (badgesEl && hasValue(hero.badges)) {
      badgesEl.innerHTML = hero.badges
        .map(function (badge) {
          return '<span class="hero__badge"><span class="badge-dot"></span>' + escapeHtml(badge) + "</span>";
        })
        .join("");
    } else if (badgesEl) {
      badgesEl.classList.add("is-hidden");
    }

    // CTA
    var ctaEl = document.getElementById("hero-cta");
    if (ctaEl && hasValue(hero.cta_text)) {
      ctaEl.textContent = hero.cta_text;
      ctaEl.href = applyUrl;
      ctaEl.setAttribute("target", "_blank");
      ctaEl.setAttribute("rel", "noopener noreferrer");
    }

    // Hero image — if set, show photo and hide the logo
    var heroImageEl = document.getElementById("hero-image");
    var heroLogoEl = document.querySelector(".hero__logo-img");
    if (heroImageEl && data.images && hasValue(data.images.hero)) {
      heroImageEl.src = data.images.hero;
      heroImageEl.classList.remove("is-hidden");
      if (heroLogoEl) heroLogoEl.classList.add("is-hidden");
    }
  }

  /* ---------- Intro ---------- */
  function buildIntro(data) {
    var intro = data.intro;
    if (!intro || (!hasValue(intro.title) && !hasValue(intro.body))) {
      toggleSection("intro", false);
      return;
    }

    var titleEl = document.getElementById("intro-title");
    if (titleEl && hasValue(intro.title)) {
      titleEl.textContent = intro.title;
    }

    var bodyEl = document.getElementById("intro-body");
    if (bodyEl && hasValue(intro.body)) {
      bodyEl.innerHTML = nl2br(intro.body);
    }
  }

  /* ---------- Recommended ---------- */
  function buildRecommended(data) {
    var rec = data.recommended;
    if (!rec || !hasValue(rec.items)) {
      toggleSection("recommended", false);
      return;
    }

    var titleEl = document.getElementById("recommended-title");
    if (titleEl && hasValue(rec.title)) {
      titleEl.textContent = rec.title;
    }

    var listEl = document.getElementById("recommended-list");
    if (listEl) {
      listEl.innerHTML = rec.items
        .map(function (item) {
          return (
            '<li class="recommended__item">' +
            '<span class="icon">' + getIcon(item.icon) + "</span>" +
            '<span class="recommended__text">' + escapeHtml(item.text) + "</span>" +
            "</li>"
          );
        })
        .join("");
    }
  }

  /* ---------- Reassurance ---------- */
  function buildReassurance(data) {
    var sec = data.reassurance;
    if (!sec || !hasValue(sec.items)) {
      toggleSection("reassurance", false);
      return;
    }

    var titleEl = document.getElementById("reassurance-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    var listEl = document.getElementById("reassurance-list");
    if (listEl) {
      listEl.innerHTML = sec.items
        .map(function (item) {
          var statHtml = "";
          if (hasValue(item.stat)) {
            statHtml =
              '<span class="reassurance__stat">' + escapeHtml(item.stat) + "</span>" +
              (hasValue(item.stat_label)
                ? '<span class="reassurance__stat-label">' + escapeHtml(item.stat_label) + "</span>"
                : "");
          }
          return (
            '<div class="reassurance__item">' +
            '<span class="icon">' + getIcon(item.icon) + "</span>" +
            '<div class="reassurance__item-content">' +
            '<h3 class="reassurance__item-title">' + escapeHtml(item.title) + "</h3>" +
            '<p class="reassurance__item-body">' + escapeHtml(item.body) + "</p>" +
            statHtml +
            "</div>" +
            "</div>"
          );
        })
        .join("");
    }
  }

  /* ---------- Growth ---------- */
  function buildGrowth(data) {
    var sec = data.growth;
    if (!sec || !hasValue(sec.items)) {
      toggleSection("growth", false);
      return;
    }

    var titleEl = document.getElementById("growth-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    var listEl = document.getElementById("growth-list");
    if (listEl) {
      listEl.innerHTML = sec.items
        .map(function (item, index) {
          return (
            '<div class="growth__item">' +
            '<span class="growth__number">' + (index + 1) + "</span>" +
            '<div class="growth__item-content">' +
            '<h3 class="growth__item-title">' + escapeHtml(item.title) + "</h3>" +
            '<p class="growth__item-body">' + escapeHtml(item.body) + "</p>" +
            "</div>" +
            "</div>"
          );
        })
        .join("");
    }
  }

  /* ---------- Flow ---------- */
  function buildFlow(data) {
    var sec = data.flow;
    if (!sec || !hasValue(sec.steps)) {
      toggleSection("flow", false);
      return;
    }

    var titleEl = document.getElementById("flow-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    // Flow image
    var imgWrapper = document.getElementById("flow-image");
    if (imgWrapper) {
      if (data.images && hasValue(data.images.flow)) {
        imgWrapper.innerHTML =
          '<img src="' + escapeHtml(data.images.flow) + '" alt="イベントの流れ" loading="lazy">';
      } else {
        imgWrapper.classList.add("is-hidden");
      }
    }

    // Steps
    var stepsEl = document.getElementById("flow-steps");
    if (stepsEl) {
      stepsEl.innerHTML = sec.steps
        .map(function (step) {
          return (
            '<li class="flow__step">' +
            '<span class="flow__step-number">' + step.number + "</span>" +
            '<div class="flow__step-content">' +
            '<h3 class="flow__step-title">' + escapeHtml(step.title) + "</h3>" +
            '<p class="flow__step-desc">' + escapeHtml(step.description) + "</p>" +
            "</div>" +
            "</li>"
          );
        })
        .join("");
    }

    // Note
    var noteEl = document.getElementById("flow-note");
    if (noteEl && hasValue(sec.note)) {
      noteEl.textContent = sec.note;
    } else if (noteEl) {
      noteEl.classList.add("is-hidden");
    }
  }

  /* ---------- Book Rules ---------- */
  function buildBookRules(data) {
    var sec = data.book_rules;
    if (!sec) {
      toggleSection("book-rules", false);
      return;
    }

    var titleEl = document.getElementById("book-rules-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    var leadEl = document.getElementById("book-rules-lead");
    if (leadEl && hasValue(sec.lead)) {
      leadEl.textContent = sec.lead;
    } else if (leadEl) {
      leadEl.classList.add("is-hidden");
    }

    var contentEl = document.getElementById("book-rules-content");
    if (!contentEl) return;

    var html = "";

    // 1冊のみルール
    if (sec.one_book_only) {
      html += '<div class="book-rules__block card">';
      html += '<h3 class="book-rules__block-title">' +
        '<span class="icon icon--sm">' + getIcon("bookopen") + '</span>' +
        'お持ちいただく本は1冊のみ</h3>';
      if (hasValue(sec.one_book_reason)) {
        html += '<p class="book-rules__text">' + escapeHtml(sec.one_book_reason) + '</p>';
      }
      html += '</div>';
    }

    // 対象ジャンル
    if (hasValue(sec.allowed_genres) || hasValue(sec.disallowed_genres)) {
      html += '<div class="book-rules__block card">';
      html += '<h3 class="book-rules__block-title">' +
        '<span class="icon icon--sm">' + getIcon("book") + '</span>' +
        '対象ジャンル</h3>';

      if (hasValue(sec.allowed_genres)) {
        html += '<div class="book-rules__genre-group">';
        html += '<span class="book-rules__genre-label book-rules__genre-label--ok">対象</span>';
        html += '<ul class="book-rules__genre-list">';
        sec.allowed_genres.forEach(function (g) {
          html += '<li class="book-rules__genre-item book-rules__genre-item--ok">' +
            '<span class="icon icon--xs">' + getIcon("check") + '</span>' +
            escapeHtml(g) + '</li>';
        });
        html += '</ul></div>';
      }

      if (hasValue(sec.disallowed_genres)) {
        html += '<div class="book-rules__genre-group">';
        html += '<span class="book-rules__genre-label book-rules__genre-label--ng">対象外</span>';
        html += '<ul class="book-rules__genre-list">';
        sec.disallowed_genres.forEach(function (g) {
          html += '<li class="book-rules__genre-item book-rules__genre-item--ng">' +
            '<span class="icon icon--xs">' + getIcon("x_mark") + '</span>' +
            escapeHtml(g) + '</li>';
        });
        html += '</ul></div>';
      }

      if (hasValue(sec.fiction_exception_note)) {
        html += '<p class="book-rules__exception">' +
          '<span class="icon icon--xs">' + getIcon("alert") + '</span>' +
          escapeHtml(sec.fiction_exception_note) + '</p>';
      }

      html += '</div>';
    }

    // 定義
    if (sec.definitions && (hasValue(sec.definitions.business) || hasValue(sec.definitions.self_help))) {
      html += '<div class="book-rules__block card">';
      html += '<h3 class="book-rules__block-title">' +
        '<span class="icon icon--sm">' + getIcon("eye") + '</span>' +
        'ジャンルの目安</h3>';

      if (hasValue(sec.definitions.business)) {
        html += '<div class="book-rules__def">';
        html += '<h4 class="book-rules__def-title">ビジネス書とは</h4>';
        html += '<p class="book-rules__text">' + escapeHtml(sec.definitions.business) + '</p>';
        html += '</div>';
      }
      if (hasValue(sec.definitions.self_help)) {
        html += '<div class="book-rules__def">';
        html += '<h4 class="book-rules__def-title">自己啓発書とは</h4>';
        html += '<p class="book-rules__text">' + escapeHtml(sec.definitions.self_help) + '</p>';
        html += '</div>';
      }

      html += '</div>';
    }

    // OK/NG例
    if (sec.examples && (hasValue(sec.examples.ok) || hasValue(sec.examples.ng))) {
      html += '<div class="book-rules__block card">';
      html += '<h3 class="book-rules__block-title">' +
        '<span class="icon icon--sm">' + getIcon("book") + '</span>' +
        '具体例</h3>';
      html += '<div class="book-rules__examples">';

      if (hasValue(sec.examples.ok)) {
        html += '<div class="book-rules__example-col">';
        html += '<h4 class="book-rules__example-heading book-rules__example-heading--ok">OK</h4>';
        html += '<ul class="book-rules__example-list">';
        sec.examples.ok.forEach(function (ex) {
          html += '<li>' + escapeHtml(ex) + '</li>';
        });
        html += '</ul></div>';
      }

      if (hasValue(sec.examples.ng)) {
        html += '<div class="book-rules__example-col">';
        html += '<h4 class="book-rules__example-heading book-rules__example-heading--ng">NG</h4>';
        html += '<ul class="book-rules__example-list">';
        sec.examples.ng.forEach(function (ex) {
          html += '<li>' + escapeHtml(ex) + '</li>';
        });
        html += '</ul></div>';
      }

      html += '</div></div>';
    }

    contentEl.innerHTML = html;
  }

  /* ---------- Rules ---------- */
  function buildRules(data) {
    var sec = data.rules;
    if (!sec) {
      toggleSection("rules", false);
      return;
    }

    var titleEl = document.getElementById("rules-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    // Prohibited list
    var listEl = document.getElementById("rules-prohibited");
    if (listEl && hasValue(sec.prohibited)) {
      listEl.innerHTML = sec.prohibited
        .map(function (item) {
          return "<li>" + escapeHtml(item) + "</li>";
        })
        .join("");
    }

    // Notes
    var notesEl = document.getElementById("rules-notes");
    if (notesEl && hasValue(sec.notes)) {
      notesEl.innerHTML = sec.notes
        .map(function (note) {
          return '<p class="rules__note-item">' + escapeHtml(note) + "</p>";
        })
        .join("");
    }
  }

  /* ---------- Basics (開催概要 - 統合版) ---------- */
  function buildBasics(data) {
    var sec = data.basics;
    if (!sec || !hasValue(sec.items)) {
      toggleSection("schedule", false);
      return;
    }

    var applyUrl = data.links && data.links.apply_url ? data.links.apply_url : "#";

    var titleEl = document.getElementById("schedule-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    var dlEl = document.getElementById("basics-list");
    if (dlEl) {
      dlEl.innerHTML = sec.items
        .map(function (item) {
          var noteHtml = hasValue(item.note)
            ? '<span class="basics__dd-note">' + escapeHtml(item.note) + "</span>"
            : "";
          return (
            '<dt class="basics__dt">' + escapeHtml(item.label) + "</dt>" +
            '<dd class="basics__dd">' + escapeHtml(item.value) + noteHtml + "</dd>"
          );
        })
        .join("");
    }

    // Note
    var noteEl = document.getElementById("schedule-note");
    if (noteEl && hasValue(sec.note)) {
      noteEl.textContent = sec.note;
    } else if (noteEl) {
      noteEl.classList.add("is-hidden");
    }

    // CTA
    var ctaEl = document.getElementById("schedule-cta");
    if (ctaEl && hasValue(sec.cta_text)) {
      ctaEl.textContent = sec.cta_text;
      ctaEl.href = applyUrl;
      ctaEl.setAttribute("target", "_blank");
      ctaEl.setAttribute("rel", "noopener noreferrer");
    }
  }

  /* ---------- FAQ ---------- */
  function buildFaq(data) {
    var sec = data.faq;
    if (!sec || !hasValue(sec.items)) {
      toggleSection("faq", false);
      return;
    }

    var titleEl = document.getElementById("faq-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    var listEl = document.getElementById("faq-list");
    if (listEl) {
      listEl.innerHTML = sec.items
        .map(function (item) {
          return (
            '<details class="faq__item">' +
            "<summary>Q. " + escapeHtml(item.q) + "</summary>" +
            '<div class="faq__answer">' + sanitizeHtml(item.a) + "</div>" +
            "</details>"
          );
        })
        .join("");
    }
  }

  /* ---------- SNS ---------- */
  function buildSns(data) {
    var sec = data.sns;
    if (!sec || !hasValue(sec.items)) {
      toggleSection("sns", false);
      return;
    }

    var titleEl = document.getElementById("sns-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    var bodyEl = document.getElementById("sns-body");
    if (bodyEl && hasValue(sec.body)) {
      bodyEl.innerHTML = nl2br(sec.body);
    } else if (bodyEl) {
      bodyEl.classList.add("is-hidden");
    }

    var listEl = document.getElementById("sns-list");
    if (listEl) {
      listEl.innerHTML = sec.items
        .map(function (item) {
          var iconHtml = getSnsIcon(item.icon);
          return (
            '<a href="' + escapeHtml(item.url) + '" class="sns__item" target="_blank" rel="noopener noreferrer">' +
            '<span class="sns__item-icon">' + iconHtml + '</span>' +
            '<div class="sns__item-content">' +
            '<span class="sns__item-label">' + escapeHtml(item.label) + '</span>' +
            '<span class="sns__item-text">' + escapeHtml(item.text) + '</span>' +
            '</div>' +
            '</a>'
          );
        })
        .join("");
    }
  }

  /* ---------- Section Images ---------- */
  function buildSectionImages(data) {
    var images = data.images;
    if (!images) return;

    var mapping = [
      { key: "reassurance", elId: "reassurance-image", alt: "安心ポイント" },
      { key: "growth", elId: "growth-image", alt: "成長できる理由" },
      { key: "flow", elId: "flow-image", alt: "発表の流れ" },
      { key: "cta", elId: "cta-image", alt: "参加イメージ" }
    ];

    mapping.forEach(function (item) {
      var wrapper = document.getElementById(item.elId);
      if (!wrapper) return;
      if (hasValue(images[item.key])) {
        wrapper.innerHTML =
          '<img src="' + escapeHtml(images[item.key]) + '" alt="' + item.alt + '" class="section__image" loading="lazy">';
      } else {
        wrapper.classList.add("is-hidden");
      }
    });
  }

  /* ---------- CTA Bottom ---------- */
  function buildCtaBottom(data) {
    var sec = data.cta_bottom;
    if (!sec) {
      toggleSection("cta-bottom", false);
      return;
    }

    var applyUrl = data.links && data.links.apply_url ? data.links.apply_url : "#";

    var titleEl = document.getElementById("cta-bottom-title");
    if (titleEl && hasValue(sec.title)) {
      titleEl.textContent = sec.title;
    }

    var bodyEl = document.getElementById("cta-bottom-body");
    if (bodyEl && hasValue(sec.body)) {
      bodyEl.innerHTML = nl2br(sec.body);
    }

    var btnEl = document.getElementById("cta-bottom-btn");
    if (btnEl && hasValue(sec.cta_text)) {
      btnEl.textContent = sec.cta_text;
      btnEl.href = applyUrl;
      btnEl.setAttribute("target", "_blank");
      btnEl.setAttribute("rel", "noopener noreferrer");
    }
  }

  /* ---------- Footer ---------- */
  function buildFooter(data) {
    var sec = data.footer;
    if (!sec) return;

    var noteEl = document.getElementById("footer-note");
    if (noteEl) {
      var html = "";
      if (hasValue(sec.message)) {
        html += "<p>" + escapeHtml(sec.message) + "</p>";
      }
      if (data.links && hasValue(data.links.note_url) && hasValue(sec.note_link_text)) {
        html +=
          '<a href="' + escapeHtml(data.links.note_url) +
          '" class="footer__note-link" target="_blank" rel="noopener noreferrer">' +
          escapeHtml(sec.note_link_text) +
          "</a>";
      }
      noteEl.innerHTML = html;

      if (!html) {
        noteEl.classList.add("is-hidden");
      }
    }

    var copyrightEl = document.getElementById("footer-copyright");
    if (copyrightEl && hasValue(sec.copyright)) {
      var year = new Date().getFullYear();
      copyrightEl.textContent = "\u00A9 " + year + " " + sec.copyright;
    }
  }

  /* ---------- Mobile CTA ---------- */
  function buildMobileCta(data) {
    var applyUrl = data.links && data.links.apply_url ? data.links.apply_url : "#";
    var ctaText = (data.hero && data.hero.cta_text) || "参加申込み";

    var btnEl = document.getElementById("mobile-cta-btn");
    if (btnEl) {
      btnEl.textContent = ctaText;
      btnEl.href = applyUrl;
      btnEl.setAttribute("target", "_blank");
      btnEl.setAttribute("rel", "noopener noreferrer");
    }

    // Show mobile CTA only on small screens after scrolling past hero
    if (window.innerWidth < 640) {
      setupMobileCta();
    }

    window.addEventListener("resize", function () {
      if (window.innerWidth < 640) {
        setupMobileCta();
      } else {
        hideMobileCta();
      }
    });
  }

  var mobileCTAActive = false;

  function setupMobileCta() {
    if (mobileCTAActive) return;
    mobileCTAActive = true;

    document.body.classList.add("has-mobile-cta");

    window.addEventListener("scroll", onScrollMobileCta, { passive: true });
    onScrollMobileCta();
  }

  function hideMobileCta() {
    mobileCTAActive = false;
    document.body.classList.remove("has-mobile-cta");
    var el = document.getElementById("mobile-cta");
    if (el) {
      el.classList.remove("is-visible");
      el.setAttribute("aria-hidden", "true");
    }
    window.removeEventListener("scroll", onScrollMobileCta);
  }

  function onScrollMobileCta() {
    var heroSection = document.getElementById("hero");
    var mobileCta = document.getElementById("mobile-cta");
    if (!heroSection || !mobileCta) return;

    var heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom < 0) {
      mobileCta.classList.add("is-visible");
      mobileCta.setAttribute("aria-hidden", "false");
    } else {
      mobileCta.classList.remove("is-visible");
      mobileCta.setAttribute("aria-hidden", "true");
    }
  }

  /* ---------- Back to Top ---------- */
  function initBackToTop() {
    var btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 600) {
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
      }
    }, { passive: true });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ==========================================
     初期化
     ========================================== */
  /**
   * 本開きローダーを閉じる
   */
  function dismissBookLoader() {
    var loader = document.getElementById("book-loader");
    if (!loader) return;
    // アニメーション完了を待ってからフェードアウト
    setTimeout(function () {
      loader.classList.add("is-done");
      loader.addEventListener("transitionend", function () {
        loader.remove();
      });
    }, 1800);
  }

  function init() {
    document.body.classList.add("is-loading");

    fetch("content/site.json")
      .then(function (res) {
        if (!res.ok) throw new Error("Failed to load site.json: " + res.status);
        return res.json();
      })
      .then(function (data) {
        buildPage(data);
        initScrollAnimations();
        initBackToTop();
        dismissBookLoader();
      })
      .catch(function (err) {
        console.error("Error loading content:", err);
        document.body.classList.remove("is-loading");
        dismissBookLoader();
      });
  }

  /* ==========================================
     Scroll Fade-in Animations
     ========================================== */
  function initScrollAnimations() {
    // Add fade-in class to sections and key elements
    var sections = document.querySelectorAll(".section");
    sections.forEach(function (section) {
      // Add fade-in to section titles
      var title = section.querySelector(".section__title");
      if (title) title.classList.add("fade-in");

      // Add fade-in-stagger to card grids and lists
      var staggerTargets = section.querySelectorAll(
        ".card-grid, .flow__steps, .faq__list, .sns__list, .book-rules__content"
      );
      staggerTargets.forEach(function (el) {
        el.classList.add("fade-in-stagger");
      });

      // Add fade-in to standalone content blocks
      var fadeTargets = section.querySelectorAll(
        ".intro__body, .card, .hero__cta, .flow__note, .book-rules__lead, .cta-bottom__body, .schedule__note, .section__image-wrapper"
      );
      fadeTargets.forEach(function (el) {
        el.classList.add("fade-in");
      });
    });

    // Hero elements
    var heroHeadline = document.querySelector(".hero__headline");
    var heroSub = document.querySelector(".hero__subheadline");
    var heroBadges = document.querySelector(".hero__badges");
    var heroCta = document.querySelector(".hero__cta");
    [heroHeadline, heroSub, heroBadges, heroCta].forEach(function (el) {
      if (el) el.classList.add("fade-in");
    });

    // Observe all fade-in elements
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      document.querySelectorAll(".fade-in, .fade-in-stagger").forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything immediately
      document.querySelectorAll(".fade-in, .fade-in-stagger").forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
