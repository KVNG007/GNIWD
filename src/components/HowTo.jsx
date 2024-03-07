import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HowTo = () => {

    const [currSlide, setCurrSlide] = useState(0);
    
  return (
    <div className='how-to py-[50px] xs:px-0  md:py-[100px] md:px-[0%] w-full flex flex-col items-center justify-center text-left md:text-center'>
        <h1 className='w-full font-Satoshi px-[6%] font-bold text-black xs:text-lg sm:text-xl md:text-[3em] xs:leading-5 md:leading-[60px] overflow-hidden'>HOW TO GENERATE YOUR<br /> PERSONALIZED #IWD POSTER</h1>

        <div className="w-full hidden md:flex flex-row items-center justify-center gap-14 mt-[50px] py-[50px]">
            <section className='w-[350px] p-10 aspect-square flex flex-col items-center rounded-[20px] shadow-special'>
                <img src='/assets/work-writing.svg' alt='' className='w-[200px] aspect-square mb-2 ' />
                <p className='font-Satoshi font-normal text-xl leading-6 overflow-hidden '>Fill the form provided below</p>
            </section>
            <section className='w-[350px] p-10 aspect-square flex flex-col items-center justify-around rounded-[20px] shadow-special'>
                <img src='/assets/being-a-vip.svg' alt='' className='w-[200px] aspect-square mb-2 ' />
                <p className='font-Satoshi font-normal text-xl leading-6 overflow-hidden '>Upload a very nice photo of yourself</p>
            </section>
            <section className='w-[350px] p-10 aspect-square flex flex-col items-center justify-around rounded-[20px] shadow-special'>
                <img src='/assets/post-on-instagram.svg' alt='' className='w-[200px] aspect-square mb-2 ' />
                <p className='font-Satoshi font-normal text-xl leading-6 overflow-hidden '>Download and share on social media</p>
            </section>
        </div>

        <div className='w-full inline-block md:hidden'>
            <Swiper
                spaceBetween={0}
                pagination={true}
                slidesPerView={1}
                onSlideChange={(e) => setCurrSlide(e.realIndex)}
                // onSwiper={(swiper) => console.log(swiper)}
                className=' text-center py-8'
            >
                <SwiperSlide className='w-full flex items-center justify-center ' >
                    <section className='xs:w-[300px] sm:w-[350px] xs:p-8 sm:p-10 aspect-square flex flex-col items-center rounded-[20px] shadow-special'>
                        <img src='/assets/work-writing.svg' alt='' className='w-[200px] aspect-square mb-2 ' />
                        <p className='font-Satoshi font-normal text-xl leading-6 overflow-hidden '>Fill the form provided below</p>
                    </section>
                </SwiperSlide>

                <SwiperSlide className='w-full flex items-center justify-center ' >
                    <section className='xs:w-[300px] sm:w-[350px] xs:p-8 sm:p-10 aspect-square flex flex-col items-center justify-around rounded-[20px] shadow-special'>
                        <img src='/assets/being-a-vip.svg' alt='' className='w-[200px] aspect-square mb-2 ' />
                        <p className='font-Satoshi font-normal text-xl leading-6 overflow-hidden '>Upload a very nice photo of yourself</p>
                    </section>
                </SwiperSlide>

                <SwiperSlide className='w-full flex items-center justify-center ' >
                    <section className='xs:w-[300px] sm:w-[350px] xs:p-8 sm:p-10 aspect-square flex flex-col items-center justify-around rounded-[20px] shadow-special'>
                        <img src='/assets/post-on-instagram.svg' alt='' className='w-[200px] aspect-square mb-2 ' />
                        <p className='font-Satoshi font-normal text-xl leading-6 overflow-hidden '>Download and share on social media</p>
                    </section>
                </SwiperSlide>

                <section className="flex flex-row items-center justify-center gap-2 mt-5">
                    <span className={`w-3 h-3 rounded-full border border-brown transition-all duration-300 ease-in-out ${currSlide == 0 ? ' bg-brown ' : ' bg-white '}`}></span>                  
                    <span className={`w-3 h-3 rounded-full border border-brown transition-all duration-300 ease-in-out ${currSlide == 1 ? ' bg-brown ' : ' bg-white '}`}></span>                  
                    <span className={`w-3 h-3 rounded-full border border-brown transition-all duration-300 ease-in-out ${currSlide == 2 ? ' bg-brown ' : ' bg-white '}`}></span>                  
                </section>
            </Swiper>
        </div>

    </div>
  )
}

export default HowTo