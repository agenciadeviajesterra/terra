/* ============================================================
   TERRA AGENCIA DE VIAJES — main.js
   ============================================================ */

/* ── 1. IMAGE CATALOGUE ─────────────────────────────────────
   Coloca todos los archivos de imagen en la MISMA carpeta
   que index.html, style.css y main.js.
   Los nombres deben coincidir EXACTAMENTE (mayúsculas, espacios, etc.)
   con los que usaste al guardar los archivos.
   ──────────────────────────────────────────────────────────── */

const IMAGES = {

  /* ── NACIONALES ── */
  nacional: [
    { file: 'Terra_Viajes_CANCÚN_Flyer.jpg',                       label: 'Cancún' },
    { file: 'Terra_Viajes_Cancún_Todo_Incluído_Flyer.jpg',         label: 'Cancún Todo Incluido' },
    { file: 'Terra_Viajes_CHIAPAS_Flyer.jpg',                      label: 'Chiapas' },
    { file: 'Terra_Viajes_Creel_y_Barrancas_Flyer.jpg',            label: 'Creel y Barrancas' },
    { file: 'Terra_Viajes_Guanajuato_Flyer.jpg',                   label: 'Guanajuato' },
    { file: 'Terra_Viajes_Huatulco_Eco-Escape_Flyer.jpg',          label: 'Huatulco Eco-Escape' },
    { file: 'Terra_Viajes_Huatulco_Todo_Incluído_Flyer (1).jpg',   label: 'Huatulco Todo Incluido' },
    { file: 'Terra_Viajes_Los_Cabos_Premium_Flyer.jpg',            label: 'Los Cabos Premium' },
    { file: 'Terra_Viajes_Los_Cabos_Todo_Incluído_Flyer.jpg',      label: 'Los Cabos Todo Incluido' },
    { file: 'Terra_Viajes_Mazatlán_Clásico_Flyer.jpg',             label: 'Mazatlán Clásico' },
    { file: 'Terra_Viajes_Mazatlán_Flyer.jpg',                     label: 'Mazatlán' },
    { file: 'Terra_Viajes_Mazatlán_Verano_Flyer.jpg',              label: 'Mazatlán Verano' },
    { file: 'Terra_Viajes_Oaxaca_Flyer.jpg',                       label: 'Oaxaca' },
    { file: 'Terra_Viajes_Playa_del_Carmen___Tulum_Flyer.jpg',     label: 'Playa del Carmen & Tulum' },
    { file: 'Terra_Viajes_Playa_Del_Carmen_Todo_Incluido_Flyer (1).jpg', label: 'Playa del Carmen Todo Incluido' },
    { file: 'Terra_Viajes_Riviera_Maya_Flyer.jpg',                 label: 'Riviera Maya' },
    { file: 'Terra_Viajes_Tulum_Beach_Front_Flyer.jpg',            label: 'Tulum Beach Front' },
    { file: 'Terra_Viajes_Vallarta_Familiar_Flyer.jpg',            label: 'Puerto Vallarta Familiar' },
    { file: 'Terra_Viajes_Vallarta_Todo_Incluído_Flyer (1).jpg',   label: 'Vallarta Todo Incluido' },
  ],

  /* ── PROMOCIONES (mezcla nacional + internacional) ── */
  promo: [
    { file: 'Terra_Viajes_CANCÚN_Flyer.jpg',                       label: 'Cancún' },
    { file: 'Terra_Viajes_Crucero_a_Ensenada_Flyer.jpg',           label: 'Crucero a Ensenada' },
    { file: 'Terra_Viajes_Crucero_Disney_Wish_Flyer.jpg',          label: 'Crucero Disney Wish' },
    { file: 'Terra_Viajes_Disney_&_California_Tour_Flyer.jpg',     label: 'Disney & California Tour' },
    { file: 'Terra_Viajes_Disneylandia_Flyer.jpg',                 label: 'Disneylandia' },
    { file: 'Terra_Viajes_Las_Vegas_Flyer.jpg',                    label: 'Las Vegas' },
    { file: 'Terra_Viajes_Punta_Cana_Flyer.jpg',                   label: 'Punta Cana' },
    { file: 'Terra_Viajes_Varadero_Flyer.jpg',                     label: 'Varadero' },
    { file: 'Terra_Viajes_Huatulco_Todo_Incluído_Flyer (1).jpg',   label: 'Huatulco Todo Incluido' },
    { file: 'Terra_Viajes_Riviera_Maya_Flyer.jpg',                 label: 'Riviera Maya' },
  ],

  /* ── INTERNACIONALES ── */
  intl: [
    { file: 'Terra_Viajes_China_Flyer.jpg',                        label: 'China' },
    { file: 'Terra_Viajes_Colombia_Flyer.jpg',                     label: 'Colombia' },
    { file: 'Terra_Viajes_Costa_Rica_Flyer.jpg',                   label: 'Costa Rica' },
    { file: 'Terra_Viajes_Crucero_Disney_Wish_Flyer.jpg',          label: 'Crucero Disney Wish' },
    { file: 'Terra_Viajes_Disney_&_California_Tour_Flyer.jpg',     label: 'Disney & California' },
    { file: 'Terra_Viajes_Escocia,_Irlanda_e_Inglaterra_Flyer.jpg', label: 'Escocia, Irlanda e Inglaterra' },
    { file: 'Terra_Viajes_España,_Portugal_y_Marruecos_Flyer.jpg', label: 'España, Portugal y Marruecos' },
    { file: 'Terra_Viajes_Islas_Griegas_&_Turquia_Flyer.jpg',      label: 'Islas Griegas & Turquía' },
    { file: 'Terra_Viajes_Italia_en_Grupo_Flyer.jpg',              label: 'Italia en Grupo' },
    { file: 'Terra_Viajes_Las_Vegas_Flyer.jpg',                    label: 'Las Vegas' },
    { file: 'Terra_Viajes_Nueva_York_Flyer.jpg',                   label: 'Nueva York' },
    { file: 'Terra_Viajes_Orlando_básico_Flyer.jpg',               label: 'Orlando' },
    { file: 'Terra_Viajes_París_Flyer.jpg',                        label: 'París' },
    { file: 'Terra_Viajes_Punta_Cana_Flyer.jpg',                   label: 'Punta Cana' },
    { file: 'Terra_Viajes_Tailandia_con_Phuket_Flyer.jpg',         label: 'Tailandia con Phuket' },
    { file: 'Terra_Viajes_Varadero_Flyer.jpg',                     label: 'Varadero' },
    { file: 'Terra_Viajes_Crucero_a_Ensenada_Flyer.jpg',           label: 'Crucero a Ensenada' },
    { file: 'Terra_Viajes_Disneylandia_Flyer.jpg',                 label: 'Disneylandia' },
  ],
};

