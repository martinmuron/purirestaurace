import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { MENU_PDF, getPhoto } from "@/content/media";
import { drinkSections, foodSections, type MenuSection } from "@/content/menu";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

function Section({
  section,
  locale,
  dictionary,
}: {
  section: MenuSection;
  locale: Locale;
  dictionary: Dictionary;
}) {
  const withPhotos = section.items.filter((item) => item.photo);
  return (
    <section id={section.id} className="menu-sec" aria-labelledby={`menu-${section.id}`}>
      <div className="menu-sec__head">
        <h3 id={`menu-${section.id}`} className="menu-sec__title">
          {section.title[locale]}
        </h3>
        {section.note?.[locale] ? (
          <span className="menu-sec__note">{section.note[locale]}</span>
        ) : null}
      </div>
      {withPhotos.length > 1 ? (
        <div className="menu-sec__gallery" aria-hidden="true">
          {withPhotos.slice(0, 6).map((item) => {
            const photo = getPhoto(item.photo as string);
            return (
              <figure key={photo.id}>
                <Image
                  src={photo.src}
                  alt=""
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 720px) 45vw, 12rem"
                  loading="lazy"
                />
              </figure>
            );
          })}
        </div>
      ) : null}
      <ul className="mrows">
        {section.items.map((item) => {
          const photo = item.photo ? getPhoto(item.photo) : null;
          return (
            <li
              key={`${section.id}-${item.name.cs}`}
              className={photo ? "mrow" : "mrow mrow--plain"}
            >
              {photo ? (
                <div className="mrow__thumb">
                  <Image
                    src={photo.src}
                    alt={dictionary.photoAlts[photo.id] ?? ""}
                    width={photo.width}
                    height={photo.height}
                    sizes="5rem"
                    loading="lazy"
                  />
                </div>
              ) : null}
              <div className="mrow__body">
                <div className="mrow__line">
                  <span className="mrow__name">{item.name[locale]}</span>
                  <span className="mrow__dots" aria-hidden="true" />
                  <span className="mrow__price">{item.price}</span>
                </div>
                {item.description?.[locale] ? (
                  <p className="mrow__desc">{item.description[locale]}</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function MenuPage({ locale, dictionary }: Props) {
  const m = dictionary.menu;
  return (
    <>
      <header className="page-head">
        <h1>{m.title}</h1>
        <p>{m.lead}</p>
        <div className="page-head__actions">
          <a
            className="btn-pill"
            href={MENU_PDF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${m.pdfAria} (${dictionary.externalNewTab})`}
          >
            {m.pdfLabel} · {m.pdfMeta} ↗
          </a>
        </div>
        <span className="page-head__note">{m.trialNote}</span>
      </header>

      <nav className="menu-nav" aria-label={m.title}>
        <div className="wrap">
          <div className="chips">
            {[...foodSections, ...drinkSections].map((section) => (
              <a key={section.id} href={`#${section.id}`} className="chip">
                {section.title[locale]}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="wrap">
        <div className="menu-group">
          <p className="menu-group__title">{m.food}</p>
          {foodSections.map((section) => (
            <Section key={section.id} section={section} locale={locale} dictionary={dictionary} />
          ))}
        </div>
        <div className="menu-group">
          <p className="menu-group__title">{m.drinks}</p>
          {drinkSections.map((section) => (
            <Section key={section.id} section={section} locale={locale} dictionary={dictionary} />
          ))}
        </div>
        <div style={{ height: "clamp(3rem, 6vw, 5rem)" }} aria-hidden="true" />
      </div>
    </>
  );
}
