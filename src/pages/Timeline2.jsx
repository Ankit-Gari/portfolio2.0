import React from "react";
import YouTubeEmbed from "../components/YouTubeEmbed";


const Timeline = () => {
  return (
    <section className="w-full bg-[#252323] py-[6vw]">
      <div className="max-w-[1280px] mx-auto px-[5vw] relative">
        
        {/* Title */}
        <h2 className="text-white tracking-tight text-[6vw] sm:text-[80px] font-bold mb-[2vw] relative z-10 text-center">
          Project Timeline
        </h2>

        {/* Background faded text */}
        <h1 className=" absolute bottom-[-8vw] right-0 text-[12vw] font-extrabold text-[#201F1F] pointer-events-none leading-none">
          Timeline
        </h1>


        {/* Main layout */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-[1.5vw] items-center justify-between">

          {/* Left: Vertical video (phone style) */}
          <div className="w-full lg:w-[300px] flex justify-center">
            <div className="aspect-[9/16] w-[800px] rounded-lg overflow-hidden bg-black">
              <YouTubeEmbed
                  videoId="QQNOtFyOlI8"
                  aspect="9/16"
                />
            </div>
          </div>

          {/* Right: Image / timeline graphic */}
          <div className="flex-1">
            <img
              src="/assets/photos/timeline.png"
              alt="Project timeline"
              className="w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