/* ── 2. BUILD GALLERIES ─────────────────────────────────────
   Solo muestra una imagen si el archivo existe (el navegador
   simplemente no cargará imágenes rotas; ocultamos esas con
   el evento onerror).
   ──────────────────────────────────────────────────────────── */
function buildGallery(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  if (!items || items.length === 0) {
    container.innerHTML = '<p class="gallery-empty">Próximamente. / Coming soon.</p>';
    return;
  }

  let loaded = 0;

  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.style.display = 'none'; // hide until image confirms it loads

    const img = document.createElement('img');
    img.src   = item.file;
    img.alt   = item.label;
    img.title = item.label;
    img.loading = 'lazy';

    img.onload = () => {
      div.style.display = '';
      loaded++;
    };

    img.onerror = () => {
      // Image file not found — remove silently
      div.remove();
      // If all failed, show placeholder
      checkEmpty(container, items.length);
    };

    div.appendChild(img);
    container.appendChild(div);
  });

  // Fallback: after 2 s, if nothing loaded show placeholder
  setTimeout(() => checkEmpty(container, items.length), 2000);
}

function checkEmpty(container, total) {
  const visible = container.querySelectorAll('.gallery-item[style=""],.gallery-item:not([style])');
  if (visible.length === 0 && container.querySelector('.gallery-empty') === null) {
    container.innerHTML = '<p class="gallery-empty">Agrega los archivos de imagen a la carpeta del sitio para verlos aquí.<br>Add the image files to the site folder to display them here.</p>';
  }
}

buildGallery('gallery-nacional', IMAGES.nacional);
buildGallery('gallery-promo',    IMAGES.promo);
buildGallery('gallery-intl',     IMAGES.intl);

