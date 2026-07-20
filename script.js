// ================================================================
// B-TRONIKS — premium interactions
// Particle network hero · scroll reveal · counters · nav
// ================================================================
document.body.classList.add('js');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- hero entrance ----------
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('ready')));

// ---------- nav state (scrolled + over-hero dark) ----------
const nav = document.getElementById('nav');
const hero = document.getElementById('hero');
function navState() {
  nav.classList.toggle('scrolled', scrollY > 20);
  const heroBottom = hero.offsetHeight - 90;
  nav.classList.toggle('on-dark', scrollY < heroBottom);
}
addEventListener('scroll', navState, { passive: true });
navState();

// ---------- scroll progress ----------
const prog = document.getElementById('scrollProgress');
addEventListener('scroll', () => {
  const h = document.documentElement;
  const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
  prog.style.width = (p * 100).toFixed(2) + '%';
}, { passive: true });

// ---------- mobile menu ----------
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// ---------- scroll reveal + counters ----------
const revealEls = document.querySelectorAll('.reveal');
if (reduce || !('IntersectionObserver' in window)) {
  revealEls.forEach(el => el.classList.add('in'));
  document.querySelectorAll('[data-count]').forEach(el => el.textContent = el.dataset.count + (el.dataset.suffix || ''));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  // counters
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const dur = 1200, t0 = performance.now();
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));
}

// ---------- footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ================================================================
// Hero particle network — nodes + links, subtle parallax to cursor
// ================================================================
(function () {
  const canvas = document.getElementById('net');
  if (!canvas || reduce) return;
  const ctx = canvas.getContext('2d');
  let W, H, DPR, nodes = [], mouse = { x: 0.5, y: 0.4 }, raf;

  const COUNT = () => Math.min(64, Math.floor((W * H) / 26000));
  const LINK = 150;

  function resize() {
    DPR = Math.min(2, devicePixelRatio || 1);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    seed();
  }
  function seed() {
    nodes = [];
    const n = COUNT();
    for (let i = 0; i < n; i++) {
      nodes.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.6 + 0.8
      });
    }
  }
  function frame() {
    ctx.clearRect(0, 0, W, H);
    const mx = mouse.x * W, my = mouse.y * H;
    for (const p of nodes) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      // gentle drift toward cursor
      p.x += (mx - W / 2) * 0.000018 * (H - p.y) / H;
    }
    // links
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < LINK) {
          const o = (1 - d / LINK) * 0.5;
          ctx.strokeStyle = `rgba(79,134,247,${o})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    // nodes
    for (const p of nodes) {
      const dm = Math.hypot(p.x - mx, p.y - my);
      const glow = dm < 130 ? 1 : 0.55;
      ctx.fillStyle = `rgba(134,176,255,${glow})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  }
  addEventListener('resize', resize);
  addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - r.left) / r.width;
    mouse.y = (e.clientY - r.top) / r.height;
  });
  // pause when hero off-screen
  const vis = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (e.isIntersecting) { if (!raf) frame(); }
      else { cancelAnimationFrame(raf); raf = null; }
    });
  }, { threshold: 0.01 });
  resize(); vis.observe(canvas);
})();
