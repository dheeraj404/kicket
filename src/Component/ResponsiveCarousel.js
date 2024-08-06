import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ResponsiveCard from './ ResponsiveCard';
import './ResponsiveCarousel.css';

const ResponsiveCarousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div style={{ padding: '6%' }}>
      <div><h1 style={{ color: 'white' }} className='ResponsiveCarousel_head'>Success Stories</h1></div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Slider {...settings} style={{ width: '100%' }} className='ResponsiveCarousel'>
          {data.map((item, index) => (
            <div key={item.id}>
              <ResponsiveCard
                image={item.image}
                tagLine={item.title}
                text={item.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
