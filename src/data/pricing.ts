/**
 * CENÍK – zdroj: seznam služeb v rezervačním systému Noona (11/2026).
 * Kategorie „Naše TOP služby“ z Noony je záměrně vynechána – obsahuje duplicity s jinými cenami.
 * price: číslo = Kč; text = zobrazí se doslova (např. '690 – 1 090 Kč', '15 Kč / ks').
 * includes: co je součástí (zobrazí se jako odrážky pod položkou).
 */
export type PriceItem = { name: string; price?: number | string; duration?: string; includes?: string[]; note?: string };
export type PriceGroup = { title?: string; items: PriceItem[] };
export type PriceCategory = { id: string; title: string; intro?: string; groups: PriceGroup[] };

const pedicureExtras: PriceItem[] = [
  { name: 'Aplikace tamponády zarůstajícího nehtu', price: 50 },
  { name: 'Odstranění zarůstajícího nehtu', price: 50 },
  { name: 'Aplikace léčivého roztoku na zarostlý nehet', price: 50 },
  { name: 'Aplikace nehtového rovnátka', price: 950 },
  { name: 'Odstranění kuřího oka', price: 50 },
];

export const pricing: PriceCategory[] = [
  {
    id: 'kosmetika',
    title: 'Kosmetika',
    groups: [
      {
        title: 'Péče o pleť',
        items: [
          { name: 'Základní kosmetická péče o pleť', price: 1350 },
          { name: 'Kosmetická péče pro muže', price: 1500 },
          { name: 'Přístrojová kosmetická péče o pleť', price: 1500 },
          { name: 'Kosmetická péče o pleť Express', price: 950 },
          { name: 'Kosmetické ošetření ozonizérem (plazmové toky)', price: 950 },
          { name: 'Kosmetické ošetření včetně poradenství', price: 1690 },
          { name: 'Liftingová kosmetická péče a hloubkové čištění pleti vč. liftingového kolagenu', price: 1999 },
          { name: 'Kosmetická péče o pleť pomocí radiofrekvenčního liftingu', price: 1290 },
          { name: 'Kosmetická péče o pleť s kyselinou hyaluronovou pomocí radiofrekvenčního liftingu', price: 1490 },
          { name: 'Kosmetická péče o pleť + diamantová mikrodermabraze obličeje', price: 1390 },
          { name: 'Kosmetická péče o pleť včetně masáže obličeje a dekoltu a úpravy obočí – „jako malá princezna“', price: 2400 },
          { name: 'Péče o pleť vitamínem C', price: 1699 },
          { name: 'Zapracování vitamínu C radiofrekvenčním liftingem vč. zábalu rukou', price: 1899 },
        ],
      },
      {
        title: 'Diamantová mikrodermabraze',
        items: [
          { name: 'Obličej samostatně', price: 890 },
          { name: 'Obličej + krk', price: 1490 },
          { name: 'Obličej + krk + dekolt', price: 1690 },
          { name: 'Břicho', price: 2100 },
        ],
      },
      {
        title: 'Mezoterapie & chemický peeling',
        items: [
          { name: 'Bezjehlová mezoterapie obličeje + sérum kyseliny hyaluronové', price: 790 },
          { name: 'Pelmare Mesoceuticals / radiofrekvence obličeje + sérum kyseliny hyaluronové', price: 1490 },
          { name: 'Bezjehlová mezoterapie obličeje + radiofrekvence + sérum kyseliny hyaluronové', price: 1490 },
          { name: 'Mikrojehličková mezoterapie obličeje s kyselinou hyaluronovou', price: 2490 },
          { name: 'Mikrojehličková mezoterapie obličeje a dekoltu s kyselinou hyaluronovou', price: 2990 },
          { name: 'Neinvazivní mezoterapie rukou (zapracování různých sér dle typu pokožky)', price: 1890 },
          { name: 'Chemický peeling Renophase', price: 1690 },
          { name: "Chemický peeling René D'essay", price: 1690 },
        ],
      },
      {
        title: 'Galvanická žehlička & ultrazvuková špachtle',
        items: [
          { name: 'Galvanická žehlička – péče o pleť', price: 1290 },
          { name: 'Galvanická žehlička – péče o pleť + krk', price: 2490 },
          { name: 'Galvanická žehlička – péče o pleť + krk + dekolt', price: 2990 },
          { name: 'Péče o pleť ultrazvukovou špachtlí + závěrečný krém dle typu pleti', price: 890 },
        ],
      },
      {
        title: 'Permanentní make-up',
        items: [{ name: 'Permanentní make-up', price: 3299 }],
      },
      {
        title: 'Parafínové zábaly',
        items: [
          { name: 'Parafínový zábal na ruce', price: 599 },
          { name: 'Parafínový zábal na nohy', price: 599 },
        ],
      },
    ],
  },
  {
    id: 'rasy',
    title: 'Řasy & obočí',
    groups: [
      {
        title: 'Prodlužování řas',
        items: [
          { name: 'Metodou řasa na řasu', price: 1990 },
          { name: 'Doplnění řas (po 3 týdnech)', price: 700 },
          { name: 'Doplnění řas (po 4 týdnech)', price: 800 },
          { name: 'Metodou 3D–5D, 100% přírodní / syntetické norkové řasy', price: 2300 },
          { name: 'Doplnění řas 3D–5D (po 3 týdnech)', price: 890 },
          { name: 'Doplnění řas 3D–5D (po 4 týdnech)', price: 990 },
          { name: 'Odstranění řas', price: 500 },
        ],
      },
      {
        title: 'Lifting, laminace, úprava a barvení',
        items: [
          { name: 'Lash lifting + botox (laminace řas)', price: 1290 },
          { name: 'Laminace obočí', price: 1290 },
          { name: 'Úprava obočí', price: 350 },
          { name: 'Úprava obočí a barvení obočí', price: 650 },
          { name: 'Barvení obočí a barvení řas', price: 650 },
          { name: 'Barvení obočí', price: 350 },
          { name: 'Barvení řas', price: 350 },
        ],
      },
    ],
  },
  {
    id: 'masaze',
    title: 'Masáže',
    groups: [
      {
        title: 'Masáže',
        items: [
          { name: 'Masáž obličeje', duration: '20 min', price: 690 },
          { name: 'Masáž obličeje, krku, dekoltu', duration: '30 min', price: 990 },
          { name: 'Záda, šíje', duration: '30 min', price: 990 },
          { name: 'Uvolnění krční páteře – ramena, záda, šíje', duration: '60 min', price: 1200 },
          { name: 'Záda, šíje, nohy', duration: '60 min', price: 1200 },
          { name: 'Masáž nohou', duration: '30 min', price: 690 },
          { name: 'Masáž rukou', duration: '30 min', price: 690 },
          { name: 'Klasická / zdravotní masáž celého těla', duration: '60 min', price: 1690 },
          { name: 'Klasická masáž celého těla (včetně masáže obličeje)', duration: '70 min', price: 1990 },
        ],
      },
      {
        title: 'Baňkování & lávové kameny',
        items: [
          { name: 'Baňková masáž', duration: '30 min', price: 990 },
          { name: 'Masáž lávovými / keramickými kameny', duration: '30 min', price: 990 },
          { name: 'Masáž lávovými / keramickými kameny', duration: '60 min', price: 1790 },
        ],
      },
    ],
  },
  {
    id: 'manikura',
    title: 'Manikúra & modeláž',
    groups: [
      {
        title: 'Manikúra',
        items: [
          {
            name: 'Manikúra', price: 590,
            includes: [
              'Dezinfekce rukou a nehtů', 'Diagnostika nehtů a doporučení vhodného postupu', 'Úprava kutikuly',
              'Úprava nehtů do požadovaného tvaru', 'Povrchové leštění nehtů',
              'Závěrečná péče nehtové kůžičky olejíčkem', 'Aplikace výživného krému',
            ],
          },
          { name: 'Lakování klasické', price: 250 },
          { name: 'Lakování gel lakem', price: 490 },
          { name: 'P-Shine (japonská manikúra)', price: 790 },
          { name: 'Sundání Shell / gel laku', price: 299 },
          { name: 'Zdobení nehtů', price: '15 Kč / ks' },
          { name: 'Odstranění gelových nehtů', price: 390 },
          { name: 'Odstranění akrylových nehtů', price: 490 },
        ],
      },
      {
        title: 'Modeláž nehtů',
        items: [
          {
            name: 'Modeláž nehtů – nová', price: 890,
            includes: [
              'Dezinfekce rukou a nehtů', 'Diagnostika nehtů a doporučení vhodného postupu',
              'Úprava nehtového lůžka a jeho odmaštění', 'Úprava kutikuly', 'Prodloužení nehtů pomocí tipů',
              'Zkrácení na požadovanou délku a úprava tvaru', 'Úprava pH nehtu pomocí primeru',
              'Aplikace vhodného materiálu', 'Finální úprava vymodelovaných nehtů',
              'Aplikace lesku, barvy či vytvoření francouzské manikúry',
              'Závěrečná péče nehtové kůžičky olejíčkem', 'Aplikace výživného krému',
            ],
          },
          { name: 'Doplnění modeláže nehtů (stálé klientky)', price: 690 },
        ],
      },
    ],
  },
  {
    id: 'pedikura',
    title: 'Pedikúra',
    groups: [
      {
        title: 'Pedikúra mokrá / suchá',
        items: [
          {
            name: 'Pedikúra mokrá / suchá', price: 699,
            includes: [
              'Relaxační koupel ve vonné soli', 'Odstranění zrohovatělé kůže a otlaků bruskou',
              'Zastřižení a úprava nehtů do správného tvaru', 'Odstranění nehtové kůžičky',
              'Vyčištění nehtového valu a volného okraje nehtu', 'Dezinfekce nehtů', 'Dohlazení plosky',
              'Vmasírování hydratačního, ošetřujícího krému',
            ],
          },
          { name: 'Lakování', price: 250 },
          { name: 'Lakování gel lakem', price: 490 },
          { name: 'Sundání gel laku', price: 299 },
        ],
      },
      {
        title: 'Luxusní SPA pedikúra',
        items: [
          {
            name: 'Luxusní SPA pedikúra', price: 890,
            includes: [
              'Relaxační lázeň nohou', 'Odstranění zrohovatělé kůže a otlaků bruskou',
              'Zastřižení a úprava nehtů do požadovaného tvaru', 'Úprava nehtové kůžičky',
              'Vyčištění nehtového valu a volného okraje nehtu', 'Dezinfekce nehtů', 'Peeling',
              'Vmasírování výživného krému proti vysušování',
            ],
          },
        ],
      },
      { title: 'Doplňkové služby k oběma pedikúrám', items: pedicureExtras },
    ],
  },
  {
    id: 'balicky',
    title: 'Balíčky',
    intro: 'Výhodné kombinace péče.',
    groups: [
      {
        items: [
          { name: 'Balíček plné péče: kosmetické ošetření, manikúra a pedikúra', duration: '120 min', price: 2939 },
          { name: 'Kompletní pečující balíček s parafínovým zábalem – pedikúra i manikúra', price: 2578 },
          { name: 'Manikúra s parafínovým zábalem a pedikúra', price: 1979 },
          { name: 'Luxusní SPA pedikúra s gel lakem', price: 1380 },
        ],
      },
    ],
  },
  {
    id: 'epilace',
    title: 'Epilace',
    groups: [
      {
        items: [
          { name: 'Horní ret', price: 200 },
          { name: 'Brada', price: 200 },
          { name: 'Obličej', price: 790 },
          { name: 'Podpaží', price: 490 },
          { name: 'Ruce', price: 690 },
          { name: 'Lýtka', price: 690 },
          { name: 'Stehna', price: 690 },
          { name: 'Záda', price: 890 },
          { name: 'Brazilská epilace', price: 1490 },
        ],
      },
    ],
  },
  {
    id: 'kadernictvi',
    title: 'Kadeřnictví',
    intro: 'Ceny dle délky vlasů: krátké / polodlouhé / dlouhé.',
    groups: [
      {
        title: 'Střih & foukaná',
        items: [
          { name: 'Dámský střih – krátké vlasy', price: 690 },
          { name: 'Dámský střih – polodlouhé vlasy', price: 790 },
          { name: 'Dámský střih – dlouhé vlasy', price: 950 },
          { name: 'Foukaná / vodová – krátké vlasy', price: 410 },
          { name: 'Foukaná / vodová – polodlouhé vlasy', price: 510 },
          { name: 'Foukaná / vodová – dlouhé vlasy', price: 650 },
        ],
      },
      {
        title: 'Barvení, melír, trvalá',
        items: [
          { name: 'Barvení – krátké vlasy (barvení, mytí, foukaná a styling)', price: 1060 },
          { name: 'Barvení – polodlouhé vlasy (barvení, mytí, foukaná a styling)', price: 1300 },
          { name: 'Barvení – dlouhé vlasy (barvení, mytí, foukaná a styling)', price: 1600 },
          { name: 'Barvení a střih – krátké vlasy', price: 1340 },
          { name: 'Barvení a střih – polodlouhé vlasy', price: 1580 },
          { name: 'Barvení a střih – dlouhé vlasy', price: 1900 },
          { name: 'Barvení ombré – polodlouhé vlasy', price: 1790 },
          { name: 'Barvení ombré – dlouhé vlasy', price: 2290 },
          { name: 'Melír', price: '690 – 2 500 Kč' },
          { name: 'Trvalá – krátké vlasy', price: 710 },
          { name: 'Trvalá – polodlouhé vlasy', price: 990 },
          { name: 'Trvalá – dlouhé vlasy', price: 1390 },
        ],
      },
      {
        title: 'Péče o vlasy',
        items: [
          { name: 'OLAPLEX treatment (cena dle délky a hustoty vlasů)', price: '690 – 1 090 Kč' },
          { name: 'OLAPLEX k barvení či melíru (cena dle délky a hustoty vlasů)', price: '890 – 1 190 Kč' },
          { name: 'Expresní kúra na vlasy', price: 150 },
          { name: 'Intenzivní regenerace vlasů – krátké vlasy', price: 250 },
          { name: 'Intenzivní regenerace vlasů – polodlouhé vlasy', price: 350 },
          { name: 'Intenzivní regenerace vlasů – dlouhé vlasy', price: 450 },
          { name: 'Masáž hlavy + vitamínová kúra', price: 180 },
        ],
      },
      {
        title: 'Společenské & svatební účesy',
        items: [
          { name: 'Společenský účes – krátké / polodlouhé vlasy (bez zkoušky)', price: 990 },
          { name: 'Společenský účes – dlouhé vlasy (bez zkoušky)', price: 1390 },
          { name: 'Svatební účes – krátké vlasy (včetně zkoušky)', price: 1980 },
          { name: 'Svatební účes – polodlouhé vlasy (včetně zkoušky)', price: 2800 },
          { name: 'Svatební účes – dlouhé vlasy (včetně zkoušky)', price: 3200 },
        ],
      },
      {
        title: 'Páni & děti',
        items: [
          { name: 'Pánský střih', price: 490 },
          { name: 'Pánský střih strojkem', price: 250 },
          { name: 'Pánské barvení', price: 550 },
          { name: 'Úprava vousů', price: 100 },
          { name: 'Dětský střih do 7 let (mytí, střih, foukaná, styling)', price: 310 },
          { name: 'Chlapecký střih 7–12 let (mytí, střih, foukaná, styling)', price: 390 },
          { name: 'Dívčí střih 7–12 let (mytí, střih, foukaná, styling)', price: 450 },
        ],
      },
    ],
  },
];

export const formatPrice = (p?: number | string) =>
  p === undefined ? '' : typeof p === 'number' ? `${p.toLocaleString('cs-CZ').replace(/\s/g, ' ')} Kč` : p;
