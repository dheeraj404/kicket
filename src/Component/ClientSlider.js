import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ClientSlider.css';

const clients = [
  { id: 1, logo: 'Client.png' },
  { id: 2, logo: 'Client.png' },
  { id: 3, logo: 'Client.png' },
  { id: 4, logo: 'Client.png' },
  { id: 5, logo: 'Client.png' },
  { id: 6, logo: 'Client.png' }, // Add more clients as needed
  { id: 7, logo: 'Client.png' },
  { id: 8, logo: 'Client.png' },
  { id: 9, logo: 'Client.png' },
  { id: 10, logo: 'Client.png' }
];

const ClientSlider = () => {
  return (
    <div className="client-slider-container">
      <h2 className="text-center">Our Clients</h2>
      <Carousel indicators={false} controls={true} interval={null}>
        {clients.slice(0, clients.length / 5).map((_, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              {clients.slice(index * 5, index * 5 + 5).map((client) => (
                <div className="client-logo-container" key={client.id}>
                  <img
                    src={client.logo}
                    alt={`Client ${client.id}`}
                    className="client-logo"
                  />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ClientSlider;
