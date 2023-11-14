import React from 'react';
import Image from 'next/image';
  
const Partners = () => {
  return (
    <main className='2xl:pt-32 w-full h-screen md:h-full sm:h-full xs:h-full pt-16 2xl:-mt-24 xl:-mt-16 md:pt-32 sm:pt-32 xs:pt-16 xxs:h-full mx-auto px-24 pb-24 text-slate-700'>
        <div className='flex flex-col gap-5 justify-center'>
            <div className='text-5xl sm:text-3xl xs:text-3xl font-bold text-center'>
                Payment Partners
            </div>
            <hr className='self-center 2xl:w-[60%] xl:w-[45%] lg:w-[55%] md:w-[60%] sm:w-[70%] xs:w-[70%]'
                style={{
                background: '#334155',
                color: '#334155',
                borderColor: '#334155',
                height: '3.5px',
                }}
            />
            <div className='text-2xl text-center sm:text-lg xs:text-lg'>
            E-TRACS integrates with reputable partners to provide electronic payment convenience to taxpayers
            </div>
            <figure className='flex md:flex-col sm:flex-col xs:flex-col gap-5 mt-10 justify-center items-center'>

                <div className='p-6 border-2 border-slate-100 bg-slate-100 md:hidden sm:hidden xs:hidden xxs:hidden rounded-lg h-56 w-56 hover:scale-110 duration-300 flex items-center justify-center'>
                    <Image
                        src='/assets/1slide.png'
                        alt=''
                        width={300}
                        height={300}
                        className='h-36 w-56'
                    />
                </div>
                <div className='2xl:hidden xl:hidden lg:hidden gap-10 items-center justify-center m-auto'>
                    <div className='p-6 border-2 border-slate-100 bg-slate-100 rounded-lg h-80 w-80 hover:scale-110 duration-300 flex items-center justify-center'>
                        <Image
                            src='/assets/1slide.png'
                            alt=''
                            width={300}
                            height={300}
                            className='h-56 w-64'
                        />
                    </div>
                </div>

                <div className='p-6 border-2 border-slate-100 bg-slate-100 md:hidden sm:hidden xs:hidden xxs:hidden rounded-lg h-56 w-56 hover:scale-110 duration-300 flex items-center justify-center'>
                    <Image
                        src='/assets/2slide.png'
                        alt=''
                        width={300}
                        height={300}
                        className='h-40 w-56'
                    />
                </div>
                <div className='2xl:hidden xl:hidden lg:hidden gap-10 items-center justify-center m-auto'>
                    <div className='p-6 border-2 border-slate-100 bg-slate-100 rounded-lg h-80 w-80 hover:scale-110 duration-300 flex items-center justify-center'>
                        <Image
                            src='/assets/2slide.png'
                            alt=''
                            width={400}
                            height={300}
                            className='h-60 w-60'
                        />
                    </div>
                </div>

                <div className='p-6 border-2 border-slate-100 bg-slate-100 md:hidden sm:hidden xs:hidden xxs:hidden rounded-lg h-56 w-56 hover:scale-110 duration-300 flex items-center justify-center'>
                    <Image
                        src='/assets/3slide.png'
                        alt=''
                        width={300}
                        height={300}
                        className='h-40 w-56'
                    />
                </div>
                <div className='2xl:hidden xl:hidden lg:hidden gap-10 items-center justify-center m-auto'>
                    <div className='p-6 border-2 border-slate-100 bg-slate-100 rounded-lg h-80 w-80 hover:scale-110 duration-300 flex items-center justify-center'>
                        <Image
                            src='/assets/3slide3z.png'
                            alt=''
                            width={300}
                            height={300}
                            className='h-64 w-64'
                        />
                    </div>
                </div>

                <div className='p-6 border-2 border-slate-100 bg-slate-100 md:hidden sm:hidden xs:hidden xxs:hidden rounded-lg h-56 w-56 hover:scale-110 duration-300 flex items-center justify-center'>
                    <Image
                        src='/assets/4slide.png'
                        alt=''
                        width={300}
                        height={300}
                        className='w-56'
                    />
                </div>
                <div className='2xl:hidden xl:hidden lg:hidden gap-10 items-center justify-center m-auto'>
                    <div className='p-6 border-2 border-slate-100 bg-slate-100 rounded-lg h-80 w-80 hover:scale-110 duration-300 flex items-center justify-center'>
                        <Image
                            src='/assets/4slide.png'
                            alt=''
                            width={300}
                            height={300}
                            className='h-72 w-72'
                        />
                    </div>
                </div>
            </figure>   
        </div>
    </main>
  )
}

export default Partners