import React from "react";
import Main from "../components/Main";
import YoutubeSlider from "../components/YoutubeSlider";
import Gap from "../components/Gap";

const Page42 = () => {
  // Vertical / Shorts-style videos
  const YtWork = [
    "QDgJqt3-YnY",
    "wpmMWHzCrKk",
    "t1gAIGd1Ce4",
    "FhVvmdiVZbk",
  ];

  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">

          {/* SAME slider as Page41 */}
          <YoutubeSlider
            YtWork={YtWork}
            aspect="9/16"
          />

        </div>
      </Main>
    </>
  );
};

export default Page42;
