import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CebuLgu from '../public/assets/lgulogos/cebu.svg';
import LeyteLgu from '../public/assets/lgulogos/leyte.svg';
import AklanLgu from '../public/assets/lgulogos/aklan.svg';
import AbraLgu from '../public/assets/lgulogos/abra.svg';
import BoholLgu from '../public/assets/lgulogos/bohol.svg';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Second = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const carouselItems = [
    'TEST 1',
    'TEST 2',
    'TEST 3',
    'TEST 4',
    'TEST 5',
    'TEST 6',
    'TEST 7',
    'TEST 8',
    'TEST 9',
    'TEST 10',
    'TEST 11',
    'TEST 12',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className='w-full 2xl:h-screen xl:h-screen lg:h-screen md:h-full sm:h-full xs:h-full mx-auto px-24 sm:px-10 xs:px-8'>
      <div className='pt-20 flex gap-10 justify-start md:flex-col sm:flex-col xs:flex-col'>
        {isClicked === false ? (
          <div className=' my-auto flex flex-col rounded-md items-center justify-center gap-10 sm:text-3xl xs:text-3xl xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] xs:w-[100%] 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center xs:text-center'>
            <div className='flex gap-10 md:hidden sm:hidden xs:hidden xxs:hidden'>
              <CebuLgu
                width={100}
                height={100}
                className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 fill-current'
              />
              <BoholLgu
                width={100}
                height={100}
                className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 fill-current'
              />
              <AklanLgu
                width={100}
                height={100}
                className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 fill-current'
              />
            </div>
            <div className='flex gap-10 md:hidden sm:hidden xs:hidden xxs:hidden'>
              <AbraLgu
                width={100}
                height={100}
                className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 fill-current'
              />
              <LeyteLgu
                width={100}
                height={100}
                className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 fill-current'
              />
            </div>
          </div>
        ) : (
          // CAROUSEL SECTION
          <div className=' my-auto flex flex-col rounded-md items-center md:hidden sm:hidden xs:hidden xxs:hidden justify-center gap-10 sm:text-3xl xs:text-3xl xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] xs:w-[100%] 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center xs:text-center'>
            <div className='w-full flex flex-col'>
              <button
                className='self-center cursor-pointer'
                onClick={prevSlide}
              >
                <AiFillCaretUp size={20} />
              </button>
              <div className='flex flex-col gap-2 items-center justify-center text-2xl border bg-white drop-shadow-lg rounded-lg  overflow-hidden'>
                {carouselItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: (index - currentSlide) * 100 + '%' }}
                    animate={{ y: (index - currentSlide) * 100 + '%' }}
                    transition={{ type: 'tween' }}
                    className='flex flex-col'
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              <button
                className='self-center cursor-pointer'
                onClick={nextSlide}
              >
                <AiFillCaretDown size={20} />
              </button>
            </div>
          </div>
        )}

        <div className='flex flex-col gap-10 xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] xs:w-[100%] 2xl:text-end xl:text-end lg:text-end md:text-center sm:text-center xs:text-center'>
          <div className='text-5xl flex flex-col gap-4 font-bold sm:text-3xl xs:text-3xl'>
            <h1>Trusted by over 170 local governments nationwide and growing</h1>
            <hr
              style={{
                background: '#1e293b',
                color: '#1e293b',
                borderColor: '#1e293b',
                height: '3px',
              }}
            />
          </div>

          <div className='text-2xl text-end sm:text-lg xs:text-lg 2xl:text-end xl:text-end lg:text-end md:text-center sm:text-center xs:text-center'>
            Local governments rely on E-TRACS to automate processes that maximize revenue generation such as real property assessment, business licensing, and other permitting systems
          </div>
          {isClicked === false ? (
            <div className='flex mt-10 flex-col items-center justify-center md:h-[400px] sm:h-[400px] xs:h-[400px] xxs:h-[400px]'>
              <div className='flex gap-10 2xl:hidden xl:hidden lg:hidden'>
                <CebuLgu
                  width={100}
                  height={100}
                  className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 xs:w-24 xs:h-24 fill-current'
                />
                <BoholLgu
                  width={100}
                  height={100}
                  className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 xs:w-24 xs:h-24 fill-current'
                />
                <AklanLgu
                  width={100}
                  height={100}
                  className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 xs:w-24 xs:h-24 fill-current'
                />
              </div>
              <div className='flex gap-10 2xl:hidden xl:hidden lg:hidden'>
                <AbraLgu
                  width={100}
                  height={100}
                  className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 xs:w-24 xs:h-24 fill-current'
                />
                <LeyteLgu
                  width={100}
                  height={100}
                  className='text-slate-900 w-36 h-36 lg:w-32 lg:h-32 sm:h-32 sm:w-32 xs:w-24 xs:h-24 fill-current'
                />
              </div>
            </div>
          ) : (
            // CAROUSEL SECTION
            <div className='flex mt-10 flex-col rounded-md items-center 2xl:hidden xl:hidden lg:hidden justify-center gap-10 md:h-[400px] sm:h-[400px] xs:h-[400px] xxs:h-[400px] sm:text-3xl xs:text-3xl xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] xs:w-[100%] 2xl:text-start xl:text-start lg:text-start md:text-center sm:text-center xs:text-center'>
            <div className='w-full flex flex-col'>
              <button
                className='self-center cursor-pointer'
                onClick={prevSlide}
              >
                <AiFillCaretUp size={20} />
              </button>
              <div className='flex flex-col gap-2 items-center justify-center text-2xl border bg-white drop-shadow-lg rounded-lg 2xl:hidden xl:hidden lg:hidden overflow-hidden'>
                {carouselItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: (index - currentSlide) * 100 + '%' }}
                    animate={{ y: (index - currentSlide) * 100 + '%' }}
                    transition={{ type: 'tween' }}
                    className='flex flex-col'
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              <button
                className='self-center cursor-pointer'
                onClick={nextSlide}
              >
                <AiFillCaretDown size={20} />
              </button>
            </div>
          </div>
          )}
          <div className='flex mt-10 self-end md:items-center md:self-center sm:items-center sm:self-center xs:items-center xs:self-center'>
            <button
              className='bg-slate-800 hover-bg-black duration-300 p-5 rounded-xl text-white w-[300px] sm:h-[80px] xs:h-[80px] 2xl:text-lg xl:text-lg lg:text-lg md-text-base sm-text-base xs-text-base font-bold'
              onClick={handleClick}
            >
              View members list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
