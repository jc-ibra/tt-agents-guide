/* ===== Portal de perfiles · Trantor Technologies ===== */
(() => {
  "use strict";

  const ICONS = {
    headset: 'M4 14v-2a8 8 0 0116 0v2 M4 14a2 2 0 00-2 2v1a2 2 0 002 2h1v-5H4z M20 14a2 2 0 012 2v1a2 2 0 01-2 2h-1v-5h1z M18 19a4 4 0 01-4 3h-2',
    wrench: 'M14.7 6.3a4 4 0 00-5.4 5.2L3 18l3 3 6.5-6.3a4 4 0 005.2-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z',
    briefcase: 'M4 8h16a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a1 1 0 011-1z M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2 M3 13h18',
    user: 'M20 21a8 8 0 10-16 0 M12 11a4 4 0 100-8 4 4 0 000 8z',
    book: 'M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z M19 3v18',
  };
  const icon = (name, size = 24) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${ICONS[name] || ICONS.book}"/></svg>`;

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const el = (id) => document.getElementById(id);

  async function init() {
    let data;
    try {
      data = await (await fetch("perfiles.json", { cache: "no-cache" })).json();
    } catch (e) {
      el("grid").innerHTML =
        `<div class="card"><p class="card-desc">No se pudo cargar <code>perfiles.json</code>.<br>¿Estás sirviendo el sitio con un servidor local? (ver CLAUDE.md)</p></div>`;
      return;
    }
    applySite(data.site || {});
    renderCards(data.perfiles || []);
  }

  function applySite(s) {
    if (s.brand) {
      el("brandName").textContent = s.brand;
      el("brandBadge").textContent = s.brand.split(/\s+/).map((w) => w[0]).join("").slice(0, 2);
    }
    if (s.subtitle) el("brandSub").textContent = s.subtitle;
    if (s.titulo) { el("heroTitle").textContent = s.titulo; document.title = `${s.titulo} · ${s.brand || ""}`.trim(); }
    if (s.intro) el("heroIntro").textContent = s.intro;
    if (s.platformUrl) el("platformLink").href = s.platformUrl;
  }

  function renderCards(perfiles) {
    const grid = el("grid");
    grid.innerHTML = perfiles.map((p) => {
      const disponible = p.estado === "disponible";
      const tag = "a";
      const href = disponible
        ? p.url
        : `perfiles/en-construccion.html?p=${encodeURIComponent(p.id)}`;
      const stateClass = disponible ? "is-available" : "is-construction";
      const badge = disponible
        ? `<span class="badge available"><span class="badge-dot"></span>Disponible</span>`
        : `<span class="badge construction"><span class="badge-dot"></span>En construcción</span>`;
      const cta = disponible
        ? `<span class="card-cta">Abrir material →</span>`
        : `<span class="card-cta">Próximamente</span>`;
      return `
        <${tag} class="card ${stateClass}" href="${escapeHtml(href)}">
          <div class="card-top">
            <span class="card-icon">${icon(p.icon)}</span>
            <span class="card-heads">
              <span class="card-title">${escapeHtml(p.titulo)}</span><br>
              <span class="card-sigla">Perfil ${escapeHtml(p.sigla || "")}</span>
            </span>
          </div>
          <p class="card-desc">${escapeHtml(p.resumen || "")}</p>
          <div class="card-foot">${badge}${cta}</div>
        </${tag}>`;
    }).join("");
  }

  init();
})();
