/* ============================================================
   TERRA AGENCIA DE VIAJES — main.js
   ============================================================
   INSTRUCCIONES DE IMÁGENES:
   ─────────────────────────────────────────────────────────────
   Coloca TODOS los archivos .webp en la MISMA carpeta que
   index.html, style.css y main.js.
   Los nombres deben coincidir EXACTAMENTE con los que aparecen
   en el array IMAGES de abajo (mayúsculas, guiones bajos, etc.)
   ─────────────────────────────────────────────────────────────
*/

/* ══════════════════════════════════════════════════════════════
   1. CATÁLOGO DE IMÁGENES
   Nombres exactos de los archivos .webp subidos al proyecto.
   Agrega aquí los 17 restantes cuando los tengas disponibles.
══════════════════════════════════════════════════════════════ */
const IMAGES = {

  /* ── NACIONALES ── */
  nacional: [
    { file: 'Terra_Viajes_CANCU_N_Flyer.webp',                    label: 'Cancún' },
    { file: 'Terra_Viajes_Cancu_n_Todo_Inclui_do_Flyer.webp',     label: 'Cancún Todo Incluido' },
    { file: 'Terra_Viajes_CHIAPAS_Flyer.webp',                    label: 'Chiapas' },
    { file: 'Terra_Viajes_Creel_y_Barrancas_Flyer.webp',          label: 'Creel y Barrancas del Cobre' },
    { file: 'Terra_Viajes_Guanajuato_Flyer.webp',                 label: 'Guanajuato' },
    { file: 'Terra_Viajes_Huatulco_Eco-Escape_Flyer.webp',        label: 'Huatulco Eco-Escape' },
    { file: 'Terra_Viajes_Huatulco_Todo_Inclui_do_Flyer__1_.webp',label: 'Huatulco Todo Incluido' },
    { file: 'Terra_Viajes_Los_Cabos_Premium_Flyer.webp',          label: 'Los Cabos Premium' },
    // ── Pendientes (carga los .webp con estos nombres exactos) ──
    // { file: 'Terra_Viajes_Los_Cabos_Todo_Inclui_do_Flyer.webp', label: 'Los Cabos Todo Incluido' },
    // { file: 'Terra_Viajes_Mazatlan_Clasico_Flyer.webp',         label: 'Mazatlán Clásico' },
    // { file: 'Terra_Viajes_Mazatlan_Flyer.webp',                 label: 'Mazatlán' },
    // { file: 'Terra_Viajes_Mazatlan_Verano_Flyer.webp',          label: 'Mazatlán Verano' },
    // { file: 'Terra_Viajes_Oaxaca_Flyer.webp',                   label: 'Oaxaca' },
    // { file: 'Terra_Viajes_Playa_del_Carmen_Tulum_Flyer.webp',   label: 'Playa del Carmen & Tulum' },
    // { file: 'Terra_Viajes_Playa_Del_Carmen_Todo_Incluido_Flyer.webp', label: 'Playa del Carmen Todo Incluido' },
    // { file: 'Terra_Viajes_Riviera_Maya_Flyer.webp',             label: 'Riviera Maya' },
    // { file: 'Terra_Viajes_Tulum_Beach_Front_Flyer.webp',        label: 'Tulum Beach Front' },
    // { file: 'Terra_Viajes_Vallarta_Familiar_Flyer.webp',        label: 'Puerto Vallarta Familiar' },
    // { file: 'Terra_Viajes_Vallarta_Todo_Inclui_do_Flyer.webp',  label: 'Vallarta Todo Incluido' },
  ],

  /* ── PROMOCIONES ── */
  promo: [
    { file: 'Terra_Viajes_CANCU_N_Flyer.webp',                    label: 'Cancún' },
    { file: 'Terra_Viajes_Crucero_a_Ensenada_Flyer.webp',         label: 'Crucero a Ensenada' },
    { file: 'Terra_Viajes_Crucero_Disney_Wish_Flyer.webp',        label: 'Crucero Disney Wish' },
    { file: 'Terra_Viajes_Disney___California_Tour_Flyer.webp',   label: 'Disney & California Tour' },
    { file: 'Terra_Viajes_Disneylandia_Flyer.webp',               label: 'Disneylandia' },
    { file: 'Terra_Viajes_Las_Vegas_Flyer.webp',                  label: 'Las Vegas' },
    { file: 'Terra_Viajes_Huatulco_Todo_Inclui_do_Flyer__1_.webp',label: 'Huatulco Todo Incluido' },
    { file: 'Terra_Viajes_Los_Cabos_Premium_Flyer.webp',          label: 'Los Cabos Premium' },
    { file: 'Terra_Viajes_Guanajuato_Flyer.webp',                 label: 'Guanajuato' },
    { file: 'Terra_Viajes_CHIAPAS_Flyer.webp',                    label: 'Chiapas' },
    // { file: 'Terra_Viajes_Punta_Cana_Flyer.webp',              label: 'Punta Cana' },
    // { file: 'Terra_Viajes_Varadero_Flyer.webp',                label: 'Varadero' },
  ],

  /* ── INTERNACIONALES ── */
  intl: [
    { file: 'Terra_Viajes_China_Flyer.webp',                      label: 'China' },
    { file: 'Terra_Viajes_Colombia_Flyer.webp',                   label: 'Colombia' },
    { file: 'Terra_Viajes_Costa_Rica_Flyer.webp',                 label: 'Costa Rica' },
    { file: 'Terra_Viajes_Crucero_Disney_Wish_Flyer.webp',        label: 'Crucero Disney Wish' },
    { file: 'Terra_Viajes_Disney___California_Tour_Flyer.webp',   label: 'Disney & California Tour' },
    { file: 'Terra_Viajes_Disneylandia_Flyer.webp',               label: 'Disneylandia' },
    { file: 'Terra_Viajes_Escocia__Irlanda_e_Inglaterra_Flyer.webp', label: 'Escocia, Irlanda e Inglaterra' },
    { file: 'Terra_Viajes_Espan_a__Portugal_y_Marruecos_Flyer.webp', label: 'España, Portugal y Marruecos' },
    { file: 'Terra_Viajes_Islas_Griegas___Turquia_Flyer.webp',    label: 'Islas Griegas & Turquía' },
    { file: 'Terra_Viajes_Italia_en_Grupo_Flyer.webp',            label: 'Italia en Grupo' },
    { file: 'Terra_Viajes_Las_Vegas_Flyer.webp',                  label: 'Las Vegas' },
    { file: 'Terra_Viajes_Crucero_a_Ensenada_Flyer.webp',         label: 'Crucero a Ensenada' },
    // { file: 'Terra_Viajes_Nueva_York_Flyer.webp',              label: 'Nueva York' },
    // { file: 'Terra_Viajes_Orlando_basico_Flyer.webp',          label: 'Orlando' },
    // { file: 'Terra_Viajes_Paris_Flyer.webp',                   label: 'París' },
    // { file: 'Terra_Viajes_Punta_Cana_Flyer.webp',              label: 'Punta Cana' },
    // { file: 'Terra_Viajes_Tailandia_con_Phuket_Flyer.webp',    label: 'Tailandia con Phuket' },
    // { file: 'Terra_Viajes_Varadero_Flyer.webp',                label: 'Varadero' },
  ],
};

