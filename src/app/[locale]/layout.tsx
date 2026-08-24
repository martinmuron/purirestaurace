import { SetDocumentLang } from "@/components/SetDocumentLang";
import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <>
      <SetDocumentLang locale={locale} />
      {children}
    </>
  );
}
