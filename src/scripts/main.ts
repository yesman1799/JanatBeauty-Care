import { getConsent, setConsent } from './consent';

/* ---------- Header: stín při scrollu + mobilní menu ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const nav = document.querySelector<HTMLElement>('[data-nav]');
const setMenu = (open: boolean) => {
  toggle?.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
};
toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

/* ---------- Animace při scrollu ---------- */
const reveals = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.remove('is-hidden'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  reveals.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top > window.innerHeight) { el.classList.add('is-hidden'); io.observe(el); }
  });
}

/* ---------- E-mail chráněný proti robotům ---------- */
document.querySelectorAll<HTMLAnchorElement>('a[data-email]').forEach((a) => {
  try {
    const bin = atob(a.dataset.email || '');
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    const addr = new TextDecoder().decode(bytes).split('').reverse().join('');
    if (!/^[^\s@<>"']+@[^\s@<>"']+\.[a-z]{2,}$/i.test(addr)) return;
    a.href = `mailto:${addr}`;
    a.textContent = addr;
  } catch { /* noop */ }
});

/* ---------- Cookie lišta ---------- */
const banner = document.querySelector<HTMLElement>('[data-cookie]');
const bookingBox = banner?.querySelector<HTMLInputElement>('[data-cookie-booking]');
const openBanner = () => {
  if (!banner) return;
  if (bookingBox) bookingBox.checked = getConsent()?.booking ?? false;
  banner.hidden = false;
  banner.querySelector<HTMLButtonElement>('[data-cookie-accept]')?.focus({ preventScroll: true });
};
const closeBanner = () => { if (banner) banner.hidden = true; };

if (!getConsent()) openBanner();
banner?.querySelector('[data-cookie-accept]')?.addEventListener('click', () => { setConsent(true); closeBanner(); });
banner?.querySelector('[data-cookie-reject]')?.addEventListener('click', () => { setConsent(false); closeBanner(); });
banner?.querySelector('[data-cookie-save]')?.addEventListener('click', () => { setConsent(!!bookingBox?.checked); closeBanner(); });
document.querySelectorAll('[data-cookie-settings]').forEach((b) => b.addEventListener('click', openBanner));

/* ---------- Rezervační iframe (Noona) – načte se až po souhlasu ---------- */
const booking = document.querySelector<HTMLElement>('[data-booking]');
if (booking) {
  const src = booking.dataset.src!;
  const holder = booking.querySelector<HTMLElement>('[data-booking-frame]')!;
  const placeholder = booking.querySelector<HTMLElement>('[data-booking-placeholder]')!;
  let loaded = false;

  const load = () => {
    if (loaded) return;
    loaded = true;
    const url = new URL(src);
    if (url.protocol !== 'https:' || !/(^|\.)noona\.app$/.test(url.hostname)) return; // pojistka
    const iframe = document.createElement('iframe');
    iframe.src = url.toString();
    iframe.title = 'Online rezervace termínu – Noona';
    iframe.loading = 'eager';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.setAttribute('allow', 'payment');
    iframe.className = 'booking__iframe';
    iframe.addEventListener('load', () => booking.classList.add('is-ready'));
    holder.appendChild(iframe);
    placeholder.hidden = true;
    booking.classList.add('is-loading');
  };

  if (getConsent()?.booking) load();
  window.addEventListener('janat:consent', (e) => {
    if ((e as CustomEvent).detail?.booking) load();
  });
  booking.querySelector('[data-booking-load]')?.addEventListener('click', () => {
    setConsent(true);
    closeBanner();
  });
}
