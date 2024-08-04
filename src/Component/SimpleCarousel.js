import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import './SimpleCarousel.css';

const SimpleCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  function getSlidesToShow() {
    if (window.innerWidth >= 1024) return 3; // Laptops and larger screens
    if (window.innerWidth >= 600) return 2; // Tablets
    return 1; // Mobile devices
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
      setCurrentIndex(0); // Reset to the first slide on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex + slidesToShow >= testimonials.length) {
      setCurrentIndex(0); // Loop back to the start
    } else {
      setCurrentIndex(currentIndex + slidesToShow);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - slidesToShow); // Loop to the end
    } else {
      setCurrentIndex(currentIndex - slidesToShow);
    }
  };

  const visibleSlides = testimonials.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className='SimpleCarousel'>
    <div className='carousel-container_head'>
    <h1>Client Testimonials</h1>
  </div>
    <div className="carousel-container">
     
      <button className="carousel-button prev-button" onClick={prevSlide}>
        &#10094; {/* Unicode for left arrow */}
      </button>
      <div className="carousel-slides">
        {visibleSlides.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imgUrl={testimonial.imgUrl}
            name={testimonial.name}
            rating={testimonial.rating}
            review={testimonial.review}
          />
        ))}
      </div>
      <button className="carousel-button next-button" onClick={nextSlide}>
        &#10095; {/* Unicode for right arrow */}
      </button>
    </div>
    </div>
  );
};

export default SimpleCarousel;
