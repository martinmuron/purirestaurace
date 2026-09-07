"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroVideo } from "@/content/media";

type Props = {
  title: string;
};

export function WalkthroughVideo({ title }: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return (
      <Image
        src={heroVideo.poster}
        alt=""
        width={heroVideo.width}
        height={heroVideo.height}
        className="video-section__still"
        sizes="(max-width: 900px) 80vw, 22rem"
      />
    );
  }

  return (
    <video
      className="video-section__player"
      src={heroVideo.src}
      poster={heroVideo.poster}
      controls
      playsInline
      preload="metadata"
      title={title}
    />
  );
}
