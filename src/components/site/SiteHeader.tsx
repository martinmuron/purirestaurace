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
  const [scrolled, setScrolled] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 900px)");
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onDesktop);
    return () => desktop.removeEventListener("change", onDesktop);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (route: SiteRoute) => {
    const href = localePath(locale, route);
    return route === ""
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={scrolled || open ? "hdr is-scrolled" : "hdr"}>
      <div className="hdr__inner">
        <div className="hdr__left">
          <button
            type="button"
            className="hdr__burger"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
          <nav className="hdr__nav" aria-label={dictionary.navAria}>
            {links.slice(1, 3).map(({ route, key }) => (
              <Link
                key={route}
                href={localePath(locale, route)}
                className={isActive(route) ? "hdr__link is-active" : "hdr__link"}
                aria-current={isActive(route) ? "page" : undefined}
              >
                {dictionary.nav[key]}
              </Link>
            ))}
          </nav>
        </div>

        <Link href={localePath(locale)} className="hdr__brand" aria-label={dictionary.brand}>
          <Image
            src="/logo-light.png"
            alt=""
            width={700}
            height={560}
            className="hdr__logo"
            priority
          />
        </Link>

        <div className="hdr__right">
          <LanguageSwitcher locale={locale} dictionary={dictionary} />
          <Link
            href={localePath(locale, "contact")}
            className={
              isActive("contact") ? "hdr__link hdr__contact is-active" : "hdr__link hdr__contact"
            }
            aria-current={isActive("contact") ? "page" : undefined}
          >
            {dictionary.nav.contact}
          </Link>
        </div>
      </div>

      <div id={panelId} className="hdr__panel" hidden={!open}>
        <nav className="hdr__panel-nav" aria-label={dictionary.navAria}>
          {links.map(({ route, key }) => (
            <Link
              key={route || "home"}
              href={localePath(locale, route)}
              className="hdr__panel-link"
              aria-current={isActive(route) ? "page" : undefined}
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
