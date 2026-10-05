import assert from "node:assert/strict";
import test from "node:test";
import { BOOKIO_ORIGIN, getBookioUrl, readBookioMessage } from "../src/lib/bookio.ts";

test("each website language opens PURI's widget in a supported language", () => {
  for (const [locale, lang] of [["cs", "cs"], ["en", "en"], ["ru", "en"]]) {
    const url = new URL(getBookioUrl(locale, "https://preview.example/bookio.css"));
    assert.equal(url.origin, BOOKIO_ORIGIN);
    assert.equal(url.pathname, "/puri-restaurace/rs-widget");
    assert.equal(url.searchParams.get("lang"), lang);
    assert.equal(url.searchParams.get("css"), "https://preview.example/bookio.css");
  }
});

test("resize and scroll messages must come from the actual Bookio frame", () => {
  const source = {};
  const data = { type: "WIDGET_HEIGHT", widgetHeight: 725.5 };
  assert.deepEqual(readBookioMessage({ origin: BOOKIO_ORIGIN, source, data }, source), {
    type: "WIDGET_HEIGHT", widgetHeight: 726,
  });
  assert.equal(readBookioMessage({ origin: "https://example.com", source, data }, source), null);
  assert.equal(readBookioMessage({ origin: BOOKIO_ORIGIN, source: {}, data }, source), null);
  assert.equal(readBookioMessage({ origin: BOOKIO_ORIGIN, source: null, data }, null), null);
  assert.deepEqual(readBookioMessage({ origin: BOOKIO_ORIGIN, source, data: {
    type: "REQUEST_IFRAME_SCROLL", scrollTo: 120, animated: true,
  } }, source), { type: "REQUEST_IFRAME_SCROLL", scrollTo: 120, animated: true });
});

test("malformed widget messages cannot resize or scroll the page", () => {
  const source = {};
  for (const data of [null, "600", 600, {}, { type: "unknown" }]) {
    assert.equal(readBookioMessage({ origin: BOOKIO_ORIGIN, source, data }, source), null);
  }
  for (const value of [NaN, Infinity, -1, 10001, "600", true]) {
    for (const [type, field] of [["WIDGET_HEIGHT", "widgetHeight"], ["REQUEST_IFRAME_SCROLL", "scrollTo"]]) {
      assert.equal(readBookioMessage({ origin: BOOKIO_ORIGIN, source, data: { type, [field]: value } }, source), null);
    }
  }
});
