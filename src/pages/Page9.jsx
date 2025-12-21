import React from "react";
import Main from "../components/Main";
import CloudinaryVideoSlider from "../components/CloudinaryVideoSlider";
import Gap from "../components/Gap";

const Page9 = () => {
  // YouTube VIDEO IDS (Me as your Host – Shorts)
  const youtubeVideos = [
    "1Ji7ZsD4wrM",
    "YxcgZcrYYms",
    "lM3CLBCdlls",
  ];

  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">
          
          {/* Heading */}
          <div className="mb-8">
            <h3 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight text-end font-bold">
              Me as your Host
            </h3>
            <p className="text-[20px] text-end md:text-[25px] xl:text-[30px]">
              (Not Edited by Me)
            </p>
          </div>

          {/* SAME slider component */}
          <CloudinaryVideoSlider
            videos={youtubeVideos}
            aspect="9/16"
          />

        </div>
      </Main>
    </>
  );
};

export default Page9;
