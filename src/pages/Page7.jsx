import React from "react";
import Main from "../components/Main";
import Gap from "../components/Gap";
import YouTubeEmbed from "../components/YouTubeEmbed";

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

          {/* Horizontal Scroll (UNCHANGED) */}
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
              videoId="4XxA4XtJHKY"
            />

            <Card
              title="Challenge"
              subtitle="The 21 Days"
              videoId="XjZeK3ZSeaw"
            />

            <Card
              title="The Best Phone"
              subtitle="Phone Edit"
              videoId="FaDr_jKRZPc"
            />
          </div>

        </div>
      </Main>
    </>
  );
};

const Card = ({ title, subtitle, videoId, desc }) => {
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
      {/* Text */}
      <div>
        <p className="text-[18px] opacity-80">{subtitle}</p>
        <p className="text-[26px] font-bold">{title}</p>
      </div>

      {/* Video */}
      <div className="aspect-video overflow-hidden rounded-md">
        <YouTubeEmbed
          videoId={videoId}
          aspect="16/9"
        />
      </div>

      {desc && <p className="text-[16px] opacity-90">{desc}</p>}
    </div>
  );
};

export default Page7;
