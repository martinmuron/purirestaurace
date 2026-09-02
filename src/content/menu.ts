export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuSection = {
  id: string;
  title: Record<"cs" | "en" | "ru", string>;
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
        description: "Výběr zeleninových předkrmů s vlašskými ořechy",
        price: "389 Kč",
      },
      {
        name: "Lilek s ořechy",
        description: "Smažený lilek plněný vlašskými ořechy",
        price: "299 Kč",
      },
      {
        name: "Výběr gruzínských sýrů",
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
        description: "Hovězí maso, rýže, rajčata a gruzínské koření",
        price: "209 Kč",
      },
      {
        name: "Čichirtma",
        description: "Kuřecí vývar s vejcem a bylinkami",
        price: "189 Kč",
      },
      {
        name: "Polévka s chinkali",
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
        description: "Uzavřené chačapuri se sýrovou náplní",
        price: "279 Kč",
      },
      {
        name: "Chačapuri Adžarské",
        description: "Lodička se sýrem, vejcem a máslem",
        price: "329 Kč",
      },
      {
        name: "Chačapuri Megrelské",
        price: "319 Kč",
      },
      {
        name: "Puri",
        description: "Tradiční gruzínský chléb",
        price: "119 Kč",
      },
    ],
  },
  {
    id: "khinkali",
    title: { cs: "Chinkali", en: "Khinkali", ru: "Хинкали" },
    items: [
      { name: "S masem", price: "299 Kč" },
      { name: "S jehněčím masem", price: "319 Kč" },
      { name: "Se sýrem", price: "259 Kč" },
    ],
  },
  {
    id: "mains",
    title: { cs: "Hlavní jídla", en: "Mains", ru: "Основные блюда" },
    items: [
      {
        name: "Čašušuli z telecího masa",
        price: "459 Kč",
      },
      {
        name: "Škmeruli",
        description: "Kuře v mléčno-česnekové omáčce",
        price: "479 Kč",
      },
      {
        name: "Kuře tabaka",
        price: "379 Kč",
      },
      {
        name: "Lobio",
        description: "Červené fazole s cibulí a bylinkami",
        price: "309 Kč",
      },
    ],
  },
  {
    id: "grill",
    title: { cs: "Gril", en: "Grill", ru: "Гриль" },
    items: [
      { name: "Kuřecí šašlik", price: "349 Kč" },
      { name: "Vepřový šašlik", price: "399 Kč" },
      { name: "Jehněčí šašlik", price: "579 Kč" },
      { name: "Kupaty", price: "429 Kč" },
    ],
  },
];
