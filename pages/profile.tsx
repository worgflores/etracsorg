// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import { useSession, signIn, signOut } from 'next-auth/react';
// import Link from 'next/link';
// import { Nunito } from 'next/font/google';
// import axios from 'axios';

// const nunito = Nunito({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--poppins-font',
//   style: ['normal', 'italic'],
//   display: 'swap',
// });

// const profile = () => {
//   // state variables
//   const [lgutype, setLgutype] = useState();
//   const [areaType, setAreaType] = useState();
//   const [urlRegionData, setUrlRegionData] = useState<any[]>([])
//   const [urlTypeData, setUrlTypeData] = useState<any[]>([])
//   const [urlTypeData2, setUrlTypeData2] = useState<any[]>([])
//   const [regionCode, setRegionCode] = useState();
//   const [cityCode, setCityCode] = useState();
//   const [municipalityCode, setMunicipalityCode] = useState();
//   const [barangayCode, setBarangayCode] = useState();
//   let regionUrl = 'https://psgc.gitlab.io/api/regions';
//   const [typeUrl, setTypeUrl] = useState('');
//   const [typeUrl2, setTypeUrl2] = useState('');

//   // set typeUrl variable
//   useEffect(() => {
//     if (regionCode != null) {
//       let baseUrl = `https://psgc.gitlab.io/api/regions/${regionCode}`;
  
//       if (lgutype === 'province') {
//         setTypeUrl(`${baseUrl}/provinces`);
//       } 
      
//       else if (lgutype === 'municipality') {
//         setTypeUrl(`${baseUrl}/municipalities`);
//       } 
      
//       else if (lgutype === 'barangay' && areaType === 'city') {
//         setTypeUrl(`${baseUrl}/cities`);
//         setTypeUrl2(`https://psgc.gitlab.io/api/cities/${cityCode}/barangays`);
//         console.log('city');
//       } 
      
//       else if (lgutype === 'barangay' && areaType === 'town') {
//         setTypeUrl(`${baseUrl}/municipalities`);
//         setTypeUrl2(`https://psgc.gitlab.io/api/municipalities/${municipalityCode}/barangays`);
//         console.log('town');
//       } 
      
//       else {
//         setTypeUrl('');
//         setTypeUrl2('');
//       }
//     }
//   }, [lgutype, regionCode, areaType, cityCode, municipalityCode]);
  
  
//   //fetch lgu type input data
//   const handleLgutypeChange = (event: any) => {
//     setLgutype(event.target.value);
//   };

//   //fetch region input data
//   const handleRegionChange = (event: any) => {
//     setRegionCode(event.target.value);
//   }

//   //fetch city input data
//   const handleCityChange = (event: any) => {
//     setCityCode(event.target.value);
//   }

//   //fetch municipality input data
//   const handleMunicipalityChange = (event: any) => {
//     setMunicipalityCode(event.target.value);
//   }

//   const handleBarangayChange = (event: any) => {
//     setBarangayCode(event.target.value);
//   }

//   //fetch area type input data
//   const handleAreaChange = (event: any) => {
//     setAreaType(event.target.value);
//   }

//   // fetch region api data
//   useEffect(() => {
//     axios
//       .get(regionUrl)
//       .then((response) => {
//         const urlData = response.data;
//         setUrlRegionData(urlData);
//               })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [regionUrl]);

//   // fetch lgutype api data
//   useEffect(() => {
//     axios
//       .get(typeUrl)
//       .then((response) => {
//         const urlTypeData = response.data;
//         setUrlTypeData(urlTypeData);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [typeUrl]); 

//   // fetch barangay api data
//   useEffect(() => {
//     axios
//       .get(typeUrl2)
//       .then((response) => {
//         const urlTypeData2 = response.data;
//         setUrlTypeData2(urlTypeData2);
//         console.log(urlTypeData2);
//         console.log(typeof(urlTypeData2));
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [typeUrl2]); 

//   // other variables
//   const { data: session } = useSession();
//   const router = useRouter();
//   const email = session?.user?.email; 

//   const handleSignOut = async () => {
//     await signOut();
//   };

//   // redirect back to login if session is terminated
//   useEffect(() => {
//     if (!session) {
//       router.push('/login');
//     }
//   }, [session, router]);

