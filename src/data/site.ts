/**
 * ============================================================
 *  VŠECHNY ÚDAJE O SALONU NA JEDNOM MÍSTĚ
 *  Upravte zde – změna se propíše do celého webu.
 *  Položky označené  // ⚠ OVĚŘIT  zkontrolujte proti realitě.
 * ============================================================
 */

export const site = {
  name: 'Beauty & Care Janat',
  shortName: 'Janat',
  tagline: 'Kosmetický salon v srdci Smíchova',
  url: 'https://janat.cz',
  description:
    'Beauty & Care Janat – kosmetický salon na Smíchově. Ošetření pleti, řasy a obočí, permanentní make-up, masáže, manikúra a pedikúra. Rezervujte si termín online.',

  phone: '+420 777 613 525',
    email: 'info@janat.cz',

  address: {
    street: 'Plzeňská 354/40',
    city: 'Praha 5 – Smíchov',
    zip: '155 00',
    country: 'CZ',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Plze%C5%88sk%C3%A1+354%2F40%2C+Praha+5',

  hours: [
    { days: 'Po, Út, Čt', time: '10:00 – 18:00' },
    { days: 'St', time: 'pouze na objednání' },
    { days: 'Pá, So, Ne', time: 'zavřeno' },
  ],
  directions:
    'Najdete nás na Praze 5 nedaleko nákupního centra Nový Smíchov. Z metra Anděl je to asi 10 minut pěšky směrem po ulici Plzeňská, nebo tramvají na zastávku Bertramka – odtud už je to jen minuta chůze přímo k nám.',

  social: {
    instagram: '', // ⚠ DOPLNIT celé URL
    facebook: '', // ⚠ DOPLNIT celé URL
  },

  // Provozovatel – povinné údaje pro patičku a zásady ochrany osobních údajů
  operator: {
    name: '', // ⚠ DOPLNIT jméno / firma provozovatele
    ico: '', // ⚠ DOPLNIT IČO
  },

  // Podmínky – ⚠ OVĚŘIT, že odpovídají vaší praxi
  terms: {
    cancellationHours: 24, // do kolika hodin předem lze bezplatně zrušit termín
    lateMinutes: 15, // po kolika minutách zpoždění může být termín zkrácen či zrušen
    payment: 'v hotovosti nebo platební kartou', // ⚠ OVĚŘIT způsoby platby
    validFrom: '1. 12. 2026',
  },
  foundedYear: 2012,

  bookingUrl:
    'https://noona.app/cs/janatbeautyandcare/book?iframe=true&showCancelButton=true',
  bookingDirectUrl: 'https://noona.app/cs/janatbeautyandcare',

  brands: [
    { name: 'For Life & Madaga', note: 'česká profesionální kosmetika' },
    { name: "Rene' D'Essay", note: 'italská profesionální péče' },
  ],
};

export type Service = {
  id: string;
  title: string;
  lead: string;
  items: string[];
  icon: 'face' | 'lash' | 'massage' | 'nails' | 'hair' | 'leaf';
};

export const services: Service[] = [
  {
    id: 'kosmetika',
    title: 'Kosmetika & péče o pleť',
    lead: 'Ošetření na míru vaší pleti – od hloubkového čištění po omlazující rituály.',
    items: ['Kosmetická péče o pleť', 'Radiofrekvenční lifting', 'Diamantová mikrodermabraze', 'Mezoterapie & chemický peeling', 'Permanentní make-up'],
    icon: 'face',
  },
  {
    id: 'rasy',
    title: 'Řasy & obočí',
    lead: 'Výrazný pohled, který vypadá přirozeně a vydrží.',
    items: ['Prodlužování řas 1:1 i 3D–5D', 'Lash lifting + botox', 'Laminace, úprava a barvení obočí'],
    icon: 'lash',
  },
  {
    id: 'masaze',
    title: 'Masáže',
    lead: 'Chvíle jen pro vás. Uvolnění těla i hlavy.',
    items: ['Klasická a zdravotní masáž celého těla', 'Uvolnění krční páteře, zad a šíje', 'Lávové kameny & baňkování'],
    icon: 'massage',
  },
  {
    id: 'manikura',
    title: 'Manikúra & pedikúra',
    lead: 'Upravené ruce a nohy, na které se budete rádi dívat.',
    items: ['Manikúra, P-Shine, gel lak', 'Modeláž nehtů', 'Luxusní SPA pedikúra', 'Zvýhodněné balíčky péče'],
    icon: 'nails',
  },
  {
    id: 'kadernictvi',
    title: 'Kadeřnictví',
    lead: 'Střih, barva i účes na velký den pod jednou střechou.',
    items: ['Dámské, pánské i dětské střihy', 'Barvení, melír, ombré, Olaplex', 'Společenské a svatební účesy'],
    icon: 'hair',
  },
  {
    id: 'epilace',
    title: 'Epilace',
    lead: 'Hladká pokožka rychle a šetrně.',
    items: ['Obličej, horní ret, brada', 'Ruce, nohy, podpaží', 'Brazilská epilace'],
    icon: 'leaf',
  },
];
