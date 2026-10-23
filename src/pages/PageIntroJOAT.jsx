import React from 'react';
import Main from '../components/Main';
import Gap from '../components/Gap';
import YouTubeEmbed from "../components/YouTubeEmbed";
import YoutubeLongForm from "../components/YoutubeLongForm";



const Page5 = () => {
  const scrollToAfterEffects = () => {
    const el = document.getElementById("page52");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4 ">
          <div className='w-full flex flex-col  items-center'>
            <h2 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight font-bold text-center">Who am I?</h2>
            <div className="w-full max-w-[1080px] aspect-video mt-4">
              <YouTubeEmbed
                videoId="FHp_8c5klUU"
                aspect="16/9"
              />
            </div>
          </div>
          <div className='w-full flex flex-col  items-center mt-16 lg:mt-24'>
            <h2 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight font-bold text-center">Here's what I do!!</h2>
            <div className="w-full max-w-[1080px] aspect-video mt-4">
              <YouTubeEmbed
                videoId="5G-6a8izb-E"
                aspect="16/9"
              />
            </div>
            <button
              type="button"
              onClick={scrollToAfterEffects}
              className="mt-6 flex gap-[10px] items-center bg-white text-[#242424] rounded-full px-6 py-2 text-xl font-medium cursor-pointer hover:bg-[#DAD1D1] transition-colors"
            >
              More of my work <span>↓</span>
            </button>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Page5;
