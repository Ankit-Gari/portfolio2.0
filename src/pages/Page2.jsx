import React from 'react'
import Gap from '../components/Gap'
import Main from '../components/Main'

const Page2 = () => {
    return (
        <>
            <Gap />
            <Main>
                <div className='lg:flex lg:flex-row  max-w-[1280px] flex  w-full flex-col items-center justify-center lg:gap-x-[40px] gap-y-[40px]  '>
                    <div className='lg:w-[35%] w-full '>
                        <h4 className='text-[58px] font-bold leading-10 '>Meeting the</h4>
                        <h4 className='text-[68px] font-bold '> Deadlines</h4>
                        <div>
                            <div className=' h-[80px] lg:h-[200px] w-full'></div>
                        </div>
                        <p className='text-[16px] '>This is one of the works which I created while I was
                            doing the 21 Day Reel Challenge. This is me trying to
                            complete the assignment on the last day to meet the
                            deadlines.</p>
                    </div>
                    <div className='lg:w-[65%] flex flex-col gap-y-[20px] text-end  '>
                        <video autoPlay muted controls controlsList="nodownload  nofullscreen" disablePictureInPicture playsInline src="https://res.cloudinary.com/dstbotumc/video/upload/v1766083739/deadline_xooudu.mp4"></video>
                        {/* <p className='uppercase text-[15.6px]'>the art of meeting deadlines</p> */}
                    </div>
                </div>


            </Main>
        </>
    )
}

export default Page2