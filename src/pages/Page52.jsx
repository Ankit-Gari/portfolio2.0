import React from 'react';
import Main from '../components/Main';
import Gap from '../components/Gap';

const Page5 = () => {
  return (
    <>
      <Gap />
      <Main>
        <div className="w-full">
          <div className="w-full max-w-[1280px] mx-auto px-4 ">
            <div className=' w-full flex flex-col  items-center'>
              <h4 className="sm:text-[60px] text-[10vw] font-bold">After Effect Edit</h4>
              <div className="w-full max-w-[1080px] aspect-video mt-8">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/u5Wp_TuZPG0?si=d-wUFxdxhw528E-X" // replace with your video URL
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <Gap />
          <div className='w-full flex flex-col  items-center'>
            <div className="w-full max-w-[1080px] aspect-video mt-8">
              <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qbgVO-2yM7w" // replace with your video URL
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Page5;
