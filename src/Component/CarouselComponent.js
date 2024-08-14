


import React from 'react';
import Slider from 'react-slick';
import './CarouselComponent.css'; // Make sure to import the stylesheet

const CarouselComponent = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
   
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={`https://kicketapi.webprismits.us/assets/stories/${item.image}`} alt={item.title} className="carousel-image" />
            <div className="text-overlay">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
         
        ))}
      
      </Slider>
    </div>
  );
};

export default CarouselComponent;
