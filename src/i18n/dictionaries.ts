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
    hoursLines: string[];
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
  "dining-blue": "Veranda s modrými trámy, tkanými lampami a gruzínským kobercem",
  "dining-main": "Prostřené stoly s dřevěnými židlemi a vinotékou",
  veranda: "Modrá veranda restaurace PURI ze zahrady",
  "veranda-wheat": "Snop pšenice na verandě s černobílou fotografií",
  "evening-bar": "Jídelní sál s osvětlenou policí s vínem a keramikou",
  "wine-shelf": "Osvětlená police s gruzínským vínem a keramikou",
  "table-detail": "Prostřený stůl s modrým ubrusem",
  "garden-view": "Pohled ze sálu do zahrady",
  "patio-door": "Stůl u dveří do zahrady",
  oven: "Pec na dřevo a sklad palivového dřeva",
  "blue-room": "Salonek s modrými trámy a tkanými lampami",
  wheat: "Snop pšenice na modrém sloupu verandy",
  lamp: "Tkaná lampa v zrcadle ve tvaru amfory",
  "art-pirosmani": "Obraz ve stylu Pirosmaniho na stěně restaurace",
  dress: "Tradiční gruzínské šaty v interiéru",
  "shelf-detail": "Police s vínem a keramikou u dřevěné stěny",
  "art-newspaper": "Zarámované staré gruzínské noviny",
  "lamp-photo": "Tkaná lampa nad černobílou fotografií",
  "art-photo": "Historická fotografie gruzínského prodavače",
  "beer-tap": "Pivní výčep před vinotékou",
  "sideboard-lily": "Lilie ve váze na dřevěné komodě",
  sideboard: "Komoda s liliemi a demižony plnými korků",
  "autumn-sunflowers": "Slunečnice a gruzínský koberec na verandě",
  "autumn-figures": "Podzimní dekorace se slunečnicemi na verandě",
  "autumn-hay": "Balíky slámy a dýně v zahradě",
  "autumn-pumpkin": "Podzimní zahrada s dýní a kvevri",
  "interior-a": "Interiér restaurace PURI",
  "interior-b": "Interiér restaurace PURI",
  "interior-c": "Interiér restaurace PURI",
  "interior-d": "Interiér restaurace PURI",
  "khinkali-hands": "Ruce kuchaře skládají chinkali na dřevěném prkně",
  "khinkali-board": "Čerstvě složené chinkali na kulatém prkně",
  "pkhali-table": "Pchali v keramických miskách na prkně",
  pkhali: "Výběr pchali s chipsy před gruzínským kobercem",
  "khinkali-plate": "Vařené chinkali v bílé misce",
  "khinkali-fried": "Smažené chinkali na jogurtu s výhonky",
  "khachapuri-megruli": "Nakrájené chačapuri s opečeným sýrem",
  "khachapuri-megruli-wide": "Nakrájené chačapuri s opečeným sýrem",
  "khachapuri-imeruli-close": "Detail roztaveného sýra s bylinkami na chačapuri",
  "ribs-adjika": "Telecí žebra v adžice v zapékací misce",
  "ribs-adjika-table": "Telecí žebra v adžice s červeným vínem a chlebem",
  "khachapuri-oil": "Nalévání bylinkového oleje na chačapuri",
  "chicken-cornel": "Kuře s dřínovou omáčkou na bramborové kaši",
  "chicken-cornel-close": "Kuře s dřínovou omáčkou a sklenkou vína",
  "khachapuri-adjarian": "Adžarské chačapuri s vejcem a máslem",
  "khachapuri-adjarian-cut": "Míchání vejce v adžarském chačapuri",
  "eggplant-rolls": "Lilkové závitky s ořechy a granátovým jablkem",
  "eggplant-rolls-table": "Lilkové závitky a chačapuri na stole",
  "salad-eggplant": "Salát s křupavým lilkem",
  "salad-eggplant-wide": "Salát s křupavým lilkem a salát s masem",
  "salad-tomato": "Salát z rajčat, okurek a paprik",
  "mushroom-soup": "Houbový krém s opečenými houbami",
  "lentil-soup": "Hustá polévka s nakládanou cibulí",
  "pork-kiwi": "Vepřové s bramborovými chipsy na zelené omáčce",
  "pork-kiwi-carafe": "Vepřové na zelené omáčce se sklenkou bílého vína",
  "table-spread-wide": "Stůl s chinkali, omáčkami a vínem",
  "table-spread": "Gruzínský stůl plný jídel",
  "salad-chicken": "Salát s masem a granátovým jablkem",
  "bread-basket": "Košík s čerstvým chlebem puri",
  "mushroom-chips": "Křupavé houbové chipsy s granátovým jablkem",
  "shashlik-coals": "Šašlik a kebab na žhavém uhlí",
  "kebab-coals": "Kebab a šašlik v kouři nad uhlím",
  "shashlik-skewer": "Kuchař snímá šašlik z jehly",
  "grill-platter": "Grilovaný výběr s chlebem a zeleninou",
  "grill-platter-close": "Detail grilovaného masa",
  "grilled-vegetables": "Zelenina na grilu nad uhlím",
  kupaty: "Kupaty s červenou cibulí a granátovým jablkem",
  dolma: "Dolma s meruňkami v měděné pánvi",
  "eggplant-baked": "Zapečený lilek s masem a sýrem",
  ojakhuri: "Odžachuri s vepřovým masem, brambory a granátovým jablkem",
  sauces: "Výběr gruzínských omáček",
  napoleon: "Dort Napoleon s brusinkami v měděné misce",
  "napoleon-coffee": "Napoleon s kávou",
  profiteroles: "Sladké koblížky s čokoládovou omáčkou",
  lemonade: "Karafa domácí limonády",
  "georgian-lemonade": "Gruzínská limonáda Natakhtari",
  "khachapuri-flatbread": "Plněný chléb s masem a rajčaty",
  "takeaway-flatbread": "Plněný chléb s rajčaty v krabičce s sebou",
  "takeaway-grill": "Grilované maso s chlebem v krabičce s sebou",
  "takeaway-bread": "Chléb a grilované maso v krabičce s sebou",
};