/* ── 3. CINEMATIC HERO SLIDER ───────────────────────────── */
(function () {
  const slides     = document.querySelectorAll('.slide');
  const dots       = document.querySelectorAll('.dot');
  const prevBtn    = document.querySelector('.slider-prev');
  const nextBtn    = document.querySelector('.slider-next');
  const INTERVAL   = 6000;  // ms between auto-transitions
  let   current    = 0;
  let   timer      = null;

  function goTo(n) {
    slides[current].classList.remove('active');
    slides[current].setAttribute('aria-hidden', 'true');
    dots[current].classList.remove('active');

    current = (n + slides.length) % slides.length;

    slides[current].classList.add('active');
    slides[current].setAttribute('aria-hidden', 'false');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  // Init
  goTo(0);
  startTimer();

  // Arrow buttons
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); startTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startTimer(); });

  // Dot buttons
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startTimer(); });
  });

  // Pause on hover / touch
  const hero = document.querySelector('.hero-section');
  if (hero) {
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', startTimer);
  }

  // Touch swipe support
  let touchStartX = 0;
  document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? next() : prev();
      startTimer();
    }
  }, { passive: true });
})();

/* ── 4. NAVBAR SCROLL CLASS ─────────────────────────────── */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
})();

/* ── 5. MOBILE MENU CLOSE ON LINK CLICK ────────────────── */
(function () {
  const links  = document.querySelectorAll('.mobile-link');
  const toggle = document.getElementById('menu-toggle');
  links.forEach(l => l.addEventListener('click', () => {
    if (toggle) toggle.checked = false;
  }));
})();

/* ── 6. MOBILE MENU MAX-HEIGHT TOGGLE ──────────────────── */
(function () {
  const toggle = document.getElementById('menu-toggle');
  const menu   = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menu.style.paddingTop = '12px';
      menu.style.paddingBottom = '24px';
    } else {
      menu.style.maxHeight = '0';
      menu.style.paddingTop = '0';
      menu.style.paddingBottom = '0';
    }
  });
})();

/* ── 7. QUOTE FORM — SUBJECT GENERATOR ─────────────────── */
(function () {
  const form    = document.getElementById('quote-form');
  if (!form) return;

  const fNombre  = form.querySelector('#nombre');
  const fEmail   = form.querySelector('#email');
  const fMensaje = form.querySelector('#mensaje');
  const hSubject = form.querySelector('#hidden-subject');
  const hReplyTo = form.querySelector('#hidden-replyto');
  const hCC      = form.querySelector('#hidden-cc');
  const hTipo    = form.querySelector('#hidden-tipo');

  // International keywords (detect from 'mensaje' field)
  const INTL = ['paris','europa','tokio','tokyo','new york','nueva york','roma','madrid',
                 'barcelona','london','londra','berlin','amsterdam','dubai','miami','florida',
                 'italia','france','españa','alemania','grecia','greece','brasil','brazil',
                 'peru','perú','colombia','argentina','chile','cuba','portugal','suiza','bali',
                 'tailandia','thailand','china','corea','korea','australia','canadá','canada',
                 'usa','estados unidos','united states','egipto','egypt','turquia','turkey',
                 'irlanda','escocia','inglaterra','marruecos','varadero','punta cana','crucero',
                 'disney','orlando','las vegas','costa rica'];

  function generateFolio() {
    return 'TRR-' + Date.now().toString(36).toUpperCase().slice(-6);
  }

  function updateSubject() {
    const nombre  = (fNombre  ? fNombre.value  : '').trim() || 'Cliente';
    const mensaje = (fMensaje ? fMensaje.value : '').toLowerCase();
    const esIntl  = INTL.some(k => mensaje.includes(k));
    const tipo    = esIntl ? 'INTERNACIONAL' : 'NACIONAL';

    if (hTipo)    hTipo.value    = tipo;
    if (hSubject) hSubject.value = `${nombre} | Viaje ${tipo} | ${generateFolio()}`;
  }

  function updateEmail() {
    const val = fEmail ? fEmail.value : '';
    if (hReplyTo) hReplyTo.value = val;
    if (hCC)      hCC.value      = val;
  }

  if (fNombre)  fNombre.addEventListener('input',  updateSubject);
  if (fMensaje) fMensaje.addEventListener('input',  updateSubject);
  if (fEmail)   fEmail.addEventListener('input',   updateEmail);

  form.addEventListener('submit', () => {
    updateSubject();
    updateEmail();
  });
})();
