import type { Locale } from "../i18n/config";

export const BOOKIO_ORIGIN = "https://www.bookiopro.com";
export const BOOKIO_STYLESHEET = "https://purirestaurace.cz/bookio.css";

export function getBookioUrl(locale: Locale, stylesheet = BOOKIO_STYLESHEET): string {
  const url = new URL("/puri-restaurace/rs-widget", BOOKIO_ORIGIN);
  // Bookio's restaurant widget has no Russian translation.
  url.searchParams.set("lang", locale === "ru" ? "en" : locale);
  url.searchParams.set("c1", "e2a54b");
  url.searchParams.set("c2", "0e0e0e");
  url.searchParams.set("c3", "f4f1ec");
  url.searchParams.set("css", stylesheet);
  return url.toString();
}

type BookioMessage =
  | { type: "WIDGET_HEIGHT"; widgetHeight: number }
  | { type: "REQUEST_IFRAME_SCROLL"; scrollTo: number; animated: boolean };

export function readBookioMessage(
  event: Pick<MessageEvent, "origin" | "source" | "data">,
  iframeWindow: Window | null,
): BookioMessage | null {
  if (!iframeWindow || event.origin !== BOOKIO_ORIGIN || event.source !== iframeWindow) {
    return null;
  }
  const data = event.data;
  if (!data || typeof data !== "object") return null;

  if (
    data.type === "WIDGET_HEIGHT" &&
    Number.isFinite(data.widgetHeight) &&
    data.widgetHeight > 0 &&
    data.widgetHeight <= 10000
  ) {
    return { type: data.type, widgetHeight: Math.ceil(data.widgetHeight) };
  }
  if (
    data.type === "REQUEST_IFRAME_SCROLL" &&
    Number.isFinite(data.scrollTo) &&
    data.scrollTo >= 0 &&
    data.scrollTo <= 10000
  ) {
    return { type: data.type, scrollTo: data.scrollTo, animated: data.animated === true };
  }
  return null;
}
