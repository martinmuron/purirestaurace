import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPage } from "@/components/site/ContactPage";
import { SiteShell } from "@/components/site/SiteShell";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dictionary = getDictionary(raw);
  return {
    title: `${dictionary.contact.title} — PURI`,
    description: dictionary.contact.lead,
    alternates: {
      languages: {
        cs: "/cs/contact",
        en: "/en/contact",
        ru: "/ru/contact",
      },
    },
  };
}

export default async function LocaleContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return (
    <SiteShell locale={locale} dictionary={dictionary}>
      <ContactPage locale={locale} dictionary={dictionary} />
    </SiteShell>
  );
}
