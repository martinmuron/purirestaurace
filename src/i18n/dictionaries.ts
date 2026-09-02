import type { Locale } from "./config";

export const siteRoutes = ["", "menu", "gallery", "contact"] as const;
export type SiteRoute = (typeof siteRoutes)[number];

export function localePath(locale: Locale, route: SiteRoute = ""): string {
  return route ? `/${locale}/${route}` : `/${locale}`;
}

export type Dictionary = {
  brand: string;
  title: string;
  description: string;
  tagline: string;
  nav: {
    home: string;
    menu: string;
    gallery: string;
    contact: string;
    openMenu: string;
  };
  home: {
    eyebrow: string;
    headline: string;
    lead: string;
    ctaMenu: string;
    ctaVisit: string;
    aboutTitle: string;
    aboutBody: string;
    aboutSecondary: string;
    videoTitle: string;
    videoBody: string;
    galleryTitle: string;
    galleryBody: string;
    galleryCta: string;
  };
  menu: {
    title: string;
    lead: string;
    trialNote: string;
    pdfLabel: string;
    pdfAction: string;
    pdfMeta: string;
    pdfAria: string;
    sectionsTitle: string;
  };
  gallery: {
    title: string;
    lead: string;
  };
  contact: {
    title: string;
    lead: string;
    addressTitle: string;
    emailTitle: string;
    socialTitle: string;
    companyTitle: string;
    companyName: string;
    companyId: string;
    companySeat: string;
    mapAction: string;
    hoursTitle: string;
    hoursBody: string;
  };
  footer: {
    rights: string;
  };
  photoAlts: Record<string, string>;
  langLabel: string;
  localeNames: Record<Locale, string>;
};

const photoAltsCs: Dictionary["photoAlts"] = {
  terrace: "Krytá terasa restaurace PURI s prostřenými stoly",
  "dining-blue": "Hlavní salonek s modrými trámy a terakotovými křesly",
  "dining-main": "Světlý jídelní sál s výhledem do zahrady",
  "evening-bar": "Večerní atmosféra u baru",
  "table-detail": "Detail prostřeného stolu",
  "garden-view": "Pohled ze sálu do zahrady",
  "patio-door": "Stůl u dveří do zahrady",
  "wine-shelf": "Police s vínem a keramikou",
  oven: "Pec na dřevo a sklad palivového dřeva",
  "blue-room": "Salonek s modrými trámy a tkanými lampami",
  "interior-a": "Interiér restaurace PURI",
  "interior-b": "Interiér restaurace PURI",
  "interior-c": "Interiér restaurace PURI",
  "interior-d": "Interiér restaurace PURI",
};

const photoAltsEn: Dictionary["photoAlts"] = {
  terrace: "Covered terrace at PURI with set tables",
  "dining-blue": "Dining room with blue beams and terracotta chairs",
  "dining-main": "Bright dining hall overlooking the garden",
  "evening-bar": "Evening atmosphere by the bar",
  "table-detail": "Close-up of a set table",
  "garden-view": "View from the dining room into the garden",
  "patio-door": "Table by the garden doors",
  "wine-shelf": "Wine shelf with ceramics",
  oven: "Wood-fired oven and stacked firewood",
  "blue-room": "Salon with blue beams and woven pendant lights",
  "interior-a": "PURI restaurant interior",
  "interior-b": "PURI restaurant interior",
  "interior-c": "PURI restaurant interior",
  "interior-d": "PURI restaurant interior",
};

const photoAltsRu: Dictionary["photoAlts"] = {
  terrace: "Крытая терраса ресторана PURI с накрытыми столами",
  "dining-blue": "Зал с голубыми балками и терракотовыми креслами",
  "dining-main": "Светлый зал с видом на сад",
  "evening-bar": "Вечерняя атмосфера у бара",
  "table-detail": "Деталь сервировки стола",
  "garden-view": "Вид из зала в сад",
  "patio-door": "Стол у дверей в сад",
  "wine-shelf": "Полка с вином и керамикой",
  oven: "Дровяная печь и поленница",
  "blue-room": "Зал с голубыми балками и плетёными светильниками",
  "interior-a": "Интерьер ресторана PURI",
  "interior-b": "Интерьер ресторана PURI",
  "interior-c": "Интерьер ресторана PURI",
  "interior-d": "Интерьер ресторана PURI",
};

