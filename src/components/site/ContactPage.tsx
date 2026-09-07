import Image from "next/image";
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
  const external = dictionary.externalNewTab;

  return (
    <div className="page page--contact">
      <header className="page__header">
        <h1 className="page__title">{dictionary.contact.title}</h1>
        <p className="page__lead">{dictionary.contact.lead}</p>
      </header>

      <div className="contact-layout">
        <div className="contact-layout__media">
          <Image
            src="/media/photos/df192969.jpg"
            alt={dictionary.photoAlts["dining-main"]}
            width={1537}
            height={1023}
            className="contact-layout__image"
            sizes="(max-width: 900px) 100vw, 48vw"
            priority
          />
        </div>

        <div className="contact-grid">
          <section className="contact-block">
            <h2 className="contact-block__title">{dictionary.contact.addressTitle}</h2>
            <address className="contact-block__body">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${ADDRESS_LINES.join(", ")} (${external})`}
              >
                {ADDRESS_LINES.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </a>
            </address>
            <a
              className="btn btn--primary contact-block__action"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${dictionary.contact.mapAction} (${external})`}
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
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook (${external})`}
              >
                Facebook
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram (${external})`}
              >
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
      </div>
    </div>
  );
}
