/** Jednoduchá správa souhlasu – uloženo pouze v prohlížeči návštěvníka. */
const KEY = 'janat-consent-v1';

export type Consent = { booking: boolean; ts: number };

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const c = JSON.parse(raw);
    return typeof c?.booking === 'boolean' ? (c as Consent) : null;
  } catch {
    return null;
  }
}

export function setConsent(booking: boolean) {
  const c: Consent = { booking, ts: Date.now() };
  try { localStorage.setItem(KEY, JSON.stringify(c)); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent('janat:consent', { detail: c }));
}
