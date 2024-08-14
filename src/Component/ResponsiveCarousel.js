import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ResponsiveCard from './ ResponsiveCard';
import './ResponsiveCarousel.css';

const ResponsiveCarousel = ({ data }) => {
  // Adjust settings if there's only one item
  const settings = {
    dots: true,
    infinite: data.length > 1,
    speed: 500,
    slidesToShow: data.length > 1 ? 2 : 1, // Show only one slide if there's only one item
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.length > 1 ? 2 : 1,
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
      <div className='ResponsiveCarousel'>
        <Slider {...settings} style={{ width: '100%' }}>
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