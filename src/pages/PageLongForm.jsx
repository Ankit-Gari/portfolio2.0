import React from "react";
import Main from "../components/Main";
import YoutubeSlider from "../components/YoutubeSlider";
import Gap from "../components/Gap";
import YoutubeLongForm from "../components/YoutubeLongForm";

const PageLongForm = () => {
  // VFX / Shorts videos (YouTube IDs)
  const YtWork = [
    "u5Wp_TuZPG0",
    "a_irPmKhcaQ",
    "I-LcPo8B2x0",
    "izSFo5QnxUI",
  ];

  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">

          <div className="mb-8">
            <h3 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight font-bold text-center">
              Long Form Videos
            </h3>
          </div>

          {/* EXISTING SLIDER — KEPT */}

          <YoutubeLongForm
            YtWork={YtWork}
            aspect="16/9"
            slidesToShow={1}
          />

        </div>
      </Main>
    </>
  );
};

export default PageLongForm;
