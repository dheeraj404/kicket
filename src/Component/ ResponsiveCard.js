import React from 'react';
import './ ResponsiveCard.css';

const cardContainerStyle = {
  borderRadius: '15px',
  padding: '20px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  overflow: 'hidden',
  color: 'white',
  textAlign: 'center',
  backgroundColor: 'rgba(37, 37, 37, 1)',
  margin: '20px',
  boxSizing: 'border-box',
};

const imageContainerStyle = {
  position: 'relative',
  borderRadius: '15px 15px 0 0',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

const fadeStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '80%',
  background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
  pointerEvents: 'none',
};

const contentStyle = {
  padding: '20px',
};

const titleStyle = {
  fontFamily: 'Avenir LT Std, sans-serif',
  fontSize: '1.5rem',
  margin: '1rem 0',
};

const textStyle = {
  fontSize: '1rem',
  margin: '0.5rem 0',
  textAlign: 'center',
};

const ResponsiveCard = ({ image, tagLine, text }) => {
  return (
    <div style={cardContainerStyle}>
      <div style={imageContainerStyle}>
        <img src={image} alt="Card" style={imageStyle} />
        <div style={fadeStyle}></div>
      </div>
      <div style={contentStyle}>
        <h5 style={titleStyle}>{tagLine}</h5>
        <p style={textStyle}>{text}</p>
      </div>
    </div>
  );
};

export default ResponsiveCard;
