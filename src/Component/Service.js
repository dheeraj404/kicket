import React, { useState, useEffect } from "react";
import "./Service.css";
import KeyFeatures from "./KeyFeatures";
import { Container, Row, Col } from "react-bootstrap";
import ServicesSnippets from './ServicesSnippets';
import HomeService from "./HomeService";
import KeyFeatures_Mobile from "./KeyFeatures_Mobile";
import TopFooter from "./TopFooter";
import Footer from "./Footer";
import ResponsiveCarousel from './ResponsiveCarousel'
const Service = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575.98);

  useEffect(() => {
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
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(37, 37, 37, 1)), url(${process.env.PUBLIC_URL}/contect.jpeg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    color: "#fff",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <div className="serivce">
      
      <div className="contact-background" style={backgroundImageStyle}>
        <h1>Services1</h1>
      </div>

      <div className="flex-container">
      <Row className="align-items-center justify-space-around">
        <Col xs={12} md={6} className="image-container">
          <img
            src="/service.png"
            alt="Description"
            className="img-fluid custom-img"
          />
        </Col>
        <Col xs={12} md={6} className="text-container">
          <h2>Your Heading</h2>
          <p>Your paragraph text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula purus ut sem tincidunt, ut posuere nulla sollicitudin.</p>
        </Col>
      </Row>
    </div>
{/* <KeyFeatures_Mobile></KeyFeatures_Mobile> */}
    {/* <KeyFeatures/> */}
    {/* Conditional Rendering based on screen size */}
    {isMobile ? <KeyFeatures_Mobile /> : <KeyFeatures />}
    <ServicesSnippets items={data}/>
   <ResponsiveCarousel></ResponsiveCarousel>
   <TopFooter></TopFooter>
   <Footer></Footer>
    </div>
  );
};
export default Service;
