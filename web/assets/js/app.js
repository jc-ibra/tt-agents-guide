/* ===== Manual GLPI — Trantor Technologies ===== */
(() => {
  "use strict";

  const ICONS = {
    home: 'M3 11l9-7 9 7M5 10v9h5v-6h4v6h5v-9',
    book: 'M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z M19 3v18',
    layers: 'M12 3l9 5-9 5-9-5 9-5z M3 12l9 5 9-5 M3 17l9 5 9-5',
    info: 'M12 22a10 10 0 100-20 10 10 0 000 20z M12 11v5 M12 8h.01',
    login: 'M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4 M10 17l5-5-5-5 M15 12H3',
    ticket: 'M3 9a2 2 0 012-2h14a2 2 0 012 2 2 2 0 000 4 2 2 0 01-2 2H5a2 2 0 01-2-2 2 2 0 000-4z M13 7v10',
    activity: 'M22 12h-4l-3 9L9 3l-3 9H2',
    bookmark: 'M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z',
    table: 'M3 5h18v14H3z M3 10h18 M9 5v14',
    clock: 'M12 22a10 10 0 100-20 10 10 0 000 20z M12 7v5l3 2',
    'arrow-up': 'M12 19V5 M6 11l6-6 6 6',
    zap: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
    user: 'M20 21a8 8 0 10-16 0 M12 11a4 4 0 100-8 4 4 0 000 8z',
    box: 'M21 8l-9-5-9 5 9 5 9-5z M3 8v8l9 5 9-5V8',
    'home-2': 'M3 11l9-7 9 7M5 10v9h14v-9',
    camera: 'M4 8a2 2 0 012-2h2l1.5-2h5L18 6h2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8z M12 17a3.5 3.5 0 100-7 3.5 3.5 0 000 7z',
  };
  const icon = (name, size = 16) =>
    `<svg class="nav-icon" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${ICONS[name] || 'M12 12h.01'}"/></svg>`;

  let manifest = null;
  let flat = [];            // lista plana de items en orden
  const cache = new Map();  // id -> markdown text
  let searchIndex = [];     // {id, title, crumb, text}
  const el = (id) => document.getElementById(id);

  const slugify = (s) =>
    s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);

  const escapeHtml = (s) =>
    s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // ---------- Arranque ----------
  async function init() {
    try {
      manifest = await (await fetch("manifest.json", { cache: "no-cache" })).json();
    } catch (e) {
      el("content").innerHTML = `<div class="loading">No se pudo cargar <code>manifest.json</code>.<br>¿Estás sirviendo el sitio con un servidor local? (ver README/CLAUDE.md)</div>`;
      return;
    }
    applyBranding();
    buildNav();
    buildSearchIndex();      // en segundo plano
    window.addEventListener("hashchange", route);
    route();
    wireUI();
    setupLightbox();
  }

  function applyBranding() {
    const s = manifest.site || {};
    if (s.brand) el("brandName").textContent = s.brand;
    if (s.subtitle) el("brandSub").textContent = s.subtitle;
    if (s.brand) el("brandBadge").textContent = s.brand.split(/\s+/).map(w => w[0]).join("").slice(0, 2);
    if (s.platformUrl) { el("platformLink").href = s.platformUrl; }
    document.title = `${s.title || "Manual"} — ${s.brand || ""}`.trim();
  }

  function buildNav() {
    flat = [];
    const nav = el("nav");
    nav.innerHTML = "";
    for (const group of manifest.groups) {
      const g = document.createElement("div");
      g.className = "nav-group";
      g.innerHTML = `<div class="nav-group-label">${escapeHtml(group.label)}</div>`;
      for (const item of group.items) {
        flat.push(item);
        const a = document.createElement("a");
        a.className = "nav-item";
        a.href = `#${item.id}`;
        a.dataset.id = item.id;
        a.innerHTML = `${icon(item.icon)}<span>${escapeHtml(item.title)}</span>`;
        g.appendChild(a);
      }
      nav.appendChild(g);
    }
  }

  const contentUrl = (file) => `${manifest.site.contentBase}/${file}`;

  async function loadDoc(id) {
    if (cache.has(id)) return cache.get(id);
    const item = flat.find((i) => i.id === id);
    if (!item) return null;
    const txt = await (await fetch(contentUrl(item.file), { cache: "no-cache" })).text();
    cache.set(id, txt);
    return txt;
  }

  // ---------- Ruteo ----------
  function parseHash() {
    let h = location.hash.replace(/^#\/?/, "");
    let anchor = "";
    const t = h.split("~");
    h = t[0]; anchor = t[1] || "";
    if (!h || !flat.find((i) => i.id === h)) h = manifest.home || flat[0].id;
    return { id: h, anchor };
  }

  async function route() {
    const { id, anchor } = parseHash();
    document.querySelectorAll(".nav-item").forEach((a) =>
      a.classList.toggle("active", a.dataset.id === id));
    document.body.classList.remove("nav-open");

    const md = await loadDoc(id);
    if (md == null) { el("content").innerHTML = `<div class="loading">Documento no encontrado.</div>`; return; }
    renderDoc(id, md);

    if (anchor) {
      const target = document.getElementById(anchor);
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }

  // ---------- Render ----------
  function renderDoc(id, md) {
    const content = el("content");
    marked.setOptions({ gfm: true, breaks: false });
    content.innerHTML = marked.parse(md);
    postProcess(content, id);
    buildToc(content);
    buildDocFooter(content, id);
  }

  function postProcess(root, id) {
    // Imágenes relativas -> contentBase; capturas placeholder
    root.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src") || "";
      if (!/^https?:|^\//.test(src)) img.setAttribute("src", `${manifest.site.contentBase}/${src}`);
      img.setAttribute("loading", "lazy");
      img.classList.add("zoomable");
      img.setAttribute("title", "Clic para ampliar");
    });

    // Blockquotes que son marcadores de captura -> placeholder visual
    root.querySelectorAll("blockquote").forEach((bq) => {
      const txt = bq.textContent.trim();
      const m = txt.match(/^\[?\s*insertar captura\s*:\s*(.+?)\]?\s*$/i);
      if (m) {
        const ph = document.createElement("div");
        ph.className = "shot-placeholder";
        ph.innerHTML =
          `<span class="shot-ico">${icon("camera", 22)}</span>` +
          `<span><span class="shot-label">Captura pendiente</span><br>${escapeHtml(m[1])}</span>`;
        bq.replaceWith(ph);
      }
    });

    // Enlaces internos a otros .md -> ruteo SPA
    root.querySelectorAll("a[href]").forEach((a) => {
      const href = a.getAttribute("href");
      const mdMatch = href && href.match(/(?:^|\/)([\w-]+)\.md(?:#(.+))?$/);
      if (mdMatch) {
        const targetId = flat.find((i) => i.file === `${mdMatch[1]}.md` || i.id === mdMatch[1]);
        if (targetId) {
          a.setAttribute("href", `#${targetId.id}${mdMatch[2] ? "~" + mdMatch[2] : ""}`);
        }
      } else if (href && /^https?:/.test(href)) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      }
    });

    // IDs en encabezados + anchor links
    const seen = {};
    root.querySelectorAll("h2, h3").forEach((h) => {
      let s = slugify(h.textContent);
      if (seen[s]) s = `${s}-${++seen[s]}`; else seen[s] = 1;
      h.id = s;
      const a = document.createElement("a");
      a.className = "anchor-link";
      a.href = `#${id}~${s}`;
      a.textContent = "#";
      a.setAttribute("aria-hidden", "true");
      h.appendChild(a);
    });
  }

  function buildToc(root) {
    const toc = el("toc");
    const heads = [...root.querySelectorAll("h2, h3")];
    if (heads.length < 2) { toc.innerHTML = ""; return; }
    let html = `<div class="toc-title">En esta página</div>`;
    for (const h of heads) {
      const label = h.textContent.replace(/#$/, "").trim();
      html += `<a href="#${h.id}" class="${h.tagName.toLowerCase()}" data-tid="${h.id}">${escapeHtml(label)}</a>`;
    }
    toc.innerHTML = html;
    toc.querySelectorAll("a").forEach((a) => a.addEventListener("click", (ev) => {
      ev.preventDefault();
      document.getElementById(a.dataset.tid)?.scrollIntoView({ behavior: "smooth" });
    }));
    setupScrollSpy(heads);
  }

  let spyHandler = null;
  function setupScrollSpy(heads) {
    if (spyHandler) window.removeEventListener("scroll", spyHandler);
    const links = [...el("toc").querySelectorAll("a")];
    spyHandler = () => {
      const top = 80;
      let current = heads[0];
      for (const h of heads) { if (h.getBoundingClientRect().top <= top) current = h; }
      links.forEach((l) => l.classList.toggle("active", l.dataset.tid === current.id));
    };
    window.addEventListener("scroll", spyHandler, { passive: true });
    spyHandler();
  }

  function buildDocFooter(root, id) {
    const idx = flat.findIndex((i) => i.id === id);
    const prev = flat[idx - 1], next = flat[idx + 1];
    const foot = document.createElement("div");
    foot.className = "doc-footer";
    if (prev) foot.innerHTML += `<a class="doc-nav-btn prev" href="#${prev.id}"><span class="dn-dir">← Anterior</span><span class="dn-title">${escapeHtml(prev.title)}</span></a>`;
    if (next) foot.innerHTML += `<a class="doc-nav-btn next" href="#${next.id}"><span class="dn-dir">Siguiente →</span><span class="dn-title">${escapeHtml(next.title)}</span></a>`;
    if (prev || next) root.appendChild(foot);
  }

  // ---------- Buscador ----------
  async function buildSearchIndex() {
    for (const group of manifest.groups) {
      for (const item of group.items) {
        try {
          const md = await loadDoc(item.id);
          const text = md.replace(/```[\s\S]*?```/g, " ").replace(/[#>*_`|-]+/g, " ").replace(/\s+/g, " ").trim();
          searchIndex.push({ id: item.id, title: item.title, crumb: group.label, text });
        } catch (_) {}
      }
    }
  }

  function search(q) {
    const terms = q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const results = [];
    for (const doc of searchIndex) {
      const hayT = norm(doc.title), hayX = norm(doc.text);
      let score = 0, pos = -1;
      for (const t of terms) {
        if (hayT.includes(t)) score += 5;
        const p = hayX.indexOf(t);
        if (p >= 0) { score += 1; if (pos < 0) pos = p; }
      }
      if (score > 0) results.push({ doc, score, pos });
    }
    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 8).map((r) => ({ ...r.doc, snippet: makeSnippet(r.doc.text, r.pos, terms) }));
  }

  function makeSnippet(text, pos, terms) {
    if (pos < 0) pos = 0;
    const start = Math.max(0, pos - 40);
    let snip = text.slice(start, start + 160);
    if (start > 0) snip = "…" + snip;
    snip = escapeHtml(snip);
    for (const t of terms) snip = snip.replace(new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"), "<mark>$1</mark>");
    return snip;
  }

  function renderSearch(q) {
    const box = el("searchResults");
    const results = search(q);
    if (!q.trim()) { box.hidden = true; return; }
    if (!results.length) { box.innerHTML = `<div class="search-empty">Sin resultados para “${escapeHtml(q)}”.</div>`; box.hidden = false; return; }
    box.innerHTML = results.map((r, i) =>
      `<a class="search-result${i === 0 ? " active" : ""}" href="#${r.id}">
        <div class="sr-crumb">${escapeHtml(r.crumb)}</div>
        <div class="sr-title">${escapeHtml(r.title)}</div>
        <div class="sr-snippet">${r.snippet}</div>
      </a>`).join("");
    box.hidden = false;
    box.querySelectorAll(".search-result").forEach((a) => a.addEventListener("click", () => closeSearch()));
  }

  function closeSearch() { el("searchResults").hidden = true; el("searchInput").blur(); }

  // ---------- Lightbox (ampliar imágenes) ----------
  function setupLightbox() {
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML =
      `<button class="lb-close" aria-label="Cerrar">&times;</button>` +
      `<figure class="lb-figure"><img class="lb-img" alt="" /><figcaption class="lb-caption"></figcaption></figure>`;
    document.body.appendChild(overlay);

    const img = overlay.querySelector(".lb-img");
    const cap = overlay.querySelector(".lb-caption");

    const open = (src, alt) => {
      img.src = src;
      img.alt = alt || "";
      cap.textContent = alt || "";
      cap.style.display = alt ? "" : "none";
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("lb-lock");
    };
    const close = () => {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lb-lock");
      img.src = "";
    };

    // Abrir al hacer clic en cualquier imagen ampliable del contenido
    el("content").addEventListener("click", (e) => {
      const target = e.target.closest("img.zoomable");
      if (target) open(target.currentSrc || target.src, target.getAttribute("alt"));
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.closest(".lb-close")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) close();
    });
  }

  // ---------- UI wiring ----------
  function wireUI() {
    const input = el("searchInput"), box = el("searchResults");
    input.addEventListener("input", () => renderSearch(input.value));
    input.addEventListener("focus", () => { if (input.value.trim()) renderSearch(input.value); });

    input.addEventListener("keydown", (e) => {
      const items = [...box.querySelectorAll(".search-result")];
      const active = box.querySelector(".search-result.active");
      let idx = items.indexOf(active);
      if (e.key === "ArrowDown") { e.preventDefault(); if (items[idx + 1]) { active?.classList.remove("active"); items[idx + 1].classList.add("active"); items[idx + 1].scrollIntoView({ block: "nearest" }); } }
      else if (e.key === "ArrowUp") { e.preventDefault(); if (items[idx - 1]) { active?.classList.remove("active"); items[idx - 1].classList.add("active"); items[idx - 1].scrollIntoView({ block: "nearest" }); } }
      else if (e.key === "Enter") { e.preventDefault(); if (active) { location.hash = active.getAttribute("href"); closeSearch(); } }
      else if (e.key === "Escape") { closeSearch(); }
    });

    document.addEventListener("click", (e) => { if (!e.target.closest(".topbar-search")) box.hidden = true; });

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== input && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
        e.preventDefault(); input.focus();
      }
    });

    el("menuToggle").addEventListener("click", () => document.body.classList.toggle("nav-open"));
    el("sidebarBackdrop").addEventListener("click", () => document.body.classList.remove("nav-open"));
  }

  init();
})();
