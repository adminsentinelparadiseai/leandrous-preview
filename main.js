(() => {
  const nav = document.querySelector('.nav');
  const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  const targets = document.querySelectorAll('.section .wrap > *, .bar');
  targets.forEach(el => { if (!el.classList.contains('bar')) el.classList.add('reveal'); });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  targets.forEach(el => io.observe(el));
})();

// Draft preview: reload automatically when a new version is published.
(() => {
  let current = null;
  const check = async () => {
    try {
      const r = await fetch('version.json?t=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) return;
      const { v } = await r.json();
      if (current === null) current = v;
      else if (v !== current) location.reload();
    } catch {}
  };
  check();
  setInterval(check, 30000);
})();
