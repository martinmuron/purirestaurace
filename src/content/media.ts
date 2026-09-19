export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  featured?: boolean;
};

/** Ambiance photos: client Drive folder (FOTKY) and the 2026-09 professional shoot. */
export const photos: Photo[] = [
  { id: "terrace", src: "/media/photos/7aa9d451.jpg", width: 1537, height: 1023, featured: true },
  { id: "dining-blue", src: "/media/photos/2026-09/dining-blue.jpg", width: 1200, height: 1800, featured: true },
  { id: "dining-main", src: "/media/photos/2026-09/dining-main.jpg", width: 1200, height: 1800, featured: true },
  { id: "veranda", src: "/media/photos/2026-09/veranda.jpg", width: 1200, height: 1800 },
  { id: "veranda-wheat", src: "/media/photos/2026-09/veranda-wheat.jpg", width: 1200, height: 1800 },
  { id: "evening-bar", src: "/media/photos/2026-09/evening-bar.jpg", width: 1200, height: 1800 },
  { id: "wine-shelf", src: "/media/photos/2026-09/wine-shelf.jpg", width: 1200, height: 1800 },
  { id: "table-detail", src: "/media/photos/2026-09/table-detail.jpg", width: 1200, height: 1800 },
  { id: "garden-view", src: "/media/photos/69b58eca.jpg", width: 1023, height: 1537 },
  { id: "patio-door", src: "/media/photos/6a86c580.jpg", width: 1023, height: 1537 },
  { id: "oven", src: "/media/photos/b53588b4.jpg", width: 1023, height: 1537 },
  { id: "blue-room", src: "/media/photos/ceb31486.jpg", width: 1023, height: 1537 },
  { id: "wheat", src: "/media/photos/2026-09/wheat.jpg", width: 1200, height: 1800 },
  { id: "lamp", src: "/media/photos/2026-09/lamp.jpg", width: 1200, height: 1800 },
  { id: "art-pirosmani", src: "/media/photos/2026-09/art-pirosmani.jpg", width: 1200, height: 1800 },
  { id: "dress", src: "/media/photos/2026-09/dress.jpg", width: 1200, height: 1800 },
  { id: "shelf-detail", src: "/media/photos/2026-09/shelf-detail.jpg", width: 1200, height: 1800 },
  { id: "art-newspaper", src: "/media/photos/2026-09/art-newspaper.jpg", width: 1200, height: 1800 },
  { id: "lamp-photo", src: "/media/photos/2026-09/lamp-photo.jpg", width: 1200, height: 1800 },
  { id: "art-photo", src: "/media/photos/2026-09/art-photo.jpg", width: 1200, height: 1800 },
  { id: "beer-tap", src: "/media/photos/2026-09/beer-tap.jpg", width: 1200, height: 1800 },
  { id: "sideboard-lily", src: "/media/photos/2026-09/sideboard-lily.jpg", width: 1200, height: 1800 },
  { id: "sideboard", src: "/media/photos/2026-09/sideboard.jpg", width: 1200, height: 1800 },
  { id: "autumn-sunflowers", src: "/media/photos/2026-09/autumn-sunflowers.jpg", width: 1200, height: 1800 },
  { id: "autumn-figures", src: "/media/photos/2026-09/autumn-figures.jpg", width: 1200, height: 1800 },
  { id: "autumn-hay", src: "/media/photos/2026-09/autumn-hay.jpg", width: 1200, height: 1800 },
  { id: "autumn-pumpkin", src: "/media/photos/2026-09/autumn-pumpkin.jpg", width: 1200, height: 1800 },
  { id: "interior-a", src: "/media/photos/4c73a1f2.jpg", width: 1536, height: 1024 },
  { id: "interior-b", src: "/media/photos/dfbe841c.jpg", width: 1537, height: 1023 },
  { id: "interior-c", src: "/media/photos/8277e7b0.jpg", width: 1023, height: 1537 },
  { id: "interior-d", src: "/media/photos/b748243e.jpg", width: 1023, height: 1537 },
];