const photoAltsEn: Dictionary["photoAlts"] = {
  terrace: "Covered terrace at PURI with set tables",
  "dining-blue": "Veranda with blue beams, woven lamps and a Georgian rug",
  "dining-main": "Set tables with bentwood chairs and the wine wall",
  veranda: "PURI's blue veranda seen from the garden",
  "veranda-wheat": "Wheat sheaf on the veranda with a black-and-white photograph",
  "evening-bar": "Dining room with the lit wine and ceramics shelf",
  "wine-shelf": "Lit shelf with Georgian wine and ceramics",
  "table-detail": "Set table with a blue tablecloth",
  "garden-view": "View from the dining room into the garden",
  "patio-door": "Table by the garden doors",
  oven: "Wood-fired oven and stacked firewood",
  "blue-room": "Salon with blue beams and woven pendant lights",
  wheat: "Wheat sheaf on a blue veranda post",
  lamp: "Woven lamp reflected in an amphora-shaped mirror",
  "art-pirosmani": "Pirosmani-style painting on the restaurant wall",
  dress: "Traditional Georgian dress on display",
  "shelf-detail": "Wine and ceramics shelf beside the slatted wall",
  "art-newspaper": "Framed vintage Georgian newspaper",
  "lamp-photo": "Woven lamp above a black-and-white photograph",
  "art-photo": "Historic photograph of a Georgian vendor",
  "beer-tap": "Beer tap in front of the wine wall",
  "sideboard-lily": "Lilies in a vase on a wooden sideboard",
  sideboard: "Sideboard with lilies and demijohns of corks",
  "autumn-sunflowers": "Sunflowers and a Georgian rug on the veranda",
  "autumn-figures": "Autumn decoration with sunflowers on the veranda",
  "autumn-hay": "Hay bales and a pumpkin in the garden",
  "autumn-pumpkin": "Autumn garden with a pumpkin and a qvevri",
  "interior-a": "PURI restaurant interior",
  "interior-b": "PURI restaurant interior",
  "interior-c": "PURI restaurant interior",
  "interior-d": "PURI restaurant interior",
  "khinkali-hands": "A cook pinching khinkali on a wooden board",
  "khinkali-board": "Freshly folded khinkali on a round board",
  "pkhali-table": "Pkhali in ceramic bowls on a board",
  pkhali: "Pkhali selection with crisps in front of a Georgian rug",
  "khinkali-plate": "Boiled khinkali in a white bowl",
  "khinkali-fried": "Fried khinkali on yogurt with microgreens",
  "khachapuri-megruli": "Sliced khachapuri with a golden cheese crust",
  "khachapuri-megruli-wide": "Sliced khachapuri with a golden cheese crust",
  "khachapuri-imeruli-close": "Close-up of melted cheese and herbs on khachapuri",
  "ribs-adjika": "Veal ribs in adjika in a baking dish",
  "ribs-adjika-table": "Veal ribs in adjika with red wine and bread",
  "khachapuri-oil": "Herb oil poured over khachapuri",
  "chicken-cornel": "Chicken with cornelian cherry sauce on mash",
  "chicken-cornel-close": "Chicken with cornelian cherry sauce and a glass of wine",
  "khachapuri-adjarian": "Adjarian khachapuri with egg and butter",
  "khachapuri-adjarian-cut": "Stirring the egg into Adjarian khachapuri",
  "eggplant-rolls": "Eggplant rolls with walnuts and pomegranate",
  "eggplant-rolls-table": "Eggplant rolls and khachapuri on the table",
  "salad-eggplant": "Crispy eggplant salad",
  "salad-eggplant-wide": "Crispy eggplant salad with a meat salad",
  "salad-tomato": "Tomato, cucumber and pepper salad",
  "mushroom-soup": "Cream of mushroom with sautéed mushrooms",
  "lentil-soup": "Thick soup with pickled onion",
  "pork-kiwi": "Pork with potato crisps on a green sauce",
  "pork-kiwi-carafe": "Pork on a green sauce with a glass of white wine",
  "table-spread-wide": "Table with khinkali, sauces and wine",
  "table-spread": "Georgian table full of dishes",
  "salad-chicken": "Meat salad with pomegranate",
  "bread-basket": "Basket of fresh puri bread",
  "mushroom-chips": "Crispy mushroom chips with pomegranate",
  "shashlik-coals": "Shashlik and kebab over glowing coals",
  "kebab-coals": "Kebab and shashlik smoking over the coals",
  "shashlik-skewer": "A cook sliding shashlik off the skewer",
  "grill-platter": "Grill platter with bread and vegetables",
  "grill-platter-close": "Close-up of grilled meat",
  "grilled-vegetables": "Vegetables on the grill over coals",
  kupaty: "Kupaty with red onion and pomegranate",
  dolma: "Dolma with apricots in a copper pan",
  "eggplant-baked": "Baked eggplant with meat and cheese",
  ojakhuri: "Pork ojakhuri with potatoes and pomegranate",
  sauces: "Selection of Georgian sauces",
  napoleon: "Napoleon cake with cranberries in a copper dish",
  "napoleon-coffee": "Napoleon cake with coffee",
  profiteroles: "Sweet dough balls with chocolate sauce",
  lemonade: "Carafe of homemade lemonade",
  "georgian-lemonade": "Natakhtari Georgian lemonade",
  "khachapuri-flatbread": "Stuffed bread with meat and tomatoes",
  "takeaway-flatbread": "Stuffed bread with tomatoes in a takeaway box",
  "takeaway-grill": "Grilled meat with bread in a takeaway box",
  "takeaway-bread": "Bread and grilled meat in a takeaway box",
};

