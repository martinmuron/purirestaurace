import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReservationPage } from "@/components/site/ReservationPage";
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
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { reservation } = getDictionary(locale);
  return {
    title: `${reservation.title} — PURI`,
    description: reservation.lead,
    alternates: {
      languages: {
        cs: "/cs/rezervace",
        en: "/en/rezervace",
        ru: "/ru/rezervace",
      },
    },
  };
}

export default async function LocaleReservationPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return (
    <SiteShell locale={locale} dictionary={dictionary}>
      <ReservationPage locale={locale} dictionary={dictionary} />
    </SiteShell>
  );
}
