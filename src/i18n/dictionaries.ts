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
  skipToContent: string;
  navAria: string;
  footerAria: string;
  externalNewTab: string;
  nav: {
    home: string;
    menu: string;
    gallery: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    accent: string;
    rest: string;
    lead: string;
    cta: string;
  };
  quote: {
    a1: string;
    a2: string;
    b1: string;
    b2: string;
    body: string;
  };
  categories: {
    title: string;
    lead: string;
    cta: string;
    items: { id: string; title: string; text: string }[];
  };
  popular: {
    title: string;
    filter: string;
    all: string;
    viewMenu: string;
    choose: string;
    showMore: string;
    showLess: string;
  };
  space: {
    title: string;
    lead: string;
    body: string;
    facts: { strong: string; detail: string }[];
    cta: string;
    videoTitle: string;
    videoPlay: string;
  };
  instagram: {
    title: string;
    accent: string;
    lead: string;
    cta: string;
  };
  marquee: string[];
  galleryHome: {
    title: string;
    lead: string;
    cta: string;
    prev: string;
    next: string;
  };
  contact: {
    title: string;
    lead: string;
    questions: string;
    hoursTitle: string;
    hoursBody: string;
    hoursNote: string;
    locationTitle: string;
    addressTitle: string;
    emailTitle: string;
    socialTitle: string;
    companyTitle: string;
    companyName: string;
    companyId: string;
    companySeat: string;
    mapAction: string;
    mapTitle: string;
  };
  menu: {
    title: string;
    lead: string;
    category: string;
    pdfLabel: string;
    pdfAction: string;
    pdfMeta: string;
    pdfAria: string;
    food: string;
    drinks: string;
    sectionsTitle: string;
  };
  gallery: {
    title: string;
    lead: string;
    filter: string;
    all: string;
    food: string;
    interior: string;
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
  "khinkali-hands": "Ruce kuchaře skládají chinkali na dřevěném prkně",
  "khinkali-board": "Čerstvě složené chinkali na kulatém prkně",
  "pkhali-table": "Prostřený stůl s pchali a sklenkami vína",
  pkhali: "Pchali z řepy, špenátu a fazolí s granátovým jablkem",
  "pkhali-wide": "Trojice pchali v keramických miskách",
  "khinkali-table": "Talíř chinkali na stole s pivem a květinami",
  "khinkali-plate": "Vařené chinkali na bílém talíři",
  "khachapuri-megruli": "Megrelské chačapuri na dřevěném prkně",
  "khachapuri-megruli-wide": "Nakrájené megrelské chačapuri",
  "ribs-adjika": "Telecí žebra v adžice",
  "ribs-adjika-wide": "Telecí žebra v adžice v zapékací misce",
  "khachapuri-oil": "Bylinkový olej nalévaný na chačapuri",
  "chicken-cornel": "Smažené kuře s dřínovou omáčkou na bramborové kaši",
  "chicken-cornel-wide": "Smažené kuře s dřínovou omáčkou",
  "chicken-cornel-close": "Detail kuřete s dřínovou omáčkou",
  "khachapuri-adjarian": "Adžarské chačapuri s vejcem a máslem",
  "khachapuri-adjarian-wide": "Adžarské chačapuri na prkně",
  "eggplant-rolls": "Lilkové závitky s ořechy a granátovým jablkem",
  "eggplant-rolls-wide": "Lilek s ořechy na podlouhlém talíři",
  "salad-eggplant": "Salát s křupavým lilkem",
  "salad-eggplant-wide": "Salát s křupavým lilkem na modrém ubrusu",
  "mushroom-soup": "Houbový krém s opečenými houbami",
  "mushroom-soup-wide": "Houbový krém v bílé misce",
  "pork-kiwi": "Vepřové s bramborami a kiwi omáčkou",
  "pork-kiwi-wide": "Vepřové s bramborami na zelené omáčce",
  "pork-kiwi-carafe": "Vepřové s bramborami a karafou limonády",
  "table-spread-wide": "Gruzínský stůl plný jídel na terase",
  "table-spread": "Prostřený gruzínský stůl na terase",
  "salad-chicken-wide": "Salát s kuřecím masem a ořechy na červeném talíři",
  "salad-chicken": "Salát s kuřecím masem",
  "bread-basket": "Košík s čerstvým chlebem puri",
  ojakhuri: "Odžachuri s vepřovým masem a bramborami",
  "shashlik-coals": "Šašlik na žhavém uhlí",
  "grill-platter": "Grilovaný výběr s chlebem a zeleninou",
  "grill-platter-wide": "Velký grilovaný výběr na stole",
  "grill-platter-close": "Detail grilovaného masa",
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
  "khinkali-hands": "A cook pinching khinkali on a wooden board",
  "khinkali-board": "Freshly folded khinkali on a round board",
  "pkhali-table": "Set table with pkhali and wine glasses",
  pkhali: "Beetroot, spinach and bean pkhali with pomegranate",
  "pkhali-wide": "Three pkhali in ceramic bowls",
  "khinkali-table": "Plate of khinkali with beer and flowers",
  "khinkali-plate": "Boiled khinkali on a white plate",
  "khachapuri-megruli": "Mingrelian khachapuri on a wooden board",
  "khachapuri-megruli-wide": "Sliced Mingrelian khachapuri",
  "ribs-adjika": "Veal ribs in adjika",
  "ribs-adjika-wide": "Veal ribs in adjika in a baking dish",
  "khachapuri-oil": "Herb oil poured over khachapuri",
  "chicken-cornel": "Fried chicken with cornelian cherry sauce on mash",
  "chicken-cornel-wide": "Fried chicken with cornelian cherry sauce",
  "chicken-cornel-close": "Close-up of chicken with cornelian cherry sauce",
  "khachapuri-adjarian": "Adjarian khachapuri with egg and butter",
  "khachapuri-adjarian-wide": "Adjarian khachapuri on a board",
  "eggplant-rolls": "Eggplant rolls with walnuts and pomegranate",
  "eggplant-rolls-wide": "Eggplant with walnuts on a long plate",
  "salad-eggplant": "Crispy eggplant salad",
  "salad-eggplant-wide": "Crispy eggplant salad on a blue tablecloth",
  "mushroom-soup": "Cream of mushroom with roasted mushrooms",
  "mushroom-soup-wide": "Cream of mushroom in a white bowl",
  "pork-kiwi": "Pork with potatoes and kiwi sauce",
  "pork-kiwi-wide": "Pork with potatoes on green sauce",
  "pork-kiwi-carafe": "Pork with potatoes and a carafe of lemonade",
  "table-spread-wide": "Georgian table full of dishes on the terrace",
  "table-spread": "Set Georgian table on the terrace",
  "salad-chicken-wide": "Chicken salad with walnuts on a red plate",
  "salad-chicken": "Chicken salad",
  "bread-basket": "Basket of fresh puri bread",
  ojakhuri: "Pork ojakhuri with potatoes",
  "shashlik-coals": "Shashlik over glowing coals",
  "grill-platter": "Grill platter with bread and vegetables",
  "grill-platter-wide": "Large grill platter on the table",
  "grill-platter-close": "Close-up of grilled meat",
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
  "khinkali-hands": "Повар лепит хинкали на деревянной доске",
  "khinkali-board": "Свежеслепленные хинкали на круглой доске",
  "pkhali-table": "Накрытый стол с пхали и бокалами вина",
  pkhali: "Пхали из свёклы, шпината и фасоли с гранатом",
  "pkhali-wide": "Три вида пхали в керамических мисках",
  "khinkali-table": "Тарелка хинкали с пивом и цветами",
  "khinkali-plate": "Варёные хинкали на белой тарелке",
  "khachapuri-megruli": "Хачапури по-мегрельски на деревянной доске",
  "khachapuri-megruli-wide": "Нарезанный хачапури по-мегрельски",
  "ribs-adjika": "Телячьи рёбра в аджике",
  "ribs-adjika-wide": "Телячьи рёбра в аджике в форме для запекания",
  "khachapuri-oil": "Масло с зеленью поливают хачапури",
  "chicken-cornel": "Жареная курица с кизиловым соусом на пюре",
  "chicken-cornel-wide": "Жареная курица с кизиловым соусом",
  "chicken-cornel-close": "Курица с кизиловым соусом крупным планом",
  "khachapuri-adjarian": "Хачапури по-аджарски с яйцом и маслом",
  "khachapuri-adjarian-wide": "Хачапури по-аджарски на доске",
  "eggplant-rolls": "Рулетики из баклажана с орехами и гранатом",
  "eggplant-rolls-wide": "Баклажаны с орехами на длинной тарелке",
  "salad-eggplant": "Салат с хрустящим баклажаном",
  "salad-eggplant-wide": "Салат с хрустящим баклажаном на синей скатерти",
  "mushroom-soup": "Грибной крем-суп с обжаренными грибами",
  "mushroom-soup-wide": "Грибной крем-суп в белой миске",
  "pork-kiwi": "Свинина с картофелем и соусом из киви",
  "pork-kiwi-wide": "Свинина с картофелем на зелёном соусе",
  "pork-kiwi-carafe": "Свинина с картофелем и графин лимонада",
  "table-spread-wide": "Грузинский стол, полный блюд, на террасе",
  "table-spread": "Накрытый грузинский стол на террасе",
  "salad-chicken-wide": "Салат с курицей и орехами на красной тарелке",
  "salad-chicken": "Салат с курицей",
  "bread-basket": "Корзина свежего хлеба пури",
  ojakhuri: "Оджахури со свининой и картофелем",
  "shashlik-coals": "Шашлык на раскалённых углях",
  "grill-platter": "Ассорти на гриле с хлебом и овощами",
  "grill-platter-wide": "Большое ассорти на гриле на столе",
  "grill-platter-close": "Мясо на гриле крупным планом",
};

