import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { NoticeBar } from "./NoticeBar";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
};

export function SiteShell({ locale, dictionary, children }: Props) {
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        {dictionary.skipToContent}
      </a>
      <NoticeBar text={dictionary.notice} />
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main id="main" className="site__main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </div>
  );
}
