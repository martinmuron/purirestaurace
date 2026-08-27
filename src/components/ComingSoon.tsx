import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";

const EMAIL = "info@purirestaurace.cz";
const MAPS_URL =
  "https://maps.google.com/?q=%C5%A0ostakovi%C4%8Dovo+n%C3%A1m.+1515/5,+158+00+Praha+5";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ComingSoon({ locale, dictionary }: Props) {
  return (
    <main className="stage">
      <div className="stage__glow" aria-hidden="true" />
      <div className="stage__grain" aria-hidden="true" />

      <div className="stage__center">
        <div className="stage__lang reveal reveal--1">
          <LanguageSwitcher locale={locale} dictionary={dictionary} />
        </div>

        <div className="stage__logo reveal reveal--2">
          <Image
            src="/logo.png"
            alt="PURI"
            width={720}
            height={400}
            priority
            className="stage__logo-img"
          />
        </div>

        <p className="stage__eyebrow reveal reveal--3">{dictionary.comingSoon}</p>
        <p className="stage__tagline reveal reveal--4">{dictionary.tagline}</p>

        <a
          className="stage__menu reveal reveal--5"
          href="/puri-menu-cz.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dictionary.menuAriaLabel}
        >
          <span className="stage__menu-label">{dictionary.menuLabel}</span>
          <strong className="stage__menu-action">{dictionary.menuAction}</strong>
          <span className="stage__menu-meta">{dictionary.menuMeta}</span>
        </a>

        <address className="stage__address reveal reveal--6">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            {dictionary.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </a>
        </address>

        <a className="stage__email reveal reveal--7" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </div>
    </main>
  );
}
