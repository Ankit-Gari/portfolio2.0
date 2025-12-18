import React from 'react'
import Main from '../components/Main'
import Gap from '../components/Gap'

const Page10 = () => {
    return (
        <>
        <Gap/>
                 <div id="page10" className='  w-full    px-[5vw]   justify-center '> 

                <div className="w-full max-w-[1280px] flex items-end relative mx-auto px-4  overflow-hidden ">
                    <div className='absolute left-0 lg:lefy-0%'>
                    <div className='h-[400px] w-[600px] relative overflow-hidden'>
                    <div className='h-[500px] w-[500px] bg-[#606060] absolute right-[40%] top-[44%] rounded-full ' >

                    </div>
                    <div className='h-[420px] w-[420px] bg-[#BDBDBD] absolute right-[51%] top-[61%] rounded-full' ></div>
                </div>
                </div>
                    <div className=' z-20 '>
                        <div className='lg:pl-[50px]'>
                            <h3 className='font-bold text-[73px] pb-[2vw] '>Contact.</h3>
                            <h3 className='font-bold text-[37px]' >Ankit Gari.</h3>
                            <h6 className='text-[20px] uppercase pb-5'>Video editor</h6>
                            <p className='text-[20px]  pb-5'>I am an energetic and passionate college student working towards <br/>

                                a B.Tech degree, seeking a summer internship at the next big <br />
                                digital company.
                            </p>
                        </div>
                        <div className=''>
                            <p className='font-bold text-[37px] lg:ml-[50px] text-black'>
                                Get Your First Video <br />
                                Edited Now!!
                            </p>
                            <div className='flex py-4 px-7 my-4 gap-x-2 mb-15 w-[220px] bg-black ml-[50px]'>
                                <a  href="https://wa.me/9013120886" target="_blank" rel="noopener noreferrer">
                                 <img className='w-[30px]' src="assets/logo/whatsapp2.svg" alt="" />
                                </a>
                               
                                <a className='text-[20px] underline font-bold' href="https://wa.me/9013120886" target="_blank" rel="noopener noreferrer">
                                    WhatsApp Now
                                </a>
                            </div>
                            <div className='ml-[50px]'>
                                <p className='text-black text-[20px] uppercase'>connect with Me</p>
                                <div className='flex gap-x-10 my-5 items-center'>
                                    <a  href="mailto:ankitgari2018@gmail.com" target="_blank" rel="noopener noreferrer">
                                 <img className='w-[30px]' src="assets/logo/mail.svg" alt="" />
                                </a>
                                    <a  href="https://www.instagram.com/ankit_gariii" target="_blank" rel="noopener noreferrer">
                                 <img className='w-[30px]' src="assets/logo/insta.svg" alt="" />
                                </a>
                                    <a  href="https://www.youtube.com/@AnkitGari" target="_blank" rel="noopener noreferrer">
                                 <img className='w-[30px]' src="assets/logo/youtube.svg" alt="" />
                                </a>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className=' absolute lg:block hidden right-0'>
                        <img className=' ' src="assets/photos/ankit_right.png" alt="" />
                    </div>

                </div>

            </div>
                
        </>
    )
}

export default Page10