const dictionaries: Record<Locale, Dictionary> = {
  cs: {
    brand: "PURI",
    title: "PURI — Gruzínská restaurace Praha",
    description:
      "Gruzínská restaurace PURI na Šostakovičově náměstí v Praze 5 – Stodůlkách. Chačapuri, chinkali a gril.",
    tagline: "Gruzínská kuchyně v Praze",
    nav: {
      home: "Domů",
      menu: "Menu",
      gallery: "Galerie",
      contact: "Kontakt",
      openMenu: "Otevřít navigaci",
    },
    home: {
      eyebrow: "Praha 5 – Stodůlky",
      headline: "PURI",
      lead: "Gruzínský stůl, pec a zahrada uprostřed Stodůlek.",
      ctaMenu: "Prohlédnout menu",
      ctaVisit: "Jak se k nám dostanete",
      aboutTitle: "Gruzie na talíři",
      aboutBody:
        "V PURI pečeme chléb, skládáme chačapuri a podáváme chinkali tak, jak patří ke gruzínskému stolu — jednoduše, vydatně a s vínem.",
      aboutSecondary:
        "Salonek s modrými trámy, terasa pod vrbami a pec na dřevo. Zkušební provoz už běží.",
      videoTitle: "Prostor, který dýchá",
      videoBody: "Krátký pohled do restaurace před otevřením dne.",
      galleryTitle: "Atmosféra",
      galleryBody: "Terasa, salónky a stůl připravený na hosty.",
      galleryCta: "Celá galerie",
    },
    menu: {
      title: "Menu",
      lead: "Aktuální nabídka ze zkušebního provozu. Kompletní jídelní lístek je v PDF.",
      trialNote: "Zkušební provoz — nabídka se může měnit.",
      pdfLabel: "Kompletní menu",
      pdfAction: "Otevřít PDF",
      pdfMeta: "Česky · 3 strany",
      pdfAria: "Otevřít aktuální menu v PDF, 3 strany",
      sectionsTitle: "Výběr z nabídky",
    },
    gallery: {
      title: "Galerie",
      lead: "Interiér, terasa a detaily prostoru restaurace PURI.",
    },
    contact: {
      title: "Kontakt",
      lead: "Najdete nás na Šostakovičově náměstí ve Stodůlkách.",
      addressTitle: "Adresa",
      emailTitle: "E-mail",
      socialTitle: "Sociální sítě",
      companyTitle: "Provozovatel",
      companyName: "Melantrich kitchen s.r.o.",
      companyId: "IČO: 24734209",
      companySeat: "Renoirova 652, Praha 5 – Stodůlky",
      mapAction: "Otevřít v Mapách",
      hoursTitle: "Provoz",
      hoursBody: "Zkušební provoz. Aktuální otevírací dobu sledujte na sociálních sítích.",
    },
    footer: {
      rights: "PURI restaurace",
    },
    photoAlts: photoAltsCs,
    langLabel: "Jazyk",
    localeNames: { cs: "CZ", en: "EN", ru: "RU" },
  },
  en: {
    brand: "PURI",
    title: "PURI — Georgian Restaurant Prague",
    description:
      "Georgian restaurant PURI on Šostakovičovo náměstí in Prague 5 – Stodůlky. Khachapuri, khinkali and grill.",
    tagline: "Georgian cuisine in Prague",
    nav: {
      home: "Home",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
      openMenu: "Open navigation",
    },
    home: {
      eyebrow: "Prague 5 – Stodůlky",
      headline: "PURI",
      lead: "A Georgian table, wood oven and garden in the heart of Stodůlky.",
      ctaMenu: "View the menu",
      ctaVisit: "Find us",
      aboutTitle: "Georgia on the plate",
      aboutBody:
        "At PURI we bake bread, fold khachapuri and serve khinkali the Georgian way — generous, fragrant and made for sharing.",
      aboutSecondary:
        "Blue-beamed salon, garden terrace and a wood-fired oven. Soft opening is underway.",
      videoTitle: "The room before service",
      videoBody: "A short walk through the restaurant.",
      galleryTitle: "Atmosphere",
      galleryBody: "Terrace, dining rooms and a table ready for guests.",
      galleryCta: "Full gallery",
    },
    menu: {
      title: "Menu",
      lead: "Highlights from our soft-opening menu. The full list is in the Czech PDF.",
      trialNote: "Soft opening — dishes may change.",
      pdfLabel: "Full menu",
      pdfAction: "Open PDF",
      pdfMeta: "Czech · 3 pages",
      pdfAria: "Open the current Czech menu as a 3-page PDF",
      sectionsTitle: "A taste of the menu",
    },
    gallery: {
      title: "Gallery",
      lead: "Interiors, terrace and details from restaurant PURI.",
    },
    contact: {
      title: "Contact",
      lead: "Find us on Šostakovičovo náměstí in Stodůlky.",
      addressTitle: "Address",
      emailTitle: "Email",
      socialTitle: "Social",
      companyTitle: "Operator",
      companyName: "Melantrich kitchen s.r.o.",
      companyId: "Company ID: 24734209",
      companySeat: "Renoirova 652, Prague 5 – Stodůlky",
      mapAction: "Open in Maps",
      hoursTitle: "Hours",
      hoursBody: "Soft opening. Follow our social channels for current opening hours.",
    },
    footer: {
      rights: "PURI restaurant",
    },
    photoAlts: photoAltsEn,
    langLabel: "Language",
    localeNames: { cs: "CZ", en: "EN", ru: "RU" },
  },
  ru: {
    brand: "PURI",
    title: "PURI — Грузинский ресторан Прага",
    description:
      "Грузинский ресторан PURI на площади Шостаковича в Праге 5 – Стодулки. Хачапури, хинкали и гриль.",
    tagline: "Грузинская кухня в Праге",
    nav: {
      home: "Главная",
      menu: "Меню",
      gallery: "Галерея",
      contact: "Контакты",
      openMenu: "Открыть навигацию",
    },
    home: {
      eyebrow: "Прага 5 – Стодулки",
      headline: "PURI",
      lead: "Грузинский стол, дровяная печь и сад в сердце Стодулок.",
      ctaMenu: "Смотреть меню",
      ctaVisit: "Как нас найти",
      aboutTitle: "Грузия на тарелке",
      aboutBody:
        "В PURI мы печём хлеб, готовим хачапури и подаём хинкали по-грузински — щедро, ароматно и для компании.",
      aboutSecondary:
        "Зал с голубыми балками, терраса в саду и дровяная печь. Идёт пробный режим.",
      videoTitle: "Пространство ресторана",
      videoBody: "Короткий взгляд на зал перед сервисом.",
      galleryTitle: "Атмосфера",
      galleryBody: "Терраса, залы и стол, готовый принять гостей.",
      galleryCta: "Вся галерея",
    },
    menu: {
      title: "Меню",
      lead: "Избранное из пробного меню. Полный список — в чешском PDF.",
      trialNote: "Пробный режим — ассортимент может меняться.",
      pdfLabel: "Полное меню",
      pdfAction: "Открыть PDF",
      pdfMeta: "На чешском · 3 страницы",
      pdfAria: "Открыть актуальное меню на чешском языке, PDF, 3 страницы",
      sectionsTitle: "Избранные блюда",
    },
    gallery: {
      title: "Галерея",
      lead: "Интерьеры, терраса и детали ресторана PURI.",
    },
    contact: {
      title: "Контакты",
      lead: "Мы на площади Шостаковича в Стодулках.",
      addressTitle: "Адрес",
      emailTitle: "Эл. почта",
      socialTitle: "Соцсети",
      companyTitle: "Оператор",
      companyName: "Melantrich kitchen s.r.o.",
      companyId: "ИЧО: 24734209",
      companySeat: "Renoirova 652, Прага 5 – Стодулки",
      mapAction: "Открыть в Картах",
      hoursTitle: "Режим работы",
      hoursBody: "Пробный режим. Актуальные часы смотрите в соцсетях.",
    },
    footer: {
      rights: "Ресторан PURI",
    },
    photoAlts: photoAltsRu,
    langLabel: "Язык",
    localeNames: { cs: "CZ", en: "EN", ru: "RU" },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
