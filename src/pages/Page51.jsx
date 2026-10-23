import React from 'react';
import Main from '../components/Main';
import Gap from '../components/Gap';
import YouTubeEmbed from "../components/YouTubeEmbed";
import YoutubeLongForm from "../components/YoutubeLongForm";



const Page5 = () => {
  // VFX / Shorts videos (YouTube IDs)
  const YtWork = [
    "QppBusOURBw",
    "Vvehwb1FTT8",
  ];

  return (
    <>
      <Gap />
      <Main>
        <div className="w-full max-w-[1280px] mx-auto px-4">

          <div className="mb-8">
            <h3 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight font-bold text-center">
              Podcasts
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
  // return (
  //   <>
  //     <Gap />
  //     <Main>
  //       <div className="w-full max-w-[1280px] mx-auto px-4 ">
  //         <div className='w-full flex flex-col  items-center'>
  //           <h4 className="sm:text-[60px] text-[10vw] font-bold">Premiere Pro Edit</h4>
  //           <div className="w-full max-w-[1080px] aspect-video mt-8">
  //             <YouTubeEmbed
  //               videoId="a_irPmKhcaQ"
  //               aspect="16/9"
  //             />
  //           </div>
  //         </div>
  //         <Gap />
  //         <div className='w-full flex flex-col  items-center'>
  //           <h4 className="sm:text-[60px] text-[10vw] font-bold">AdXiaomi 3.0 2025</h4>
  //           <div className="w-full max-w-[1080px] aspect-video mt-8">
  //             <YouTubeEmbed
  //               videoId="I-LcPo8B2x0"
  //               aspect="16/9"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </Main>
  //   </>
  // );
};

export default Page5;
