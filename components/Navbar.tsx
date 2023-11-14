import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import RLink from 'next/link';
import { Quicksand } from '@next/font/google';
import { Link, Element, Events, scroller } from 'react-scroll';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill, BsFillBoxFill } from 'react-icons/bs';
import { MdHandshake } from 'react-icons/md';
import { HiLightBulb } from 'react-icons/hi';
import { HiDocumentText } from 'react-icons/hi';
import { useRouter } from 'next/router';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '400',
});

const Navbar = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      setActiveSection(element);
    });

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  const handleScrollToSection = (sectionId: any) => {
    if (currentUrl === '/members') {
      router.push('/');
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 500,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }, 500);
    } else {
      scroller.scrollTo(sectionId, {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <div>
      {currentUrl === '/members' ? (
        <nav className={`fixed w-full h-[5.5rem] 2xl:h-[8.5rem] flex justify-between items-center px-4 z-50 bg-white border-b-2 drop-shadow-sm ${quicksand.className}`}>
          <div>
            <RLink href="/">
              <Image
                className='mt-5 2xl:ml-7 xl:ml-7 lg:ml-7 md:ml-1 sm:ml-0 xs:ml-0'
                src='/assets/etracslogo.png'
                alt="Logo"
                width={200}
                height={100}
              />
            </RLink>
          </div>

          <ul className='2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xxs:hidden xxxs:hidden font-semibold 2xl:text-lg xl:text-lg lg:text-xs text-slate-800 items-center'>
            <li className='px-4 py-2'>
              <Link
                to='home'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => handleScrollToSection('home')}
              >
                <AiFillHome size={15} />
                <button className=''>Home</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <Link
                to='members'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'members' ? 'active' : ''}`}
                onClick={() => handleScrollToSection('members')}
              >
                <BsFillPeopleFill size={15} />
                <button className=''>Members</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <Link
                to='partners'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'partners' ? 'active' : ''}`}
                onClick={() => handleScrollToSection('partners')}
              >
                <MdHandshake size={18} />
                <button className=''>Partners</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <Link
                to='products'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'products' ? 'active' : ''}`}
                onClick={() => handleScrollToSection('products')}
              >
                <BsFillBoxFill size={15} />
                <button className=''>Products</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <Link
                to='turnkey-solutions'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'turnkey-solutions' ? 'active' : ''}`}
                onClick={() => handleScrollToSection('turnkey-solutions')}
              >
                <HiLightBulb size={20} />
                <button className=''>Solutions</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <RLink
                href="/documentation"
                target='__blank'
                className='flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1'
              >
                <HiDocumentText size={18} />
                <button>Documentation</button>
              </RLink>
            </li>

            <li className='2xl:px-4 2xl:py-2 xl:px-4 xl:py-2'>
              <RLink href="/login">
                <button className='hover:bg-blue-500 bg-blue-700 2xl-px-4 xl-px-4 lg-px-3 md-px-2 text-white rounded-lg p-3 duration-500'>
                  Sign In
                </button>
              </RLink>
            </li>

          </ul>
        </nav>
      ) : (
        <nav className={`fixed w-full h-[5.5rem] flex justify-between items-center px-4 z-50 bg-white border-b-2 drop-shadow-sm ${quicksand.className}`}>
          <div>
            <RLink href="/">
              <Image
                className='mt-5 2xl:ml-7 xl:ml-7 lg:ml-7 md:ml-1 sm:ml-0 xs:ml-0'
                src='/assets/etracslogo.png'
                alt="Logo"
                width={200}
                height={100}
              />
            </RLink>
          </div>

          <ul className='2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xxs:hidden xxxs:hidden font-semibold 2xl:text-2xl xl:text-lg lg:text-xs text-slate-800 items-center'>
            <li className='px-4 py-2'>
              <Link
                to='home'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'home' ? 'active' : ''}`}
              >
                <AiFillHome size={15} />
                <button>Home</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <Link
                to='members'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'members' ? 'active' : ''}`}
              >
                <BsFillPeopleFill size={15} />
                <button>Members</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <Link
                to='partners'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'partners' ? 'active' : ''}`}
              >
                <MdHandshake size={18} />
                <button>Partners</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <Link
                to='products'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'products' ? 'active' : ''}`}
              >
                <BsFillBoxFill size={15} />
                <button>Products</button>
              </Link>
            </li>

            <li className='2xl:px-4 2xl:py-2 xl:px-4 xl:py-2'>
              <Link
                to='turnkey-solutions'
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
                activeClass='active'
                className={`flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1 ${activeSection === 'turnkey-solutions' ? 'active' : ''} md:w-[250px]`}
              >
                <HiLightBulb size={20} />
                <button>Solutions</button>
              </Link>
            </li>

            <li className='px-4 py-2'>
              <a
                href="https://niveking.github.io/etracsdocs/"
                target='__blank'
                className='flex justify-center items-center hover:text-blue-500 duration-500 gap-x-1'
              >
                <HiDocumentText size={18} />
                <button>Documentation</button>
              </a>
            </li>
            
            <li className='2xl:px-4 2xl:py-2 xl:px-4 xl:py-2'>
              <RLink href="/login">
                <button className='hover:bg-blue-500 bg-blue-700 2xl-px-4 xl-px-4 lg-px-3 md-px-2 text-white rounded-lg p-3 duration-500'>
                  Sign In
                </button>
              </RLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
