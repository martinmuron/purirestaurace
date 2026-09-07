import type { Locale } from "@/i18n/config";

type L = Record<Locale, string>;

export type MenuItem = {
  name: L;
  description?: Partial<L>;
  price: string;
  /** id from foodPhotos when we have a photo of this dish */
  photo?: string;
};

export type MenuSection = {
  id: string;
  group: "food" | "drinks";
  title: L;
  note?: Partial<L>;
  items: MenuItem[];
};

/**
 * Full Czech menu transcribed from /puri-menu-cz.pdf (3 pages).
 * The PDF remains the source of truth for prices.
 */
export const menuSections: MenuSection[] = [
  {
    id: "starters",
    group: "food",
    title: { cs: "Předkrmy", en: "Starters", ru: "Закуски" },
    items: [
      {
        name: { cs: "Pchali", en: "Pkhali", ru: "Пхали" },
        description: {
          cs: "Výběr zeleninových předkrmů s vlašskými ořechy, česnekem, bylinkami a gruzínským kořením.",
          en: "Assorted vegetable pâtés with walnuts, garlic, herbs and Georgian spices.",
          ru: "Ассорти овощных закусок с грецкими орехами, чесноком, зеленью и грузинскими специями.",
        },
        price: "389 Kč",
        photo: "pkhali",
      },
      {
        name: { cs: "Lilek s ořechy", en: "Eggplant rolls with walnuts", ru: "Баклажаны с орехами" },
        description: {
          cs: "Smažený lilek plněný vlašskými ořechy, česnekem, bylinkami a kořením.",
          en: "Fried eggplant filled with walnuts, garlic, herbs and spices.",
          ru: "Жареный баклажан с начинкой из грецких орехов, чеснока, зелени и специй.",
        },
        price: "299 Kč",
        photo: "eggplant-rolls",
      },
      {
        name: { cs: "Houbové chipsy", en: "Mushroom chips", ru: "Грибные чипсы" },
        price: "259 Kč",
      },
      {
        name: { cs: "Výběr gruzínských sýrů", en: "Georgian cheese board", ru: "Ассорти грузинских сыров" },
        description: {
          cs: "Výběr tradičních gruzínských sýrů.",
          en: "A selection of traditional Georgian cheeses.",
          ru: "Ассорти традиционных грузинских сыров.",
        },
        price: "389 Kč",
      },
      {
        name: { cs: "Výběr nakládané zeleniny", en: "Georgian pickles", ru: "Ассорти солений" },
        price: "309 Kč",
      },
    ],
  },
  {
    id: "salads",
    group: "food",
    title: { cs: "Saláty", en: "Salads", ru: "Салаты" },
    items: [
      {
        name: { cs: "Salát z okurek a rajčat", en: "Cucumber and tomato salad", ru: "Салат из огурцов и помидоров" },
        description: {
          cs: "Okurky, rajčata, cibule, bylinky a dresink.",
          en: "Cucumber, tomato, onion, herbs and dressing.",
          ru: "Огурцы, помидоры, лук, зелень и заправка.",
        },
        price: "219 Kč",
      },
      {
        name: {
          cs: "Salát z okurek a rajčat s ořechy",
          en: "Cucumber and tomato salad with walnuts",
          ru: "Салат из огурцов и помидоров с орехами",
        },
        description: {
          cs: "Okurky, rajčata, cibule, bylinky a ořechový dresink.",
          en: "Cucumber, tomato, onion, herbs and walnut dressing.",
          ru: "Огурцы, помидоры, лук, зелень и ореховая заправка.",
        },
        price: "259 Kč",
      },
      {
        name: { cs: "Salát s křupavým lilkem", en: "Crispy eggplant salad", ru: "Салат с хрустящим баклажаном" },
        description: {
          cs: "Křupavý lilek, čerstvá zelenina, bylinky a omáčka.",
          en: "Crispy eggplant, fresh vegetables, herbs and sauce.",
          ru: "Хрустящий баклажан, свежие овощи, зелень и соус.",
        },
        price: "289 Kč",
        photo: "salad-eggplant",
      },
      {
        name: { cs: "Salát s kuřecím masem", en: "Chicken salad", ru: "Салат с курицей" },
        description: {
          cs: "Kuřecí maso, čerstvá zelenina, bylinky, vlašské ořechy a dresink.",
          en: "Chicken, fresh vegetables, herbs, walnuts and dressing.",
          ru: "Курица, свежие овощи, зелень, грецкие орехи и заправка.",
        },
        price: "329 Kč",
        photo: "salad-chicken",
      },
    ],
  },
  {
    id: "soups",
    group: "food",
    title: { cs: "Polévky", en: "Soups", ru: "Супы" },
    items: [
      {
        name: { cs: "Charčo", en: "Kharcho", ru: "Харчо" },
        description: {
          cs: "Hovězí maso, rýže, rajčata, bylinky a gruzínské koření.",
          en: "Beef, rice, tomatoes, herbs and Georgian spices.",
          ru: "Говядина, рис, томаты, зелень и грузинские специи.",
        },
        price: "209 Kč",
      },
      {
        name: { cs: "Čichirtma", en: "Chikhirtma", ru: "Чихиртма" },
        description: {
          cs: "Kuřecí vývar, kuřecí maso, vejce, mouka, bylinky a koření.",
          en: "Chicken broth, chicken, egg, flour, herbs and spices.",
          ru: "Куриный бульон, курица, яйцо, мука, зелень и специи.",
        },
        price: "189 Kč",
      },
      {
        name: { cs: "Houbový krém", en: "Cream of mushroom", ru: "Грибной крем-суп" },
        description: {
          cs: "Houby, smetana a koření.",
          en: "Mushrooms, cream and spices.",
          ru: "Грибы, сливки и специи.",
        },
        price: "209 Kč",
        photo: "mushroom-soup",
      },
      {
        name: { cs: "Polévka s chinkali", en: "Khinkali soup", ru: "Суп с хинкали" },
        description: {
          cs: "Masový vývar, mini chinkali, bylinky a koření.",
          en: "Meat broth, mini khinkali, herbs and spices.",
          ru: "Мясной бульон, мини-хинкали, зелень и специи.",
        },
        price: "340 Kč",
      },
    ],
  },
  {
    id: "bread",
    group: "food",
    title: { cs: "Pečivo", en: "Breads", ru: "Выпечка" },
    items: [
      {
        name: { cs: "Chačapuri Imeretské", en: "Imeretian khachapuri", ru: "Хачапури по-имеретински" },
        description: {
          cs: "Uzavřené chačapuri se sýrovou náplní.",
          en: "Closed khachapuri with a cheese filling.",
          ru: "Закрытый хачапури с сырной начинкой.",
        },
        price: "279 Kč",
        photo: "khachapuri-oil",
      },
      {
        name: { cs: "Chačapuri Megrelské", en: "Mingrelian khachapuri", ru: "Хачапури по-мегрельски" },
        description: {
          cs: "Chačapuri se sýrem uvnitř a sýrem navrchu.",
          en: "Khachapuri with cheese inside and on top.",
          ru: "Хачапури с сыром внутри и сверху.",
        },
        price: "319 Kč",
        photo: "khachapuri-megruli",
      },
      {
        name: { cs: "Chačapuri Adžarské", en: "Adjarian khachapuri", ru: "Хачапури по-аджарски" },
        description: {
          cs: "Chačapuri ve tvaru lodičky se sýrem, vejcem a máslem.",
          en: "Boat-shaped khachapuri with cheese, egg and butter.",
          ru: "Хачапури-лодочка с сыром, яйцом и маслом.",
        },
        price: "329 Kč",
        photo: "khachapuri-adjarian",
      },
      {
        name: { cs: "Chačapuri na špízu", en: "Khachapuri on a skewer", ru: "Хачапури на шампуре" },
        description: {
          cs: "Sýr v listovém těstě připravený na špízu.",
          en: "Cheese in puff pastry, baked on a skewer.",
          ru: "Сыр в слоёном тесте, приготовленный на шампуре.",
        },
        price: "399 Kč",
      },
      {
        name: { cs: "Lobiani", en: "Lobiani", ru: "Лобиани" },
        description: {
          cs: "Uzavřený koláč s náplní z fazolí a koření.",
          en: "Closed pie filled with spiced beans.",
          ru: "Закрытый пирог с начинкой из фасоли и специй.",
        },
        price: "239 Kč",
      },
      {
        name: { cs: "Kubdari", en: "Kubdari", ru: "Кубдари" },
        description: {
          cs: "Uzavřený koláč s masem, cibulí a kořením.",
          en: "Closed pie with meat, onion and spices.",
          ru: "Закрытый пирог с мясом, луком и специями.",
        },
        price: "319 Kč",
      },
      {
        name: { cs: "Puri", en: "Puri bread", ru: "Пури" },
        description: {
          cs: "Tradiční gruzínský chléb.",
          en: "Traditional Georgian bread.",
          ru: "Традиционный грузинский хлеб.",
        },
        price: "119 Kč",
        photo: "bread-basket",
      },
    ],
  },
  {
    id: "khinkali",
    group: "food",
    title: { cs: "Chinkali", en: "Khinkali", ru: "Хинкали" },
    items: [
      {
        name: { cs: "Chinkali s masem", en: "Meat khinkali", ru: "Хинкали с мясом" },
        description: {
          cs: "Tradiční chinkali s masovou náplní.",
          en: "Classic hand-pinched dumplings with a meat filling.",
          ru: "Классические хинкали с мясной начинкой.",
        },
        price: "299 Kč",
        photo: "khinkali-plate",
      },
      {
        name: { cs: "Chinkali s jehněčím masem", en: "Lamb khinkali", ru: "Хинкали с бараниной" },
        price: "319 Kč",
      },
      {
        name: { cs: "Chinkali se sýrem", en: "Cheese khinkali", ru: "Хинкали с сыром" },
        price: "259 Kč",
      },
    ],
  },
  {
    id: "mains",
    group: "food",
    title: { cs: "Hlavní jídla", en: "Mains", ru: "Основные блюда" },
    items: [
      {
        name: { cs: "Čašušuli z telecího masa", en: "Veal chashushuli", ru: "Чашушули из телятины" },
        description: {
          cs: "Dušené telecí maso s rajčaty, cibulí, bylinkami a gruzínským kořením.",
          en: "Veal stewed with tomatoes, onion, herbs and Georgian spices.",
          ru: "Тушёная телятина с томатами, луком, зеленью и грузинскими специями.",
        },
        price: "459 Kč",
      },
      {
        name: { cs: "Telecí žebra s adžikou", en: "Veal ribs in adjika", ru: "Телячьи рёбра с аджикой" },
        description: {
          cs: "Telecí žebra v pikantní adžice.",
          en: "Veal ribs in spicy adjika sauce.",
          ru: "Телячьи рёбра в острой аджике.",
        },
        price: "579 Kč",
        photo: "ribs-adjika",
      },
      {
        name: {
          cs: "Vepřové maso s bramborami a kiwi omáčkou",
          en: "Pork with potatoes and kiwi sauce",
          ru: "Свинина с картофелем и соусом из киви",
        },
        description: {
          cs: "Vepřové maso, brambory a kiwi omáčka.",
          en: "Pork, potatoes and kiwi sauce.",
          ru: "Свинина, картофель и соус из киви.",
        },
        price: "429 Kč",
        photo: "pork-kiwi",
      },
      {
        name: { cs: "Odžachuri s vepřovým masem", en: "Pork ojakhuri", ru: "Оджахури со свининой" },
        description: {
          cs: "Vepřové maso, brambory, cibule, bylinky a gruzínské koření.",
          en: "Pork, potatoes, onion, herbs and Georgian spices.",
          ru: "Свинина, картофель, лук, зелень и грузинские специи.",
        },
        price: "389 Kč",
        photo: "ojakhuri",
      },
      {
        name: { cs: "Odžachuri s houbami", en: "Mushroom ojakhuri", ru: "Оджахури с грибами" },
        description: {
          cs: "Houby, brambory, cibule, bylinky a gruzínské koření.",
          en: "Mushrooms, potatoes, onion, herbs and Georgian spices.",
          ru: "Грибы, картофель, лук, зелень и грузинские специи.",
        },
        price: "329 Kč",
      },
      {
        name: { cs: "Brambory po domácku", en: "Home-style potatoes", ru: "Картофель по-домашнему" },
        description: {
          cs: "Brambory opečené na pánvi bez dalších ingrediencí.",
          en: "Pan-roasted potatoes, plain and simple.",
          ru: "Картофель, обжаренный на сковороде.",
        },
        price: "239 Kč",
      },
      {
        name: { cs: "Škmeruli", en: "Shkmeruli", ru: "Шкмерули" },
        description: {
          cs: "Kuře v mléčno-česnekové omáčce.",
          en: "Chicken in a garlic and milk sauce.",
          ru: "Курица в молочно-чесночном соусе.",
        },
        price: "479 Kč",
      },
      {
        name: { cs: "Kuře tabaka", en: "Chicken tabaka", ru: "Цыплёнок табака" },
        description: {
          cs: "Kuře opečené pod lisem.",
          en: "Chicken roasted under a press.",
          ru: "Цыплёнок, обжаренный под прессом.",
        },
        price: "379 Kč",
      },
      {
        name: {
          cs: "Smažené kuře s bramborami a dřínovou omáčkou",
          en: "Fried chicken with potatoes and cornelian cherry sauce",
          ru: "Жареная курица с картофелем и кизиловым соусом",
        },
        price: "519 Kč",
        photo: "chicken-cornel",
      },
      {
        name: { cs: "Lobio", en: "Lobio", ru: "Лобио" },
        description: {
          cs: "Červené fazole s cibulí, bylinkami a gruzínským kořením.",
          en: "Red beans with onion, herbs and Georgian spices.",
          ru: "Красная фасоль с луком, зеленью и грузинскими специями.",
        },
        price: "309 Kč",
      },
      {
        name: { cs: "Dolma", en: "Dolma", ru: "Долма" },
        description: {
          cs: "Vinné listy plněné masem, rýží, bylinkami a kořením.",
          en: "Vine leaves stuffed with meat, rice, herbs and spices.",
          ru: "Виноградные листья с мясом, рисом, зеленью и специями.",
        },
        price: "279 Kč",
      },
      {
        name: { cs: "Zapečený lilek s masem", en: "Baked eggplant with meat", ru: "Запечённый баклажан с мясом" },
        description: {
          cs: "Lilek, maso, rajčatová omáčka a sýr.",
          en: "Eggplant, meat, tomato sauce and cheese.",
          ru: "Баклажан, мясо, томатный соус и сыр.",
        },
        price: "409 Kč",
      },
      {
        name: { cs: "Kebab v omáčce satsebeli", en: "Kebab in satsebeli sauce", ru: "Кебаб в соусе сацебели" },
        description: {
          cs: "Sekané maso s cibulí a kořením, připravené na grilu. Podává se s přílohou a omáčkou.",
          en: "Grilled minced meat with onion and spices, served with a side and sauce.",
          ru: "Рубленое мясо с луком и специями на гриле. Подаётся с гарниром и соусом.",
        },
        price: "359 Kč",
      },
    ],
  },
  {
    id: "grill",
    group: "food",
    title: { cs: "Gril", en: "Grill", ru: "Гриль" },
    items: [
      { name: { cs: "Kuřecí šašlik", en: "Chicken shashlik", ru: "Куриный шашлык" }, price: "349 Kč" },
      { name: { cs: "Vepřový šašlik", en: "Pork shashlik", ru: "Свиной шашлык" }, price: "399 Kč" },
      { name: { cs: "Telecí šašlik", en: "Veal shashlik", ru: "Шашлык из телятины" }, price: "539 Kč" },
      {
        name: { cs: "Jehněčí šašlik", en: "Lamb shashlik", ru: "Шашлык из баранины" },
        price: "579 Kč",
        photo: "shashlik-coals",
      },
      {
        name: { cs: "Kebab mix", en: "Mixed kebab", ru: "Кебаб микс" },
        description: {
          cs: "Sekané maso s cibulí a kořením, připravené na špízu.",
          en: "Minced meat with onion and spices, grilled on a skewer.",
          ru: "Рубленое мясо с луком и специями на шампуре.",
        },
        price: "339 Kč",
      },
      {
        name: { cs: "Jehněčí kebab", en: "Lamb kebab", ru: "Кебаб из баранины" },
        description: {
          cs: "Jehněčí kebab s cibulí a kořením.",
          en: "Lamb kebab with onion and spices.",
          ru: "Кебаб из баранины с луком и специями.",
        },
        price: "499 Kč",
      },
      {
        name: { cs: "Grilovaná zelenina", en: "Grilled vegetables", ru: "Овощи на гриле" },
        description: {
          cs: "Výběr zeleniny připravené na grilu.",
          en: "A selection of vegetables from the grill.",
          ru: "Ассорти овощей, приготовленных на гриле.",
        },
        price: "309 Kč",
      },
      {
        name: { cs: "Kupaty", en: "Kupaty", ru: "Купаты" },
        description: {
          cs: "Gruzínské masové klobásky s kořením, připravené na grilu.",
          en: "Spiced Georgian sausages from the grill.",
          ru: "Грузинские купаты со специями на гриле.",
        },
        price: "429 Kč",
      },
      {
        name: { cs: "Grilovaný losos", en: "Grilled salmon", ru: "Лосось на гриле" },
        description: {
          cs: "Losos připravený na grilu. Podává se s rýží basmati.",
          en: "Grilled salmon served with basmati rice.",
          ru: "Лосось на гриле. Подаётся с рисом басмати.",
        },
        price: "549 Kč",
      },
      {
        name: { cs: "Grilovaný výběr", en: "Grill platter", ru: "Ассорти на гриле" },
        description: {
          cs: "Výběr šašliků z vepřového, hovězího, kuřecího a jehněčího masa s grilovanou zeleninou.",
          en: "Pork, beef, chicken and lamb shashlik with grilled vegetables.",
          ru: "Шашлык из свинины, говядины, курицы и баранины с овощами на гриле.",
        },
        price: "2 689 Kč",
        photo: "grill-platter",
      },
    ],
  },
  {
    id: "sauces",
    group: "food",
    title: { cs: "Omáčky", en: "Sauces", ru: "Соусы" },
    items: [
      {
        name: { cs: "Tkemali", en: "Tkemali", ru: "Ткемали" },
        description: {
          cs: "Švestková omáčka s česnekem, bylinkami a kořením.",
          en: "Sour plum sauce with garlic, herbs and spices.",
          ru: "Сливовый соус с чесноком, зеленью и специями.",
        },
        price: "89 Kč",
      },
      {
        name: { cs: "Adžika", en: "Adjika", ru: "Аджика" },
        description: {
          cs: "Pikantní omáčka z paprik, česneku a koření.",
          en: "Spicy pepper, garlic and spice paste.",
          ru: "Острый соус из перца, чеснока и специй.",
        },
        price: "89 Kč",
      },
      {
        name: { cs: "Baži", en: "Bazhe", ru: "Баже" },
        description: {
          cs: "Omáčka z vlašských ořechů, česneku a gruzínského koření.",
          en: "Walnut sauce with garlic and Georgian spices.",
          ru: "Соус из грецких орехов, чеснока и грузинских специй.",
        },
        price: "89 Kč",
      },
      {
        name: { cs: "Mašarafi", en: "Masharafi", ru: "Машарафи" },
        description: { cs: "Sladkokyselá omáčka.", en: "Sweet and sour sauce.", ru: "Кисло-сладкий соус." },
        price: "89 Kč",
      },
      {
        name: { cs: "Satsebeli", en: "Satsebeli", ru: "Сацебели" },
        description: {
          cs: "Rajčatová omáčka s česnekem, bylinkami a kořením.",
          en: "Tomato sauce with garlic, herbs and spices.",
          ru: "Томатный соус с чесноком, зеленью и специями.",
        },
        price: "89 Kč",
      },
      { name: { cs: "Zakysaná smetana", en: "Sour cream", ru: "Сметана" }, price: "89 Kč" },
    ],
  },
  {
    id: "desserts",
    group: "food",
    title: { cs: "Dezerty", en: "Desserts", ru: "Десерты" },
    items: [
      { name: { cs: "Napoleon", en: "Napoleon", ru: "Наполеон" }, price: "229 Kč" },
      { name: { cs: "Medovik", en: "Medovik honey cake", ru: "Медовик" }, price: "229 Kč" },
      { name: { cs: "Palačinky", en: "Crêpes", ru: "Блины" }, price: "229 Kč" },
    ],
  },
  {
    id: "soft-drinks",
    group: "drinks",
    title: { cs: "Nealkoholické nápoje", en: "Soft drinks", ru: "Безалкогольные напитки" },
    items: [
      { name: { cs: "Pomerančový džus", en: "Orange juice", ru: "Апельсиновый сок" }, price: "75 Kč" },
      { name: { cs: "Jablečný džus", en: "Apple juice", ru: "Яблочный сок" }, price: "75 Kč" },
      { name: { cs: "Domácí limonáda", en: "Homemade lemonade", ru: "Домашний лимонад" }, price: "185 Kč" },
      { name: { cs: "Borjomi", en: "Borjomi", ru: "Боржоми" }, price: "85 Kč" },
      { name: { cs: "Kompot", en: "Kompot", ru: "Компот" }, price: "190 Kč" },
      { name: { cs: "Gruzínská limonáda", en: "Georgian lemonade", ru: "Грузинский лимонад" }, price: "105 Kč" },
      { name: { cs: "Coca-Cola", en: "Coca-Cola", ru: "Coca-Cola" }, price: "85 Kč" },
      { name: { cs: "Fanta", en: "Fanta", ru: "Fanta" }, price: "85 Kč" },
      { name: { cs: "Sprite", en: "Sprite", ru: "Sprite" }, price: "85 Kč" },
      { name: { cs: "Tonic", en: "Tonic", ru: "Тоник" }, price: "75 Kč" },
      { name: { cs: "Neperlivá voda", en: "Still water", ru: "Вода без газа" }, price: "75 / 105 Kč" },
      { name: { cs: "Perlivá voda", en: "Sparkling water", ru: "Вода с газом" }, price: "75 / 105 Kč" },
    ],
  },
  {
    id: "coffee",
    group: "drinks",
    title: { cs: "Káva a čaj", en: "Coffee and tea", ru: "Кофе и чай" },
    items: [
      { name: { cs: "Espresso", en: "Espresso", ru: "Эспрессо" }, price: "75 Kč" },
      { name: { cs: "Americano", en: "Americano", ru: "Американо" }, price: "75 Kč" },
      { name: { cs: "Cappuccino", en: "Cappuccino", ru: "Капучино" }, price: "75 Kč" },
      { name: { cs: "Latte", en: "Latte", ru: "Латте" }, price: "90 Kč" },
      { name: { cs: "Gruzínský čaj", en: "Georgian tea", ru: "Грузинский чай" }, price: "65 Kč" },
    ],
  },
  {
    id: "white-wine",
    group: "drinks",
    title: { cs: "Bílá vína", en: "White wines", ru: "Белые вина" },
    note: { cs: "0,15 l / láhev", en: "glass / bottle", ru: "бокал / бутылка" },
    items: [
      { name: { cs: "Mtevino Rkatsiteli · suché", en: "Mtevino Rkatsiteli · dry", ru: "Mtevino Rkatsiteli · сухое" }, price: "159 / 650 Kč" },
      { name: { cs: "Qisqisi Tsinandali · suché", en: "Qisqisi Tsinandali · dry", ru: "Qisqisi Tsinandali · сухое" }, price: "840 Kč" },
      { name: { cs: "Rachuli Mtsvane · suché", en: "Rachuli Mtsvane · dry", ru: "Rachuli Mtsvane · сухое" }, price: "1 050 Kč" },
      {
        name: {
          cs: "Goruli Mtsvane, Château Mukhrani · suché",
          en: "Goruli Mtsvane, Château Mukhrani · dry",
          ru: "Goruli Mtsvane, Château Mukhrani · сухое",
        },
        price: "1 550 Kč",
      },
      { name: { cs: "Mtevino Alazani · polosladké", en: "Mtevino Alazani · semi-sweet", ru: "Mtevino Alazani · полусладкое" }, price: "169 / 690 Kč" },
      { name: { cs: "Qisqisi Tvishi · polosladké", en: "Qisqisi Tvishi · semi-sweet", ru: "Qisqisi Tvishi · полусладкое" }, price: "890 Kč" },
      { name: { cs: "Naberauli Tvishi · polosladké", en: "Naberauli Tvishi · semi-sweet", ru: "Naberauli Tvishi · полусладкое" }, price: "1 600 Kč" },
      { name: { cs: "Vazisubani Kakhuri Mtsvane · kvevri", en: "Vazisubani Kakhuri Mtsvane · qvevri", ru: "Vazisubani Kakhuri Mtsvane · квеври" }, price: "950 Kč" },
      { name: { cs: "Mtsvane Qisqisi · kvevri", en: "Mtsvane Qisqisi · qvevri", ru: "Mtsvane Qisqisi · квеври" }, price: "840 Kč" },
    ],
  },
  {
    id: "red-wine",
    group: "drinks",
    title: { cs: "Červená, šumivá a růžová vína", en: "Red, sparkling and rosé wines", ru: "Красные, игристые и розовые вина" },
    note: { cs: "0,15 l / láhev", en: "glass / bottle", ru: "бокал / бутылка" },
    items: [
      { name: { cs: "Georgian Sun · suché", en: "Georgian Sun · dry", ru: "Georgian Sun · сухое" }, price: "169 / 800 Kč" },
      { name: { cs: "Vazisubani Saperavi · suché", en: "Vazisubani Saperavi · dry", ru: "Vazisubani Saperavi · сухое" }, price: "1 050 Kč" },
      { name: { cs: "Naberauli Saperavi Dzelshavi · suché", en: "Naberauli Saperavi Dzelshavi · dry", ru: "Naberauli Saperavi Dzelshavi · сухое" }, price: "1 600 Kč" },
      { name: { cs: "Pirveli Saperavi Qvevri · suché", en: "Pirveli Saperavi Qvevri · dry", ru: "Pirveli Saperavi Qvevri · сухое" }, price: "1 550 Kč" },
      { name: { cs: "Mtevino Alazani · polosladké", en: "Mtevino Alazani · semi-sweet", ru: "Mtevino Alazani · полусладкое" }, price: "169 / 690 Kč" },
      { name: { cs: "Mtevino Kindzmarauli · polosladké", en: "Mtevino Kindzmarauli · semi-sweet", ru: "Mtevino Kindzmarauli · полусладкое" }, price: "199 / 970 Kč" },
      { name: { cs: "Riot Saperavi · polosladké", en: "Riot Saperavi · semi-sweet", ru: "Riot Saperavi · полусладкое" }, price: "840 Kč" },
      { name: { cs: "Naberauli Khvanchkara · polosladké", en: "Naberauli Khvanchkara · semi-sweet", ru: "Naberauli Khvanchkara · полусладкое" }, price: "1 750 Kč" },
      { name: { cs: "Amosa Tsitska · šumivé", en: "Amosa Tsitska · sparkling", ru: "Amosa Tsitska · игристое" }, price: "1 150 Kč" },
      { name: { cs: "Amosa Tavkveri Rosé", en: "Amosa Tavkveri Rosé", ru: "Amosa Tavkveri Rosé" }, price: "1 150 Kč" },
    ],
  },
  {
    id: "spirits",
    group: "drinks",
    title: { cs: "Koňak, vodka a čača", en: "Cognac, vodka and chacha", ru: "Коньяк, водка и чача" },
    items: [
      { name: { cs: "Tikhari · 0,05 l", en: "Tikhari · 0.05 l", ru: "Tikhari · 0,05 л" }, price: "149 Kč" },
      { name: { cs: "Tikhari · 0,5 l", en: "Tikhari · 0.5 l", ru: "Tikhari · 0,5 л" }, price: "1 349 Kč" },
      { name: { cs: "Sarajishvili XO · 0,5 l", en: "Sarajishvili XO · 0.5 l", ru: "Sarajishvili XO · 0,5 л" }, price: "3 200 Kč" },
      { name: { cs: "Finlandia · 0,05 l", en: "Finlandia · 0.05 l", ru: "Finlandia · 0,05 л" }, price: "90 Kč" },
      { name: { cs: "Finlandia · 1 l", en: "Finlandia · 1 l", ru: "Finlandia · 1 л" }, price: "1 550 Kč" },
      { name: { cs: "Grey Goose · 0,05 l", en: "Grey Goose · 0.05 l", ru: "Grey Goose · 0,05 л" }, price: "169 Kč" },
      { name: { cs: "Grey Goose · 1 l", en: "Grey Goose · 1 l", ru: "Grey Goose · 1 л" }, price: "2 800 Kč" },
      { name: { cs: "Čača · 0,05 l", en: "Chacha · 0.05 l", ru: "Чача · 0,05 л" }, price: "119 Kč" },
      { name: { cs: "Čača · 0,5 l", en: "Chacha · 0.5 l", ru: "Чача · 0,5 л" }, price: "950 Kč" },
    ],
  },
  {
    id: "cocktails",
    group: "drinks",
    title: { cs: "Koktejly", en: "Cocktails", ru: "Коктейли" },
    items: [
      { name: { cs: "Aperol Spritz", en: "Aperol Spritz", ru: "Апероль Шприц" }, price: "149 Kč" },
      { name: { cs: "Mojito", en: "Mojito", ru: "Мохито" }, price: "159 Kč" },
      { name: { cs: "Gin & Tonic", en: "Gin & Tonic", ru: "Джин-тоник" }, price: "149 Kč" },
      { name: { cs: "Cuba Libre", en: "Cuba Libre", ru: "Куба Либре" }, price: "189 Kč" },
    ],
  },
];

export const foodSections = menuSections.filter((s) => s.group === "food");
export const drinkSections = menuSections.filter((s) => s.group === "drinks");
