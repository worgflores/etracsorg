// SidebarMenu.js
import React, {useState} from 'react';
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import RLink from 'next/link';
import '../styles/sidebar.css';
import { Quicksand } from '@next/font/google';
  
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: '400',
})

const Sidebar = () => {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
    setOpen(!isOpen)
    }

    const closeSideBar = () => {
    setOpen(false)
    }
  return (
    <nav className='font-bold 2xl:hidden xl:hidden lg:hidden'>
        <Menu 
            right
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
        >
        <div className={`px-4 z-50 bg-white ${quicksand.className}`}>

        <ul className='flex flex-col font-semibold text-md text-slate-800 items-end justify-end'>
        <li className='px-4 py-2'>
                <Link 
                    onClick={closeSideBar}
                    to='home'
                    href='#home'
                    smooth={true}
                    duration={500}
                >
                    <button className='hover:text-blue-500 duration-500'>
                    Home
                    </button>
                </Link>
            </li>
            <li className='px-4 py-2'>
                <Link 
                    onClick={closeSideBar}
                    to='members'
                    href='#members'
                    smooth={true}
                    duration={500}
                >
                    <button className='hover:text-blue-500 duration-500'>
                    Members
                    </button>
                </Link>
            </li>
            <li className='px-4 py-2'>
                <Link 
                    onClick={closeSideBar}
                    to='payment-partners'
                    href='#payment-partners'
                    smooth={true}
                    duration={500}
                >
                    <button className='hover:text-blue-500 duration-500'>
                    Payment Partners
                    </button>
                </Link>
            </li>
            <li className='px-4 py-2'>
                <Link 
                    onClick={closeSideBar}
                    to='products'
                    href='#products'
                    smooth={true}
                    duration={500}
                >
                    <button className='hover:text-blue-500 duration-500'>
                    Products
                    </button>
                </Link>
            </li>
            <li className='px-4 py-2'>
                <Link 
                    onClick={closeSideBar}
                    to='turnkey-solutions'
                    href='#turnkey-solutions'
                    smooth={true}
                    duration={500}
                >
                    <button className='hover:text-blue-500 duration-500'>
                    Turnkey Solutions
                    </button>
                </Link>
            </li>
            <li className='px-4 py-2'>
                <RLink href="/documentation" target='__blank'>
                    <button className='hover:text-blue-500 duration-500'>
                    Documentation
                    </button>
                </RLink>
            </li>            
            
            <li className='px-4 py-2'>
                <RLink href="/login">
                    <button className='hover:bg-blue-700 bg-blue-500 2xl:px-4 xl:px-4 lg:px-3 md:px-2 text-white rounded-lg p-3 duration-500'>
                    Sign In
                    </button>
                </RLink>
            </li>
        </ul>
    </div>
        </Menu>
    </nav>
    
  );
};

export default Sidebar;
