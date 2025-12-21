import React from "react";
import Main from "../components/Main";
import YoutubeSlider from "../components/YoutubeSlider";
import Gap from "../components/Gap";

const Page41 = () => {
  // VFX / Shorts videos (YouTube IDs)
  const YtWork = [
    "Fjmm8TPYCEY",
    "AO6cDixqSU8",
    "GhdVGrlkRYc",
    "QQNOtFyOlI8",
  ];

  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">

          <div className="mb-8">
            <h3 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight font-bold text-center">
              Educational Videos
            </h3>
          </div>

          {/* EXISTING SLIDER — KEPT */}
          <YoutubeSlider
            YtWork={YtWork}
            aspect="9/16"
          />

        </div>
      </Main>
    </>
  );
};

export default Page41;
