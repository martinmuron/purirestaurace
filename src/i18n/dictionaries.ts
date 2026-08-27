import type { Locale } from "./config";

export type Dictionary = {
  title: string;
  description: string;
  comingSoon: string;
  tagline: string;
  menuLabel: string;
  menuAction: string;
  menuMeta: string;
  menuAriaLabel: string;
  contact: string;
  addressLines: [string, string];
  langLabel: string;
  localeNames: Record<Locale, string>;
};

const dictionaries: Record<Locale, Dictionary> = {
  cs: {
    title: "PURI — Gruzínská restaurace",
    description: "PURI restaurace. Brzy otevíráme v Praze 5 – Stodůlkách.",
    comingSoon: "Již brzy",
    tagline: "Gruzínská kuchyně v Praze",
    menuLabel: "Aktuální menu",
    menuAction: "Prohlédnout nabídku",
    menuMeta: "PDF · 3 strany",
    menuAriaLabel: "Otevřít aktuální menu v PDF, 3 strany",
    contact: "Napište nám",
    addressLines: ["Šostakovičovo nám. 1515/5", "158 00 Praha 5 – Stodůlky"],
    langLabel: "Jazyk",
    localeNames: { cs: "CZ", en: "EN", ru: "RU" },
  },
  en: {
    title: "PURI — Georgian Restaurant",
    description: "PURI restaurant. Opening soon in Prague 5 – Stodůlky.",
    comingSoon: "Coming soon",
    tagline: "Georgian cuisine in Prague",
    menuLabel: "Czech menu",
    menuAction: "View our menu",
    menuMeta: "PDF · 3 pages",
    menuAriaLabel: "Open the current Czech menu as a 3-page PDF",
    contact: "Get in touch",
    addressLines: ["Šostakovičovo nám. 1515/5", "158 00 Prague 5 – Stodůlky"],
    langLabel: "Language",
    localeNames: { cs: "CZ", en: "EN", ru: "RU" },
  },
  ru: {
    title: "PURI — Грузинский ресторан",
    description: "Ресторан PURI. Скоро открытие в Праге 5 – Стодулки.",
    comingSoon: "Скоро открытие",
    tagline: "Грузинская кухня в Праге",
    menuLabel: "Меню на чешском",
    menuAction: "Посмотреть меню",
    menuMeta: "PDF · 3 страницы",
    menuAriaLabel: "Открыть актуальное меню на чешском языке, PDF, 3 страницы",
    contact: "Напишите нам",
    addressLines: ["Šostakovičovo nám. 1515/5", "158 00 Прага 5 – Стодулки"],
    langLabel: "Язык",
    localeNames: { cs: "CZ", en: "EN", ru: "RU" },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
