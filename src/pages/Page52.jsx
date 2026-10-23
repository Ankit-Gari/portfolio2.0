import React from 'react';
import Main from '../components/Main';
import Gap from '../components/Gap';
import YouTubeEmbed from "../components/YouTubeEmbed";
import YoutubeLongForm from "../components/YoutubeLongForm";


const Page5 = () => {
  // VFX / Shorts videos (YouTube IDs)
  const YtWork = [
    "u5Wp_TuZPG0",
    "qbgVO-2yM7w",
  ];

  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">

          <div id="page52" className="mb-8">
            <h3 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight font-bold text-center">
              After Effect Edits
            </h3>
          </div>

          {/* EXISTING SLIDER — KEPT */}

          <YoutubeLongForm
            YtWork={YtWork}
            aspect="16/9"
            slidesToShow={1}
          />

        </div>
      </Main>
    </>
  );
};

export default Page5;
