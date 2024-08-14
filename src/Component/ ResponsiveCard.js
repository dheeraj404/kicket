import React from 'react';
import './ ResponsiveCard.css';

const ResponsiveCard = ({ image, tagLine, text }) => {
  return (
    <div className="ResponsiveCard-container">
      <div className="ResponsiveCard-imageContainer">
        <img src={image} alt="Card" className="ResponsiveCard-image" />
        <div className="ResponsiveCard-fade"></div>
      </div>
      <div className="ResponsiveCard-content">
        <h5 className="ResponsiveCard-title">{tagLine}</h5>
        <p className="ResponsiveCard-text">{text}</p>
      </div>
    </div>
  );
};

export default ResponsiveCard;
