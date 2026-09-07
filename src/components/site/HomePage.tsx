import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/dictionaries";
import { heroPhoto, photos } from "@/content/media";
import { WalkthroughVideo } from "./WalkthroughVideo";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: Props) {
  const featured = photos.filter((photo) => photo.featured).slice(0, 3);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true">
          <Image
            src={heroPhoto.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero__image"
          />
          <div className="hero__veil" />
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow reveal">{dictionary.home.eyebrow}</p>
          <h1 id="hero-title" className="hero__title reveal reveal--1" translate="no">
            {dictionary.home.headline}
          </h1>
          <p className="hero__lead reveal reveal--2">{dictionary.home.lead}</p>
          <div className="hero__actions reveal reveal--3">
            <Link href={localePath(locale, "menu")} className="btn btn--primary">
              {dictionary.home.ctaMenu}
            </Link>
            <Link href={localePath(locale, "contact")} className="btn btn--ghost">
              {dictionary.home.ctaVisit}
            </Link>
          </div>
        </div>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div className="section__grid about__grid">
          <div className="about__copy">
            <h2 id="about-title" className="section__title">
              {dictionary.home.aboutTitle}
            </h2>
            <p className="section__lead">{dictionary.home.aboutBody}</p>
            <p className="about__secondary">{dictionary.home.aboutSecondary}</p>
          </div>
          <div className="about__frame">
            <Image
              src="/media/photos/b53588b4.jpg"
              alt={dictionary.photoAlts.oven}
              width={1023}
              height={1537}
              className="about__image"
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="section video-section" aria-labelledby="video-title">
        <div className="section__grid video-section__grid">
          <div className="video-section__copy">
            <h2 id="video-title" className="section__title">
              {dictionary.home.videoTitle}
            </h2>
            <p className="section__lead">{dictionary.home.videoBody}</p>
          </div>
          <div className="video-section__frame">
            <WalkthroughVideo title={dictionary.home.videoTitle} />
          </div>
        </div>
      </section>

      <section className="section gallery-teaser" aria-labelledby="gallery-teaser-title">
        <div className="section__intro">
          <h2 id="gallery-teaser-title" className="section__title">
            {dictionary.home.galleryTitle}
          </h2>
          <p className="section__lead">{dictionary.home.galleryBody}</p>
        </div>
        <div className="gallery-teaser__grid">
          {featured.map((photo, index) => (
            <Link
              key={photo.id}
              href={localePath(locale, "gallery")}
              className={`gallery-teaser__item gallery-teaser__item--${index + 1}`}
              aria-label={dictionary.home.galleryCta}
            >
              <Image
                src={photo.src}
                alt={dictionary.photoAlts[photo.id] ?? ""}
                width={photo.width}
                height={photo.height}
                className="gallery-teaser__image"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </Link>
          ))}
        </div>
        <div className="section__actions">
          <Link href={localePath(locale, "gallery")} className="btn btn--primary">
            {dictionary.home.galleryCta}
          </Link>
        </div>
      </section>
    </>
  );
}
