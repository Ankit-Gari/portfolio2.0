import React from "react";
import Slider from "react-slick";
import YoutubeEmbed from "./YoutubeEmbed";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YoutubeSlider = ({ YtWork = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (!Array.isArray(YtWork) || YtWork.length === 0) {
    return <div>No videos to display.</div>;
  }

  return (
    <div className="w-full overfl px-4">
      <Slider {...settings}>
        {YtWork.map((ytId, idx) => (
          <div key={idx} className="px-[1vw]">
            <YoutubeEmbed yt={ytId} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default YoutubeSlider;
