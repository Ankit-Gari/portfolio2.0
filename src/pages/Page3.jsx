import React from 'react'
import Gap from '../components/Gap'
import Main from '../components/Main'

const Page3 = () => {
  return (
    <>
      <Gap />
      <Main>
        <div className='lg:flex lg:flex-row max-w-[1280px] flex flex-col items-center lg:items-start gap-y-20  w-full lg:h-screen max-h-[900px] lg:gap-x-20  lg:justify-between '>
          <div className='w-full  sm:w-[50vw] h-[200vw] lg:w-4/10 lg:h-[100%] sm:h-[150vw] flex items-center justify-center  '>
            <img src="assets/photos/ankit2.jpg" className='h-full object-cover ' alt="" />
          </div>

          <div className='  lg:w-1/2 '>
            <div className='w-full flex-col flex gap-y-20 '>
              <div>
                <div className='h-[1px] mb-[1vw]  bg-white'></div>
                <div className='flex flex-col'>
                  <div className='flex lg:flex-row flex-col justify-between'>
                    <p className='lg:w-[30%] uppercase text-[16px] font-bold'>Bio</p>
                    <p className='lg:w-[70%] text-[15.666px]  '>Hey, this is Ankit Gari. Currently pursuing my
                      B.Tech Degree from Delhi Technological University.
                      I have been editing videos for a couple of years
                      now. I have a hands on experience of working in
                      Adobe Premiere Pro and After Effects for the past
                      THREE Years. I have also worked for various
                      College Societies for college events.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className='h-[1px] mb-[1vw]  bg-white'></div>
                <div className='lg:flex-row flex-col flex : lg:justify-between'>
                  <p className='lg:w-[30%] uppercase text-[16px] font-bold'>My approach</p>
                  <p className='lg:w-[70%] text-[15.666px]   '>I have always been captivated by the visual
                    storytelling and the edit styles of different creator.
                    My approach to create good videos is rooted in my
                    passion for creating intense, thought-provoking,
                    and immersive experiences that leave a lasting
                    impact on the audience. I look forward to
                    continuing to craft gripping stories that challenge,
                    entertain, and push the boundaries of the Video
                    Editing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

export default Page3