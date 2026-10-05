import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { EMAIL } from "@/content/site";
import { getBookioUrl } from "@/lib/bookio";
import { BookioWidget } from "./BookioWidget";

type Props = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ReservationPage({ locale, dictionary }: Props) {
  const r = dictionary.reservation;

  return (
    <>
      <header className="page-head">
        <h1>{r.title}</h1>
        <p>{r.lead}</p>
      </header>
      <div className="wrap reservation">
        {r.languageNote ? <p className="reservation__note">{r.languageNote}</p> : null}
        <BookioWidget locale={locale} title={r.formTitle} />
        <div className="reservation__help">
          <a href={getBookioUrl(locale)} target="_blank" rel="noopener noreferrer" className="link-out">
            {r.openForm}
          </a>
          <p>
            {r.help} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
