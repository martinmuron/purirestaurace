import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { photos } from "@/content/media";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function GalleryPage({ locale, dictionary }: Props) {
  void locale;

  return (
    <main className="page">
      <header className="page__header">
        <h1 className="page__title">{dictionary.gallery.title}</h1>
        <p className="page__lead">{dictionary.gallery.lead}</p>
      </header>

      <div className="gallery-grid">
        {photos.map((photo) => {
          const portrait = photo.height > photo.width;
          return (
            <figure
              key={photo.id}
              className={portrait ? "gallery-grid__item is-portrait" : "gallery-grid__item"}
            >
              <Image
                src={photo.src}
                alt={dictionary.photoAlts[photo.id] ?? ""}
                width={photo.width}
                height={photo.height}
                className="gallery-grid__image"
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </figure>
          );
        })}
      </div>
    </main>
  );
}
