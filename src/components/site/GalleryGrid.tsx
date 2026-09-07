"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryPhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  kind: "food" | "interior";
};

type Props = {
  photos: GalleryPhoto[];
  labels: { all: string; food: string; interior: string };
};

const filters = ["all", "food", "interior"] as const;

export function GalleryGrid({ photos, labels }: Props) {
  const [active, setActive] = useState<(typeof filters)[number]>("all");
  const visible = active === "all" ? photos : photos.filter((p) => p.kind === active);

  return (
    <div>
      <div className="chips" role="tablist" aria-label={labels.all}>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            className={active === filter ? "chip is-active" : "chip"}
            onClick={() => setActive(filter)}
          >
            {labels[filter]}
          </button>
        ))}
      </div>
      <div className="masonry" style={{ marginTop: "1.5rem" }}>
        {visible.map((photo, index) => (
          <figure key={photo.id} className="masonry__item">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 720px) 50vw, 33vw"
              loading={index < 3 ? "eager" : "lazy"}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
