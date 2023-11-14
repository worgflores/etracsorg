import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Quicksand } from '@next/font/google';
import { signOut } from 'next-auth/react';
import { IoMdClose } from 'react-icons/io';
import { FaCog, FaEdit } from 'react-icons/fa';
import { MdOutlineExitToApp } from 'react-icons/md';
import { motion, AnimatePresence } from "framer-motion";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700']
})

const DashboardNavbar = ({ session }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); 

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };

  const closeButtonClick = () => {
    setIsOpen(false);
    setIsClicked(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsClicked(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // const buttonClasses = ` ${isClicked ? 'border border-blue-400 rounded-full h-18 w-18' : ''}`;

  let fname = session.user.name;
  const nameSplit = fname.split(" ");

  return (
    <div className={`fixed w-full h-[4.5rem] flex justify-between px-4 z-50 bg-white ${quicksand.className} border-b drop-shadow-md`}>
      <div className=''>
        <div className='flex'>
          <Image
            className='2xl:ml-7 xl:ml-7 lg:ml-7 md:ml-1 sm:ml-0 xs:ml-0'
            src='/assets/etracslogo.png'
            alt="Logo"
            width={200}
            height={100}
          />
          {/* <h1 className='flex flex-col items-center justify-center text-3xl -mt-6 font-semibold text-slate-800'>Dashboard</h1> */}
        </div>
      </div>
      <div className='my-auto'>
      {isOpen === true ? (
        <div className='flex items-center p-1 hover:border rounded-full'>
            <Image className='cursor-pointer h-12 w-12' src={session.user?.image || 'default-image-url'} alt="Profile Picture" style={{ borderRadius: '50px' }} />
        </div>
      ) : (
        <div className='flex items-center p-1 hover:border rounded-full'>
          <button onClick={handleButtonClick}>
            <Image className='h-12 w-12' src={session.user?.image || 'default-image-url'} alt="Profile Picture" style={{ borderRadius: '50px' }} />
          </button>
        </div>
      )}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={menuRef}
              className='absolute right-0 mt-2 w-[300px] mx-5 p-4 bg-white border border-gray-300 shadow-md rounded-md flex flex-col gap-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className='flex items-center justify-between'>
                <h1 className='block px-4 text-[13px] self-start place-content-center my-auto'>
                  {session.user ? session.user.email : 'User'}
                </h1>
                <button>
                  <IoMdClose size={20} className='self-end text-slate-800 hover:text-gray-100 hover:border hover:bg-gray-500 rounded-full duration-300 w-7 h-7 p-1' onClick={closeButtonClick} />
                </button>
              </div>

              <h1 className='block px-4 font-semibold self-center'>Hi, {session.user ? nameSplit[0] + '!': 'User'}</h1>
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <Image
                    src={session.user?.image || 'default-image-url'}
                    alt="Profile Picture"
                    className="h-18 w-18 rounded-full"
                  />
                  <Link href='/editprofile'>
                    <button className="absolute bottom-0 right-0 bg-slate-800 hover:bg-slate-600 duration-300 text-white p-1 m-auto rounded-full">
                      <FaEdit size={12} />
                    </button>
                  </Link>

                </div>
              </div>
              <div className='flex items-center justify-center gap-1'>
                <button onClick={() => signOut()} className='block px-1 py-2 text-slate-800 hover:text-gray-400 duration-300 rounded-md w-30 self-center'>
                  <div className='flex items-center'>
                    <Link href='/settings'>
                      <h1>Settings</h1>
                    </Link>
                    <FaCog size={15} className='ml-1' />
                  </div>
                </button>
                <button onClick={() => signOut()} className='block px-1 py-2 text-slate-800 hover:text-gray-400 duration-300 rounded-md w-30 self-center'>
                  <div className='flex items-center'>
                    <h1>Sign out</h1>
                    <MdOutlineExitToApp size={20} className='ml-1' />
                  </div>
                </button>
              </div>


              <div className="flex gap-4 text-xs mt-3 self-center">
                <Link href="/" className="hover:text-blue-800 hover:underline underline-offset-4">
                  Terms of Service
                </Link>
                <p>|</p>
                <Link href="/" className="hover:text-blue-800 hover:underline underline-offset-4">
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default DashboardNavbar;