/* ══════════════════════════════════════════════════════════════
   2. CONSTRUCTOR DE GALERÍAS
   Solo muestra una imagen si su archivo existe en la carpeta.
   Las imágenes rotas se ocultan automáticamente sin errores.
══════════════════════════════════════════════════════════════ */
function buildGallery(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  if (!items || items.length === 0) {
    container.innerHTML = '<p class="gallery-empty">Próximamente — agrega las imágenes a la carpeta del sitio.</p>';
    return;
  }

  let totalAttempted = items.length;
  let totalFailed    = 0;

  items.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.className = 'gallery-item';
    wrapper.style.display = 'none';          // oculto hasta confirmar carga

    const img = document.createElement('img');
    img.src     = item.file;
    img.alt     = item.label;
    img.title   = item.label;
    img.loading = 'lazy';
    img.decoding = 'async';

    img.onload = () => {
      wrapper.style.display = '';            // mostrar solo si cargó OK
    };

    img.onerror = () => {
      wrapper.remove();
      totalFailed++;
      if (totalFailed === totalAttempted) showEmpty(container);
    };

    wrapper.appendChild(img);
    container.appendChild(wrapper);
  });

  // Respaldo: si tras 3 s nada cargó, muestra mensaje
  setTimeout(() => {
    const visible = container.querySelectorAll('.gallery-item[style=""],.gallery-item:not([style])');
    if (visible.length === 0 && !container.querySelector('.gallery-empty')) {
      showEmpty(container);
    }
  }, 3000);
}

