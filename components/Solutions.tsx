import React, {useState, useEffect} from 'react';
import '../styles/svgStyle.css';
import Image from 'next/image';
import ReactPlayer from 'react-player'

const Solutions = () => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className='w-full mb-32 2xl:h-full xl:h-full lg:h-full md:h-full sm:h-full xs:h-full mx-auto px-24 sm:px-10 xs:px-8 pb-10 text-slate-700'>
        <div className='pt-16 flex gap-10'>
          <div className='m-auto text-[100px] font-bold text-center lg:hidden md:hidden sm:hidden xs:hidden xxs:hidden rounded-lg border'>
            {hasWindow && <ReactPlayer 
              light={
                <Image 
                  src='/assets/thumbnail.png' 
                  width={300}
                  height={300}
                  alt='Thumbnail' />}
                  url='/assets/video.mp4' 
                  controls={true} 
                  playing={true}
                />
            }
          </div>

          <div className='flex flex-col gap-10 xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] xs:w-[100%] 2xl:text-end xl:text-end lg:text-center md:text-center sm:text-center xs:text-center'>
              <div className='text-5xl flex flex-col gap-4 font-bold sm:text-3xl xs:text-3xl'>
                  <h1>Turnkey Solutions</h1>
                  <hr className='self-center 2xl:self-end xl:self-end 2xl:w-[70%] xl:w-[100%] lg:w-[55%] md:w-[85%] sm:w-[70%] xs:w-[70%]'
                      style={{
                      background: '#334155',
                      color: '#334155',
                      borderColor: '#334155',
                      height: '3.5px',
                      }}
                  />
              </div>
              
              <div className='text-2xl flex flex-col text-end sm:text-lg xs:text-lg 2xl:text-end xl:text-end lg:text-center md:text-center sm:text-center xs:text-center'>
                Our turnkey solutions combines plug and play hardware and software to enable your organization to become smart LGUs
                <div className='flex gap-5 2xl:justify-end xl:justify-end lg:justify-center justify-end mt-10 self-center 2xl:self-end xl:self-end lg:self-center lg:items-center md:items-center md:self-center sm:items-center sm:self-center xs:items-center xs:self-center'>
                  <button className='hover:bg-blue-500 bg-blue-700 duration-300 p-5 rounded-xl text-white w-[300px] sm:h-[80px] xs:h-[80px] 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-base xs:text-base font-bold'>
                      Request a Quotation
                  </button>
                </div>
              </div>
              <div className='m-auto 2xl:hidden xl:hidden rounded-lg border'>
                  {hasWindow && <ReactPlayer 
                  light={
                    <Image 
                      src='/assets/thumbnail.png' 
                      width={300}
                      height={300}
                      alt='Thumbnail' />}
                      url='/assets/video.mp4' 
                      controls={true} 
                      playing={true}
                    />
                  }
              </div>
          </div>
        </div>
    </div>
  )
}

export default Solutions