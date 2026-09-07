export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  featured?: boolean;
};

/** Ambiance photos from the client Drive folder (FOTKY). */
export const photos: Photo[] = [
  { id: "terrace", src: "/media/photos/7aa9d451.jpg", width: 1537, height: 1023, featured: true },
  { id: "dining-blue", src: "/media/photos/58168648.jpg", width: 1537, height: 1023, featured: true },
  { id: "dining-main", src: "/media/photos/df192969.jpg", width: 1537, height: 1023, featured: true },
  { id: "evening-bar", src: "/media/photos/4976c74f.jpg", width: 1537, height: 1023 },
  { id: "table-detail", src: "/media/photos/7576f484.jpg", width: 1536, height: 1024 },
  { id: "garden-view", src: "/media/photos/69b58eca.jpg", width: 1023, height: 1537 },
  { id: "patio-door", src: "/media/photos/6a86c580.jpg", width: 1023, height: 1537 },
  { id: "wine-shelf", src: "/media/photos/04d5ba3e.jpg", width: 1023, height: 1537 },
  { id: "oven", src: "/media/photos/b53588b4.jpg", width: 1023, height: 1537 },
  { id: "blue-room", src: "/media/photos/ceb31486.jpg", width: 1023, height: 1537 },
  { id: "interior-a", src: "/media/photos/4c73a1f2.jpg", width: 1536, height: 1024 },
  { id: "interior-b", src: "/media/photos/dfbe841c.jpg", width: 1537, height: 1023 },
  { id: "interior-c", src: "/media/photos/8277e7b0.jpg", width: 1023, height: 1537 },
  { id: "interior-d", src: "/media/photos/b748243e.jpg", width: 1023, height: 1537 },
];

/** Food photography from the client Drive folder (food pics, 2026-09-07). */
export const foodPhotos: Photo[] = [
  { id: "khinkali-hands", src: "/media/photos/food/khinkali-hands.jpg", width: 1200, height: 1800 },
  { id: "khinkali-board", src: "/media/photos/food/khinkali-board.jpg", width: 1200, height: 1800 },
  { id: "pkhali-table", src: "/media/photos/food/pkhali-table.jpg", width: 1200, height: 1800 },
  { id: "pkhali", src: "/media/photos/food/pkhali.jpg", width: 1200, height: 1800 },
  { id: "pkhali-wide", src: "/media/photos/food/pkhali-wide.jpg", width: 1200, height: 1800 },
  { id: "khinkali-table", src: "/media/photos/food/khinkali-table.jpg", width: 1200, height: 1800 },
  { id: "khinkali-plate", src: "/media/photos/food/khinkali-plate.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-megruli", src: "/media/photos/food/khachapuri-megruli.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-megruli-wide", src: "/media/photos/food/khachapuri-megruli-wide.jpg", width: 1800, height: 1200 },
  { id: "ribs-adjika", src: "/media/photos/food/ribs-adjika.jpg", width: 1200, height: 1800 },
  { id: "ribs-adjika-wide", src: "/media/photos/food/ribs-adjika-wide.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-oil", src: "/media/photos/food/khachapuri-oil.jpg", width: 1200, height: 1800 },
  { id: "chicken-cornel", src: "/media/photos/food/chicken-cornel.jpg", width: 1200, height: 1800 },
  { id: "chicken-cornel-wide", src: "/media/photos/food/chicken-cornel-wide.jpg", width: 1800, height: 1200 },
  { id: "chicken-cornel-close", src: "/media/photos/food/chicken-cornel-close.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-adjarian", src: "/media/photos/food/khachapuri-adjarian.jpg", width: 1200, height: 1800 },
  { id: "khachapuri-adjarian-wide", src: "/media/photos/food/khachapuri-adjarian-wide.jpg", width: 1800, height: 1200 },
  { id: "eggplant-rolls", src: "/media/photos/food/eggplant-rolls.jpg", width: 1200, height: 1800 },
  { id: "eggplant-rolls-wide", src: "/media/photos/food/eggplant-rolls-wide.jpg", width: 1800, height: 1200 },
  { id: "salad-eggplant", src: "/media/photos/food/salad-eggplant.jpg", width: 1200, height: 1800 },
  { id: "salad-eggplant-wide", src: "/media/photos/food/salad-eggplant-wide.jpg", width: 1800, height: 1200 },
  { id: "mushroom-soup", src: "/media/photos/food/mushroom-soup.jpg", width: 1200, height: 1800 },
  { id: "mushroom-soup-wide", src: "/media/photos/food/mushroom-soup-wide.jpg", width: 1800, height: 1200 },
  { id: "pork-kiwi", src: "/media/photos/food/pork-kiwi.jpg", width: 1200, height: 1800 },
  { id: "pork-kiwi-wide", src: "/media/photos/food/pork-kiwi-wide.jpg", width: 1800, height: 1200 },
  { id: "pork-kiwi-carafe", src: "/media/photos/food/pork-kiwi-carafe.jpg", width: 1200, height: 1800 },
  { id: "table-spread-wide", src: "/media/photos/food/table-spread-wide.jpg", width: 1800, height: 1200 },
  { id: "table-spread", src: "/media/photos/food/table-spread.jpg", width: 1200, height: 1800 },
  { id: "salad-chicken-wide", src: "/media/photos/food/salad-chicken-wide.jpg", width: 1800, height: 1200 },
  { id: "salad-chicken", src: "/media/photos/food/salad-chicken.jpg", width: 1200, height: 1800 },
  { id: "bread-basket", src: "/media/photos/food/bread-basket.jpg", width: 1200, height: 1800 },
  { id: "ojakhuri", src: "/media/photos/food/ojakhuri.jpg", width: 1200, height: 1800 },
  { id: "shashlik-coals", src: "/media/photos/food/shashlik-coals.jpg", width: 1800, height: 1200 },
  { id: "grill-platter", src: "/media/photos/food/grill-platter.jpg", width: 1800, height: 1200 },
  { id: "grill-platter-wide", src: "/media/photos/food/grill-platter-wide.jpg", width: 1800, height: 1200 },
  { id: "grill-platter-close", src: "/media/photos/food/grill-platter-close.jpg", width: 1200, height: 1800 },
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
