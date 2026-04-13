import Hls from "hls.js";
import { useEffect, useRef } from "react";
import { cn } from "../lib/utils";

export function HlsVideo({ src, className, ...props }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return undefined;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }

    return undefined;
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={cn("h-full w-full", className)}
      autoPlay
      loop
      muted
      playsInline
      {...props}
    />
  );
}
