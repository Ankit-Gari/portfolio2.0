import React from "react";
import Main from "../components/Main";
import Gap from "../components/Gap";
import CloudinaryVideoSlider from "../components/CloudinaryVideoSlider";

const Page6 = () => {
  const cloudinaryVideos = [
    "https://res.cloudinary.com/dstbotumc/video/upload/v1766083731/pew_pew_vwp5a3.mp4",
    "https://res.cloudinary.com/dstbotumc/video/upload/v1766083760/NW1_ufgkyo.mp4",
    "https://res.cloudinary.com/dstbotumc/video/upload/v1766083755/SpitiFin_dffdkf.mp4",
    "https://res.cloudinary.com/dstbotumc/video/upload/v1766083741/NW2_gzwkir.mp4",
    "https://res.cloudinary.com/dstbotumc/video/upload/v1766083723/error_jcue9w.mp4"
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

          {/* Slider (same as Page9) */}
          <CloudinaryVideoSlider videos={cloudinaryVideos} />

        </div>
      </Main>
    </>
  );
};

export default Page6;
