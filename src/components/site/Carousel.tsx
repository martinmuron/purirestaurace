"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type CarouselItem = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

type Props = {
  items: CarouselItem[];
  labels: { prev: string; next: string };
};

export function Carousel({ items, labels }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [visibleRatio, setVisibleRatio] = useState(0.3);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 1;
      setProgress(ratio);
      setAtStart(track.scrollLeft <= 2);
      setAtEnd(track.scrollLeft >= max - 2);
      setVisibleRatio(track.scrollWidth > 0 ? track.clientWidth / track.scrollWidth : 1);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const amount = first ? first.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <div className="carousel__track" ref={trackRef}>
        {items.map((item) => (
          <div key={item.id} className="carousel__item">
            <figure>
              <div className="carousel__img">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 720px) 78vw, 26rem"
                  loading="lazy"
                />
              </div>
              {item.caption ? <figcaption>{item.caption}</figcaption> : null}
            </figure>
          </div>
        ))}
      </div>
      <div className="carousel__foot">
        <div className="carousel__bar" aria-hidden="true">
          <div
            className="carousel__fill"
            style={{
              width: `${Math.max(visibleRatio, 0.12) * 100}%`,
              left: `${progress * (1 - Math.max(visibleRatio, 0.12)) * 100}%`,
            }}
          />
        </div>
        <div className="carousel__arrows">
          <button
            type="button"
            className="arrow-btn"
            onClick={() => step(-1)}
            disabled={atStart}
            aria-label={labels.prev}
          >
            ←
          </button>
          <button
            type="button"
            className="arrow-btn"
            onClick={() => step(1)}
            disabled={atEnd}
            aria-label={labels.next}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
