import { heroVideo } from "@/content/media";

type Props = {
  title: string;
  className?: string;
};

export function WalkthroughVideo({ title, className }: Props) {
  return (
    <div className={className ?? "video-frame"}>
      <video
        src={heroVideo.src}
        poster={heroVideo.poster}
        controls
        playsInline
        preload="metadata"
        title={title}
      />
    </div>
  );
}
