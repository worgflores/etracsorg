import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

const store = () => {
  return (
    <div>
      <Head>
        <title>ETRACS | Store </title>
        <meta name='description' content='Created with NextJS' />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
    </div>
  )
}

export default store