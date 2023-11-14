import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/buttonStyles.css';
import '../components/styles/MembersStyle.css';

const Members = (props: any) => {
  const [data, setData] = useState<any[]>([]);
  
  const settingsa = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
  };

  const settingsb = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const NextArrow = ({ onClick }: any) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      Next
    </button>
  );

  const PrevArrow = ({ onClick }: any) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </button>
  );

  useEffect(() => {
    axios
      .get('/api/filipizen')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredData = data.filter((item) => item.id);

  return (
    <Element name='members' id="members" className="members-section">
      <main className="container">
        <div className="content">
          <div className="title">
            <h1 className='title-text'>Trusted by over {data.length} local governments nationwide and growing</h1>
            <hr className='self-center w-full'
                style={{
                background: '#334155',
                color: '#334155',
                borderColor: '#334155',
                height: '3.5px',
                }}
            />
          </div>

          <div className="description">
            <p className='description-text'>Local governments rely on E-TRACS to automate processes that maximize revenue generation such as real property assessment, business licensing, and other permitting systems.</p>
          </div>

          <div className="slider-container">
          <Slider {...settingsa} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
            {filteredData.map((item: any) => (
              <div key={item.id} className="slider-item">
                <div className="slider-content">
                  <figure className="image-container">
                    <Image
                      src={`https://filipizen.com/resources/${item.id}.png`}
                      width={300}
                      height={200}
                      alt={`lgulogo-${item.id}`}
                      className="slider-image"
                    />
                  </figure>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="slider-container2">
          <Slider {...settingsb} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
            {filteredData.map((item: any) => (
              <div key={item.id} className="slider-item">
                <div className="slider-content">
                  <figure className="image-container">
                    <Image
                      src={`https://filipizen.com/resources/${item.id}.png`}
                      width={300}
                      height={200}
                      alt={`lgulogo-${item.id}`}
                      className="slider-image"
                    />
                  </figure>
                </div>
              </div>
            ))}
          </Slider>
        </div>

          <div className="button-container">
            <Link href="/members">
              <button className="custom-button">
                View all members
              </button>
            </Link>
          </div>
        </div>
      </main>
    </Element>
  );
};

export default Members;

