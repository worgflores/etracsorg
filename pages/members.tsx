import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Raleway } from '@next/font/google';
import axios from 'axios';


const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'swap',
})

const Members = (props: any) => {
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(props);

  return (
    <div className={`text-slate-800 select-none ${raleway.className}`}>
      <Head>
        <title>ETRACS | Members</title>
        <meta name='description' content='Created with NextJS' />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <div className='text-xs p-10'>
        <div className='flex justify-between'>
          <h1 className='self-start text-2xl px-5 py-1 font-bold mt-20'>Members: </h1>
        </div>
        {props.members ? (
          <div>
            <div className="p-5">
            <ul className="grid grid-cols-3 gap-5">
              {Object.keys(props.members).map((clusterid) => (
                <li key={clusterid} className="border rounded-md drop-shadow-lg p-5">
                  <h2 className="text-xl font-bold mb-3 grid grid-cols-2 gap-5">
                    <span>
                    {
                      clusterid === 'sarangani' ? 'Sarangani' :
                      clusterid === 'aklan' ? 'Aklan' :
                      clusterid === 'aklanterminal' ? 'Aklan Terminal' :
                      clusterid === 'albay' ? 'Albay' :
                      clusterid === 'antique' ? 'Antique' :
                      clusterid === 'bohol' ? 'Bohol' :
                      clusterid === 'bukidnon' ? 'Bukidnon' :
                      clusterid === 'camsur' ? 'Camarines Sur' :
                      clusterid === 'catanduanes' ? 'Catanduanes' :
                      clusterid === 'cebu' ? 'Cebu' :
                      clusterid === 'davor' ? 'Davao Oriental' :
                      clusterid === 'ddn' ? 'Davao Del Norte' :
                      clusterid === 'ddo' ? 'Davao De Oro' :
                      clusterid === 'gensan' ? 'General Santos' :
                      clusterid === 'guimaras' ? 'Guimaras' :
                      clusterid === 'ilocosnorte' ? 'Ilocos Norte' :
                      clusterid === 'lanaodelnorte' ? 'Lanao Del Norte' :
                      clusterid === 'masbate' ? 'Masbate' :
                      clusterid === 'misoc' ? 'Misamis Occidental' :
                      clusterid === 'misor' ? 'Misamis Oriental' :
                      clusterid === 'negocc' ? 'Negros Occidental' :
                      clusterid === 'negor' ? 'Negros Oriental' :
                      clusterid === 'nuevaecija' ? 'Nueva Ecija' :
                      clusterid === 'nuevavizcaya' ? 'Nueva Vizcaya' :
                      clusterid === 'palawan' ? 'Palawan' :
                      clusterid === 'quezon' ? 'Quezon' :
                      clusterid === 'sorsogon' ? 'Sorsogon' :
                      clusterid === 'surigaodelnorte' ? 'Surigao Del Norte' :
                      clusterid === 'zamboanga' ? 'Zamboanga' :
                      clusterid === 'zdn' ? 'Zamboanga Del Norte' :
                      clusterid
                    }:
                    </span>
                    <span className='font-semibold text-end'>
                      LGU Type:
                    </span>
                  </h2>
                  <ul>
                    {props.members[clusterid].map((item: any) => (
                      <div className='grid grid-cols-2 gap-5' key={`${clusterid}-${item.id}`}> {/* Provide a unique key */}
                        <li className='text-xl pb-3'>{item.title}</li>
                        <li className='text-xl text-end' key={item.id}>{capitalizeFirstLetter(item.subtype)}</li>
                      </div>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          </div>
        ) : ''}
      </div>
      <Footer />
    </div>
  );
};

export default Members;

export async function getServerSideProps() {
  const apiUrl = 'https://filipizen.com/cloud-server/json/partner/CloudPartnerService.getList';

  try {
    const response = await axios.get(apiUrl);
    const groupedData: any = {};

    response.data.forEach((item: any) => {
      if (!groupedData[item.clusterid]) {
        groupedData[item.clusterid] = [];
      }
      groupedData[item.clusterid].push(item);
    });
    return {props: {
      members: groupedData
      } 
    }
  } 
  
  catch (error) {
    console.error('API request error:', error);
    return null;
  }
}