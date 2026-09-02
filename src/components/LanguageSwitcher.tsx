"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

function swapLocale(pathname: string, next: Locale): string {
  const parts = pathname.split("/");
  if (parts.length >= 2 && locales.includes(parts[1] as Locale)) {
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  }
  return `/${next}`;
}

export function LanguageSwitcher({ locale, dictionary }: Props) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <nav aria-label={dictionary.langLabel} className="lang-switch">
      {locales.map((code, index) => (
        <span key={code} className="lang-switch__item">
          {index > 0 ? <span className="lang-switch__sep" aria-hidden="true" /> : null}
          <Link
            href={swapLocale(pathname, code)}
            hrefLang={code}
            className={code === locale ? "lang-switch__link is-active" : "lang-switch__link"}
            aria-current={code === locale ? "page" : undefined}
          >
            {dictionary.localeNames[code]}
          </Link>
        </span>
      ))}
    </nav>
  );
}
