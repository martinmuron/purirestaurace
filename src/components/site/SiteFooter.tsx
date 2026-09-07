import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/dictionaries";
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from "@/content/site";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteFooter({ locale, dictionary }: Props) {
  const external = dictionary.externalNewTab;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name" translate="no">
            {dictionary.brand}
          </p>
          <p className="site-footer__tag">{dictionary.tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label={dictionary.footerAria}>
          <Link href={localePath(locale, "menu")}>{dictionary.nav.menu}</Link>
          <Link href={localePath(locale, "gallery")}>{dictionary.nav.gallery}</Link>
          <Link href={localePath(locale, "contact")}>{dictionary.nav.contact}</Link>
        </nav>

        <div className="site-footer__meta">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <div className="site-footer__socials">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook (${external})`}
            >
              Facebook
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram (${external})`}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <p className="site-footer__copy">{dictionary.footer.rights}</p>
    </footer>
  );
}
