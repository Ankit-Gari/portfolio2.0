import React from 'react';
import Main from '../components/Main';
import Gap from '../components/Gap';

const Page5 = () => {
  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4 ">
          <div className='w-full flex flex-col  items-center'>
            <h4 className="sm:text-[60px] text-[10vw] font-bold">Premiere Pro Edit</h4>
          <div className="w-full max-w-[1080px] aspect-video mt-8">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/a_irPmKhcaQ?si=ZSv06lEZGHlOgiby" // replace with your video URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          </div>
          <Gap/>
          <div className='w-full flex flex-col  items-center'>
            <h4 className="sm:text-[60px] text-[10vw] font-bold">AdXiaomi 3.0 2025</h4>
          <div className="w-full max-w-[1080px] aspect-video mt-8">
            <video
              className="w-full h-full"
              src="https://res.cloudinary.com/dstbotumc/video/upload/v1766083756/adxiomi_yjqrzi.mp4" // replace with your video URL
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              controls
              autoPlay
              muted
            ></video>
          </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Page5;
