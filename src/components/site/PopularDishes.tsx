"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type DishCard = {
  id: string;
  sectionId: string;
  name: string;
  description?: string;
  price: string;
  href: string;
  photo: { src: string; width: number; height: number; alt: string };
};

type Props = {
  categories: { id: string; label: string }[];
  dishes: DishCard[];
  labels: { filter: string; all: string; choose: string; showMore: string; showLess: string };
  initialCount?: number;
};

export function PopularDishes({ categories, dishes, labels, initialCount = 6 }: Props) {
  const [active, setActive] = useState<string>("all");
  const [expanded, setExpanded] = useState(false);

  const filtered = active === "all" ? dishes : dishes.filter((d) => d.sectionId === active);
  const visible = expanded ? filtered : filtered.slice(0, initialCount);
  const canToggle = filtered.length > initialCount;

  return (
    <div>
      <div className="chips" role="group" aria-label={labels.filter}>
        <button
          type="button"
          aria-pressed={active === "all"}
          className={active === "all" ? "chip is-active" : "chip"}
          onClick={() => {
            setActive("all");
            setExpanded(false);
          }}
        >
          {labels.all}
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={active === category.id}
            className={active === category.id ? "chip is-active" : "chip"}
            onClick={() => {
              setActive(category.id);
              setExpanded(false);
            }}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="dishes">
        {visible.map((dish) => (
          <article key={dish.id} className="dish">
            <div className="dish__media">
              <Image
                src={dish.photo.src}
                alt={dish.photo.alt}
                width={dish.photo.width}
                height={dish.photo.height}
                sizes="(max-width: 720px) 100vw, 30vw"
                loading="lazy"
              />
            </div>
            <div className="dish__body">
              <h3>{dish.name}</h3>
              {dish.description ? <p>{dish.description}</p> : null}
              <div className="dish__meta">
                <Link href={dish.href} className="link-out">
                  {labels.choose}
                </Link>
                <span className="dish__price">{dish.price}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {canToggle ? (
        <button
          type="button"
          className="show-more"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
          <span>{expanded ? labels.showLess : labels.showMore}</span>
        </button>
      ) : null}
    </div>
  );
}
