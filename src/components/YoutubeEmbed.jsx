const YouTubeEmbed = ({ videoId, aspect = "16/9" }) => {
  return (
    <div
      className={`w-full overflow-hidden rounded-xl ${
        aspect === "9/16" ? "aspect-[9/16]" : "aspect-video"
      }`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default YouTubeEmbed;
