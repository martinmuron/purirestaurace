"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath, type SiteRoute } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

const links: { route: SiteRoute; key: keyof Dictionary["nav"] }[] = [
  { route: "", key: "home" },
  { route: "menu", key: "menu" },
  { route: "gallery", key: "gallery" },
  { route: "contact", key: "contact" },
];

export function SiteHeader({ locale, dictionary }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={localePath(locale)} className="site-header__brand" aria-label={dictionary.brand}>
          <Image
            src="/logo.png"
            alt=""
            width={160}
            height={88}
            className="site-header__logo"
            priority
          />
        </Link>

        <nav className="site-header__nav" aria-label={dictionary.navAria}>
          {links.map(({ route, key }) => {
            const href = localePath(locale, route);
            const active =
              route === ""
                ? pathname === href || pathname === `/${locale}`
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={route || "home"}
                href={href}
                className={active ? "site-header__link is-active" : "site-header__link"}
                aria-current={active ? "page" : undefined}
              >
                {dictionary.nav[key]}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__aside">
          <LanguageSwitcher locale={locale} dictionary={dictionary} />
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={dictionary.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id={panelId}
        className={open ? "site-header__panel is-open" : "site-header__panel"}
        hidden={!open}
      >
        <nav className="site-header__panel-nav" aria-label={dictionary.navAria}>
          {links.map(({ route, key }) => (
            <Link
              key={route || "home"}
              href={localePath(locale, route)}
              className="site-header__panel-link"
              onClick={() => setOpen(false)}
            >
              {dictionary.nav[key]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