const dictionaries: Record<Locale, Dictionary> = {
  cs: {
    brand: "PURI",
    title: "PURI — Gruzínská restaurace Praha",
    description:
      "Gruzínská restaurace PURI na Šostakovičově náměstí v Praze 5 – Stodůlkách. Chačapuri, chinkali, šašlik a gruzínské víno.",
    tagline: "Gruzínská restaurace",
    skipToContent: "Přejít k obsahu",
    navAria: "Hlavní navigace",
    footerAria: "Patička",
    externalNewTab: "otevře se v novém okně",
    nav: {
      home: "Domů",
      menu: "Menu",
      gallery: "Galerie",
      contact: "Kontakt",
      openMenu: "Otevřít navigaci",
      closeMenu: "Zavřít navigaci",
    },
    hero: {
      accent: "Gruzínská",
      rest: "kuchyně v Praze",
      lead: "Chačapuri z pece, ručně skládané chinkali a šašlik z uhlí. Gruzínský stůl pro celou rodinu ve Stodůlkách.",
      cta: "Menu",
    },
    quote: {
      a1: "Jídlo,",
      a2: "na které nezapomenete,",
      b1: "místo,",
      b2: "kam se budete vracet.",
      body: "V PURI je jídlo vždy středem pozornosti. Pečeme chléb, skládáme chačapuri a podáváme chinkali tak, jak patří ke gruzínskému stolu — vydatně, voňavě a pro sdílení.",
    },
    categories: {
      title: "Naše menu",
      lead: "Nabízíme vše, čím je gruzínská kuchyně proslulá: chačapuri, chinkali, polévky, gril a domácí dezerty.",
      cta: "Zobrazit",
      items: [
        {
          id: "bread",
          title: "Chačapuri a pečivo",
          text: "Imeretské, megrelské i adžarské chačapuri, lobiani, kubdari a chléb puri z pece.",
        },
        {
          id: "khinkali",
          title: "Chinkali",
          text: "Ručně skládané knedlíčky s masem, jehněčím nebo sýrem. Držte za stopku a nejdřív vypijte šťávu.",
        },
        {
          id: "grill",
          title: "Gril",
          text: "Šašlik z kuřecího, vepřového, telecího a jehněčího masa, kupaty a grilovaný výběr pro celý stůl.",
        },
      ],
    },
    popular: {
      title: "Oblíbená jídla",
      filter: "Filtrovat podle kategorie",
      all: "Všechny kategorie",
      viewMenu: "Celé menu",
      choose: "V menu",
      showMore: "Zobrazit více",
      showLess: "Zobrazit méně",
    },
    space: {
      title: "Prostor, který dýchá",
      lead: "Salonek s modrými trámy, terasa pod vrbami a pec na dřevo.",
      body: "PURI stojí na Šostakovičově náměstí ve Stodůlkách. Uvnitř najdete tkané lampy, terakotová křesla a police s gruzínským vínem, venku krytou terasu s výhledem do zahrady.",
      facts: [
        { strong: "Tone", detail: "Pec na dřevo na chléb puri a chačapuri" },
        { strong: "Terasa", detail: "Krytá zahrada pro letní večery" },
        { strong: "Supra", detail: "Gruzínský stůl pro sdílení a víno" },
      ],
      cta: "Celá galerie",
      videoTitle: "Krátká procházka restaurací",
      videoPlay: "Přehrát video",
    },
    instagram: {
      title: "Sledujte nás na",
      accent: "Instagramu",
      lead: "Fotky z kuchyně, novinky z provozu a aktuální otevírací dobu najdete na našich sítích.",
      cta: "Otevřít Instagram",
    },
    marquee: ["Gaumarjos", "Dobrou chuť", "PURI", "Chačapuri", "Chinkali", "Šašlik"],
    galleryHome: {
      title: "Galerie",
      lead: "Terasa, salónky a stůl připravený na hosty.",
      cta: "Celá galerie",
      prev: "Předchozí",
      next: "Další",
    },
    contact: {
      title: "Kontakt",
      lead: "Najdete nás na Šostakovičově náměstí v Praze 5 – Stodůlkách.",
      questions: "Pro dotazy",
      hoursTitle: "Otevírací doba",
      hoursBody: "Aktuální otevírací dobu sledujte na sociálních sítích.",
      hoursNote: "Rezervace přijímáme e-mailem.",
      locationTitle: "Kde nás najdete",
      addressTitle: "Adresa",
      emailTitle: "E-mail",
      socialTitle: "Sociální sítě",
      companyTitle: "Provozovatel",
      companyName: "Melantrich kitchen s.r.o.",
      companyId: "IČO: 24734209",
      companySeat: "Renoirova 652, Praha 5 – Stodůlky",
      mapAction: "Otevřít v Mapách",
      mapTitle: "Mapa s polohou restaurace PURI",
    },
    menu: {
      title: "Menu",
      lead: "Kompletní nabídka. Ceny jsou uvedeny v Kč.",
      category: "Kategorie",
      pdfLabel: "Menu v PDF",
      pdfAction: "Otevřít PDF",
      pdfMeta: "Česky · 3 strany",
      pdfAria: "Otevřít aktuální menu v PDF, 3 strany",
      food: "Jídlo",
      drinks: "Nápoje",
      sectionsTitle: "Výběr z nabídky",
    },
    gallery: {
      title: "Galerie",
      lead: "Jídlo, interiér, terasa a detaily prostoru restaurace PURI.",
      filter: "Filtrovat galerii",
      all: "Vše",
      food: "Jídlo",
      interior: "Interiér",
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
      "Georgian restaurant PURI on Šostakovičovo náměstí in Prague 5 – Stodůlky. Khachapuri, khinkali, shashlik and Georgian wine.",
    tagline: "Georgian restaurant",
    skipToContent: "Skip to content",
    navAria: "Main navigation",
    footerAria: "Footer",
    externalNewTab: "opens in a new tab",
    nav: {
      home: "Home",
      menu: "Menu",
      gallery: "Gallery",
      contact: "Contact",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
    },
    hero: {
      accent: "Georgian",
      rest: "cuisine in Prague",
      lead: "Khachapuri from the oven, hand-pinched khinkali and shashlik over coals. A Georgian table for the whole family in Stodůlky.",
      cta: "Menu",
    },
    quote: {
      a1: "Food,",
      a2: "which cannot be forgotten,",
      b1: "the place,",
      b2: "you want to return to.",
      body: "At PURI, food is always the centre of attention. We bake bread, fold khachapuri and serve khinkali the Georgian way — generous, fragrant and made for sharing.",
    },
    categories: {
      title: "Our menu",
      lead: "Everything Georgian cuisine is famous for: khachapuri, khinkali, soups, the grill and homemade desserts.",
      cta: "Explore",
      items: [
        {
          id: "bread",
          title: "Khachapuri and breads",
          text: "Imeretian, Mingrelian and Adjarian khachapuri, lobiani, kubdari and puri bread from the oven.",
        },
        {
          id: "khinkali",
          title: "Khinkali",
          text: "Hand-pinched dumplings with meat, lamb or cheese. Hold by the knot and sip the broth first.",
        },
        {
          id: "grill",
          title: "Grill",
          text: "Chicken, pork, veal and lamb shashlik, kupaty sausages and a grill platter for the whole table.",
        },
      ],
    },
    popular: {
      title: "Popular dishes",
      filter: "Filter by category",
      all: "All categories",
      viewMenu: "View menu",
      choose: "In the menu",
      showMore: "Show more",
      showLess: "Show less",
    },
    space: {
      title: "A room that breathes",
      lead: "A blue-beamed salon, a terrace under the willows and a wood-fired oven.",
      body: "PURI sits on Šostakovičovo náměstí in Stodůlky. Inside you will find woven pendant lights, terracotta chairs and shelves of Georgian wine; outside, a covered terrace overlooking the garden.",
      facts: [
        { strong: "Tone", detail: "Wood-fired oven for puri bread and khachapuri" },
        { strong: "Terrace", detail: "Covered garden for summer evenings" },
        { strong: "Supra", detail: "A Georgian sharing table with wine" },
      ],
      cta: "Full gallery",
      videoTitle: "A short walk through the restaurant",
      videoPlay: "Play video",
    },
    instagram: {
      title: "Follow us on",
      accent: "Instagram",
      lead: "Kitchen photos, news and current opening hours are on our social channels.",
      cta: "Open Instagram",
    },
    marquee: ["Gaumarjos", "Bon appétit", "PURI", "Khachapuri", "Khinkali", "Shashlik"],
    galleryHome: {
      title: "Gallery",
      lead: "Terrace, dining rooms and a table ready for guests.",
      cta: "Full gallery",
      prev: "Previous",
      next: "Next",
    },
    contact: {
      title: "Contacts",
      lead: "Find us on Šostakovičovo náměstí in Prague 5 – Stodůlky.",
      questions: "For any questions",
      hoursTitle: "Working hours",
      hoursBody: "Follow our social channels for current opening hours.",
      hoursNote: "Reservations by email.",
      locationTitle: "Our location",
      addressTitle: "Address",
      emailTitle: "Email",
      socialTitle: "Social",
      companyTitle: "Operator",
      companyName: "Melantrich kitchen s.r.o.",
      companyId: "Company ID: 24734209",
      companySeat: "Renoirova 652, Prague 5 – Stodůlky",
      mapAction: "Open in Maps",
      mapTitle: "Map showing the location of restaurant PURI",
    },
    menu: {
      title: "Menu",
      lead: "The complete menu. Prices are in CZK.",
      category: "Category",
      pdfLabel: "Menu as PDF",
      pdfAction: "Open PDF",
      pdfMeta: "Czech · 3 pages",
      pdfAria: "Open the current Czech menu as a 3-page PDF",
      food: "Food",
      drinks: "Drinks",
      sectionsTitle: "A taste of the menu",
    },
    gallery: {
      title: "Gallery",
      lead: "Food, interiors, terrace and details from restaurant PURI.",
      filter: "Filter gallery",
      all: "All",
      food: "Food",
      interior: "Interior",
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
      "Грузинский ресторан PURI на площади Шостаковича в Праге 5 – Стодулки. Хачапури, хинкали, шашлык и грузинское вино.",
    tagline: "Грузинский ресторан",
    skipToContent: "Перейти к содержанию",
    navAria: "Основная навигация",
    footerAria: "Подвал",
    externalNewTab: "откроется в новой вкладке",
    nav: {
      home: "Главная",
      menu: "Меню",
      gallery: "Галерея",
      contact: "Контакты",
      openMenu: "Открыть навигацию",
      closeMenu: "Закрыть навигацию",
    },
    hero: {
      accent: "Грузинская",
      rest: "кухня в Праге",
      lead: "Хачапури из печи, хинкали ручной лепки и шашлык на углях. Грузинский стол для всей семьи в Стодулках.",
      cta: "Меню",
    },
    quote: {
      a1: "Еда,",
      a2: "которую невозможно забыть,",
      b1: "место,",
      b2: "куда хочется вернуться.",
      body: "В PURI еда всегда в центре внимания. Мы печём хлеб, готовим хачапури и подаём хинкали по-грузински — щедро, ароматно и для компании.",
    },
    categories: {
      title: "Наше меню",
      lead: "Всё, чем славится грузинская кухня: хачапури, хинкали, супы, гриль и домашние десерты.",
      cta: "Смотреть",
      items: [
        {
          id: "bread",
          title: "Хачапури и выпечка",
          text: "Хачапури по-имеретински, по-мегрельски и по-аджарски, лобиани, кубдари и хлеб пури из печи.",
        },
        {
          id: "khinkali",
          title: "Хинкали",
          text: "Хинкали ручной лепки с мясом, бараниной или сыром. Держите за хвостик и сначала выпейте бульон.",
        },
        {
          id: "grill",
          title: "Гриль",
          text: "Шашлык из курицы, свинины, телятины и баранины, купаты и ассорти на гриле для всего стола.",
        },
      ],
    },
    popular: {
      title: "Популярные блюда",
      filter: "Фильтр по категориям",
      all: "Все категории",
      viewMenu: "Всё меню",
      choose: "В меню",
      showMore: "Показать ещё",
      showLess: "Свернуть",
    },
    space: {
      title: "Пространство, которое дышит",
      lead: "Зал с голубыми балками, терраса под ивами и дровяная печь.",
      body: "PURI находится на площади Шостаковича в Стодулках. Внутри — плетёные светильники, терракотовые кресла и полки с грузинским вином, снаружи — крытая терраса с видом на сад.",
      facts: [
        { strong: "Тонэ", detail: "Дровяная печь для хлеба пури и хачапури" },
        { strong: "Терраса", detail: "Крытый сад для летних вечеров" },
        { strong: "Супра", detail: "Грузинский общий стол и вино" },
      ],
      cta: "Вся галерея",
      videoTitle: "Короткая прогулка по ресторану",
      videoPlay: "Воспроизвести видео",
    },
    instagram: {
      title: "Подписывайтесь в",
      accent: "Instagram",
      lead: "Фото из кухни, новости и актуальные часы работы — в наших соцсетях.",
      cta: "Открыть Instagram",
    },
    marquee: ["Гаумарджос", "Приятного аппетита", "PURI", "Хачапури", "Хинкали", "Шашлык"],
    galleryHome: {
      title: "Галерея",
      lead: "Терраса, залы и стол, готовый принять гостей.",
      cta: "Вся галерея",
      prev: "Назад",
      next: "Вперёд",
    },
    contact: {
      title: "Контакты",
      lead: "Мы на площади Шостаковича в Праге 5 – Стодулки.",
      questions: "По любым вопросам",
      hoursTitle: "Часы работы",
      hoursBody: "Актуальные часы смотрите в соцсетях.",
      hoursNote: "Бронирование по электронной почте.",
      locationTitle: "Как нас найти",
      addressTitle: "Адрес",
      emailTitle: "Эл. почта",
      socialTitle: "Соцсети",
      companyTitle: "Оператор",
      companyName: "Melantrich kitchen s.r.o.",
      companyId: "ИЧО: 24734209",
      companySeat: "Renoirova 652, Прага 5 – Стодулки",
      mapAction: "Открыть в Картах",
      mapTitle: "Карта с расположением ресторана PURI",
    },
    menu: {
      title: "Меню",
      lead: "Полное меню. Цены указаны в кронах.",
      category: "Категория",
      pdfLabel: "Меню в PDF",
      pdfAction: "Открыть PDF",
      pdfMeta: "На чешском · 3 страницы",
      pdfAria: "Открыть актуальное меню на чешском языке, PDF, 3 страницы",
      food: "Еда",
      drinks: "Напитки",
      sectionsTitle: "Избранные блюда",
    },
    gallery: {
      title: "Галерея",
      lead: "Еда, интерьеры, терраса и детали ресторана PURI.",
      filter: "Фильтровать галерею",
      all: "Все",
      food: "Еда",
      interior: "Интерьер",
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
