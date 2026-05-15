/* =====================================================================
   CIMA ALPINA — main.js
   - menú móvil
   - solidificación de la nav al hacer scroll
   - año dinámico en el footer
   - animaciones de entrada con IntersectionObserver
   ===================================================================== */
(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- nav móvil ---------- */
  const toggle = $(".nav__toggle");
  const menu   = $(".nav__menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // cerrar al elegir un enlace
    $$(".nav__menu a").forEach(a => {
      a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- nav solid on scroll ---------- */
  const nav = $(".nav");
  if (nav) {
    const update = () => {
      if (window.scrollY > 24) nav.classList.add("is-solid");
      else nav.classList.remove("is-solid");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- año dinámico ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- animaciones de entrada ---------- */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = $$(".reveal");
  if (!reducedMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add("is-in"));
  }

  /* ---------- activar link del nav según scroll ---------- */
  const sections = $$("main section[id]");
  const links = $$(".nav__link");
  if (sections.length && links.length && "IntersectionObserver" in window) {
    const map = new Map(links.map(l => [l.getAttribute("href"), l]));
    const io2 = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove("is-active"));
          const link = map.get("#" + e.target.id);
          if (link) link.classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    sections.forEach(s => io2.observe(s));
  }
})();
