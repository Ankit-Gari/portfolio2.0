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
        <YoutubeSlider YtWork={YtWork2} />
      </div>
    </Main>
    </>
  );
};

export default Page4;
