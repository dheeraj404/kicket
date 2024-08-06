import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WhyKicket.css';
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import ToggleCard from './ToggleCard'
import TopFooter from './TopFooter';
import Footer from './Footer';
import ResponsiveCarousel from './ResponsiveCarousel';

const WhyKicket = () => {
  const [cardData, setCardData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    axios.get('https://kicketapi.webprismits.us/api/selling-points')
      .then(response => {
        setCardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching card data:', error);
      });

    axios.get('https://kicketapi.webprismits.us/api/success-stories')
      .then(response => {
        setCarouselData(response.data);
      })
      .catch(error => {
        console.error('Error fetching carousel data:', error);
      });
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(37, 37, 37, 1)), url(${process.env.PUBLIC_URL}/Whykicket.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <div className='Whykicket'>
      <div className="contact-background" style={backgroundImageStyle}>
        <h1>WhyKicket</h1>
      </div>

      <div className="Whykicket_flex-container">
        <div className="image-container">
          <img
            src="/service.png"
            alt="Description"
            className="img-fluid custom-img"
          />
        </div>
        <div className="text-container">
          <h2>About us</h2>
          <p>Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula purus ut sem tincidunt, ut posuere nulla sollicitudin.</p>
        </div>
      </div>

      <ResponsiveCarousel data={carouselData} />

      <div className="why-choose-us-container" style={{ paddingLeft: '7%', paddingRight: '7%' }}>
        <Row className="align-items-center">
          <Col xs={12} md={5} className="image-container_2">
            <img
              src="/whyus.png"
              alt="Why Choose Us"
              className="img-fluid custom-img2"
              style={{ width: '90%', height: 'auto', objectFit: 'cover' }}
            />
          </Col>
          <Col xs={12} md={7} className="text-container">
            <h2>Why Choose Us</h2>
            {cardData.map((card, index) => (
              <ToggleCard key={card.id} title={card.title} index={index}>
                {card.description}
              </ToggleCard>
            ))}
          </Col>
        </Row>
      </div>

      <TopFooter />
      <Footer />
    </div>
  );
};

export default WhyKicket;
