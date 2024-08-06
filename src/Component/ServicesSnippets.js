import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './ServicesSnippets.css';

const CarouselComponent = ({ items }) => {
  return (
    <div className='.cc'>
      {/* <div>
        <h1>Client Testimonials</h1>
      </div> */}
    <div className="mt-4 CarouselComponent">
      <h2 className="text-white">Services Snippets</h2>
      <Carousel indicators={false} interval={null}>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-slide">
              <div className="carousel-image">
                <img
                  className="d-block"
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
              <div className="carousel-content">
                <h3 className="carousel-heading">{item.title}</h3>
                <p className="carousel-text">{item.text}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default CarouselComponent;
