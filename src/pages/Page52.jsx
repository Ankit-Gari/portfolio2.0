import React from 'react';
import Main from '../components/Main';
import Gap from '../components/Gap';
import YouTubeEmbed from "../components/YouTubeEmbed";


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

          <div className="mb-8">
            <h3 className="text-[40px] md:text-[60px] xl:text-[70px] tracking-tight font-bold text-center">
              After Effect Edit
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

//   return (
//     <>
//       <Gap />
//       <Main>
//         <div className="w-full">
//           <div className="w-full max-w-[1280px] mx-auto px-4 ">
//             <div className=' w-full flex flex-col  items-center'>
//               <h4 className="sm:text-[60px] text-[10vw] font-bold">After Effect Edit</h4>
//               <div className="w-full max-w-[1080px] aspect-video mt-8">
//                 <YouTubeEmbed
//                   videoId="u5Wp_TuZPG0"
//                   aspect="16/9"
//                 />


//               </div>
//             </div>
//           </div>
//           <Gap />
//           <div className='w-full flex flex-col  items-center'>
//             <div className="w-full max-w-[1080px] aspect-video mt-8">
//               <YouTubeEmbed
//                 videoId="qbgVO-2yM7w"
//                 aspect="16/9"
//               />
//             </div>
//           </div>
//         </div>
//       </Main>
//     </>
//   );
};

export default Page5;
