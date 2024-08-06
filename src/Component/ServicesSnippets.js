import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './ServicesSnippets.css';

const CarouselComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://kicketapi.webprismits.us/api/service-snippets');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="CarouselComponent">
      <h2 className="text-white">Services Snippets</h2>
      <Carousel indicators={false} interval={null}>
        {items.map((item, index) => (
          <Carousel.Item key={item.id}>
            <div className="carousel-slide">
              <div className="carousel-image">
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
              <div className="carousel-content">
                <h3 className="carousel-heading">{item.title}</h3>
                <p className="carousel-text">{item.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
