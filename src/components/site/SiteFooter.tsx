import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/dictionaries";
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

export function SiteFooter({ locale, dictionary }: Props) {
  return (
    <footer className="ftr" aria-label={dictionary.footerAria}>
      <div className="wrap">
        <div className="ftr__grid">
          <div className="ftr__col">
            <Image
              src="/logo-light.png"
              alt={`${dictionary.brand} — ${dictionary.tagline}`}
              width={700}
              height={560}
              className="ftr__logo"
              loading="lazy"
            />
          </div>
          <div className="ftr__col">
            <strong>{dictionary.navAria}</strong>
            <Link href={localePath(locale)}>{dictionary.nav.home}</Link>
            <Link href={localePath(locale, "menu")}>{dictionary.nav.menu}</Link>
            <Link href={localePath(locale, "gallery")}>{dictionary.nav.gallery}</Link>
            <Link href={localePath(locale, "contact")}>{dictionary.nav.contact}</Link>
          </div>
          <div className="ftr__col">
            <strong>{dictionary.contact.addressTitle}</strong>
            <span>{ADDRESS_LINES[0]}</span>
            <span>{ADDRESS_LINES[1]}</span>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              {dictionary.contact.mapAction} ↗
            </a>
          </div>
          <div className="ftr__col">
            <strong>{dictionary.contact.questions}</strong>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook ↗
            </a>
          </div>
        </div>
        <div className="ftr__bottom">
          <span translate="no">
            © {new Date().getFullYear()} {dictionary.footer.rights}
          </span>
          <span>
            {dictionary.contact.companyName} · {dictionary.contact.companyId}
          </span>
        </div>
      </div>
    </footer>
  );
}
