// ================================================================
// B-TRONIKS — script.js
// Navbar, mobile menu, scroll reveal, contact form
// ================================================================

// Enable scroll-reveal hidden states only when JS runs (no-JS users see everything)
document.body.classList.add('js');

// ---------- Navbar scrolled state ----------
const navbar = document.getElementById('navbar');
const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 12);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Mobile menu ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Close menu when a link is tapped
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  })
);

// ---------- Scroll reveal ----------
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

if (prefersReduced || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
}

// ---------- Contact form (Formspree with mailto fallback) ----------
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const statusEl = document.getElementById('formStatus');

const FORM_CONFIGURED = !form.action.includes('YOUR_FORM_ID');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  // If Formspree isn't set up yet, fall back to the user's email app.
  if (!FORM_CONFIGURED) {
    const subject = encodeURIComponent('Project enquiry from ' + (data.get('name') || 'website'));
    const body = encodeURIComponent(
      'Name: ' + data.get('name') + '\n' +
      'Phone: ' + (data.get('phone') || '-') + '\n' +
      'Email: ' + data.get('email') + '\n\n' +
      data.get('message')
    );
    window.location.href = 'mailto:btroniks11@gmail.com?subject=' + subject + '&body=' + body;
    statusEl.textContent = 'Opening your email app… You can also reach us on WhatsApp.';
    statusEl.className = 'form-status ok';
    return;
  }

  submitBtn.disabled = true;
  statusEl.textContent = 'Sending…';
  statusEl.className = 'form-status';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      form.reset();
      statusEl.textContent = 'Message sent! We will get back to you soon.';
      statusEl.className = 'form-status ok';
    } else {
      throw new Error('Request failed');
    }
  } catch {
    statusEl.textContent = 'Could not send right now — please use WhatsApp or email us directly.';
    statusEl.className = 'form-status err';
  } finally {
    submitBtn.disabled = false;
  }
});

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
