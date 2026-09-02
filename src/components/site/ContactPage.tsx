import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  ADDRESS_LINES,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAPS_URL,
} from "@/content/site";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ContactPage({ locale, dictionary }: Props) {
  void locale;

  return (
    <main className="page">
      <header className="page__header">
        <h1 className="page__title">{dictionary.contact.title}</h1>
        <p className="page__lead">{dictionary.contact.lead}</p>
      </header>

      <div className="contact-grid">
        <section className="contact-block">
          <h2 className="contact-block__title">{dictionary.contact.addressTitle}</h2>
          <address className="contact-block__body">
            {ADDRESS_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a
            className="btn btn--primary contact-block__action"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.contact.mapAction}
          </a>
        </section>

        <section className="contact-block">
          <h2 className="contact-block__title">{dictionary.contact.hoursTitle}</h2>
          <p className="contact-block__body">{dictionary.contact.hoursBody}</p>
        </section>

        <section className="contact-block">
          <h2 className="contact-block__title">{dictionary.contact.emailTitle}</h2>
          <a className="contact-block__link" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </section>

        <section className="contact-block">
          <h2 className="contact-block__title">{dictionary.contact.socialTitle}</h2>
          <div className="contact-block__socials">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </section>

        <section className="contact-block contact-block--wide">
          <h2 className="contact-block__title">{dictionary.contact.companyTitle}</h2>
          <p className="contact-block__body">
            <span>{dictionary.contact.companyName}</span>
            <span>{dictionary.contact.companyId}</span>
            <span>{dictionary.contact.companySeat}</span>
          </p>
        </section>
      </div>
    </main>
  );
}
