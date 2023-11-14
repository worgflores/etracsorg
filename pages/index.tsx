import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import HomeComponent from '@/components/Home';
import Members from '@/components/Members';
import { Element } from 'react-scroll';
import { 
  Kanit, 
  Poppins, 
  Roboto, 
  Raleway, 
  Mohave, 
  Roboto_Slab, 
  Nunito, 
  Ubuntu, 
  Rubik, 
  Quicksand, 
  Questrial, 
  Almarai, 
  Plus_Jakarta_Sans 
}
 from '@next/font/google';
import Partners from '@/components/Partners';
import Products from '@/components/Products';
import Solutions from '@/components/Solutions';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Messenger from '@/components/Messenger';
import PageComponent from '@/components/HomePageComponent';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const mohave = Mohave({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const robotoslab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const questrial = Questrial({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
})

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const plusjakartasans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

function Home(props: any) {
  return (
    <div className='flex flex-col w-full h-full bg-white'>
        <Head>
          <title>ETRACS</title>
          <meta name='description' content='Created with NextJS' />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='select-none'>
          <Navbar />
          <Sidebar />
        </div>
        <div className={raleway.className}>
          <div className='select-none'>
            <Element name='home' id='home'>
              <HomeComponent />
            </Element>

            <Element name='members' id='members'>
              <Members members={props.members} count={props.memberCount}/>
            </Element>

            <Element name='partners' id='partners'>
              <Partners />
            </Element>

            <Element name='products' id='products'>
              <Products />
            </Element>

            <Element name='turnkey-solutions' id='turnkey-solutions'>
              <Solutions />
            </Element>


            {/* <Messenger /> */}
          </div>
          <Footer />
        </div>
    </div>    
  );
}

export default Home;

export async function getServerSideProps() {
  const apiUrl = 'https://filipizen.com/cloud-server/json/partner/CloudPartnerService.getList';

  try {
    const response = await axios.get(apiUrl);
    const groupedData: { id: string; items: any[] }[] = [];
    response.data.forEach((item: { subtype: string; id: string }) => {
      if (item.subtype !== 'terminal') {
        const existingGroup = groupedData.find((group) => group.id === item.id);

        if (existingGroup) {
          existingGroup.items.push(item);
        } else {
          groupedData.push({ id: item.id, items: [item] });
        }
      }
    });

    return {
      props: {
        members: groupedData,
        memberCount: response.data.length,
      },
    };
  }
  
  catch (error) {
    console.error('API request error:', error);
    return null;
  }
}
