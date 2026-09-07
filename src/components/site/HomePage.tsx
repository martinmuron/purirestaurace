import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/dictionaries";
import { INSTAGRAM_URL } from "@/content/site";
import { getPhoto, heroCutout, photos } from "@/content/media";
import { foodSections } from "@/content/menu";
import { Carousel } from "./Carousel";
import { ContactBlock } from "./ContactBlock";
import { PopularDishes, type DishCard } from "./PopularDishes";
import { WalkthroughVideo } from "./WalkthroughVideo";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

const categoryPhotos: Record<string, string> = {
  bread: "khachapuri-adjarian",
  khinkali: "khinkali-plate",
  grill: "grill-platter-close",
};

const instagramPhotos = ["khinkali-hands", "pkhali-table", "khachapuri-oil", "pork-kiwi-carafe"];

const marqueePills = ["khachapuri-megruli-wide", "table-spread-wide", "shashlik-coals"];

export function HomePage({ locale, dictionary }: Props) {
  const alt = (id: string) => dictionary.photoAlts[id] ?? "";

  const dishes: DishCard[] = foodSections.flatMap((section) =>
    section.items
      .filter((item) => item.photo)
      .map((item) => {
        const photo = getPhoto(item.photo as string);
        return {
          id: `${section.id}-${item.name.cs}`,
          sectionId: section.id,
          name: item.name[locale],
          description: item.description?.[locale],
          price: item.price,
          href: `${localePath(locale, "menu")}#${section.id}`,
          photo: { src: photo.src, width: photo.width, height: photo.height, alt: alt(photo.id) },
        };
      }),
  );

  const categories = foodSections
    .filter((section) => section.items.some((item) => item.photo))
    .map((section) => ({ id: section.id, label: section.title[locale] }));

  const galleryItems = [
    ...photos.slice(0, 8).map((p) => ({ ...p, alt: alt(p.id), caption: alt(p.id) })),
  ];

  const quotePillA = getPhoto("khinkali-hands");
  const quotePillB = getPhoto("table-spread-wide");
  const terrace = getPhoto("terrace");
  const spaceMain = getPhoto("garden-view");

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="display hero__title">
          <em>{dictionary.hero.accent}</em>
          {dictionary.hero.rest}
        </h1>
        <p className="hero__lead">{dictionary.hero.lead}</p>
        <Link href={localePath(locale, "menu")} className="btn-circle hero__cta">
          {dictionary.hero.cta}
        </Link>
        <div className="hero__spacer" aria-hidden="true" />
        <div className="hero__plate" aria-hidden="true">
          <Image
            src={heroCutout.src}
            alt=""
            width={heroCutout.width}
            height={heroCutout.height}
            sizes="(max-width: 900px) 88vw, 48rem"
            preload
          />
        </div>
      </section>

      <section className="quote on-paper" aria-labelledby="quote-title">
        <div className="wrap">
          <h2 id="quote-title" className="display quote__title">
            <em>{dictionary.quote.a1}</em> {dictionary.quote.a2}{" "}
            <span className="quote__pill" aria-hidden="true">
              <Image
                src={quotePillA.src}
                alt=""
                width={quotePillA.width}
                height={quotePillA.height}
                sizes="9rem"
                loading="lazy"
              />
            </span>
            <br />
            <span className="quote__pill" aria-hidden="true">
              <Image
                src={quotePillB.src}
                alt=""
                width={quotePillB.width}
                height={quotePillB.height}
                sizes="9rem"
                loading="lazy"
              />
            </span>{" "}
            <em>{dictionary.quote.b1}</em> {dictionary.quote.b2}
          </h2>
          <p className="quote__body">{dictionary.quote.body}</p>
          <div className="quote__media">
            <Image
              src={terrace.src}
              alt={alt(terrace.id)}
              width={terrace.width}
              height={terrace.height}
              sizes="(max-width: 1400px) 100vw, 84rem"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="categories-title">
        <div className="wrap">
          <div className="sec__head">
            <h2 id="categories-title" className="sec__title">
              {dictionary.categories.title}
            </h2>
            <p className="sec__lead">{dictionary.categories.lead}</p>
          </div>
          <div className="cats">
            {dictionary.categories.items.map((item) => {
              const photo = getPhoto(categoryPhotos[item.id]);
              return (
                <Link
                  key={item.id}
                  href={`${localePath(locale, "menu")}#${item.id}`}
                  className="cat"
                >
                  <div className="cat__media">
                    <Image
                      src={photo.src}
                      alt={alt(photo.id)}
                      width={photo.width}
                      height={photo.height}
                      sizes="(max-width: 720px) 100vw, 30vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="cat__body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="link-out">{dictionary.categories.cta}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="popular-title">
        <div className="wrap">
          <div className="sec__row">
            <div className="sec__head">
              <h2 id="popular-title" className="sec__title">
                {dictionary.popular.title}
              </h2>
            </div>
            <Link href={localePath(locale, "menu")} className="link-out">
              {dictionary.popular.viewMenu}
            </Link>
          </div>
          <PopularDishes
            categories={categories}
            dishes={dishes}
            labels={{
              filter: dictionary.popular.filter,
              all: dictionary.popular.all,
              choose: dictionary.popular.choose,
              showMore: dictionary.popular.showMore,
              showLess: dictionary.popular.showLess,
            }}
          />
        </div>
      </section>

      <section className="sec" aria-labelledby="space-title">
        <div className="wrap space">
          <div className="space__media">
            <div className="space__main">
              <Image
                src={spaceMain.src}
                alt={alt(spaceMain.id)}
                width={spaceMain.width}
                height={spaceMain.height}
                sizes="(max-width: 900px) 82vw, 40vw"
                loading="lazy"
              />
            </div>
            <WalkthroughVideo title={dictionary.space.videoTitle} className="space__video" />
          </div>
          <div className="space__text">
            <h2 id="space-title" className="sec__title">
              {dictionary.space.title}
            </h2>
            <p className="space__lead">{dictionary.space.lead}</p>
            <p className="space__body">{dictionary.space.body}</p>
            <ul className="facts">
              {dictionary.space.facts.map((fact) => (
                <li key={fact.strong}>
                  <strong>{fact.strong}</strong>
                  <span>{fact.detail}</span>
                </li>
              ))}
            </ul>
            <Link href={localePath(locale, "gallery")} className="link-out">
              {dictionary.space.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="sec insta" aria-labelledby="insta-title">
        <div className="wrap">
          <div className="sec__head">
            <h2 id="insta-title" className="sec__title">
              {dictionary.instagram.title} <span className="gold">{dictionary.instagram.accent}</span>
            </h2>
            <p className="sec__lead">{dictionary.instagram.lead}</p>
          </div>
          <div className="insta__row">
            {instagramPhotos.map((id) => {
              const photo = getPhoto(id);
              return (
                <a
                  key={id}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta__item"
                  aria-label={`${alt(id)} (${dictionary.externalNewTab})`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    width={photo.width}
                    height={photo.height}
                    sizes="(max-width: 720px) 72vw, 22vw"
                    loading="lazy"
                  />
                </a>
              );
            })}
          </div>
          <div className="insta__cta">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
              aria-label={`${dictionary.instagram.cta} (${dictionary.externalNewTab})`}
            >
              {dictionary.instagram.cta} ↗
            </a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((dup) => (
            <div className="marquee__group" key={dup}>
              {dictionary.marquee.map((word, index) => {
                const pill = getPhoto(marqueePills[index % marqueePills.length]);
                return (
                  <span key={`${dup}-${word}`} className="marquee__group">
                    <span className={index % 2 === 0 ? "marquee__word is-gold" : "marquee__word"}>
                      {word}
                    </span>
                    <span className="marquee__pill">
                      <Image
                        src={pill.src}
                        alt=""
                        width={pill.width}
                        height={pill.height}
                        sizes="10rem"
                        loading="lazy"
                      />
                    </span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <section className="sec" aria-labelledby="gallery-title">
        <div className="wrap">
          <div className="sec__row">
            <div className="sec__head">
              <h2 id="gallery-title" className="sec__title">
                {dictionary.galleryHome.title}
              </h2>
              <p className="sec__lead">{dictionary.galleryHome.lead}</p>
            </div>
            <Link href={localePath(locale, "gallery")} className="link-out">
              {dictionary.galleryHome.cta}
            </Link>
          </div>
          <Carousel
            items={galleryItems}
            labels={{ prev: dictionary.galleryHome.prev, next: dictionary.galleryHome.next }}
          />
        </div>
      </section>

      <section className="sec" aria-labelledby="contact-title">
        <div className="wrap">
          <div className="sec__head">
            <h2 id="contact-title" className="sec__title">
              {dictionary.contact.title}
            </h2>
          </div>
          <ContactBlock dictionary={dictionary} />
        </div>
      </section>
    </>
  );
}
