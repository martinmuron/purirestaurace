import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryPage } from "@/components/site/GalleryPage";
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
    title: `${dictionary.gallery.title} — PURI`,
    description: dictionary.gallery.lead,
    alternates: {
      languages: {
        cs: "/cs/gallery",
        en: "/en/gallery",
        ru: "/ru/gallery",
      },
    },
  };
}

export default async function LocaleGalleryPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return (
    <SiteShell locale={locale} dictionary={dictionary}>
      <GalleryPage locale={locale} dictionary={dictionary} />
    </SiteShell>
  );
}
