import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { ContactBlock } from "./ContactBlock";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ContactPage({ locale, dictionary }: Props) {
  void locale;
  const c = dictionary.contact;
  return (
    <>
      <header className="page-head">
        <h1>{c.title}</h1>
        <p>{c.lead}</p>
      </header>
      <div className="wrap" style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
        <ContactBlock dictionary={dictionary} />
        <div className="company">
          <span>{c.companyTitle}</span>
          <span>{c.companyName}</span>
          <span>{c.companyId}</span>
          <span>{c.companySeat}</span>
        </div>
      </div>
    </>
  );
}