function showEmpty(container) {
  if (!container.querySelector('.gallery-empty')) {
    container.innerHTML = '<p class="gallery-empty">Agrega los archivos de imagen .webp a la carpeta del sitio para verlos aquí.</p>';
  }
}

buildGallery('gallery-nacional', IMAGES.nacional);
buildGallery('gallery-promo',    IMAGES.promo);
buildGallery('gallery-intl',     IMAGES.intl);

/* ══════════════════════════════════════════════════════════════
   3. SLIDER CINEMÁTICO
══════════════════════════════════════════════════════════════ */
(function () {
  const slides   = Array.from(document.querySelectorAll('.slide'));
  const dots     = Array.from(document.querySelectorAll('.dot'));
  const prevBtn  = document.querySelector('.slider-prev');
  const nextBtn  = document.querySelector('.slider-next');
  const INTERVAL = 6500;
  let   current  = 0;
  let   timer    = null;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  goTo(0);
  startTimer();

  if (nextBtn) nextBtn.addEventListener('click', () => { next(); startTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startTimer(); });

  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startTimer(); }));

  // Pausa al pasar el cursor
  const hero = document.querySelector('.hero-section');
  if (hero) {
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', startTimer);
  }

  // Soporte swipe táctil
  let touchX = 0;
  document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); startTimer(); }
  }, { passive: true });
})();

/* ══════════════════════════════════════════════════════════════
   4. NAVBAR – sombra al hacer scroll
══════════════════════════════════════════════════════════════ */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ══════════════════════════════════════════════════════════════
   5. MENÚ MÓVIL – abrir / cerrar
══════════════════════════════════════════════════════════════ */
(function () {
  const toggle = document.getElementById('menu-toggle');
  const menu   = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      menu.classList.add('open');
    } else {
      menu.classList.remove('open');
    }
  });

  // Cierra al tocar un link
  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.checked = false;
      menu.classList.remove('open');
    });
  });
})();

/* ══════════════════════════════════════════════════════════════
   6. FORMULARIO – subject dinámico (nacional / internacional)
══════════════════════════════════════════════════════════════ */
(function () {
  const form = document.getElementById('quote-form');
  if (!form) return;

  const fNombre  = form.querySelector('#nombre');
  const fMensaje = form.querySelector('#mensaje');
  const hSubject = form.querySelector('#hidden-subject');
  const hTipo    = form.querySelector('#hidden-tipo');

  const INTL_KEYWORDS = [
    'paris','europa','tokio','tokyo','new york','nueva york','roma','madrid',
    'barcelona','london','berlin','amsterdam','dubai','miami','florida',
    'italia','france','españa','alemania','grecia','greece','brasil','brazil',
    'peru','colombia','argentina','chile','cuba','portugal','suiza','bali',
    'tailandia','thailand','china','corea','korea','australia','canada',
    'usa','estados unidos','egipto','turkey','turquia','irlanda','escocia',
    'inglaterra','marruecos','varadero','punta cana','crucero','disney',
    'orlando','las vegas','costa rica','colombia','islas griegas'
  ];

  function folio() {
    return 'TRR-' + Date.now().toString(36).toUpperCase().slice(-6);
  }

  function update() {
    const nombre  = (fNombre  ? fNombre.value  : '').trim() || 'Cliente';
    const mensaje = (fMensaje ? fMensaje.value : '').toLowerCase();
    const esIntl  = INTL_KEYWORDS.some(k => mensaje.includes(k));
    const tipo    = esIntl ? 'INTERNACIONAL' : 'NACIONAL';

    if (hTipo)    hTipo.value    = tipo;
    if (hSubject) hSubject.value = `${nombre} | Viaje ${tipo} | ${folio()}`;
  }

  if (fNombre)  fNombre.addEventListener('input',  update);
  if (fMensaje) fMensaje.addEventListener('input',  update);
  form.addEventListener('submit', update);
})();
