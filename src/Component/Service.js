import React, { useState, useEffect } from "react";
import "./Service.css";
import KeyFeatures from "./KeyFeatures";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import KeyFeatures_Mobile from "./KeyFeatures_Mobile";
import TopFooter from "./TopFooter";
import Footer from "./Footer";
import ResponsiveCarousel from './ResponsiveCarousel'
const Service = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575.98);
  const [carouselData, setCarouselData] = useState([]);
  const [keyFeaturesData, setKeyFeaturesData] = useState([]);
  useEffect(() => {
    axios.get('http://kicketapi.webprismits.us/api/services/1/success-stories')
      .then(response => {
        setCarouselData(response.data);
        setKeyFeaturesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching carousel data:', error);
      });
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 875.98);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const data = [
    {
      image: '/pngwing.png',
      title: 'Dolor It',
      text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum.',
    },
    {
      image: 'https://via.placeholder.com/300x500',
      title: 'Another Service',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    // Add more items as needed
  ];

  return (
    <div className="serivce">
      
      <div className="contact-background_service" >
        <h1>Services1</h1>
      </div>
<div className="Services_second">
      <div className="flex-container">
      <Row className="align-items-center justify-space-around">
        <Col xs={14} md={8} className="image-container">
          <img
            src="/service.png"
            alt="Description"
            className="img-fluid custom-img"
          />
        </Col>
        <Col xs={14} md={8} className="text-container">
          <h2>Your Heading</h2>
          <p>Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula purus ut sem tincidunt, ut posuere nulla sollicitudin.</p>
        </Col>
      </Row>
    </div>
{/* <KeyFeatures_Mobile></KeyFeatures_Mobile> */}
    {/* <KeyFeatures/> */}
    {/* Conditional Rendering based on screen size */}
    {isMobile ? <KeyFeatures_Mobile /> : <KeyFeatures data={keyFeaturesData}/>}
   
   <ResponsiveCarousel data={carouselData}></ResponsiveCarousel>
   <TopFooter></TopFooter>
   <Footer></Footer>
   </div>
    </div>
  );
};
export default Service;
