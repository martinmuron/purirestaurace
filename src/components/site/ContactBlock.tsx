import type { Dictionary } from "@/i18n/dictionaries";
import {
  ADDRESS_LINES,
  EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAPS_URL,
} from "@/content/site";

type Props = {
  dictionary: Dictionary;
  showMap?: boolean;
};

/** OpenStreetMap embed centred on the restaurant; no cookie consent wall, unlike Google embeds in the EU. */
const MAP_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=14.3018%2C50.0435%2C14.3198%2C50.0515&layer=mapnik&marker=50.047525%2C14.310765";

function IconSend() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ContactBlock({ dictionary, showMap = true }: Props) {
  const c = dictionary.contact;
  return (
    <div>
      <div className="ccols">
        <div className="ccol">
          <h3 className="ccol__head">
            <IconSend />
            {c.questions}
          </h3>
          <div className="ccol__body">
            <span>
              {c.emailTitle}: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </span>
            <span>
              Instagram:{" "}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                @purirestaurace
              </a>
            </span>
            <span>
              Facebook:{" "}
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                /purirestaurace
              </a>
            </span>
          </div>
        </div>
        <div className="ccol">
          <h3 className="ccol__head">
            <IconClock />
            {c.hoursTitle}
          </h3>
          <div className="ccol__body">
            <span>{c.hoursBody}</span>
            <span>{c.hoursNote}</span>
          </div>
        </div>
        <div className="ccol">
          <h3 className="ccol__head">
            <IconPin />
            {c.locationTitle}
          </h3>
          <div className="ccol__body">
            <address>
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </address>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              {c.mapAction} ↗
            </a>
          </div>
        </div>
      </div>

      {showMap ? (
        <div className="map">
          <iframe
            src={MAP_EMBED}
            title={c.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className="btn-pill btn-pill--solid map__link"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {c.mapAction} ↗
          </a>
        </div>
      ) : null}
    </div>
  );
}
