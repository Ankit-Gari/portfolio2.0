import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTubeEmbed from "./YouTubeEmbed";

const CloudinaryVideoSlider = ({ videos = [], aspect = "9/16" }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  };

  if (!Array.isArray(videos) || videos.length === 0) {
    return <div>No videos to display.</div>;
  }

  return (
    <div className="w-full px-4">
      <Slider {...settings}>
        {videos.map((videoId, idx) => (
          <div key={idx} className="px-[1vw]">
            <YouTubeEmbed
              videoId={videoId}
              aspect={aspect}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CloudinaryVideoSlider;