const photoAltsRu: Dictionary["photoAlts"] = {
  terrace: "Крытая терраса ресторана PURI с сервированными столами",
  "dining-blue": "Веранда с голубыми балками, плетёными лампами и грузинским ковром",
  "dining-main": "Сервированные столы с деревянными стульями и винной стеной",
  veranda: "Голубая веранда ресторана PURI со стороны сада",
  "veranda-wheat": "Сноп пшеницы на веранде с чёрно-белой фотографией",
  "evening-bar": "Зал с подсвеченными полками с вином и керамикой",
  "wine-shelf": "Подсвеченная полка с грузинским вином и керамикой",
  "table-detail": "Сервированный стол с синей скатертью",
  "garden-view": "Вид из зала в сад",
  "patio-door": "Стол у дверей в сад",
  oven: "Дровяная печь и поленница",
  "blue-room": "Зал с голубыми балками и плетёными светильниками",
  wheat: "Сноп пшеницы на голубом столбе веранды",
  lamp: "Плетёная лампа в зеркале в форме амфоры",
  "art-pirosmani": "Картина в стиле Пиросмани на стене ресторана",
  dress: "Традиционное грузинское платье в интерьере",
  "shelf-detail": "Полка с вином и керамикой у реечной стены",
  "art-newspaper": "Старинная грузинская газета в рамке",
  "lamp-photo": "Плетёная лампа над чёрно-белой фотографией",
  "art-photo": "Историческая фотография грузинского торговца",
  "beer-tap": "Пивной кран на фоне винной стены",
  "sideboard-lily": "Лилии в вазе на деревянном комоде",
  sideboard: "Комод с лилиями и бутылями с пробками",
  "autumn-sunflowers": "Подсолнухи и грузинский ковёр на веранде",
  "autumn-figures": "Осенний декор с подсолнухами на веранде",
  "autumn-hay": "Тюки соломы и тыква в саду",
  "autumn-pumpkin": "Осенний сад с тыквой и квеври",
  "interior-a": "Интерьер ресторана PURI",
  "interior-b": "Интерьер ресторана PURI",
  "interior-c": "Интерьер ресторана PURI",
  "interior-d": "Интерьер ресторана PURI",
  "khinkali-hands": "Повар лепит хинкали на деревянной доске",
  "khinkali-board": "Свежеслепленные хинкали на круглой доске",
  "pkhali-table": "Пхали в керамических пиалах на доске",
  pkhali: "Ассорти пхали с чипсами на фоне грузинского ковра",
  "khinkali-plate": "Варёные хинкали в белой тарелке",
  "khinkali-fried": "Жареные хинкали на йогурте с микрозеленью",
  "khachapuri-megruli": "Нарезанные хачапури с запечённым сыром",
  "khachapuri-megruli-wide": "Нарезанные хачапури с запечённым сыром",
  "khachapuri-imeruli-close": "Крупный план расплавленного сыра с зеленью на хачапури",
  "ribs-adjika": "Телячьи рёбра в аджике в форме",
  "ribs-adjika-table": "Телячьи рёбра в аджике с красным вином и хлебом",
  "khachapuri-oil": "Травяное масло поливают на хачапури",
  "chicken-cornel": "Курица в кизиловом соусе на пюре",
  "chicken-cornel-close": "Курица в кизиловом соусе с бокалом вина",
  "khachapuri-adjarian": "Хачапури по-аджарски с яйцом и маслом",
  "khachapuri-adjarian-cut": "Перемешивание яйца в хачапури по-аджарски",
  "eggplant-rolls": "Рулетики из баклажанов с орехами и гранатом",
  "eggplant-rolls-table": "Рулетики из баклажанов и хачапури на столе",
  "salad-eggplant": "Салат с хрустящими баклажанами",
  "salad-eggplant-wide": "Салат с хрустящими баклажанами и мясной салат",
  "salad-tomato": "Салат из помидоров, огурцов и перца",
  "mushroom-soup": "Грибной крем-суп с обжаренными грибами",
  "lentil-soup": "Густой суп с маринованным луком",
  "pork-kiwi": "Свинина с картофельными чипсами на зелёном соусе",
  "pork-kiwi-carafe": "Свинина на зелёном соусе с бокалом белого вина",
  "table-spread-wide": "Стол с хинкали, соусами и вином",
  "table-spread": "Грузинский стол, полный блюд",
  "salad-chicken": "Мясной салат с гранатом",
  "bread-basket": "Корзинка со свежим хлебом пури",
  "mushroom-chips": "Хрустящие грибные чипсы с гранатом",
  "shashlik-coals": "Шашлык и кебаб на углях",
  "kebab-coals": "Кебаб и шашлык в дыму над углями",
  "shashlik-skewer": "Повар снимает шашлык с шампура",
  "grill-platter": "Ассорти с гриля с хлебом и овощами",
  "grill-platter-close": "Крупный план мяса на гриле",
  "grilled-vegetables": "Овощи на гриле над углями",
  kupaty: "Купаты с красным луком и гранатом",
  dolma: "Долма с курагой в медной сковороде",
  "eggplant-baked": "Запечённый баклажан с мясом и сыром",
  ojakhuri: "Оджахури из свинины с картофелем и гранатом",
  sauces: "Ассорти грузинских соусов",
  napoleon: "Торт Наполеон с клюквой в медной посуде",
  "napoleon-coffee": "Наполеон с кофе",
  profiteroles: "Пончики с шоколадным соусом",
  lemonade: "Графин домашнего лимонада",
  "georgian-lemonade": "Грузинский лимонад Натахтари",
  "khachapuri-flatbread": "Лепёшка с мясом и помидорами",
  "takeaway-flatbread": "Лепёшка с помидорами в коробке навынос",
  "takeaway-grill": "Мясо на гриле с хлебом в коробке навынос",
  "takeaway-bread": "Хлеб и мясо на гриле в коробке навынос",
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
      hoursLines: ["Po–Pá: od 17:00", "So–Ne: 12:00–23:00"],
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
      hoursLines: ["Mon–Fri: from 5 pm", "Sat–Sun: 12 pm – 11 pm"],
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
      hoursLines: ["Пн–Пт: с 17:00", "Сб–Вс: 12:00–23:00"],
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
