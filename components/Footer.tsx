import React from 'react';
import Image from 'next/image';
import {FaFacebook, FaLinkedin, FaPhone, FaInstagramSquare} from 'react-icons/fa';
import {AiFillGooglePlusCircle, AiFillTwitterCircle} from 'react-icons/ai';
import Link from 'next/link';


const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className='w-full h-full text-gray-300 drop-shadow-md p-10 bg-slate-800 mx-auto gap-2 footer flex flex-col'>
        <div className='2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 gap-10 justify-center items-center pl-12'>
          <div className='flex flex-col 2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[170px] sm:h-[170px] xs:h-[170px]'>
            <h1 className='underline underline-offset-8 decoration-4 text-md font-extrabold'>GET IN TOUCH</h1>
            <p className='mt-6 text-sm'>Join our mailing list to stay up to date and get notices about our new releases!</p>
            <div className='flex lg:flex-col md:flex-row gap-2 mt-6 items-center'>
              <input type="text" name="email" className='border border-slate-700 lg:w-[100%] md:w-[40%] sm:w-[40%] xs:w-[40%] rounded-xl px-3 py-2 text-black text-xs' placeholder='yourmail@email.com'/>
              <button className='border border-[#E11515] bg-[#E11515] lg:w-[60%] hover:border-[#e46262] hover:bg-[#e46262] duration-300 px-4 py-1 rounded-xl text-white text-sm'>SEND</button>
            </div>

          </div>

          <div className='flex flex-col 2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[150px] sm:h-[150px] xs:h-[150px]' >
            <h1 className='underline underline-offset-8 decoration-4 text-md font-extrabold'>INFORMATION</h1>
            <div className='flex flex-col mt-6 text-sm md:hidden sm:hidden xs:hidden xxs:hidden'>
                <Link href="/" className='duration-300 hover:text-white'>Home</Link>
                <Link href="/" className='duration-300 hover:text-white'>About</Link>
                <Link href="/" className='duration-300 hover:text-white'>Cloud Services</Link>
                <Link href="/" className='duration-300 hover:text-white'>Plugins</Link>
                <Link href="/" className='duration-300 hover:text-white'>Tax Collection Module</Link>
                <Link href="/" className='duration-300 hover:text-white'>Real Property Tax Module</Link>
                <Link href="/" className='duration-300 hover:text-white'>Business Permit and Licensing Module</Link>
            </div>

            <div className='flex gap-24 text-sm 2xl:hidden xl:hidden lg:hidden'>
                <div className='flex flex-col mt-6 text-sm'>
                    <Link href="/" className='duration-300 hover:text-white'>Home</Link>
                    <Link href="/" className='duration-300 hover:text-white'>About</Link>
                    <Link href="/" className='duration-300 hover:text-white'>Cloud Services</Link>
                    
                </div>
                <div className='flex flex-col mt-6 text-sm'>
                    <Link href="/" className='duration-300 hover:text-white'>Plugins</Link>
                    <Link href="/" className='duration-300 hover:text-white'>Tax Collection Module</Link>
                    <Link href="/" className='duration-300 hover:text-white'>Real Property Tax Module</Link>
                    <Link href="/" className='duration-300 hover:text-white'>Business Permit and Licensing Module</Link>
                </div>
            </div>
          </div>

          <div className='flex flex-col 2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[110px] sm:h-[110px] xs:h-[110px]'>
            <h1 className='underline underline-offset-8 decoration-4 text-md font-extrabold'>FOLLOW US</h1>
            <div className='flex gap-2 mt-6'>
              <Link href="/"><FaFacebook className='hover:scale-125 duration-500 hover:text-white' size={30}/></Link>
              <Link href="/"><AiFillTwitterCircle className='hover:scale-125 duration-500 hover:text-white' size={33}/></Link>
              <Link href="/"><AiFillGooglePlusCircle className='hover:scale-125 duration-500 hover:text-white' size={33}/></Link>
              <Link href="/"><FaLinkedin className='hover:scale-125 duration-500 hover:text-white' size={30}/></Link>
              <Link href="/"><FaInstagramSquare className='hover:scale-125 duration-500 2xl:hidden xl:hidden lg:hidden hover:text-white' size={30}/></Link>
            </div>
            <div className='flex gap-2 mt-2 md:hidden sm:hidden xs:hidden xxs:hidden'>
            <Link href="/"><FaInstagramSquare className='hover:scale-125 duration-500 hover:text-white' size={30}/></Link>
            </div>
          </div>
          
          <div className='flex flex-col 2xl:h-[300px] xl:h-[300px] lg:h-[300px] md:h-[250px] sm:h-[250px] xs:h-[250px]'>
            <figure className='flex gap-3'>
            <Image
                className='rounded-2xl -ml-2 lg:w-[50%]'
                src='/assets/etracslogo.png'
                alt='Logo'
                width={100}
                height={200}
              />

            <Image
                className='rounded-2xl lg:w-[50%]'
                src='/assets/image.png'
                alt='Logo'
                width={150}
                height={200}
              />
            </figure>

            <div className='text-start text-sm'>
              E-TRACS (Enhanced Tax Revenue Assessment and Collection System) is a free software package for local government units to improve revenue assessments and tax collection.
              <p className='my-4'><span className='font-bold'>Phone Number: </span>032 231 3230</p>
              <span className='font-bold mt-4'>Email: </span><Link href='mailto:rameses.systems@gmail.com' target='__blank'><span className='duration-300 hover:text-blue-200'>rameses.systems@gmail.com</span></Link>
              <p className='mt-4'><span className='font-bold'>Website: </span><Link href="/" className='duration-300 hover:text-blue-200' target='__blank'>www.ramesesinc.com</Link> </p>
            </div>
          </div>

        </div>
        <div className='flex flex-col 2xl:text-xs xl:text-xs lg:text-xs md:text-[10px] sm:text-[8px] xs:text-[7px] lg:mt-10'>
            <hr
              style={{
              background: 'white',
              color: 'white',
              borderColor: 'white',
              height: '1px',
              }}
            />

            <div className='pt-5 flex'>
            <div className='w-[70%]'>
                © {year} ETRACS - ALL RIGHTS RESERVED RAMESES SYSTEMS INC.
            </div>

            <div className='flex gap-4 justify-end w-[30%]'>
                <Link className='hover:text-white duration-500' href="sitemap">SITEMAP</Link>
                <Link className='hover:text-white duration-500' href="privacy-policy">PRIVACY POLICY</Link>
                <Link className='hover:text-white duration-500' href="contact">CONTACT</Link>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer