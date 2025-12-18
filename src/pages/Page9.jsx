import React from 'react';
import Main from '../components/Main';
import CloudinaryVideoSlider from "../components/CloudinaryVideoSlider";
import Gap from '../components/Gap';

const Page9 = () => {
  const cloudinaryVideos = [
      "https://res.cloudinary.com/dstbotumc/video/upload/v1766083738/WORKFLOW_wfz8ta.mp4",
      "https://res.cloudinary.com/dstbotumc/video/upload/v1766083738/WHITE_SHIRT_hwbzbv.mp4",
      "https://res.cloudinary.com/dstbotumc/video/upload/v1766083722/COLORS_cane86.mp4",
  ];

  return (
    <>
    <Gap/>
    <Main>
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tigh text-end font-bold">
           Me as your Host
          </h3>
          <p className="text-[20px] text-end md:text-[25px] xl:text-[30px]">
            (Not Edited by Me)
          </p>
        </div>
        <CloudinaryVideoSlider videos={cloudinaryVideos} />

        
        
      </div>
    </Main>
    </>
  );
};

export default Page9;
