import React from "react";
import Main from "../components/Main";
import Gap from "../components/Gap";

const Page8 = () => {
  return (
    <>
      <div>
        <div className=' h-[80px] lg:h-[80px] w-full'></div>
      </div>
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4 " >

          {/* Responsive row */}
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
              video="https://res.cloudinary.com/dstbotumc/video/upload/v1766083734/CHAI_jx7j9t.mp4"
            // desc="Edited with Premiere Pro and a little bit of After Effects is used to isolate the subject to create that Duet Effect."
            />

            <Card
              subtitle="Explainer"
              title="StoryBoarding"
              video="https://res.cloudinary.com/dstbotumc/video/upload/v1766083735/storyBoarding_r6veqk.mp4"
            // desc="Explaining the use of storyboarding and its importance. Completely on Adobe Premiere Pro."
            />

            <Card
              subtitle="Motivating Reels 2018"
              title="Believe in Yourself"
              video="https://res.cloudinary.com/dstbotumc/video/upload/v1766083720/BelieveInYourSelf_kdsnis.mp4"
            // desc="An Instagram reel-inspired edit which keeps coming on trending pages."
            />
          </div>

        </div>
      </Main>
    </>
  );
};

/* Vertical Card (KEY PART) */
const Card = ({ subtitle, title, video, desc }) => {
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
      {/* Text top */}
      <div>
        <p className="text-[18px] opacity-80">{subtitle}</p>
        <p className="text-[26px] font-bold leading-tight">{title}</p>
      </div>

      {/* Vertical video */}
      <div className="aspect-[9/16] overflow-hidden rounded-md bg-black">
        <video
          src={video}
          controls
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-[15px] opacity-80">{desc}</p>
    </div>
  );
};

export default Page8;
