import React from 'react'
import { IWDLogoPurple } from './Icons'
import { browserName, CustomView } from 'react-device-detect';

const Hero = () => {
  return (
    <div className='w-full flex flex-col h-[100dvh] justify-between xs:pt-5 sm:pt-7 pt-10'>

        <header className='xs:h-[10%] md:h-[15%] flex items-center justify-start md:h-[20%] px-[6%]'>
          <img src="/assets/GN-Logo.svg" alt='GUINESS LOGO' className='w-16 md:w-24 ' />
        </header>

        <main className='w-full xs:h-[90%] md:h-[85%] flex flex-col md:flex-row items-center justify-between pl-[5%] pr-[5%] md:pr-0 md:pl-[6%]'>
          <article className='h-full max-w-[100%] md:max-w-[50%] flex flex-col '>
            <h1 className='h-[35%] font-Satoshi font-black xs:text-2xl sm:text-[2.75em] md:text-[4em] text-left text-brown uppercase xs:leading-6 sm:leading-10 md:leading-[1em] overflow-hidden' >
              Inspire <br /> inclusion 
            </h1>

            <section className='h-full xs:mt-1 md:mt-0 flex flex-col justify-around xs:gap-2 text-left max-w-[85%] md:max-w-[100%] xs:text-[12px] sm:text-[15px] md:text-[1.5vw]  sm:leading-5 md:leading-10 font-Satoshi '>
              <p className=''>
                The campaign theme for International Women's Day 2024 is<span className='font-bold'> Inspire Inclusion</span>. When we inspire others to understand and value women's inclusion, we forge a better world.
              </p>

              <p>
                And when women themselves are inspired to be included, there's a sense of belonging, relevance, and empowerment. Collectively, let's forge a more inclusive world for women.
              </p>

              <section className='w-full flex flex-row items-center py-3 gap-3 md:gap-10 -mt-4 md:mt-0'>
                <aside className='flex flex-row items-center gap-2 md:gap-3'>
                  <IWDLogoPurple className={'w-10 xs:w-8 sm:w-10 md:w-12'} />
                  <p className='font-Satoshi text-base xs:text-xs sm:text-xs md:text-lg leading-4 md:leading-5 overflow-hidden text-black md:text-purple font-normal md:font-semibold  '>International <br/>women’s day 2024</p>
                </aside>

                <img src='/assets/SWN-Logo.svg' alt='' className=' w-24 xs:w-16 sm:w-20 md:w-32' />
              </section>

            </section>
          </article>

          <img src='/assets/woman-1.png' alt='WOMAN' className='h-full hidden md:inline-block' />
          <img src='/assets/woman-2.png' alt='WOMAN' className='w-[100dvw] h-[80%] inline-block md:hidden' />
        </main>
      </div>
  )
}

export default Hero