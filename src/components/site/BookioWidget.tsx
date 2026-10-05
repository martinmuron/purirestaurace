"use client";

import { useEffect, useRef } from "react";
import type { Locale } from "@/i18n/config";
import { getBookioUrl, readBookioMessage } from "@/lib/bookio";

type Props = {
  locale: Locale;
  title: string;
};

export function BookioWidget({ locale, title }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onMessage = (event: MessageEvent) => {
      const message = readBookioMessage(event, iframe.contentWindow);
      if (!message) return;
      if (message.type === "WIDGET_HEIGHT") {
        iframe.style.height = `${message.widgetHeight}px`;
      } else {
        const header = document.querySelector(".hdr")?.getBoundingClientRect().height ?? 0;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({
          top: Math.max(0, window.scrollY + iframe.getBoundingClientRect().top + message.scrollTo - header - 16),
          behavior: message.animated && !reducedMotion ? "smooth" : "auto",
        });
      }
    };
    window.addEventListener("message", onMessage);

    // Wait for the current origin before loading Bookio, so hydration never restarts the form.
    const src = getBookioUrl(locale, new URL("/bookio.css", window.location.origin).href);
    if (iframe.src !== src) iframe.src = src;

    return () => window.removeEventListener("message", onMessage);
  }, [locale]);

  return (
    <iframe
      ref={iframeRef}
      title={title}
      className="reservation__frame"
      referrerPolicy="strict-origin-when-cross-origin"
      height={640}
    />
  );
}
