import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { MENU_PDF } from "@/content/media";
import { menuSections } from "@/content/menu";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function MenuPage({ locale, dictionary }: Props) {
  return (
    <main className="page">
      <header className="page__header">
        <h1 className="page__title">{dictionary.menu.title}</h1>
        <p className="page__lead">{dictionary.menu.lead}</p>
        <p className="page__note">{dictionary.menu.trialNote}</p>
      </header>

      <a
        className="menu-pdf"
        href={MENU_PDF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={dictionary.menu.pdfAria}
      >
        <span className="menu-pdf__label">{dictionary.menu.pdfLabel}</span>
        <strong className="menu-pdf__action">{dictionary.menu.pdfAction}</strong>
        <span className="menu-pdf__meta">{dictionary.menu.pdfMeta}</span>
      </a>

      <section className="menu-list" aria-labelledby="menu-sections-title">
        <h2 id="menu-sections-title" className="section__title">
          {dictionary.menu.sectionsTitle}
        </h2>
        <div className="menu-list__sections">
          {menuSections.map((section) => (
            <section key={section.id} className="menu-section">
              <h3 className="menu-section__title">{section.title[locale]}</h3>
              <ul className="menu-section__items">
                {section.items.map((item) => (
                  <li key={`${section.id}-${item.name}`} className="menu-item">
                    <div className="menu-item__row">
                      <span className="menu-item__name">{item.name}</span>
                      <span className="menu-item__price">{item.price}</span>
                    </div>
                    {item.description ? (
                      <p className="menu-item__desc">{item.description}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
