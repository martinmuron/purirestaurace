import type { Locale } from "@/i18n/config";

export type MenuItem = {
  name: string;
  description?: Partial<Record<Locale, string>>;
  price: string;
};

export type MenuSection = {
  id: string;
  title: Record<Locale, string>;
  items: MenuItem[];
};

/**
 * Highlights from the current Czech trial menu PDF.
 * Full document remains the source of truth at /puri-menu-cz.pdf.
 */
export const menuSections: MenuSection[] = [
  {
    id: "starters",
    title: { cs: "Předkrmy", en: "Starters", ru: "Закуски" },
    items: [
      {
        name: "Pchali",
        description: {
          cs: "Výběr zeleninových předkrmů s vlašskými ořechy",
          en: "Assorted vegetable starters with walnuts",
          ru: "Ассорти овощных закусок с грецкими орехами",
        },
        price: "389 Kč",
      },
      {
        name: "Lilek s ořechy",
        description: {
          cs: "Smažený lilek plněný vlašskými ořechy",
          en: "Fried eggplant filled with walnuts",
          ru: "Жареный баклажан с грецкими орехами",
        },
        price: "299 Kč",
      },
      {
        name: "Výběr gruzínských sýrů",
        description: {
          cs: "Výběr tradičních gruzínských sýrů",
          en: "Selection of traditional Georgian cheeses",
          ru: "Ассорти грузинских сыров",
        },
        price: "389 Kč",
      },
    ],
  },
  {
    id: "soups",
    title: { cs: "Polévky", en: "Soups", ru: "Супы" },
    items: [
      {
        name: "Charčo",
        description: {
          cs: "Hovězí maso, rýže, rajčata a gruzínské koření",
          en: "Beef, rice, tomatoes and Georgian spices",
          ru: "Говядина, рис, томаты и грузинские специи",
        },
        price: "209 Kč",
      },
      {
        name: "Čichirtma",
        description: {
          cs: "Kuřecí vývar s vejcem a bylinkami",
          en: "Chicken broth with egg and herbs",
          ru: "Куриный бульон с яйцом и зеленью",
        },
        price: "189 Kč",
      },
      {
        name: "Polévka s chinkali",
        description: {
          cs: "Masový vývar s mini chinkali",
          en: "Meat broth with mini khinkali",
          ru: "Мясной бульон с мини-хинкали",
        },
        price: "340 Kč",
      },
    ],
  },
  {
    id: "bread",
    title: { cs: "Pečivo", en: "Breads", ru: "Выпечка" },
    items: [
      {
        name: "Chačapuri Imeretské",
        description: {
          cs: "Uzavřené chačapuri se sýrovou náplní",
          en: "Closed cheese-filled khachapuri",
          ru: "Закрытый хачапури с сыром",
        },
        price: "279 Kč",
      },
      {
        name: "Chačapuri Adžarské",
        description: {
          cs: "Lodička se sýrem, vejcem a máslem",
          en: "Boat-shaped khachapuri with cheese, egg and butter",
          ru: "Хачапури-лодочка с сыром, яйцом и маслом",
        },
        price: "329 Kč",
      },
      {
        name: "Chačapuri Megrelské",
        description: {
          cs: "Chačapuri se sýrem uvnitř i navrchu",
          en: "Khachapuri with cheese inside and on top",
          ru: "Хачапури с сыром внутри и сверху",
        },
        price: "319 Kč",
      },
      {
        name: "Puri",
        description: {
          cs: "Tradiční gruzínský chléb",
          en: "Traditional Georgian bread",
          ru: "Традиционный грузинский хлеб",
        },
        price: "119 Kč",
      },
    ],
  },
  {
    id: "khinkali",
    title: { cs: "Chinkali", en: "Khinkali", ru: "Хинкали" },
    items: [
      {
        name: "S masem",
        description: {
          cs: "Tradiční chinkali s masovou náplní",
          en: "Classic meat khinkali",
          ru: "Классические хинкали с мясом",
        },
        price: "299 Kč",
      },
      {
        name: "S jehněčím masem",
        description: {
          cs: "Chinkali s jehněčí náplní",
          en: "Lamb khinkali",
          ru: "Хинкали с бараниной",
        },
        price: "319 Kč",
      },
      {
        name: "Se sýrem",
        description: {
          cs: "Chinkali se sýrovou náplní",
          en: "Cheese khinkali",
          ru: "Хинкали с сыром",
        },
        price: "259 Kč",
      },
    ],
  },
  {
    id: "mains",
    title: { cs: "Hlavní jídla", en: "Mains", ru: "Основные блюда" },
    items: [
      {
        name: "Čašušuli z telecího masa",
        description: {
          cs: "Dušené telecí s rajčaty a kořením",
          en: "Stewed veal with tomatoes and spices",
          ru: "Тушеная телятина с томатами и специями",
        },
        price: "459 Kč",
      },
      {
        name: "Škmeruli",
        description: {
          cs: "Kuře v mléčno-česnekové omáčce",
          en: "Chicken in garlic-cream sauce",
          ru: "Курица в молочно-чесночном соусе",
        },
        price: "479 Kč",
      },
      {
        name: "Kuře tabaka",
        description: {
          cs: "Kuře opečené pod lisem",
          en: "Pressed roasted chicken",
          ru: "Цыплёнок табака",
        },
        price: "379 Kč",
      },
      {
        name: "Lobio",
        description: {
          cs: "Červené fazole s cibulí a bylinkami",
          en: "Red beans with onion and herbs",
          ru: "Красная фасоль с луком и зеленью",
        },
        price: "309 Kč",
      },
    ],
  },
  {
    id: "grill",
    title: { cs: "Gril", en: "Grill", ru: "Гриль" },
    items: [
      {
        name: "Kuřecí šašlik",
        description: {
          cs: "Grilované kuřecí maso",
          en: "Grilled chicken skewer",
          ru: "Куриный шашлык",
        },
        price: "349 Kč",
      },
      {
        name: "Vepřový šašlik",
        description: {
          cs: "Grilované vepřové maso",
          en: "Grilled pork skewer",
          ru: "Свиной шашлык",
        },
        price: "399 Kč",
      },
      {
        name: "Jehněčí šašlik",
        description: {
          cs: "Grilované jehněčí maso",
          en: "Grilled lamb skewer",
          ru: "Шашлык из баранины",
        },
        price: "579 Kč",
      },
      {
        name: "Kupaty",
        description: {
          cs: "Gruzínské masové klobásky",
          en: "Georgian meat sausages",
          ru: "Грузинские купаты",
        },
        price: "429 Kč",
      },
    ],
  },
];
