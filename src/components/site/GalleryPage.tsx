import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { foodPhotos, photos } from "@/content/media";
import { GalleryGrid, type GalleryPhoto } from "./GalleryGrid";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

/** One representative photo per dish; wide/close duplicates stay out of the grid. */
const galleryFoodIds = [
  "khinkali-hands",
  "khachapuri-adjarian",
  "pkhali",
  "khinkali-plate",
  "khachapuri-megruli-wide",
  "ribs-adjika",
  "table-spread-wide",
  "eggplant-rolls",
  "chicken-cornel",
  "salad-eggplant-wide",
  "mushroom-soup",
  "pork-kiwi",
  "shashlik-coals",
  "salad-chicken",
  "bread-basket",
  "grill-platter-close",
  "khachapuri-oil",
  "ojakhuri",
  "khinkali-board",
  "grill-platter",
];

export function GalleryPage({ locale, dictionary }: Props) {
  void locale;
  const alt = (id: string) => dictionary.photoAlts[id] ?? "";

  const food: GalleryPhoto[] = galleryFoodIds
    .map((id) => foodPhotos.find((p) => p.id === id))
    .filter((p): p is (typeof foodPhotos)[number] => Boolean(p))
    .map((p) => ({ ...p, alt: alt(p.id), kind: "food" as const }));

  const interior: GalleryPhoto[] = photos.map((p) => ({
    ...p,
    alt: alt(p.id),
    kind: "interior" as const,
  }));

  // Interleave so the "all" view mixes food and interiors.
  const all: GalleryPhoto[] = [];
  const max = Math.max(food.length, interior.length);
  for (let i = 0; i < max; i += 1) {
    if (food[i]) all.push(food[i]);
    if (i % 2 === 1 && interior[(i - 1) / 2]) all.push(interior[(i - 1) / 2]);
  }
  const used = new Set(all.map((p) => p.id));
  interior.forEach((p) => {
    if (!used.has(p.id)) all.push(p);
  });

  return (
    <>
      <header className="page-head">
        <h1>{dictionary.gallery.title}</h1>
        <p>{dictionary.gallery.lead}</p>
      </header>
      <div className="wrap" style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
        <GalleryGrid
          photos={all}
          labels={{
            all: dictionary.gallery.all,
            food: dictionary.gallery.food,
            interior: dictionary.gallery.interior,
          }}
        />
      </div>
    </>
  );
}
