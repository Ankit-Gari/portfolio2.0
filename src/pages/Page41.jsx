import React from 'react';
import Main from '../components/Main';
import YoutubeSlider from '../components/YoutubeSlider';
import Gap from '../components/Gap';

const Page4 = () => {
  const YtWork = [
    "QQNOtFyOlI8",
    "Fjmm8TPYCEY",
    "AO6cDixqSU8",
    "GhdVGrlkRYc",
  ];
  const YtWork2 = [
    "QDgJqt3-YnY",
    "wpmMWHzCrKk",
    "t1gAIGd1Ce4",
    "FhVvmdiVZbk",
  ];

  return (
    <>
    <Gap/>
    <Main>
      <div id="page4" className="w-full max-w-[1280px] mx-auto px-4">
        <div className="mb-8">
          <h3 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight font-bold text-center">
            Educational Videos
          </h3>
          {/* <p className="text-[20px] md:text-[25px] xl:text-[30px]">
            I’ve previously worked on
          </p> */}
        </div>
        <YoutubeSlider YtWork={YtWork} />
        {/* <div className='h-[3vw]'></div>
        <YoutubeSlider YtWork={YtWork2} /> */}        
      </div>
    </Main>
    </>
  );
};

export default Page4;