//   return (
//     <div className='w-full h-full'>
//       <div className={`w-full h-screen md:h-full sm:h-full flex flex-col justify-center items-center bg-[#f5f7f2] ${nunito.className}`}>
//         <Head>
//           <title>Setup Profile</title>
//           <meta name="description" content="Created with NextJS" />
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         </Head>
//         <main className="flex flex-col m-auto px-10 py-7 gap-4 text-2xl xl:w-[60%] lg:w-[80%] md:w-[60%] sm:w-[55%] xs:w-[60%] h-[70%] drop-shadow-xl bg-white rounded-lg">
//           <section className="self-center">
//             <div className="flex flex-col">
//               <h1 className="font-semibold">Complete your ETRACS profile</h1>
//               <div className="flex flex-col text-start items-center py-7 gap-5">
//                 <form action="" className='flex flex-col text-lg gap-y-2'>
//                     <div className='2xl:grid 2xl:grid-cols-2 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:flex md:flex-col gap-y-2  items-center text-base'>
//                         <div className='w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                             <label htmlFor="Name">First Name:</label>
//                             <input type="text" className='border rounded-md px-2 h-8 w-[300px]' required name='Name' placeholder='Your first name' />
//                         </div>
                        
//                         <div className='w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                             <label htmlFor="Name" className='w-[9/12]'>Middle Name: (Optional)</label>
//                             <input type="text" className='border rounded-md px-2 h-8 w-[300px]' name='Name' placeholder='Your middle name' />
//                         </div>
                        
//                         <div className='w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                             <label htmlFor="Name">Last Name: &nbsp;&nbsp;</label>
//                             <input type="text" className='border rounded-md px-2 h-8 w-[300px]' required name='Name' placeholder='Your last name' />
//                         </div>

//                         <div className='w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                             <label htmlFor="Name">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
//                             <input type="text" className='border rounded-md px-2 h-8 w-[300px]' disabled name='Name' placeholder={email ? email : 'Your email'}/>
//                         </div>
    
//                         <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                             <label htmlFor="Name">LGU Type:</label>
//                             <select 
//                                 id="lgutype"
//                                 name="lgutype"
//                                 className="border rounded-md px-2 py-0.5 h-8 w-[300px]"
//                                 value={lgutype}
//                                 onChange={handleLgutypeChange}
//                                 defaultValue={'DEFAULT'}
//                             >
//                                 <option disabled value="DEFAULT">Select type</option>
//                                 <option value="province">Province</option>
//                                 <option value="municipality">Municipality</option>
//                                 <option value="city">City</option>
//                                 <option value="barangay">Barangay</option>
//                             </select>
//                         </div>
//                         {lgutype == null ? (
//                             <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                                 <label htmlFor='Name'>Select Region</label>
//                                 <select 
//                                     id='region' 
//                                     name='region' 
//                                     value={regionCode} 
//                                     className='border rounded-md px-2 py-0.5 h-8 w-[300px]'
//                                     onChange={handleRegionChange}
//                                     defaultValue={'DEFAULT'}
//                                 >
//                                     <option disabled value="DEFAULT">Select Region:</option>
//                                 </select>
//                             </div>

//                         ) : (
//                             <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                                 <label htmlFor='Name'>Select Region</label>
//                                 <select 
//                                     id='region' 
//                                     name='region' 
//                                     value={regionCode} 
//                                     className='border rounded-md px-2 py-0.5 h-8 w-[300px]'
//                                     onChange={handleRegionChange}
//                                     defaultValue={'DEFAULT'}
//                                 >
//                                     <option disabled value="DEFAULT">Select Region</option>
//                                     {urlRegionData.map((region, index) => (
//                                         <option key={index} value={region.code}>
//                                         {region.name}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                         )}
                        
//                         {lgutype === 'province'? 
//                         (
//                             <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                                 <label htmlFor='Name'>Select Province:</label>
//                                 <select id='province' name='province' className='border rounded-md px-2 py-0.5 h-8 w-[300px]' defaultValue={'DEFAULT'}>
//                                     <option disabled value="DEFAULT">Select Province</option>
//                                     {Array.isArray(urlTypeData) && urlTypeData.length > 0 ? (
//                                         urlTypeData.map((province, index) => (
//                                         <option key={index} value={province.code}>
//                                             {province.name}
//                                         </option>
//                                         ))
//                                     ) : (
//                                         <option></option>
//                                     )}

