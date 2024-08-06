import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({  name,image,message, rating }) => {
  const renderStars = () => {
    const starColors = [
      '#FFD700', // Light Gold
      '#FF6347', // Light Red
      '#FFB6C1', // Light Pink
      '#9370DB', // Light Violet
      '#87CEFA', // Light Blue
    ];

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className="star"
          style={{ color: i <= rating ? starColors[i - 1] : '#ccc' }}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="card-header">
        <img src={image} alt="Profile" className="profile-img" />
        <div className="name-rating">
          <h3 className="name">{name}</h3>
          <div className="stars">{renderStars()}</div>
        </div>
      </div>
      <div className="card-body">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
