"use client";

import { useSyncExternalStore } from "react";

// Closure on 20 Sep 2026; hide once the day is over (Prague time).
const NOTICE_UNTIL = Date.parse("2026-09-21T00:00:00+02:00");

const subscribe = () => () => {};

export function NoticeBar({ text }: { text: string }) {
  const visible = useSyncExternalStore(
    subscribe,
    () => Date.now() < NOTICE_UNTIL,
    () => true,
  );

  if (!visible) return null;

  return (
    <div className="notice" role="status">
      <p className="notice__text">{text}</p>
    </div>
  );
}