//                                 </select>
//                             </div>
//                         ) : lgutype === 'municipality'? (
//                               <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                                 <label htmlFor='Name'>Select Municipality:</label>
//                                 <select id='municipality' name='municipality' className='border rounded-md px-2 py-0.5 h-8 w-[300px]' defaultValue={'DEFAULT'}>
//                                     <option disabled value="DEFAULT">Select Municipality</option>
//                                     {Array.isArray(urlTypeData) && urlTypeData.length > 0 ? (
//                                         urlTypeData.map((municipality, index) => (
//                                         <option key={index} value={municipality.code}>
//                                             {municipality.name}
//                                         </option>
//                                         ))
//                                     ) : (
//                                         <option></option>
//                                     )}
//                                 </select>
//                             </div>
//                         ) :  lgutype === 'city' ? (
//                             <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                                 <label htmlFor='Name'>Select City:</label>
//                                 <select id='city' name='city' className='border rounded-md px-2 py-0.5 h-8 w-[300px]' defaultValue={'DEFAULT'}>
//                                     <option disabled value="DEFAULT">Select City</option>
//                                     {Array.isArray(urlTypeData) && urlTypeData.length > 0 ? (
//                                         urlTypeData.map((city, index) => (
//                                         <option key={index} value={city.code}>
//                                             {city.name}
//                                         </option>
//                                         ))
//                                     ) : (
//                                         <option></option>
//                                     )}
//                                 </select>
//                             </div>
//                         ) : lgutype === 'barangay' ? (
//                             <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                                 <label htmlFor='Name'>Select Area Type:</label>
//                                 <select 
//                                     id='areatype' 
//                                     name='areatype' 
//                                     className='border rounded-md px-2 py-0.5 h-8 w-[300px]' 
//                                     onChange={handleAreaChange}
//                                     defaultValue={'DEFAULT'}
//                                 >
//                                     <option disabled value="DEFAULT">Select Area Type</option>
//                                     <option value='city'>City</option>
//                                     <option value='town'>Town</option>
//                                 </select>
//                             </div>
                            
                            
//                         ) : ''}
//                         {areaType === 'city' ? 
//                         (
//                             <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                                 <label htmlFor='Name'>Select City:</label>
//                                 <select 
//                                   id='city' 
//                                   name='city' 
//                                   className='border rounded-md px-2 py-0.5 h-8 w-[300px]' 
//                                   defaultValue={'DEFAULT'}
//                                   onChange={handleCityChange}
//                                   >
//                                     <option disabled value="DEFAULT">Select City</option>
//                                     {Array.isArray(urlTypeData) && urlTypeData.length > 0 ? (
//                                         urlTypeData.map((city, index) => (
//                                         <option key={index} value={city.code}>
//                                             {city.name}
//                                         </option>
//                                         ))
//                                     ) : (
//                                         <option></option>
//                                     )}
//                                 </select>
//                             </div>    
//                         ) : areaType === 'town' ? 
//                         (  
//                             <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                               <label htmlFor='Name'>Select Municipality:</label>
//                               <select 
//                                 id='municipality' 
//                                 name='municipality' 
//                                 className='border rounded-md px-2 py-0.5 h-8 w-[300px]' 
//                                 defaultValue={'DEFAULT'}
//                                 onChange={handleMunicipalityChange}
//                                 >
//                                   <option disabled value="DEFAULT">Select Municipality</option>
//                                   {Array.isArray(urlTypeData) && urlTypeData.length > 0 ? (
//                                       urlTypeData.map((municipality, index) => (
//                                       <option key={index} value={municipality.code}>
//                                           {municipality.name}
//                                       </option>
//                                       ))
//                                   ) : (
//                                       <option></option>
//                                   )}
//                               </select>
//                             </div> 
//                         ) : ''}
//                         {areaType === 'city' || areaType === 'town'  ? (
//                               <div className='flex flex-col text-base w-[50%] md:w-[80%] sm:w-[80%] xs:w-[80%] pb-3'>
//                                 <label htmlFor='Name'>Select Barangay:</label>
//                                 <select 
//                                   id='barangay' 
//                                   name='barangay' 
//                                   className='border rounded-md px-2 py-0.5 h-8 w-[300px]' 
//                                   defaultValue={'DEFAULT'}
//                                   onChange={handleBarangayChange}
//                                   >
//                                     <option disabled value="DEFAULT">Select Barangay</option>
//                                     {Array.isArray(urlTypeData2) && urlTypeData2.length > 0 ? (
//                                         urlTypeData2.map((barangay, index) => (
//                                         <option key={index} value={barangay.code}>
//                                             {barangay.name}
//                                         </option>
//                                         ))
//                                     ) : (
//                                         <option></option>
//                                     )}
//                                 </select>
//                             </div> 
//                         ) : ''}
//                         </div>
//                 </form>
//                 <button className='py-2 px-5 text-2xl rounded-lg drop-shadow-sm bg-slate-800 text-white hover:bg-black duration-300'>Submit</button>
//               </div>
//             </div>
            
//           </section>
//           <footer className="mt-7 text-center flex flex-col">
//             <section className="self-start text-xs">
//                 <Link href='/login'>
//                     <button className="hover:text-blue-800 hover:underline underline-offset-2 pb-3" onClick={handleSignOut}>🡸 Back</button>
//                 </Link>
//             </section>
//             <hr />
//             <p className="text-xs mt-2 sm:text-xxs xs:text-xxs">Copyright &copy; 2023 Rameses Systems Inc. All Rights Reserved</p>
//           </footer>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default profile;
import React from 'react'

const profile = () => {
  return (
    <div>profile</div>
  )
}

export default profile