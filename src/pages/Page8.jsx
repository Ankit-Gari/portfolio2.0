import React from "react";
import Main from "../components/Main";
import Gap from "../components/Gap";
import YouTubeEmbed from "../components/YouTubeEmbed";

const Page8 = () => {
  return (
    <>
      <div>
        <div className="h-[80px] lg:h-[80px] w-full"></div>
      </div>

      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">

          {/* Responsive row (UNCHANGED) */}
          <div
            className="
              flex gap-10
              sm:overflow-visible
              overflow-x-auto
              snap-x snap-mandatory
              no-scrollbar
              justify-center
            "
          >
            <Card
              subtitle="Storyline Edit"
              title="The Chai Story"
              videoId="q9KRI7WRdwU"
            />

            <Card
              subtitle="Explainer"
              title="StoryBoarding"
              videoId="fH4UL-LfinM"
            />

            <Card
              subtitle="Motivating Reels 2018"
              title="Believe in Yourself"
              videoId="gJTf98EAzfI"
            />
          </div>

        </div>
      </Main>
    </>
  );
};

/* Vertical Card (UNCHANGED layout) */
const Card = ({ subtitle, title, videoId, desc }) => {
  return (
    <div
      className="
        snap-start
        shrink-0
        w-[80vw]
        sm:w-[30%]
        flex flex-col
        gap-4
      "
    >
      {/* Text */}
      <div>
        <p className="text-[18px] opacity-80">{subtitle}</p>
        <p className="text-[26px] font-bold leading-tight">{title}</p>
      </div>

      {/* Vertical YouTube video */}
      <div className="aspect-[9/16] overflow-hidden rounded-md bg-black">
        <YouTubeEmbed
          videoId={videoId}
          aspect="9/16"
        />
      </div>

      {desc && <p className="text-[15px] opacity-80">{desc}</p>}
    </div>
  );
};

export default Page8;
