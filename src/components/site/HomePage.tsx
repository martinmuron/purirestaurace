import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/dictionaries";
import { heroPhoto, heroVideo, photos } from "@/content/media";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: Props) {
  const featured = photos.filter((photo) => photo.featured).slice(0, 3);

  return (
    <>
      <section className="hero">
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
          <h1 className="hero__title reveal reveal--1">{dictionary.home.headline}</h1>
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

      <section className="section about">
        <div className="section__grid about__grid">
          <div className="about__copy">
            <h2 className="section__title">{dictionary.home.aboutTitle}</h2>
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

      <section className="section video-section">
        <div className="section__grid video-section__grid">
          <div className="video-section__copy">
            <h2 className="section__title">{dictionary.home.videoTitle}</h2>
            <p className="section__lead">{dictionary.home.videoBody}</p>
          </div>
          <div className="video-section__frame">
            <video
              className="video-section__player"
              src={heroVideo.src}
              poster={heroVideo.poster}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      <section className="section gallery-teaser">
        <div className="section__intro">
          <h2 className="section__title">{dictionary.home.galleryTitle}</h2>
          <p className="section__lead">{dictionary.home.galleryBody}</p>
        </div>
        <div className="gallery-teaser__grid">
          {featured.map((photo, index) => (
            <figure
              key={photo.id}
              className={`gallery-teaser__item gallery-teaser__item--${index + 1}`}
            >
              <Image
                src={photo.src}
                alt={dictionary.photoAlts[photo.id] ?? ""}
                width={photo.width}
                height={photo.height}
                className="gallery-teaser__image"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </figure>
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
