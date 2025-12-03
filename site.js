function renderNav() {
  addFontPreload();
  const nav = `
  <nav>
    <div class="nav-inner">
      <div class="brand">ING Freddy Lobo <span>| SEO &amp; Automatizacion</span></div>
      <div class="menu">
        <a href="index.html#about">Sobre mi</a>
        <div class="has-submenu">
          <a href="index.html#services">Servicios</a>
          <div class="submenu">
            <a href="servicio-seo.html">SEO</a>
            <a href="sevicio_de_automatizacion.html">Automatizacion</a>
            <a href="servicio-desarrollo-web.html">Desarrollo Web</a>
            <a href="servicio-clases-wordpress.html">Clases WordPress</a>
            <a href="servicio-plantillas-excel.html">Plantillas de Excel</a>
            <a href="servicio-redes-sociales.html">Redes Sociales</a>
          </div>
        </div>
        <a href="index.html#process">Proceso</a>
        <a href="articulos.html">Recursos</a>
        <a href="index.html#faq">FAQ</a>
        <a href="index.html#contact">Contacto</a>
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        <a class="btn primary" href="https://wa.link/w05a11" target="_blank" rel="noopener">WhatsApp</a>
        <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" onclick="toggleMobileMenu()">☰</button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu" style="display:none;">
      <a href="index.html#about">Sobre mi</a>
      <a href="servicio-seo.html">Servicio SEO</a>
      <a href="sevicio_de_automatizacion.html">Automatizacion</a>
      <a href="servicio-desarrollo-web.html">Desarrollo Web</a>
      <a href="servicio-clases-wordpress.html">Clases WordPress</a>
      <a href="servicio-plantillas-excel.html">Plantillas de Excel</a>
      <a href="servicio-redes-sociales.html">Redes Sociales</a>
      <a href="index.html#process">Proceso</a>
      <a href="articulos.html">Recursos</a>
      <a href="index.html#faq">FAQ</a>
      <a href="index.html#contact">Contacto</a>
    </div>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', '<div class="mobile-backdrop" id="mobile-backdrop"></div>');
  document.body.insertAdjacentHTML('afterbegin', nav);
  highlightActive();
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-backdrop');
  if (!menu) return;
  const showing = menu.style.display === 'none';
  menu.style.display = showing ? 'flex' : 'none';
  if (backdrop) backdrop.style.display = showing ? 'block' : 'none';
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) toggle.setAttribute('aria-expanded', showing ? 'true' : 'false');
  document.body.style.overflow = showing ? 'hidden' : '';
}

function renderRelated() {
  // Evita duplicar en la pagina principal que ya tiene articulos.
  if (document.getElementById('articles')) return;
  const related = `
    <div class="page">
      <section class="section">
        <div class="section-head">
          <span class="eyebrow">Sigue leyendo</span>
          <h2>Servicios y articulos relacionados</h2>
          <p>Todo conecta: SEO, automatizacion y desarrollo web enfocados en resultados.</p>
        </div>
        <div class="grid cards">
          <article class="card">
            <div class="tag">Servicio</div>
            <h3><a href="servicio-seo.html">Servicio SEO</a></h3>
            <p>Auditoria, contenidos y analitica listos para tu negocio.</p>
          </article>
          <article class="card">
            <div class="tag">Automatizacion</div>
            <h3><a href="sevicio_de_automatizacion.html">Automatizacion de reportes</a></h3>
            <p>Flujos en Excel y Sheets para ahorrar horas cada semana.</p>
          </article>
          <article class="card">
            <div class="tag">Web</div>
            <h3><a href="servicio-desarrollo-web.html">Desarrollo web</a></h3>
            <p>Landing pages rapidas y listas para convertir.</p>
          </article>
          <article class="card">
            <div class="tag">Formacion</div>
            <h3><a href="servicio-clases-wordpress.html">Clases WordPress</a></h3>
            <p>Instalacion, seguridad y publicacion sin errores.</p>
          </article>
          <article class="card">
            <div class="tag">Excel</div>
            <h3><a href="servicio-plantillas-excel.html">Plantillas de Excel</a></h3>
            <p>Modelos personalizados con validaciones y macros.</p>
          </article>
          <article class="card">
            <div class="tag">Redes</div>
            <h3><a href="servicio-redes-sociales.html">Redes Sociales</a></h3>
            <p>Contenido, programacion y metricas con foco en leads.</p>
          </article>
          <article class="card">
            <div class="tag">Articulo</div>
            <h3><a href="articulo-flujos-automatizacion-excel.html">Flujos con Excel y Sheets</a></h3>
            <p>Casos rapidos para empezar a automatizar.</p>
          </article>
        </div>
      </section>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', related);
}