/** Food photography: client Drive folder (2026-09-07) and the 2026-09 professional shoot. */
export const foodPhotos: Photo[] = [
  { id: "khinkali-hands", src: "/media/photos/food/khinkali-hands.jpg", width: 1200, height: 1800 },
  { id: "khinkali-board", src: "/media/photos/food/khinkali-board.jpg", width: 1200, height: 1800 },
  { id: "pkhali-table", src: "/media/photos/2026-09/pkhali-table.jpg", width: 1200, height: 1800 },
  { id: "pkhali", src: "/media/photos/2026-09/pkhali.jpg", width: 1200, height: 1800 },
  { id: "khinkali-plate", src: "/media/photos/2026-09/khinkali-plate.jpg", width: 1200, height: 1800 },
  { id: "khinkali-fried", src: "/media/photos/2026-09/khinkali-fried.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-megruli", src: "/media/photos/2026-09/khachapuri-megruli.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-megruli-wide", src: "/media/photos/2026-09/khachapuri-megruli-wide.jpg", width: 1500, height: 1000 },
  { id: "khachapuri-imeruli-close", src: "/media/photos/2026-09/khachapuri-imeruli-close.jpg", width: 1200, height: 1800 },
  { id: "ribs-adjika", src: "/media/photos/2026-09/ribs-adjika.jpg", width: 1200, height: 1800 },
  { id: "ribs-adjika-table", src: "/media/photos/2026-09/ribs-adjika-table.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-oil", src: "/media/photos/2026-09/khachapuri-oil.jpg", width: 1200, height: 1800 },
  { id: "chicken-cornel", src: "/media/photos/2026-09/chicken-cornel.jpg", width: 1200, height: 1800 },
  { id: "chicken-cornel-close", src: "/media/photos/2026-09/chicken-cornel-close.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-adjarian", src: "/media/photos/2026-09/khachapuri-adjarian.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-adjarian-cut", src: "/media/photos/2026-09/khachapuri-adjarian-cut.jpg", width: 1200, height: 1800 },
  { id: "eggplant-rolls", src: "/media/photos/2026-09/eggplant-rolls.jpg", width: 1200, height: 1800 },
  { id: "eggplant-rolls-table", src: "/media/photos/2026-09/eggplant-rolls-table.jpg", width: 1200, height: 1800 },
  { id: "salad-eggplant", src: "/media/photos/2026-09/salad-eggplant.jpg", width: 1200, height: 1800 },
  { id: "salad-eggplant-wide", src: "/media/photos/2026-09/salad-eggplant-wide.jpg", width: 1200, height: 1800 },
  { id: "salad-tomato", src: "/media/photos/2026-09/salad-tomato.jpg", width: 1200, height: 1800 },
  { id: "mushroom-soup", src: "/media/photos/food/mushroom-soup.jpg", width: 1200, height: 1800 },
  { id: "lentil-soup", src: "/media/photos/2026-09/lentil-soup.jpg", width: 1200, height: 1800 },
  { id: "pork-kiwi", src: "/media/photos/2026-09/pork-kiwi.jpg", width: 1200, height: 1800 },
  { id: "pork-kiwi-carafe", src: "/media/photos/2026-09/pork-kiwi-carafe.jpg", width: 1200, height: 1800 },
  { id: "table-spread-wide", src: "/media/photos/2026-09/table-spread-wide.jpg", width: 1500, height: 1000 },
  { id: "table-spread", src: "/media/photos/2026-09/table-spread.jpg", width: 1200, height: 1800 },
  { id: "salad-chicken", src: "/media/photos/2026-09/salad-chicken.jpg", width: 1200, height: 1800 },
  { id: "bread-basket", src: "/media/photos/food/bread-basket.jpg", width: 1200, height: 1800 },
  { id: "mushroom-chips", src: "/media/photos/2026-09/mushroom-chips.jpg", width: 1200, height: 1800 },
  { id: "shashlik-coals", src: "/media/photos/2026-09/shashlik-coals.jpg", width: 1500, height: 1000 },
  { id: "kebab-coals", src: "/media/photos/2026-09/kebab-coals.jpg", width: 1200, height: 1800 },
  { id: "shashlik-skewer", src: "/media/photos/2026-09/shashlik-skewer.jpg", width: 1200, height: 1800 },
  { id: "grill-platter", src: "/media/photos/food/grill-platter.jpg", width: 1800, height: 1200 },
  { id: "grill-platter-close", src: "/media/photos/food/grill-platter-close.jpg", width: 1200, height: 1800 },
  { id: "grilled-vegetables", src: "/media/photos/2026-09/grilled-vegetables.jpg", width: 1200, height: 1800 },
  { id: "kupaty", src: "/media/photos/2026-09/kupaty.jpg", width: 1200, height: 1800 },
  { id: "dolma", src: "/media/photos/2026-09/dolma.jpg", width: 1200, height: 1800 },
  { id: "eggplant-baked", src: "/media/photos/2026-09/eggplant-baked.jpg", width: 1200, height: 1800 },
  { id: "ojakhuri", src: "/media/photos/2026-09/ojakhuri.jpg", width: 1200, height: 1800 },
  { id: "sauces", src: "/media/photos/2026-09/sauces.jpg", width: 1200, height: 1800 },
  { id: "napoleon", src: "/media/photos/2026-09/napoleon.jpg", width: 1200, height: 1800 },
  { id: "napoleon-coffee", src: "/media/photos/2026-09/napoleon-coffee.jpg", width: 1200, height: 1800 },
  { id: "profiteroles", src: "/media/photos/2026-09/profiteroles.jpg", width: 1200, height: 1800 },
  { id: "lemonade", src: "/media/photos/2026-09/lemonade.jpg", width: 1200, height: 1800 },
  { id: "georgian-lemonade", src: "/media/photos/2026-09/georgian-lemonade.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-flatbread", src: "/media/photos/2026-09/khachapuri-flatbread.jpg", width: 1200, height: 1800 },
  { id: "takeaway-flatbread", src: "/media/photos/2026-09/takeaway-flatbread.jpg", width: 1200, height: 1800 },
  { id: "takeaway-grill", src: "/media/photos/2026-09/takeaway-grill.jpg", width: 1200, height: 1800 },
  { id: "takeaway-bread", src: "/media/photos/2026-09/takeaway-bread.jpg", width: 1200, height: 1800 },
];

const allPhotos = [...photos, ...foodPhotos];

export function getPhoto(id: string): Photo {
  const found = allPhotos.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown photo id: ${id}`);
  return found;
}

/** Circular cut-out of Megrelian khachapuri on its board, used in the hero. */
export const heroCutout = {
  src: "/media/photos/food/hero-khachapuri.webp",
  width: 1600,
  height: 1600,
};

export const heroVideo = {
  src: "/media/videos/hero.mp4",
  poster: "/media/photos/7aa9d451.jpg",
  width: 720,
  height: 1280,
};

export const MENU_PDF = "/puri-menu-cz.pdf";
