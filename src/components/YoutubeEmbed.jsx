import { useState } from "react";

const YoutubeEmbed = ({ yt }) => {
  const [play, setPlay] = useState(false);

  const getVideoId = (input) => {
    if (!input) return null;
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;

    try {
      const url = new URL(input);
      if (url.hostname === "youtu.be") {
        return url.pathname.slice(1);
      }
      return url.searchParams.get("v");
    } catch {
      return null;
    }
  };

  const videoId = getVideoId(yt);
  if (!videoId) return <p>Invalid video source</p>;

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "177%",
        height: 0,
        cursor: "pointer",
      }}
      onClick={() => setPlay(true)}
    >
      {!play ? (
        <>
          <img
            src={thumbnail}
            alt="YouTube thumbnail"
            loading="lazy"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          {/* play button */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(0,0,0,0.6)",
              borderRadius: "50%",
              width: 60,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ▶
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "12px",
          }}
        />
      )}
    </div>
  );
};

export default YoutubeEmbed;
