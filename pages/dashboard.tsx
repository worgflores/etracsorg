// import React from 'react';
// import { useSession, signOut, getSession } from 'next-auth/react';
// import Head from 'next/head';
// import { Poppins } from '@next/font/google';
// import DashboardNavbar from '@/components/DashboardNavbar';
// import DashboardMenu from '@/components/DashboardMenu';

// const poppins = Poppins({
//     subsets: ['latin'],
//     weight: ['400', '700'],
//     variable: '--poppins-font',
//     style: ['normal', 'italic'],
//     display: 'swap',
//   });

// const dashboard = () => {
//   const {data: session, status} = useSession();
  
//   if (status === 'authenticated') {
//     return (
//         <div>
//         <div className={`w-full h-screen flex flex-col items-center bg-[#f5f7f2] pb-5 ${poppins.className}`}>
//           <Head>
//             <title>Dashboard</title>
//             <meta name='description' content='Created with NextJS' />
//             <link rel="icon" href="/favicon.ico" />
//             <link
//               href="https://fonts.gstatic.com"
//               crossOrigin="anonymous"
//             />
//           </Head>
//           <DashboardNavbar session={session} />
//           <div className='flex gap-4 w-full h-full px-6 m-auto'>
//             <DashboardMenu />
//           </div>
//         </div>
//       </div>
//       )
//   }
//   else {
//     return (
//         <div>
//             <p>You are not signed in.</p>
//         </div>
//       )
//   }
// }

// export default dashboard

// export const getServerSideProps = async(context: any) => {
//     const session = await getSession(context)

//     if(!session) {
//         return {
//             redirect: {
//                 destination: '/login'
//             }
//         }
//     }

//     return {
//         props: {session},
//     }
// }

import React from 'react'

const dashboard = () => {
  return (
    <div>dashboard</div>
  )
}

export default dashboard