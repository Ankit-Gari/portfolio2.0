import { useEffect, useRef } from "react";

const SliderVideo = ({ src, isActive }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      controls
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "12px",
      }}
    />
  );
};

export default SliderVideo;
