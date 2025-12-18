import React from 'react';

const YoutubeEmbed = ({ yt }) => {
  const isYouTubeLink = (url) => {
    return typeof url === 'string' && (
      url.includes('youtube.com') || 
      url.includes('youtu.be') || 
      /^[a-zA-Z0-9_-]{11}$/.test(url) // handles video ID directly
    );
  };

  const isLocalAsset = (url) => {
    return typeof url === 'string' && (url.startsWith('/assets/') || url.startsWith('assets/'));
  };

  if (isYouTubeLink(yt)) {
    // Extract video ID if full YouTube URL is given
    let videoId = yt;
    if (yt.includes('youtube.com') || yt.includes('youtu.be')) {
      const url = new URL(yt);
      if (url.hostname === 'youtu.be') {
        videoId = url.pathname.slice(1);
      } else {
        videoId = url.searchParams.get('v');
      }
    }

    return (
      <div style={{ position: 'relative', paddingBottom: '177%', height: 0 }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    );
  } else if (isLocalAsset(yt)) {
    return (
      <video width="100%" height="auto" controls>
        <source src={yt} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return <p>Invalid video source</p>;
};

export default YoutubeEmbed;