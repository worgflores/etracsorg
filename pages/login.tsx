import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import { Ubuntu } from '@next/font/google';
import { Nunito } from 'next/font/google';

// import QrCode from '../public/assets/qr-code.png';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const Login = () => {
  // const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (session != null) {
  //     // router.push('/dashboard');
  //     router.push('/profile');
  //   }
  // }, [session]);
  

  return (
    <div className='bg-[#f5f7f2] h-screen'>
      <div className={`w-full 2xl:h-screen xl:h-screen lg:h-screen h-full flex flex-col justify-center items-center py-10 bg-[#f5f7f2] ${nunito.className}`}>
        <Head>
          <title>ETRACS | Login</title>
          <meta name="description" content="Created with NextJS" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <main className="flex flex-col m-auto p-10 gap-4 text-2xl xl:w-[40%] lg:w-[45%] md:w-[60%] sm:w-[60%] xs:w-[60%] h-full drop-shadow-xl bg-white rounded-lg">
          <section className="self-center">
            {/* <div className="flex flex-col">
              <h1 className="font-semibold">Sign In to ETRACS</h1>
              <div className="flex flex-col text-start items-center gap-5">
                <button
                  onClick={() => signIn('google')}
                  className="h-16 w-[300px] text-lg sm:text-sm xs:text-xs flex gap-2 p-5 justify-between mt-12 rounded-full sm:w-[100%] xs:w-[100%] bg-gray-50 hover:bg-slate-600 hover:text-white duration-100 drop-shadow-xl"
                >
                  <h2>Continue with Google</h2>
                  <div className="self-end">
                    <FcGoogle size={25} />
                  </div>
                </button>
                <p className="self-start text-lg px-5 sm:text-sm xs:text-xs">or</p>
                <button
                  onClick={() => signIn('facebook')}
                  className="h-16 w-[300px] text-lg sm:text-sm xs:text-xs flex gap-2 p-5 justify-between rounded-full sm:w-[100%] xs:w-[100%] bg-gray-50 hover:bg-slate-600 hover:text-white duration-100 drop-shadow-xl"
                >
                  <h2>Continue with Facebook</h2>
                  <div className="self-end">
                    <FaFacebook color="#3b5998" size={25} />
                  </div>
                </button>
                <div className="flex gap-4 text-xs mt-3">
                  <Link href="/" className="hover:text-blue-800 hover:underline underline-offset-2">
                    Terms and Conditions
                  </Link>
                  <p>|</p>
                  <Link href="/" className="hover:text-blue-800 hover:underline underline-offset-2">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="flex flex-col items-center justify-center h-full">
              <div className='flex gap-5'>
                <h1 className="font-semibold text-center xl:text-2xl 2xl:text-2xl md:text-lg sm:text-lg xs:text-lg">Sign In to ETRACS</h1>
                {/* <Image 
                src='/assets/filipizen.svg'
                alt='filipizen'
                width={100}
                height={100}/> */}
              </div>

              <div className="flex flex-col text-center items-center">
                <div className="xl:h-64 xl:w-64 lg:w-64 lg:h-64 md:h-54 md:w-54 sm:h-54 sm:w-54 xs:w-54 xs:h-54 xxs:w-44 xxs:h-44 bg-gray-50 drop-shadow-xl flex justify-center items-center">
                  {/* <QrCode alt="QR code" width={190} height={190} /> */}
                    <Image
                      src='/assets/qr-code.png' 
                      alt='QR Code'
                      width={300}
                      height={300}
                    />
                </div>
              </div>
              <h1 className="text-center text-base mt-5 font-semibold">Sign in with QR code</h1>
              <p className="text-center text-sm">scan with the Filipizen app for secured login.</p>

              <div className='grid grid-cols-2 gap-5'>
                <a href="https://play.google.com/store/games" className='hover:scale-105 duration-300' target='__blank'>
                  <Image 
                    src='/assets/google-play-badge.png'
                    alt='filipizen'
                    width={150}
                    height={150}
                    className='my-3 xl:h-12 xl:w-36 lg:w-36 lg:h-12 md:h-12 md:w-32 sm:h-12 sm:w-28 xs:w-24 xs:h-10 xxs:w-24 xxs:h-10'
                    />
                </a>

                <a href="https://www.apple.com/ph/app-store/" className='hover:scale-105 duration-300' target='__blank'>
                  <Image 
                    src='/assets/appstore.png'
                    alt='filipizen'
                    width={150}
                    height={150}
                    className='my-3 xl:h-12 xl:w-36 lg:w-36 lg:h-12 md:h-12 md:w-32 sm:h-12 sm:w-28 xs:w-24 xs:h-10 xxs:w-24 xxs:h-10'
                    />
                </a>
                
                  
              </div>
              
            </div>
          </section>
          <footer className="mt-7 text-center flex flex-col relative">
            <section className="self-start text-xs">
              <Link href="/">
                <button className="hover:text-blue-800 hover:underline underline-offset-2 pb-3">🡸 Back</button>
              </Link>
            </section>
            <hr />
            <p className="text-xs mt-2 sm:text-xxs xs:text-xxs">Copyright &copy; 2023 Rameses Systems Inc. All Rights Reserved</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Login;