function renderFooter() {
  renderRelated();
  renderBreadcrumbs();
  addServiceSchema();
  const footer = `
    <footer>
      <p>Ing. Freddy Lobo — SEO, automatizacion y desarrollo web. Proyectos remotos para LATAM y Espana.</p>
      <p><a href="sitemap.xml">Sitemap</a> | <a href="contacto.html">Contacto</a> | <a href="index.html#services">Servicios</a></p>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
  injectArticleCtas();
  addArticleSchema();
}

function injectArticleCtas() {
  const article = document.querySelector('.article-main');
  if (!article || article.dataset.ctaInjected) return;
  const ctaBlock = `
    <div class="card" style="margin:16px 0;">
      <h3>¿Necesitas ayuda con este tema?</h3>
      <p>Implemento SEO, automatizacion, desarrollo web y redes para que consigas resultados.</p>
      <div class="pill-row">
        <a class="btn primary" href="https://wa.link/w05a11" target="_blank" rel="noopener">Hablar por WhatsApp</a>
        <a class="btn ghost" href="index.html#services">Ver servicios</a>
      </div>
    </div>`;
  article.insertAdjacentHTML('afterbegin', ctaBlock);
  article.insertAdjacentHTML('beforeend', ctaBlock);
  article.dataset.ctaInjected = 'true';
}

function addArticleSchema() {
  const article = document.querySelector('.article-main');
  if (!article) return;
  if (document.getElementById('ld-article')) return;
  const title = document.title || '';
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'ld-article';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "author": { "@type": "Person", "name": "Ing. Freddy Lobo" },
    "publisher": { "@type": "Organization", "name": "freddy402.github.io" },
    "mainEntityOfPage": window.location.href
  });
  document.head.appendChild(script);
}

function highlightActive() {
  const links = Array.from(document.querySelectorAll('.menu a'));
  const path = window.location.pathname.replace(/\\/g, '/');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const url = new URL(href, window.location.origin);
    if (path.endsWith(url.pathname)) {
      link.classList.add('active');
    }
  });
}

function addFontPreload() {
  const existing = document.querySelector('link[rel=\"preload\"][as=\"font\"]');
  if (existing) return;
  const preload = document.createElement('link');
  preload.rel = 'preload';
  preload.as = 'font';
  preload.href = 'https://fonts.gstatic.com/s/manrope/v14/xn7gYHE41ni1AdIRggexSg.woff2';
  preload.type = 'font/woff2';
  preload.crossOrigin = 'anonymous';
  document.head.appendChild(preload);
}

function renderBreadcrumbs() {
  const article = document.querySelector('.article-main');
  const isService = window.location.pathname.includes('servicio-');
  if (!article && !isService) return;
  const currentTitle = document.title || 'Pagina';
  const breadcrumb = `
    <nav aria-label="Breadcrumb" style="margin:12px 0;">
      <ol style="list-style:none;display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0;font-weight:700;">
        <li><a href="index.html">Inicio</a></li>
        ${isService ? '<li>/</li><li><a href="index.html#services">Servicios</a></li>' : '<li>/</li><li><a href="articulos.html">Articulos</a></li>'}
        <li>/</li><li aria-current="page">${currentTitle}</li>
      </ol>
    </nav>`;
  if (article) {
    article.insertAdjacentHTML('afterbegin', breadcrumb);
  } else {
    const main = document.querySelector('.page');
    if (main) main.insertAdjacentHTML('afterbegin', breadcrumb);
  }
}

function addServiceSchema() {
  const isService = window.location.pathname.includes('servicio-');
  if (!isService) return;
  if (document.getElementById('ld-service')) return;
  const title = document.title || 'Servicio';
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'ld-service';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": title,
    "provider": {
      "@type": "Organization",
      "name": "Ing. Freddy Lobo",
      "url": "https://freddy402.github.io"
    },
    "areaServed": "Global",
    "serviceType": title
  });
  document.head.appendChild(script);
}
