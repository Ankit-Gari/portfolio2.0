import React from 'react';
import Main from '../components/Main';
import Gap from '../components/Gap';
import YouTubeEmbed from "../components/YouTubeEmbed";


const Page5 = () => {
  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4 ">
          <div className='w-full flex flex-col  items-center'>
            <h4 className="sm:text-[60px] text-[10vw] font-bold">Premiere Pro Edit</h4>
            <div className="w-full max-w-[1080px] aspect-video mt-8">
              <YouTubeEmbed
                videoId="a_irPmKhcaQ"
                aspect="16/9"
              />
            </div>
          </div>
          <Gap />
          <div className='w-full flex flex-col  items-center'>
            <h4 className="sm:text-[60px] text-[10vw] font-bold">AdXiaomi 3.0 2025</h4>
            <div className="w-full max-w-[1080px] aspect-video mt-8">
              <YouTubeEmbed
                videoId="I-LcPo8B2x0"
                aspect="16/9"
              />
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Page5;
