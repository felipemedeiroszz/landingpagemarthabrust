const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth scroll for internal links
for (const a of document.querySelectorAll('a[href^="#"]')){
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
}

// Reveal on scroll with delays
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = Array.from(document.querySelectorAll('.reveal'));

if (prefersReduced){
  // Show immediately for accessibility
  revealEls.forEach(el => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const delay = parseFloat(entry.target.dataset.revealDelay || '0');
        setTimeout(()=>{
          entry.target.classList.add('is-visible');
        }, Math.max(0, delay * 1000));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  revealEls.forEach(el => io.observe(el));
}

// Ripple effect on buttons
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return; // respeita acessibilidade

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if(!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    const maxDim = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = maxDim + 'px';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
})();
