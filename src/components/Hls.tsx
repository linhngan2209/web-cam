'use client';

import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSStreamProps {
  videoUrl: string;
  className?: string;
}

const HLSStream = ({ videoUrl, className }: HLSStreamProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let hls: Hls | undefined;

    if (videoRef.current) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("HLS manifest loaded");
        });
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = videoUrl;
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoUrl]);

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        className="w-full h-full object-cover"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
};

export default HLSStream;
