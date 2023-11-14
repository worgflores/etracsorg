import React from 'react';
import HomePageComponent from './HomePageComponent';

const Home = () => {
  const attributes = {
    title: 'Accelerating Digital Transformation in Local Government',
    content: 'Get up to speed with the ease of doing business with your LGU',
    button: 'Try our 90-day trial',
    imagePath: '/assets/code.svg',
    componentName: 'home',
  }

  return (
    <HomePageComponent {...attributes} />
  );
};

export default Home;
