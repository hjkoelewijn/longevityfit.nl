/* ============================================
   LONGEVITY FIT — Main Script
   ============================================ */

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  if (nav) {
    function handleNavScroll() {
      if (window.scrollY > 60) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
  }

  // --- Mobile hamburger nav ---
  const navToggle = document.querySelector('.site-nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (navToggle && siteNav) {
    function setMenuState(isOpen) {
      siteNav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('nav-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.setAttribute('aria-label', isOpen ? 'Sluit menu' : 'Open menu');
    }
    navToggle.addEventListener('click', function () {
      setMenuState(!siteNav.classList.contains('is-open'));
    });
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 980) setMenuState(false);
      });
    });
    document.addEventListener('click', function (e) {
      if (
        window.innerWidth <= 980 &&
        siteNav.classList.contains('is-open') &&
        !siteNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        setMenuState(false);
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) setMenuState(false);
    });
  }

  // --- Reveal on scroll ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  // --- Smooth scroll for anchor links (zelfde pagina) ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target && nav) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Lancering formulier (lancering.html) ---
  const lanceringForm = document.getElementById('lanceringForm');
  if (lanceringForm) {
    const lancSuccess = document.getElementById('lancSuccess');
    const lancError = document.getElementById('lancError');

    lanceringForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const voornaam = document.getElementById('lancVoornaam').value.trim();
      const achternaam = document.getElementById('lancAchternaam').value.trim();
      const email = document.getElementById('lancEmail').value.trim();
      const telefoon = document.getElementById('lancTelefoon').value.trim();
      const btnText = lanceringForm.querySelector('.mc-form__btn-text');
      const btnLoading = lanceringForm.querySelector('.mc-form__btn-loading');

      if (!voornaam || !achternaam || !email || !telefoon) return;

      btnText.style.display = 'none';
      btnLoading.style.display = 'inline';
      if (lancSuccess) lancSuccess.style.display = 'none';
      if (lancError) lancError.style.display = 'none';

      // DEMO: simuleer succes. Vervang door Enormail/API wanneer klaar.
      setTimeout(function () {
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        lanceringForm.querySelector('.mc-form__fields').style.display = 'none';
        lanceringForm.querySelector('.mc-form__note').style.display = 'none';
        if (lancSuccess) lancSuccess.style.display = 'block';
      }, 1200);

      // LIVE: fetch naar jouw endpoint met { voornaam, achternaam, email, telefoon }
    });
  }

  // --- Masterclass Form (legacy, indien nog op een pagina) ---
  const form = document.getElementById('masterclassForm');
  if (form) {
    const successMsg = document.getElementById('mcSuccess');
    const errorMsg = document.getElementById('mcError');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const naam = document.getElementById('mcNaam') && document.getElementById('mcNaam').value.trim();
      const email = document.getElementById('mcEmail') && document.getElementById('mcEmail').value.trim();
      const btnText = form.querySelector('.mc-form__btn-text');
      const btnLoading = form.querySelector('.mc-form__btn-loading');

      if (!naam || !email) return;

      btnText.style.display = 'none';
      btnLoading.style.display = 'inline';
      if (successMsg) successMsg.style.display = 'none';
      if (errorMsg) errorMsg.style.display = 'none';

      setTimeout(function () {
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        form.querySelector('.mc-form__fields').style.display = 'none';
        form.querySelector('.mc-form__note').style.display = 'none';
        if (successMsg) successMsg.style.display = 'block';
      }, 1200);
    });
  }

  // --- Intake formulier: toon succes en stuur door naar booking ---
  const intakeForm = document.getElementById('intakeForm');
  if (intakeForm) {
    const success = document.getElementById('intakeSuccess');
    intakeForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Browser-native validatie respecteren
      if (!intakeForm.checkValidity()) {
        intakeForm.reportValidity();
        return;
      }

      // Meta Pixel: registreer een Lead conversie bij geldige inzending
      if (typeof fbq === 'function') {
        fbq('track', 'Lead', { content_name: 'Intake gesprek' });
      }

      if (success) {
        success.style.display = 'block';
      }

      const bookingUrl = intakeForm.getAttribute('data-booking-url') || '';
      if (bookingUrl) {
        setTimeout(function () {
          window.location.href = bookingUrl;
        }, 900);
      }
    });
  }
})();
