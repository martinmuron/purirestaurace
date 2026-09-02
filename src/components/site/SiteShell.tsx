import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
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
      <div className="site__grain" aria-hidden="true" />
      <SiteHeader locale={locale} dictionary={dictionary} />
      <div className="site__main">{children}</div>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </div>
  );
}
