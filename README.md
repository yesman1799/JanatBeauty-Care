# Beauty & Care Janat – web janat.cz

Moderní, rychlý a bezpečný web kosmetického salonu. Postaveno na [Astro](https://astro.build) a generováno jako **čistě statický web**. Nemá žádnou databázi, administraci ani formuláře, takže není co hacknout ani čím posílat spam.

## Rychlý start

```bash
npm ci          # instalace
npm run dev     # vývoj na http://localhost:4321
npm run build   # produkční build do složky dist/
npm run check   # kontrola ceníku (duplicity, počet položek)
```

Vyžaduje Node.js 22 (nebo novější).

## Kde co upravit

| Co | Soubor |
|---|---|
| Kontakty, otevírací doba, adresa, sociální sítě, IČO, storno podmínky | `src/data/site.ts` |
| **Ceník** | `src/data/pricing.ts` |
| Přehled služeb na úvodní stránce | `src/data/site.ts` (`services`) |
| Fotky | `src/assets/photos/` (automaticky se optimalizují do AVIF/WebP) |
| Barvy a písma | `src/styles/global.css` (proměnné v `:root`) |
| Logo | `public/logo.svg`, `public/logo-light.svg` |
| Bezpečnostní hlavičky | `public/_headers` (Netlify/Cloudflare), `vercel.json` (Vercel) |

Položky s `⚠ DOPLNIT` / `⚠ OVĚŘIT` v `src/data/site.ts` je potřeba zkontrolovat.

## Stránky

- `/` – úvod (služby, o nás, online rezervace, kontakt)
- `/cenik` – kompletní ceník
- `/rezervace` – online rezervace (Noona)
- `/kontakt`
- `/obchodni-podminky`
- `/ochrana-osobnich-udaju`

## Nasazení (doporučeno: Cloudflare Pages nebo Netlify, zdarma)

**Cloudflare Pages:** Workers & Pages → Create → Pages → připojit GitHub repo →
Build command `npm run build`, Output `dist`, proměnná `NODE_VERSION=22`.

**Netlify:** Add new site → Import from Git → nastavení se načte z `netlify.toml`.

**Vercel:** Import projektu, framework Astro. Hlavičky se načtou z `vercel.json`.

Pak v nastavení hostingu přidejte doménu `janat.cz` (+ `www.janat.cz` s přesměrováním) a u registrátora domény upravte DNS podle návodu hostingu. HTTPS se zapne automaticky.

## Bezpečnost

- Statický web: žádný server-side kód, databáze ani přihlášení (oproti WordPressu žádné pluginy ani `xmlrpc.php`).
- **Žádné formuláře**, takže žádný spam. E-mail je v HTML zakódovaný a skládá se až v prohlížeči (ochrana proti robotům, kteří sbírají adresy).
- Přísná **Content-Security-Policy**: povolené jsou jen vlastní skripty a styly, iframe jen z `noona.app`, web nejde vložit do cizích stránek (clickjacking).
- HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `COOP`.
- Písma hostovaná lokálně (žádné Google Fonts, které by kvůli GDPR vyžadovaly souhlas).
- Žádná analytika ani sledování. Rezervační iframe Noona se načte **až po souhlasu** (cookie lišta).
- `npm audit`: 0 zranitelností.

## Cookies

Web sám nastavuje pouze volbu souhlasu (localStorage). Služba Noona se načte až po souhlasu nebo po kliknutí na „Zobrazit volné termíny“. Souhlas lze změnit v patičce („Nastavení cookies“).

---
© 2012–2026 Beauty & Care Janat. Všechna práva vyhrazena. Fotografie a texty nelze bez souhlasu dále šířit.
