import React from "react";
import Main from "../components/Main";
import Gap from "../components/Gap";

const Page7 = () => {
  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">

          {/* Title */}
          <h1 className="text-[8vw] sm:text-[120px] tracking-tight font-extrabold text-center mb-10">
            The Challenge – 21 Days
          </h1>

          {/* Horizontal Swiper */}
          <div
            className="
              flex gap-6
              overflow-x-auto
              snap-x snap-mandatory
              scroll-smooth
              pb-4
              no-scrollbar
              justify-center
            "
          >
            <Card
              title="Maggie Edit"
              subtitle="Following the Trend"
              video="https://res.cloudinary.com/dstbotumc/video/upload/v1766083724/meggie_cjgk9b.mp4"
              // desc="Made entirely on Premiere Pro with speed ramping and masking."
            />

            <Card
              title="Challenge"
              subtitle="The 21 Days"
              video="https://res.cloudinary.com/dstbotumc/video/upload/v1766083735/21day_ej8jc4.mp4"
              // desc="A continuous 21-day creative editing challenge."
            />

            <Card
              title="The Best Phone"
              subtitle="Phone Edit"
              video="https://res.cloudinary.com/dstbotumc/video/upload/v1766083721/dualankit_posgzh.mp4"
              // desc="Created using Premiere Pro & After Effects."
            />
          </div>

        </div>
      </Main>
    </>
  );
};

const Card = ({ title, subtitle, video, desc }) => {
  return (
    <div
      className="
        snap-start
        shrink-0
        w-[85vw]
        sm:w-[380px]
        flex flex-col gap-4
      "
    >
      <div>
        <p className="text-[18px] opacity-80">{subtitle}</p>
        <p className="text-[26px] font-bold">{title}</p>
      </div>

      <div className="aspect-video overflow-hidden rounded-md">
        <video
          controls src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-[16px] opacity-90">{desc}</p>
    </div>
  );
};

export default Page7;
