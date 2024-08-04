import React from 'react';
import './WhyKicket.css'
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import ToggleCard from './ToggleCard';
import ResponsiveCard from './ ResponsiveCard';

import TopFooter from './TopFooter'
import Footer from './Footer'
import ResponsiveCarousel from './ResponsiveCarousel';

const WhyKicket=()=>{
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
    const cardData = [
        { title: "Lorem Ipsum Dolor Sit Amet, Consectetur", content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud" },
        { title: "Lorem Ipsum Dolor Sit Amet, Consectetur", content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud" },
        { title: "Lorem Ipsum Dolor Sit Amet, Consectetur", content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud" },
        { title: "Lorem Ipsum Dolor Sit Amet, Consectetur", content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud" },
        { title: "Lorem Ipsum Dolor Sit Amet, Consectetur", content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud" },
      ];
    

    return(
        <div className='Whykicket'>
                <div className="contact-background" style={backgroundImageStyle}>

                <h1>WhyKicket</h1>

            </div>

      <div className="flex-container">
      <Row className="">
        <Col xs={12} md={5} className="image-container">
          <img
            src="/service.png"
            alt="Description"
            className="img-fluid custom-img"
          />
        </Col>
        <Col xs={12} md={6} className="text-container" style={{marginTop:'4rem'}}>
          <h2>Your Heading</h2>
          <p>Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula purus ut sem tincidunt, ut posuere nulla sollicitudin.</p>
        </Col>
      </Row>
    </div>
    <ResponsiveCarousel></ResponsiveCarousel>
    <div className="why-choose-us-container" style={{margin:'20px'}}>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="image-container">
          <img
            src="/whyus.png"
            alt="Why Choose Us"
            className="img-fluid custom-img2"
            style={{ width: '80%', height: 'auto', objectFit: 'cover',  }}
          />
        </Col>
        <Col xs={12} md={6} className="text-container">
        <h2>Why Choose Us</h2>
      {cardData.map((card, index) => (
        <ToggleCard key={index} title={card.title} index={index}>
          {card.content}
        </ToggleCard>
      ))}
   

        </Col>
      </Row>
    </div>

<TopFooter></TopFooter>
<Footer></Footer>
        </div>
    )
}
export default WhyKicket