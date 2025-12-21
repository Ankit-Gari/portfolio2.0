import React from "react";
import Main from "../components/Main";
import Gap from "../components/Gap";
import CloudinaryVideoSlider from "../components/CloudinaryVideoSlider";

const Page6 = () => {
  const youtubeVideos = [
    "27idTae3pVQ",
    "QOnQFL3uMF4",
    "5D0nvbuNFpk",
    "H_nDywL5LI8",
    "PyfmiShHd84",
  ];

  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-[40px] md:text-[60px] xl:text-[70px] font-bold">
              VFX Edits
            </h2>
          </div>

          {/* SAME slider component */}
          <CloudinaryVideoSlider videos={youtubeVideos} aspect="9/16" />
        </div>
      </Main>
    </>
  );
};

export default Page6;
