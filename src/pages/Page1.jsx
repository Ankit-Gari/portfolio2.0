import React from 'react'


const Page1 = () => {
    const scrollToPage4 = () => {
        const page4 = document.getElementById("page4");
        if (page4) {
            page4.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToPage10 = () => {
        const page10 = document.getElementById("page10");
        if (page10) {
            page10.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className='sm:h-[80px] w-full'></div>

            {/* Desktop View */}
            <div className='hidden sm:flex w-full text-white px-[5vw] justify-center'>
                <div className='w-full max-w-[1280px]'>
                    <div className='flex w-full aspect-[2/1] relative'>
                        {/* Left */}
                        <div className='w-1/2 h-full relative overflow-y-clip'>
                            <div className='bg-[#DAD1D1] absolute translate-x-[17%] translate-y-[20%] w-[53vw] h-[53vw] max-w-[763.2px] max-h-[763.2px] rounded-full'></div>
                            <img src="assets/photos/ankit profile.png" className='z-10 translate-x-[37%] right-[5%] -translate-y-[19%] absolute' alt="Ankit" />
                        </div>

                        {/* Right */}
                        <div className='w-1/2 h-full border-x-[0.1px] border-t-[0.1px] border-white pl-[4vw] lg:pl-[30px] '>
                            <p className='uppercase text-[1vw] lg:text-[17px] pt-[20px]'>your next Video Editor</p>
                            <h3 className='font-bold tracking-tight text-[7vw] lg:text-[70px]'>Ankit Gari.</h3>
                            <div
                                className='flex gap-[10px] items-center justify-center absolute right-[20px] bottom-[5%] cursor-pointer'
                                onClick={scrollToPage10}
                            >
                                <p className='lg:text-[35px] text-[1vw]'>Contact Me</p>
                                <p className='lg:text-[50px] text-[5vw]'>↓</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className='w-full h-full sm:hidden px-[5vw] border-white pl-[4vw] lg:pl-[30px]'>
                <div>
                    <p className='uppercase text-[2vw] lg:text-[17px] pt-[20px]'>your next Video Editor</p>
                    <h3 className='font-bold tracking-tight text-[15vw] lg:text-[70px]'>Ankit Gari.</h3>
                </div>

                <div className='w-full h-full relative'>
                    <div className='w-full h-[125vw] relative overflow-clip'>
                        <div className='mt-[-15%] relative'>
                            <div className='bg-[#DAD1D1] absolute top-[60vw] w-[91vw] h-[95vw] rounded-full'></div>
                            <img src="assets/photos/ankit profile.png" className='absolute top-[4vw]' alt="Ankit" />
                        </div>
                    </div>

                    <div
                        className='flex gap-[10px] items-center justify-end right-[20px] mt-[10vw] cursor-pointer'
                        onClick={scrollToPage4}
                    >
                        <p className='lg:text-[17px] text-[3vw]'>My Work</p>
                        <p className='lg:text-[70px] text-[7vw]'>↓</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page1
