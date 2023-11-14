import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../components/styles/HomeStyles.css';

const HomePageComponent = (props: any) => {
  return (
    <div>
      <div className='first-container'>
        <div className='content-container'>
          <div className='title-container'>
            <h1 className='margin-bottom'>{props.title}</h1>
            <div className='self-center w-full'>
            <hr 
                style={{
                  background: '#334155',
                  color: '#334155',
                  borderColor: '#334155',
                  height: '3px',
                }}
            />
            </div>
          </div>
    
          <p className='cnt'>{props.content}</p>
          
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='image-container2'
          >
            <div className='image2'>
              <Image
                src={props.imagePath}
                alt='Man Working'
                width={700}
                height={300}
              />
            </div>
          </motion.div>

          <div className='button-container'>
            <button className='try-button'>
              {props.button}
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='image-container'
        >
          <div className='image'>
            <Image
              src={props.imagePath}
              alt='Man Working'
              width={700}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePageComponent